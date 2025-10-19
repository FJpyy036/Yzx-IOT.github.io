# ? 5分钟快速上手

> 即使您不懂编程，也能轻松修改这个简历网站！

## ? 三步部署

### 第一步：修改个人信息（3分钟）

1. **用文本编辑器打开 `index.html`**
   - Windows：右键 → 选择"记事本"打开
   - Mac：右键 → 选择"文本编辑"打开
   - 或使用 VS Code / Sublime Text 等代码编辑器

2. **按 `Ctrl + F`（Mac: `Cmd + F`）查找并替换：**

| 查找内容 | 替换为 | 说明 |
|---------|--------|------|
| `您的姓名` | 张三 | 您的真实姓名 |
| `138-XXXX-5678` | 138-1234-5678 | 您的手机号 |
| `your.email@example.com` | zhangsan@qq.com | 您的邮箱 |
| `XX科技有限公司` | 华为技术有限公司 | 公司全名 |
| `中国·某某城市` | 中国·深圳 | 您的所在地 |

3. **保存文件**

### 第二步：本地测试（1分钟）

**双击 `index.html` 文件**，会在浏览器中打开，查看效果。

### 第三步：部署到网上（1分钟）

#### 方法A：使用GitHub Pages（永久免费）

1. 注册 [GitHub](https://github.com) 账号
2. 创建新仓库，名称：`你的用户名.github.io`
3. 上传所有文件
4. 访问：`https://你的用户名.github.io`

详细步骤见 [README.md](README.md#-部署到-github-pages)

#### 方法B：使用Vercel（更简单）

1. 访问 [Vercel](https://vercel.com)
2. 用GitHub登录
3. 点击"Import Project"
4. 选择您的仓库
5. 一键部署完成！

## ? 最常修改的10个地方

### 1. 姓名和职位
**位置：** 第 23-24 行
```html
<h1 class="hero-title">您的姓名</h1>
<h2 class="hero-subtitle">嵌入式软件工程师</h2>
```

### 2. 工作年限
**位置：** 第 27 行
```html
具备<span class="highlight">X年</span>嵌入式开发经验
```
改成：`5年`、`3年` 等

### 3. 关于我
**位置：** 第 68-80 行
```html
<p>我是一名经验丰富的嵌入式软件工程师...</p>
```

### 4. 工作经历 - 公司名称
**位置：** 第 105 行开始
```html
<h3>嵌入式软件工程师</h3>
<span class="timeline-date">2022.06 - 至今</span>
...
<h4 class="company-name">XX科技有限公司</h4>
```

### 5. 工作内容
**位置：** 第 110-115 行
```html
<ul class="timeline-description">
    <li>负责公司智能硬件产品的底层驱动开发...</li>
    <li>基于FreeRTOS开发多任务实时系统...</li>
</ul>
```

### 6. 项目名称
**位置：** 第 220 行开始
```html
<h3 class="project-title">智能物联网网关</h3>
<p class="project-period">2023.03 - 2023.12</p>
```

### 7. 技能熟练度
**位置：** 第 380 行开始
```html
<span class="skill-percent">95%</span>
...
<div class="skill-progress" style="width: 95%"></div>
```
把两处的 `95%` 改成您的实际水平

### 8. 教育背景
**位置：** 第 580 行开始
```html
<h3>XX大学</h3>
<h4>电子信息工程 / 本科</h4>
<p class="education-period">2016.09 - 2020.06</p>
```

### 9. GPA成绩
**位置：** 第 587 行
```html
<p><strong>GPA:</strong> 3.8/4.0</p>
```

### 10. 联系方式
**位置：** 第 680-720 行
```html
<p>138-XXXX-5678</p>
<p>your.email@example.com</p>
<p>github.com/yourusername</p>
```

## ? 修改主题颜色（可选）

如果您不喜欢蓝色，可以改成其他颜色：

1. 打开 `style.css` 文件
2. 找到第 5 行：
```css
--primary-color: #2563eb;
```
3. 替换颜色代码：

| 颜色 | 代码 | 效果 |
|------|------|------|
| 蓝色（默认） | `#2563eb` | ? 科技感 |
| 橙色 | `#f59e0b` | ? 活力感 |
| 红色 | `#dc2626` | ? 工业感 |
| 绿色 | `#059669` | ? 清新感 |
| 紫色 | `#8b5cf6` | ? 创意感 |

## ? 添加个人照片

1. 准备一张正方形照片（建议 500x500 像素）
2. 命名为 `avatar.jpg`
3. 放在项目文件夹里（和 `index.html` 同一级）
4. 打开 `index.html`，找到第 41-45 行：

**删除：**
```html
<div class="avatar-placeholder">
    <i class="fas fa-user"></i>
</div>
```

**替换为：**
```html
<img src="./avatar.jpg" alt="个人照片" style="
    width: 300px; 
    height: 300px; 
    border-radius: 50%; 
    object-fit: cover;
    box-shadow: 0 20px 25px rgba(0,0,0,0.15);
">
```

## ? 添加PDF简历下载

1. 将您的PDF简历重命名为 `resume.pdf`
2. 放在项目文件夹里
3. 打开 `index.html`，搜索 `href="#"`
4. 将 `href="#"` 改为 `href="./resume.pdf"`

## ? 删除不需要的部分

### 删除整个板块

如果您不想显示某个板块（如项目经验），可以删除对应的代码：

1. 找到对应的 `<section id="projects">` 开始
2. 一直删到对应的 `</section>` 结束
3. 同时删除导航栏中的链接：
```html
<li><a href="#projects">项目经验</a></li>  <!-- 删除这一行 -->
```

### 删除单个工作经历

删除整个 `<div class="timeline-item">...</div>` 代码块。

### 删除单个项目

删除整个 `<div class="project-card">...</div>` 代码块。

## ? 遇到问题？

### 问题1：修改后样式错乱
**原因：** 可能不小心删除了 `<div>` 或 `</div>` 标签
**解决：** 按 `Ctrl + Z` 撤销，重新修改

### 问题2：网站显示空白
**原因：** `index.html`、`style.css`、`script.js` 不在同一文件夹
**解决：** 确保三个文件在同一目录下

### 问题3：图标不显示
**原因：** 需要联网加载图标库
**解决：** 正常情况，部署到网上后会自动显示

### 问题4：手机上显示不正常
**原因：** 浏览器缓存问题
**解决：** 清除浏览器缓存，或使用无痕模式打开

## ? 小技巧

### 技巧1：使用搜索替换批量修改
按 `Ctrl + H` 打开替换功能，一次性替换所有相同内容。

### 技巧2：保留备份
修改前复制一份 `index.html`，命名为 `index-backup.html`

### 技巧3：分步保存
每修改一部分就保存一次，避免一次性修改太多出错。

### 技巧4：用浏览器实时查看
修改后保存，按 `F5` 刷新浏览器，立即看到效果。

## ? 下一步

- ? 阅读 [README.md](README.md) 了解详细部署步骤
- ? 阅读 [CUSTOMIZATION_GUIDE.md](CUSTOMIZATION_GUIDE.md) 学习进阶定制
- ? 部署到 GitHub Pages 让全世界看到您的简历

## ? 修改完成检查清单

发布前，请确认：

- [ ] 所有 "XX"、"您的XXX" 等占位符都已替换
- [ ] 电话号码格式正确
- [ ] 邮箱地址正确
- [ ] 时间格式统一（如：2022.06 或 2022-06）
- [ ] 用浏览器打开，检查手机端显示效果
- [ ] 点击所有链接，确保可以正常跳转

---

**就是这么简单！5分钟搞定您的专业简历网站！** ?

有问题随时查看 [README.md](README.md) 或搜索相关教程。

