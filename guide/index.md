# 体验路径

这组指南面向第一次使用 Hermes-Yachiyo 的 macOS 用户。按顺序走完后，你会得到一个可日常使用的桌面 Agent：Hermes Agent 已安装，模型连接可用，本地工作区已初始化，文本与图片聊天可用，Live2D 与 GPT-SoVITS 资源已导入，诊断和备份路径也已经确认。

<figure class="guide-shot">
  <img src="/images/hermes-yachiyo/current-flow/05-dashboard-ready.png" alt="Hermes-Yachiyo 主控台" />
  <figcaption>完成首轮流程后，主控台会显示 Bridge、模型连接、工作区和桌面工具状态。</figcaption>
</figure>

## 你会用到的入口

- 安装器：一键安装 Hermes Agent，自动准备 Python、Node.js 与依赖，并初始化 Yachiyo 工作区。
- 模型配置：填写 Provider、模型、Base URL、API Key 和视觉模型信息，保存后做真实连接测试。
- 对话：完整 Chat Window，支持文本、图片附件、历史会话、停止任务和复制回复。
- 气泡模式：轻量桌面入口，显示待机、未读、处理中和最近回复。
- Live2D 模式：导入角色资源后打开桌面舞台，支持口型、表情、动作和回复气泡。
- GPT-SoVITS：导入八千代音色包，连接本机 GPT-SoVITS API，给主动关怀和测试播报使用。
- 资源管理：查看 Live2D、语音、壁纸等资源是否已导入以及当前使用状态。
- 工作区：查看会话、资源、日志和备份路径，创建备份并进入系统备份管理。
- 诊断工具：运行配置检查、Doctor、凭据池查看和工具状态盘点。

## 推荐阅读顺序

1. [安装与首启](/guide/install)：下载 DMG，打开应用，用一键安装准备 Hermes Agent，配置模型并初始化工作区。
2. [模型、图片与对话](/guide/model-chat)：验证文本模型和图片链路，发送第一条文本消息和第一张图片。
3. [桌面入口与主动关怀](/guide/desktop-modes)：理解主控台、Chat Window、Bubble、Live2D 和主动桌面观察的关系。
4. [Live2D 与语音资源](/guide/assets)：导入 Live2D 模型、八千代 GPT-SoVITS 语音包并检查本地 TTS 服务。
5. [工具、诊断与维护](/guide/tools-maintenance)：查看工具状态、运行 Doctor、检查应用更新、创建备份并预览卸载范围。
6. [排障](/guide/troubleshooting)：处理安装、模型、图片、权限、Live2D、TTS 和工具受限问题。

## 准备材料

- macOS 设备，建议把 `Hermes-Yachiyo.app` 放入 `/Applications`。
- 可用网络。安装 Hermes Agent、调用在线模型或检查更新时需要联网。
- 一个可用模型 Provider 的 Base URL、模型名和 API Key，或 Hermes 已支持的其他授权方式。
- 可选：Live2D 资源 ZIP、八千代 GPT-SoVITS 语音包 ZIP、本机 GPT-SoVITS 服务目录。

## 完整体验清单

- 主控台中 Hermes、Workspace、Bridge 都进入可用状态。
- 文本连接测试通过，Chat Window 能收到回复。
- 图片链路测试通过，并能用正常尺寸图片完成一次图片对话。
- Bubble 或 Live2D 至少一种桌面入口可以打开。
- Live2D 资源已导入，角色窗口能渲染。
- GPT-SoVITS 语音包已导入，本地服务可达，短句 TTS 测试返回音频。
- 诊断页能运行 `hermes config check`，工具中心能区分可用和待配置能力。
- 创建过一次备份，并理解卸载页只会在确认短语输入后执行删除。
