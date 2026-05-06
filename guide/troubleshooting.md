# 排障

本页只记录首用走查中真实出现或已验证过的边界。

## Hermes Agent 安装失败

如果安装页出现：

```text
RPC failed
curl 18 transfer closed with outstanding read data remaining
early EOF
invalid index-pack output
```

通常是 GitHub 网络传输中断。可以重试、切换网络或代理，也可以手动安装 Hermes Agent 后回到应用点击“重新检测”。

## 模型连接失败

检查 Provider、模型、Base URL 和 API Key。保存后重新点击“保存并测试连接”。

## 图片不可用

先点击“保存并测试图片链路”。避免使用 1x1 之类极小图片，建议使用正常尺寸截图或照片。

## Live2D 没有显示角色

确认资源包已导入，并且设置页显示资源已就绪。保存模型路径后需要重新打开 Live2D 表现态。

## TTS 没声音

确认语音 Provider 已启用。GPT-SoVITS 语音包导入成功只代表音色路径就绪，还需要本地 API 服务可达。

如果 GPT-SoVITS 返回 HTTP 400，请检查参考音频路径、文本语言、参考音频语言、切分方式、媒体类型，以及本地 GPT-SoVITS API 版本是否与 Hermes-Yachiyo 的请求格式兼容。

## 主动关怀不触发

确认主动桌面观察已开启，触发概率不是 0，macOS 屏幕录制权限已授权，并等待至少一个观察间隔。

## 工具中心显示受限

`limited` 常见原因是缺少外部 Provider Key、CDP endpoint 或本地系统依赖。它只影响对应工具，不代表主控台、对话、Bubble 或 Live2D 不可用。
