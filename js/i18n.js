// Language support for Gooyoung website - Pure Static Implementation
var currentLang = localStorage.getItem('preferredLang') || 'zh';

// Translation data embedded directly in HTML
var translations = {
  "en": {
    "pageTitle": "Gooyoung - Digital Transformation | AI-Powered Development | Gov Grants Advisor",
    "metaDescription": "Gooyoung provides AI-powered web development, e-commerce platforms, and digital transformation services for Ontario businesses. Expert CDAP & DMS government grant advisors - save up to $2,500 on your digital project.",
    "nav": {
      "home": "HOME",
      "about": "ABOUT",
      "services": "SERVICES",
      "portfolio": "PORTFOLIO",
      "ai": "AI TECH",
      "grants": "GRANTS",
      "skills": "SKILLS",
      "clients": "CLIENTS",
      "pricing": "PRICING",
      "blog": "BLOG",
      "contact": "CONTACT"
    },
    "ai": {
      "label": "// TECHNOLOGY PIVOT",
      "title": "From Pixels to Deployment,<br>Full-Stack <span style=\"color: #00D1FF;\">AI Automation</span>",
      "design": {
        "title": "AI-Powered Design",
        "description": "Trained on massive commercial datasets, AI helps generate UI/UX solutions optimized for user conversion, making design not just beautiful, but productive."
      },
      "code": {
        "title": "AI Generative Code",
        "description": "Using cutting-edge LLMs to assist development, dramatically reducing human error and accelerating delivery—allowing us to launch complex systems in 1-2 weeks."
      },
      "deploy": {
        "title": "Cloud Auto-Deployment",
        "description": "Integrated CI/CD pipelines where every code change undergoes AI security review and instantly syncs to global CDN, ensuring 99.9% uptime."
      }
    },
    "grants": {
      "label": "// SME GRANTS CANADA",
      "title": "Let the Government Fund Your Tech Upgrade",
      "description": "Helping Canadian SMEs access CDAP and DMS official grants, up to $2,500 cash subsidy covering 100% of development costs.",
      "amount": "Grant Amount",
      "requirements": "Requirements",
      "eligible": "Eligible Costs",
      "service": "Our Role",
      "dms": {
        "title": "DMS Digital Transformation Grant",
        "subtitle": "Digital Main Street - Ontario",
        "req1": "Physical storefront in Ontario or designated BIA",
        "req2": "1-50 full-time employees",
        "req3": "For-profit business registered in Canada",
        "req4": "Never received similar DMS grant before",
        "usage": "Perfect for brand website redesign, e-commerce platform, Google Ads, social media management and other sales-boosting projects."
      },
      "cdap": {
        "title": "CDAP E-Commerce Growth Program",
        "subtitle": "Grow Your Business Online",
        "req1": "B2C for-profit business",
        "req2": "At least one employee (with T4 Payroll)",
        "req3": "Or annual revenue of at least $30,000 last fiscal year",
        "req4": "Registered corporation or sole proprietorship",
        "usage": "As a technical provider, we help you complete digital assessment and directly deliver e-commerce, online booking, payment gateway integration."
      },
      "advanced": {
        "title": "Need Higher Funding?",
        "description": "For high-growth businesses with annual revenue over $500,000, we can refer you to official digital advisors for $15,000 consulting grants and $100,000 interest-free loans (CDAP Stream 2).",
        "cta": "Inquire Advanced Options"
      }
    },
    "banner": {
      "slide1": {
        "badge": "AI-POWERED DEVELOPMENT",
        "title": "AI-Driven Design",
        "subtitle": "Reshaping Digital Experience",
        "description": "With advanced AI technology, we've reduced website development time by 70%.<br>Not just speed, but tailor-made visual excellence for you.",
        "button": "Learn Our AI Process"
      },
      "slide2": {
        "badge": "GOVERNMENT GRANT PROGRAM",
        "title": "Leverage Policy Benefits",
        "subtitle": "Save Up to $2,500",
        "description": "As senior CDAP and DMS consultants, we help you navigate Ontario's digital grants.<br>Let the government fund your digital transformation for a true 'zero-cost' start.",
        "button": "Calculate Your Grant"
      },
      "slide3": {
        "badge": "SECURE & SCALABLE",
        "title": "Fully Managed Services",
        "subtitle": "You Focus on Business",
        "description": "From domain and server maintenance to SEO monitoring, we're your external CTO team.<br>Based in Bradford, providing hardcore tech support for Ontario businesses.",
        "button": "Start Your Transformation"
      }
    },
    "about": {
      "badge": "About Gooyoung",
      "title": "Exceptional <span class=\"gradient-text\">Digital</span> Engineering",
      "description": "Rooted in North America, we don't just write code — we build sustainable digital foundations through the fusion of <span class=\"highlight\">AI technology and government incentives</span>.",
      "cta": "Get Expert Consultation",
      "card1": {
        "title": "Digital Business Transformation",
        "description": "Code is merely a tool. We help enterprises leap from traditional linear operations to future-ready architectures powered by data and AI, ensuring every investment yields solid market returns in the digital economy."
      },
      "card2": {
        "title": "Engineering Excellence",
        "description": "From high-concurrency distributed systems to deep learning models, every decision we make undergoes rigorous stress testing and precise ROI calculations to maximize your business value."
      },
      "metric1": "Grant Approval",
      "metric2": "Dev Velocity",
      "metric3": "Monitoring"
    },
    "services": {
      "title_label": "CORE SERVICES",
      "title": "SERVICES",
      "description": "Our Service Matrix",
      "service1": {
        "title": "Brand Website Development",
        "description": "Custom-built exclusively for North American enterprises. We optimize for lightning-fast load speeds and SEO-friendly architecture, crafting a comprehensive brand presence that captures your audience from the first click."
      },
      "service2": {
        "title": "Full-Featured E-Commerce Platform",
        "description": "Deep integration with payment gateways and inventory management systems. Built to handle high concurrent traffic with a smooth mobile-first experience that converts every visitor into a paying customer."
      },
      "service3": {
        "title": "Government Subsidy Technical Support",
        "description": "Expert interpretation of CDAP, DMS and other digital transformation government subsidies. We deliver compliant technical implementation and guide your enterprise to maximize funding eligibility and amounts."
      },
      "service4": {
        "title": "AI-Powered Interaction Integration",
        "description": "Deploy generative AI-driven intelligent customer service and automated workflows. Our large language models optimize efficiency and enable 24/7 unmanned business response capabilities."
      },
      "service5": {
        "title": "North American Growth Blueprint",
        "description": "Precision SEO optimization aligned with local search behavior. We help your brand stand out on Google and social platforms, capturing high-quality local leads and driving sustainable growth."
      },
      "service6": {
        "title": "Enterprise-Grade Cloud Maintenance",
        "description": "Bank-level data security and 24/7 monitoring services. Your digital assets remain fortified against any potential threat, maintaining peak stability under heavy load and emerging vulnerabilities."
      },
      "cta": "Customize Your Digital Blueprint"
    },
    "projects": {
      "title": "OUR AWESOME PROJECTS",
      "description": "A selection of portfolio projects showcasing our expertise in e-commerce platforms, business websites, and digital solutions across various industries.",
      "all": "All Projects",
      "ecommerce": "E-Commerce Platforms",
      "business": "Business Websites"
    },
    "portfolio": {
      "electro": "Electro Store",
      "kaira": "Kaira Fashion",
      "cozastore": "Cozastore",
      "furni": "Furni",
      "feane": "Feane Restaurant",
      "organic": "Organic Store",
      "clinic": "Medical Clinic",
      "restaurant": "Restaurant Master",
      "ecommerce": "E-Commerce",
      "fashion": "Fashion",
      "electronics": "Electronics",
      "bootstrap": "Bootstrap",
      "responsive": "Responsive Design",
      "bootstrap5": "Bootstrap 5",
      "modern": "Modern Design",
      "shopping": "Shopping Cart",
      "ui": "Modern UI",
      "furniture": "Furniture",
      "catalog": "Product Catalog",
      "checkout": "Checkout System",
      "food": "Food & Beverage",
      "restaurant": "Restaurant",
      "fullstack": "Full Stack",
      "products": "Natural Products",
      "website": "Brand Website",
      "eco": "Eco-Friendly",
      "healthcare": "Healthcare",
      "professional": "Professional Site",
      "appointment": "Appointment System",
      "dining": "Fine Dining",
      "brand": "Restaurant Brand",
      "menu": "Menu System",
      "premium": "Premium Design"
    },
    "contact": {
      "label": "// INSTANT CONTACT",
      "title": "No Office Limits,",
      "titleHighlight": "Ontario-Wide Service",
      "description": "We operate on a 100% remote collaboration model, significantly reducing operational costs and offering more competitive pricing. Click to scan QR or tap link to chat directly:",
      "locationTitle": "Ontario Wide",
      "locationDesc": "Based in Toronto, serving all of Ontario. Supporting online Zoom/Meet or in-person meetings within GTA.",
      "qrScan": "Scan QR or search ID to add friend",
      "openChat": "Open Chat Directly",
      "openApp": "Open in App",
      "wechat": "WeChat",
      "phone": "Direct Call"
    }
  },
  "zh": {
    "pageTitle": "Gooyoung - 数字化转型 | AI 驱动开发 | 政府补贴顾问",
    "metaDescription": "Gooyoung 为安大略企业提供 AI 智能网站开发、电商平台和数字化转型服务。专业 CDAP 和 DMS 政府补贴顾问，帮助您节省高达 $2,500 项目费用。",
    "nav": {
      "home": "首页",
      "about": "关于",
      "services": "服务",
      "portfolio": "案例",
      "ai": "AI 科技",
      "grants": "补助",
      "skills": "技能",
      "clients": "客户",
      "pricing": "价格",
      "contact": "联系"
    },
    "ai": {
      "label": "// 技术主轴",
      "title": "从像素到部署，<br>全流程 <span style=\"color: #00D1FF;\">AI 自动化</span>",
      "design": {
        "title": "AI 智能设计",
        "description": "基于海量商业数据训练，AI 协助生成最符合用户转化逻辑的 UI/UX 方案，让设计不仅仅是美观，更是生产力。"
      },
      "code": {
        "title": "AI 生成式代码",
        "description": "使用最新的 LLM 协助开发，极大降低人工错误并提升交付速度，让我们能在 1-2 周内上线复杂系统。"
      },
      "deploy": {
        "title": "云端自动部署",
        "description": "集成 CI/CD 自动化流水线，每行代码变更都经过 AI 安全审查并瞬间同步至全球 CDN，确保 99.9% 稳定性。"
      }
    },
    "grants": {
      "label": "// 加拿大中小企业补助",
      "title": "让政府为您的技术升级买单",
      "description": "协助加拿大中小企业对接 CDAP 与 DMS 官方补助，最高获取 $2,500 现金补贴，覆盖 100% 开发费用。",
      "amount": "补助金额",
      "requirements": "申请门槛",
      "eligible": "资金用途",
      "service": "我们的服务",
      "dms": {
        "title": "DMS 数字化转型补贴",
        "subtitle": "Digital Main Street - 安省",
        "req1": "实体店面位于安省或特定商业促进区 (BIA)",
        "req2": "拥有 1-50 名正式员工",
        "req3": "在加拿大注册的营利性企业",
        "req4": "过去未曾获得过同类 DMS 补助",
        "usage": "完美覆盖品牌官网改版、电商平台搭建、Google 广告投放、社交媒体管理等直接提升销售额的项目。"
      },
      "cdap": {
        "title": "CDAP 电商增长计划",
        "subtitle": "Grow Your Business Online",
        "req1": "面向消费者 (B2C) 的营利性企业",
        "req2": "至少拥有一名员工（有 T4 Payroll）",
        "req3": "或过去一个财年年收入不低于 $30,000",
        "req4": "注册公司或注册个体户 (Sole Proprietorship)",
        "usage": "作为技术提供商，我们协助您完成数字化评估，并直接承接电商建站、在线预订、支付网关集成等技术实施工作。"
      },
      "advanced": {
        "title": "需要更高额度的资金？",
        "description": "针对年收入过 $500,000 的高增长型企业，我们可引荐合作的官方数字化顾问协助申请 $15,000 咨询费补贴及 $100,000 无息贷款 (CDAP Stream 2)。",
        "cta": "咨询高阶方案"
      }
    },
    "banner": {
      "slide1": {
        "badge": "AI 驱动开发",
        "title": "AI 智能设计",
        "subtitle": "重塑数字体验",
        "description": "利用先进的人工智能技术，我们将建站周期缩短了 70%。<br>不仅仅是速度，更是为您量身定制的极致视觉呈现。",
        "button": "了解我们的 AI 流程"
      },
      "slide2": {
        "badge": "政府补贴计划",
        "title": "利用政策红利",
        "subtitle": "为您省下 $2,500",
        "description": "作为 CDAP 与 DMS 的资深咨询专家，我们帮您解读安省数字化补贴。<br>让政府为您的企业转型买单，实现真正意义上的\"零成本\"启动。",
        "button": "立即测算补贴额度"
      },
      "slide3": {
        "badge": "安全且可扩展",
        "title": "全托管式服务",
        "subtitle": "您只管做生意",
        "description": "从域名、服务器维护到 SEO 排名监控，我们是您的外部 CTO 团队。<br>在 Bradford，为全球安省企业提供最硬核的技术支持。",
        "button": "开始您的转型计划"
      }
    },
    "about": {
      "badge": "关于 Gooyoung",
      "title": "卓越的<span class=\"gradient-text\">数字化</span>工程能力",
      "description": "深耕北美市场，我们不仅编写代码，更通过 <span class=\"highlight\">AI 技术与政府政策红利</span> 的深度融合，为您构建可持续增长的商业数字底座。",
      "cta": "获取专家方案",
      "card1": {
        "title": "商业逻辑的数字化重塑",
        "description": "代码只是工具，我们协助企业从传统的线性运营跨越到以数据为核心、以 AI 为赋能的未来架构。确保您的每一步投资，都能在数字经济中获得最稳健的市场反馈。"
      },
      "card2": {
        "title": "底层架构的工程敬畏",
        "description": "无论是高并发分布式集群，还是深度学习模型，我们的每一项决策都经过严格的压力测试与商业回报率（ROI）精密测算，最大化您的商业价值。"
      },
      "metric1": "补贴通过率",
      "metric2": "开发速度",
      "metric3": "全天候监控"
    },
    "services": {
      "title_label": "核心服务",
      "title": "服务",
      "description": "我们的服务矩阵",
      "service1": {
        "title": "品牌官方网站开发",
        "description": "专为北美本地企业定制，兼顾极致的加载速度与 SEO 友好型架构。全方位塑造您的品牌线上第一印象。"
      },
      "service2": {
        "title": "全功能网络商城",
        "description": "深度整合支付网关与库存管理系统。支持高并发访问，提供流畅移动体验，将流量精准转化为订单。"
      },
      "service3": {
        "title": "政府补贴技术支持",
        "description": "专业解读 CDAP、DMS 等数字化政府补贴政策。提供合规技术实施方案，协助企业获取最高额度资金。"
      },
      "service4": {
        "title": "AI 智能交互集成",
        "description": "接入生成式 AI 智能客服与自动化工作流。通过大模型优化服务效率，实现 24/7 无人值守业务响应。"
      },
      "service5": {
        "title": "北美市场增长方案",
        "description": "结合本地搜索习惯的精准 SEO 优化。我们协助您在 Google 与社交媒体中脱颖而出，获取本地高质量客源。"
      },
      "service6": {
        "title": "企业级云端维护",
        "description": "提供银行级数据安全防护与全天候监控。确保您的数字资产在任何潜在威胁下依然稳如磐石。"
      },
      "cta": "定制您的数字蓝图"    },
    "projects": {
      "title": "我们的精品项目",
      "description": "精选的作品集项目，展示我们在电子商务平台、企业网站和各行业数字解决方案方面的专业能力。",
      "all": "全部项目",
      "ecommerce": "电商平台",
      "business": "企业网站"
    },
    "portfolio": {
      "electro": "电子产品商城",
      "kaira": "凯拉时尚",
      "cozastore": "科兹商城",
      "furni": "家居商城",
      "feane": "菲恩餐厅",
      "organic": "有机产品店",
      "clinic": "医疗诊所",
      "restaurant": "餐厅大师",
      "ecommerce": "电子商务",
      "fashion": "时尚",
      "electronics": "电子产品",
      "bootstrap": "Bootstrap",
      "responsive": "响应式设计",
      "bootstrap5": "Bootstrap 5",
      "modern": "现代设计",
      "shopping": "购物车",
      "ui": "现代界面",
      "furniture": "家具",
      "catalog": "商品目录",
      "checkout": "结账系统",
      "food": "食品饮料",
      "restaurant": "餐厅",
      "fullstack": "全栈",
      "products": "天然产品",
      "website": "品牌网站",
      "eco": "环保",
      "healthcare": "医疗",
      "professional": "专业网站",
      "appointment": "预约系统",
      "dining": "高档餐饮",
      "brand": "餐厅品牌",
      "menu": "菜单系统",
      "premium": "高级设计"
    },
    "contact": {
      "label": "// 即时联络",
      "title": "无办公室限制，",
      "titleHighlight": "全安省服务",
      "description": "我们采用 100% 远程协作模式，极大地降低了运营成本，提供更具竞争力的价格。点击图标扫码或点击链接直接对话：",
      "locationTitle": "全安省服务",
      "locationDesc": "基于多伦多，服务全安省。支持线上 Zoom/Meet 或 GTA 线下约见。",
      "qrScan": "请扫码或搜索 ID 添加好友",
      "openChat": "直接打开对话",
      "openApp": "在 App 中打开",
      "wechat": "微信",
      "phone": "电话"
    }
  }
};

