import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Hermes-Yachiyo',
  description: '桌面优先的本地个人 Agent 门户',
  lang: 'zh-CN',
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['meta', { name: 'theme-color', content: '#111827' }],
    ['meta', { property: 'og:title', content: 'Hermes-Yachiyo' }],
    ['meta', { property: 'og:description', content: '把 Hermes Agent 做成常驻本机的桌面个人助手。' }],
    ['meta', { property: 'og:type', content: 'website' }]
  ],
  themeConfig: {
    siteTitle: 'Hermes-Yachiyo',
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '部署', link: '/deploy/vercel' },
      { text: '完整手册', link: '/user-manual' },
      { text: '首用报告', link: '/experience-report-2026-05-05' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '上手指南',
          items: [
            { text: '总览', link: '/guide/' },
            { text: '安装与首启', link: '/guide/install' },
            { text: '模型、图片与对话', link: '/guide/model-chat' },
            { text: '桌面入口与主动关怀', link: '/guide/desktop-modes' },
            { text: 'Live2D 与语音资源', link: '/guide/assets' },
            { text: '工具、诊断与维护', link: '/guide/tools-maintenance' },
            { text: '排障', link: '/guide/troubleshooting' }
          ]
        },
        {
          text: '原始资料',
          items: [
            { text: '完整使用手册', link: '/user-manual' },
            { text: '截图索引', link: '/screenshot-index' },
            { text: '首用体验报告', link: '/experience-report-2026-05-05' },
            { text: '首用 Smoke Test', link: '/first-run-smoke-test-2026-05-05' }
          ]
        }
      ],
      '/deploy/': [
        {
          text: '部署',
          items: [
            { text: 'Vercel 与自定义域名', link: '/deploy/vercel' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/kuguya-AI-app-develop/Hermes-Yachiyo' }
    ],
    search: {
      provider: 'local'
    },
    outline: {
      label: '本页目录',
      level: [2, 3]
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
    },
    footer: {
      message: 'Desktop-first local agent experience, powered by Hermes Agent.',
      copyright: 'Copyright © 2026 Hermes-Yachiyo'
    }
  }
})
