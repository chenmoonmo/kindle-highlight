### 项目介绍：
<div align="center">
  <img src="https://github.com/chenmoonmo/my-highlight/assets/36295999/584433c6-dbe7-4c29-b827-10edac5a0143" width="350" /> 
</div>
通过 Kindle 书摘来生成阅读笔记展示网站。 目前仅支持中文笔记，欢迎提 PR 以提供更多语言或其他功能支持。

### [Live Demo](https://light.moonwillknow.dev/)

### 使用方法：

1. fork 本项目。
2. 连接你的 Kindle，将 `My Clippings.txt` 文件拷贝到项目的 `public` 目录下。
3. 修改 `env` 文件中的 `NEXT_PUBLIC_USER`。
4. 运行 `pnpm run build` 和 `pnpm run start`。

### 感谢：

- [kindle-zhcn-clippings-to-json](https://github.com/Skywt2003/kindle-zhcn-clippings-to-json)
