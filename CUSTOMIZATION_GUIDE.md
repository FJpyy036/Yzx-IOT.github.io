# ? ���Ի�����ָ��

���ĵ���ϸ˵����θ������ĸ�������������������վ��

## ? ���޸������嵥

�ڷ�����վǰ��������޸�����ռλ���ݣ�

### ? ������Ϣ

- [ ] **����** - ��ҳ����
- [ ] **��ϵ�绰** - ��ϵ��ʽ����
- [ ] **��������** - ��ϵ��ʽ����
- [ ] **GitHub����** - ��ϵ��ʽ����
- [ ] **���ڳ���** - ��ϵ��ʽ����

### ? ��������

- [ ] ��˾���ƣ�ȥ��"XX"ռλ����
- [ ] ְλ��ʱ��
- [ ] ���������ͳɹ�
- [ ] ����ջ��ǩ

### ? ��Ŀ����

- [ ] ��Ŀ���ƺ�ʱ��
- [ ] ��Ŀ����
- [ ] ���ĳɹ����������ݣ�
- [ ] ʹ�õļ���ջ

### ? ��������

- [ ] ѧУ����
- [ ] רҵ��ѧ��
- [ ] GPA�ɼ�
- [ ] �γ̺ͻ����

### ? ����ˮƽ

- [ ] ������������Ȱٷֱ�
- [ ] ����ϵͳʹ�þ���
- [ ] �ó���Ƕ��ʽƽ̨
- [ ] ���յ�ͨ��Э��

## ? �����޸����

### 1. �޸���ҳ����

**λ�ã�** `index.html` �� 23-35 ��

**ԭʼ���룺**
```html
<h1 class="hero-title">��������</h1>
<h2 class="hero-subtitle">Ƕ��ʽ�������ʦ</h2>
<p class="hero-description">
    רע��Ƕ��ʽϵͳ���� �� ��ͨC/C++��ʵʱ����ϵͳ<br>
    �߱�<span class="highlight">X��</span>Ƕ��ʽ��������...
```

**�޸�ʾ����**
```html
<h1 class="hero-title">����</h1>
<h2 class="hero-subtitle">�߼�Ƕ��ʽ�������ʦ</h2>
<p class="hero-description">
    רע��Ƕ��ʽϵͳ���� �� ��ͨC/C++��ʵʱ����ϵͳ<br>
    �߱�<span class="highlight">5��</span>Ƕ��ʽ�������飬�����<span class="highlight">10+</span>����Ʒ����Ŀ<br>
    ��ϤARM�ܹ���Ӳ������������ײ�ϵͳ�Ż�
</p>
```

### 2. ���/ɾ����������

#### ����¹�������

����һ�������� `timeline-item` ����飺

```html
<div class="timeline-item">
    <div class="timeline-dot"></div>
    <div class="timeline-content">
        <div class="timeline-header">
            <h3>����ְλ</h3>
            <span class="timeline-date">
                <i class="fas fa-calendar-alt"></i> ��ʼʱ�� - ����ʱ��
            </span>
        </div>
        <h4 class="company-name">
            <i class="fas fa-building"></i> ��˾����
        </h4>
        <ul class="timeline-description">
            <li>��������1</li>
            <li>��������2</li>
            <li>��������3</li>
        </ul>
        <div class="tech-tags">
            <span class="tag">����1</span>
            <span class="tag">����2</span>
        </div>
    </div>
</div>
```

#### ɾ����������

ɾ������ `<div class="timeline-item">...</div>` ����顣

### 3. �޸ļ��ܰٷֱ�

**λ�ã�** `index.html` ����ר������

�ҵ����ƴ��룺
```html
<div class="skill-item">
    <div class="skill-info">
        <span class="skill-name">C����</span>
        <span class="skill-percent">95%</span>
    </div>
    <div class="skill-bar">
        <div class="skill-progress" style="width: 95%"></div>
    </div>
</div>
```

