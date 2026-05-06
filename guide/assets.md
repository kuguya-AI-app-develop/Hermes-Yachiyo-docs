# Live2D 与语音资源

Hermes-Yachiyo 不把大型 Live2D 模型和 GPT-SoVITS 音色资源直接打进主仓库。资源包按需下载、导入到本机用户目录。

## Live2D 资源

Live2D 资源推荐放在：

```text
~/.hermes/yachiyo/assets/live2d/
```

设置页支持“导入资源包 ZIP”和“选择模型目录”。有效目录至少需要 `.model3.json` 或 `.moc3`。

<figure class="guide-shot">
  <img src="/images/hermes-yachiyo/first-run/23-settings-live2d-imported.png" alt="Live2D 导入成功" />
  <figcaption>导入成功后，设置页会显示模型路径、表达式和资源状态。</figcaption>
</figure>

## GPT-SoVITS 语音包

八千代 GPT-SoVITS 语音包是独立资源 release，文件名为：

```text
Hermes-Yachiyo-yachiyo-gpt-sovits-v4.zip
```

导入步骤：

1. 打开“主动关怀语音”。
2. 选择 `GPT-SoVITS 本地服务`。
3. 点击“导入语音包 ZIP”。
4. 确认 GPT 权重、SoVITS 权重和参考音频路径已自动填入。
5. 保存设置并测试语音。

<figure class="guide-shot">
  <img src="/images/hermes-yachiyo/first-run/29-tts-settings-imported-saved.png" alt="TTS 语音包导入并保存" />
  <figcaption>语音包只包含音色资源，不包含 GPT-SoVITS 服务本体。</figcaption>
</figure>

## 本地 TTS 服务

如果要真实播放主动关怀语音，本机还需要运行 GPT-SoVITS API 服务。设置页提供服务目录、启动命令、打开服务终端、LaunchAgent 安装/移除和状态刷新入口。

首次加载权重可能较慢。手动测试成功与主动关怀自动播报是两条不同链路，排障时应分别确认。

<figure class="guide-shot">
  <img src="/images/hermes-yachiyo/first-run/31-tts-test-success.png" alt="TTS 测试成功" />
  <figcaption>手动 TTS 测试成功后，页面会显示测试已完成。</figcaption>
</figure>
