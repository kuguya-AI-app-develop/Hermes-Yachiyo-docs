# Live2D 与语音资源

Hermes-Yachiyo 不把大型 Live2D 模型和 GPT-SoVITS 音色资源直接打进主应用。资源包按需导入，默认保存到本机工作区，并由资源管理页统一展示。

## Live2D 资源

Live2D ZIP 通常包含 `.model3.json`、`.moc3`、贴图、物理配置和表情文件。导入后，默认目录是：

```text
~/.hermes/yachiyo/assets/live2d/
```

操作步骤：

1. 打开“Live2D 模式”或“资源管理”。
2. 点击资源设置或导入入口。
3. 选择 Live2D ZIP。
4. 保存设置。
5. 点击“打开 Live2D”确认桌面角色能渲染。

<figure class="guide-shot">
  <img src="/images/hermes-yachiyo/current-flow/12-resource-manager.png" alt="Hermes-Yachiyo 资源管理页" />
  <figcaption>资源管理页会显示当前 Live2D 资源、默认资源目录和语音资源状态。</figcaption>
</figure>

本次验证导入后，资源管理页识别到 `yachiyo` Live2D 模型，并把它标记为“使用中”。

## GPT-SoVITS 语音包

八千代 GPT-SoVITS 语音包是独立 ZIP。导入后，Yachiyo 会读取 preset，并自动填入：

- GPT 权重路径。
- SoVITS 权重路径。
- 参考音频路径。
- 参考文本。
- 参考音频语言。
- 默认文本语言和采样参数。

默认语音资源目录是：

```text
~/.hermes/yachiyo/assets/tts/
```

<figure class="guide-shot">
  <img src="/images/hermes-yachiyo/current-flow/11-gpt-sovits-page.png" alt="Hermes-Yachiyo GPT-SoVITS 设置页" />
  <figcaption>语音中枢负责主动关怀播报、音色资源和本地 GPT-SoVITS 服务状态。</figcaption>
</figure>

## 本地 GPT-SoVITS 服务

语音包只包含音色资源，不包含完整 GPT-SoVITS 服务本体。真实发声还需要本机 API 服务可达。默认地址：

```text
http://127.0.0.1:9880
```

常见服务目录：

```text
~/AI/GPT-SoVITS
```

常见启动命令：

```sh
python api_v2.py -a 127.0.0.1 -p 9880
```

语音页可以检查本地服务、安装或接管 LaunchAgent、刷新状态并运行测试。本次验证中，本机服务可达，LaunchAgent 正在运行，依赖和基础模型文件齐全，短句“彩叶，测试一下。”返回 `audio/wav`。

## 资源与备份

导入 Live2D 与 GPT-SoVITS 后，备份文件会明显变大。本次导入完整资源后创建的备份约 `260 MB`。这是正常现象，因为备份会包含应用配置和 Yachiyo 工作区。

如果只想备份轻量配置，先确认资源目录大小；如果要完整迁移角色和语音能力，请保留完整备份。
