import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import service1 from "../images/service1.jpg";
import { FaScaleBalanced, FaBuilding, FaHandshake, FaFileContract, FaShieldHalved, FaChartLine } from 'react-icons/fa6';
import videohero from "../images/service1.mp4";
import { motion } from "framer-motion";

// Translations object for multi-language support
const translations = {
  en: {
    // Hero Section
    heroTitle: "Legal Expertise You Can Trust",
    heroSubtitle: "Protecting your rights and interests with decades of experience and a proven track record.",
    
    // Introduction Section
    introTitle: "Corporate Legal Expertise",
    introPara1: "In today's complex business environment, having experienced corporate legal counsel is essential for navigating regulatory requirements, mitigating risks, and seizing growth opportunities. Our corporate law practice provides comprehensive legal solutions tailored to your business needs.",
    introPara2: "From business formation and contract negotiation to compliance management and dispute resolution, we serve as your trusted legal partner throughout every stage of your company's growth journey.",
    
    // Services Section
    servicesTitle: "Our Corporate Legal Services",
    servicesSubtitle: "Comprehensive legal support for every aspect of your business operations",
    
    // Service 1: Business Formation
    service1Title: "Business Formation & Registration",
    service1Desc: "Expert guidance through the business formation process, ensuring proper legal structure and compliance from day one.",
    service1Point1: "Entity selection and structuring",
    service1Point2: "Registration and filing procedures",
    service1Point3: "Operating agreements and bylaws",
    
    // Service 2: Contracts & Agreements
    service2Title: "Contracts & Agreements",
    service2Desc: "Comprehensive contract drafting, review, and negotiation services to protect your business interests.",
    service2Point1: "Commercial contract drafting",
    service2Point2: "Contract review and analysis",
    service2Point3: "Negotiation and amendments",
    
    // Service 3: Mergers & Acquisitions
    service3Title: "Mergers & Acquisitions",
    service3Desc: "Strategic legal support for complex business transactions, from due diligence to closing.",
    service3Point1: "Due diligence processes",
    service3Point2: "Transaction structuring",
    service3Point3: "Deal negotiation and closing",
    
    // Service 4: Compliance & Governance
    service4Title: "Compliance & Governance",
    service4Desc: "Ensuring your business meets all regulatory requirements and maintains proper corporate governance.",
    service4Point1: "Regulatory compliance programs",
    service4Point2: "Corporate governance policies",
    service4Point3: "Board meeting management",
    
    // Service 5: Dispute Resolution
    service5Title: "Dispute Resolution",
    service5Desc: "Effective strategies for resolving business disputes through negotiation, mediation, or litigation when necessary.",
    service5Point1: "Commercial litigation",
    service5Point2: "Alternative dispute resolution",
    service5Point3: "Contract disputes",
    
    // Service 6: Intellectual Property
    service6Title: "Intellectual Property",
    service6Desc: "Protection and management of intellectual property assets critical to your business's competitive advantage.",
    service6Point1: "Trademark registration",
    service6Point2: "Patent strategies",
    service6Point3: "IP licensing agreements",
    
    // Client Success Section
    successTitle: "Client Success: TechGrowth Inc.",
    successDesc: "TechGrowth Inc., a rapidly expanding SaaS company, faced complex regulatory challenges as they prepared for international expansion. Our corporate team provided comprehensive guidance that enabled their successful market entry into three new countries.",
    successStat1: "Faster compliance approval",
    successStat2: "Potential penalties avoided",
    successStat3: "New international markets",
    successStat4: "Months of strategic guidance",
    successButton: "Read Full Case Study",
    
    // Why Choose Us Section
    whyChooseTitle: "Why Choose Our Corporate Legal Services",
    whyChooseSubtitle: "Experience the difference that specialized corporate legal expertise can make for your business",
    whyChoose1Title: "Industry Expertise",
    whyChoose1Desc: "Deep understanding of various industries and their unique legal challenges",
    whyChoose2Title: "Proactive Approach",
    whyChoose2Desc: "Identifying potential issues before they become problems for your business",
    whyChoose3Title: "Business-Focused Solutions",
    whyChoose3Desc: "Legal strategies aligned with your commercial objectives and growth plans",
    whyChoose4Title: "Dedicated Team",
    whyChoose4Desc: "Consistent access to attorneys who understand your business inside and out",
    
    // CTA Section
    ctaTitle: "Ready to Strengthen Your Corporate Legal Foundation?",
    ctaDesc: "Schedule a consultation with our corporate law experts to discuss how we can support your business goals and mitigate legal risks.",
    ctaButton1: "Contact Us Today",
    ctaButton2: "Browse All Services"
  },
  ar: {
    // Hero Section
    heroTitle: "خبرة قانونية يمكنك الوثوق بها",
    heroSubtitle: "حماية حقوقك ومصالحك بعقود من الخبرة وسجل حافل بالإنجازات.",
    
    // Introduction Section
    introTitle: "الخبرة القانونية المؤسسية",
    introPara1: "في بيئة الأعمال المعقدة اليوم، يعد وجود مستشار قانوني مؤسسي ذو خبرة أمراً ضرورياً للتنقل عبر المتطلبات التنظيمية وتقليل المخاطر واغتنام فرص النمو. تقدم ممارستنا في القانون المؤسسي حلولاً قانونية شاملة مصممة لتلبية احتياجات عملك.",
    introPara2: "من تكوين الأعمال والتفاوض على العقود إلى إدارة الامتثال وحل النزاعات، نحن نعمل كشريكك القانوني الموثوق طوال كل مرحلة من مراحل رحلة نمو شركتك.",
    
    // Services Section
    servicesTitle: "خدماتنا القانونية المؤسسية",
    servicesSubtitle: "دعم قانوني شامل لكل جانب من جوانب عمليات عملك",
    
    // Service 1: Business Formation
    service1Title: "تكوين وتسجيل الأعمال",
    service1Desc: "إرشاد خبير خلال عملية تكوين الأعمال، مما يضمن الهيكل القانوني المناسب والامتثال من اليوم الأول.",
    service1Point1: "اختيار الكيان والهيكلة",
    service1Point2: "إجراءات التسجيل والإيداع",
    service1Point3: "اتفاقيات التشغيل واللوائح الداخلية",
    
    // Service 2: Contracts & Agreements
    service2Title: "العقود والاتفاقيات",
    service2Desc: "خدمات شاملة لصياغة العقود ومراجعتها والتفاوض عليها لحماية مصالح عملك.",
    service2Point1: "صياغة العقود التجارية",
    service2Point2: "مراجعة وتحليل العقود",
    service2Point3: "التفاوض والتعديلات",
    
    // Service 3: Mergers & Acquisitions
    service3Title: "عمليات الدمج والاستحواذ",
    service3Desc: "دعم قانوني استراتيجي للمعاملات التجارية المعقدة، من العناية الواجبة إلى الإغلاق.",
    service3Point1: "عمليات العناية الواجبة",
    service3Point2: "هيكلة المعاملات",
    service3Point3: "التفاوض على الصفقات والإغلاق",
    
    // Service 4: Compliance & Governance
    service4Title: "الامتثال والحوكمة",
    service4Desc: "ضمان استيفاء عملك لجميع المتطلبات التنظيمية والحفاظ على الحوكمة المؤسسية السليمة.",
    service4Point1: "برامج الامتثال التنظيمي",
    service4Point2: "سياسات الحوكمة المؤسسية",
    service4Point3: "إدارة اجتماعات مجلس الإدارة",
    
    // Service 5: Dispute Resolution
    service5Title: "حل النزاعات",
    service5Desc: "استراتيجيات فعالة لحل نزاعات الأعمال من خلال التفاوض أو الوساطة أو التقاضي عند الضرورة.",
    service5Point1: "التقاضي التجاري",
    service5Point2: "حل النزاعات البديل",
    service5Point3: "نزاعات العقود",
    
    // Service 6: Intellectual Property
    service6Title: "الملكية الفكرية",
    service6Desc: "حماية وإدارة أصول الملكية الفكرية المهمة للميزة التنافسية لعملك.",
    service6Point1: "تسجيل العلامات التجارية",
    service6Point2: "استراتيجيات براءات الاختراع",
    service6Point3: "اتفاقيات ترخيص الملكية الفكرية",
    
    // Client Success Section
    successTitle: "نجاح العميل: شركة TechGrowth Inc.",
    successDesc: "واجهت شركة TechGrowth Inc.، وهي شركة SaaS سريعة التوسع، تحديات تنظيمية معقدة أثناء استعدادها للتوسع الدولي. قدم فريقنا المؤسسي إرشادات شاملة مكنت من دخولهم الناجح إلى ثلاث دول جديدة.",
    successStat1: "موافقة امتثال أسرع",
    successStat2: "عقوبات محتملة تم تجنبها",
    successStat3: "أسواق دولية جديدة",
    successStat4: "أشهر من التوجيه الاستراتيجي",
    successButton: "اقرأ دراسة الحالة الكاملة",
    
    // Why Choose Us Section
    whyChooseTitle: "لماذا تختار خدماتنا القانونية المؤسسية",
    whyChooseSubtitle: "اختبر الفرق الذي يمكن أن تحدثه الخبرة القانونية المؤسسية المتخصصة لعملك",
    whyChoose1Title: "خبرة الصناعة",
    whyChoose1Desc: "فهم عميق لمختلف الصناعات وتحدياتها القانونية الفريدة",
    whyChoose2Title: "نهج استباقي",
    whyChoose2Desc: "تحديد القضايا المحتملة قبل أن تصبح مشاكل لعملك",
    whyChoose3Title: "حلول موجهة للأعمال",
    whyChoose3Desc: "استراتيجيات قانونية متماشية مع أهدافك التجارية وخطط النمو",
    whyChoose4Title: "فريق مخصص",
    whyChoose4Desc: "وصول ثابت إلى المحامين الذين يفهمون عملك من الداخل والخارج",
    
    // CTA Section
    ctaTitle: "مستعد لتقوية أساسك القانوني المؤسسي؟",
    ctaDesc: "احجز استشارة مع خبراء قانون الشركات لدينا لمناقشة كيف يمكننا دعم أهداف عملك وتقليل المخاطر القانونية.",
    ctaButton1: "اتصل بنا اليوم",
    ctaButton2: "تصفح جميع الخدمات"
  },
  he: {
    // Hero Section
    heroTitle: "מומחיות משפטית שבה אפשר לבטוח",
    heroSubtitle: "הגנה על הזכויות והאינטרסים שלכם עם עשרות שנות ניסיון ורקורד מוכח.",
    
    // Introduction Section
    introTitle: "מומחיות משפטית תאגידית",
    introPara1: "בסביבת העסקים המורכבת של היום, הימצאות של יועץ משפטי תאגידי מנוסה היא חיונית לניווט בין דרישות רגולטוריות, הפחתת סיכונים וניצול הזדמנויות צמיחה. התרגול שלנו בחוק תאגידים מספק פתרונות משפטיים מקיפים המותאמים לצרכי העסק שלכם.",
    introPara2: "מהקמת עסקים ומשא ומתן על חוזים ועד לניהול ציות ופתרון סכסוכים, אנחנו משמשים כשותף המשפטי המהימן שלכם לאורך כל שלב במסע הצמיחה של החברה שלכם.",
    
    // Services Section
    servicesTitle: "השירותים המשפטיים התאגידיים שלנו",
    servicesSubtitle: "תמיכה משפטית מקיפה לכל היבט של פעילות העסק שלכם",
    
    // Service 1: Business Formation
    service1Title: "הקמה ורישום עסקים",
    service1Desc: "הנחיה מומחית בתהליך הקמת העסק, הבטחת מבנה משפטי מתאים וציות מהיום הראשון.",
    service1Point1: "בחירת ישות והיבנות",
    service1Point2: "נוהלי רישום והגשה",
    service1Point3: "הסכמי הפעלה וחוקי עזר",
    
    // Service 2: Contracts & Agreements
    service2Title: "חוזים והסכמים",
    service2Desc: "שירותי ניסוח, סקירה ומשא ומתן מקיפים על חוזים להגנה על האינטרסים העסקיים שלכם.",
    service2Point1: "ניסוח חוזים מסחריים",
    service2Point2: "סקירה וניתוח חוזים",
    service2Point3: "משא ומתן ותיקונים",
    
    // Service 3: Mergers & Acquisitions
    service3Title: "מיזוגים ורכישות",
    service3Desc: "תמיכה משפטית אסטרטגית לעסקאות עסקיות מורכבות, מבדיקת נאותות ועד לסגירה.",
    service3Point1: "תהליכי בדיקת נאותות",
    service3Point2: "מבנה עסקאות",
    service3Point3: "משא ומתן על עסקאות וסגירה",
    
    // Service 4: Compliance & Governance
    service4Title: "ציות וממשל תאגידי",
    service4Desc: "הבטחה שהעסק שלכם עומד בכל הדרישות הרגולטוריות ומקיים ממשל תאגידי נאות.",
    service4Point1: "תוכניות ציות רגולטורי",
    service4Point2: "מדיניות ממשל תאגידי",
    service4Point3: "ניהול ישיבות דירקטוריון",
    
    // Service 5: Dispute Resolution
    service5Title: "פתרון סכסוכים",
    service5Desc: "אסטרטגיות יעילות לפתרון סכסוכים עסקיים באמצעות משא ומתן, גישור או התדיינות במידת הצורך.",
    service5Point1: "התדיינות מסחרית",
    service5Point2: "פתרון סכסוכים חלופי",
    service5Point3: "סכסוכי חוזים",
    
    // Service 6: Intellectual Property
    service6Title: "קניין רוחני",
    service6Desc: "הגנה וניהול נכסי קניין רוחני הקריטיים ליתרון התחרותי של העסק שלכם.",
    service6Point1: "רישום סימני מסחר",
    service6Point2: "אסטרטגיות פטנטים",
    service6Point3: "הסכמי רישוי קניין רוחני",
    
    // Client Success Section
    successTitle: "הצלחת לקוח: TechGrowth Inc.",
    successDesc: "TechGrowth Inc., חברת SaaS המתרחבת במהירות, התמודדה עם אתגרים רגולטוריים מורכבים כשהתכוננה להתרחבות בינלאומית. הצוות התאגידי שלנו סיפק הנחיה מקיפה שאפשרה את הכניסה המוצלחת שלהם לשלוש מדינות חדשות.",
    successStat1: "אישור ציות מהיר יותר",
    successStat2: "עונשים פוטנציאליים שנמנעו",
    successStat3: "שווקים בינלאומיים חדשים",
    successStat4: "חודשי הנחיה אסטרטגית",
    successButton: "קראו את מחקר המקרה המלא",
    
    // Why Choose Us Section
    whyChooseTitle: "למה לבחור בשירותים המשפטיים התאגידיים שלנו",
    whyChooseSubtitle: "חוו את ההבדל שמומחיות משפטית תאגידית מתמחה יכולה לעשות לעסק שלכם",
    whyChoose1Title: "מומחיות תעשייתית",
    whyChoose1Desc: "הבנה עמיקה של תעשיות שונות והאתגרים המשפטיים הייחודיים שלהן",
    whyChoose2Title: "גישה פרואקטיבית",
    whyChoose2Desc: "זיהוי נושאים פוטנציאליים לפני שהם הופכים לבעיות עבור העסק שלכם",
    whyChoose3Title: "פתרונות מוכווני עסק",
    whyChoose3Desc: "אסטרטגיות משפטיות המיושרות עם המטרות המסחריות ותוכניות הצמיחה שלכם",
    whyChoose4Title: "צוות מסור",
    whyChoose4Desc: "גישה עקבית לעורכי דין שמבינים את העסק שלכם מבפנים ומבחוץ",
    
    // CTA Section
    ctaTitle: "מוכנים לחזק את הבסיס המשפטי התאגידי שלכם?",
    ctaDesc: "קבעו יעוץ עם מומחי חוק החברות שלנו כדי לדון איך אנחנו יכולים לתמוך במטרות העסק שלכם ולהפחית סיכונים משפטיים.",
    ctaButton1: "צרו קשר היום",
    ctaButton2: "עיינו בכל השירותים"
  }
};

