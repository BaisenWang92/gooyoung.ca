# Gooyoung Website - Multilingual Configuration Guide

## Welcome to Gooyoung Official Website Template

This is a professional responsive website template customized for Gooyoung web development company, supporting **English and Chinese dual languages**.

## 🌍 Multilingual Features

### Supported Languages
- **English (EN)** - Default language
- **Chinese (ZH)** - Simplified Chinese

### Language Switching
Users can change the website language using the language switch button (EN / 中文) on the right side of the navigation bar. The selected language will be automatically saved to the browser's local storage, and the user's language preference will be retained on the next visit.

## 📁 File Structure

```
bizpro1-master/
├── index.html           # Main page (with i18n markup)
├── css/
│   ├── style.css       # Main stylesheet
│   ├── responsive.css  # Responsive styles
│   └── language-switch.css  # Language switch button styles
├── js/
│   ├── i18n.js         # Multilingual support script
│   ├── i18n.json       # English/Chinese translation file
│   ├── theme.js        # Theme script
│   └── map-script.js   # Map script
└── ../Logo/            # Gooyoung company logo folder
```

## 🔧 How to Customize Translations

### Edit Translation File (`js/i18n.json`)

The translation file uses JSON format with the following structure:

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

### Using Translations in HTML

Use the `data-i18n` attribute to mark elements that need translation:

```html
<!-- Navigation menu -->
<a href="#home" data-i18n="nav.home">HOME</a>

<!-- Title -->
<h2 data-i18n="about.title">ABOUT GOOYOUNG</h2>

<!-- Description text -->
<p data-i18n="about.description">Gooyoung is a leading web development company...</p>
```

**Important**: When adding new translation items, ensure:
1. Add corresponding text in both `en` and `zh` objects in `i18n.json`
2. Use dot notation to specify nested translation keys, e.g., `nav.home`
3. Mark elements to be translated in HTML with the `data-i18n` attribute

## 🎨 Update Logo

The website currently references the Gooyoung logo using `../Logo/logo.png`. To change the logo:

1. Place the new logo file in the `../Logo/` directory
2. Update the reference in the Header section of `index.html`:
   ```html
   <a href="index.html" class="logo float-left tran4s">
     <img src="../Logo/logo.png" alt="Gooyoung Logo">
   </a>
   ```

## 📝 Customize Website Content

### Update Navigation Menu

Edit the navigation section in `js/i18n.json`, for example:

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

### Update Homepage Content

Edit the respective sections in `js/i18n.json`, for example, updating the Hero Section:

```json
"hero": {
  "title": "WELCOME TO GOOYOUNG",
  "subtitle": "Professional Web Development Solutions",
  "cta": "View Our Work"
}
```

### Update About Us Section

```json
"about": {
  "title": "ABOUT GOOYOUNG",
  "description": "Gooyoung is a leading web development company...",
  "service1": "Web Development",
  "service1Desc": "We create responsive and dynamic web applications...",
  ...
}
```

## 🚀 Quick Start

### 1. Basic Setup
- Place all website files in an appropriate directory on your server
- Ensure `js/i18n.js` and `js/i18n.json` load correctly
- Link `css/language-switch.css` to the HTML header

### 2. Test Multilingual Features
- Open the website homepage
- Click the language switch button on the right side of the navigation bar
- Verify that all content is translated correctly

### 3. Customize Content
- Edit the `i18n.json` file according to Gooyoung company requirements
- Update content that needs translation in HTML by adding the `data-i18n` attribute
- Test multilingual display

## 💾 Browser Local Storage

The user's selected language preference is saved in the browser's local storage using the key `preferredLang`.

### Reset User Language Preference
If you need to reset language settings, run this in the browser console:
```javascript
localStorage.removeItem('preferredLang');
```

## 🔍 Troubleshooting

### Translation Not Displaying
1. Check the browser console for JavaScript errors
2. Confirm that `i18n.js` and `i18n.json` file paths are correct
3. Verify that the key names in the `data-i18n` attribute exactly match those in `i18n.json`

### Slow Page Loading
- Check your internet connection
- Ensure the JSON file is valid (use an online JSON validator)
- Clear browser cache

### Dynamic Content Not Translated
For content dynamically added via JavaScript, you need to manually call the translation function:
```javascript
// Set translation
element.textContent = getTranslation('key.name');

// Switch language
switchLanguage('en'); // or 'zh'
```

## 📧 Contact Information

Gooyoung Web Development Company
- Website: [To be filled]
- Email: [To be filled]
- Phone: [To be filled]
- Address: [To be filled]

## 📄 License

This website template is based on the BizPro template provided by Colorlib. It has been customized according to Gooyoung's requirements.

---

## Changelog

### v1.0.0 (2026-02-03)
- ✅ Implemented English/Chinese dual language support
- ✅ Added language switching functionality
- ✅ Updated logo reference to Gooyoung brand
- ✅ Added detailed configuration documentation

---

**Tip**: It's recommended to back up original files before making any modifications to prevent accidental loss.
