import React, { useState, useEffect } from "react";

// Translations object for multi-language support
const translations = {
  en: {
    // Section 1: What is Corporate Compliance?
    complianceTitle: "What is Corporate Compliance?",
    complianceIntro: "Corporate compliance refers to the processes and policies that organizations implement to ensure adherence to laws, regulations, and ethical standards. It helps businesses avoid legal risks, maintain integrity, and build stakeholder trust.",
    compliancePoint1: "Following industry-specific regulations and standards",
    compliancePoint2: "Implementing internal controls and audits",
    compliancePoint3: "Training employees on compliance requirements",
    compliancePoint4: "Reporting and addressing violations promptly",
    
    // Section 2: Key Steps for Navigating Compliance Regulations
    stepsTitle: "Key Steps for Navigating Compliance Regulations",
    stepsIntro: "Successfully navigating corporate compliance requires a proactive approach and ongoing commitment. Here are essential steps for businesses:",
    step1: "Stay updated on relevant laws and regulatory changes",
    step2: "Conduct regular compliance risk assessments",
    step3: "Develop clear policies and procedures",
    step4: "Monitor and review compliance programs regularly",
    step5: "Engage legal counsel for complex regulatory matters"
  },
  ar: {
    // Section 1: What is Corporate Compliance?
    complianceTitle: "ما هو الامتثال المؤسسي؟",
    complianceIntro: "يشير الامتثال المؤسسي إلى العمليات والسياسات التي تنفذها المنظمات لضمان الالتزام بالقوانين واللوائح والمعايير الأخلاقية. يساعد الشركات على تجنب المخاطر القانونية والحفاظ على النزاهة وبناء ثقة أصحاب المصلحة.",
    compliancePoint1: "اتباع اللوائح والمعايير الخاصة بالصناعة",
    compliancePoint2: "تنفيذ الضوابط الداخلية والتدقيق",
    compliancePoint3: "تدريب الموظفين على متطلبات الامتثال",
    compliancePoint4: "الإبلاغ عن الانتهاكات ومعالجتها بسرعة",
    
    // Section 2: Key Steps for Navigating Compliance Regulations
    stepsTitle: "الخطوات الرئيسية للتنقل في لوائح الامتثال",
    stepsIntro: "التنقل الناجح في الامتثال المؤسسي يتطلب نهجاً استباقياً والتزاماً مستمراً. إليكم الخطوات الأساسية للشركات:",
    step1: "البقاء على اطلاع بالقوانين ذات الصلة والتغييرات التنظيمية",
    step2: "إجراء تقييمات منتظمة لمخاطر الامتثال",
    step3: "وضع سياسات وإجراءات واضحة",
    step4: "مراقبة ومراجعة برامج الامتثال بانتظام",
    step5: "إشراك المستشار القانوني في الأمور التنظيمية المعقدة"
  },
  he: {
    // Section 1: What is Corporate Compliance?
    complianceTitle: "מהו ציות תאגידי?",
    complianceIntro: "ציות תאגידי מתייחס לתהליכים ולמדיניות שארגונים מיישמים כדי להבטיח הקפדה על חוקים, תקנות וסטנדרטים אתיים. זה עוזר לעסקים להימנע מסיכונים משפטיים, לשמור על יושרה ולבנות אמון בעלי עניין.",
    compliancePoint1: "עמידה בתקנות וסטנדרטים ספציפיים לתעשייה",
    compliancePoint2: "יישום בקרות פנימיות וביקורת",
    compliancePoint3: "הכשרת עובדים על דרישות הציות",
    compliancePoint4: "דיווח וטיפול בהפרות במהירות",
    
    // Section 2: Key Steps for Navigating Compliance Regulations
    stepsTitle: "שלבים מרכזיים לניווט בתקנות ציות",
    stepsIntro: "ניווט מוצלח בציות תאגידי דורש גישה פרואקטיבית והתחייבות מתמשכת. הנה שלבים חיוניים לעסקים:",
    step1: "להישאר מעודכנים בחוקים רלוונטיים ושינויים רגולטוריים",
    step2: "לערוך הערכות סיכון ציות קבועות",
    step3: "לפתח מדיניות ונהלים ברורים",
    step4: "לפקח ולסקור תוכניות ציות באופן קבוע",
    step5: "לערב יועץ משפטי בעניינים רגולטוריים מורכבים"
  }
};

const Blog2 = () => {
  const [language, setLanguage] = useState('en');
  const darkMode = document.documentElement.classList.contains('dark');

  // Get current translations
  const t = translations[language];

  // Language change listener
  useEffect(() => {
    // Get language from localStorage on component mount
    const savedLanguage = localStorage.getItem('language') || 'en';
    setLanguage(savedLanguage);

    // Listen for language changes from header
    const handleLanguageChange = (event) => {
      setLanguage(event.detail);
    };

    window.addEventListener('languageChange', handleLanguageChange);
    
    return () => {
      window.removeEventListener('languageChange', handleLanguageChange);
    };
  }, []);

  return (
    <div className={darkMode ? "min-h-screen bg-gray-900 text-white" : "min-h-screen bg-gray-50 text-gray-800"}>
      {/* Section 1: What is Corporate Compliance? */}
      <section className={darkMode ? "py-10 px-4 bg-gray-800" : "py-10 px-4 bg-gray-100"}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">{t.complianceTitle}</h2>
          <p className="mb-4">
            {t.complianceIntro}
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>{t.compliancePoint1}</li>
            <li>{t.compliancePoint2}</li>
            <li>{t.compliancePoint3}</li>
            <li>{t.compliancePoint4}</li>
          </ul>
        </div>
      </section>

      {/* Section 2: Key Steps for Navigating Compliance Regulations */}
      <section className={darkMode ? "py-10 px-4 bg-gray-900" : "py-10 px-4 bg-white"}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">{t.stepsTitle}</h2>
          <p className="mb-4">
            {t.stepsIntro}
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>{t.step1}</li>
            <li>{t.step2}</li>
            <li>{t.step3}</li>
            <li>{t.step4}</li>
            <li>{t.step5}</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Blog2;