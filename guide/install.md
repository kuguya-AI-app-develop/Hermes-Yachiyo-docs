# 安装与首启

本页说明 macOS 发布包的第一次打开流程。新版 Hermes-Yachiyo 已经把 Hermes Agent 准备流程放进应用内，请优先使用安装器的一键安装，不需要从文档里手动复制安装命令。

## 1. 下载发布包

首页提供两个固定下载入口：

- [下载正式版](https://github.com/kuguya-AI-app-develop/Hermes-Yachiyo/releases/download/main-latest/Hermes-Yachiyo-main-latest.dmg)：适合日常使用，对应 `main-latest`。
- [下载实验版](https://github.com/kuguya-AI-app-develop/Hermes-Yachiyo/releases/download/develop-latest/Hermes-Yachiyo-develop-latest.dmg)：适合提前验证新功能，对应 `develop-latest`。

下载 DMG 后打开安装包，将 `Hermes-Yachiyo.app` 放入 `/Applications`。

## 2. 处理 macOS 未验证提示

当前发布包可能还没有 Apple Developer ID 签名和公证。第一次打开时，macOS 可能提示无法验证应用。

如果你确认 DMG 来自本站或 GitHub Releases 固定下载链接，可以这样继续：

1. 在提示框中点击“完成”，不要选择“移到废纸篓”。
2. 打开“系统设置 -> 隐私与安全性”。
3. 在“安全性”区域找到 Hermes-Yachiyo 被拦截的提示，点击“仍要打开”。
4. 回到确认弹窗后选择“打开”或“仍要打开”。

如果系统设置里没有出现“仍要打开”，回到 `/Applications`，按住 Control 点击 `Hermes-Yachiyo.app` 并选择“打开”。

## 3. 进入安装器

第一次打开后，应用会检查 Hermes Agent、模型配置和 Yachiyo 工作区状态。安装器会用分步状态告诉你下一步该做什么。

<figure class="guide-shot">
  <img src="/images/hermes-yachiyo/current-flow/01-installer-start.png" alt="Hermes-Yachiyo 安装器初始状态" />
  <figcaption>未安装 Hermes Agent 时，安装器会把“一键安装”作为第一步。</figcaption>
</figure>

## 4. 一键安装 Hermes Agent

点击“安装 Hermes Agent”。安装器会在应用内运行受控终端，自动准备用户目录下的运行环境。一次完整安装可能包括：

- 检查 macOS、Git、uv、Python、Node.js 等基础工具。
- 在 `~/.hermes` 下准备托管 runtime。
- 自动安装 Python 3.11 与 Node.js 22。
- 克隆并安装 Hermes Agent。
- 安装前端依赖和 Playwright 相关组件。

<figure class="guide-shot">
  <img src="/images/hermes-yachiyo/current-flow/02-installer-installing.png" alt="Hermes-Yachiyo 正在安装 Hermes Agent" />
  <figcaption>安装输出会实时显示，网络传输失败时安装器会自动重试。</figcaption>
</figure>

安装过程中，如果 GitHub clone 出现 `RPC failed`、`early EOF` 或 `invalid index-pack`，通常是网络传输中断。安装器会先自动重试；多次失败后再切换网络或代理重新点击安装。

如果提示缺少 `ripgrep` 或 `ffmpeg`，基础对话不受影响。需要相关能力时再手动安装，例如：

```sh
brew install ripgrep ffmpeg
```

## 5. 配置模型

安装完成后进入“模型配置”。填写 Provider、模型、Base URL 和 API Key。使用 OpenAI-compatible 中转服务时，Base URL 通常需要以 `/v1` 结尾。

密钥只填写在本机应用里，不要写进文档、截图或聊天记录。保存后点击连接测试，只有测试通过才代表桌面对话链路可用。

## 6. 初始化工作区

连接测试通过后，点击“初始化工作区”。默认路径是：

```text
~/.hermes/yachiyo/
```

这里会保存聊天数据库、附件缓存、导入资源、日志、工作区配置和备份相关数据。

## 7. 进入主控台

初始化完成后进入主控台。打包版 Bridge 默认监听：

```text
http://127.0.0.1:18420
```

开发模式可能使用 `8420`，以主控台显示为准。

<figure class="guide-shot">
  <img src="/images/hermes-yachiyo/current-flow/05-dashboard-ready.png" alt="Hermes-Yachiyo 主控台就绪" />
  <figcaption>Bridge running、模型已连接、工作区已初始化后，就可以开始日常使用。</figcaption>
</figure>

如果安装或初始化完成后页面仍停留在旧状态，先点击“重新检测”。仍未刷新时，退出并重新打开应用即可回到最新状态。
