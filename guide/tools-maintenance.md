# 工具、诊断与维护

工具、诊断和维护入口属于日常使用的一部分，不是内部测试页。你不需要把所有工具都配到 ready；基础聊天、Bubble 和 Live2D 只依赖模型连接、工作区和本地 Bridge。

## 诊断工具

诊断页会汇总 Python、Node.js、Bridge、模型、工作区、Live2D、TTS 和 Hermes 工具状态，并提供几个受控命令：

```text
hermes config check
hermes doctor
hermes auth list
```

<figure class="guide-shot">
  <img src="/images/hermes-yachiyo/current-flow/14-diagnostics.png" alt="Hermes-Yachiyo 诊断工具" />
  <figcaption>诊断页会把可用项、警告项和需要处理的工具分开显示。</figcaption>
</figure>

本次验证中，`hermes config check` 通过；基础 Browser 工具测试通过；Web 工具因为未配置网页 Provider Key 而测试失败，这不影响普通聊天。

## 工具配置

工具配置页会显示 Hermes 暴露的工具组，例如 Web、Browser、Browser CDP、Image Generation、Discord、Home Assistant、MoA、RL 等。

常见状态含义：

- 可用：依赖、命令或必要配置已经满足。
- 受限：缺少某个外部 Key、CDP endpoint、本地系统依赖或服务。
- 待配置：工具存在，但需要你按需填写环境变量或服务地址。

Web 工具通常需要 Firecrawl、Exa、Parallel、Tavily 等 Provider Key。Browser CDP 需要可连接的 Chrome 调试端点，例如 `http://127.0.0.1:9222`。这些能力按需配置即可。

## 应用更新

底部“检查更新”和更新页会读取当前渠道的 latest 元数据。正式版通常对应 `main-latest`，实验版通常对应 `develop-latest`。

检查更新不会替你立即替换应用。发现新版本后，按页面提示下载 DMG、校验文件并安装。更新完成后重新打开应用，工具列表、Doctor 缓存和 Provider 列表会刷新。

## 工作区与备份

工作区页展示会话、资源、日志和备份入口。默认工作区：

```text
~/.hermes/yachiyo/
```

默认备份目录：

```text
~/Hermes-Yachiyo-backups/
```

<figure class="guide-shot">
  <img src="/images/hermes-yachiyo/current-flow/13-workspace.png" alt="Hermes-Yachiyo 工作区页" />
  <figcaption>工作区页可以进入会话列表、创建备份、打开工作区和资源目录。</figcaption>
</figure>

备份范围包括应用配置、Yachiyo 工作区、聊天数据库、附件、日志和导入资源。导入完整 Live2D 与 GPT-SoVITS 后，数百 MB 级备份属于正常现象。

## 卸载预览

卸载页会先生成预览清单，不会直接删除数据。执行卸载前需要输入确认短语：

```text
UNINSTALL
```

可选范围包括只删除 Yachiyo 数据、保留配置、同时删除 Hermes Agent 数据、同时处理 GPT-SoVITS 本地服务，或尝试删除当前 `.app` 本体。

如果检测到 GPT-SoVITS 本地服务而你未选择卸载它，预览会提示服务目录和开机自启配置将被保留。
