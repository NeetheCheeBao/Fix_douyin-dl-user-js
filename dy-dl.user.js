// ==UserScript==
// @name            抖音下载
// @namespace       https://github.com/zhzLuke96/douyin-dl-user-js
// @version         1.0.3
// @description     为web版抖音增加下载按钮
// @author          zhzluke96
// @match           https://*.douyin.com/*
// @icon            https://www.google.com/s2/favicons?sz=64&domain=douyin.com
// @grant           none
// @license         MIT
// @updateURL       https://github.com/zhzLuke96/douyin-dl-user-js/raw/main/dy-dl.user.js
// @downloadURL     https://github.com/zhzLuke96/douyin-dl-user-js/raw/main/dy-dl.user.js
// @supportURL      https://github.com/zhzLuke96/douyin-dl-user-js/issues
// ==/UserScript==

(function () {
  "use strict";

  /**
   *
   * @param node {HTMLElement}
   * @returns {HTMLElement}
   */
  function findImage(node) {
    let img;
    while (node) {
      img = node.querySelector("img");
      if (img) return img;
      node = node.parentNode;
    }
    return img;
  }

  /**
   *
   * @param html {string}
   * @returns {HTMLElement}
   */
  function render_html(html) {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.children[0];
  }

  /**
   *
   * @param imgSrc {string}
   * @param filename_input {string}
   */
  async function download_file(imgSrc, filename_input = "") {
    if (imgSrc.startsWith("//")) {
      const protocol = window.location.protocol;
      imgSrc = `${protocol}${imgSrc}`;
    }
    const url = new URL(imgSrc);
    const response = await fetch(imgSrc);
    if (!response.ok) {
      alert("Failed to fetch the file");
      return;
    }
    const contentType = response.headers.get("content-type");
    const fileExt = contentType.split("/")[1].toLowerCase() ?? ".jpeg";
    let filename =
      filename_input || url.pathname.split("/").pop() || "download";
    if (filename.endsWith(".image")) {
      // 去掉 .image 路由参数，一部分图片会走这个路由，去掉，我们使用从resp中拿到的 fileExt
      filename = filename.slice(0, -".image".length);
    }
    if (!filename.toLowerCase().endsWith(fileExt.toLowerCase())) {
      filename += `.${fileExt}`;
    }
    const blob = await response.blob();
    const link = document.createElement("a");
    link.style.display = "none";
    link.download = filename;
    link.href = URL.createObjectURL(blob);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
  }

  // 创建一个 MutationObserver 来观察 DOM 变化
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      // 遍历新增的节点
      mutation.addedNodes.forEach(
        (
          /**
           * @type {HTMLElement}
           */
          node
        ) => {
          // 确保新增节点是 tooltip
          if (node.nodeType !== Node.ELEMENT_NODE) {
            return;
          }
          if (node.classList.contains("semi-portal")) {
            const tooltipNode = node.querySelector(".semi-tooltip-wrapper");
            if (tooltipNode) {
              // 调用处理函数，添加按钮
              setTimeout(() => {
                handleTooltip(tooltipNode);
              });
            }
          }
          if (
            node.parentElement === document.body &&
            node.classList.length === 0
          ) {
            // 全屏 modal
            setTimeout(() => {
              handleModal(node);
            });
          }
          if (node.localName === "xg-controls") {
            handleXgControl(node);
          }
        }
      );
    });
  });

  function handleModal(modalNode) {
    // 全屏 modal
    const close_icon = modalNode.querySelector("#svg_icon_ic_close");
    const img = modalNode.querySelector("img");
    const container = img?.parentElement;
    if (!close_icon || !img || !container) return;
    // 在 icon 前面增加一个下载按钮
    const downloadButton = document.createElement("div");
    downloadButton.textContent = "下载图片";
    downloadButton.className = "LV01TNDE";
    downloadButton.addEventListener("click", () => {
      const imgSrc = img.src;
      download_file(imgSrc);
    });
    downloadButton.style.position = "absolute";
    downloadButton.style.bottom = "35px";
    downloadButton.style.right = "35px";
    downloadButton.style.color = "#fff";
    downloadButton.style.fontSize = "16px";
    container.appendChild(downloadButton);
  }

  // 处理 tooltip 节点的逻辑
  function handleTooltip(tooltipNode) {
    const tooltipContent = tooltipNode.querySelector(".semi-tooltip-content");
    if (!tooltipContent) return;

    // 确认是否包含 "添加到表情"
    if (!tooltipContent.textContent.includes("添加到表情")) return;

    // 从父节点查找 img 节点
    const imgNode = findImage(tooltipNode);
    if (!imgNode.src) return;

    // 如果按钮已存在，则不重复添加
    if (tooltipContent.querySelector(".download-button")) return;

    // 创建下载按钮
    const downloadButton = document.createElement("div");
    downloadButton.textContent = "下载表情包";
    downloadButton.className = "LV01TNDE";

    // 添加下载事件
    downloadButton.addEventListener("click", () => {
      const imgSrc = imgNode.src;
      download_file(imgSrc);
    });

    // 将按钮添加到 tooltip
    tooltipContent.appendChild(downloadButton);
  }

  // 开始观察文档的 DOM 变化
  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  console.log("[dy-dl]已启动");

  /**
   *
   * @param {string} bigintStr
   */
  function toShortId(bigintStr) {
    try {
      return BigInt(bigintStr).toString(36);
    } catch (error) {
      return bigintStr;
    }
  }

  /**
   * 文件名
   *
   * [nickname] + [short_id] + [tags] + [desc]
   * max length: 64
   *
   * @param {import("./types").DouyinMedia.MediaRoot} media
   */
  function build_filename(media) {
    const {
      authorInfo: { nickname },
      awemeId,
      desc,
      textExtra,
    } = media;
    const short_id = toShortId(awemeId);
    const tag_list = textExtra.map((x) => x.hashtagName);
    const tags = tag_list.map((x) => "#" + x).join("_");
    let rawDesc = desc;
    // 去除 desc 中的 tag
    tag_list.forEach((t) => {
      rawDesc = rawDesc.replace(`#${t}`, "");
    });
    rawDesc = rawDesc.trim();
    // NOTE: 这里没有关注特殊字符的原因是浏览器一般能自动处理
    return `${nickname}_${short_id}_${tags}_${rawDesc}`.slice(0, 64);
  }

  // ========== 视频下载 =============

  /**
   * @type {{
   *   player: import("./types").DouyinPlayer.PlayerInstance | null,
   *   current_media: import("./types").DouyinMedia.MediaRoot | null
   * }}
   */
  const downloader_status = {
    player: null,
    current_media: null,
  };
  function bind_player_events() {
    const { player } = downloader_status;
    if (!player) return;
    const update = () => {
      // 更新当前视频
      downloader_status.current_media = player.config.awemeInfo;
    };
    update();
    player.on("play", update);
    player.on("seeked", update);
  }
  async function start_detect_player_change() {
    while (1) {
      if (downloader_status.player !== window.player) {
        downloader_status.player = window.player;
        bind_player_events();
        // console.log(`[dy-dl] player changed: ${downloader_status.player}`);
      }
      await new Promise((r) => setTimeout(r, 1000));
    }
  }
  start_detect_player_change();

  const download_current_media = async () => {
    if (!downloader_status.current_media) return;
    const { video, images } = downloader_status.current_media;
    const filename = build_filename(downloader_status.current_media);
    const video_url =
      video?.playerApi ?? video?.playerAddr ?? video.bitRateList?.[0]?.playApi;
    if (video_url) {
      // download video
      download_file(video_url, filename);
      return;
    }
    if (images) {
      // 下载图集
      // TODO 要是能支持 zip 打包会更好一点
      for (let idx = 0; idx < images.length; idx++) {
        const image = images[idx];
        // 包含视频的图集
        const video = image?.video;
        if (video) {
          const video_url =
            video?.playApi ??
            video.playAddr?.[0]?.src ??
            video.bitRateList[0]?.playApi;
          await download_file(video_url, `${filename}_${idx}`);
          continue;
        }
        // 单纯的图片图集
        const img_url = image?.urlList?.[0];
        if (!img_url) continue;
        await download_file(img_url, `${filename}_${idx}`);
      }
      return;
    }
    alert("[dy-dl]无法下载当前视频，尝试刷新、暂停、播放等操作后重试。");
  };
  /**
   *
   * @param {HTMLElement} xg_control_node
   * @returns
   */
  function handleXgControl(xg_control_node) {
    const right_gird = xg_control_node.querySelector(".xg-right-grid");
    if (!right_gird) return;
    const downloadButton = render_html(`
<xg-icon class="xgplayer-playback-setting" data-state="normal" data-index="6"><div class="xgplayer-setting-playbackRatio">下载</div><div class="xgplayer-slider xgplayer-box-douyin "><div class="xgplayer-setting-content"><div class="xgplayer-playratio-wrap"><div data-id="0.75" class="xgplayer-playratio-item">0.75x</div><div data-id="1.0" class="select xgplayer-playratio-item">1.0x</div><div data-id="1.25" class="xgplayer-playratio-item">1.25x</div><div data-id="1.5" class="xgplayer-playratio-item">1.5x</div><div data-id="1.75" class="xgplayer-playratio-item">1.75x</div><div data-id="2.0" class="xgplayer-playratio-item">2.0x</div><div data-id="3.0" class="xgplayer-playratio-item">3.0x</div></div></div></div></xg-icon>
`);
    downloadButton.addEventListener("click", download_current_media);
    right_gird.appendChild(downloadButton);
  }
})();
