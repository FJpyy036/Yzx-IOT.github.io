# ? ���˼�����վ

һ��רΪ**Ƕ��ʽ�������ʦ**������ִ������˼�����վ��ʹ�ô� HTML + CSS + JavaScript ����������Ѳ��� GitHub Pages��

## ? ����

- ? **��ȫ��Ӧʽ���** - ���������ֻ���ƽ�塢����
- ? **�ִ���UI���** - �����Ľ���ɫ����Ƭ���֡�����Ч��
- ? **������** - ����̬ҳ�棬�����ٶȿ�
- ? **���ڶ���** - �����̾��飬ֻ���޸��ı�����
- ? **��Ѳ���** - ʹ�� GitHub Pages ����й�

## ? �ļ��ṹ

```
Resume/
������ index.html          # ��ҳ�棨�����������ݣ�
������ style.css           # ��ʽ�ļ�
������ script.js           # �����ű�
������ README.md           # ˵���ĵ������ļ���
������ .gitignore          # Git�����ļ�
������ resume.pdf          # ����PDF��������Ҫ������ӣ�
```

## ? ���ٿ�ʼ

### ���� 1: �޸ĸ�����Ϣ

�� `index.html` �ļ����ҵ�����ռλ�����滻Ϊ������ʵ��Ϣ��

#### 1.1 ������Ϣ���� 23-25 �У�
```html
<h1 class="hero-title">��������</h1>
<h2 class="hero-subtitle">Ƕ��ʽ�������ʦ</h2>
<p class="hero-description">
    �߱�<span class="highlight">X��</span>Ƕ��ʽ��������...
```

#### 1.2 �����ң��� 68-80 �У�
�޸�"������"���ֵ����ҽ������ݡ�

#### 1.3 ������������ 105-200 �У�
- �滻��˾���ơ�ְλ��ʱ��
- �޸Ĺ��������ͼ�����ǩ
- ������ӻ�ɾ����������

#### 1.4 ��Ŀ���飨�� 210-360 �У�
- �滻��Ŀ���ơ�ʱ�䡢����
- �޸ĺ��ĳɹ�
- ���¼���ջ��ǩ

#### 1.5 ����ר������ 370-550 �У�
- �������ܰٷֱȣ����磺`style="width: 95%"`��
- ��ӻ�ɾ��������
- �޸ļ��ܱ�ǩ

#### 1.6 ������������ 570-650 �У�
- �滻ѧУ���ơ�רҵ��GPA
- �޸Ŀγ��б�ͻ����

#### 1.7 ��ϵ��ʽ���� 670-750 �У�
```html
<p>138-XXXX-5678</p>              <!-- �滻Ϊ���ĵ绰 -->
<p>your.email@example.com</p>     <!-- �滻Ϊ�������� -->
<p>github.com/yourusername</p>    <!-- �滻Ϊ����GitHub -->
```

### ���� 2: ���PDF��������ѡ��

1. ������PDF�����ļ�������Ϊ `resume.pdf`
2. ������վ��Ŀ¼���� `index.html` ͬ����
3. �޸� `index.html` �е����ذ�ť���ӣ�

```html
<!-- �ҵ����������� href="#" ��Ϊ href="./resume.pdf" -->
<a href="./resume.pdf" class="btn btn-secondary" download>
```

### ���� 3: ���ز���

#### ����һ��ֱ�Ӵ򿪣���򵥣�
˫�� `index.html` �ļ�������������д򿪡�

#### ��������ʹ�ñ��ط��������Ƽ���

**ʹ�� Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Ȼ����ʣ�`http://localhost:8000`

**ʹ�� VS Code:**
��װ "Live Server" ������Ҽ� `index.html` �� "Open with Live Server"

## ? ���� GitHub Pages

### ǰ������
- ӵ�� GitHub �˺�
- ��װ�� Git

### ������

#### 1. ���� GitHub �ֿ�

