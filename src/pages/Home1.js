import { motion } from "framer-motion";
import video from "../images/law-hero.mp4";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"; // Add this import

// Translation object for multi-language support
const translations = {
  en: {
    // Hero Section
    heroTitle: "Expert Legal Representation",
    heroSubtitle: "Protecting your rights with decades of experience and a track record of success.",
    heroButton1: "Free Consultation",
    heroButton2: "Our Services",

    // About Section
    aboutTitle: "Our",
    aboutTitleHighlight: "Commitment",
    aboutTitleEnd: "to Excellence",
    aboutPara1: "Founded on the principles of integrity, expertise, and client dedication, our firm has been serving clients with distinction for over two decades. We combine traditional legal values with innovative approaches to meet today's complex legal challenges.",
    aboutPara2: "Our attorneys bring diverse perspectives and specialized knowledge to each case, ensuring comprehensive representation that addresses every aspect of your legal needs. We measure our success by your satisfaction and the positive outcomes we achieve together.",

    // Why Choose Us
    whyChooseTitle: "Why Clients Choose Us",
    whyChoose1: "Personalized attention from experienced attorneys",
    whyChoose2: "Clear communication and regular case updates",
    whyChoose3: "Strategic approach tailored to your specific goals",
    whyChoose4: "Proven track record of successful outcomes",
    whyChoose5: "Respect for your time and resources",

    // Core Values
    coreValuesTitle: "Our Core Values",
    value1Title: "Client-Centered Approach",
    value1Desc: "We prioritize understanding your unique situation and goals. Every case receives personalized attention from experienced attorneys who take the time to listen and develop strategies tailored to your specific needs.",
    value2Title: "Integrity & Transparency",
    value2Desc: "We believe in honest communication and ethical practice. Our clients receive straightforward advice about their options, potential outcomes, and costs, with no hidden fees or surprises throughout the legal process.",
    value3Title: "Strategic Excellence",
    value3Desc: "Our team combines deep legal knowledge with creative problem-solving. We develop innovative approaches to complex legal challenges, drawing on diverse expertise across multiple practice areas to achieve optimal results.",

    // Statistics
    statsLabels: {
      cases: "Cases Won",
      satisfaction: "Client Satisfaction",
      experience: "Years Experience",
      recovered: "Recovered for Clients"
    },

    // Case Results
    caseResultsTitle: "Recent Case Results",
    caseResults: [
      {
        category: "Personal Injury",
        result: "$2.5M",
        description: "Settlement for client injured in truck accident",
        year: "2023"
      },
      {
        category: "Corporate Law",
        result: "Won",
        description: "Successful defense in $50M breach of contract case",
        year: "2023"
      },
      {
        category: "Family Law",
        result: "Settled",
        description: "Favorable custody agreement for father",
        year: "2023"
      },
      {
        category: "Real Estate",
        result: "$4.2M",
        description: "Recovered in construction dispute litigation",
        year: "2022"
      },
      {
        category: "Criminal Defense",
        result: "Acquitted",
        description: "Not guilty verdict in federal fraud case",
        year: "2022"
      },
      {
        category: "Intellectual Property",
        result: "Won",
        description: "Patent infringement case for tech startup",
        year: "2022"
      }
    ],

    // Testimonials
    testimonialsTitle: "What Our Clients Say",
    testimonials: [
      {
        name: "Robert Williams",
        case: "Corporate Acquisition",
        text: "The team at this firm handled our multi-million dollar acquisition with exceptional expertise. They were always available to answer questions and made the complex process understandable.",
        rating: 5
      },
      {
        name: "Jennifer Martinez",
        case: "Family Law Matter",
        text: "During my difficult divorce, my attorney provided not only legal expertise but also emotional support. They fought for my rights and achieved a better outcome than I expected.",
        rating: 5
      },
      {
        name: "James Wilson",
        case: "Real Estate Dispute",
        text: "I was facing a complicated property dispute that seemed hopeless. The legal strategy developed by this firm was brilliant and resolved the issue in my favor efficiently.",
        rating: 4
      }
    ]
  },
  ar: {
    // Hero Section
    heroTitle: "تمثيل قانوني متخصص",
    heroSubtitle: "حماية حقوقك بعقود من الخبرة وسجل حافل من النجاح.",
    heroButton1: "استشارة مجانية",
    heroButton2: "خدماتنا",

    // About Section
    aboutTitle: "التزامنا",
    aboutTitleHighlight: "بالتميز",
    aboutTitleEnd: "",
    aboutPara1: "تأسست شركتنا على مبادئ النزاهة والخبرة والتفاني في خدمة العملاء، وقد كانت تخدم العملاء بامتياز لأكثر من عقدين. نحن نجمع بين القيم القانونية التقليدية والأساليب المبتكرة لمواجهة التحديات القانونية المعقدة اليوم.",
    aboutPara2: "يجلب محامونا وجهات نظر متنوعة ومعرفة متخصصة لكل قضية، مما يضمن تمثيلاً شاملاً يعالج كل جانب من جوانب احتياجاتك القانونية. نحن نقيس نجاحنا برضاك والنتائج الإيجابية التي نحققها معاً.",

    // Why Choose Us
    whyChooseTitle: "لماذا يختارنا العملاء",
    whyChoose1: "اهتمام شخصي من محامين ذوي خبرة",
    whyChoose2: "تواصل واضح وتحديثات منتظمة للقضية",
    whyChoose3: "نهج استراتيجي مصمم لأهدافك المحددة",
    whyChoose4: "سجل مثبت من النتائج الناجحة",
    whyChoose5: "احترام وقتك ومواردك",

    // Core Values
    coreValuesTitle: "قيمنا الأساسية",
    value1Title: "نهج يركز على العميل",
    value1Desc: "نحن نعطي الأولوية لفهم وضعك وأهدافك الفريدة. تحصل كل قضية على اهتمام شخصي من محامين ذوي خبرة يأخذون الوقت للاستماع ووضع استراتيجيات مصممة خصيصاً لاحتياجاتك المحددة.",
    value2Title: "النزاهة والشفافية",
    value2Desc: "نحن نؤمن بالتواصل الصادق والممارسة الأخلاقية. يتلقى عملاؤنا نصائح مباشرة حول خياراتهم والنتائج المحتملة والتكاليف، بدون رسوم خفية أو مفاجآت طوال العملية القانونية.",
    value3Title: "التميز الاستراتيجي",
    value3Desc: "يجمع فريقنا بين المعرفة القانونية العميقة وحل المشكلات الإبداعي. نحن نطور أساليب مبتكرة للتحديات القانونية المعقدة، مستفيدين من الخبرة المتنوعة عبر مجالات ممارسة متعددة لتحقيق النتائج المثلى.",

    // Statistics  
    statsLabels: {
      cases: "القضايا المكسوبة",
      satisfaction: "رضا العملاء",
      experience: "سنوات الخبرة",
      recovered: "تم استردادها للعملاء"
    },

    // Case Results
    caseResultsTitle: "نتائج القضايا الأخيرة",
    caseResults: [
      {
        category: "الإصابة الشخصية",
        result: "$2.5M",
        description: "تسوية للعميل المصاب في حادث شاحنة",
        year: "2023"
      },
      {
        category: "قانون الشركات",
        result: "فوز",
        description: "دفاع ناجح في قضية خرق عقد بقيمة 50 مليون دولار",
        year: "2023"
      },
      {
        category: "قانون الأسرة",
        result: "تسوية",
        description: "اتفاقية حضانة مواتية للأب",
        year: "2023"
      },
      {
        category: "العقارات",
        result: "$4.2M",
        description: "تم الاسترداد في نزاع البناء",
        year: "2022"
      },
      {
        category: "الدفاع الجنائي",
        result: "تبرئة",
        description: "حكم بالبراءة في قضية احتيال فيدرالية",
        year: "2022"
      },
      {
        category: "الملكية الفكرية",
        result: "فوز",
        description: "قضية انتهاك براءة اختراع لشركة تقنية ناشئة",
        year: "2022"
      }
    ],

    // Testimonials
    testimonialsTitle: "ما يقوله عملاؤنا",
    testimonials: [
      {
        name: "روبرت ويليامز",
        case: "استحواذ الشركات",
        text: "تعامل فريق هذه الشركة مع عملية الاستحواذ متعددة الملايين بخبرة استثنائية. كانوا متاحين دائماً للإجابة على الأسئلة وجعلوا العملية المعقدة مفهومة.",
        rating: 5
      },
      {
        name: "جينيفر مارتينيز",
        case: "مسألة قانون الأسرة",
        text: "خلال طلاقي الصعب، قدم محاميي ليس فقط الخبرة القانونية ولكن أيضاً الدعم العاطفي. حاربوا من أجل حقوقي وحققوا نتيجة أفضل مما توقعت.",
        rating: 5
      },
      {
        name: "جيمس ولسون",
        case: "نزاع عقاري",
        text: "كنت أواجه نزاعاً عقارياً معقداً بدا ميؤوساً منه. كانت الاستراتيجية القانونية التي طورتها هذه الشركة رائعة وحلت المشكلة لصالحي بكفاءة.",
        rating: 4
      }
    ]
  },
  he: {
    // Hero Section
    heroTitle: "ייצוג משפטי מומחה",
    heroSubtitle: "הגנה על זכויותיך עם עשרות שנות ניסיון ורקורד מוכח של הצלחה.",
    heroButton1: "ייעוץ חינם",
    heroButton2: "השירותים שלנו",

    // About Section
    aboutTitle: "המחויבות שלנו",
    aboutTitleHighlight: "למצוינות",
    aboutTitleEnd: "",
    aboutPara1: "נוסדה על עקרונות של יושרה, מומחיות והתמסרות ללקוחות, החברה שלנו משרתת לקוחות בהצטיינות למעלה משני עשורים. אנו משלבים ערכים משפטיים מסורתיים עם גישות חדשניות כדי להתמודד עם האתגרים המשפטיים המורכבים של היום.",
    aboutPara2: "עורכי הדין שלנו מביאים נקודות מבט מגוונות וידע מתמחה לכל תיק, מבטיחים ייצוג מקיף המתייחס לכל היבט של הצרכים המשפטיים שלך. אנו מודדים את הצלחתנו בשביעות הרצון שלך ובתוצאות החיוביות שאנו משיגים יחד.",

    // Why Choose Us  
    whyChooseTitle: "למה לקוחות בוחרים בנו",
    whyChoose1: "תשומת לב אישית מעורכי דין מנוסים",
    whyChoose2: "תקשורת ברורה ועדכונים קבועים על התיק",
    whyChoose3: "גישה אסטרטגית המותאמת למטרות הספציפיות שלך",
    whyChoose4: "רקורד מוכח של תוצאות מוצלחות",
    whyChoose5: "כבוד לזמן והמשאבים שלך",

    // Core Values
    coreValuesTitle: "הערכים הליבה שלנו",
    value1Title: "גישה ממוקדת לקוח",
    value1Desc: "אנו נותנים עדיפות להבנת המצב והמטרות הייחודיים שלך. כל תיק מקבל תשומת לב אישית מעורכי דין מנוסים שלוקחים זמן להקשיב ולפתח אסטרטגיות המותאמות לצרכים הספציפיים שלך.",
    value2Title: "יושרה ושקיפות",
    value2Desc: "אנו מאמינים בתקשורת כנה ובפרקטיקה אתית. הלקוחות שלנו מקבלים עצות ישירות לגבי האפשרויות שלהם, התוצאות הפוטנציאליות והעלויות, ללא עמלות נסתרות או הפתעות לאורך התהליך המשפטי.",
    value3Title: "מצוינות אסטרטגית",
    value3Desc: "הצוות שלנו משלב ידע משפטי עמוק עם פתרון בעיות יצירתי. אנו מפתחים גישות חדשניות לאתגרים משפטיים מורכבים, מסתמכים על מומחיות מגוונת בתחומי פרקטיקה מרובים כדי להשיג תוצאות אופטימליות.",

    // Statistics
    statsLabels: {
      cases: "תיקים שנוצחו",
      satisfaction: "שביעות רצון לקוחות",
      experience: "שנות ניסיון",
      recovered: "הושב ללקוחות"
    },

    // Case Results
    caseResultsTitle: "תוצאות תיקים אחרונות",
    caseResults: [
      {
        category: "פגיעה אישית",
        result: "$2.5M",
        description: "פשרה עבור לקוח שנפגע בתאונת משאית",
        year: "2023"
      },
      {
        category: "דין חברות",
        result: "ניצחון",
        description: "הגנה מוצלחת בתיק הפרת חוזה של 50 מיליון דולר",
        year: "2023"
      },
      {
        category: "דיני משפחה",
        result: "פשרה",
        description: "הסכם משמורת נוח לאב",
        year: "2023"
      },
      {
        category: "נדל\"ן",
        result: "$4.2M",
        description: "הושב במשפט מחלוקת בנייה",
        year: "2022"
      },
      {
        category: "הגנה פלילית",
        result: "זיכוי",
        description: "פסק דין זיכוי בתיק הונאה פדרלי",
        year: "2022"
      },
      {
        category: "קניין רוחני",
        result: "ניצחון",
        description: "תיק הפרת פטנט עבור חברת סטארט-אפ טכנולוגית",
        year: "2022"
      }
    ],

    // Testimonials
    testimonialsTitle: "מה הלקוחות שלנו אומרים",
    testimonials: [
      {
        name: "רוברט וויליאמס",
        case: "רכישת חברה",
        text: "הצוות בחברה הזו טיפל ברכישה רב-מיליונית שלנו עם מומחיות יוצאת דופן. הם היו תמיד זמינים לענות על שאלות והפכו את התהליך המורכב למובן.",
        rating: 5
      },
      {
        name: "ג'ניפר מרטינז",
        case: "עניין דיני משפחה",
        text: "במהלך הגירושין הקשים שלי, עורך הדין שלי סיפק לא רק מומחיות משפטית אלא גם תמיכה רגשית. הם נלחמו למען זכויותיי והשיגו תוצאה טובה יותר ממה שציפיתי.",
        rating: 5
      },
      {
        name: "ג'יימס ווילסון",
        case: "מחלוקת נדל\"ן",
        text: "התמודדתי עם מחלוקת נכסים מורכבת שנראתה חסרת תקווה. האסטרטגיה המשפטית שפותחה על ידי החברה הזו הייתה מבריקה ופתרה את הבעיה לטובתי ביעילות.",
        rating: 4
      }
    ]
  }
};

