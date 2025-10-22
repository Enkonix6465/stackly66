import React from "react";
// ...existing code...
import { useNavigate } from "react-router-dom"; // Add this import
import videohero from "../images/home2-law.mp4";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import backcta from "../images/cta.jpg"; // Import background image for CTA section

// Translation object for multi-language support
const translations = {
  en: {
    // Hero Section
    heroTitle: "Legal Expertise You Can Trust",
    heroSubtitle: "Protecting your rights and interests with decades of experience and a proven track record.",
    
    // Why Choose Us Section
    whyChooseTitle: "Why Choose Our Firm?",
    whyChooseSubtitle: "Proven Results & Client Dedication",
    whyChoosePara1: "Our reputation is built on integrity, expertise, and a commitment to achieving the best outcomes for our clients.",
    whyChoosePara2: "From individuals to businesses, we provide comprehensive legal solutions tailored to your unique needs. Our attorneys bring diverse experience and a strategic approach to every case.",
    whyChoosePara3: "We combine traditional legal values with innovative strategies, ensuring you receive clear guidance and effective representation at every step.",
    whyChooseButton: "Learn More About Us",
    
    // Practice Areas
    practiceAreasTitle: "Our Practice Areas",
    practiceAreas: [
      {
        title: "Corporate Law",
        description: "Business formation, contracts, compliance, and transactions",
        icon: "🏢",
        stats: "98% Success Rate"
      },
      {
        title: "Family Law",
        description: "Divorce, child custody, adoption, and domestic matters",
        icon: "👨‍👩‍👧‍👦",
        stats: "500+ Cases Resolved"
      },
      {
        title: "Criminal Defense",
        description: "DUI, drug charges, white collar crimes, and felony defense",
        icon: "⚖️",
        stats: "20+ Years Experience"
      },
      {
        title: "Real Estate",
        description: "Property transactions, zoning, landlord-tenant disputes",
        icon: "🏠",
        stats: "$2B+ in Transactions"
      }
    ],
    
    // Process Steps
    processTitle: "Our Legal Process",
    processSteps: [
      {
        title: "Initial Consultation",
        description: "We begin with a comprehensive discussion to understand your legal needs, objectives, and concerns.",
        icon: "📞",
        duration: "1-2 Hours",
        participants: ["Client", "Managing Attorney"]
      },
      {
        title: "Case Evaluation",
        description: "Our legal team conducts thorough research and analysis to develop the optimal strategy for your situation.",
        icon: "🔍",
        duration: "2-5 Days",
        participants: ["Legal Team", "Research Associates"]
      },
      {
        title: "Strategy Development",
        description: "We craft a customized legal approach tailored to your specific circumstances and desired outcomes.",
        icon: "♟️",
        duration: "3-7 Days",
        participants: ["Senior Attorneys", "Case Strategists"]
      },
      {
        title: "Implementation",
        description: "Our team executes the planned strategy with precision while keeping you informed at every stage.",
        icon: "⚡",
        duration: "Case Dependent",
        participants: ["Legal Team", "Client"]
      },
      {
        title: "Resolution & Follow-up",
        description: "We secure the best possible outcome and provide guidance to prevent future legal issues.",
        icon: "✅",
        duration: "Ongoing Support",
        participants: ["Client", "Primary Attorney"]
      }
    ],
    
    // Webinars
    webinarsTitle: "Legal Education Webinars",
    webinars: [
      {
        date: "Sep 18, 2025",
        icon: "📅",
        title: "Navigating Business Law",
        desc: "Learn how to protect your business interests and avoid common legal pitfalls."
      },
      {
        date: "Oct 2, 2025",
        icon: "⚖️",
        title: "Estate Planning Essentials",
        desc: "Discover strategies for securing your legacy and ensuring your wishes are honored."
      },
      {
        date: "Oct 16, 2025",
        icon: "🛡️",
        title: "Employment Law Updates",
        desc: "Stay informed about the latest changes in employment law and compliance."
      }
    ],
    
    // CTA Section
    ctaTitle: "Ready to Protect Your Interests?",
    ctaDesc: "Contact our experienced legal team for a consultation tailored to your specific needs.",
    ctaButton: "Schedule Consultation"
  },
  ar: {
    // Hero Section
    heroTitle: "خبرة قانونية يمكنك الثقة بها",
    heroSubtitle: "حماية حقوقك ومصالحك بعقود من الخبرة وسجل حافل مُثبت.",
    
    // Why Choose Us Section
    whyChooseTitle: "لماذا تختار مكتبنا؟",
    whyChooseSubtitle: "نتائج مثبتة وتفاني في خدمة العملاء",
    whyChoosePara1: "سمعتنا مبنية على النزاهة والخبرة والالتزام بتحقيق أفضل النتائج لعملائنا.",
    whyChoosePara2: "من الأفراد إلى الشركات، نحن نقدم حلولاً قانونية شاملة مصممة خصيصاً لاحتياجاتك الفريدة. يجلب محامونا خبرة متنوعة ونهجاً استراتيجياً لكل قضية.",
    whyChoosePara3: "نحن نجمع بين القيم القانونية التقليدية والاستراتيجيات المبتكرة، مما يضمن حصولك على توجيهات واضحة وتمثيل فعال في كل خطوة.",
    whyChooseButton: "تعرف على المزيد عنا",
    
    // Practice Areas
    practiceAreasTitle: "مجالات ممارستنا",
    practiceAreas: [
      {
        title: "قانون الشركات",
        description: "تكوين الأعمال والعقود والامتثال والمعاملات",
        icon: "🏢",
        stats: "معدل نجاح 98%"
      },
      {
        title: "قانون الأسرة",
        description: "الطلاق وحضانة الأطفال والتبني والمسائل الأسرية",
        icon: "👨‍👩‍👧‍👦",
        stats: "تم حل أكثر من 500 قضية"
      },
      {
        title: "الدفاع الجنائي",
        description: "القيادة تحت التأثير وتهم المخدرات والجرائم ذات الياقات البيضاء والدفاع في الجنايات",
        icon: "⚖️",
        stats: "أكثر من 20 سنة خبرة"
      },
      {
        title: "العقارات",
        description: "معاملات الممتلكات والتقسيم المناطقي ونزاعات المالك والمستأجر",
        icon: "🏠",
        stats: "أكثر من 2 مليار دولار في المعاملات"
      }
    ],
    
    // Process Steps
    processTitle: "عمليتنا القانونية",
    processSteps: [
      {
        title: "الاستشارة الأولية",
        description: "نبدأ بمناقشة شاملة لفهم احتياجاتك القانونية وأهدافك ومخاوفك.",
        icon: "📞",
        duration: "1-2 ساعة",
        participants: ["العميل", "المحامي المدير"]
      },
      {
        title: "تقييم القضية",
        description: "يجري فريقنا القانوني بحثاً وتحليلاً شاملاً لوضع الاستراتيجية المثلى لوضعك.",
        icon: "🔍",
        duration: "2-5 أيام",
        participants: ["الفريق القانوني", "زملاء البحث"]
      },
      {
        title: "تطوير الاستراتيجية",
        description: "نصوغ نهجاً قانونياً مخصصاً مصمماً لظروفك المحددة والنتائج المرغوبة.",
        icon: "♟️",
        duration: "3-7 أيام",
        participants: ["المحامون الكبار", "استراتيجيو القضايا"]
      },
      {
        title: "التنفيذ",
        description: "ينفذ فريقنا الاستراتيجية المخططة بدقة مع إبقائك على اطلاع في كل مرحلة.",
        icon: "⚡",
        duration: "يعتمد على القضية",
        participants: ["الفريق القانوني", "العميل"]
      },
      {
        title: "الحل والمتابعة",
        description: "نؤمن أفضل نتيجة ممكنة ونقدم التوجيه لمنع المشاكل القانونية المستقبلية.",
        icon: "✅",
        duration: "دعم مستمر",
        participants: ["العميل", "المحامي الأساسي"]
      }
    ],
    
    // Webinars
    webinarsTitle: "ندوات التعليم القانوني",
    webinars: [
      {
        date: "18 سبتمبر، 2025",
        icon: "📅",
        title: "التنقل في قانون الأعمال",
        desc: "تعلم كيفية حماية مصالح عملك وتجنب المخاطر القانونية الشائعة."
      },
      {
        date: "2 أكتوبر، 2025",
        icon: "⚖️",
        title: "أساسيات تخطيط التركات",
        desc: "اكتشف استراتيجيات تأمين إرثك وضمان تكريم رغباتك."
      },
      {
        date: "16 أكتوبر، 2025",
        icon: "🛡️",
        title: "تحديثات قانون العمل",
        desc: "ابق على اطلاع بأحدث التغييرات في قانون العمل والامتثال."
      }
    ],
    
    // CTA Section
    ctaTitle: "مستعد لحماية مصالحك؟",
    ctaDesc: "اتصل بفريقنا القانوني ذو الخبرة للحصول على استشارة مصممة لاحتياجاتك المحددة.",
    ctaButton: "جدولة استشارة"
  },
  he: {
    // Hero Section
    heroTitle: "מומחיות משפטית שאתה יכול לסמוך עליה",
    heroSubtitle: "הגנה על זכויותיך ואינטרסים שלך עם עשרות שנות ניסיון ורקורד מוכח.",
    
    // Why Choose Us Section
    whyChooseTitle: "למה לבחור במשרד שלנו?",
    whyChooseSubtitle: "תוצאות מוכחות והתמסרות ללקוחות",
    whyChoosePara1: "המוניטין שלנו בנוי על יושרה, מומחיות והתחייבות להשגת התוצאות הטובות ביותר עבור הלקוחות שלנו.",
    whyChoosePara2: "מאנשים פרטיים ועד עסקים, אנחנו מספקים פתרונות משפטיים מקיפים המותאמים לצרכים הייחודיים שלך. עורכי הדין שלנו מביאים ניסיון מגוון וגישה אסטרטגית לכל תיק.",
    whyChoosePara3: "אנחנו משלבים ערכים משפטיים מסורתיים עם אסטרטגיות חדשניות, מבטיחים שתקבל הדרכה ברורה וייצוג יעיל בכל שלב.",
    whyChooseButton: "למד עוד עלינו",
    
    // Practice Areas
    practiceAreasTitle: "תחומי הפרקטיקה שלנו",
    practiceAreas: [
      {
        title: "דיני חברות",
        description: "הקמת עסקים, חוזים, ציות ועסקאות",
        icon: "🏢",
        stats: "98% שיעור הצלחה"
      },
      {
        title: "דיני משפחה",
        description: "גירושין, משמורת ילדים, אימוץ ועניינים משפחתיים",
        icon: "👨‍👩‍👧‍👦",
        stats: "יותר מ-500 תיקים נפתרו"
      },
      {
        title: "הגנה פלילית",
        description: "נהיגה בשכרות, אישומי סמים, פשעי צווארון לבן והגנה בפלילים",
        icon: "⚖️",
        stats: "יותר מ-20 שנות ניסיון"
      },
      {
        title: "נדל\"ן",
        description: "עסקאות נכסים, ייעוד ומחלוקות בעל-שוכר",
        icon: "🏠",
        stats: "יותר מ-2 מיליארד דולר בעסקאות"
      }
    ],
    
    // Process Steps
    processTitle: "התהליך המשפטי שלנו",
    processSteps: [
      {
        title: "ייעוץ ראשוני",
        description: "אנחנו מתחילים בדיון מקיף כדי להבין את הצרכים המשפטיים, המטרות והחששות שלך.",
        icon: "📞",
        duration: "1-2 שעות",
        participants: ["לקוח", "עורך דין ראשי"]
      },
      {
        title: "הערכת תיק",
        description: "הצוות המשפטי שלנו מבצע מחקר ואנליזה יסודיים לפיתוח האסטרטגיה האופטימלית למצב שלך.",
        icon: "🔍",
        duration: "2-5 ימים",
        participants: ["צוות משפטי", "עמיתי מחקר"]
      },
      {
        title: "פיתוח אסטרטגיה",
        description: "אנחנו יוצרים גישה משפטית מותאמת אישית המיועדת לנסיבות הספציפיות שלך ולתוצאות הרצויות.",
        icon: "♟️",
        duration: "3-7 ימים",
        participants: ["עורכי דין בכירים", "אסטרטגי תיקים"]
      },
      {
        title: "יישום",
        description: "הצוות שלנו מבצע את האסטרטגיה המתוכננת בדיוק תוך עדכונך בכל שלב.",
        icon: "⚡",
        duration: "תלוי בתיק",
        participants: ["צוות משפטי", "לקוח"]
      },
      {
        title: "פתרון ומעקב",
        description: "אנחנו מבטיחים את התוצאה הטובה ביותר האפשרית ומספקים הדרכה למניעת בעיות משפטיות עתידיות.",
        icon: "✅",
        duration: "תמיכה מתמשכת",
        participants: ["לקוח", "עורך דין ראשי"]
      }
    ],
    
    // Webinars
    webinarsTitle: "סמינרים חינוכיים משפטיים",
    webinars: [
      {
        date: "18 בספטמבר, 2025",
        icon: "📅",
        title: "ניווט בדיני עסקים",
        desc: "למד כיצד להגן על האינטרסים העסקיים שלך ולמנוע מלכודות משפטיות נפוצות."
      },
      {
        date: "2 באוקטובר, 2025",
        icon: "⚖️",
        title: "יסודות תכנון עיזבון",
        desc: "גלה אסטרטגיות לאבטחת המורשת שלך ולהבטחת כיבוד רצונותיך."
      },
      {
        date: "16 באוקטובר, 2025",
        icon: "🛡️",
        title: "עדכוני דיני עבודה",
        desc: "הישאר מעודכן על השינויים האחרונים בדיני עבודה וציות."
      }
    ],
    
    // CTA Section
    ctaTitle: "מוכן להגן על האינטרסים שלך?",
    ctaDesc: "צור קשר עם הצוות המשפטי המנוסה שלנו לייעוץ המותאם לצרכים הספציפיים שלך.",
    ctaButton: "תזמן ייעוץ"
  }
};

