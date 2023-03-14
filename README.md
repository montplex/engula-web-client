# 🎉🎉 Montplex 🎉🎉

## 介绍 📖

- Montplex，基于 Vue3、TypeScript、Vite3, 已经配置TS，可以JS、TS混用。

### 二、🔨🔨🔨 项目功能

- 🚀 使用 Vue3 开发
- 🚀 采用 Vite3 作为项目开发、打包工具（配置了 Gzip 打包，TSX 语法，跨域代理，JS、TS混用，打包预览工具……）
- 🚀 使用 Pinia🍍 状态管理工具
- 🚀 使用 vue-router 进行路由权限拦截、路由懒加载、动态路由
- 🚀 使用 keep-alive 对个页面进行缓存（缓存路由里可配置、页面切换带动画）
- 🚀 常用自定义指令开发（复制、水印、拖拽、节流、防抖）
- 🚀 常用组件开发 有自行封装（全局消息、数字滚动..），第三方的库（富文本、引导页、拖拽..）

### 三、安装使用步骤 📔

- **克隆项目**

- **安装依赖：**

```text
# 建议使用nodejs 16+
pnpm install
```

- **运行：**

```text
pnpm run dev
pnpm run serve
```

- **打包：**

```text
# 开发环境
npm run build:dev

# 测试环境
npm run build:test

# 生产环境
npm run build:pro
```

- **检测：**

```text
# eslint 检测代码
npm run lint:eslint

# prettier 格式化代码
npm run lint:prettier

# stylelint 格式化样式
lint:stylelint
```

### 五、文件资源目录 📚

```text
vue-diverse-admin
├─ .vscode                # vscode推荐配置
├─ public                 # 静态资源文件（忽略打包）
├─ src
│  ├─ api                 # API 接口管理
│  ├─ assets              # 静态资源文件
│  ├─ components          # 全局组件
│  ├─ config              # 全局配置项
│  ├─ directives          # 全局指令文件
│  ├─ hooks               # 常用 Hooks
│  ├─ languages           # 语言国际化
│  ├─ layouts             # 框架布局
│  ├─ mock                # mock数据
│  ├─ routers             # 路由管理
│  ├─ stores              # pinia 状态管理工具
│  ├─ styles              # 全局样式
│  ├─ utils               # 工具库
│  ├─ views               # 项目所有页面
│  ├─ App.vue             # 入口页面
│  └─ main.js             # 入口文件
├─ .editorconfig          # 编辑器配置（格式化）
├─ .env                   # vite 常用配置
├─ .env.development       # 开发环境配置
├─ .env.production        # 生产环境配置
├─ .env.test              # 测试环境配置
├─ .eslintignore          # 忽略 Eslint 校验
├─ .eslintrc.js           # Eslint 校验配置
├─ .gitignore             # git 提交忽略
├─ .prettierignore        # 忽略 prettier 格式化
├─ .prettierrc.js         # prettier 配置
├─ .stylelintignore       # 忽略 stylelint 格式化
├─ .stylelintrc.js        # stylelint 样式格式化配置
├─ CHANGELOG.md           # 项目更新日志
├─ commitlint.config.js   # git 提交规范配置
├─ index.html             # 入口 html
├─ lint-staged.config     # lint-staged 配置文件
├─ package-lock.json      # 依赖包包版本锁
├─ package.json           # 依赖包管理
├─ postcss.config.js      # postcss 配置
├─ README.md              # README 介绍
├─ tsconfig.json          # typescript 全局配置
└─ vite.config.ts         # vite 配置
```
