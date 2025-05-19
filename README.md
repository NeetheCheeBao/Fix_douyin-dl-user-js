# douyin-dl-user-js

抖音 web 端下载拓展

## Features

- [x] 无水印视频下载
- [x] 下载快捷键 [M]
- [x] 图集下载 (暂时没支持打包下载，所以会直接下载多个图片)
- [x] 评论区图片下载
- [x] 表情包下载
- [ ] ~~批量下载打包为 zip~~ (不支持)

## Usage

安装后，会在对应位置添加下载按钮。

视频下载按钮

> 视频播放器控制条中【下载】按钮
> 快捷键： 按下 M 键将下载当前视频/图片

![video](https://github.com/zhzLuke96/douyin-dl-user-js/raw/main/docs/video_btn.jpg)

图片下载按钮

> (点开图片之后右下角【下载图片】)

![image](https://github.com/zhzLuke96/douyin-dl-user-js/raw/main/docs/image_btn.jpg)

表情包下载按钮

> 表情包右键菜单中

![sticker](https://github.com/zhzLuke96/douyin-dl-user-js/raw/main/docs/sticker_btn.jpg)

## Change log

- 250519 1.0.5 增加 webp 转 png 功能 #5 / 增强错误处理
- 250326 1.0.4 增加下载快捷键 [M] / 增加重复下载拦截
- 250114 1.0.3 优化文件名适配性/增加类型
- 241231 1.0.2 支持包含视频的图集

## LICENSE

MIT
