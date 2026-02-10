---
icon: lucide/bot
---

- 官方网站，[链接](https://openclaw.ai/)

- 建议用苹果电脑，效果最佳


安装：

1. 后台，`curl -fsSL https://openclaw.ai/install.sh | bash`
   1. LLM：推荐 openai 的 codex（效果最佳），其次是 google 的 antiagrivity（现在被削了）
   2. 通道：国内，用苹果 iMessage（什么都不用设置）；国外，whatsapp 和 telegram 随意了
   3. 注意：默认长期记忆没打开，有时候会话会丢，可参考，[《解决 openclaw（龙虾）长期记忆问题》](https://blog.csdn.net/weixin_38956421/article/details/156119534)
2. 前台，[链接](https://github.com/openclaw/openclaw/releases)
   1. 下载类似这种文件来安装`OpenClaw-2026.2.6.dmg`
   2. 前台安装后，在 OpenClaw 面板（屏幕最上方），右键，settings...，Permissions --> 开启所有权限


常用命令：


```bash
# 状态查看
openclaw status

# 启动 gateway
openclaw gateway start

# 关闭 gateway
openclaw gateway stop
```


我的场景：

1. 每小时，发送NewsNow的新增新闻
   1. ![IMG_3207](https://raw.githubusercontent.com/LiuMaoDou/Files/main/IMG_3207.png)
2. 每4小时，发送东莞天气
   1. ![IMG_3209](https://raw.githubusercontent.com/LiuMaoDou/Files/main/IMG_3209.png)
3. 每小时，扫描我的github star，如果有更新，发送
   1. ![IMG_3208](https://raw.githubusercontent.com/LiuMaoDou/Files/main/IMG_3208.png)
4. 下载cisco live全量pdf
5. 下载全量 rfc 的 pdf
6. 手机闲聊（手机不用翻墙）
7. obsidian，notion做笔记，things3做待办
8. 每小时：核心财经数据发送
   1. ![image-20260209232642556](https://raw.githubusercontent.com/LiuMaoDou/Files/main/image-20260209232642556.png)

9. ......



