# 安装与首启

本页面向 macOS 发布包首用流程。源码开发启动方式请看仓库 README。

## 1. 打开应用

将 `Hermes-Yachiyo.app` 放入 `/Applications` 后打开。首次启动会进入安装引导，应用会检测 Hermes Agent 是否已安装。

<figure class="guide-shot">
  <img src="/images/hermes-yachiyo/first-run/01-installer-first-launch.png" alt="首次启动安装页" />
  <figcaption>首次启动时，应用会提示安装 Hermes Agent。</figcaption>
</figure>

## 2. 安装或重新检测 Hermes Agent

点击“安装 Hermes Agent”后，安装页会显示实时输出。若网络中断导致 GitHub 克隆失败，可以切换网络后重试，也可以手动安装 Hermes Agent，再回到应用点击“重新检测”。

<figure class="guide-shot">
  <img src="/images/hermes-yachiyo/first-run/04-installer-detected-hermes.png" alt="检测到 Hermes Agent" />
  <figcaption>重新检测成功后，页面会显示 Hermes 版本、命令路径和工作空间状态。</figcaption>
</figure>

## 3. 配置模型

填写 Provider、模型、Base URL 和 API Key，然后点击“保存并测试连接”。API Key 输入框使用密码控件，截图不会展示明文。

<figure class="guide-shot">
  <img src="/images/hermes-yachiyo/first-run/07-model-config-verified.png" alt="模型连接测试通过" />
  <figcaption>连接测试通过后，继续初始化 Yachiyo 工作空间。</figcaption>
</figure>

## 4. 初始化工作空间

Yachiyo 工作空间默认创建在：

```text
~/.hermes/yachiyo/
```

这里会保存聊天数据库、导入资源、附件缓存、日志、备份相关数据和工作空间配置。

<figure class="guide-shot">
  <img src="/images/hermes-yachiyo/first-run/09-dashboard-ready.png" alt="主控台就绪" />
  <figcaption>初始化完成后进入主控台，Hermes、Workspace 和 Bridge 状态应为 ready/running。</figcaption>
</figure>

## 首启完成标准

- Hermes Agent 可被检测到。
- 模型连接测试通过。
- 工作空间初始化完成。
- 主控台可打开 Chat Window、Bubble/Live2D 设置、工具中心和诊断页。
