# Hermes-Yachiyo 使用手册

适用对象：第一次安装并使用 Hermes-Yachiyo 的 macOS 用户。

Hermes-Yachiyo 是桌面优先的本地个人 Agent 应用。它把 Hermes Agent 包装成常驻本机的八千代桌面工作台，并提供一键安装、模型配置、完整对话窗口、Bubble、Live2D、主动关怀、GPT-SoVITS 语音、工具诊断、应用更新、备份和卸载管理。

## 1. 产品结构

- Hermes Agent：模型、工具和 agent 执行能力来源。
- Yachiyo Desktop：Electron 桌面壳、React 界面、桌面窗口和系统入口。
- Python Backend：管理 Hermes runtime、工作区、本地能力和维护任务。
- Local Bridge：打包版默认监听 `127.0.0.1:18420`，只服务本机 UI 与授权集成。
- 可选资源：Live2D 模型、GPT-SoVITS 语音包和本地 TTS 服务。

工作区、聊天数据库、附件、资源和备份默认保存在用户目录。在线模型、网页工具和外部 TTS 只会在你主动配置后使用。

## 2. 第一次打开

把 `Hermes-Yachiyo.app` 放入 `/Applications` 后打开。未安装 Hermes Agent 时，按这个顺序操作：

```text
安装器
  -> 安装 Hermes Agent
  -> 模型配置
  -> 保存并测试连接
  -> 初始化 Yachiyo 工作区
  -> 进入主控台
```

<figure class="guide-shot">
  <img src="/images/hermes-yachiyo/current-flow/01-installer-start.png" alt="首次启动安装器" />
  <figcaption>安装器会根据本机状态显示下一步，不需要手动运行安装命令。</figcaption>
</figure>

一键安装会自动准备用户目录下的 Python 3.11、Node.js 22、Hermes Agent 和相关依赖。网络中断时安装器会重试；安装完成后如果页面没有刷新，点击“重新检测”或重新打开应用。

## 3. 模型与工作区

在“模型配置”中填写 Provider、模型、Base URL 和 API Key。使用兼容 OpenAI 的中转服务时，Base URL 通常以 `/v1` 结尾。

保存后运行连接测试。测试通过后初始化工作区：

```text
~/.hermes/yachiyo/
```

<figure class="guide-shot">
  <img src="/images/hermes-yachiyo/current-flow/05-dashboard-ready.png" alt="主控台就绪" />
  <figcaption>主控台显示 Bridge running、模型已连接、工作区已初始化后，就可以开始使用。</figcaption>
</figure>

## 4. 对话与图片

Chat Window 支持文本、图片附件、粘贴图片、历史会话、停止任务和复制回复。图片附件会先保存到本机工作区，再由 Hermes 按当前视觉链路处理。

<figure class="guide-shot">
  <img src="/images/hermes-yachiyo/current-flow/07-chat-window.png" alt="图片对话" />
  <figcaption>主控台、Chat Window、Bubble 和 Live2D 共享同一条当前会话链。</figcaption>
</figure>

发送图片前先运行图片链路测试。主模型不支持图片时，请配置 vision Provider 和 vision 模型。

## 5. 桌面入口

Bubble 是轻量桌面入口，适合常驻屏幕边缘。Live2D 是角色桌面入口，适合导入模型后打开桌面舞台。

<figure class="guide-shot compact-shot">
  <img src="/images/hermes-yachiyo/current-flow/06-bubble-ready.png" alt="Bubble 窗口" />
  <figcaption>Bubble 显示待机、未读、处理中和最近回复状态。</figcaption>
</figure>

<figure class="guide-shot compact-shot">
  <img src="/images/hermes-yachiyo/current-flow/08-live2d-window.png" alt="Live2D 窗口" />
  <figcaption>Live2D 资源导入后，可以作为独立桌面角色窗口使用。</figcaption>
</figure>

## 6. Live2D 资源

打开“Live2D 模式”或“资源管理”，导入 Live2D ZIP。有效资源通常包含 `.model3.json`、`.moc3`、贴图、物理配置和表情文件。默认目录：

```text
~/.hermes/yachiyo/assets/live2d/
```

导入后，资源管理页会显示模型是否可用，以及当前是否正在使用。

## 7. GPT-SoVITS 语音

打开“GPT-SoVITS”或“资源管理”，导入八千代语音包 ZIP。导入后应用会填入 GPT 权重、SoVITS 权重、参考音频、参考文本和默认语言参数。

本机 GPT-SoVITS API 默认地址：

```text
http://127.0.0.1:9880
```

常见服务目录：

```text
~/AI/GPT-SoVITS
```

<figure class="guide-shot">
  <img src="/images/hermes-yachiyo/current-flow/11-gpt-sovits-page.png" alt="GPT-SoVITS 设置" />
  <figcaption>语音中枢用于主动关怀播报和手动 TTS 测试；普通聊天回复默认仍是文本。</figcaption>
</figure>

先用短句运行手动测试，再启用主动关怀语音。

## 8. 主动关怀

主动关怀会在启用后按间隔观察桌面截图，通过视觉模型判断是否需要提醒，并把短消息显示到 Bubble 或 Live2D。启用前请确认图片链路可用，并在 macOS “屏幕录制”权限中允许 Hermes-Yachiyo。

## 9. 诊断、工具与更新

诊断页支持运行：

```text
hermes config check
hermes doctor
hermes auth list
```

工具页会区分可用、受限和待配置能力。基础聊天不要求所有工具 ready；Web、Browser CDP、图片生成、Home Assistant、Discord 等按需配置即可。

应用更新入口会读取当前渠道的最新构建信息。发现新版本后，按页面提示下载 DMG、校验并替换应用。

## 10. 备份、恢复与卸载

默认备份目录：

```text
~/Hermes-Yachiyo-backups/
```

备份包含应用配置、Yachiyo 工作区、聊天数据库、附件、日志和导入资源。导入 Live2D 与 GPT-SoVITS 后，备份变成数百 MB 属于正常现象。

卸载页会先生成预览清单，并要求输入确认短语 `UNINSTALL`。没有确认前不会删除数据。

## 11. 推荐完整流程

1. 下载 DMG，把应用放入 `/Applications`。
2. 打开安装器，一键安装 Hermes Agent。
3. 配置模型并测试连接。
4. 初始化 `~/.hermes/yachiyo/` 工作区。
5. 打开 Chat Window，发送第一条文本消息。
6. 测试图片链路，再发送一张正常尺寸图片。
7. 打开 Bubble，确认桌面入口可用。
8. 导入 Live2D ZIP，打开 Live2D 窗口。
9. 导入 GPT-SoVITS 语音包，确认本地服务和 TTS 测试。
10. 打开诊断工具，确认基础状态。
11. 创建一次备份，了解恢复和卸载预览。
