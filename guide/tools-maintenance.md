# 工具、诊断与维护

工具中心用于查看 Hermes toolsets 和外部工具配置状态。维护入口覆盖诊断、更新检查、备份、恢复和卸载预览。

## 工具中心

工具中心会区分可用和受限工具。缺少外部 Key、CDP 端点或系统依赖时，相关工具会显示 `limited`，这不代表 Yachiyo 主功能不可用。

<figure class="guide-shot">
  <img src="/images/hermes-yachiyo/first-run/35-tools-overview.png" alt="工具中心概览" />
  <figcaption>首用测试中，工具中心能读取 Hermes toolsets 和配置卡片。</figcaption>
</figure>

常见外部依赖：

- Web：Firecrawl、Exa、Parallel 或 Tavily 等 Provider Key。
- Browser CDP：可连接的 Chrome CDP 端点。
- Image Generation：对应图片服务 Key。

## Hermes 更新与诊断

工具中心提供 Hermes 更新检查。诊断页可以运行受控命令：

- `hermes config check`
- `hermes doctor`
- `hermes auth list`

<figure class="guide-shot">
  <img src="/images/hermes-yachiyo/first-run/41-diagnostics-doctor.png" alt="Hermes Doctor 输出" />
  <figcaption>Doctor 会检查 Python、依赖、目录结构、命令安装和外部工具。</figcaption>
</figure>

## 备份与恢复

备份默认保存在：

```text
~/Hermes-Yachiyo-backups/
```

备份包含 Yachiyo 应用配置、工作空间、聊天数据库、导入资源、附件缓存和日志。导入资源越大，备份越大；首用测试中完整备份为 `465.3 MB`。

<figure class="guide-shot">
  <img src="/images/hermes-yachiyo/first-run/42-settings-general-backup-created.png" alt="备份生成后" />
  <figcaption>导入 Live2D 与 GPT-SoVITS 资源后，完整备份会包含这些本地资源。</figcaption>
</figure>

## 卸载预览

卸载页会先生成可删除清单，并要求输入确认短语 `UNINSTALL`。首用测试只验证了预览清单，没有执行真实卸载。

<figure class="guide-shot">
  <img src="/images/hermes-yachiyo/first-run/43-settings-uninstall-preview.png" alt="卸载预览" />
  <figcaption>卸载预览能降低误删风险，用户可以先确认范围再执行。</figcaption>
</figure>
