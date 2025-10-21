import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import service6 from "../images/service6.jpg";
import { FaPassport, FaUserCheck, FaHandshake, FaFileContract, FaShieldAlt, FaGlobeAmericas } from 'react-icons/fa';
import videohero from "../images/law-service2.mp4";
import { motion } from "framer-motion";

const Immigration= () => {
  const navigate = useNavigate();
  const darkMode = document.documentElement.classList.contains('dark');
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'en';
  });

  useEffect(() => {
    const handleLanguageChange = (event) => {
      setLanguage(event.detail);
    };

    window.addEventListener('languageChange', handleLanguageChange);
    return () => {
      window.removeEventListener('languageChange', handleLanguageChange);
    };
  }, []);

  const translations = {
    en: {
      hero: {
        title: "Immigration Solutions for Your Future",
        subtitle: "Navigating the path to residency, citizenship, and opportunity with trusted legal guidance."
      },
      introduction: {
        title: "Immigration Legal Expertise",
        description1: "Immigration law is complex and ever-changing. Our experienced team helps individuals, families, and businesses achieve their immigration goals, from visas and green cards to citizenship and deportation defense.",
        description2: "We provide clear guidance and strong advocacy, ensuring your case is handled with care and precision every step of the way.",
        features: ["Visa Applications", "Green Cards & Residency", "Citizenship & Naturalization"]
      },
      services: {
        title: "Our Immigration Legal Services",
        subtitle: "Comprehensive immigration solutions for individuals, families, and businesses",
        service1: {
          title: "Visa Applications",
          description: "Assistance with all types of visas, including work, student, family, and visitor visas.",
          features: ["Work & employment visas", "Student & exchange visas", "Family & fiancé visas"]
        },
        service2: {
          title: "Green Cards & Residency",
          description: "Guidance through the process of obtaining lawful permanent residency for you and your loved ones.",
          features: ["Family-based green cards", "Employment-based green cards", "Adjustment of status"]
        },
        service3: {
          title: "Citizenship & Naturalization",
          description: "Support for those seeking U.S. citizenship through naturalization and related processes.",
          features: ["Naturalization applications", "Citizenship interviews & tests", "Dual citizenship guidance"]
        },
        service4: {
          title: "Business Immigration",
          description: "Solutions for employers and entrepreneurs, including investor visas and global mobility.",
          features: ["Investor & entrepreneur visas", "Global talent mobility", "Corporate immigration compliance"]
        },
        service5: {
          title: "Deportation Defense",
          description: "Aggressive defense against removal and deportation, including appeals and waivers.",
          features: ["Removal proceedings", "Appeals & waivers", "Bond hearings"]
        },
        service6: {
          title: "Humanitarian Immigration",
          description: "Support for refugees, asylum seekers, and victims of violence or trafficking.",
          features: ["Asylum & refugee status", "U & T visas for victims", "Temporary protected status"]
        }
      },
      clientStory: {
        title: "Client Success: The Martinez Family",
        description: "The Martinez family overcame a complex immigration challenge with our help, securing lawful permanent residency and reuniting loved ones after years of separation.",
        stats: [
          { number: "5", label: "Family members reunited" },
          { number: "2", label: "Years to resolve case" },
          { number: "100%", label: "Successful outcome" },
          { number: "3", label: "Countries involved" }
        ],
        button: "Read Full Case Study"
      },
      whyChoose: {
        title: "Why Choose Our Immigration Legal Services",
        subtitle: "Experience the difference that expert, caring immigration support can make for your future",
        reasons: [
          {
            title: "Personalized Guidance",
            description: "We tailor our approach to your unique immigration goals and challenges"
          },
          {
            title: "Clear Communication",
            description: "We keep you informed and confident throughout your immigration journey"
          },
          {
            title: "Proven Results",
            description: "Successful outcomes for families, individuals, and businesses"
          },
          {
            title: "Dedicated Support",
            description: "We stand by you from start to finish, every step of the way"
          }
        ]
      },
      cta: {
        title: "Ready to Begin Your Immigration Journey?",
        subtitle: "Schedule a consultation with our immigration law team to discuss your options and secure your future.",
        buttons: ["Contact Us Today", "Browse All Services"]
      }
    },
    ar: {
      hero: {
        title: "حلول الهجرة لمستقبلك",
        subtitle: "التنقل في طريق الإقامة والمواطنة والفرص مع الإرشاد القانوني الموثوق."
      },
      introduction: {
        title: "خبرة قانونية في الهجرة",
        description1: "قانون الهجرة معقد ومتغير باستمرار. فريقنا ذو الخبرة يساعد الأفراد والعائلات والشركات على تحقيق أهداف الهجرة، من التأشيرات والبطاقات الخضراء إلى المواطنة والدفاع ضد الترحيل.",
        description2: "نحن نقدم إرشادات واضحة ودفاعاً قوياً، مما يضمن التعامل مع قضيتك بعناية ودقة في كل خطوة.",
        features: ["طلبات التأشيرة", "البطاقات الخضراء والإقامة", "المواطنة والتجنس"]
      },
      services: {
        title: "خدماتنا القانونية للهجرة",
        subtitle: "حلول هجرة شاملة للأفراد والعائلات والشركات",
        service1: {
          title: "طلبات التأشيرة",
          description: "المساعدة في جميع أنواع التأشيرات، بما في ذلك تأشيرات العمل والدراسة والعائلة والزيارة.",
          features: ["تأشيرات العمل والتوظيف", "تأشيرات الطلاب والتبادل", "تأشيرات العائلة والخطوبة"]
        },
        service2: {
          title: "البطاقات الخضراء والإقامة",
          description: "الإرشاد خلال عملية الحصول على الإقامة الدائمة القانونية لك ولأحبائك.",
          features: ["البطاقات الخضراء العائلية", "البطاقات الخضراء المرتبطة بالعمل", "تعديل الوضع"]
        },
        service3: {
          title: "المواطنة والتجنس",
          description: "الدعم لأولئك الذين يسعون للحصول على الجنسية الأمريكية من خلال التجنس والعمليات ذات الصلة.",
          features: ["طلبات التجنس", "مقابلات وامتحانات المواطنة", "إرشادات الجنسية المزدوجة"]
        },
        service4: {
          title: "هجرة الأعمال",
          description: "حلول لأصحاب العمل ورجال الأعمال، بما في ذلك تأشيرات المستثمرين والتنقل العالمي.",
          features: ["تأشيرات المستثمرين ورجال الأعمال", "تنقل المواهب العالمية", "امتثال هجرة الشركات"]
        },
        service5: {
          title: "الدفاع ضد الترحيل",
          description: "دفاع قوي ضد الإبعاد والترحيل، بما في ذلك الاستئنافات والإعفاءات.",
          features: ["إجراءات الإبعاد", "الاستئنافات والإعفاءات", "جلسات الكفالة"]
        },
        service6: {
          title: "الهجرة الإنسانية",
          description: "الدعم للاجئين وطالبي اللجوء وضحايا العنف أو الاتجار.",
          features: ["وضع اللجوء واللاجئين", "تأشيرات U و T للضحايا", "الوضع المحمي المؤقت"]
        }
      },
      clientStory: {
        title: "نجاح العميل: عائلة مارتينيز",
        description: "تغلبت عائلة مارتينيز على تحدي هجرة معقد بمساعدتنا، وحصلت على الإقامة الدائمة القانونية ولم شمل الأحباء بعد سنوات من الانفصال.",
        stats: [
          { number: "5", label: "أفراد العائلة المجتمعين" },
          { number: "2", label: "سنوات لحل القضية" },
          { number: "100%", label: "نتيجة ناجحة" },
          { number: "3", label: "دول مشاركة" }
        ],
        button: "اقرأ دراسة الحالة الكاملة"
      },
      whyChoose: {
        title: "لماذا تختار خدماتنا القانونية للهجرة",
        subtitle: "اختبر الفرق الذي يمكن أن يحدثه الدعم المتخصص والمهتم للهجرة لمستقبلك",
        reasons: [
          {
            title: "إرشاد شخصي",
            description: "نحن نصمم نهجنا وفقاً لأهداف وتحديات الهجرة الفريدة الخاصة بك"
          },
          {
            title: "تواصل واضح",
            description: "نحافظ على إعلامك وثقتك طوال رحلة الهجرة الخاصة بك"
          },
          {
            title: "نتائج مثبتة",
            description: "نتائج ناجحة للعائلات والأفراد والشركات"
          },
          {
            title: "دعم مخصص",
            description: "نقف بجانبك من البداية إلى النهاية، في كل خطوة على الطريق"
          }
        ]
      },
      cta: {
        title: "هل أنت مستعد لبدء رحلة الهجرة الخاصة بك؟",
        subtitle: "حدد موعداً للاستشارة مع فريق قانون الهجرة لدينا لمناقشة خياراتك وتأمين مستقبلك.",
        buttons: ["اتصل بنا اليوم", "تصفح جميع الخدمات"]
      }
    },
    he: {
      hero: {
        title: "פתרונות הגירה לעתידכם",
        subtitle: "ניווט בדרך לתושבות, אזרחות והזדמנויות עם הדרכה משפטית מהימנה."
      },
      introduction: {
        title: "מומחיות משפטית בהגירה",
        description1: "דיני ההגירה מורכבים ומשתנים כל הזמן. הצוות המנוסה שלנו עוזר ליחידים, משפחות ועסקים להשיג את מטרות ההגירה שלהם, מויזות וכרטיסים ירוקים ועד אזרחות והגנה מפני גירוש.",
        description2: "אנו מספקים הדרכה ברורה וסנגוריה חזקה, מבטיחים שהתיק שלכם יטופל בזהירות ובדיוק בכל שלב.",
        features: ["בקשות ויזה", "כרטיסים ירוקים ותושבות", "אזרחות והתאזרחות"]
      },
      services: {
        title: "השירותים המשפטיים שלנו להגירה",
        subtitle: "פתרונות הגירה מקיפים ליחידים, משפחות ועסקים",
        service1: {
          title: "בקשות ויזה",
          description: "סיוע בכל סוגי הויזות, כולל ויזות עבודה, סטודנטים, משפחה ומבקרים.",
          features: ["ויזות עבודה ותעסוקה", "ויזות סטודנטים וחילופין", "ויזות משפחה וארוסין"]
        },
        service2: {
          title: "כרטיסים ירוקים ותושבות",
          description: "הדרכה דרך תהליך השגת תושבות קבועה חוקית עבורכם ועבור יקיריכם.",
          features: ["כרטיסים ירוקים משפחתיים", "כרטיסים ירוקים מבוססי תעסוקה", "התאמת סטטוס"]
        },
        service3: {
          title: "אזרחות והתאזרחות",
          description: "תמיכה לאלה המבקשים אזרחות אמריקאית דרך התאזרחות ותהליכים קשורים.",
          features: ["בקשות התאזרחות", "ראיונות ומבחני אזרחות", "הדרכה לאזרחות כפולה"]
        },
        service4: {
          title: "הגירת עסקים",
          description: "פתרונות למעסיקים ויזמים, כולל ויזות משקיעים וניידות גלובלית.",
          features: ["ויזות משקיעים ויזמים", "ניידות כישרונות גלובלית", "ציות הגירת תאגידים"]
        },
        service5: {
          title: "הגנה מפני גירוש",
          description: "הגנה אגרסיבית נגד הרחקה וגירוש, כולל ערעורים וויתורים.",
          features: ["הליכי הרחקה", "ערעורים וויתורים", "דיוני ערבות"]
        },
        service6: {
          title: "הגירה הומניטרית",
          description: "תמיכה לפליטים, מבקשי מקלט וקורבנות אלימות או סחר.",
          features: ["סטטוס מקלט ופליטים", "ויזות U ו-T לקורבנות", "סטטוס מוגן זמני"]
        }
      },
      clientStory: {
        title: "הצלחת לקוח: משפחת מרטינס",
        description: "משפחת מרטינס התגברה על אתגר הגירה מורכב בעזרתנו, השיגה תושבות קבועה חוקית ואיחדה יקירים לאחר שנים של פירוד.",
        stats: [
          { number: "5", label: "בני משפחה שאוחדו" },
          { number: "2", label: "שנים לפתור את התיק" },
          { number: "100%", label: "תוצאה מוצלחת" },
          { number: "3", label: "מדינות מעורבות" }
        ],
        button: "קרא את מחקר המקרה המלא"
      },
      whyChoose: {
        title: "למה לבחור בשירותים המשפטיים שלנו להגירה",
        subtitle: "חוו את ההבדל שתמיכה מומחית ואכפתית בהגירה יכולה לעשות לעתידכם",
        reasons: [
          {
            title: "הדרכה אישית",
            description: "אנו מתאימים את הגישה שלנו למטרות ואתגרי ההגירה הייחודיים שלכם"
          },
          {
            title: "תקשורת ברורה",
            description: "אנו שומרים עליכם מעודכנים ובטוחים לאורך מסע ההגירה שלכם"
          },
          {
            title: "תוצאות מוכחות",
            description: "תוצאות מוצלחות למשפחות, יחידים ועסקים"
          },
          {
            title: "תמיכה מסורה",
            description: "אנו עומדים לצידכם מההתחלה ועד הסוף, בכל שלב בדרך"
          }
        ]
      },
      cta: {
        title: "מוכנים להתחיל את מסע ההגירה שלכם?",
        subtitle: "קבעו ייעוץ עם צוות דיני ההגירה שלנו כדי לדון באפשרויות שלכם ולהבטיח את עתידכם.",
        buttons: ["צרו איתנו קשר היום", "עיינו בכל השירותים"]
      }
    }
  };

  const currentTranslations = translations[language] || translations.en;

  const handleGetStarted = (path) => {
    navigate(path);
  };

  return (
    <div className={`${darkMode ? "min-h-screen bg-gray-900 text-white" : "min-h-screen bg-gray-50 text-gray-800"} ${language === 'ar' || language === 'he' ? 'rtl' : 'ltr'}`}>

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
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">{currentTranslations.hero.title}</h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">{currentTranslations.hero.subtitle}</p>
        </div>
      </section>

      {/* Immigration Law Introduction */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img
                src={service6}
                alt="Immigration Law Introduction"
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{currentTranslations.introduction.title}</h2>
              <p className="text-lg mb-6">
                {currentTranslations.introduction.description1}
              </p>
              <p className="text-lg mb-8">
                {currentTranslations.introduction.description2}
              </p>
              <div className="flex flex-wrap gap-4">
                {currentTranslations.introduction.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase Section */}
      <section className={`py-16 px-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{currentTranslations.services.title}</h2>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
            {currentTranslations.services.subtitle}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className={`rounded-xl p-6 shadow-md transition-all hover:shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <FaPassport className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{currentTranslations.services.service1.title}</h3>
              <p className="mb-4">
                {currentTranslations.services.service1.description}
              </p>
              <ul className="space-y-2 mb-6">
                {currentTranslations.services.service1.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service 2 */}
            <div className={`rounded-xl p-6 shadow-md transition-all hover:shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <FaUserCheck className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{currentTranslations.services.service2.title}</h3>
              <p className="mb-4">
                {currentTranslations.services.service2.description}
              </p>
              <ul className="space-y-2 mb-6">
                {currentTranslations.services.service2.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service 3 */}
            <div className={`rounded-xl p-6 shadow-md transition-all hover:shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <FaHandshake className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{currentTranslations.services.service3.title}</h3>
              <p className="mb-4">
                {currentTranslations.services.service3.description}
              </p>
              <ul className="space-y-2 mb-6">
                {currentTranslations.services.service3.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service 4 */}
            <div className={`rounded-xl p-6 shadow-md transition-all hover:shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <FaFileContract className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{currentTranslations.services.service4.title}</h3>
              <p className="mb-4">
                {currentTranslations.services.service4.description}
              </p>
              <ul className="space-y-2 mb-6">
                {currentTranslations.services.service4.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service 5 */}
            <div className={`rounded-xl p-6 shadow-md transition-all hover:shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <FaShieldAlt className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{currentTranslations.services.service5.title}</h3>
              <p className="mb-4">
                {currentTranslations.services.service5.description}
              </p>
              <ul className="space-y-2 mb-6">
                {currentTranslations.services.service5.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service 6 */}
            <div className={`rounded-xl p-6 shadow-md transition-all hover:shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <FaGlobeAmericas className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{currentTranslations.services.service6.title}</h3>
              <p className="mb-4">
                {currentTranslations.services.service6.description}
              </p>
              <ul className="space-y-2 mb-6">
                {currentTranslations.services.service6.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
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
                <h2 className="text-3xl font-bold mb-6">{currentTranslations.clientStory.title}</h2>
                <p className="text-lg mb-6">
                  {currentTranslations.clientStory.description}
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {currentTranslations.clientStory.stats.map((stat, index) => (
                    <div key={index}>
                      <div className="text-2xl font-bold text-blue-600">{stat.number}</div>
                      <div className="text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <button 
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                  onClick={() => handleGetStarted("/case-studies")}
                >
                  {currentTranslations.clientStory.button}
                </button>
              </div>
              <div className="lg:w-1/2">
                <img
                  src={service6}
                  alt="Immigration Law Case Study"
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{currentTranslations.whyChoose.title}</h2>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
            {currentTranslations.whyChoose.subtitle}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentTranslations.whyChoose.reasons.map((reason, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                  {index === 0 && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  )}
                  {index === 1 && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  )}
                  {index === 2 && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )}
                  {index === 3 && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{currentTranslations.cta.title}</h2>
          <p className="text-xl mb-8">
            {currentTranslations.cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-8 py-3 bg-white text-blue-600 hover:bg-gray-100 font-medium rounded-lg transition-colors"
              onClick={() => handleGetStarted("/contact")}
            >
              {currentTranslations.cta.buttons[0]}
            </button>
            <button 
              className="px-8 py-3 border border-white text-white hover:bg-blue-700 font-medium rounded-lg transition-colors"
              onClick={() => handleGetStarted("/services")}
            >
              {currentTranslations.cta.buttons[1]}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Immigration;