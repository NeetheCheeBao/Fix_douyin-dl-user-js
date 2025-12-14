# douyin-dl-user-js

### 针对1.2.7版本修改

**修改说明**
```text
1.增强了_get_video_urls方法，使其能够从更多可能的字段获取视频 URL，包括：
  新增对mainUrl、videoUrl、encryptUrl的支持
  增加了对h265Url、hdUrl等高清视频字段的支持
  对bitRateList按比特率排序，优先选择高分辨率视频
  尝试解码可能的加密 URL
  优先选择 HTTPS 链接
2.修改了download_file方法，确保高分辨率 URL 优先尝试，同时保持 URL 顺序
3.增强了prepare_download_file方法，支持自定义请求头，添加了 Referer 和 User-Agent 以绕过某些服务器限制
```

**主要代码**
```JavaScript
// 修改 MediaHandler 类中的 _get_video_urls 方法以支持高分辨率视频
_get_video_urls(video_obj) {
  if (!video_obj) return [];
  
  const sources = [];
  
  // 1. 处理新的视频源结构 - 优先高分辨率
  if (video_obj.bitRateList && Array.isArray(video_obj.bitRateList)) {
    // 按比特率排序，优先选择高分辨率
    const sortedBitRates = [...video_obj.bitRateList].sort((a, b) => 
      (b.bitRate || 0) - (a.bitRate || 0)
    );
    
    sortedBitRates.forEach(item => {
      if (item.playApi) sources.push(item.playApi);
      if (item.videoUrl) sources.push(item.videoUrl);
      if (item.mainUrl) sources.push(item.mainUrl);
      
      // 处理可能的加密URL
      if (item.encryptUrl && typeof item.encryptUrl === 'string') {
        try {
          // 尝试解码可能的加密URL
          const decoded = atob(item.encryptUrl);
          sources.push(decoded);
        } catch (e) {
          console.log('无法解码加密URL:', e);
          sources.push(item.encryptUrl);
        }
      }
    });
  }
  
  // 2. 处理传统视频源
  if (video_obj.playApi) sources.push(video_obj.playApi);
  if (video_obj.mainUrl) sources.push(video_obj.mainUrl);
  if (video_obj.videoUrl) sources.push(video_obj.videoUrl);
  
  // 3. 处理播放地址数组
  if (Array.isArray(video_obj.playAddr)) {
    video_obj.playAddr.forEach(addr => {
      if (addr.src) sources.push(addr.src);
      if (addr.url) sources.push(addr.url);
    });
  }
  
  // 4. 处理额外可能的视频源字段
  if (video_obj.h265Url) sources.push(video_obj.h265Url);
  if (video_obj.hdUrl) sources.push(video_obj.hdUrl);
  if (video_obj.sdUrl) sources.push(video_obj.sdUrl);
  if (video_obj.ldUrl) sources.push(video_obj.ldUrl);
  
  // 5. 处理可能的URL数组
  if (Array.isArray(video_obj.urlList)) {
    sources.push(...video_obj.urlList);
  }
  
  // 过滤空值并去重
  return Array.from(new Set(sources.filter(Boolean)))
    // 优先HTTPS链接
    .sort(url => url.startsWith('https') ? -1 : 1);
}

// 同时修改 download_file 方法中的重试逻辑，确保优先尝试高分辨率URL
async download_file(source, filename_input = "", fallback_src = []) {
  // 合并并去重URL，保持原始排序（高分辨率优先）
  let url_sources = [source, ...fallback_src]
    .filter(x => typeof x === "string" && x.length > 0);
  
  // 移除重复项但保持顺序
  const uniqueUrls = [];
  const seen = new Set();
  for (const url of url_sources) {
    if (!seen.has(url)) {
      seen.add(url);
      uniqueUrls.push(url);
    }
  }
  url_sources = uniqueUrls;

  let firstAttemptFailedMessage = "";

  for (const [index, url] of url_sources.entries()) {
    // 尝试添加Referer头以绕过某些限制
    try {
      const result = await this.prepare_download_file(url, filename_input, {
        headers: {
          'Referer': 'https://www.douyin.com/'
        }
      });
      // 其余逻辑保持不变...
    } catch (error) {
      console.error(`[dy-dl]下载失败，尝试下一个URL: ${url}`, error);
      continue;
    }
  }

  // 错误处理保持不变...
}

// 修改 prepare_download_file 方法以支持请求头
async prepare_download_file(imgSrc, filename_input = "", fetchOptions = {}) {
  if (imgSrc.startsWith("//")) {
    const protocol = window.location.protocol;
    imgSrc = `${protocol}${imgSrc}`;
  }
  
  const url = new URL(imgSrc);
  // 合并默认选项和传入的选项
  const options = {
    headers: {
      'User-Agent': navigator.userAgent,
      'Accept': '*/*',
      ...(fetchOptions.headers || {})
    },
    ...fetchOptions
  };
  
  const response = await fetch(imgSrc, options);
  // 其余逻辑保持不变...
}
```