const AnimatedNumber = ({ value, suffix = "", isVisible, className = "" }) => {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const end = value;
      if (start === end) return;
      let duration = 1000;
      let increment = end / (duration / 16);
      let current = start;
      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          current = end;
          clearInterval(timer);
        }
        setDisplay(Math.floor(current));
      }, 16);
      return () => clearInterval(timer);
    } else {
      setDisplay(0);
    }
  }, [isVisible, value]);

  return (
    <span className={className}>
      {display}
      {suffix}
    </span>
  );
};

const communityWork = [
  {
    title: "Legal Aid Clinic",
    description: "Weekly pro bono legal services for low-income community members",
    impact: "500+ families helped annually",
    image: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    stats: ["2000+ Hours donated", "95% Case success rate", "Since 2015"]
  },
  {
    title: "Youth Education Program",
    description: "Teaching legal literacy and career skills to high school students",
    impact: "12 schools participating",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    stats: ["500+ Students reached", "25+ Workshops conducted", "3 School districts"]
  },
  {
    title: "Environmental Advocacy",
    description: "Pro bono representation for environmental protection cases",
    impact: "15 protected areas preserved",
    image: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    stats: ["10+ Cases won", "5000+ Acres protected", "2 National awards"]
  }
];

const partners = [
  { name: "Community Legal Aid", logo: "CLA", years: "8 years" },
  { name: "Youth Justice Initiative", logo: "YJI", years: "5 years" },
  { name: "Environmental Defense Fund", logo: "EDF", years: "3 years" },
  { name: "Local Bar Association", logo: "LBA", years: "10 years" }
];