**�޸ķ�����**
1. ͬʱ�޸� `skill-percent` ���ı��� `style="width: XX%"` ����ֵ
2. ������ֵ����һ�£�������ʾ�᲻ƥ��

**ʾ����**
```html
<!-- �������C����ˮƽ��90% -->
<span class="skill-percent">90%</span>
...
<div class="skill-progress" style="width: 90%"></div>
```

### 4. ����¼��ܱ�ǩ

**λ�ã�** `index.html` ͨ��Э�������貿��

```html
<div class="skills-tags">
    <span class="skill-tag">UART / USART</span>
    <span class="skill-tag">I2C</span>
    <!-- ������ļ��� -->
    <span class="skill-tag">RS485</span>
    <span class="skill-tag">LoRa</span>
</div>
```

### 5. �޸���Ŀ����

#### �������Ŀ

����һ�� `project-card` ����飺

```html
<div class="project-card">
    <div class="project-header">
        <div class="project-icon">
            <i class="fas fa-microchip"></i>  <!-- ���Ի�������ͼ�� -->
        </div>
        <div class="project-badge">��Ʒ��Ŀ</div>
    </div>
    <h3 class="project-title">������Ŀ����</h3>
    <p class="project-period">2023.01 - 2023.06</p>
    <p class="project-description">
        ��Ŀ����...
    </p>
    <div class="project-achievements">
        <h4>���ĳɹ���</h4>
        <ul>
            <li>? �ɹ�1</li>
            <li>? �ɹ�2</li>
        </ul>
    </div>
    <div class="tech-tags">
        <span class="tag">STM32</span>
        <span class="tag">FreeRTOS</span>
    </div>
</div>
```

### 6. ������Ŀͼ��

