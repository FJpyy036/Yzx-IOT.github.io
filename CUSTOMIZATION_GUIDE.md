# ? 个性化定制指南

本文档详细说明如何根据您的个人情况定制这个简历网站。

## ? 必修改内容清单

在发布网站前，请务必修改以下占位内容：

### ? 核心信息

- [ ] **姓名** - 首页标题
- [ ] **联系电话** - 联系方式部分
- [ ] **电子邮箱** - 联系方式部分
- [ ] **GitHub链接** - 联系方式部分
- [ ] **所在城市** - 联系方式部分

### ? 工作经历

- [ ] 公司名称（去掉"XX"占位符）
- [ ] 职位和时间
- [ ] 工作描述和成果
- [ ] 技术栈标签

### ? 项目经验

- [ ] 项目名称和时间
- [ ] 项目描述
- [ ] 核心成果（量化数据）
- [ ] 使用的技术栈

### ? 教育背景

- [ ] 学校名称
- [ ] 专业和学历
- [ ] GPA成绩
- [ ] 课程和获奖情况

### ? 技能水平

- [ ] 编程语言熟练度百分比
- [ ] 操作系统使用经验
- [ ] 擅长的嵌入式平台
- [ ] 掌握的通信协议

## ? 内容修改详解

### 1. 修改首页介绍

**位置：** `index.html` 第 23-35 行

**原始代码：**
```html
<h1 class="hero-title">您的姓名</h1>
<h2 class="hero-subtitle">嵌入式软件工程师</h2>
<p class="hero-description">
    专注于嵌入式系统开发 · 精通C/C++与实时操作系统<br>
    具备<span class="highlight">X年</span>嵌入式开发经验...
```

**修改示例：**
```html
<h1 class="hero-title">张三</h1>
<h2 class="hero-subtitle">高级嵌入式软件工程师</h2>
<p class="hero-description">
    专注于嵌入式系统开发 · 精通C/C++与实时操作系统<br>
    具备<span class="highlight">5年</span>嵌入式开发经验，参与过<span class="highlight">10+</span>个产品级项目<br>
    熟悉ARM架构、硬件驱动开发与底层系统优化
</p>
```

### 2. 添加/删除工作经历

#### 添加新工作经历

复制一个完整的 `timeline-item` 代码块：

```html
<div class="timeline-item">
    <div class="timeline-dot"></div>
    <div class="timeline-content">
        <div class="timeline-header">
            <h3>您的职位</h3>
            <span class="timeline-date">
                <i class="fas fa-calendar-alt"></i> 开始时间 - 结束时间
            </span>
        </div>
        <h4 class="company-name">
            <i class="fas fa-building"></i> 公司名称
        </h4>
        <ul class="timeline-description">
            <li>工作描述1</li>
            <li>工作描述2</li>
            <li>工作描述3</li>
        </ul>
        <div class="tech-tags">
            <span class="tag">技术1</span>
            <span class="tag">技术2</span>
        </div>
    </div>
</div>
```

#### 删除工作经历

删除整个 `<div class="timeline-item">...</div>` 代码块。

### 3. 修改技能百分比

**位置：** `index.html` 技能专长部分

找到类似代码：
```html
<div class="skill-item">
    <div class="skill-info">
        <span class="skill-name">C语言</span>
        <span class="skill-percent">95%</span>
    </div>
    <div class="skill-bar">
        <div class="skill-progress" style="width: 95%"></div>
    </div>
</div>
```

**修改方法：**
1. 同时修改 `skill-percent` 的文本和 `style="width: XX%"` 的数值
2. 两处数值必须一致，否则显示会不匹配

**示例：**
```html
<!-- 如果您的C语言水平是90% -->
<span class="skill-percent">90%</span>
...
<div class="skill-progress" style="width: 90%"></div>
```

### 4. 添加新技能标签

**位置：** `index.html` 通信协议与外设部分

```html
<div class="skills-tags">
    <span class="skill-tag">UART / USART</span>
    <span class="skill-tag">I2C</span>
    <!-- 添加您的技能 -->
    <span class="skill-tag">RS485</span>
    <span class="skill-tag">LoRa</span>
</div>
```

### 5. 修改项目数量

#### 添加新项目

复制一个 `project-card` 代码块：

```html
<div class="project-card">
    <div class="project-header">
        <div class="project-icon">
            <i class="fas fa-microchip"></i>  <!-- 可以换成其他图标 -->
        </div>
        <div class="project-badge">产品项目</div>
    </div>
    <h3 class="project-title">您的项目名称</h3>
    <p class="project-period">2023.01 - 2023.06</p>
    <p class="project-description">
        项目描述...
    </p>
    <div class="project-achievements">
        <h4>核心成果：</h4>
        <ul>
            <li>? 成果1</li>
            <li>? 成果2</li>
        </ul>
    </div>
    <div class="tech-tags">
        <span class="tag">STM32</span>
        <span class="tag">FreeRTOS</span>
    </div>
</div>
```

### 6. 更换项目图标

