import React, { useState, useEffect } from "react";

// Translations object for multi-language support
const translations = {
  en: {
    // Section 1: Types of Intellectual Property Rights
    typesTitle: "Types of Intellectual Property Rights",
    typesIntro: "Intellectual property rights (IPR) protect creations of the mind, giving creators exclusive rights to use and benefit from their work. The main types include:",
    copyright: "Copyrights:",
    copyrightDesc: "Protect literary, artistic, and musical works.",
    patent: "Patents:",
    patentDesc: "Safeguard inventions and technological advancements.",
    trademark: "Trademarks:",
    trademarkDesc: "Secure brand names, logos, and slogans.",
    tradeSecret: "Trade Secrets:",
    tradeSecretDesc: "Protect confidential business information and processes.",
    
    // Section 2: Importance of Protecting Intellectual Property
    importanceTitle: "Importance of Protecting Intellectual Property",
    importanceIntro: "Protecting intellectual property is crucial for fostering innovation, maintaining competitive advantage, and ensuring creators are rewarded for their efforts. Key benefits include:",
    benefit1: "Encourages creativity and investment in new ideas.",
    benefit2: "Prevents unauthorized use or reproduction of original works.",
    benefit3: "Helps businesses build brand value and reputation.",
    benefit4: "Provides legal recourse against infringement and misuse."
  },
  ar: {
    // Section 1: Types of Intellectual Property Rights
    typesTitle: "أنواع حقوق الملكية الفكرية",
    typesIntro: "تحمي حقوق الملكية الفكرية إبداعات العقل، وتمنح المبدعين حقوقاً حصرية لاستخدام أعمالهم والاستفادة منها. الأنواع الرئيسية تشمل:",
    copyright: "حقوق الطبع والنشر:",
    copyrightDesc: "تحمي الأعمال الأدبية والفنية والموسيقية.",
    patent: "براءات الاختراع:",
    patentDesc: "تحمي الاختراعات والتطورات التكنولوجية.",
    trademark: "العلامات التجارية:",
    trademarkDesc: "تؤمن أسماء العلامات التجارية والشعارات والعبارات الإعلانية.",
    tradeSecret: "الأسرار التجارية:",
    tradeSecretDesc: "تحمي المعلومات التجارية السرية والعمليات.",
    
    // Section 2: Importance of Protecting Intellectual Property
    importanceTitle: "أهمية حماية الملكية الفكرية",
    importanceIntro: "حماية الملكية الفكرية أمر بالغ الأهمية لتعزيز الابتكار، والحفاظ على الميزة التنافسية، وضمان مكافأة المبدعين على جهودهم. الفوائد الرئيسية تشمل:",
    benefit1: "تشجع الإبداع والاستثمار في الأفكار الجديدة.",
    benefit2: "تمنع الاستخدام أو الاستنساخ غير المصرح به للأعمال الأصلية.",
    benefit3: "تساعد الشركات على بناء قيمة العلامة التجارية والسمعة.",
    benefit4: "توفر وسائل قانونية ضد الانتهاك وسوء الاستخدام."
  },
  he: {
    // Section 1: Types of Intellectual Property Rights
    typesTitle: "סוגי זכויות קניין רוחני",
    typesIntro: "זכויות קניין רוחני מגינות על יצירות המוח, ומעניקות ליוצרים זכויות בלעדיות להשתמש וליהנות מעבודתם. הסוגים העיקריים כוללים:",
    copyright: "זכויות יוצרים:",
    copyrightDesc: "מגינות על יצירות ספרותיות, אמנותיות ומוזיקליות.",
    patent: "פטנטים:",
    patentDesc: "מגינים על המצאות והתקדמות טכנולוגית.",
    trademark: "סימני מסחר:",
    trademarkDesc: "מאבטחים שמות מותגים, לוגואים וסלוגנים.",
    tradeSecret: "סודות מסחריים:",
    tradeSecretDesc: "מגינים על מידע עסקי סודי ותהליכים.",
    
    // Section 2: Importance of Protecting Intellectual Property
    importanceTitle: "חשיבות הגנה על קניין רוחני",
    importanceIntro: "הגנה על קניין רוחני חיונית לעידוד חדשנות, שמירה על יתרון תחרותי, והבטחה שיוצרים מקבלים תגמול על מאמציהם. היתרונות העיקריים כוללים:",
    benefit1: "מעודד יצירתיות והשקעה ברעיונות חדשים.",
    benefit2: "מונע שימוש או העתקה לא מורשים של יצירות מקוריות.",
    benefit3: "עוזר לעסקים לבנות ערך מותג ומוניטין.",
    benefit4: "מספק מסלול משפטי נגד הפרה ושימוש לרעה."
  }
};

const Blog1 = () => {
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
      {/* Section 1: Types of Intellectual Property Rights */}
      <section className={darkMode ? "py-10 px-4 bg-gray-800" : "py-10 px-4 bg-gray-100"}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">{t.typesTitle}</h2>
          <p className="mb-4">
            {t.typesIntro}
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>{t.copyright}</strong> {t.copyrightDesc}</li>
            <li><strong>{t.patent}</strong> {t.patentDesc}</li>
            <li><strong>{t.trademark}</strong> {t.trademarkDesc}</li>
            <li><strong>{t.tradeSecret}</strong> {t.tradeSecretDesc}</li>
          </ul>
        </div>
      </section>

      {/* Section 2: Importance of Protecting Intellectual Property */}
      <section className={darkMode ? "py-10 px-4 bg-gray-900" : "py-10 px-4 bg-white"}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">{t.importanceTitle}</h2>
          <p className="mb-4">
            {t.importanceIntro}
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>{t.benefit1}</li>
            <li>{t.benefit2}</li>
            <li>{t.benefit3}</li>
            <li>{t.benefit4}</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Blog1;