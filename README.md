# douyin-dl-user-js

## 针对1.2.7版本修改

主要更新说明：<p>
1.增强了_get_video_urls方法，使其能够从更多可能的字段获取视频 URL，包括：<p>
&emsp;&emsp;新增对mainUrl、videoUrl、encryptUrl的支持<p>
&emsp;&emsp;增加了对h265Url、hdUrl等高清视频字段的支持<p>
&emsp;&emsp;对bitRateList按比特率排序，优先选择高分辨率视频<p>
&emsp;&emsp;尝试解码可能的加密 URL<p>
&emsp;&emsp;优先选择 HTTPS 链接<p>
2.修改了download_file方法，确保高分辨率 URL 优先尝试，同时保持 URL 顺序<p>
3.增强了prepare_download_file方法，支持自定义请求头，添加了 Referer 和 User-Agent 以绕过某些服务器限制<p>