Font Awesome 图标列表：[https://fontawesome.com/icons](https://fontawesome.com/icons)

**常用嵌入式相关图标：**
```html
<i class="fas fa-microchip"></i>        <!-- 芯片 -->
<i class="fas fa-memory"></i>           <!-- 内存 -->
<i class="fas fa-network-wired"></i>    <!-- 网络 -->
<i class="fas fa-car-battery"></i>      <!-- 电池 -->
<i class="fas fa-robot"></i>            <!-- 机器人 -->
<i class="fas fa-tachometer-alt"></i>   <!-- 仪表盘 -->
<i class="fas fa-satellite"></i>        <!-- 卫星/通信 -->
<i class="fas fa-thermometer-half"></i> <!-- 传感器 -->
<i class="fas fa-plug"></i>             <!-- 接口 -->
```

### 7. 添加个人照片

**方法一：使用本地图片**

1. 将您的照片命名为 `avatar.jpg` 或 `avatar.png`
2. 放在项目根目录
3. 修改 `index.html` 第 41-45 行：

```html
<!-- 删除原有的占位符代码 -->
<div class="avatar-placeholder">
    <i class="fas fa-user"></i>
</div>

<!-- 替换为： -->
<img src="./avatar.jpg" alt="个人照片" style="
    width: 300px; 
    height: 300px; 
    border-radius: 50%; 
    object-fit: cover;
    box-shadow: var(--shadow-xl);
">
```

**方法二：使用在线图片**

```html
<img src="https://您的图片链接.jpg" alt="个人照片" style="...">
```

### 8. 修改主题颜色

**位置：** `style.css` 第 5-7 行

```css
:root {
    --primary-color: #2563eb;    /* 修改主色调 */
    --secondary-color: #10b981;  /* 修改辅助色 */
}
```

**推荐配色：**

| 风格 | 主色 | 辅助色 | 预览 |
|------|------|--------|------|
| 科技蓝（默认） | `#2563eb` | `#10b981` | ?? |
| 硬件橙 | `#f59e0b` | `#8b5cf6` | ?? |
| 嵌入式红 | `#dc2626` | `#059669` | ?? |
| 专业灰 | `#6b7280` | `#10b981` | ?? |

## ? 响应式测试

修改完成后，请测试不同设备的显示效果：

### 浏览器测试
1. 打开网站
2. 按 `F12` 打开开发者工具
3. 点击"设备工具栏"图标（手机图标）
4. 测试不同屏幕尺寸

### 测试断点
- ? 手机：375px - 767px
- ? 平板：768px - 1023px
- ? 电脑：1024px 及以上

## ? 内容撰写技巧

### 工作描述建议

**? 避免：**
- "负责嵌入式开发"
- "参与项目开发"
- "完成任务"

**? 推荐：**
- "基于STM32开发智能温控系统，实现±0.1°C精度控制"
- "优化FreeRTOS任务调度，CPU占用率降低25%"
- "开发CAN总线驱动，支持1Mbps高速通信"

### 项目成果量化

尽量使用数字说明成果：
- ? "功耗降低40%"
- ? "响应时间<10ms"
- ? "支持100+设备同时在线"
- ? "代码复用率达80%"

## ? SEO 优化建议

在 `index.html` 的 `<head>` 中修改：

```html
<title>您的姓名 - 嵌入式软件工程师 | 个人简历</title>
<meta name="description" content="具备X年嵌入式开发经验，擅长C/C++、RTOS、ARM...">
<meta name="keywords" content="嵌入式工程师,STM32,FreeRTOS,C语言,您的姓名">
```

## ? 进阶自定义

### 1. 添加项目演示视频

```html
<video width="100%" controls>
    <source src="./project-demo.mp4" type="video/mp4">
</video>
```

### 2. 添加项目GitHub链接

```html
<div class="project-card">
    <!-- 项目内容 -->
    <a href="https://github.com/yourusername/project" target="_blank" 
       class="btn btn-primary" style="margin-top: 1rem;">
        <i class="fab fa-github"></i> 查看代码
    </a>
</div>
```

### 3. 添加技术博客链接

在"关于我"部分添加：

```html
<p>
    技术博客：<a href="https://your-blog.com" target="_blank">your-blog.com</a>
</p>
```

## ? 发布前检查清单

部署到GitHub Pages前，请检查：

- [ ] 所有"XX"占位符已替换
- [ ] 联系方式正确无误
- [ ] 时间格式统一（YYYY.MM 或 YYYY-MM）
- [ ] 技能百分比与进度条宽度一致
- [ ] 项目技术栈标签准确
- [ ] PDF简历已添加（如果有）
- [ ] 在手机、平板、电脑上测试显示效果
- [ ] 所有链接可点击且正确
- [ ] 拼写和语法检查

## ? 常见问题

### Q: 如何删除某个板块？
**A:** 找到对应的 `<section id="xxx">...</section>` 完整代码块删除即可。同时记得删除导航栏中对应的链接。

### Q: 如何调整板块顺序？
**A:** 剪切整个 `<section>` 代码块，粘贴到想要的位置。

### Q: 如何修改字体？
**A:** 在 `style.css` 的第 20 行修改 `--font-primary`。

### Q: 如何添加英文版本？
**A:** 复制一份 `index.html`，重命名为 `index-en.html`，翻译内容后添加切换按钮。

---

**需要帮助？** 参考 `README.md` 或搜索相关 HTML/CSS 教程。

祝您顺利完成个性化定制！?