1. ��¼ [GitHub](https://github.com)
2. ������Ͻ� "+" �� "New repository"
3. �ֿ�������д��`your-username.github.io`���滻 `your-username` Ϊ�����û�����
   - ���磺��������û����� `zhangsan`������д `zhangsan.github.io`
4. ����Ϊ **Public**��������
5. ��� "Create repository"

#### 2. �ϴ����뵽 GitHub

��������Ŀ�ļ����д��նˣ������У�������ִ�У�

```bash
# ��ʼ�� Git �ֿ�
git init

# ��������ļ�
git add .

# �ύ
git commit -m "Initial commit: ���˼�����վ"

# ���ӵ�Զ�ֿ̲⣨�滻Ϊ���Ĳֿ��ַ��
git remote add origin https://github.com/your-username/your-username.github.io.git

# ���͵� GitHub
git branch -M main
git push -u origin main
```

#### 3. ���� GitHub Pages

1. �������� GitHub �ֿ�ҳ��
2. ��� "Settings"�����ã�
3. ���˵��ҵ� "Pages"
4. �� "Source" ��ѡ��
   - Branch: `main`
   - Folder: `/ (root)`
5. ��� "Save"

#### 4. ����������վ

�ȴ� 1-2 ���Ӻ󣬷��ʣ�
```
https://your-username.github.io
```

**��ϲ�����ĸ��˼�����վ�Ѿ������ˣ�** ?

### ʹ���Զ�����������ѡ��

��������Լ���������

1. �� GitHub Pages �����У�"Custom domain" ��д��������
2. ��������������� CNAME ��¼��
   ```
   ��¼����: CNAME
   ������¼: www
   ��¼ֵ: your-username.github.io
   ```

## ? �Զ���������ɫ

��������޸���վ��ɫ���� `style.css`���ڵ� 1-10 ���޸���ɫ������

```css
:root {
    --primary-color: #2563eb;      /* ��ɫ������ɫ�� */
    --primary-dark: #1e40af;       /* ��ɫ */
    --primary-light: #3b82f6;      /* ǳɫ */
    --secondary-color: #10b981;    /* ����ɫ����ɫ�� */
    --accent-color: #f59e0b;       /* ǿ��ɫ����ɫ�� */
}
```

### �Ƽ���ɫ����

**�Ƽ�����Ĭ�ϣ���**
```css
--primary-color: #2563eb;
--secondary-color: #10b981;
```

**Ӳ���ȣ�**
```css
--primary-color: #f59e0b;
--secondary-color: #8b5cf6;
```

**רҵ�ң�**
```css
--primary-color: #6b7280;
--secondary-color: #10b981;
```

**��ҵ�죺**
```css
--primary-color: #dc2626;
--secondary-color: #059669;
```

## ? ������վ����

�޸ĺ������ϴ��� GitHub��

```bash
git add .
git commit -m "���¼�������"
git push
```

�ȴ� 1-2 ���ӣ���վ���Զ����¡�

## ? ��������

### Q1: GitHub Pages ��ʾ 404 ����
**A:** ȷ���ֿ�������ȷ��`your-username.github.io`������ Pages ������ȷ��

### Q2: ��վ��ʽ����
**A:** ȷ�� `style.css` �� `script.js` �ļ���ͬһĿ¼�¡�

### Q3: ����ͼ�겻��ʾ
**A:** ��Ҫ�������ܼ��� Font Awesome ͼ��⡣������߲鿴��ͼ�����ʾΪ���顣

### Q4: �ƶ��˲˵�����޷�Ӧ
**A:** ��� `script.js` �Ƿ���ȷ���ء�

### Q5: �����Ӹ�����Ŀ��
**A:** ����һ�� `project-card` ������ HTML ����飬ճ�����޸����ݼ��ɡ�

## ? ����ջ

- **HTML5** - ҳ��ṹ
- **CSS3** - ��ʽ�붯����ʹ�� CSS Grid��Flexbox�����䡢������
- **JavaScript (ES6)** - ����Ч��
- **Font Awesome** - ͼ���
- **GitHub Pages** - ����й�

## ? �����������

- ? Chrome (�Ƽ�)
- ? Firefox
- ? Safari
- ? Edge
- ? �ƶ��������

## ? ���׶���

### ��ӷ���ͳ��

������� Google Analytics ��ٶ�ͳ�ƣ�

1. ע��ͳ�Ʒ���
2. ��ȡ���ٴ���
3. ������ճ���� `index.html` �� `</body>` ǰ

### ���ʵʱ����

���Լ��� Tawk.to �����߿ͷ����ߡ�

### SEO �Ż�

�� `index.html` �� `<head>` ���Ѿ������˻����� SEO ��ǩ�������Խ�һ���Ż���

```html
<meta property="og:title" content="�������� - Ƕ��ʽ�������ʦ">
<meta property="og:description" content="��̵����ҽ���">
<meta property="og:image" content="������ƬURL">
```

## ? License

MIT License - ����������ʹ�á��޸ĺͷַ���ģ�塣

## ? ����

������иĽ����飬��ӭ�� Issue �� Pull Request��

## ? ֧��

�������⣬���ԣ�
- �鿴���ĵ�
- ������� HTML/CSS/JavaScript �̳�
- �� GitHub �� Issue

---

**ף����ְ˳����??**

������ģ��ﵽ��������ӭ���� Star ?

