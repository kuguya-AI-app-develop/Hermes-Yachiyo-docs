import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Hermes-Yachiyo',
  description: '桌面优先的本地个人 Agent 使用指南',
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
      { text: '开始使用', link: '/guide/' },
      { text: '使用手册', link: '/user-manual' },
      { text: '排障', link: '/guide/troubleshooting' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '用户指南',
          items: [
            { text: '体验路径', link: '/guide/' },
            { text: '安装与首启', link: '/guide/install' },
            { text: '模型、图片与对话', link: '/guide/model-chat' },
            { text: '桌面入口与主动关怀', link: '/guide/desktop-modes' },
            { text: 'Live2D 与语音资源', link: '/guide/assets' },
            { text: '工具、诊断与维护', link: '/guide/tools-maintenance' },
            { text: '排障', link: '/guide/troubleshooting' }
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