Font Awesome ͼ���б�[https://fontawesome.com/icons](https://fontawesome.com/icons)

**����Ƕ��ʽ���ͼ�꣺**
```html
<i class="fas fa-microchip"></i>        <!-- оƬ -->
<i class="fas fa-memory"></i>           <!-- �ڴ� -->
<i class="fas fa-network-wired"></i>    <!-- ���� -->
<i class="fas fa-car-battery"></i>      <!-- ��� -->
<i class="fas fa-robot"></i>            <!-- ������ -->
<i class="fas fa-tachometer-alt"></i>   <!-- �Ǳ��� -->
<i class="fas fa-satellite"></i>        <!-- ����/ͨ�� -->
<i class="fas fa-thermometer-half"></i> <!-- ������ -->
<i class="fas fa-plug"></i>             <!-- �ӿ� -->
```

### 7. ��Ӹ�����Ƭ

**����һ��ʹ�ñ���ͼƬ**

1. ��������Ƭ����Ϊ `avatar.jpg` �� `avatar.png`
2. ������Ŀ��Ŀ¼
3. �޸� `index.html` �� 41-45 �У�

```html
<!-- ɾ��ԭ�е�ռλ������ -->
<div class="avatar-placeholder">
    <i class="fas fa-user"></i>
</div>

<!-- �滻Ϊ�� -->
<img src="./avatar.jpg" alt="������Ƭ" style="
    width: 300px; 
    height: 300px; 
    border-radius: 50%; 
    object-fit: cover;
    box-shadow: var(--shadow-xl);
">
```

**��������ʹ������ͼƬ**

```html
<img src="https://����ͼƬ����.jpg" alt="������Ƭ" style="...">
```

### 8. �޸�������ɫ

**λ�ã�** `style.css` �� 5-7 ��

```css
:root {
    --primary-color: #2563eb;    /* �޸���ɫ�� */
    --secondary-color: #10b981;  /* �޸ĸ���ɫ */
}
```

**�Ƽ���ɫ��**

| ��� | ��ɫ | ����ɫ | Ԥ�� |
|------|------|--------|------|
| �Ƽ�����Ĭ�ϣ� | `#2563eb` | `#10b981` | ?? |
| Ӳ���� | `#f59e0b` | `#8b5cf6` | ?? |
| Ƕ��ʽ�� | `#dc2626` | `#059669` | ?? |
| רҵ�� | `#6b7280` | `#10b981` | ?? |

## ? ��Ӧʽ����

�޸���ɺ�����Բ�ͬ�豸����ʾЧ����

### ���������
1. ����վ
2. �� `F12` �򿪿����߹���
3. ���"�豸������"ͼ�꣨�ֻ�ͼ�꣩
4. ���Բ�ͬ��Ļ�ߴ�

### ���Զϵ�
- ? �ֻ���375px - 767px
- ? ƽ�壺768px - 1023px
- ? ���ԣ�1024px ������

## ? ����׫д����

### ������������

**? ���⣺**
- "����Ƕ��ʽ����"
- "������Ŀ����"
- "�������"

**? �Ƽ���**
- "����STM32���������¿�ϵͳ��ʵ�֡�0.1��C���ȿ���"
- "�Ż�FreeRTOS������ȣ�CPUռ���ʽ���25%"
- "����CAN����������֧��1Mbps����ͨ��"

### ��Ŀ�ɹ�����

����ʹ������˵���ɹ���
- ? "���Ľ���40%"
- ? "��Ӧʱ��<10ms"
- ? "֧��100+�豸ͬʱ����"
- ? "���븴���ʴ�80%"

## ? SEO �Ż�����

�� `index.html` �� `<head>` ���޸ģ�

```html
<title>�������� - Ƕ��ʽ�������ʦ | ���˼���</title>
<meta name="description" content="�߱�X��Ƕ��ʽ�������飬�ó�C/C++��RTOS��ARM...">
<meta name="keywords" content="Ƕ��ʽ����ʦ,STM32,FreeRTOS,C����,��������">
```

## ? �����Զ���

### 1. �����Ŀ��ʾ��Ƶ

```html
<video width="100%" controls>
    <source src="./project-demo.mp4" type="video/mp4">
</video>
```

### 2. �����ĿGitHub����

```html
<div class="project-card">
    <!-- ��Ŀ���� -->
    <a href="https://github.com/yourusername/project" target="_blank" 
       class="btn btn-primary" style="margin-top: 1rem;">
        <i class="fab fa-github"></i> �鿴����
    </a>
</div>
```

### 3. ��Ӽ�����������

��"������"������ӣ�

```html
<p>
    �������ͣ�<a href="https://your-blog.com" target="_blank">your-blog.com</a>
</p>
```

## ? ����ǰ����嵥

����GitHub Pagesǰ�����飺

- [ ] ����"XX"ռλ�����滻
- [ ] ��ϵ��ʽ��ȷ����
- [ ] ʱ���ʽͳһ��YYYY.MM �� YYYY-MM��
- [ ] ���ܰٷֱ�����������һ��
- [ ] ��Ŀ����ջ��ǩ׼ȷ
- [ ] PDF��������ӣ�����У�
- [ ] ���ֻ���ƽ�塢�����ϲ�����ʾЧ��
- [ ] �������ӿɵ������ȷ
- [ ] ƴд���﷨���

## ? ��������

### Q: ���ɾ��ĳ����飿
**A:** �ҵ���Ӧ�� `<section id="xxx">...</section>` ���������ɾ�����ɡ�ͬʱ�ǵ�ɾ���������ж�Ӧ�����ӡ�

### Q: ��ε������˳��
**A:** �������� `<section>` ����飬ճ������Ҫ��λ�á�

### Q: ����޸����壿
**A:** �� `style.css` �ĵ� 20 ���޸� `--font-primary`��

### Q: ������Ӣ�İ汾��
**A:** ����һ�� `index.html`��������Ϊ `index-en.html`���������ݺ�����л���ť��

---

**��Ҫ������** �ο� `README.md` ��������� HTML/CSS �̡̳�

ף��˳����ɸ��Ի����ƣ�?

