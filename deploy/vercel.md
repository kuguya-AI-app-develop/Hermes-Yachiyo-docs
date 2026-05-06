# Vercel 与自定义域名

本仓库本身就是 VitePress 站点根目录，构建输出目录是 `.vitepress/dist`。根目录已经提供 `vercel.json`，让 Vercel 使用同一套构建参数。

## 本地验证

```bash
npm install
npm run docs:build
npm run docs:preview
```

默认本地预览地址：

```text
http://127.0.0.1:4175
```

## Vercel 项目设置

如果通过 Vercel Dashboard 导入 Git 仓库，使用：

| 设置 | 值 |
| --- | --- |
| Build Command | `npm run docs:build` |
| Output Directory | `.vitepress/dist` |
| Install Command | `npm install` |
| Node Version | `20` 或更高 |

这些值与 VitePress 官方部署说明一致：站点根目录可以直接运行 `vitepress build .`，默认输出在 `.vitepress/dist`。

## CLI 部署

已经登录 Vercel CLI 后，可以在仓库根目录执行：

```bash
vercel
vercel --prod
```

第一次运行会把本地目录链接到 Vercel 项目。后续推送到绑定分支后，Vercel 可以自动构建。

## 自定义域名

在 Vercel Project 的 `Settings -> Domains` 添加你的域名。添加后按 Vercel 返回的 DNS 提示配置：

- Apex 域名，例如 `example.com`：通常使用 A 记录。
- 子域名，例如 `docs.example.com`：通常使用 CNAME 记录。

如果域名托管在外部 DNS 服务商，DNS 记录应在该服务商控制台配置；如果使用 Vercel nameservers，可以用 Vercel DNS 管理。

常用检查命令：

```bash
vercel domains inspect example.com
vercel certs ls
```

DNS 生效后，Vercel 会自动签发 TLS 证书。

## 参考

- [VitePress 部署指南](https://vitepress.dev/guide/deploy)
- [Vercel 构建配置](https://vercel.com/docs/deployments/configure-a-build)
- [Vercel 自定义域名设置](https://vercel.com/docs/domains/set-up-custom-domain)
