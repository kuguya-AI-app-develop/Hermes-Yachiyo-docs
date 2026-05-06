# 模型、图片与对话

Hermes-Yachiyo 的对话能力由 Hermes Agent 与你配置的模型 Provider 承担。Yachiyo 负责提供可视化配置、连接测试、附件保存、任务控制、对话窗口和桌面入口状态同步。

## 模型配置

模型配置至少包含这些字段：

| 字段 | 说明 |
| --- | --- |
| Provider | 模型服务提供方，例如 OpenAI、OpenRouter、Xiaomi MiMo 或 Hermes 已支持的其他 Provider。 |
| 模型 | 默认聊天模型名。可从下拉列表选择，也可在需要时手动输入。 |
| Base URL | Provider 的 OpenAI-compatible API 地址，通常以 `/v1` 结尾。 |
| API Key | 当前 Provider 所需密钥。输入框会以密码形式显示。 |

<figure class="guide-shot">
  <img src="/images/hermes-yachiyo/current-flow/06-dashboard-after-text-chat.png" alt="模型配置后的主控台" />
  <figcaption>连接测试通过后，普通文本对话即可进入完整 Chat Window 或桌面入口。</figcaption>
</figure>

点击“保存并测试连接”后，应用会验证模型是否可调用。基础状态 ready 只表示 Hermes 命令、setup 和 Yachiyo 工作空间可用；模型是否真正能回复，需要以连接测试为准。

使用自定义 Base URL 时，主控台连接测试比通用 `hermes doctor` 的 Provider 检查更贴近 Yachiyo 实际链路。若连接测试通过而 Doctor 对同一 Provider 给出泛化告警，先以主控台结果为准，再按排障页确认配置边界。

## 图片输入链路

如果要发送截图或图片，请先在主控台点击“保存并测试图片链路”。Yachiyo 会根据当前模型能力选择图片路由：

- 主模型支持原生图片输入时，图片会直接进入主对话链路。
- 主模型是文本模型时，可以配置单独的 vision 模型先分析图片，再把结果交给主模型。
- 如果当前配置不支持图片，页面会给出原因和需要补齐的字段。

建议使用正常尺寸的截图或照片。过小、损坏、格式异常或包含过多无关区域的图片，可能会被上游服务拒绝或导致回复变慢。图片链路测试没有通过前，先不要把图片能力当作核心流程依赖。

## Chat Window

Chat Window 是完整对话空间。Bubble 和 Live2D 只是桌面入口，都会打开或写入同一个当前会话。

支持能力包括：

- 文字对话。
- 图片附件和粘贴图片。
- 新建、加载和删除会话。
- 停止正在处理的任务。
- Markdown 回复、复制回复和最近会话摘要。

<figure class="guide-shot">
  <img src="/images/hermes-yachiyo/current-flow/11-chat-window-live2d-session.png" alt="文字回复完成" />
  <figcaption>文本消息完成后，最近回复会同步到 Bubble 或 Live2D 的状态。</figcaption>
</figure>

图片附件会先保存在本机 Yachiyo 工作空间，再由 Hermes 按当前图片路由处理。如果图片任务长时间无响应，可以在 Chat Window 中点击停止；停止后当前会话会保留取消记录，方便你重新发送更小、更清晰的附件。

## 会话与桌面入口同步

主控台、Chat Window、Bubble 和 Live2D 共享同一条当前会话链。通过 Bubble 快捷输入发送的内容，会出现在 Chat Window；Chat Window 的新回复，也会更新桌面入口的未读、处理中和最近回复状态。
