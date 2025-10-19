# ? 个人简历网站

一个专为**嵌入式软件工程师**打造的现代化个人简历网站，使用纯 HTML + CSS + JavaScript 构建，可免费部署到 GitHub Pages。

## ? 特性

- ? **完全响应式设计** - 完美适配手机、平板、电脑
- ? **现代化UI设计** - 精美的渐变色、卡片布局、动画效果
- ? **轻量级** - 纯静态页面，加载速度快
- ? **易于定制** - 无需编程经验，只需修改文本内容
- ? **免费部署** - 使用 GitHub Pages 免费托管

## ? 文件结构

```
Resume/
├── index.html          # 主页面（包含所有内容）
├── style.css           # 样式文件
├── script.js           # 交互脚本
├── README.md           # 说明文档（本文件）
├── .gitignore          # Git忽略文件
└── resume.pdf          # 您的PDF简历（需要自行添加）
```

## ? 快速开始

### 步骤 1: 修改个人信息

打开 `index.html` 文件，找到以下占位符并替换为您的真实信息：

#### 1.1 基本信息（第 23-25 行）
```html
<h1 class="hero-title">您的姓名</h1>
<h2 class="hero-subtitle">嵌入式软件工程师</h2>
<p class="hero-description">
    具备<span class="highlight">X年</span>嵌入式开发经验...
```

#### 1.2 关于我（第 68-80 行）
修改"关于我"部分的自我介绍内容。

#### 1.3 工作经历（第 105-200 行）
- 替换公司名称、职位、时间
- 修改工作描述和技术标签
- 可以添加或删除工作经历

#### 1.4 项目经验（第 210-360 行）
- 替换项目名称、时间、描述
- 修改核心成果
- 更新技术栈标签

#### 1.5 技能专长（第 370-550 行）
- 调整技能百分比（例如：`style="width: 95%"`）
- 添加或删除技能项
- 修改技能标签

#### 1.6 教育背景（第 570-650 行）
- 替换学校名称、专业、GPA
- 修改课程列表和获奖情况

#### 1.7 联系方式（第 670-750 行）
```html
<p>138-XXXX-5678</p>              <!-- 替换为您的电话 -->
<p>your.email@example.com</p>     <!-- 替换为您的邮箱 -->
<p>github.com/yourusername</p>    <!-- 替换为您的GitHub -->
```

### 步骤 2: 添加PDF简历（可选）

1. 将您的PDF简历文件重命名为 `resume.pdf`
2. 放在网站根目录（与 `index.html` 同级）
3. 修改 `index.html` 中的下载按钮链接：

```html
<!-- 找到这两处，将 href="#" 改为 href="./resume.pdf" -->
<a href="./resume.pdf" class="btn btn-secondary" download>
```

### 步骤 3: 本地测试

#### 方法一：直接打开（最简单）
双击 `index.html` 文件，会在浏览器中打开。

#### 方法二：使用本地服务器（推荐）

**使用 Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

然后访问：`http://localhost:8000`

**使用 VS Code:**
安装 "Live Server" 插件，右键 `index.html` → "Open with Live Server"

## ? 部署到 GitHub Pages

### 前提条件
- 拥有 GitHub 账号
- 安装了 Git

### 部署步骤

#### 1. 创建 GitHub 仓库

