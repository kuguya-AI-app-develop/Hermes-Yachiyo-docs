# 体验路径

这组指南面向第一次使用 Hermes-Yachiyo 的 macOS 用户。按顺序走完后，你会用应用内的一键安装完成 Hermes Agent 准备，配置模型，初始化本地工作空间，发送第一条消息，并了解 Bubble、Live2D、主动关怀、语音、工具中心和维护入口。

## 你会得到什么

Hermes-Yachiyo 是桌面优先的本地个人 Agent 应用。它把 Hermes Agent 包装成常驻桌面助手，并把配置、对话、表现态、资源、工具和维护能力放在同一个本机应用里。

- 主控台：查看 Hermes、Workspace、Bridge、工具、会话和维护状态。
- Chat Window：完整对话窗口，支持文本、图片附件、历史会话和停止任务。
- Bubble：轻量桌面悬浮入口，可显示未读、处理中、摘要和快捷消息。
- Live2D：角色桌面入口，可加载 Live2D 资源、显示回复气泡和主动关怀。
- 主动关怀：在授权后按间隔观察桌面，并把提醒显示到 Bubble 或 Live2D。
- 资源与维护：导入 Live2D/GPT-SoVITS 资源，运行 Doctor，创建备份并预览卸载范围。

## 推荐阅读顺序

1. [安装与首启](/guide/install)：打开应用，用一键安装准备 Hermes Agent，配置模型并初始化工作空间。
2. [模型、图片与对话](/guide/model-chat)：设置 Provider、Base URL、API Key，验证文本与图片链路，并开始聊天。
3. [桌面入口与主动关怀](/guide/desktop-modes)：理解主控台、Chat Window、Bubble、Live2D 和主动桌面观察。
4. [Live2D 与语音资源](/guide/assets)：导入 Live2D 模型、八千代 GPT-SoVITS 语音包并检查本地 TTS 服务。
5. [工具、诊断与维护](/guide/tools-maintenance)：查看工具中心、运行 Doctor、更新 Hermes、备份恢复和卸载预览。
6. [排障](/guide/troubleshooting)：处理安装、模型、图片、权限、Live2D、TTS 和工具受限问题。

## 准备材料

- macOS 设备，建议把 `Hermes-Yachiyo.app` 放入 `/Applications`。
- 可用网络。安装 Hermes Agent、下载资源包或调用在线模型时需要联网。
- 至少一个模型 Provider 的 Base URL、模型名和 API Key，或 Hermes 已经支持的外部授权方式。
- 可选：Live2D 资源 ZIP、八千代 GPT-SoVITS 语音包 ZIP，以及本机 GPT-SoVITS API 服务。

<figure class="guide-shot">
  <img src="/images/hermes-yachiyo/current-flow/04-dashboard-ready.png" alt="Hermes-Yachiyo 主控台" />
  <figcaption>首次流程完成后，主控台会显示 Hermes、Workspace、Bridge 和表现态状态。</figcaption>
</figure>

## 完整体验清单

- 主控台中 Hermes、Workspace、Bridge 都进入可用状态。
- Chat Window 能发送文本消息并收到回复。
- 如果需要图片输入，图片链路已经保存并测试通过；测试失败时先按排障页处理，不影响普通文本对话。
- Bubble 能打开，并能把快捷消息发送到同一条会话。
- 如果使用 Live2D，资源已导入，角色窗口能正常显示。
- 如果启用主动关怀，macOS 屏幕录制权限已授予，触发概率和间隔设置合理。
- 如果启用语音，TTS Provider、语音资源和本地服务状态已经确认。
- 备份策略、诊断入口和卸载范围已经了解。