let currentLanguage = 'en';

function getNestedValue(obj, path) {
    return path.split('.').reduce((current, key) => {
        return current && current[key] !== undefined ? current[key] : null;
    }, obj);
}

function applyTranslations(lang) {
    currentLanguage = lang;
    
    // Update page title
    if (translations[lang] && translations[lang].pageTitle) {
        document.title = translations[lang].pageTitle;
    }
    
    // Update meta description
    if (translations[lang] && translations[lang].metaDescription) {
        var metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute('content', translations[lang].metaDescription);
        }
        // Update Open Graph description
        var ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) {
            ogDesc.setAttribute('content', translations[lang].metaDescription);
        }
    }
    
    // Update html lang attribute
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getNestedValue(translations[lang], key);
        
        if (translation) {
            const isHtml = element.hasAttribute('data-i18n-html') || 
                           translation.includes('<span') || 
                           translation.includes('<br');
            
            if (isHtml) {
                element.innerHTML = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
}

function switchLanguage(lang) {
    applyTranslations(lang);
    
    // Update language switch buttons
    document.getElementById('lang-en').classList.toggle('active', lang === 'en');
    document.getElementById('lang-zh').classList.toggle('active', lang === 'zh');
    
    // Save preference
    localStorage.setItem('language', lang);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Default to English for first-time visitors, remember user's choice for returning visitors
    const savedLang = localStorage.getItem('language') || 'en';
    switchLanguage(savedLang);
});
