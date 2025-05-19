// ==UserScript==
// @name            抖音下载
// @namespace       https://github.com/zhzLuke96/douyin-dl-user-js
// @version         1.0.5
// @description     为web版抖音增加下载按钮
// @author          zhzluke96
// @match           https://*.douyin.com/*
// @icon            https://www.google.com/s2/favicons?sz=64&domain=douyin.com
// @grant           none
// @license         MIT
// @supportURL      https://github.com/zhzLuke96/douyin-dl-user-js/issues
// @downloadURL https://update.greasyfork.org/scripts/522326/%E6%8A%96%E9%9F%B3%E4%B8%8B%E8%BD%BD.user.js
// @updateURL https://update.greasyfork.org/scripts/522326/%E6%8A%96%E9%9F%B3%E4%B8%8B%E8%BD%BD.meta.js
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
   * @param {Blob} blob
   */
  async function convertWebPToPNG(blob) {
    // 创建一个图像对象来加载WebP
    const img = new Image();
    img.src = URL.createObjectURL(blob);

    await new Promise((resolve, reject) => {
      img.onload = resolve;
      img.onerror = reject;
    });

    // 创建canvas来转换图像
    const canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    // 将图像绘制到canvas
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    // 释放原始Blob URL
    URL.revokeObjectURL(img.src);

    return new Promise((resolve) => {
      // 将canvas转换为PNG Blob
      canvas.toBlob((pngBlob) => {
        resolve(pngBlob);
      }, "image/png");
      canvas.onerror = (e) => {
        console.error("WebP转PNG失败，回退到原格式:", e);
        resolve(blob);
      };
    });
  }

  /**
   * 预下载文件
   *
   * PS: 这一步其实没有下载，而是通过浏览器的缓存读取了
   * PSS: 并且如果浏览器没有缓存，似乎会报错，因为server那边会校验cookie，我们没带上（现在不知道要带上什么...在js里也没法重放请求...）
   *
   * @param imgSrc {string}
   * @param filename_input {string}
   */
  async function prepare_download_file(imgSrc, filename_input = "") {
    if (imgSrc.startsWith("//")) {
      const protocol = window.location.protocol;
      imgSrc = `${protocol}${imgSrc}`;
    }
    const url = new URL(imgSrc);
    const response = await fetch(imgSrc);
    if (!response.ok) {
      alert("Failed to fetch the file");
      return { ok: false };
    }
    const contentType = response.headers.get("content-type");
    const isImage = contentType.startsWith("image/");
    const isWebP = contentType.includes("webp");
    const fileExt = isImage
      ? isWebP
        ? "png"
        : contentType.split("/")[1].toLowerCase()
      : contentType.split("/")[1].toLowerCase() ?? ".jpeg";

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
    let pngBlob = null;

    // 如果是WebP图片，转换为PNG
    if (isImage && isWebP) {
      try {
        pngBlob = await convertWebPToPNG(blob);
      } catch (error) {
        console.error("[dy-dl]WebP转PNG失败", error);
      }
    }

    return { blob, filename, isImage, isWebP, pngBlob, fileExt, ok: true };
  }

  /**
   *
   * @param {Blob} blob
   * @param {string} filename
   */
  async function download_blob(blob, filename) {
    const link = document.createElement("a");
    link.style.display = "none";
    link.download = filename;
    link.href = URL.createObjectURL(blob);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
  }

  /**
   *
   * 下载文件流程:
   *
   * 1. 预下载为 blob ，读取元信息
   * 2. 如果是 webp 图片，尝试转为 png 图片
   * 3. 下载 blob
   *
   * @param source {string}
   * @param filename_input {string}
   * @param fallback_src {string[]} 比如其他分辨率
   */
  async function download_file(source, filename_input = "", fallback_src = []) {
    // 这里是为了兼容，下个版本会改为 class 形式用类实现
    let url_sources = [source, ...fallback_src].filter(
      (x) => typeof x === "string"
    );
    url_sources = Array.from(new Set(url_sources));
    for (const url of url_sources) {
      let blob, pngBlob, filename;
      try {
        const result = await prepare_download_file(url, filename_input);
        blob = result.blob;
        pngBlob = result.pngBlob;
        filename = result.filename;
        if (!result.ok) {
          console.error(`[dy-dl]预下载失败，将重试其他地址: ${url}`);
          continue;
        }
      } catch (error) {
        console.error(`[dy-dl]预下载失败，将重试其他地址: ${url}`);
        continue;
      }
      if (pngBlob) {
        try {
          await download_blob(pngBlob, filename);
          return; // 只需要下载一次，所以直接退出
        } catch (error) {
          console.error(`[dy-dl]下载png失败，回退原始版本`);
        }
      }
      try {
        await download_blob(blob, filename);
        return; // 只需要下载一次，所以直接退出
      } catch (error) {
        console.error(`[dy-dl]下载blob失败，回退其他版本`);
        continue;
      }
    }
    alert(`[dy-dl]所有尝试下载都失败，请刷新重试`);
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
   *  player: import("./types").DouyinPlayer.PlayerInstance | null,
   *  current_media: import("./types").DouyinMedia.MediaRoot | null,
   *  downloading: boolean,
   *  $btn: HTMLElement | null,
   * }}
   */
  const downloader_status = {
    player: null,
    current_media: null,
    downloading: false,
    $btn: null,
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

  function flag_start_download() {
    downloader_status.downloading = true;
    const { $btn } = downloader_status;
    if ($btn) {
      // TODO: progress
    }
    return () => {
      downloader_status.downloading = false;
      if ($btn) {
        // TODO: progress
      }
    };
  }

  function lock_download(download_fn) {
    return async () => {
      if (downloader_status.downloading) {
        alert("[dy-dl]正在下载中...请稍等或刷新页面");
        return;
      }
      const out = flag_start_download();
      try {
        await download_fn();
      } finally {
        await new Promise((r) => setTimeout(r, 300));
        out();
      }
    };
  }

  /**
   * 从 video 对象上取得所有 url
   *
   * TODO: 这里其实还有编码 256 没有取
   * TODO: 不同 url 代表不同分辨率，现在我们也还没区分
   *
   * @param {import("./types").DouyinMedia.DouyinPlayerVideo} video_obj
   */
  function get_video_urls(video_obj) {
    if (video_obj === null || video_obj === undefined) {
      return [];
    }
    const sources = [];
    if (video_obj.playApi) {
      // 这个一般是最可用的
      sources.push(video_obj.playApi);
    }
    if (Array.isArray(video_obj.playAddr)) {
      sources.push(...video_obj.playAddr.map((x) => x.src));
    }
    if (video_obj.bitRateList) {
      video_obj.bitRateList.forEach((x) => {
        sources.push(x.playApi);
      });
    }
    return Array.from(new Set(sources));
  }

  /**
   * 抖音作品有两种形式：
   * 1. 单图、单视频
   * 2. 图集
   *
   * 如果是图集形式，必须从 images 这个数组里面取字段，其他字段都有可能是 fallback 值
   */
  const _download_current_media = async () => {
    if (!downloader_status.current_media) return;
    const { video, images } = downloader_status.current_media;
    const filename = build_filename(downloader_status.current_media);
    if (Array.isArray(images) && images.length !== 0) {
      // 下载图集
      // TODO 要是能支持 zip 打包会更好一点
      for (let idx = 0; idx < images.length; idx++) {
        const image = images[idx];
        // 包含视频的图集
        const video = image?.video;
        if (video) {
          const video_urls = get_video_urls(video);
          if (video_urls.length === 0) {
            // 这里取不到url可能代表了数据错误 直接跳过
            console.warn("[dy-dl]似乎遇到了错误数据，跳过下载", video);
            continue;
          }
          await download_file(video_urls[0], `${filename}_${idx}`, video_urls);
          continue;
        }
        // 单纯的图片图集
        const img_url = image?.urlList?.[0];
        if (!img_url) continue;
        await download_file(img_url, `${filename}_${idx}`, image.urlList);
      }
      return;
    } else {
      const video_urls = get_video_urls(video);
      if (video_urls.length !== 0) {
        // download video
        download_file(video_urls[0], filename, video_urls);
        return;
      }
    }
    alert("[dy-dl]无法下载当前视频，尝试刷新、暂停、播放等操作后重试。");
  };
  const download_current_media = lock_download(_download_current_media);
  /**
   *
   * @param {HTMLElement} xg_control_node
   * @returns
   */
  function handleXgControl(xg_control_node) {
    const right_gird = xg_control_node.querySelector(".xg-right-grid");
    if (!right_gird) return;
    const downloadButton = render_html(`
<xg-icon class="xgplayer-autoplay-setting automatic-continuous" data-state="normal" data-index="9">
  <div class="xgplayer-icon" data-e2e="video-player-auto-play" data-e2e-state="video-player-no-auto-play">
    <div class="xgplayer-setting-label">
      <span class="xgplayer-setting-title">下载</span>
    </div>
  </div>
  <div class="xgTips"><span>保存本地</span><span class="shortcutKey">M</span></div>
</xg-icon>
`);
    downloadButton.addEventListener("click", download_current_media);
    right_gird.appendChild(downloadButton);
  }

  // **** 快捷键 ****
  /**
   *
   * @param {string} key
   * @param {Function} fn
   */
  function addHotkeyHook(key, fn) {
    document.addEventListener("keydown", (ev) => {
      if (ev.key.toLowerCase() !== key) return;
      const activeElement = document.activeElement;
      const isInputElement =
        activeElement.tagName === "INPUT" ||
        activeElement.tagName === "TEXTAREA" ||
        activeElement.isContentEditable;
      if (isInputElement) return;
      ev.preventDefault();
      fn();
    });
  }
  addHotkeyHook("m", download_current_media);
})();