const Home2 = () => {
    // Language state management
    const [language, setLanguage] = useState(() => {
        return localStorage.getItem('language') || 'en';
    });
    
    // Get translations for current language
    const t = translations[language] || translations.en;
    
    // Dynamic arrays based on current language
    const webinars = t.webinars;
    const practiceAreas = t.practiceAreas;
    const processSteps = t.processSteps;
    const [showModal, setShowModal] = useState(false);
    const [selectedWebinar, setSelectedWebinar] = useState(null);
    const [formData, setFormData] = useState({ name: "", email: "" });
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate(); // Add this hook

    const handleRegisterClick = (webinar) => {
        setSelectedWebinar(webinar);
        setShowModal(true);
        setFormData({ name: "", email: "" });
        setSubmitted(false);
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const registrations = JSON.parse(localStorage.getItem("webinarRegistrations") || "[]");
        registrations.push({ ...formData, webinar: selectedWebinar.title, date: selectedWebinar.date });
        localStorage.setItem("webinarRegistrations", JSON.stringify(registrations));
        setSubmitted(true);
    };
    const [activeCategory, setActiveCategory] = useState(0);
    const [activeStep, setActiveStep] = useState(0);

    // Language change event listener
    useEffect(() => {
        const handleLanguageChange = (event) => {
            setLanguage(event.detail);
        };

        window.addEventListener('languageChange', handleLanguageChange);
        
        return () => {
            window.removeEventListener('languageChange', handleLanguageChange);
        };
    }, []);

    return (
        <div dir={language === 'ar' || language === 'he' ? 'rtl' : 'ltr'}>
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

            <section className="w-full py-10 flex flex-col items-center bg-white dark:bg-black">
                <div className="max-w-6xl w-full mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Left Side: Unified Panel, No Card */}
                    <div className="flex flex-col justify-center h-full">
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-black dark:text-white">{t.whyChooseTitle}</h2>
                        <h3 className="text-2xl font-bold mb-4 text-[#2874f0] dark:text-[#2874f0]">{t.whyChooseSubtitle}</h3>
                        <p className="text-gray-800 dark:text-gray-200 mb-4">{t.whyChoosePara1}</p>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">{t.whyChoosePara2}</p>
                        <p className="text-gray-700 dark:text-gray-300 mb-6">{t.whyChoosePara3}</p>
                        <button
                            className="bg-black text-white font-bold py-3 px-6 rounded-lg shadow hover:bg-[#2874f0] transition w-fit"
                            onClick={() => navigate("/about")}
                        >
                            Read More
                        </button>
                    </div>
                    {/* Right Side: Updated Stats Content */}
                    <div className="flex flex-col gap-6 justify-center h-full">
                        {[{
                            num: 1,
                            heading: "Experienced Attorneys",
                            para: "Our team brings decades of combined legal experience across multiple practice areas."
                        }, {
                            num: 2,
                            heading: "Personalized Service",
                            para: "We listen to your concerns and tailor our approach to achieve your specific goals."
                        }, {
                            num: 3,
                            heading: "Transparent Communication",
                            para: "Stay informed with regular updates and clear explanations throughout your case."
                        }, {
                            num: 4,
                            heading: "Proven Track Record",
                            para: "We have secured successful outcomes for hundreds of clients in complex legal matters."
                        }, {
                            num: 5,
                            heading: "Community Commitment",
                            para: "Giving back through pro bono work, education, and advocacy for justice."
                        }, {
                            num: 6,
                            heading: "Accessible & Responsive",
                            para: "Our attorneys are available when you need us, providing timely support and guidance."
                        }].map((item, idx) => (
                            <motion.div
                                key={item.num}
                                className="flex items-center gap-4"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: idx * 0.15 }}
                                viewport={{ once: true }}
                            >
                                <motion.div
                                    className="w-14 h-14 aspect-square rounded-full bg-black dark:bg-[#2874f0] flex items-center justify-center text-2xl font-bold text-white border border-[#2874f0] shadow text-center"
                                    initial={{ scale: 0.7, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                                    viewport={{ once: true }}
                                >
                                    {item.num}
                                </motion.div>
                                <div>
                                    <motion.h4
                                        className="font-bold text-lg text-black dark:text-white mb-1"
                                        initial={{ opacity: 0, x: 40 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: idx * 0.18 }}
                                        viewport={{ once: true }}
                                    >
                                        {item.heading}
                                    </motion.h4>
                                    <motion.p
                                        className="text-gray-700 dark:text-gray-300 text-sm"
                                        initial={{ opacity: 0, x: 40 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: idx * 0.2 }}
                                        viewport={{ once: true }}
                                    >
                                        {item.para}
                                    </motion.p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            {/*new section*/}
            {/* Practice Areas Section */}
            <section className={`py-8 bg-white dark:bg-black`}>
                <div className="container mx-auto px-4">
                    <h2 className={`text-4xl font-serif font-bold text-center mb-12`}>
                        {t.practiceAreasTitle}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {practiceAreas.map((area, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className={`p-6 rounded-xl transition-all duration-300 cursor-pointer ${activeCategory === index
                                    ? 'bg-[#2874f0] text-white shadow-lg transform -translate-y-2'
                                    : ` shadow-md hover:shadow-lg`
                                    }`}
                                onClick={() => setActiveCategory(index)}
                            >
                                <div className="text-4xl mb-4">{area.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
                                <p className={`mb-4 ${activeCategory === index ? 'text-blue-200' : 'text-gray-700 dark:text-gray-300'}      `}>
                                    {area.description}
                                </p>
                                <div className={`text-sm font-medium ${activeCategory === index ? 'text-blue-200' : 'text-[#2874f0]'
                                    }`}>
                                    {area.stats}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            {/*new one*/}
            <section className="py-16 bg-white dark:bg-black">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4 dark:text-white">{t.processTitle}</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto dark:text-white">
                            Transparent, methodical approach to achieving successful outcomes for our clients
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Process Steps */}
                        <div className="lg:w-2/3">
                            <div className="relative">
                                {/* Connector line */}
                                <div className="absolute left-8 top-12 bottom-12 w-1 bg-[#2874f0]/30 dark:bg-[#2874f0] transform -translate-x-1/2 z-0"></div>

                                <div className="space-y-12 relative z-10">
                                    {processSteps.map((step, index) => (
                                        <div
                                            key={index}
                                            className={`flex items-start transition-all duration-300 ${activeStep === index ? 'scale-105' : ''}`}
                                            onMouseEnter={() => setActiveStep(index)}
                                        >
                                            <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-lg ${
                                              activeStep === index
                                                ? 'bg-[#2874f0] text-white'
                                                : 'bg-white text-[#2874f0] dark:bg-black dark:text-[#2874f0] dark:border dark:border-[#2874f0]'
                                            }`}>
                                              {step.icon}
                                            </div>
                                            <div className={`ml-6 p-6 rounded-lg flex-1 ${
                                              activeStep === index
                                                ? 'bg-[#2874f0] text-white shadow-xl'
                                                : 'bg-white text-gray-800 shadow-md dark:bg-black dark:text-white dark:border dark:border-[#2874f0]'
                                            }`}>
                                              <div className="flex justify-between items-start mb-2">
                                                <h3 className="text-xl font-serif font-bold">{step.title}</h3>
                                                <span className="text-sm bg-blue-100 text-[#2874f0] px-2 py-1 rounded-full dark:bg-[#2874f0] dark:text-white">
                                                  {step.duration}
                                                </span>
                                              </div>
                                              <p className="mb-4">{step.description}</p>
                                              <div className="flex flex-wrap gap-2">
                                                {step.participants.map((participant, i) => (
                                                  <span key={i} className={`text-xs px-2 py-1 bg-[#2874f0] bg-opacity-20 rounded-full dark:bg-[#2874f0] dark:bg-opacity-30 dark:text-white`}>
                                                    {participant}
                                                  </span>
                                                ))}
                                              </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Process Overview */}
                        <div className="lg:w-1/3 bg-white p-6 rounded-lg shadow-md dark:bg-black dark:text-white">
                            <h3 className="text-2xl font-serif font-bold text-[#2874f0] mb-4 dark:text-[#2874f0]">
                              {processSteps[activeStep].title}
                            </h3>
                            <div className="mb-6">
                              <div className="flex justify-between mb-1 text-sm text-gray-600 dark:text-gray-300">
                                <span>Process Completion</span>
                                <span>{((activeStep + 1) / processSteps.length * 100).toFixed(0)}%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                                <div
                                  className="bg-[#2874f0] h-2 rounded-full dark:bg-[#2874f0]"
                                  style={{ width: `${((activeStep + 1) / processSteps.length * 100)}%` }}
                                ></div>
                              </div>
                            </div>

                            <div className="space-y-4">
                              <div>
                                <h4 className="font-bold text-gray-700 mb-2 dark:text-white">Current Phase</h4>
                                <p className="text-[#2874f0] dark:text-[#2874f0]">{processSteps[activeStep].title}</p>
                              </div>
                              <div>
                                <h4 className="font-bold text-gray-700 mb-2 dark:text-white">Estimated Duration</h4>
                                <p className="dark:text-[#2874f0]">{processSteps[activeStep].duration}</p>
                              </div>
                              <div>
                                <h4 className="font-bold text-gray-700 mb-2 dark:text-white">Key Team Members</h4>
                                <ul className="list-disc list-inside">
                                  {processSteps[activeStep].participants.map((participant, i) => (
                                    <li key={i} className="dark:text-[#2874f0]">{participant}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            <button
                                className="mt-8 w-full bg-[#2874f0] hover:bg-[#2874f0]/80 text-white font-semibold py-3 px-4 rounded-lg transition-colors dark:bg-[#2874f0]"
                                onClick={() => navigate('/contact')}
                            >
                              Start Your Legal Process
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Webinar Section - Law Firm Style */}
            <section className="w-full py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 dark:text-white mb-4">
                            {t.webinarsTitle}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Join our expert attorneys for insightful discussions on current legal topics and developments.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {webinars.map((webinar, idx) => (
                            <motion.div
                                key={webinar.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700"
                            >
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center">
                                            <div className="w-12 h-12 rounded-full bg-[#2874f0] flex items-center justify-center text-white mr-3">
                                                <span role="img" aria-label="calendar">{webinar.icon}</span>
                                            </div>
                                            <div className="text-[#2874f0] dark:text-[#2874f0] font-semibold">{webinar.date}</div>
                                        </div>
                                        <div className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                                            CLE Credit Available
                                        </div>
                                    </div>

                                    <h3 className="font-serif font-bold text-xl text-gray-800 dark:text-white mb-3">
                                        {webinar.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-5 text-sm leading-relaxed">
                                        {webinar.desc}
                                    </p>

                                    <div className="flex justify-between items-center">
                    <button
                      className="bg-[#2874f0] hover:bg-[#0f5ed1] text-white font-medium py-2 px-5 rounded transition-colors text-sm"
                                            onClick={() => handleRegisterClick(webinar)}
                                        >
                                            Register Now
                                        </button>
                                        <span className="text-xs text-gray-500 dark:text-gray-400">
                                            90 min • Expert Level
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Modal for registration form */}
                    {showModal && (
                        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-md border border-gray-200 dark:border-gray-700"
                            >
                                <div className="p-6">
                                    <div className="flex justify-between items-center mb-5">
                                        <h3 className="text-xl font-serif font-bold text-gray-800 dark:text-white">
                                            Register for <span className="text-blue-700 dark:text-blue-300">{selectedWebinar?.title}</span>
                                        </h3>
                                        <button
                                            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-xl"
                                            onClick={() => setShowModal(false)}
                                        >
                                            &times;
                                        </button>
                                    </div>

                                    {!submitted ? (
                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            <div>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    placeholder="Full Name"
                                                    required
                                                    className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                />
                                            </div>
                                            <div>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    placeholder="Email Address"
                                                    required
                                                    className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                />
                                            </div>
                                            <div>
                                                <input
                                                    type="text"
                                                    name="firm"
                                                    value={formData.firm}
                                                    onChange={handleInputChange}
                                                    placeholder="Law Firm/Organization"
                                                    className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                />
                                            </div>
                                            <button
                                                type="submit"
                                                className="w-full bg-blue-800 hover:bg-blue-900 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                                            >
                                                Confirm Registration
                                            </button>
                                        </form>
                                    ) : (
                                        <div className="text-center py-8">
                                            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                            </div>
                                            <h4 className="text-green-700 dark:text-green-400 font-bold text-lg mb-2">Registration Successful</h4>
                                            <p className="text-gray-600 dark:text-gray-300">Thank you for registering. We've sent a confirmation to your email.</p>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        </div>
                    )}
                </div>
            </section>
            <section className="w-full py-10 flex flex-col items-center bg-white dark:bg-black">
                <div className="max-w-6xl w-full mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-8 text-black dark:text-white">Core Legal Services</h2>
                    <p className="text-lg text-center text-gray-700 dark:text-white mb-12 max-w-3xl mx-auto">Our firm offers a comprehensive suite of legal services to protect your interests and help you achieve your goals.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {[{
                            icon: "⚖️",
                            title: "Business Law",
                            desc: "Expert guidance for contracts, compliance, and dispute resolution to safeguard your business.",
                            link: "/services"
                        }, {
                            icon: "👨‍👩‍👧‍👦",
                            title: "Family Law",
                            desc: "Compassionate support for divorce, custody, and estate planning matters.",
                            link: "/family-law"
                        }, {
                            icon: "🏡",
                            title: "Real Estate",
                            desc: "Protect your investments with skilled representation in property transactions and litigation.",
                            link: "/real-estate"
                        }, {
                            icon: "🛡️",
                            title: "Litigation",
                            desc: "Aggressive advocacy for your rights in court, arbitration, and mediation.",
                            link: "/litigation"
                        }].map((service, idx) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: idx * 0.2 }}
                                viewport={{ once: true }}
                                className="rounded-2xl p-8 shadow-xl border-2 border-blue-400 bg-blue-500 flex flex-col items-center text-center hover:scale-105 transition-transform"
                            >
                                <div className="w-16 h-16 rounded-full bg-blue-700 flex items-center justify-center text-3xl mb-4 text-white shadow-lg">{service.icon}</div>
                                <h3 className="font-bold text-xl text-white mb-2">{service.title}</h3>
                                <p className="text-white text-sm mb-2">{service.desc}</p>
                                <span className="block w-8 h-1 bg-blue-400 rounded-full mt-4 animate-pulse"></span>
                                <button
                                    className="mt-4 px-6 py-2 bg-white text-blue-700 rounded-full font-semibold shadow hover:bg-blue-200 transition"
                                    onClick={() => navigate(service.link)}
                                >
                                    Learn More
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            {/* CTA Section */}
            <section
                className="w-full py-20 bg-gradient-to-r from-blue-700 via-blue-500 to-blue-900 flex flex-col items-center relative overflow-hidden"
                style={{
                    backgroundImage: `url(${backcta})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>
                <div className="max-w-2xl w-full mx-auto px-4 text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">{t.ctaTitle}</h2>
                    <p className="text-lg text-white mb-8">{t.ctaDesc}</p>
                    <button
                        className="bg-white text-blue-700 font-bold py-4 px-10 rounded-full shadow-lg hover:bg-blue-200 transition-all text-xl"
                        onClick={() => navigate("/contact")}
                    >
                        {t.ctaButton}
                    </button>
                </div>
            </section>
        </div>
    );
}
export default Home2;