import React, { useState, useEffect } from "react";

// Translations object for multi-language support
const translations = {
  en: {
    // Section 1: Overview of Recent Supreme Court Decisions
    overviewTitle: "Overview of Recent Supreme Court Decisions",
    overviewIntro: "The Supreme Court has issued several landmark decisions in recent years, shaping the legal landscape on issues such as civil rights, business regulations, and constitutional interpretation. These rulings have far-reaching effects on individuals, organizations, and government policies.",
    overviewPoint1: "Clarification of constitutional rights and freedoms",
    overviewPoint2: "Changes in regulatory and compliance requirements",
    overviewPoint3: "Influence on lower court rulings and legal precedents",
    overviewPoint4: "Impact on public policy and social issues",
    
    // Section 2: Practical Impact on Businesses and Individuals
    impactTitle: "Practical Impact on Businesses and Individuals",
    impactIntro: "Supreme Court decisions can directly affect business operations, individual rights, and everyday life. Understanding these impacts helps organizations and citizens adapt to new legal realities.",
    impact1: "Adjustment of company policies to comply with new legal standards",
    impact2: "Greater awareness of individual rights and protections",
    impact3: "Preparation for potential legal challenges or opportunities",
    impact4: "Engagement with advocacy and policy change efforts"
  },
  ar: {
    // Section 1: Overview of Recent Supreme Court Decisions
    overviewTitle: "نظرة عامة على قرارات المحكمة العليا الأخيرة",
    overviewIntro: "أصدرت المحكمة العليا عدة قرارات بارزة في السنوات الأخيرة، مما شكل المشهد القانوني حول قضايا مثل الحقوق المدنية واللوائح التجارية والتفسير الدستوري. هذه الأحكام لها تأثيرات بعيدة المدى على الأفراد والمنظمات والسياسات الحكومية.",
    overviewPoint1: "توضيح الحقوق والحريات الدستورية",
    overviewPoint2: "تغييرات في متطلبات التنظيم والامتثال",
    overviewPoint3: "التأثير على أحكام المحاكم الأدنى والسوابق القانونية",
    overviewPoint4: "التأثير على السياسة العامة والقضايا الاجتماعية",
    
    // Section 2: Practical Impact on Businesses and Individuals
    impactTitle: "التأثير العملي على الشركات والأفراد",
    impactIntro: "يمكن لقرارات المحكمة العليا أن تؤثر مباشرة على العمليات التجارية وحقوق الأفراد والحياة اليومية. فهم هذه التأثيرات يساعد المنظمات والمواطنين على التكيف مع الحقائق القانونية الجديدة.",
    impact1: "تعديل سياسات الشركة للامتثال للمعايير القانونية الجديدة",
    impact2: "زيادة الوعي بحقوق الأفراد وحمايتهم",
    impact3: "الاستعداد للتحديات أو الفرص القانونية المحتملة",
    impact4: "المشاركة في جهود الدعوة وتغيير السياسات"
  },
  he: {
    // Section 1: Overview of Recent Supreme Court Decisions
    overviewTitle: "סקירה של החלטות בית המשפט העליון האחרונות",
    overviewIntro: "בית המשפט העליון הוציא מספר החלטות פורצות דרך בשנים האחרונות, שעיצבו את הנוף המשפטי בנושאים כמו זכויות אזרח, תקנות עסקיות ופרשנות חוקתית. לפסקי דין אלה השפעות רחבות היקף על יחידים, ארגונים ומדיניות ממשלתית.",
    overviewPoint1: "הבהרת זכויות וחירויות חוקתיות",
    overviewPoint2: "שינויים בדרישות רגולטוריות וציות",
    overviewPoint3: "השפעה על פסקי דין של בתי משפט נמוכים יותר ותקדימים משפטיים",
    overviewPoint4: "השפעה על מדיניות ציבורית ונושאים חברתיים",
    
    // Section 2: Practical Impact on Businesses and Individuals
    impactTitle: "השפעה מעשית על עסקים ויחידים",
    impactIntro: "החלטות בית המשפט העליון יכולות להשפיע ישירות על פעילות עסקית, זכויות יחידים וחיי היומיום. הבנת השפעות אלה עוזרת לארגונים ואזרחים להסתגל למציאות משפטית חדשה.",
    impact1: "התאמת מדיניות החברה כדי לעמוד בסטנדרטים משפטיים חדשים",
    impact2: "מודעות גדולה יותר לזכויות יחידים והגנות",
    impact3: "הכנה לאתגרים או הזדמנויות משפטיות פוטנציאליות",
    impact4: "מעורבות במאמצי הסברה ושינוי מדיניות"
  }
};

const Blog3 = () => {
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
      {/* Section 1: Overview of Recent Supreme Court Decisions */}
      <section className={darkMode ? "py-10 px-4 bg-gray-800" : "py-10 px-4 bg-gray-100"}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">{t.overviewTitle}</h2>
          <p className="mb-4">
            {t.overviewIntro}
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>{t.overviewPoint1}</li>
            <li>{t.overviewPoint2}</li>
            <li>{t.overviewPoint3}</li>
            <li>{t.overviewPoint4}</li>
          </ul>
        </div>
      </section>

      {/* Section 2: Practical Impact on Businesses and Individuals */}
      <section className={darkMode ? "py-10 px-4 bg-gray-900" : "py-10 px-4 bg-white"}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">{t.impactTitle}</h2>
          <p className="mb-4">
            {t.impactIntro}
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>{t.impact1}</li>
            <li>{t.impact2}</li>
            <li>{t.impact3}</li>
            <li>{t.impact4}</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Blog3;