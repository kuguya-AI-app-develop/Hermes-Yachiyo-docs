---
layout: page
title: Hermes-Yachiyo
outline: false
---

<main class="portal-page">
  <section class="portal-hero">
    <div class="portal-hero__content">
      <span class="portal-kicker">macOS 桌面个人 Agent · Powered by Hermes Agent</span>
      <h1>Hermes-Yachiyo</h1>
      <p class="portal-hero__lead">把 Hermes Agent 变成真正住在桌面上的八千代：应用内一键安装、模型配置、图片输入、Chat Window、Bubble、Live2D、GPT-SoVITS 语音、工具诊断、备份和卸载都在同一个桌面工作台里完成。</p>
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
      <strong>从零开始</strong>
      <span>一键安装 Hermes Agent，自动准备 Python 与 Node runtime，再初始化本机工作区。</span>
    </div>
    <div class="portal-proof__item">
      <strong>同一会话</strong>
      <span>主控台、Chat Window、Bubble 与 Live2D 共享会话、附件和任务状态。</span>
    </div>
    <div class="portal-proof__item">
      <strong>本地可控</strong>
      <span>资源、聊天数据库、附件、日志和备份默认保存在用户自己的目录。</span>
    </div>
  </section>

  <section class="portal-section">
    <h2>桌面工作台</h2>
    <p class="portal-section__intro">新版界面把新用户需要走的路径都放在左侧导航：安装器、模型配置、对话、气泡模式、Live2D 模式、GPT-SoVITS、资源管理、工作区、诊断工具和设置。第一次使用只需要按顺序点完这些入口。</p>
    <div class="portal-grid">
      <article class="portal-card">
        <img src="/images/hermes-yachiyo/current-flow/05-dashboard-ready.png" alt="Hermes-Yachiyo 主控台" />
        <div class="portal-card__body">
          <h3>主控台</h3>
          <p>查看 Bridge、模型连接、工作区、桌面工具和最近活动。</p>
        </div>
      </article>
      <article class="portal-card">
        <img src="/images/hermes-yachiyo/current-flow/07-chat-window.png" alt="Hermes-Yachiyo 对话窗口" />
        <div class="portal-card__body">
          <h3>对话</h3>
          <p>发送文本和图片附件，管理会话，停止任务，查看完整回复。</p>
        </div>
      </article>
      <article class="portal-card">
        <img src="/images/hermes-yachiyo/current-flow/06-bubble-ready.png" alt="Hermes-Yachiyo Bubble" />
        <div class="portal-card__body">
          <h3>Bubble</h3>
          <p>轻量桌面入口，适合常驻边缘并快速回到当前会话。</p>
        </div>
      </article>
      <article class="portal-card">
        <img src="/images/hermes-yachiyo/current-flow/08-live2d-window.png" alt="Hermes-Yachiyo Live2D 窗口" />
        <div class="portal-card__body">
          <h3>Live2D</h3>
          <p>导入角色资源后打开桌面舞台，配合回复气泡、动作和语音使用。</p>
        </div>
      </article>
    </div>
  </section>

  <section class="portal-section">
    <div class="portal-wide">
      <div>
        <h2>推荐体验路线</h2>
        <p class="portal-section__intro">先让应用自己安装 Hermes Agent，再配置模型并初始化工作区。文本和图片聊天通过后，继续导入 Live2D 与 GPT-SoVITS 资源，最后熟悉诊断、备份和卸载预览。</p>
        <div class="portal-list">
          <a href="/guide/install"><strong>安装与首启</strong><span>一键安装、模型配置、连接测试和工作区初始化。</span></a>
          <a href="/guide/model-chat"><strong>模型、图片与对话</strong><span>Provider、Base URL、视觉链路、附件和会话同步。</span></a>
          <a href="/guide/assets"><strong>资源导入</strong><span>Live2D ZIP、八千代 GPT-SoVITS 语音包和本地服务。</span></a>
          <a href="/guide/tools-maintenance"><strong>维护与诊断</strong><span>工具状态、Doctor、应用更新、备份、恢复和卸载预览。</span></a>
        </div>
      </div>
      <img src="/images/hermes-yachiyo/current-flow/14-diagnostics.png" alt="Hermes-Yachiyo 诊断工具" />
    </div>
  </section>

  <section class="portal-section">
    <h2>清楚的边界</h2>
    <p class="portal-section__intro">Yachiyo Desktop 管理桌面体验、本地 Bridge、设置、资源、主动关怀、备份和卸载；Hermes Agent 负责模型与工具执行。在线模型、网页工具和外部 TTS 只会在你主动配置后使用。</p>
    <div class="portal-grid">
      <article class="portal-card">
        <div class="portal-card__body">
          <h3>Hermes Agent</h3>
          <p>Agent 内核，负责模型、工具、任务和执行链路。</p>
        </div>
      </article>
      <article class="portal-card">
        <div class="portal-card__body">
          <h3>Yachiyo Desktop</h3>
          <p>桌面窗口、资源导入、设置、诊断、备份和本地 UI Bridge。</p>
        </div>
      </article>
      <article class="portal-card">
        <div class="portal-card__body">
          <h3>Local Workspace</h3>
          <p>默认位于 <code>~/.hermes/yachiyo/</code>，保存会话、附件、资源和日志。</p>
        </div>
      </article>
      <article class="portal-card">
        <div class="portal-card__body">
          <h3>可选集成</h3>
          <p>AstrBot、Web、Browser CDP、图片生成、Home Assistant 等能力按需配置。</p>
        </div>
      </article>
    </div>
  </section>
</main>
