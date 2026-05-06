# 桌面入口与主动关怀

Hermes-Yachiyo 把桌面产品拆成多个入口，而不是把所有能力塞进一个主窗口。主控台负责管理，Chat Window 负责完整对话，Bubble 和 Live2D 是常驻桌面表现态。

## 主控台

主控台用于查看 Hermes、Workspace、Bridge、工具、集成、会话摘要和模式入口。Control Center 不是常驻形态，它是管理面板。

<figure class="guide-shot">
  <img src="/images/hermes-yachiyo/first-run/32-dashboard-after-full-config.png" alt="完整配置后的主控台" />
  <figcaption>配置完成后，主控台会汇总主要状态和入口。</figcaption>
</figure>

## Bubble 模式

Bubble 是轻量悬浮入口，可显示摘要、未读、处理中、失败状态和最近回复。点击后打开共享 Chat Window。

可配置项包括窗口尺寸、透明度、常驻置顶、边缘吸附、摘要条数、头像和主动关怀开关。

<figure class="guide-shot">
  <img src="/images/hermes-yachiyo/first-run/27-bubble-quick-message-replied.png" alt="Bubble 快捷消息回复" />
  <figcaption>Bubble 快捷消息会进入同一个 ChatSession，不会分叉成独立对话。</figcaption>
</figure>

## Live2D 模式

Live2D 是角色桌面入口。首次使用需要导入 Live2D ZIP 或选择有效模型目录。没有资源时，应用仍可使用 Bubble/Chat Window。

<figure class="guide-shot">
  <img src="/images/hermes-yachiyo/first-run/25-live2d-window-rendered.png" alt="Live2D 渲染完成" />
  <figcaption>资源导入并保存后，Live2D 窗口应能渲染角色画布。</figcaption>
</figure>

## 主动关怀

主动关怀会按间隔读取桌面截图，通过视觉模型判断是否需要提醒，再生成适合 Bubble 或 Live2D 展示的消息。

使用前需要：

- 在主控台或表现态设置中启用主动桌面观察。
- 设置观察间隔和触发概率。
- macOS 授予屏幕录制权限。
- 如果需要语音，先配置主动关怀语音。

<figure class="guide-shot">
  <img src="/images/hermes-yachiyo/first-run/34-proactive-live2d-attention.png" alt="Live2D 主动关怀" />
  <figcaption>主动关怀消息可以出现在 Live2D 桌面入口中。</figcaption>
</figure>
