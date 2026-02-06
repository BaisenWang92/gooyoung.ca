# Gooyoung Website - 多语言配置指南

## 欢迎使用Gooyoung官方网站模板

这是为Gooyoung网站开发公司定制的专业响应式网站模板，支持**中英文双语言**。

## 🌍 多语言功能

### 支持的语言
- **英文 (EN)** - 默认语言
- **中文 (ZH)** - 简体中文

### 语言切换
用户可以通过导航栏右侧的语言切换按钮（EN / 中文）来改变网站语言。选择的语言会自动保存到浏览器本地存储，下次访问时会保留用户的语言选择。

## 📁 文件结构

```
bizpro1-master/
├── index.html           # 主页面（包含i18n标记）
├── css/
│   ├── style.css       # 主样式表
│   ├── responsive.css  # 响应式样式
│   └── language-switch.css  # 语言切换按钮样式
├── js/
│   ├── i18n.js         # 多语言支持脚本
│   ├── i18n.json       # 中英文翻译文件
│   ├── theme.js        # 主题脚本
│   └── map-script.js   # 地图脚本
└── ../Logo/            # Gooyoung公司Logo文件夹
```

## 🔧 如何自定义翻译

### 编辑翻译文件 (`js/i18n.json`)

翻译文件采用JSON格式，结构如下：

```json
{
  "en": {
    "nav": {
      "home": "HOME",
      "about": "ABOUT",
      ...
    },
    "about": {
      "title": "ABOUT GOOYOUNG",
      ...
    }
  },
  "zh": {
    "nav": {
      "home": "首页",
      "about": "关于我们",
      ...
    },
    "about": {
      "title": "关于古鹰网络",
      ...
    }
  }
}
```

### 在HTML中使用翻译

使用 `data-i18n` 属性标记需要翻译的元素：

```html
<!-- 导航菜单 -->
<a href="#home" data-i18n="nav.home">HOME</a>

<!-- 标题 -->
<h2 data-i18n="about.title">ABOUT GOOYOUNG</h2>

<!-- 描述文本 -->
<p data-i18n="about.description">Gooyoung is a leading web development company...</p>
```

**重要**：当你添加新的翻译项目时，确保：
1. 在 `i18n.json` 中的 `en` 和 `zh` 对象中都添加相应的文本
2. 使用点符号（dot notation）来指定嵌套的翻译键，例如 `nav.home`
3. 在HTML中使用 `data-i18n` 属性标记要翻译的元素

## 🎨 更新Logo

当前网站使用 `../Logo/logo.png` 引用Gooyoung的Logo文件。如果需要更改Logo：

1. 将新的Logo文件放在 `../Logo/` 目录下
2. 在 `index.html` 中的Header部分更新引用：
   ```html
   <a href="index.html" class="logo float-left tran4s">
     <img src="../Logo/logo.png" alt="Gooyoung Logo">
   </a>
   ```

## 📝 自定义网站内容

### 更新导航菜单

编辑 `js/i18n.json` 中的导航部分，例如：

```json
"nav": {
  "home": "HOME",
  "about": "ABOUT US",
  "services": "OUR SERVICES",
  "portfolio": "WORK",
  "team": "TEAM",
  "skills": "SKILLS",
  "clients": "CLIENTS",
  "pricing": "PRICING",
  "blog": "NEWS",
  "contact": "GET IN TOUCH"
}
```

### 更新主页内容

编辑 `js/i18n.json` 中的各个部分，例如更新英雄部分（Hero Section）：

```json
"hero": {
  "title": "WELCOME TO GOOYOUNG",
  "subtitle": "Professional Web Development Solutions",
  "cta": "View Our Work"
}
```

### 更新关于我们部分

```json
"about": {
  "title": "ABOUT GOOYOUNG",
  "description": "Gooyoung is a leading web development company...",
  "service1": "Web Development",
  "service1Desc": "We create responsive and dynamic web applications...",
  ...
}
```

## 🚀 快速开始

### 1. 基础设置
- 将所有网站文件放在服务器的合适目录中
- 确保 `js/i18n.js` 和 `js/i18n.json` 正确加载
- 将 `css/language-switch.css` 链接到HTML头部

### 2. 测试多语言功能
- 打开网站首页
- 点击导航栏右侧的语言切换按钮
- 验证所有内容是否正确翻译

### 3. 自定义内容
- 根据Gooyoung公司的需求编辑 `i18n.json` 文件
- 更新HTML中需要翻译的内容，添加 `data-i18n` 属性
- 测试多语言显示

## 💾 浏览器本地存储

用户选择的语言偏好会保存在浏览器的本地存储中（localStorage），使用键名 `preferredLang`。

### 清除用户的语言偏好
如果需要重置语言设置，可以在浏览器控制台运行：
```javascript
localStorage.removeItem('preferredLang');
```

## 🔍 故障排除

### 翻译未显示
1. 检查浏览器控制台是否有JavaScript错误
2. 确认 `i18n.js` 和 `i18n.json` 文件路径正确
3. 验证 `data-i18n` 属性中的键名与 `i18n.json` 中的键名完全匹配

### 页面加载缓慢
- 检查网络连接
- 确保 JSON 文件有效（可使用在线JSON验证工具）
- 清除浏览器缓存

### 动态内容未翻译
对于JavaScript动态添加的内容，需要手动调用翻译函数：
```javascript
// 设置翻译
element.textContent = getTranslation('key.name');

// 切换语言时
switchLanguage('en'); // 或 'zh'
```

## 📧 支持信息

Gooyoung网站开发公司
- 网站: [待填写]
- 邮箱: [待填写]
- 电话: [待填写]
- 地址: [待填写]

## 📄 许可证

此网站模板基于BizPro模板，由Colorlib提供。已根据Gooyoung的需求进行了定制。

---

## 更新日志

### v1.0.0 (2026-02-03)
- ✅ 实现英文/中文双语言支持
- ✅ 添加语言切换功能
- ✅ 更新Logo引用为Gooyoung品牌
- ✅ 添加详细的配置文档

---

**提示**: 在修改任何文件前，建议备份原始文件以防止意外损失。
