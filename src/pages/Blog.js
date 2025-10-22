import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import video from "../images/law-hero.mp4";
import { useNavigate } from "react-router-dom"; // Add this import
import image1 from "../images/service1.jpg"
import image2 from "../images/service4.jpg"
import image3 from "../images/service5.jpg"
// Translations object for multi-language support
const translations = {
  en: {
    // Hero Section
    heroTitle: "Expert Legal Representation",
    heroSubtitle: "Protecting your rights with decades of experience and a track record of success.",
    
    // Articles Section
    featuredArticlesTitle: "Featured Legal Articles",
    articlesData: [
      {
        title: "Understanding Intellectual Property Rights",
        description: "Learn how to protect your creative works and innovations in today's competitive business landscape."
      },
      {
        title: "Navigating Corporate Compliance Regulations",
        description: "Stay compliant with the latest corporate regulations and avoid costly legal penalties."
      },
      {
        title: "The Impact of Recent Supreme Court Decisions",
        description: "Analysis of how recent rulings may affect your business and personal legal matters."
      }
    ],
    readMore: "Read More →",
    
    // Case Studies Section
    caseStudiesTitle: "Notable Case Studies",
    caseStudies: [
      {
        title: "Corporate Merger Success",
        date: "October 2023",
        category: "Corporate Law",
        description: "Successfully navigated a complex $500M merger between two major tech firms, overcoming regulatory hurdles.",
        stats: {
          "Client": "TechCorp Inc.",
          "Value": "$500M",
          "Duration": "8 months"
        }
      },
      {
        title: "Intellectual Property Victory",
        date: "September 2023",
        category: "IP Law",
        description: "Won a landmark patent infringement case protecting our client's innovative technology.",
        stats: {
          "Client": "Innovate Labs",
          "Award": "$12M",
          "Duration": "14 months"
        }
      },
      {
        title: "Real Estate Dispute Resolution",
        date: "August 2023",
        category: "Real Estate Law",
        description: "Resolved a complex commercial real estate dispute, saving our client millions in potential losses.",
        stats: {
          "Client": "Property Developers LLC",
          "Savings": "$8.5M",
          "Duration": "6 months"
        }
      }
    ],
    viewCaseDetails: "View Case Details →",
    
    // Events Section
    eventsTitle: "Upcoming Legal Events",
    eventsSubtitle: "Join us for these informative legal seminars and workshops",
    events: [
      {
        title: "Corporate Law Seminar",
        date: "December 15, 2023",
        location: "Chicago, IL",
        category: "Corporate Law"
      },
      {
        title: "Intellectual Property Workshop",
        date: "January 10-12, 2024",
        location: "New York, NY",
        category: "IP Law"
      },
      {
        title: "Legal Tech Conference",
        date: "March 5-7, 2024",
        location: "San Francisco, CA",
        category: "Technology"
      }
    ],
    registerNow: "Register Now",
    
    // Blog Content
    caseEvaluationTitle: "Case Evaluation: Building a Strong Legal Foundation",
    caseEvaluationText1: "The initial phase of any legal matter involves thorough evaluation and preparation. Our attorneys conduct comprehensive case assessments to identify strengths, weaknesses, and potential strategies.",
    caseEvaluationText2: "We gather all relevant documentation, interview key witnesses, and research applicable laws and precedents. This meticulous approach ensures we develop the most effective legal strategy tailored to your specific situation and objectives.",
    
    legalStrategyTitle: "Legal Strategy: Developing Your Path to Success",
    legalStrategyText1: "Once we've gathered all necessary information, our legal team develops a comprehensive strategy designed to achieve your goals. This involves analyzing various approaches, assessing risks and potential outcomes, and determining the most effective course of action.",
    legalStrategyText2: "We believe in transparent communication throughout this process, ensuring you understand each strategic decision and how it serves your interests. Whether through negotiation, mediation, or litigation, we craft approaches that maximize your chances of success while minimizing unnecessary conflict and expense.",
    
    caseResolutionTitle: "Case Resolution: Achieving Favorable Outcomes",
    caseResolutionText1: "The final phase focuses on achieving resolution and ensuring proper implementation of any agreements or court decisions. Our attorneys work diligently to secure the best possible outcome, whether through settlement negotiations or courtroom advocacy.",
    caseResolutionText2: "Following resolution, we assist with all necessary documentation, compliance matters, and implementation of terms. We also conduct post-case reviews to identify lessons learned and strategies that could benefit future cases.",
    
    // CTA Section
    ctaTitle: "Need Expert Legal Guidance?",
    ctaText: "Our experienced attorneys are ready to provide the strategic counsel and representation you need to protect your interests and achieve your objectives.",
    ctaButton: "Schedule a Consultation"
  },
  ar: {
    // Hero Section
    heroTitle: "تمثيل قانوني خبير",
    heroSubtitle: "حماية حقوقكم بعقود من الخبرة وسجل حافل بالنجاحات.",
    
    // Articles Section
    featuredArticlesTitle: "مقالات قانونية مميزة",
    articlesData: [
      {
        title: "فهم حقوق الملكية الفكرية",
        description: "تعلم كيفية حماية أعمالك الإبداعية وابتكاراتك في بيئة الأعمال التنافسية اليوم."
      },
      {
        title: "التنقل في لوائح الامتثال المؤسسي",
        description: "ابق متوافقاً مع أحدث اللوائح المؤسسية وتجنب العقوبات القانونية المكلفة."
      },
      {
        title: "تأثير قرارات المحكمة العليا الأخيرة",
        description: "تحليل كيف قد تؤثر الأحكام الأخيرة على أعمالك والأمور القانونية الشخصية."
      }
    ],
    readMore: "اقرأ المزيد ←",
    
    // Case Studies Section
    caseStudiesTitle: "دراسات حالة بارزة",
    caseStudies: [
      {
        title: "نجاح الاندماج المؤسسي",
        date: "أكتوبر 2023",
        category: "القانون المؤسسي",
        description: "تنقلنا بنجاح في اندماج معقد بقيمة 500 مليون دولار بين شركتين تقنيتين كبيرتين، متغلبين على العقبات التنظيمية.",
        stats: {
          "العميل": "TechCorp Inc.",
          "القيمة": "$500M",
          "المدة": "8 أشهر"
        }
      },
      {
        title: "انتصار الملكية الفكرية",
        date: "سبتمبر 2023",
        category: "قانون الملكية الفكرية",
        description: "فزنا في قضية انتهاك براءة اختراع بارزة لحماية تقنية عميلنا المبتكرة.",
        stats: {
          "العميل": "Innovate Labs",
          "الجائزة": "$12M",
          "المدة": "14 شهر"
        }
      },
      {
        title: "حل نزاع العقارات",
        date: "أغسطس 2023",
        category: "قانون العقارات",
        description: "حللنا نزاع عقاري تجاري معقد، وفرنا على عميلنا ملايين من الخسائر المحتملة.",
        stats: {
          "العميل": "Property Developers LLC",
          "التوفير": "$8.5M",
          "المدة": "6 أشهر"
        }
      }
    ],
    viewCaseDetails: "عرض تفاصيل القضية ←",
    
    // Events Section
    eventsTitle: "الأحداث القانونية القادمة",
    eventsSubtitle: "انضم إلينا في هذه الندوات وورش العمل القانونية المعلوماتية",
    events: [
      {
        title: "ندوة القانون المؤسسي",
        date: "15 ديسمبر 2023",
        location: "شيكاغو، إلينوي",
        category: "القانون المؤسسي"
      },
      {
        title: "ورشة عمل الملكية الفكرية",
        date: "10-12 يناير 2024",
        location: "نيويورك، نيويورك",
        category: "قانون الملكية الفكرية"
      },
      {
        title: "مؤتمر التقنية القانونية",
        date: "5-7 مارس 2024",
        location: "سان فرانسيسكو، كاليفورنيا",
        category: "التكنولوجيا"
      }
    ],
    registerNow: "سجل الآن",
    
    // Blog Content
    caseEvaluationTitle: "تقييم القضية: بناء أساس قانوني قوي",
    caseEvaluationText1: "تتضمن المرحلة الأولى من أي مسألة قانونية تقييم وإعداد شامل. يقوم محامونا بإجراء تقييمات شاملة للقضايا لتحديد نقاط القوة والضعف والاستراتيجيات المحتملة.",
    caseEvaluationText2: "نجمع جميع الوثائق ذات الصلة، ونقابل الشهود الرئيسيين، ونبحث في القوانين والسوابق القابلة للتطبيق. هذا النهج الدقيق يضمن أننا نطور الاستراتيجية القانونية الأكثر فعالية المصممة خصيصاً لوضعك وأهدافك المحددة.",
    
    legalStrategyTitle: "الاستراتيجية القانونية: تطوير طريقك إلى النجاح",
    legalStrategyText1: "بمجرد جمع جميع المعلومات الضرورية، يطور فريقنا القانوني استراتيجية شاملة مصممة لتحقيق أهدافك. يتضمن ذلك تحليل مناهج مختلفة، وتقييم المخاطر والنتائج المحتملة، وتحديد أكثر مسارات العمل فعالية.",
    legalStrategyText2: "نؤمن بالتواصل الشفاف طوال هذه العملية، مما يضمن فهمك لكل قرار استراتيجي وكيف يخدم مصالحك. سواء من خلال التفاوض أو الوساطة أو التقاضي، نصيغ نهج تزيد من فرص نجاحك مع تقليل الصراع والنفقات غير الضرورية.",
    
    caseResolutionTitle: "حل القضية: تحقيق نتائج مواتية",
    caseResolutionText1: "تركز المرحلة الأخيرة على تحقيق الحل وضمان التنفيذ السليم لأي اتفاقيات أو قرارات محكمة. يعمل محامونا بجد لتأمين أفضل نتيجة ممكنة، سواء من خلال مفاوضات التسوية أو الدفاع في قاعة المحكمة.",
    caseResolutionText2: "بعد الحل، نساعد في جميع الوثائق الضرورية، وأمور الامتثال، وتنفيذ الشروط. كما نجري مراجعات ما بعد القضية لتحديد الدروس المستفادة والاستراتيجيات التي يمكن أن تفيد القضايا المستقبلية.",
    
    // CTA Section
    ctaTitle: "تحتاج إرشاد قانوني خبير؟",
    ctaText: "محامونا ذوو الخبرة مستعدون لتقديم المشورة الاستراتيجية والتمثيل الذي تحتاجه لحماية مصالحك وتحقيق أهدافك.",
    ctaButton: "حدد موعد استشارة"
  },
  he: {
    // Hero Section
    heroTitle: "ייצוג משפטי מומחה",
    heroSubtitle: "הגנה על זכויותיכם עם עשרות שנות ניסיון ורקורד הוכח של הצלחה.",
    
    // Articles Section
    featuredArticlesTitle: "מאמרים משפטיים מומלצים",
    articlesData: [
      {
        title: "הבנת זכויות קניין רוחני",
        description: "למדו כיצד להגן על יצירותיכם ההוגים וחדשנותכם בנוף העסקי התחרותי של היום."
      },
      {
        title: "ניווט ברגולציות ציות תאגידי",
        description: "הישארו עמידים עם הרגולציות התאגידיות החדשות ביותר והימנעו מעונשים משפטיים יקרים."
      },
      {
        title: "השפעת החלטות בית המשפט העליון האחרונות",
        description: "ניתוח כיצד פסקי דין אחרונים עשויים להשפיע על העסק שלכם ועניינים משפטיים אישיים."
      }
    ],
    readMore: "קרא עוד ←",
    
    // Case Studies Section
    caseStudiesTitle: "מחקרי מקרה בולטים",
    caseStudies: [
      {
        title: "הצלחת מיזוג תאגידי",
        date: "אוקטובר 2023",
        category: "משפט תאגידי",
        description: "ניווטנו בהצלחה מיזוג מורכב של 500 מיליון דולר בין שתי חברות טכנולוגיה גדולות, והתגברנו על מכשולים רגולטוריים.",
        stats: {
          "לקוח": "TechCorp Inc.",
          "ערך": "$500M",
          "משך": "8 חודשים"
        }
      },
      {
        title: "ניצחון קניין רוחני",
        date: "ספטמבר 2023",
        category: "משפט קניין רוחני",
        description: "זכינו בתיק הפרת פטנט פורץ דרך להגנת הטכנולוגיה החדשנית של הלקוח שלנו.",
        stats: {
          "לקוח": "Innovate Labs",
          "פרס": "$12M",
          "משך": "14 חודשים"
        }
      },
      {
        title: "פתרון סכסוך נדל\"ן",
        date: "אוגוסט 2023",
        category: "משפט נדל\"ן",
        description: "פתרנו סכסוך נדל\"ן מסחרי מורכב, וחסכנו ללקוח שלנו מיליונים בהפסדים פוטנציאליים.",
        stats: {
          "לקוח": "Property Developers LLC",
          "חיסכון": "$8.5M",
          "משך": "6 חודשים"
        }
      }
    ],
    viewCaseDetails: "הצג פרטי תיק ←",
    
    // Events Section
    eventsTitle: "אירועים משפטיים קרובים",
    eventsSubtitle: "הצטרפו אלינו לסמינרים וסדנאות משפטיות אלו המלאות מידע",
    events: [
      {
        title: "סמינר משפט תאגידי",
        date: "15 בדצמבר 2023",
        location: "שיקגו, אילינוי",
        category: "משפט תאגידי"
      },
      {
        title: "סדנת קניין רוחני",
        date: "10-12 בינואר 2024",
        location: "ניו יורק, ניו יורק",
        category: "משפט קניין רוחני"
      },
      {
        title: "כנס טכנולוגיה משפטית",
        date: "5-7 במרץ 2024",
        location: "סן פרנסיסקו, קליפורניה",
        category: "טכנולוגיה"
      }
    ],
    registerNow: "הירשם עכשיו",
    
    // Blog Content
    caseEvaluationTitle: "הערכת תיק: בניית יסוד משפטי חזק",
    caseEvaluationText1: "השלב הראשוני של כל עניין משפטי כולל הערכה והכנה יסודית. עורכי הדין שלנו מבצעים הערכות תיק מקיפות כדי לזהות חוזקות, חולשות ואסטרטגיות פוטנציאליות.",
    caseEvaluationText2: "אנו אוספים את כל התיעוד הרלוונטי, מראיינים עדים מפתח, וחוקרים חוקים ותקדימים ישימים. גישה קפדנית זו מבטיחה שאנו מפתחים את האסטרטגיה המשפטית היעילה ביותר המותאמת למצב ויעדים הספציפיים שלכם.",
    
    legalStrategyTitle: "אסטרטגיה משפטית: פיתוח הדרך שלכם להצלחה",
    legalStrategyText1: "לאחר שאספנו את כל המידע הדרוש, הצוות המשפטי שלנו מפתח אסטרטגיה מקיפה שנועדה להשיג את היעדים שלכם. זה כולל ניתוח גישות שונות, הערכת סיכונים ותוצאות פוטנציאליות, וקביעת מסלול הפעולה היעיל ביותר.",
    legalStrategyText2: "אנו מאמינים בתקשורת שקופה לאורך התהליך הזה, ומבטיחים שאתם מבינים כל החלטה אסטרטגית וכיצד היא משרתת את האינטרסים שלכם. בין אם דרך משא ומתן, גישור או ליטיגציה, אנו יוצרים גישות שמקסמות את הסיכויים שלכם להצלחה תוך מזעור קונפליקט והוצאות מיותרות.",
    
    caseResolutionTitle: "פתרון תיק: השגת תוצאות חיוביות",
    caseResolutionText1: "השלב האחרון מתמקד בהשגת פתרון והבטחת יישום נכון של כל הסכמים או החלטות בית משפט. עורכי הדין שלנו עובדים ברצינות כדי להבטיח את התוצאה הטובה ביותר האפשרית, בין אם דרך משא ומתן הסדרה או הגנה באולם בית המשפט.",
    caseResolutionText2: "לאחר הפתרון, אנו מסייעים עם כל התיעוד הדרוש, עניינות ציות, ויישום תנאים. אנו גם מבצעים סקירות פוסט-תיק כדי לזהות לקחים שנלמדו ואסטרטגיות שיכולות להועיל לתיקים עתידיים.",
    
    // CTA Section
    ctaTitle: "צריכים הדרכה משפטית מומחית?",
    ctaText: "עורכי הדין המנוסים שלנו מוכנים לספק את הייעוץ האסטרטגי והייצוג שאתם צריכים כדי להגן על האינטרסים שלכם ולהשיג את היעדים שלכם.",
    ctaButton: "קבעו פגישת ייעוץ"
  }
};

