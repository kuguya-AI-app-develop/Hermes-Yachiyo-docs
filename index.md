---
layout: page
title: Hermes-Yachiyo
outline: false
---

<main class="portal-page">
  <section class="portal-hero">
    <div class="portal-hero__content">
      <span class="portal-kicker">macOS DMG 首用闭环已跑通 · Electron + React + Python Bridge</span>
      <h1>Hermes-Yachiyo</h1>
      <p class="portal-hero__lead">把 Hermes Agent 做成常驻本机的桌面个人助手：主控台、完整对话窗口、Bubble 悬浮入口、Live2D 角色、主动关怀、语音播报、资源导入、工具配置、诊断、备份与卸载管理。</p>
      <div class="portal-actions">
        <a class="portal-action" href="/guide/">开始阅读指南</a>
        <a class="portal-action secondary" href="/user-manual">查看完整使用手册</a>
      </div>
    </div>
  </section>

  <section class="portal-proof" aria-label="首用验证摘要">
    <div class="portal-proof__item">
      <strong>43 张</strong>
      <span>真实首用流程截图，覆盖安装、对话、资源、工具和维护。</span>
    </div>
    <div class="portal-proof__item">
      <strong>4 个入口</strong>
      <span>主控台、Chat Window、Bubble 与 Live2D 共享同一会话链。</span>
    </div>
    <div class="portal-proof__item">
      <strong>本地优先</strong>
      <span>Hermes runtime、Bridge、资源导入和维护数据都以本机为边界。</span>
    </div>
  </section>

  <section class="portal-section">
    <h2>不是聊天网页，是桌面助手外壳</h2>
    <p class="portal-section__intro">Hermes-Yachiyo 的产品形态是本地桌面应用。React 只是 Electron renderer；Python 后端和 FastAPI Bridge 负责本地运行时、任务状态和机器能力边界。</p>
    <div class="portal-grid">
      <article class="portal-card">
        <img src="/images/hermes-yachiyo/first-run/09-dashboard-ready.png" alt="Hermes-Yachiyo 主控台" />
        <div class="portal-card__body">
          <h3>主控台</h3>
          <p>查看 Hermes、Workspace、Bridge、工具、会话和显示模式状态。</p>
        </div>
      </article>
      <article class="portal-card">
        <img src="/images/hermes-yachiyo/first-run/15-chat-text-replied.png" alt="Hermes-Yachiyo 对话窗口" />
        <div class="portal-card__body">
          <h3>Chat Window</h3>
          <p>完整对话、图片附件、历史会话、停止任务和共享消息链。</p>
        </div>
      </article>
      <article class="portal-card">
        <img src="/images/hermes-yachiyo/first-run/26-bubble-window-ready.png" alt="Hermes-Yachiyo Bubble" />
        <div class="portal-card__body">
          <h3>Bubble</h3>
          <p>轻量常驻悬浮入口，显示未读、处理中、摘要和快捷消息。</p>
        </div>
      </article>
      <article class="portal-card">
        <img src="/images/hermes-yachiyo/first-run/25-live2d-window-rendered.png" alt="Hermes-Yachiyo Live2D" />
        <div class="portal-card__body">
          <h3>Live2D</h3>
          <p>角色桌面入口，可导入模型资源并承载主动关怀消息。</p>
        </div>
      </article>
    </div>
  </section>

  <section class="portal-section">
    <div class="portal-wide">
      <div>
        <h2>从首启到维护，已有可验证路径</h2>
        <p class="portal-section__intro">2026-05-05 的真实 DMG 首用走查覆盖了模型配置、工作空间初始化、图片链路、Bubble 快捷消息、Live2D ZIP 导入、GPT-SoVITS 手动测试、工具中心、诊断、备份和卸载预览。</p>
        <div class="portal-list">
          <a href="/guide/install"><strong>安装与首启</strong><span>Hermes Agent 检测、模型配置和工作空间初始化。</span></a>
          <a href="/guide/desktop-modes"><strong>桌面入口</strong><span>Window、Bubble、Live2D 和主动关怀如何协同。</span></a>
          <a href="/guide/tools-maintenance"><strong>工具与维护</strong><span>工具中心、诊断、更新检查、备份和卸载预览。</span></a>
        </div>
      </div>
      <img src="/images/hermes-yachiyo/first-run/42-settings-general-backup-created.png" alt="Hermes-Yachiyo 备份生成后" />
    </div>
  </section>

  <section class="portal-section">
    <h2>工程边界清楚，后续可以继续扩展</h2>
    <p class="portal-section__intro">Hermes-Yachiyo 负责本地桌面壳、本地运行时、本地能力、Bridge 和用户可见的配置管理；AstrBot 只做 QQ bridge；Hapi 继续保留 Codex CLI 工作流边界。</p>
    <div class="portal-grid">
      <article class="portal-card">
        <div class="portal-card__body">
          <h3>Hermes Agent</h3>
          <p>上游 agent 能力来源。Yachiyo 不复制 Hermes 的 agent 记忆或工具内核。</p>
        </div>
      </article>
      <article class="portal-card">
        <div class="portal-card__body">
          <h3>Yachiyo Desktop</h3>
          <p>桌面入口、设置、资源导入、主动观察、备份卸载和本地 Bridge。</p>
        </div>
      </article>
      <article class="portal-card">
        <div class="portal-card__body">
          <h3>AstrBot</h3>
          <p>可选 QQ 接入层，只转发授权请求，不拥有独立本地运行时。</p>
        </div>
      </article>
      <article class="portal-card">
        <div class="portal-card__body">
          <h3>Hapi</h3>
          <p>Codex CLI 编码任务仍由成熟后端承载，不搬进桌面壳。</p>
        </div>
      </article>
    </div>
  </section>
</main>
