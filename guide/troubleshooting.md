# 排障

本页整理第一次安装和日常使用中最常见的问题。处理顺序建议是：先看主控台，再跑连接测试，最后打开诊断工具。

## macOS 提示无法验证应用

当前发布包可能还没有 Apple Developer ID 签名和公证。确认 DMG 来自本站或 GitHub Releases 固定下载链接后，先点击“完成”，再到“系统设置 -> 隐私与安全性”中点击“仍要打开”。也可以在 `/Applications` 中按住 Control 点击 `Hermes-Yachiyo.app`，选择“打开”。

## Hermes Agent 安装失败

如果安装输出中出现：

```text
RPC failed
curl 18 transfer closed with outstanding read data remaining
early EOF
invalid index-pack output
```

通常是 GitHub 网络传输中断。安装器会自动重试；多次失败后再切换网络或代理重新安装。

如果提示 `ripgrep` 或 `ffmpeg` 缺失，基础聊天不受影响。需要相关工具能力时再安装：

```sh
brew install ripgrep ffmpeg
```

## 安装完成后页面没刷新

安装或工作区初始化完成后，如果页面仍停留在旧状态，先点击“重新检测”。仍未刷新时退出并重新打开应用。打包版 Bridge 默认是 `127.0.0.1:18420`，以主控台显示为准。

## 找不到 hermes 命令

确认 Hermes Agent 已安装，并且当前 GUI 应用进程能读取到 `hermes` 所在 PATH。终端能找到但应用找不到时，退出并重新打开 Hermes-Yachiyo，再点击“重新检测”。

## 模型连接失败

检查 Provider、模型、Base URL 和 API Key：

- Base URL 是否缺少 `/v1`。
- API Key 是否属于当前 Provider。
- 模型名是否可用并有权限。
- 网络代理是否阻止了应用访问模型服务。

修改后重新保存并测试连接。主控台连接测试会按当前 UI 配置真实调用模型，比泛化 Doctor 提醒更适合判断桌面对话是否可用。

## 图片不可用

先运行图片链路测试。如果主模型不支持图片，请配置 vision Provider、vision 模型、Base URL 和 API Key。

建议使用正常尺寸图片。过小、损坏或格式异常的图片可能会被上游视觉模型拒绝。

如果图片任务长时间无响应，在 Chat Window 中点击停止，然后重新发送更小、更清晰的附件。

## 主动关怀不触发

确认以下条件：

- 主动桌面观察已开启。
- 触发概率不是 0。
- 观察间隔已经到达。
- macOS 屏幕录制权限已授予。
- 图片链路可用。

权限未授权时，到“系统设置 -> 隐私与安全性 -> 屏幕录制”允许 Hermes-Yachiyo，然后回到应用重新开启。

## Live2D 没有显示角色

确认已经导入 Live2D ZIP 或选择有效模型目录。有效目录通常包含 `.model3.json` 或 `.moc3`。导入后回到 Live2D 模式页，点击“打开 Live2D”。

如果模型加载失败但静态预览仍显示，通常是 WebGL、Cubism runtime 或资源文件问题。先关闭物理模拟，再重新打开 Live2D；仍失败时重新导入资源包。

## TTS 没声音

使用 GPT-SoVITS 时，确认：

- 语音包 ZIP 已导入。
- GPT 权重、SoVITS 权重和参考音频路径已填入。
- `http://127.0.0.1:9880` API 可达。
- 服务目录存在，启动命令能运行。
- 文本语言、参考音频语言和媒体类型与本地 GPT-SoVITS API 版本兼容。

先用短中文句子测试，例如“彩叶，测试一下。”。如果中英混排、标点较多或语言参数不匹配，部分 GPT-SoVITS API 会返回 400；这通常不是语音包导入失败。

## 工具中心显示受限

`limited` 常见原因是缺少外部 Provider Key、CDP endpoint 或本地系统依赖。基础聊天、Bubble 和 Live2D 不要求所有工具都可用。

Web 工具需要网页读取 Provider Key。Browser CDP 需要 Chrome 调试端点；CDP 受限不影响基础 Browser 工具和普通对话。

## 备份或恢复失败

确认备份文件来自 Hermes-Yachiyo，并且没有被移动、截断或手动改名。导入资源很大时，备份和恢复会耗时更久。等待任务完成前不要强制退出应用。
