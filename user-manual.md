# Hermes-Yachiyo 使用手册

适用对象：第一次安装并使用 Hermes-Yachiyo 的 macOS 用户。

Hermes-Yachiyo 是桌面优先的本地个人 Agent 应用。它把 Hermes Agent 包装成常驻本机的桌面助手，并提供应用内一键安装、主控台、完整对话窗口、Bubble 悬浮入口、Live2D 角色入口、主动关怀、语音播报、工具中心、应用更新、诊断、备份和卸载管理。

## 1. 产品结构

Hermes-Yachiyo 由几层能力组成：

- Hermes Agent：模型、工具和 agent 执行能力来源。
- Yachiyo Desktop：Electron 桌面壳、React 界面、桌面窗口和系统入口。
- Python Backend：管理 Hermes runtime、工作空间、本地能力和维护任务。
- Local Bridge：默认监听 `127.0.0.1:8420`，只服务本机 UI 与授权集成。
- 可选资源：Live2D 模型、GPT-SoVITS 语音包和本地 TTS 服务。

Yachiyo 不会替代 Hermes 的 agent 内核，也不会把 Hapi/Codex 任务搬进桌面壳。AstrBot 只作为可选 QQ 接入层，负责把授权请求转发到本地 Yachiyo。

## 2. 安装与第一次打开

将 `Hermes-Yachiyo.app` 放入 `/Applications` 后打开。应用会进入安装引导，并按当前本机状态给出下一步：

```text
未安装 Hermes Agent
  -> 准备 macOS 基础工具
  -> 一键安装或重新检测 Hermes Agent
  -> 配置模型
  -> 初始化 Yachiyo 工作空间
  -> 进入主控台
```

<figure class="guide-shot">
  <img src="/images/hermes-yachiyo/current-flow/01-installer-workspace-init-required.png" alt="首次启动安装页" />
  <figcaption>安装引导会根据 Hermes 与工作空间状态显示操作按钮。</figcaption>
</figure>

如果 Hermes Agent 尚未安装，请优先点击应用内的安装按钮完成一键安装。如果缺少 Git、Python 或命令行工具，先点击“准备 macOS 基础工具”，按终端提示完成后再回到应用。安装完成后如果页面没有自动进入下一步，点击“重新检测”或重启应用。

## 3. 配置 Hermes 模型

在“模型配置向导”填写：

- Provider。
- 模型名。
- Base URL。
- API Key 或对应外部授权方式。

点击“保存并测试连接”。测试通过后，再初始化工作空间。以后如果更换 Provider、模型或 Base URL，也应重新测试。

<figure class="guide-shot">
  <img src="/images/hermes-yachiyo/current-flow/06-dashboard-after-text-chat.png" alt="模型连接后的主控台" />
  <figcaption>连接测试通过后，即可发送第一条文本消息。</figcaption>
</figure>

基础 ready 状态只说明 Hermes 命令、setup 和 Yachiyo 工作空间通过检查；模型是否真正可用，以连接测试结果为准。

## 4. 初始化工作空间

默认工作空间路径：

```text
~/.hermes/yachiyo/
```

这里会保存聊天数据库、导入资源、附件缓存、日志、备份相关数据和工作空间配置。初始化完成后进入主控台。

<figure class="guide-shot">
  <img src="/images/hermes-yachiyo/current-flow/04-dashboard-ready.png" alt="主控台就绪" />
  <figcaption>主控台会展示 Hermes、Workspace、Bridge、任务和会话状态。</figcaption>
</figure>

## 5. 主控台

主控台是日常管理面板。常用入口包括：

- 打开对话：进入完整 Chat Window。
- 打开表现态：启动当前桌面入口，默认为 Bubble。
- 配置表现态：打开 Bubble 或 Live2D 设置。
- Hermes 配置中心：保存并测试模型、图片链路、主动关怀和 TTS。
- 工具中心：查看 Hermes tools、配置外部 Provider、运行工具测试。
- 应用设置：Bridge、备份、恢复、卸载和应用选项。

## 6. 对话窗口

Chat Window 是完整对话空间。它支持文字、图片附件、粘贴图片、新建会话、加载历史会话、删除会话、停止处理中任务、Markdown 回复和复制回复。

<figure class="guide-shot">
  <img src="/images/hermes-yachiyo/current-flow/11-chat-window-live2d-session.png" alt="文字回复完成" />
  <figcaption>Chat Window 的消息状态会同步给 Bubble 和 Live2D。</figcaption>
</figure>

如果要发送图片，先在主控台保存并测试图片链路。主模型支持图片时会直接处理；主模型只支持文本时，可以配置单独 vision 模型进行预分析。图片链路没有测试通过前，不建议把图片输入作为核心流程依赖。

## 7. Bubble 模式

Bubble 是轻量桌面入口，适合常驻屏幕边缘。它可以显示摘要、未读、处理中、失败状态和最近回复。点击 Bubble 会打开 Chat Window；快捷消息也会写入当前会话。

可配置项包括：

- 宽高、透明度和位置。
- 常驻置顶、边缘吸附、启动展开。
- 默认展示内容和摘要条数。
- 头像路径。
- 主动桌面观察和 TTS 设置。

<figure class="guide-shot">
  <img src="/images/hermes-yachiyo/current-flow/05-bubble-ready.png" alt="Bubble 窗口" />
  <figcaption>Bubble 是桌面入口，不会替代完整对话窗口。</figcaption>
