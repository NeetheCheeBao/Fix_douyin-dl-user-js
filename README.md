# douyin-dl-user-js

抖音 web 端下载拓展

## Features

- [x] 无水印视频下载
- [x] 下载快捷键 [M]
- [x] 图集下载 (暂时没支持打包下载，所以会直接下载多个图片)
- [x] 评论区图片下载
- [x] 表情包下载
- [x] 封面下载
- [x] 媒体详情: 查看视频分辨率、查看视频音乐、查看图集数据、查看JSON数据
- [ ] ~~批量下载打包为 zip~~ (不支持)

## Usage

安装后，会在对应位置添加下载按钮。

### 视频下载按钮

> 视频播放器控制条中【插件>下载】按钮
> 快捷键： 按下 M 键将下载当前视频/图片

![image](https://github.com/user-attachments/assets/59af5d64-1669-4327-ace9-fec128a2d37b)


### 图片下载按钮

> (点开图片之后右下角【下载图片】)

![image](https://github.com/zhzLuke96/douyin-dl-user-js/raw/main/docs/image_btn.jpg)

### 表情包下载按钮

> 表情包右键菜单中

![sticker](https://github.com/zhzLuke96/douyin-dl-user-js/raw/main/docs/sticker_btn.jpg)

### 媒体详情
点击【插件>媒体详情】可以查看视频分辨率、图集列表、音乐、JSON

![image](https://github.com/user-attachments/assets/21c83887-bbe1-47a4-b021-57b384f4a5b5)

> UI有待优化，基本操作就是 【播放】 【试听】 【下载】 等几个按钮

### 图片转码

由 @Arrtourz 提出，可以使用浏览器API对 webp 视频转码，现在默认将会把所有 webp 图片转码为 png 保存。
但是，代价就是 webp 格式文件很小，而转为 png 之后会明显变大
所以如果你觉得不需要转码，你可以在插件中关闭，取消 【WebP转码PNG】 选项即可。

![image](https://github.com/user-attachments/assets/60f6772b-0379-4ee7-9922-6116c93747c0)


## Change log

- 250710 1.2.0 增加媒体详情/插件控制/转码控制/下载封面/查看音乐/查看分辨率等功能
- 250602 1.1.1 修复下载按钮失效
- 250530 1.1.0 OOP 重构 / 无功能变化
- 250519 1.0.5 增加 webp 转 png 功能 #5 / 增强错误处理
- 250326 1.0.4 增加下载快捷键 [M] / 增加重复下载拦截
- 250114 1.0.3 优化文件名适配性/增加类型
- 241231 1.0.2 支持包含视频的图集

## LICENSE

MIT
