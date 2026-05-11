# 安装与首启

本页说明 macOS 发布包的第一次打开流程。Hermes-Yachiyo 已经把 Hermes Agent 的准备流程放进应用内，请优先使用安装引导的一键安装与检测能力；源码开发启动方式请以项目 README 为准。

## 1. 下载发布包

首页已经提供两个固定下载入口：

- [下载正式版](https://github.com/kuguya-AI-app-develop/Hermes-Yachiyo/releases/download/main-latest/Hermes-Yachiyo-main-latest.dmg)：适合日常使用，对应 `main-latest`。
- [下载实验版](https://github.com/kuguya-AI-app-develop/Hermes-Yachiyo/releases/download/develop-latest/Hermes-Yachiyo-develop-latest.dmg)：适合提前验证新功能，对应 `develop-latest`。

下载 DMG 后打开安装包，将 `Hermes-Yachiyo.app` 放入 `/Applications`。

## 2. 打开应用

将 `Hermes-Yachiyo.app` 放入 `/Applications` 后打开。应用会先检查本机是否能找到 Hermes Agent、Hermes 是否完成 setup，以及 Yachiyo 工作空间是否已经初始化。

<figure class="guide-shot">
  <img src="/images/hermes-yachiyo/current-flow/01-installer-workspace-init-required.png" alt="首次启动安装页" />
  <figcaption>首次打开时，安装引导会根据当前状态给出下一步操作。</figcaption>
</figure>

## 3. 处理 macOS 未验证提示

当前发布包暂未使用 Apple Developer ID 签名和公证。第一次打开时，macOS 可能提示“未打开 Hermes-Yachiyo”或“Apple 无法验证 Hermes-Yachiyo 是否包含可能危害 Mac 安全或泄漏隐私的恶意软件”。这是 Gatekeeper 对未签名应用的保护提示。

如果你确认 DMG 来自本页或首页的 GitHub Releases 固定下载链接，可以按下面方式继续打开：

1. 在提示框中点击“完成”关闭提示，不要选择“移到废纸篓”。
2. 打开“系统设置 -> 隐私与安全性”。
3. 在“安全性”区域找到 Hermes-Yachiyo 被拦截的提示，点击“仍要打开”。
4. 回到确认弹窗后，再选择“打开”或“仍要打开”。

完成后，同一个应用通常不需要重复授权。如果系统设置里没有出现“仍要打开”，回到 `/Applications`，按住 Control 点击 `Hermes-Yachiyo.app` 并选择“打开”，再按系统提示继续。

## 4. 准备 macOS 基础工具

如果系统缺少 Git、Python、命令行工具或必要 shell 环境，先点击“准备 macOS 基础工具”。应用会打开受控终端，按提示完成后回到安装引导并点击“重新检测”。

这一步只准备基础环境，不会替你填写模型密钥。

## 5. 一键安装或检测 Hermes Agent

如果 Hermes Agent 未安装，点击安装引导中的“安装 Hermes Agent”。安装页会显示实时输出，并把 Hermes 安装到当前用户环境。安装完成后，点击“重新检测”确认 Hermes 命令可用。

<figure class="guide-shot">
  <img src="/images/hermes-yachiyo/current-flow/03-installer-ready.png" alt="检测到 Hermes Agent" />
  <figcaption>检测成功后，页面会显示 Hermes 版本、命令路径、工作空间状态和模型配置入口。</figcaption>
</figure>

如果你已经手动安装过 Hermes Agent，也可以直接点击“重新检测”。只要当前应用进程能读到 `hermes` 命令，就会进入下一步。安装完成后如果页面仍停留在旧状态，先点击“重新检测”；仍未刷新时退出并重新打开应用。

## 6. 配置模型

在“模型配置向导”填写 Provider、模型、Base URL 和 API Key，然后点击“保存并测试连接”。测试通过后，Yachiyo 会把连接状态记录下来；如果以后修改 Provider、模型或 Base URL，需要重新测试。

部分 Provider 使用外部授权，不一定需要在此处填写 API Key。若使用 OpenAI-compatible 中转服务，请确认 Base URL 以服务商要求的 `/v1` 地址结尾。密钥只填写在本机应用中，不要写进文档、截图或聊天记录。

## 7. 初始化工作空间

模型配置通过后点击“初始化工作空间”。默认工作空间为：

```text
~/.hermes/yachiyo/
```

这里会保存聊天数据库、导入资源、附件缓存、日志、备份相关数据和工作空间配置。

<figure class="guide-shot">
  <img src="/images/hermes-yachiyo/current-flow/04-dashboard-ready.png" alt="主控台就绪" />
  <figcaption>初始化完成后进入主控台，Bridge 应显示为 running。</figcaption>
</figure>

如果你还没有完整填写模型/API Key，应用会在初始化前提醒风险。可以取消并回到模型配置，也可以先初始化，之后在主控台继续补齐配置。

## 8. 进入主控台

主控台是日常管理入口。第一次进入后，建议按顺序确认：

- Hermes 状态为已安装并初始化。
- Workspace 已初始化并显示本机路径。
- Bridge 为 `running`，默认监听 `127.0.0.1:8420`。
- 点击“打开对话”发送第一条消息。
- 需要常驻桌面入口时，点击“打开表现态”启动 Bubble 或 Live2D。
- 准备导入资源前，先确认文本模型连接测试已经通过。
