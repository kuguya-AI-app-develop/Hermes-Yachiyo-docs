# 模型、图片与对话

Hermes-Yachiyo 的对话能力由 Hermes Agent 和已配置的模型 Provider 承载。Yachiyo 负责配置入口、图片预处理链路、会话窗口和桌面入口状态同步。

## 模型配置

首用走查使用的配置是：

| 字段 | 值 |
| --- | --- |
| Provider | `Xiaomi MiMo` |
| 模型 | `mimo-v2.5-pro` |
| Base URL | `https://token-plan-cn.xiaomimimo.com/v1` |
| API Key | 用户自己的密钥 |

<figure class="guide-shot">
  <img src="/images/hermes-yachiyo/first-run/05-model-config-filled.png" alt="模型配置填写完成" />
  <figcaption>保存前确认 Provider、模型、Base URL 和 API Key 都已填写。</figcaption>
</figure>

## 图片链路

如果要发送截图或图片，先在主控台点击“保存并测试图片链路”。对于文本模型，Yachiyo 可以先用 vision 链路分析图片，再把结果交给主模型。

<figure class="guide-shot">
  <img src="/images/hermes-yachiyo/first-run/11-image-chain-verified.png" alt="图片链路测试通过" />
  <figcaption>首用测试中，图片链路正确识别了测试色块。</figcaption>
</figure>

建议使用正常尺寸截图或照片。极小图片可能被上游多模态服务判定为无法处理。

## Chat Window

Chat Window 是完整对话空间，支持：

- 文字对话。
- 图片附件和粘贴图片。
- 新建、加载和删除会话。
- 停止正在处理的任务。
- 与 Bubble/Live2D 共享同一当前会话链。

<figure class="guide-shot">
  <img src="/images/hermes-yachiyo/first-run/15-chat-text-replied.png" alt="文字回复完成" />
  <figcaption>文本消息完成后，回复会同步到桌面入口的最近消息状态。</figcaption>
</figure>

<figure class="guide-shot">
  <img src="/images/hermes-yachiyo/first-run/18-chat-image-replied.png" alt="图片回复完成" />
  <figcaption>图片消息会先经过视觉预分析，再进入主对话链路。</figcaption>
</figure>
