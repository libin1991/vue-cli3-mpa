## VUE-CLI3 MPA 脚手架

---

#### 项目介绍

- 多页应用。
- 使用 **ESlint** + **Prettier** 实现代码检查和格式化， 需要安装对应插件并修改相关配置。例如在 vscode 下安装 ESLint 和 Prettier - Code formatter 插件，快捷键`Command + ,`下加入如下配置，可实现在代码保存时自动格式化。**editor.formatOnSave** 用于识别 **.vue**文件。

```json
    "prettier.eslintIntegration": true,
    "eslint.autoFixOnSave": true,
    "editor.formatOnSave": true,
        "eslint.validate": [
        "javascript",
        "javascriptreact",
        {
            "language": "vue",
            "autoFix": true
        }
    ]
```

- vue-cli3 webpack 配置在 **vue.config.js** 文件下。
- 配置了 test，preview，production 三个打包环境，对应打包命令，npm run test/pre/release
- 打点等通用方法请查看[FE 技术文档](http://la.knowbox.cn:8090/pages/viewpage.action?pageId=5867607) 相关约定。
-  单位适配使用的是淘宝 [flexible.js](http://www.w3cplus.com/mobile/lib-flexible-for-html5-layout.html) + [postcss-px2rem](https://github.com/songsiqi/px2rem-postcss) 方案。 PS: 源代码没有兼容 iPad， 修改过的代码[flexible_css.debug.js](http://knowapp.b0.upaiyun.com/ss/js/flexible/flexible_css.debug.js), [flexible.debug.js](http://knowapp.b0.upaiyun.com/ss/js/flexible/flexible.debug.js) 保存在公司 upaiyun 路径/ss/js/flexible 下。
