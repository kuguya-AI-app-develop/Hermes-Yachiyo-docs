---
layout: page
title: Hermes-Yachiyo
outline: false
---

<main class="portal-page">
  <section class="portal-hero">
    <div class="portal-hero__content">
      <span class="portal-kicker">macOS 桌面个人 Agent · Hermes Agent 桌面入口</span>
      <h1>Hermes-Yachiyo</h1>
      <p class="portal-hero__lead">把 Hermes Agent 带到本机桌面：第一次打开即可完成一键安装、模型配置和工作空间初始化，随后用 Chat Window、Bubble 或 Live2D 开始日常对话、桌面关怀、语音和工具调用。</p>
      <div class="portal-actions">
        <a class="portal-action" href="/guide/">开始完整体验</a>
        <a class="portal-action secondary" href="/user-manual">阅读使用手册</a>
      </div>
      <div class="portal-downloads" aria-label="下载 Hermes-Yachiyo">
        <a class="portal-download primary" href="https://github.com/kuguya-AI-app-develop/Hermes-Yachiyo/releases/download/main-latest/Hermes-Yachiyo-main-latest.dmg" target="_blank" rel="noreferrer">
          <span>下载正式版</span>
          <small>main-latest · macOS DMG</small>
        </a>
        <a class="portal-download" href="https://github.com/kuguya-AI-app-develop/Hermes-Yachiyo/releases/download/develop-latest/Hermes-Yachiyo-develop-latest.dmg" target="_blank" rel="noreferrer">
          <span>下载实验版</span>
          <small>develop-latest · macOS DMG</small>
        </a>
      </div>
    </div>
  </section>

  <section class="portal-proof" aria-label="产品能力摘要">
    <div class="portal-proof__item">
      <strong>桌面优先</strong>
      <span>主控台、对话、Bubble 与 Live2D 都是原生桌面窗口。</span>
    </div>
    <div class="portal-proof__item">
      <strong>多入口同会话</strong>
      <span>主控台、Chat Window、Bubble 与 Live2D 共享同一条当前会话链。</span>
    </div>
    <div class="portal-proof__item">
      <strong>按需扩展</strong>
      <span>Live2D、GPT-SoVITS、网页、浏览器和生图工具都可以按需要配置。</span>
    </div>
  </section>

  <section class="portal-section">
    <h2>一个本地 Agent 的桌面工作台</h2>
    <p class="portal-section__intro">Hermes-Yachiyo 不只是一个聊天窗口。它会在本机管理 Hermes runtime、Yachiyo 工作空间、模型连接、资源导入、工具状态、备份和卸载，让新用户可以从一个应用里走完整条使用路径。</p>
    <div class="portal-grid">
      <article class="portal-card">
        <img src="/images/hermes-yachiyo/current-flow/04-dashboard-ready.png" alt="Hermes-Yachiyo 主控台" />
        <div class="portal-card__body">
          <h3>主控台</h3>
          <p>查看 Hermes、Workspace、Bridge、工具、会话和桌面表现态。</p>
        </div>
      </article>
      <article class="portal-card">
        <img src="/images/hermes-yachiyo/current-flow/11-chat-window-live2d-session.png" alt="Hermes-Yachiyo 对话窗口" />
        <div class="portal-card__body">
          <h3>Chat Window</h3>
          <p>完整收发消息、图片附件、历史会话、停止任务和 Markdown 回复。</p>
        </div>
      </article>
      <article class="portal-card">
        <img src="/images/hermes-yachiyo/current-flow/05-bubble-ready.png" alt="Hermes-Yachiyo Bubble" />
        <div class="portal-card__body">
          <h3>Bubble</h3>
          <p>轻量悬浮入口，显示未读、处理中、失败、摘要和快捷消息。</p>
        </div>
      </article>
      <article class="portal-card">
        <img src="/images/hermes-yachiyo/current-flow/08-live2d-ready-cropped.png" alt="Hermes-Yachiyo Live2D" />
        <div class="portal-card__body">
          <h3>Live2D</h3>
          <p>角色桌面入口，可导入模型资源、显示回复气泡并承载主动关怀。</p>
        </div>
      </article>
    </div>
  </section>

  <section class="portal-section">
    <div class="portal-wide">
      <div>
        <h2>从第一次打开到日常维护</h2>
        <p class="portal-section__intro">推荐按这条路径体验：使用应用内一键安装准备 Hermes Agent，填写 Provider、模型、Base URL 和 API Key，初始化 Yachiyo 工作空间，发送第一条消息，再按需导入 Live2D 与 GPT-SoVITS 资源。</p>
        <div class="portal-list">
          <a href="/guide/install"><strong>安装与首启</strong><span>应用内一键安装、模型连接测试和工作空间初始化。</span></a>
          <a href="/guide/model-chat"><strong>对话与图片</strong><span>完整对话窗口、图片附件、任务停止和共享会话状态。</span></a>
          <a href="/guide/assets"><strong>资源导入</strong><span>Live2D ZIP、八千代 GPT-SoVITS 语音包和本地服务。</span></a>
          <a href="/guide/tools-maintenance"><strong>维护与诊断</strong><span>工具中心、应用更新、Hermes Doctor、备份、恢复和卸载预览。</span></a>
        </div>
      </div>
      <img src="/images/hermes-yachiyo/current-flow/12-tool-center-overview.png" alt="Hermes-Yachiyo 工具中心" />
    </div>
  </section>

  <section class="portal-section">
    <h2>边界清楚，数据留在本机</h2>
    <p class="portal-section__intro">Yachiyo 负责桌面体验、本地 Bridge、资源导入、主动观察、备份卸载和用户可见配置；Hermes Agent 负责模型与工具执行。除你主动配置的在线模型、网页工具或外部 TTS 外，工作空间、资源和备份默认保存在本机用户目录。</p>
    <div class="portal-grid">
      <article class="portal-card">
        <div class="portal-card__body">
          <h3>Hermes Agent</h3>
          <p>Agent 能力来源，负责模型、工具和执行链路。</p>
        </div>
      </article>
      <article class="portal-card">
        <div class="portal-card__body">
          <h3>Yachiyo Desktop</h3>
          <p>桌面入口、设置、资源导入、主动观察、备份卸载和本地 UI Bridge。</p>
        </div>
      </article>
      <article class="portal-card">
        <div class="portal-card__body">
          <h3>AstrBot</h3>
          <p>可选 QQ 接入层，用于把授权请求转发到本地 Yachiyo。</p>
        </div>
      </article>
      <article class="portal-card">
        <div class="portal-card__body">
          <h3>Hapi</h3>
          <p>Codex CLI 编码任务的成熟后端，不由桌面壳替代。</p>
        </div>
      </article>
    </div>
  </section>
</main>
