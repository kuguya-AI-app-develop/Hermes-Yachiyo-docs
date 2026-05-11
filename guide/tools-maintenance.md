# 工具、诊断与维护

工具中心和设置页负责日常维护：查看 Hermes toolsets、补齐外部 Provider、运行诊断、检查应用更新、管理备份以及安全卸载。它们属于日常使用入口，不是内部测试页。

## 工具中心

工具中心会读取当前 Hermes 暴露的工具组，并区分可用、受限和待配置状态。某个工具显示 `limited` 只表示该工具缺少依赖或密钥，不影响主控台、对话、Bubble 或 Live2D 的基础使用。

<figure class="guide-shot">
  <img src="/images/hermes-yachiyo/current-flow/12-tool-center-overview.png" alt="工具中心概览" />
  <figcaption>工具中心会根据 Hermes 的实际工具清单展示配置卡片。</figcaption>
</figure>

常见外部依赖包括：

- Web：Firecrawl、Exa、Parallel、Tavily 或其他 Hermes 支持的网页读取 Provider Key。
- Browser CDP：可连接的 Chrome 调试端点，例如 `http://127.0.0.1:9222`。
- Image Generation：当前 Hermes 已安装或暴露的图片生成 Provider Key。
- Home Assistant、Discord、MoA、RL 等：按各自配置页填写必要环境变量或服务地址。

工具配置页只展示变量名和已配置状态，不会回传密钥明文。保存后可以运行静态检查和 Doctor 对应状态测试。文本对话、Bubble 和 Live2D 不要求所有工具都 ready；只配置你确实需要的工具即可。

## Browser CDP

Browser CDP 与基础 browser 工具分开显示。CDP 受限不会影响基础浏览器能力。工具中心可尝试启动或连接本机 Chrome 调试端口；如果自动启动失败，页面会给出可复制的手动命令。

如果自动启动提示 `/usr/bin/env: illegal option -- c`，优先使用页面给出的手动 Chrome 调试端口方式，再回到工具中心重新检测。

## 诊断

诊断页可以运行受控 Hermes 命令：

```text
hermes config check
hermes doctor
hermes auth list
```

建议在这些情况下运行诊断：

- 模型连接、图片链路或工具状态异常。
- 升级 Hermes Agent 后能力状态发生变化。
- 配置了新的 Provider Key、CDP 端点或外部服务。

## 应用更新

应用更新面板会显示当前渠道、当前构建、最新构建、更新元数据、下载文件、下载进度、校验状态和更新内容。渠道通常对应正式版 `main` 或开发版 `develop`，并会读取对应的 `main-latest` 或 `develop-latest` 更新元数据。

常用操作包括：

- 点击“检查更新”读取当前渠道的最新版本信息；如果当前构建已经是最新，页面会显示“已是最新”。
- 发现新版本后点击“下载更新”获取对应 DMG，并等待下载进度和校验状态完成。
- 点击“查看提交对比”查看当前构建到最新构建之间的变更。

下载完成后，按应用提示安装或替换 `/Applications` 中的 `Hermes-Yachiyo.app`。如果新版本第一次打开时再次出现 macOS 无法验证提示，请按 [安装与首启](/guide/install#_3-处理-macos-未验证提示) 中的“仍要打开”步骤处理。

更新完成后，建议重新打开应用。工具中心会刷新 tools list、Doctor 缓存和 Provider 列表。

## 备份与恢复

备份默认保存在：

```text
~/Hermes-Yachiyo-backups/
```

备份范围包括 Yachiyo 应用配置、工作空间、聊天数据库、导入资源、附件缓存和日志。Live2D 与 GPT-SoVITS 资源较大时，备份文件也会变大；导入完整资源后生成数百 MB 的备份属于正常现象。

恢复备份前请确认来源可信。应用会做路径和压缩包安全检查，避免把危险路径写入受保护位置。

## 卸载

卸载页会先生成可删除清单，并要求输入确认短语 `UNINSTALL`。可选择：

- 只删除 Yachiyo 工作空间与配置。
- 保留应用配置。
- 同时删除 Hermes Agent 相关数据。
- 同时删除 GPT-SoVITS 本地服务配置。
- 尝试删除当前 `.app` 本体。

删除正在运行的 `.app` 是 macOS best-effort 行为；如果系统阻止自动删除，请退出应用后从 `/Applications` 手动移除。
