# 桌面入口与主动关怀

Hermes-Yachiyo 把桌面体验拆成多个入口：主控台负责管理，Chat Window 负责完整对话，Bubble 和 Live2D 负责常驻桌面表现。它们共享同一套本地 Bridge、设置和会话状态。

## 主控台

主控台用于查看和操作：

- Hermes、Workspace、Bridge 和任务状态。
- 模型 Provider、Base URL、API Key 和图片链路测试。
- 最近会话摘要与完整对话入口。
- 当前桌面表现态、Bubble/Live2D 设置、主动关怀与 TTS。
- 工具中心、诊断、备份、恢复和卸载。

<figure class="guide-shot">
  <img src="/images/hermes-yachiyo/current-flow/07-dashboard-live2d-mode.png" alt="主控台" />
  <figcaption>主控台是管理面板，不是常驻桌面形态。</figcaption>
</figure>

## Bubble 模式

Bubble 是轻量悬浮入口，适合一直放在桌边。它可以显示摘要、未读、处理中、失败状态和最近回复。点击 Bubble 会打开完整 Chat Window；快捷消息也会进入同一条会话链。

可配置项包括窗口大小、透明度、常驻置顶、边缘吸附、默认展示内容、摘要条数、头像和主动关怀开关。

<figure class="guide-shot">
  <img src="/images/hermes-yachiyo/current-flow/05-bubble-ready.png" alt="Bubble 窗口" />
  <figcaption>Bubble 是轻量入口，适合放在桌面边缘，需要完整上下文时再打开 Chat Window。</figcaption>
</figure>

## Live2D 模式

Live2D 是角色桌面入口。首次使用需要导入 Live2D ZIP，或选择已经解压好的有效模型目录。有效目录通常包含 `.model3.json` 或 `.moc3`。

如果 Live2D 资源还没准备好，应用会引导你进入 Live2D 设置页，不会把你困在透明空窗口里。资源加载失败时，窗口会保留静态预览和错误提示，方便继续操作。

<figure class="guide-shot">
  <img src="/images/hermes-yachiyo/current-flow/08-live2d-ready-cropped.png" alt="Live2D 渲染完成" />
  <figcaption>资源导入并保存后，Live2D 窗口会加载角色舞台。</figcaption>
</figure>

Live2D 快捷消息会写入当前 Chat Session。你可以在 Live2D 里发起短消息，再到 Chat Window 查看完整上下文、Markdown 回复和任务状态。

<figure class="guide-shot">
  <img src="/images/hermes-yachiyo/current-flow/11-chat-window-live2d-session.png" alt="Live2D 会话同步到 Chat Window" />
  <figcaption>Live2D、Bubble 和 Chat Window 共享同一条当前会话链。</figcaption>
</figure>

## 主动关怀

主动关怀会在你启用后按间隔观察桌面截图，通过图片模型判断是否需要提醒，再生成适合 Bubble 或 Live2D 展示的短消息。

使用前请确认：

- 已在主控台或表现态设置中启用主动桌面观察。
- 观察间隔和触发概率符合你的使用习惯。
- macOS 已授予 Hermes-Yachiyo 屏幕录制权限。
- 如需语音播报，已配置主动关怀语音。

## 权限提示

主动桌面观察需要 macOS 屏幕录制权限。如果启用时权限不足，应用会打开系统隐私设置，并保持主动关怀关闭。授权后回到应用重新开启即可。

屏幕录制权限可在应用内检查。出于隐私考虑，正式文档中的截图只展示 Hermes-Yachiyo 应用自身窗口，不展示用户桌面内容。
