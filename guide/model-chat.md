# 模型、图片与对话

Hermes-Yachiyo 的聊天由 Hermes Agent 和你配置的模型 Provider 承担。Yachiyo 负责把 Provider 配置、连接测试、图片附件、会话列表和桌面入口状态做成可见流程。

## 模型配置

模型配置页至少需要这些字段：

| 字段 | 说明 |
| --- | --- |
| Provider | 模型服务提供方，例如 OpenAI、OpenRouter、Xiaomi MiMo 或 Hermes 支持的其他 Provider。 |
| 模型 | 默认聊天模型名，可选择预设，也可手动输入兼容模型名。 |
| Base URL | Provider 的 OpenAI-compatible API 地址，常见形式是以 `/v1` 结尾。 |
| API Key | 当前 Provider 的密钥，应用内以密码输入保存。 |
| Vision 配置 | 图片输入需要的视觉模型；主模型不支持图片时尤其重要。 |

保存后先运行文本连接测试。主控台状态中的 `ready` 只代表 Hermes 命令、工作区和基础配置可用；模型是否真的能回复，以连接测试和实际聊天为准。

## 图片输入链路

如果要发送截图或图片，请先运行图片链路测试。Yachiyo 会按当前配置选择图片处理方式：

- 主模型支持图片时，附件直接进入主对话链路。
- 主模型只支持文本时，先由 vision 模型分析图片，再把结果交给主模型。
- 视觉模型未配置或服务不支持图片时，Chat Window 会阻止发送图片并给出提示。

本次完整流程中，图片链路测试通过，并且用 Hermes-Yachiyo 自己的应用截图作为附件完成了一次真实图片对话。正式使用时建议上传正常尺寸截图或照片，避免 1x1、损坏文件或包含大量无关区域的图片。

## Chat Window

Chat Window 是完整对话空间。它支持：

- 文本对话。
- 粘贴或选择图片附件。
- 新建、加载和删除会话。
- 停止正在处理的任务。
- Markdown 回复、复制回复和最近会话摘要。

<figure class="guide-shot">
  <img src="/images/hermes-yachiyo/current-flow/07-chat-window.png" alt="Hermes-Yachiyo Chat Window 图片对话" />
  <figcaption>图片会先保存到本机工作区，再由 Hermes 按当前视觉链路处理。</figcaption>
</figure>

如果图片任务长时间无响应，可以在 Chat Window 中点击停止；停止后当前会话会保留记录，方便重新发送更小、更清晰的附件。

## 会话同步

主控台、Chat Window、Bubble 和 Live2D 共享同一条当前会话链。Bubble 或 Live2D 发出的快捷消息会出现在 Chat Window；Chat Window 的新回复也会更新桌面入口的未读、处理中和最近回复状态。

## 连接测试与 Doctor 的区别

Yachiyo 的连接测试会按当前 UI 配置实际调用模型，更适合判断桌面对话是否可用。`hermes doctor` 和 `hermes config check` 更适合检查配置结构、缺失环境变量和工具状态。

如果连接测试通过，但 Doctor 对某些可选 Provider Key 给出提醒，通常只是表示那些可选工具还没配置，不代表基础聊天不可用。
