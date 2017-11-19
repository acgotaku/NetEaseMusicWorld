# NetEaseMusicWorld [![Chrome Web Store](https://img.shields.io/chrome-web-store/v/kmaboigdbjjclfomcbpafdclllbinmam.svg)](https://chrome.google.com/webstore/detail/neteasemusicworld/kmaboigdbjjclfomcbpafdclllbinmam)

安装插件。

并且在`hosts`文件里写入如下内容：

```
115.127.226.166  p1.music.126.net
115.127.226.166  p3.music.126.net
115.127.226.166  p4.music.126.net
115.127.227.115  m10.music.126.net
```

即可在海外听网易云音乐～

## 关于优化IP地址

默认给出的是日本的IP地址，p开头的是图片CDN服务器，m开头的是音乐资源CDN服务器。可以通过
```
ping ws.acgvideo.com
```
来寻找最优的音乐资源CDN服务器。通过
```
ping cdnetworks.com
```
来寻找最优的图片资源CDN服务器。