const Blog = () => {
  // State for dark mode toggle
  const [darkMode, setDarkMode] = useState(false);
  
  // State for active carousel item
  const [activeCase, setActiveCase] = useState(0);
  
  // State for active timeline step
  const [activeStep, setActiveStep] = useState(0);

  // Language state
  const [language, setLanguage] = useState('en');

  // Get current translations
  const t = translations[language];

  // Sample data for the blog (using translations)
  const articlesData = [
    {
      id: 1,
      title: t.articlesData[0].title,
      description: t.articlesData[0].description,
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      path: "/article/ip-rights"
    },
    {
      id: 2,
      title: t.articlesData[1].title,
      description: t.articlesData[1].description,
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      path: "/article/compliance"
    },
    {
      id: 3,
      title: t.articlesData[2].title,
      description: t.articlesData[2].description,
      image: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      path: "/article/supreme-court"
    }
  ];

  // Case studies data (using translations)
  const caseStudies = [
    {
      id: 1,
      title: t.caseStudies[0].title,
      date: t.caseStudies[0].date,
      category: t.caseStudies[0].category,
      description: t.caseStudies[0].description,
      image:image1,
      stats: t.caseStudies[0].stats,
      
    },
    {
      id: 2,
      title: t.caseStudies[1].title,
      date: t.caseStudies[1].date,
      category: t.caseStudies[1].category,
      description: t.caseStudies[1].description,
      image: image2,
      stats: t.caseStudies[1].stats,

    },
    {
      id: 3,
      title: t.caseStudies[2].title,
      date: t.caseStudies[2].date,
      category: t.caseStudies[2].category,
      description: t.caseStudies[2].description,
      image: image3,
      stats: t.caseStudies[2].stats,
      
    }
  ];

  // Legal process steps
  const legalProcessSteps = [
    {
      title: "Initial Consultation",
      description: "Meet with our attorneys to discuss your legal matter, evaluate your case, and understand your objectives.",
      tasks: ["Case evaluation", "Identify legal issues", "Discuss potential strategies", "Explain fee structure"],
      icon: "fas fa-handshake",
      time: "First meeting"
    },
    {
      title: "Case Investigation",
      description: "Gather all relevant facts, documents, and evidence needed to build a strong foundation for your case.",
      tasks: ["Collect documentation", "Interview witnesses", "Research case law", "Investigate facts"],
      icon: "fas fa-search",
      time: "1-2 weeks"
    },
    {
      title: "Strategy Development",
      description: "Develop a comprehensive legal strategy tailored to your specific situation and desired outcomes.",
      tasks: ["Legal research", "Strategy formulation", "Risk assessment", "Plan development"],
      icon: "fas fa-chess",
      time: "2-3 weeks"
    },
    {
      title: "Negotiation & Settlement",
      description: "Engage in negotiations with opposing parties to seek a favorable settlement without litigation.",
      tasks: ["Demand letters", "Settlement talks", "Mediation", "Agreement drafting"],
      icon: "fas fa-handshake",
      time: "2-4 weeks"
    },
    {
      title: "Litigation Preparation",
      description: "Prepare all necessary documents and arguments if your case proceeds to court.",
      tasks: ["Draft pleadings", "Prepare motions", "Depositions", "Trial preparation"],
      icon: "fas fa-gavel",
      time: "4-8 weeks"
    },
    {
      title: "Resolution & Follow-up",
      description: "Finalize your case resolution and ensure all terms are properly executed and documented.",
      tasks: ["Finalize agreement", "Court appearances", "Document execution", "Post-case review"],
      icon: "fas fa-file-contract",
      time: "1-2 weeks"
    }
  ];

  // Upcoming events data (using translations)
  const upcomingEvents = [
    {
      id: 1,
      title: t.events[0].title,
      date: t.events[0].date,
      location: t.events[0].location,
      image: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&w=600&q=80",
      category: t.events[0].category
    },
    {
      id: 2,
      title: t.events[1].title,
      date: t.events[1].date,
      location: t.events[1].location,
      image: "https://images.unsplash.com/photo-1462826303086-329426d1aef5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      category: t.events[1].category
    },
    {
      id: 3,
      title: t.events[2].title,
      date: t.events[2].date,
      location: t.events[2].location,
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      category: t.events[2].category
    }
  ];

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

  // Set up carousel auto-rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCase((prev) => (prev + 1) % caseStudies.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [caseStudies.length]);

  const handleDotClick = (index) => {
    setActiveCase(index);
  };

  const navigate = useNavigate(); // Add this hook

  // Navigation handler
  const handleNavigation = (path) => {
    // Map article paths to Blog1, Blog2, Blog3
    if (path === "/article/ip-rights") {
      navigate("/blog1");
    } else if (path === "/article/compliance") {
      navigate("/blog2");
    } else if (path === "/article/supreme-court") {
      navigate("/blog3");
    } else {
      navigate(path);
    }
  };

  return (
  <div className="w-full min-h-screen bg-white dark:bg-black">
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
            
          </motion.div>
        </div>
      </section>


      {/* Featured Articles Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">{t.featuredArticlesTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articlesData.map(article => (
            <div key={article.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200">
              <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{article.title}</h3>
                <p className="text-gray-600 mb-4 dark:text-white">{article.description}</p>
                <button 
                  className="text-blue-600 hover:text-blue-800 font-medium"
                  onClick={() => handleNavigation(article.path)}
                >
                  {t.readMore}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies Carousel */}
      <section className="py-16 bg-gray-100 px-4 dark:bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{t.caseStudiesTitle}</h2>
          <div className="relative overflow-hidden rounded-xl shadow-lg min-h-[400px]">
            {caseStudies.map((caseStudy, index) => (
              <div
                key={caseStudy.id}
                className={`absolute top-0 left-0 w-full h-full flex flex-col md:flex-row items-stretch transition-opacity duration-500 ${
                  index === activeCase ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
                style={{ background: 'transparent' }}
              >
                {/* Image Section */}
                <div className="md:w-1/2 flex-shrink-0">
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-64 md:h-full object-cover rounded-l-xl"
                  />
                </div>
                {/* Content Section - unified style */}
                <div className="md:w-1/2 bg-white flex flex-col justify-center p-8 rounded-r-xl dark:bg-gray-900">
                  <div className="flex items-center mb-4">
                    <span className="bg-[#2874f0] text-white text-sm font-medium px-3 py-1 rounded-full">
                      {caseStudy.category}
                    </span>
                    <span className="text-gray-500 text-sm ml-4 dark:text-white">{caseStudy.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">{caseStudy.title}</h3>
                  <p className="text-gray-700 mb-6 dark:text-white">{caseStudy.description}</p>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(caseStudy.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-[#2874f0] font-bold text-lg ">{value}</div>
                        <div className="text-gray-500 text-sm dark:text-white">{key}</div>
                      </div>
                    ))}
                  </div>
                  
                </div>
              </div>
            ))}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${index === activeCase ? 'bg-[#2874f0]' : 'bg-gray-300'}`}
                  onClick={() => handleDotClick(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 bg-gray-100 px-4 dark:bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 dark:text-white">{t.eventsTitle}</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto dark:text-white">
            {t.eventsSubtitle}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            {upcomingEvents.map(event => (
              <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 dark:bg-gray-800">
                <div className="relative">
                  <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
                  <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                    {event.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
                  <div className="space-y-2 mb-4">
                    <p className="text-gray-600 flex items-center dark:text-white">
                      <i className="fas fa-calendar-alt text-blue-600 mr-2"></i> 
                      {event.date}
                    </p>
                    <p className="text-gray-600 flex items-center dark:text-white">
                      <i className="fas fa-map-marker-alt text-blue-600 mr-2"></i> 
                      {event.location}
                    </p>
                  </div>
                  <button 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300"
                    onClick={() => handleNavigation("/contact")}
                  >
                    {t.registerNow}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Content Sections */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">{t.caseEvaluationTitle}</h2>
          <p className="text-gray-600 mb-4 dark:text-white">
            {t.caseEvaluationText1}
          </p>
          <p className="text-gray-600 dark:text-white">
            {t.caseEvaluationText2}
          </p>
        </div>

        <hr className="my-12 border-gray-200" />

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">{t.legalStrategyTitle}</h2>
          <p className="text-gray-600 mb-4 dark:text-white">
            {t.legalStrategyText1}
          </p>
          <p className="text-gray-600 dark:text-white">
            {t.legalStrategyText2}
          </p>
        </div>

        <hr className="my-12 border-gray-200" />

        <div>
          <h2 className="text-3xl font-bold mb-6">{t.caseResolutionTitle}</h2>
          <p className="text-gray-600 mb-4 dark:text-white">
            {t.caseResolutionText1}
          </p>
          <p className="text-gray-600 dark:text-white">
            {t.caseResolutionText2}
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/3 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">{t.ctaTitle}</h2>
            <p className="text-blue-100 max-w-2xl">
              {t.ctaText}
            </p>
          </div>
          <button 
            className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg transition duration-300 whitespace-nowrap"
            onClick={() => handleNavigation("/contact")}
          >
            {t.ctaButton}
          </button>
        </div>
      </section>

      

      
    </div>
  );
};

export default Blog;