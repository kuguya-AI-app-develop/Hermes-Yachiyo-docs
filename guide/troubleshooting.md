# 排障

本页整理第一次安装和日常使用中最常见的问题。处理顺序建议是：先看主控台状态，再运行诊断，最后根据具体功能检查配置。

## Hermes Agent 安装失败

如果安装输出中出现：

```text
RPC failed
curl 18 transfer closed with outstanding read data remaining
early EOF
invalid index-pack output
```

通常是 GitHub 网络传输中断。可以切换网络或代理后重试。正常情况下请优先使用 Hermes-Yachiyo 安装引导内的一键安装；确实需要手动安装时，再从 Hermes Agent Releases 准备 Hermes 后回到 Yachiyo 点击“重新检测”。

## macOS 提示无法验证应用

当前发布包暂未使用 Apple Developer ID 签名和公证，第一次打开时 macOS 可能提示“Apple 无法验证 Hermes-Yachiyo”并提供“完成”或“移到废纸篓”等按钮。

如果你确认应用来自本站首页或 [安装页](/guide/install) 的 GitHub Releases 固定下载链接，先点击“完成”关闭提示，不要选择“移到废纸篓”。然后打开“系统设置 -> 隐私与安全性”，在“安全性”区域找到 Hermes-Yachiyo 被拦截的提示，点击“仍要打开”，再在确认弹窗中选择“打开”或“仍要打开”。

如果系统设置中没有出现“仍要打开”，回到 `/Applications`，按住 Control 点击 `Hermes-Yachiyo.app` 并选择“打开”，再按系统提示继续。

## 找不到 hermes 命令

确认 Hermes Agent 已安装，并且当前 GUI 应用进程能读取到 `hermes` 所在 PATH。安装完成后如果终端能找到命令但应用找不到，退出并重新打开 Hermes-Yachiyo，然后点击“重新检测”。

## 需要完成 hermes setup

如果状态显示“已安装，待 setup”或“setup 进行中”，按页面提示打开高级终端 setup，完成 Hermes 原生配置后回到应用重新检测。也可以使用模型配置向导填写 Provider、模型、Base URL 和 API Key，并点击“保存并测试连接”。

## 模型连接失败

检查 Provider、模型、Base URL 和 API Key。常见原因包括：

- Base URL 缺少 `/v1` 或填成了控制台地址。
- API Key 不是当前 Provider 的密钥。
- 模型名不可用或没有权限。
- 网络代理阻止了应用访问模型服务。

修改后重新点击“保存并测试连接”。

如果主控台连接测试通过，但 `hermes doctor` 对同一 Provider 报出泛化的 API Key 告警，先确认你是否使用了自定义 Base URL 或兼容层。Yachiyo 的连接测试会按当前 UI 配置实际调用模型，更适合判断桌面对话是否可用。

## 图片不可用

先在主控台点击“保存并测试图片链路”。如果当前主模型不支持图片，请配置单独的 vision Provider、模型、Base URL 和 API Key。

避免使用 1x1 之类极小图片。建议使用正常尺寸截图或照片。

如果图片链路测试出现类似：

```text
hermes_stream_bridge.py: Permission denied
```

说明当前打包环境中的图片桥接脚本权限异常。普通文本对话不受影响；图片能力请先等待修复或手动确认 Hermes 图片链路可执行。若已经发送图片任务并长时间停留在处理中，在 Chat Window 点击停止后重新发送更小、更清晰的图片。

## 主动关怀不触发

确认以下条件：

- 主动桌面观察已开启。
- 触发概率不是 0。
- 观察间隔已经到达。
- macOS 屏幕录制权限已授予。
- 图片链路可用。

如果权限未授权，应用会保持主动关怀关闭。到“系统设置 -> 隐私与安全性 -> 屏幕录制”允许 Hermes-Yachiyo 后，再回到应用开启。

应用内权限检查通过只代表 macOS 允许截图；主动关怀测试仍需要先保存并启用主动桌面观察。

## Live2D 没有显示角色

确认已经导入资源 ZIP 或选择有效模型目录。设置页中的模型状态应为有效路径或已加载。保存后重新打开 Live2D 表现态。

如果模型加载失败但静态预览仍显示，通常是 WebGL、Cubism runtime 或资源文件问题。先关闭物理模拟，再重新打开 Live2D；如果仍失败，重新导入资源包。

## TTS 没声音

如果使用 GPT-SoVITS：

- 语音包 ZIP 已导入。
- GPT 权重、SoVITS 权重、参考音频路径已填入。
- `http://127.0.0.1:9880` API 可达。
- 服务目录存在，启动命令能在终端中运行。
- 文本语言、参考音频语言和媒体类型与本地 GPT-SoVITS API 版本兼容。

手动 TTS 测试成功后，再验证主动关怀自动播报。主动关怀语音生成期间，消息会等音频附件就绪后再显示。

如果 GPT-SoVITS 返回 400，先用短中文句子测试，例如“彩叶，测试一下。”。中英混排、标点较多、文本语言和参考音频语言不匹配时，某些本地 API 版本会拒绝请求；这不是语音包导入失败。

## 工具中心显示受限

`limited` 常见原因是缺少外部 Provider Key、CDP endpoint 或本地系统依赖。打开对应工具配置页，补齐字段后保存并运行测试或 Doctor。

基础聊天、Bubble 和 Live2D 不依赖所有工具都可用。只配置你需要的工具即可。

如果 Browser CDP 自动启动失败并出现 `/usr/bin/env: illegal option -- c`，先按工具中心提示手动启动 Chrome 调试端口，再回到页面重新检测。基础 browser 工具和普通对话不依赖 CDP。

## 备份或恢复失败

确认备份文件来自 Hermes-Yachiyo，并且没有被移动、截断或手动改名为不符合管理规则的文件。恢复时避免把备份放在受保护系统目录中。

如果导入资源很大，备份和恢复会耗时更久。等待任务完成前不要强制退出应用。
