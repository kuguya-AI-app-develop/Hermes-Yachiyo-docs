# 桌面入口与主动关怀

Hermes-Yachiyo 把桌面体验拆成几个入口：主控台负责管理，Chat Window 负责完整对话，Bubble 和 Live2D 负责常驻桌面表现。它们共享同一套本地 Bridge、设置、会话和任务状态。

## 主控台

主控台用于查看：

- Bridge、Hermes、模型连接和工作区状态。
- 常用桌面工具入口。
- 最近会话、桌面表现态和维护提醒。
- 诊断、资源、工作区、应用更新和设置入口。

<figure class="guide-shot">
  <img src="/images/hermes-yachiyo/current-flow/05-dashboard-ready.png" alt="Hermes-Yachiyo 主控台" />
  <figcaption>主控台是日常管理面板，适合确认整套桌面 Agent 是否处于可用状态。</figcaption>
</figure>

## Bubble 模式

Bubble 是轻量悬浮入口，适合一直放在桌面边缘。它会显示待机、未读、处理中、失败状态和最近回复。点击 Bubble 可以回到完整对话窗口。

常见配置包括窗口大小、透明度、置顶、边缘吸附、启动展开、默认展示内容、摘要条数、头像、主动关怀和 TTS。

<figure class="guide-shot compact-shot">
  <img src="/images/hermes-yachiyo/current-flow/06-bubble-ready.png" alt="Hermes-Yachiyo Bubble 窗口" />
  <figcaption>Bubble 只承担轻量入口，长对话和附件处理仍建议在 Chat Window 中完成。</figcaption>
</figure>

## Live2D 模式

Live2D 是角色桌面入口。导入有效资源后，应用会打开独立 Live2D 窗口，并可以在主控台中查看模型舞台、口型、表情、动作摘要、语音合成和渲染状态。

<figure class="guide-shot">
  <img src="/images/hermes-yachiyo/current-flow/10-live2d-mode.png" alt="Hermes-Yachiyo Live2D 模式页" />
  <figcaption>Live2D 模式页会展示资源是否就绪，以及打开桌面角色的入口。</figcaption>
</figure>

<figure class="guide-shot compact-shot">
  <img src="/images/hermes-yachiyo/current-flow/08-live2d-window.png" alt="Hermes-Yachiyo Live2D 桌面窗口" />
  <figcaption>正式截图只截取应用窗口本身，不包含用户桌面内容。</figcaption>
</figure>

## 主动关怀

主动关怀会在启用后按间隔观察桌面，通过视觉模型判断是否需要提醒，再把短消息显示到 Bubble 或 Live2D。启用前请确认：

- 模型连接测试通过。
- 图片链路测试通过。
- macOS 屏幕录制权限已授予。
- 主动桌面观察已开启。
- 触发概率不是 0，观察间隔设置合理。

本次验证中，屏幕录制权限检查通过。为了保护隐私，文档截图只展示 Hermes-Yachiyo 应用窗口，不展示完整桌面。

## 语音与桌面入口

普通聊天回复默认保持文本，不会自动转语音。GPT-SoVITS 主要用于主动关怀播报和手动 TTS 测试。语音生成期间，应用会等音频附件就绪后再显示或播放相关结果。