1. 登录 [GitHub](https://github.com)
2. 点击右上角 "+" → "New repository"
3. 仓库名称填写：`your-username.github.io`（替换 `your-username` 为您的用户名）
   - 例如：如果您的用户名是 `zhangsan`，则填写 `zhangsan.github.io`
4. 设置为 **Public**（公开）
5. 点击 "Create repository"

#### 2. 上传代码到 GitHub

在您的项目文件夹中打开终端（命令行），依次执行：

```bash
# 初始化 Git 仓库
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit: 个人简历网站"

# 连接到远程仓库（替换为您的仓库地址）
git remote add origin https://github.com/your-username/your-username.github.io.git

# 推送到 GitHub
git branch -M main
git push -u origin main
```

#### 3. 开启 GitHub Pages

1. 进入您的 GitHub 仓库页面
2. 点击 "Settings"（设置）
3. 左侧菜单找到 "Pages"
4. 在 "Source" 下选择：
   - Branch: `main`
   - Folder: `/ (root)`
5. 点击 "Save"

#### 4. 访问您的网站

等待 1-2 分钟后，访问：
```
https://your-username.github.io
```

**恭喜！您的个人简历网站已经上线了！** ?

### 使用自定义域名（可选）

如果您有自己的域名：

1. 在 GitHub Pages 设置中，"Custom domain" 填写您的域名
2. 在域名服务商添加 CNAME 记录：
   ```
   记录类型: CNAME
   主机记录: www
   记录值: your-username.github.io
   ```

## ? 自定义主题颜色

如果您想修改网站配色，打开 `style.css`，在第 1-10 行修改颜色变量：

```css
:root {
    --primary-color: #2563eb;      /* 主色调（蓝色） */
    --primary-dark: #1e40af;       /* 深色 */
    --primary-light: #3b82f6;      /* 浅色 */
    --secondary-color: #10b981;    /* 辅助色（绿色） */
    --accent-color: #f59e0b;       /* 强调色（橙色） */
}
```

### 推荐配色方案

**科技蓝（默认）：**
```css
--primary-color: #2563eb;
--secondary-color: #10b981;
```

**硬件橙：**
```css
--primary-color: #f59e0b;
--secondary-color: #8b5cf6;
```

**专业灰：**
```css
--primary-color: #6b7280;
--secondary-color: #10b981;
```

**工业红：**
```css
--primary-color: #dc2626;
--secondary-color: #059669;
```

## ? 更新网站内容

修改后重新上传到 GitHub：

```bash
git add .
git commit -m "更新简历内容"
git push
```

等待 1-2 分钟，网站会自动更新。

## ? 常见问题

### Q1: GitHub Pages 显示 404 错误
**A:** 确保仓库名称正确（`your-username.github.io`），且 Pages 设置正确。

### Q2: 网站样式错乱
**A:** 确保 `style.css` 和 `script.js` 文件在同一目录下。

### Q3: 字体图标不显示
**A:** 需要联网才能加载 Font Awesome 图标库。如果离线查看，图标会显示为方块。

### Q4: 移动端菜单点击无反应
**A:** 检查 `script.js` 是否正确加载。

### Q5: 如何添加更多项目？
**A:** 复制一个 `project-card` 的完整 HTML 代码块，粘贴后修改内容即可。

## ? 技术栈

- **HTML5** - 页面结构
- **CSS3** - 样式与动画（使用 CSS Grid、Flexbox、渐变、动画）
- **JavaScript (ES6)** - 交互效果
- **Font Awesome** - 图标库
- **GitHub Pages** - 免费托管

## ? 浏览器兼容性

- ? Chrome (推荐)
- ? Firefox
- ? Safari
- ? Edge
- ? 移动端浏览器

## ? 进阶定制

### 添加访问统计

可以添加 Google Analytics 或百度统计：

1. 注册统计服务
2. 获取跟踪代码
3. 将代码粘贴到 `index.html` 的 `</body>` 前

### 添加实时聊天

可以集成 Tawk.to 等在线客服工具。

### SEO 优化

在 `index.html` 的 `<head>` 中已经包含了基本的 SEO 标签，您可以进一步优化：

```html
<meta property="og:title" content="您的姓名 - 嵌入式软件工程师">
<meta property="og:description" content="简短的自我介绍">
<meta property="og:image" content="您的照片URL">
```

## ? License

MIT License - 您可以自由使用、修改和分发此模板。

## ? 贡献

如果您有改进建议，欢迎提 Issue 或 Pull Request！

## ? 支持

如有问题，可以：
- 查看本文档
- 搜索相关 HTML/CSS/JavaScript 教程
- 在 GitHub 提 Issue

---

**祝您求职顺利！??**

如果这个模板帮到了您，欢迎给个 Star ?