</figure>

## 8. Live2D 模式

Live2D 是角色桌面入口。首次使用需要导入 Live2D ZIP 或选择有效模型目录。有效目录通常包含 `.model3.json` 或 `.moc3` 文件。

默认资源目录：

```text
~/.hermes/yachiyo/assets/live2d/
```

Live2D 设置页支持导入资源包、选择模型目录、打开导入目录和打开 GitHub Releases。没有有效资源时，应用会引导你先配置资源，不会直接打开不可操作的透明窗口。

<figure class="guide-shot">
  <img src="/images/hermes-yachiyo/current-flow/08-live2d-ready-cropped.png" alt="Live2D 渲染完成" />
  <figcaption>资源就绪后，Live2D 可以作为桌面角色入口使用。</figcaption>
</figure>

Live2D 可配置窗口尺寸、位置、缩放、置顶、回复气泡、快捷输入、点击行为、鼠标跟随、动作、表情、物理和主动观察。

## 9. 主动关怀

主动关怀会在你启用后按间隔观察桌面截图，通过视觉模型判断是否需要提醒，并把短消息显示到 Bubble 或 Live2D。

使用条件：

- Hermes 模型连接可用。
- 图片链路可用。
- 主动桌面观察已开启。
- macOS 屏幕录制权限已授予。
- 触发概率和观察间隔设置合理。

如果权限不足，应用会打开系统隐私设置并保持主动关怀关闭。授权后回到应用重新开启。

## 10. 主动关怀语音

主动关怀语音支持三类 Provider：

- `none`：关闭语音，只显示文本提醒。
- `GPT-SoVITS 本地服务`：使用本机 GPT-SoVITS API。
- `HTTP POST` 或 `本地命令`：接入你自己的 TTS 服务或脚本。

使用 GPT-SoVITS 时，需要两部分：

- 八千代语音包 ZIP：包含 GPT 权重、SoVITS 权重和参考音频。
- GPT-SoVITS 本地服务：默认 API 地址为 `http://127.0.0.1:9880`。

语音页提供导入语音包、下载资源、部署本地依赖、打开调试终端、启动本地后台/自启、停止本地后台和刷新状态等入口。

手动 TTS 测试通过后，再启用主动关怀语音。建议先用短中文句子测试，再逐步尝试中英混排或更长文本。

## 11. 工具中心

工具中心展示 Hermes 当前暴露的 toolsets，并按实际状态显示可用、受限或待配置。常见需要额外配置的能力包括网页读取、Browser CDP、图片生成、Home Assistant、Discord、MoA 和 RL。

工具配置页只显示变量名和配置状态，不显示密钥明文。保存后可以运行静态检查和 `hermes doctor` 对应工具状态。

<figure class="guide-shot">
  <img src="/images/hermes-yachiyo/current-flow/12-tool-center-overview.png" alt="工具中心概览" />
  <figcaption>工具受限不代表主对话不可用，只影响对应工具能力。</figcaption>
</figure>

## 12. 诊断与应用更新

诊断页支持受控运行：

```text
hermes config check
hermes doctor
hermes auth list
```

`hermes doctor` 会检查命令安装、依赖、模型配置和工具状态。应用更新面板可以检查当前渠道的最新构建，显示更新元数据、下载文件、下载进度、校验状态和更新内容，并提供提交对比入口。更新完成后重新打开应用，工具中心会刷新 tools list、Doctor 缓存和 Provider 列表。

## 13. 备份、恢复与卸载

备份默认目录：

```text
~/Hermes-Yachiyo-backups/
```

备份包含应用配置、Yachiyo 工作空间、聊天数据库、导入资源、附件缓存和日志。资源越大，备份越大。

卸载页会先生成预览清单，并要求输入确认短语 `UNINSTALL`。可选择仅删除 Yachiyo 数据、保留配置、同时删除 Hermes Agent 数据、同时处理 GPT-SoVITS 本地服务，或尝试删除当前 `.app` 本体。

## 14. 数据与隐私边界

Hermes-Yachiyo 默认以本机为边界：

- Bridge 默认只监听 `127.0.0.1`。
- 工作空间、聊天数据库、资源和备份保存在用户目录。
- API Key 不在工具配置页明文回传。
- Live2D 和语音资源按需导入，不随主应用仓库分发。
- 图片、截图和语音请求会按你配置的模型或本地服务处理。

如果你启用了在线模型、网页工具、图片生成或外部 TTS，请按对应服务商的隐私政策理解数据流向。

## 15. 推荐完整流程

1. 打开应用并安装或检测 Hermes Agent。
2. 填写模型配置，保存并测试连接。
3. 初始化 `~/.hermes/yachiyo/` 工作空间。
4. 打开 Chat Window，发送第一条文本消息。
5. 如需图片输入，先配置并测试图片链路，再发送一张截图。
6. 打开 Bubble，确认快捷消息进入同一会话。
7. 导入 Live2D 资源，打开 Live2D 角色入口。
8. 按需开启主动关怀并授予屏幕录制权限。
9. 按需导入 GPT-SoVITS 语音包并启动本地服务。
10. 打开工具中心，只配置你需要的工具。
11. 创建一次备份，确认备份目录和恢复入口。

遇到问题时，请先查看 [排障](/guide/troubleshooting)。
