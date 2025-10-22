import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import service3 from "../images/service3.jpg";
import { FaBalanceScale, FaUserFriends, FaHandshake, FaFileContract, FaShieldAlt, FaChild } from 'react-icons/fa';
import videohero from "../images/law-services.mp4";
import { motion } from "framer-motion";

// Translations object for multi-language support
const translations = {
  en: {
    // Hero Section
    heroTitle: "Compassionate Family Law Advocacy",
    heroSubtitle: "Guiding families through life's most important transitions with care, expertise, and respect.",
    
    // Introduction Section
    introTitle: "Family Law Guidance",
    introPara1: "Family law matters require sensitivity, experience, and a deep understanding of legal complexities. Our family law team is dedicated to helping you resolve issues such as divorce, child custody, and support with compassion and clarity.",
    introPara2: "Whether you are facing a difficult transition or planning for your family's future, we provide strategic advice and strong advocacy to protect your rights and interests.",
    
    // Services Section
    servicesTitle: "Our Family Law Services",
    servicesSubtitle: "Comprehensive legal support for all your family law needs",
    
    // Service 1: Divorce & Separation
    service1Title: "Divorce & Separation",
    service1Desc: "Comprehensive guidance through divorce proceedings, including property division, spousal support, and custody arrangements.",
    service1Point1: "Uncontested and contested divorce",
    service1Point2: "Property and asset division",
    service1Point3: "Spousal support negotiations",
    
    // Service 2: Child Custody
    service2Title: "Child Custody & Support",
    service2Desc: "Protecting your children's best interests with experienced custody and support advocacy.",
    service2Point1: "Custody arrangements",
    service2Point2: "Child support calculations",
    service2Point3: "Visitation rights",
    
    // Service 3: Adoption
    service3Title: "Adoption Services",
    service3Desc: "Expert legal assistance for all types of adoption proceedings to help grow your family.",
    service3Point1: "Private and agency adoptions",
    service3Point2: "Stepparent adoptions",
    service3Point3: "Interstate adoption procedures",
    
    // Service 4: Prenuptial Agreements
    service4Title: "Prenuptial Agreements",
    service4Desc: "Protecting your assets and clarifying expectations with comprehensive prenuptial agreements.",
    service4Point1: "Asset protection strategies",
    service4Point2: "Financial disclosure requirements",
    service4Point3: "Future planning provisions",
    
    // Service 5: Domestic Violence
    service5Title: "Domestic Violence Protection",
    service5Desc: "Immediate legal protection and ongoing support for victims of domestic violence.",
    service5Point1: "Restraining order applications",
    service5Point2: "Emergency protective orders",
    service5Point3: "Safety planning assistance",
    
    // Service 6: Mediation
    service6Title: "Family Mediation",
    service6Desc: "Alternative dispute resolution to help families reach agreements outside of court.",
    service6Point1: "Divorce mediation",
    service6Point2: "Custody mediation",
    service6Point3: "Post-decree modifications",
    
    // Client Success Section
    successTitle: "Client Success: The Johnson Family",
    successDesc: "The Johnson family was facing a complex custody dispute following their divorce. Our compassionate approach and thorough preparation resulted in a fair custody arrangement that prioritized the children's wellbeing while respecting both parents' rights.",
    successStat1: "Reduced legal proceedings time",
    successStat2: "Cost savings achieved",
    successStat3: "Custody arrangement satisfaction",
    successStat4: "Family relationships preserved",
    successButton: "Read Full Story",
    
    // Why Choose Us Section
    whyChooseTitle: "Why Choose Our Family Law Services",
    whyChooseSubtitle: "Experience compassionate advocacy combined with skilled legal expertise",
    whyChoose1Title: "Compassionate Approach",
    whyChoose1Desc: "Understanding that family matters require sensitivity and emotional support",
    whyChoose2Title: "Experienced Advocacy",
    whyChoose2Desc: "Decades of experience in all areas of family law and court proceedings",
    whyChoose3Title: "Child-Focused Solutions",
    whyChoose3Desc: "Always prioritizing the best interests of children in custody and support matters",
    whyChoose4Title: "Confidential Guidance",
    whyChoose4Desc: "Maintaining strict confidentiality while providing personalized legal strategies",
    
    // CTA Section
    ctaTitle: "Ready to Protect Your Family's Future?",
    ctaDesc: "Schedule a confidential consultation with our family law experts to discuss your situation and explore your legal options.",
    ctaButton1: "Schedule Consultation",
    ctaButton2: "Learn More About Our Services"
  },
  ar: {
    // Hero Section
    heroTitle: "مناصرة قانون الأسرة الرحيمة",
    heroSubtitle: "توجيه العائلات خلال أهم انتقالات الحياة بالرعاية والخبرة والاحترام.",
    
    // Introduction Section
    introTitle: "توجيه قانون الأسرة",
    introPara1: "تتطلب مسائل قانون الأسرة الحساسية والخبرة والفهم العميق للتعقيدات القانونية. فريق قانون الأسرة لدينا مكرس لمساعدتك في حل القضايا مثل الطلاق وحضانة الأطفال والدعم بالرحمة والوضوح.",
    introPara2: "سواء كنت تواجه انتقالاً صعباً أو تخطط لمستقبل عائلتك، فإننا نقدم المشورة الاستراتيجية والمناصرة القوية لحماية حقوقك ومصالحك.",
    
    // Services Section
    servicesTitle: "خدمات قانون الأسرة لدينا",
    servicesSubtitle: "دعم قانوني شامل لجميع احتياجات قانون الأسرة",
    
    // Service 1: Divorce & Separation
    service1Title: "الطلاق والانفصال",
    service1Desc: "توجيه شامل خلال إجراءات الطلاق، بما في ذلك تقسيم الممتلكات ودعم الزوج وترتيبات الحضانة.",
    service1Point1: "الطلاق بالتراضي والطلاق المتنازع عليه",
    service1Point2: "تقسيم الممتلكات والأصول",
    service1Point3: "مفاوضات دعم الزوج",
    
    // Service 2: Child Custody
    service2Title: "حضانة الأطفال والدعم",
    service2Desc: "حماية مصالح أطفالك الفضلى مع مناصرة ذوي خبرة في الحضانة والدعم.",
    service2Point1: "ترتيبات الحضانة",
    service2Point2: "حسابات دعم الطفل",
    service2Point3: "حقوق الزيارة",
    
    // Service 3: Adoption
    service3Title: "خدمات التبني",
    service3Desc: "المساعدة القانونية المتخصصة لجميع أنواع إجراءات التبني لمساعدة عائلتك على النمو.",
    service3Point1: "التبني الخاص والوكالة",
    service3Point2: "تبني أحد الوالدين",
    service3Point3: "إجراءات التبني بين الولايات",
    
    // Service 4: Prenuptial Agreements
    service4Title: "اتفاقيات ما قبل الزواج",
    service4Desc: "حماية أصولك وتوضيح التوقعات مع اتفاقيات شاملة قبل الزواج.",
    service4Point1: "استراتيجيات حماية الأصول",
    service4Point2: "متطلبات الإفصاح المالي",
    service4Point3: "أحكام التخطيط المستقبلي",
    
    // Service 5: Domestic Violence
    service5Title: "حماية من العنف المنزلي",
    service5Desc: "الحماية القانونية الفورية والدعم المستمر لضحايا العنف المنزلي.",
    service5Point1: "طلبات أوامر التقييد",
    service5Point2: "أوامر الحماية الطارئة",
    service5Point3: "مساعدة تخطيط السلامة",
    
    // Service 6: Mediation
    service6Title: "وساطة الأسرة",
    service6Desc: "حل النزاعات البديل لمساعدة العائلات على التوصل إلى اتفاقيات خارج المحكمة.",
    service6Point1: "وساطة الطلاق",
    service6Point2: "وساطة الحضانة",
    service6Point3: "تعديلات ما بعد الحكم",
    
    // Client Success Section
    successTitle: "نجاح العميل: عائلة جونسون",
    successDesc: "كانت عائلة جونسون تواجه نزاعاً معقداً حول الحضانة بعد طلاقهم. نهجنا الرحيم والإعداد الشامل أدى إلى ترتيب حضانة عادل يعطي الأولوية لرفاهية الأطفال مع احترام حقوق كلا الوالدين.",
    successStat1: "تقليل وقت الإجراءات القانونية",
    successStat2: "توفير في التكاليف",
    successStat3: "رضا ترتيب الحضانة",
    successStat4: "الحفاظ على العلاقات الأسرية",
    successButton: "اقرأ القصة الكاملة",
    
    // Why Choose Us Section
    whyChooseTitle: "لماذا تختار خدمات قانون الأسرة لدينا",
    whyChooseSubtitle: "اختبر المناصرة الرحيمة المقترنة بالخبرة القانونية الماهرة",
    whyChoose1Title: "نهج رحيم",
    whyChoose1Desc: "فهم أن الأمور العائلية تتطلب الحساسية والدعم العاطفي",
    whyChoose2Title: "مناصرة ذات خبرة",
    whyChoose2Desc: "عقود من الخبرة في جميع مجالات قانون الأسرة وإجراءات المحكمة",
    whyChoose3Title: "حلول تركز على الطفل",
    whyChoose3Desc: "إعطاء الأولوية دائماً لمصالح الأطفال الفضلى في مسائل الحضانة والدعم",
    whyChoose4Title: "توجيه سري",
    whyChoose4Desc: "الحفاظ على السرية الصارمة مع توفير استراتيجيات قانونية شخصية",
    
    // CTA Section
    ctaTitle: "مستعد لحماية مستقبل عائلتك؟",
    ctaDesc: "احجز استشارة سرية مع خبراء قانون الأسرة لدينا لمناقشة وضعك واستكشاف خياراتك القانونية.",
    ctaButton1: "احجز استشارة",
    ctaButton2: "تعرف على المزيد حول خدماتنا"
  },
  he: {
    // Hero Section
    heroTitle: "סנגוריה רחומה במשפט המשפחה",
    heroSubtitle: "הדרכת משפחות במעברי החיים החשובים ביותר עם טיפול, מומחיות וכבוד.",
    
    // Introduction Section
    introTitle: "הדרכה במשפט משפחה",
    introPara1: "עניינים במשפט המשפחה דורשים רגישות, ניסיון והבנה עמוקה של מורכבויות משפטיות. צוות משפט המשפחה שלנו מוקדש לעזור לכם לפתור נושאים כמו גירושין, משמורת ילדים ותמיכה ברחמים ובבהירות.",
    introPara2: "בין אם אתם מתמודדים עם מעבר קשה או מתכננים את עתיד המשפחה שלכם, אנחנו מספקים ייעוץ אסטרטגי וסנגוריה חזקה להגנה על הזכויות והאינטרסים שלכם.",
    
    // Services Section
    servicesTitle: "שירותי משפט המשפחה שלנו",
    servicesSubtitle: "תמיכה משפטית מקיפה לכל צרכי משפט המשפחה שלכם",
    
    // Service 1: Divorce & Separation
    service1Title: "גירושין והפרדה",
    service1Desc: "הדרכה מקיפה במהלך הליכי גירושין, כולל חלוקת רכוש, מזונות בין בני זוג וסידורי משמורת.",
    service1Point1: "גירושין בהסכמה ובמחלוקת",
    service1Point2: "חלוקת רכוש ונכסים",
    service1Point3: "משא ומתן על מזונות בין בני זוג",
    
    // Service 2: Child Custody
    service2Title: "משמורת ילדים ותמיכה",
    service2Desc: "הגנה על האינטרסים הטובים ביותר של הילדים שלכם עם סנגוריה מנוסה במשמורת ותמיכה.",
    service2Point1: "סידורי משמורת",
    service2Point2: "חישובי מזונות ילדים",
    service2Point3: "זכויות ביקור",
    
    // Service 3: Adoption
    service3Title: "שירותי אימוץ",
    service3Desc: "סיוע משפטי מומחה לכל סוגי הליכי האימוץ כדי לעזור למשפחה שלכם לגדול.",
    service3Point1: "אימוצים פרטיים ושל סוכנויות",
    service3Point2: "אימוצי הורה חורג",
    service3Point3: "נוהלי אימוץ בין-מדינתיים",
    
    // Service 4: Prenuptial Agreements
    service4Title: "הסכמי ממון",
    service4Desc: "הגנה על הנכסים שלכם והבהרת ציפיות עם הסכמי ממון מקיפים.",
    service4Point1: "אסטרטגיות הגנת נכסים",
    service4Point2: "דרישות חשיפה פיננסית",
    service4Point3: "הוראות תכנון עתידי",
    
    // Service 5: Domestic Violence
    service5Title: "הגנה מאלימות במשפחה",
    service5Desc: "הגנה משפטית מיידית ותמיכה מתמשכת לקורבנות אלימות במשפחה.",
    service5Point1: "בקשות צו הרחקה",
    service5Point2: "צווי הגנה חירום",
    service5Point3: "סיוע בתכנון בטיחות",
    
    // Service 6: Mediation
    service6Title: "גישור משפחתי",
    service6Desc: "פתרון סכסוכים חלופי לעזור למשפחות להגיע להסכמות מחוץ לבית המשפט.",
    service6Point1: "גישור גירושין",
    service6Point2: "גישור משמורת",
    service6Point3: "שינויים לאחר הפסק דין",
    
    // Client Success Section
    successTitle: "הצלחת לקוח: משפחת ג'ונסון",
    successDesc: "משפחת ג'ונסון התמודדה עם סכסוך משמורת מורכב בעקבות הגירושין שלהם. הגישה החמלה שלנו וההכנה היסודית הביאו לסידור משמורת הוגן שנתן עדיפות לרווחת הילדים תוך כיבוד זכויות שני ההורים.",
    successStat1: "הפחתת זמן הליכים משפטיים",
    successStat2: "חיסכון בעלויות שהושג",
    successStat3: "שביעות רצון מסידור המשמורת",
    successStat4: "שימור יחסי משפחה",
    successButton: "קראו את הסיפור המלא",
    
    // Why Choose Us Section
    whyChooseTitle: "למה לבחור בשירותי משפט המשפחה שלנו",
    whyChooseSubtitle: "חוו סנגוריה חמלה המשולבת עם מומחיות משפטית מיומנת",
    whyChoose1Title: "גישה חמלה",
    whyChoose1Desc: "הבנה שעניינים משפחתיים דורשים רגישות ותמיכה רגשית",
    whyChoose2Title: "סנגוריה מנוסה",
    whyChoose2Desc: "עשרות שנות ניסיון בכל תחומי משפט המשפחה והליכי בית משפט",
    whyChoose3Title: "פתרונות מוכווני ילד",
    whyChoose3Desc: "תמיד לתת עדיפות לאינטרסים הטובים ביותר של הילדים בעניינים של משמורת ותמיכה",
    whyChoose4Title: "הדרכה סודית",
    whyChoose4Desc: "שמירה על סודיות קפדנית תוך מתן אסטרטגיות משפטיות מותאמות אישית",
    
    // CTA Section
    ctaTitle: "מוכנים להגן על עתיד המשפחה שלכם?",
    ctaDesc: "קבעו יעוץ סודי עם מומחי משפט המשפחה שלנו כדי לדון במצב שלכם ולחקור את האפשרויות המשפטיות שלכם.",
    ctaButton1: "קבעו יעוץ",
    ctaButton2: "למדו עוד על השירותים שלנו"
  }
};

const FamilyLaw = () => {
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
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={videohero}
          autoPlay
          loop
          muted
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center z-10 px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">{t.heroTitle}</h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">{t.heroSubtitle}</p>
        </div>
      </section>

      {/* Family Law Introduction */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img
                src={service3}
                alt="Family Law Introduction"
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
                  <span>Divorce & Separation</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  <span>Child Custody & Support</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  <span>Adoption & Guardianship</span>
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
                <FaBalanceScale className="text-2xl text-blue-600" />
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
                <FaUserFriends className="text-2xl text-blue-600" />
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
                <FaFileContract className="text-2xl text-blue-600" />
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
                <FaShieldAlt className="text-2xl text-blue-600" />
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
                <FaChild className="text-2xl text-blue-600" />
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
                    <div className="text-2xl font-bold text-blue-600">30%</div>
                    <div className="text-sm">{t.successStat1}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">$5,000</div>
                    <div className="text-sm">{t.successStat2}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">95%</div>
                    <div className="text-sm">{t.successStat3}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">100%</div>
                    <div className="text-sm">{t.successStat4}</div>
                  </div>
                </div>
                
              </div>
              <div className="lg:w-1/2">
                <img
                  src={service3}
                  alt="Family Law Case Study"
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

export default FamilyLaw;