const CorporateLaw = () => {
  const navigate = useNavigate();
  const darkMode = document.documentElement.classList.contains('dark');
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('selectedLanguage') || 'en';
  });

  // Get translations for current language
  const t = translations[language] || translations.en;

  useEffect(() => {
    // Listen for language changes from header
    const handleLanguageChange = (event) => {
      setLanguage(event.detail);
    };

    window.addEventListener('languageChange', handleLanguageChange);
    
    return () => {
      window.removeEventListener('languageChange', handleLanguageChange);
    };
  }, []);

  const handleGetStarted = (path) => {
    navigate(path);
  };

  return (
    <div className={darkMode ? "min-h-screen bg-gray-900 text-white" : "min-h-screen bg-gray-50 text-gray-800"} dir={language === 'ar' || language === 'he' ? 'rtl' : 'ltr'}>

      {/* Hero Section */}
         <section className="relative w-screen h-screen m-0 p-0">
                      {/* Background Video */}
                      <video
                          className="absolute inset-0 w-full h-full object-cover z-0"
                          src={videohero}
                          autoPlay
                          loop
                          muted
                      />
                      {/* Overlay and Tagline */}
                      <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center z-10 px-4">
                          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">{t.heroTitle}</h1>
                          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">{t.heroSubtitle}</p>
                      </div>
                  </section>

      {/* Corporate Law Introduction */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img
                src={service1}
                alt="Corporate Law Introduction"
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.introTitle}</h2>
              <p className="text-lg mb-6">
                {t.introPara1}
              </p>
              <p className="text-lg mb-8">
                {t.introPara2}
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  <span>Business Formation & Structuring</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  <span>Regulatory Compliance</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  <span>Mergers & Acquisitions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase Section */}
      <section className={`py-16 px-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{t.servicesTitle}</h2>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
            {t.servicesSubtitle}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className={`rounded-xl p-6 shadow-md transition-all hover:shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <FaBuilding className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t.service1Title}</h3>
              <p className="mb-4">
                {t.service1Desc}
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>{t.service1Point1}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>{t.service1Point2}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>{t.service1Point3}</span>
                </li>
              </ul>
             
            </div>

            {/* Service 2 */}
            <div className={`rounded-xl p-6 shadow-md transition-all hover:shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <FaFileContract className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t.service2Title}</h3>
              <p className="mb-4">
                {t.service2Desc}
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>{t.service2Point1}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>{t.service2Point2}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>{t.service2Point3}</span>
                </li>
              </ul>
              
            </div>

            {/* Service 3 */}
            <div className={`rounded-xl p-6 shadow-md transition-all hover:shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <FaHandshake className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t.service3Title}</h3>
              <p className="mb-4">
                {t.service3Desc}
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>{t.service3Point1}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>{t.service3Point2}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>{t.service3Point3}</span>
                </li>
              </ul>
             
            </div>

            {/* Service 4 */}
            <div className={`rounded-xl p-6 shadow-md transition-all hover:shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <FaShieldHalved className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t.service4Title}</h3>
              <p className="mb-4">
                {t.service4Desc}
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>{t.service4Point1}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>{t.service4Point2}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>{t.service4Point3}</span>
                </li>
              </ul>
             
            </div>

            {/* Service 5 */}
            <div className={`rounded-xl p-6 shadow-md transition-all hover:shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <FaScaleBalanced className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t.service5Title}</h3>
              <p className="mb-4">
                {t.service5Desc}
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>{t.service5Point1}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>{t.service5Point2}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>{t.service5Point3}</span>
                </li>
              </ul>
              
            </div>

            {/* Service 6 */}
            <div className={`rounded-xl p-6 shadow-md transition-all hover:shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <FaChartLine className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t.service6Title}</h3>
              <p className="mb-4">
                {t.service6Desc}
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>{t.service6Point1}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>{t.service6Point2}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>{t.service6Point3}</span>
                </li>
              </ul>
             
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Story */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`rounded-2xl overflow-hidden shadow-xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 p-8 lg:p-12">
                <h2 className="text-3xl font-bold mb-6">{t.successTitle}</h2>
                <p className="text-lg mb-6">
                  {t.successDesc}
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">47%</div>
                    <div className="text-sm">{t.successStat1}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">$2.3M</div>
                    <div className="text-sm">{t.successStat2}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">3</div>
                    <div className="text-sm">{t.successStat3}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">12</div>
                    <div className="text-sm">{t.successStat4}</div>
                  </div>
                </div>
                <button 
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                  onClick={() => handleGetStarted("/case-studies")}
                >
                  {t.successButton}
                </button>
              </div>
              <div className="lg:w-1/2">
                <img
                  src={service1}
                  alt="Corporate Law Case Study"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={`py-16 px-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{t.whyChooseTitle}</h2>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
            {t.whyChooseSubtitle}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.whyChoose1Title}</h3>
              <p>{t.whyChoose1Desc}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.whyChoose2Title}</h3>
              <p>{t.whyChoose2Desc}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.whyChoose3Title}</h3>
              <p>{t.whyChoose3Desc}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.whyChoose4Title}</h3>
              <p>{t.whyChoose4Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.ctaTitle}</h2>
          <p className="text-xl mb-8">
            {t.ctaDesc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-8 py-3 bg-white text-blue-600 hover:bg-gray-100 font-medium rounded-lg transition-colors"
              onClick={() => handleGetStarted("/contact")}
            >
              {t.ctaButton1}
            </button>
            <button 
              className="px-8 py-3 border border-white text-white hover:bg-blue-700 font-medium rounded-lg transition-colors"
              onClick={() => handleGetStarted("/services")}
            >
              {t.ctaButton2}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporateLaw;