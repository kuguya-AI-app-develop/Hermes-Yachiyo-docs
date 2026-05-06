# Live2D 与语音资源

Hermes-Yachiyo 不把大型 Live2D 模型和 GPT-SoVITS 音色资源直接打进主仓库。资源包按需下载或分发，导入后保存在本机用户目录，并由应用设置页维护路径。

## Live2D 资源

Live2D 设置页提供四个常用操作：

- 选择模型目录：使用已经解压好的模型目录。
- 导入资源包 ZIP：把下载的 Live2D 资源包导入默认目录。
- 打开导入目录：查看本机资源存放位置。
- 打开 Releases：用系统默认浏览器打开资源发布页。

默认导入目录为：

```text
~/.hermes/yachiyo/assets/live2d/
```

<figure class="guide-shot">
  <img src="/images/hermes-yachiyo/current-flow/08-live2d-ready-cropped.png" alt="Live2D 导入成功" />
  <figcaption>导入成功并切换到 Live2D 模式后，角色窗口会只显示应用自己的舞台内容。</figcaption>
</figure>

资源包如果包含中文、日文或其他非 ASCII 文件名，Yachiyo 会在导入时尝试恢复正确编码，并避免生成乱码目录。导入成功后，应用会自动寻找 `.model3.json`、`.moc3`、表情和动作文件；切换显示模式后，如窗口未立即刷新，退出并重新打开应用即可。

## GPT-SoVITS 语音包

八千代 GPT-SoVITS 语音包是独立资源包。常见文件名为：

```text
Hermes-Yachiyo-yachiyo-gpt-sovits-v4.zip
```

导入步骤：

1. 打开“主动关怀语音”。
2. 将 TTS Provider 切换为 `GPT-SoVITS 本地服务`。
3. 点击“导入语音包 ZIP”。
4. 确认 GPT 权重、SoVITS 权重、参考音频、参考文本和语言参数已经填入。
5. 保存设置，刷新本地服务状态，再测试语音。

语音包只包含音色资源，不包含 GPT-SoVITS 服务本体。资源导入后，Yachiyo 会把权重、参考音频和默认语言参数写入 TTS 配置；真实发声仍需要本机 GPT-SoVITS API 服务可用。

## GPT-SoVITS 本地服务

如果要真实播放语音，本机还需要运行 GPT-SoVITS API 服务。主动关怀语音页提供这些入口：

- 部署本地依赖：打开终端，准备 GPT-SoVITS 服务目录和 Python 环境。
- 打开调试终端：以前台方式启动或调试本地服务。
- 启动本地后台/自启：使用 macOS LaunchAgent 管理服务。
- 停止本地后台：移除或停止当前 LaunchAgent。
- 刷新状态：检查 API、服务目录、LaunchAgent 和依赖状态。

默认 API 地址为：

```text
http://127.0.0.1:9880
```

默认启动命令为：

```text
python api_v2.py -a 127.0.0.1 -p 9880
```

手动测试通过后，主动关怀语音才具备播放条件。首次加载 GPT-SoVITS 权重可能较慢，当前超时设置可在语音页调整，适合本地模型冷启动。

建议先用短中文句子测试，例如“彩叶，测试一下。”。如果中英混排、符号较多或语言参数与文本不匹配，本地 GPT-SoVITS API 可能返回 400；这通常表示文本切分或语言参数不兼容，不代表语音包导入失败。

## 其他 TTS Provider

主动关怀语音也支持 HTTP POST 和本地命令两类 Provider。HTTP POST 适合已有 TTS 服务，本地命令适合调用系统命令或你自己的脚本。关闭 TTS 时，主动关怀仍会生成文本提醒并显示在 Bubble 或 Live2D 中。