const Home1 = ({ isDark }) => {
  // Language state management
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'en';
  });

  // Get translations for current language
  const t = translations[language] || translations.en;

  // Dynamic arrays based on current language
  const caseResults = t.caseResults;
  const testimonials = t.testimonials;

  // Stats array with translated labels
  const stats = [
    { number: 500, suffix: "+", label: t.statsLabels.cases },
    { number: 98, suffix: "%", label: t.statsLabels.satisfaction },
    { number: 25, suffix: "+", label: t.statsLabels.experience },
    { number: 150, suffix: "M+", label: t.statsLabels.recovered }
  ];

  // Dynamic values array
  const values = [
    {
      title: t.value1Title,
      description: t.value1Desc
    },
    {
      title: t.value2Title,
      description: t.value2Desc
    },
    {
      title: t.value3Title,
      description: t.value3Desc
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [counted, setCounted] = useState(false);
  const [cases, setCases] = useState(0);
  const [clients, setClients] = useState(0);
  const [successRate, setSuccessRate] = useState(0);
  const [years, setYears] = useState(0);
  const [activeCause, setActiveCause] = useState(0);
  const [activeValue, setActiveValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const navigate = useNavigate(); // Add this hook

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

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

  useEffect(() => {
    if (!counted) {
      const interval = setInterval(() => {
        setCases(prev => (prev < 2500 ? prev + 50 : 2500));
        setClients(prev => (prev < 5000 ? prev + 100 : 5000));
        setSuccessRate(prev => (prev < 95 ? prev + 1 : 95));
        setYears(prev => (prev < 25 ? prev + 1 : 25));
      }, 30);

      setTimeout(() => {
        clearInterval(interval);
        setCounted(true);
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [counted]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <span
        key={index}
        className={index < rating ? "text-yellow-400" : "text-gray-300"}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="w-full min-h-screen bg-white dark:bg-black" dir={language === 'ar' || language === 'he' ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="relative w-screen h-screen m-0 p-0">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={video}
          autoPlay
          loop
          muted
        />
        {/* Overlay and Content */}
        <div className="absolute inset-0 bg-black/20 z-10 flex flex-col justify-center items-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg"
          >
            {t.heroTitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl text-white mb-8 max-w-2xl mx-auto"
          >
            {t.heroSubtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-4 justify-center"
          >
            <button
              className="px-8 py-3 bg-[#2874f0] hover:bg-blue-700 rounded-full font-semibold text-white shadow-lg transition"
              onClick={() => navigate("/contact")}
            >
              {t.heroButton1}
            </button>
            <button
              className="px-8 py-3 bg-black hover:bg-gray-800 rounded-full font-semibold text-white shadow-lg transition border border-black"
              onClick={() => navigate("/services")}
            >
              {t.heroButton2}
            </button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section ref={sectionRef} className={`py-8 bg-white dark:bg-black relative overflow-hidden mb-0`}>
        {/* Decorative elements */}
        <div className={`absolute bottom-10 -left-20 w-40 h-40 dark:bg-gray-900  rounded-full`}></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div className={`transition-all duration-700 ease-in-out`}>
                <h2 className={`text-4xl md:text-5xl font-serif font-bold  mb-4`}>
                  {t.aboutTitle} <span className="text-blue-600">{t.aboutTitleHighlight}</span> {t.aboutTitleEnd}
                </h2>
                <div className="w-24 h-1 bg-blue-600 mb-6"></div>
                <p className={`text-lg  leading-relaxed mb-4`}>
                  {t.aboutPara1}
                </p>
                <p className={`text-lg  leading-relaxed`}>
                  {t.aboutPara2}
                </p>
              </div>

              <div className={`p-6 rounded-lg border-l-4 border-blue-600 `}>
                <h3 className={`text-2xl font-semibold  mb-4`}>{t.whyChooseTitle}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className={`flex-shrink-0 w-6 h-6 ${isDark ? 'bg-blue-900' : 'bg-blue-100'} rounded-full flex items-center justify-center mr-3 mt-1`}>
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <span>{t.whyChoose1}</span>
                  </li>
                  <li className="flex items-start">
                    <div className={`flex-shrink-0 w-6 h-6  ${isDark ? 'bg-blue-900' : 'bg-blue-100'} rounded-full flex items-center justify-center mr-3 mt-1`}>
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <span>{t.whyChoose2}</span>
                  </li>
                  <li className="flex items-start">
                    <div className={`flex-shrink-0 w-6 h-6 ${isDark ? 'bg-blue-900' : 'bg-blue-100'} rounded-full flex items-center justify-center mr-3 mt-1`}>
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <span>{t.whyChoose3}</span>
                  </li>
                  <li className="flex items-start">
                    <div className={`flex-shrink-0 w-6 h-6 ${isDark ? 'bg-blue-900' : 'bg-blue-100'} rounded-full flex items-center justify-center mr-3 mt-1`}>
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <span>{t.whyChoose4}</span>
                  </li>
                  <li className="flex items-start">
                    <div className={`flex-shrink-0 w-6 h-6 ${isDark ? 'bg-blue-900' : 'bg-blue-100'} rounded-full flex items-center justify-center mr-3 mt-1`}>
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <span>{t.whyChoose5}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-1 mt-0">
              <h3 className={`text-3xl font-serif font-bold text-center ${isDark ? 'text-white' : 'text-white'} mb-8`}>{t.coreValuesTitle}</h3>

              <div className="grid md:grid-cols-3 gap-6">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className={`p-4 border rounded-lg transition-all duration-300 cursor-pointer ${activeValue === index
                      ? 'border-blue-600 transform -translate-y-1 shadow-md'
                      : 'border-gray-200 hover:border-blue-300'
                      } `}
                    onClick={() => setActiveValue(index)}
                    onMouseEnter={() => setActiveValue(index)}
                  >
                    <h4 className={`text-xl font-semibold mb-3 transition-colors ${activeValue === index ? 'text-blue-600' : (isDark ? 'text-white' : 'text-black')
                      }`}>
                      {value.title}
                    </h4>
                    <p className={` leading-relaxed`}>
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Community Section */}
      <section className={`py-10 `}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-serif font-bold mb-4 dark:text-white`}>
              Community Involvement
            </h2>
            <p className={`text-xl dark:text-white max-w-3xl mx-auto`}>
              Giving back to our community through pro bono work, education, and environmental advocacy.
            </p>
          </div>

          {/* Community Work Carousel */}
          <div className="max-w-6xl mx-auto mb-10">
            <div className="relative">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <div className="relative">
                  <img
                    src={communityWork[activeCause].image}
                    alt={communityWork[activeCause].title}
                    className="rounded-2xl shadow-xl w-full h-96 object-cover"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-2xl shadow-lg">
                    <div className="text-2xl font-bold">{communityWork[activeCause].impact}</div>
                    <div className="text-sm">Annual Impact</div>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className={`text-2xl md:text-3xl font-bold  mb-4`}>
                    {communityWork[activeCause].title}
                  </h3>
                  <p className={` text-lg mb-6`}>
                    {communityWork[activeCause].description}
                  </p>

                  {/* Stats */}
                  <div className="space-y-3 mb-8">
                    {communityWork[activeCause].stats.map((stat, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
                        <span >{stat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Navigation */}
                  <div className="flex space-x-4">
                    {communityWork.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveCause(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${activeCause === index ? 'bg-blue-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                          }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Results Section */}
      <section ref={sectionRef} className={`py-10 `}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-serif font-bold mb-4 `}>{t.caseResultsTitle}</h2>
            <p className={`text-xl  max-w-3xl mx-auto`}>
              Our track record of success demonstrates our commitment to achieving the best possible outcomes for our clients.
            </p>
          </div>

          {/* Animated Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center p-6 rounded-xl transition-colors duration-300 hover:border-black hover:text-[#2874f0] dark:bg-gray-800 border-[#2874f0]'} border`}
              >
                <AnimatedNumber
                  value={stat.number}
                  suffix={stat.suffix}
                  isVisible={isVisible}
                  className="text-4xl md:text-5xl font-bold text-[#2874f0] mb-2 transition-colors duration-300"
                />
                <p className={`dark:text-black`}>{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Case Results Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseResults.map((caseResult, index) => (
              <div
                key={index}
                //           className={`rounded-xl overflow-hidden group hover:transform hover:scale-105 transition-all duration-500
                //   ${isDark ? "bg-gray-700 border border-gray-700" : "bg-white border border-[#2874f0]"}
                // `}
                className={`rounded-xl overflow-hidden group hover:transform hover:scale-105 transition-all duration-500 dark:bg-gray-800 border-[#2874f0]'} border`}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <span className="bg-[#2874f0] text-xs px-3 py-1 rounded-full text-white">
                      {caseResult.category}
                    </span>
                    <span className={`${isDark ? "text-white" : "text-black"}`}>{caseResult.year}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#2874f0] mb-2">{caseResult.result}</h3>
                  <p className={isDark ? "text-gray-300" : "text-black"}>{caseResult.description}</p>
                  <div className="text-[#2874f0] font-semibold flex items-center mt-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="#2874f0">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Result Achieved</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Awards & Recognition */}
          <div className="mt-20 text-center">
            <h3 className={`text-2xl font-serif font-bold mb-8 ${isDark ? 'text-white' : 'text-black'}`}>Awards & Recognition</h3>
            <div className="flex flex-wrap justify-center gap-8">
              {[
                "Best Law Firms 2023",
                "Super Lawyers",
                "AV Preeminent Rating",
                "Top 100 Trial Lawyers"
              ].map((award, index) => (
                <div
                  key={index}
                  className="bg-[#2874f0] px-6 py-3 rounded-full hover:bg-black transition-all duration-300 transform hover:scale-105"
                >
                  <span className="text-sm font-medium text-white">{award}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* Testimonials Section */}
      <section className={`py-16 `}>
        <div className="container mx-auto px-4">
          <h2 className={`text-4xl font-serif font-bold text-center mb-4`}>
            {t.testimonialsTitle}
          </h2>
          <p className={` text-center max-w-2xl mx-auto mb-12`}>
            Hear what our clients have to say about their experience with our legal services.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className={`rounded-xl shadow-lg p-8 relative dark:border-[#2874f0] border border-[#2874f0]  `}>
              <div className="absolute top-0 left-0 w-16 h-16 -mt-4 -ml-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#2874f0' }}>
                <span className="text-white text-3xl">"</span>
              </div>

              <div className="transition-opacity duration-500 ease-in-out">
                <div className="flex justify-center mb-6">
                  {renderStars(testimonials[currentTestimonial].rating)}
                </div>

                <p className={`text-lg italic mb-8 text-center `}>
                  "{testimonials[currentTestimonial].text}"
                </p>

                <div className="text-center">
                  <h4 className={`text-xl font-semibold `}>
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-[#2874f0]">
                    {testimonials[currentTestimonial].case}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${index === currentTestimonial ? 'bg-[#2874f0]' : 'bg-gray-300'
                    }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-16 dark:bg-black bg-[#f5f8ff]`}>
        <div className="container mx-auto px-4 text-center">
          <h2 className={`text-3xl font-serif font-bold mb-6`}>
            Ready to Discuss Your Case?
          </h2>
          <p className={` max-w-2xl mx-auto mb-8`}>
            Schedule a free consultation with one of our experienced attorneys today.
          </p>
          <button
            className="px-8 py-3 bg-[#2874f0] text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-md hover:shadow-lg"
            onClick={() => navigate("/contact")}
          >
            Contact Us Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home1;