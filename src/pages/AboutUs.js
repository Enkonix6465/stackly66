import { useRef, useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Add this import
import about1 from '../images/about-1.jpg';
import about2 from '../images/about-2.jpg';
import videohero from "../images/about-law.mp4";
import team1 from '../images/team1.jpg';
import team2 from '../images/team2.jpg';
import team3 from '../images/team3.jpg';
import team4 from '../images/team4.jpg';

// Translations object for multi-language support
const translations = {
  en: {
    // Hero Section
    heroTitle: "Legal Expertise You Can Trust",
    heroSubtitle: "Protecting your rights and interests with decades of experience and a proven track record.",

    // Mission Section
    missionTitle: "Our Mission",
    missionQuote: "To provide exceptional legal representation with unwavering integrity, personalized attention, and a commitment to achieving the best possible outcomes for our clients.",
    philosophyTitle: "Our Philosophy",
    philosophyText1: "At Liberty Legal Partners, we believe that every client deserves dedicated, knowledgeable legal representation. Our approach combines extensive legal expertise with a deep understanding of our clients' unique needs and objectives.",
    philosophyText2: "We pride ourselves on building long-term relationships with our clients, serving as trusted advisors who provide not just legal solutions but strategic guidance for their most complex challenges.",
    valuesTitle: "Our Values",
    integrityLabel: "Integrity:",
    integrityText: "Uncompromising ethical standards in all we do",
    excellenceLabel: "Excellence:",
    excellenceText: "Commitment to the highest quality legal work",
    clientFocusLabel: "Client Focus:",
    clientFocusText: "Personalized attention and tailored solutions",
    innovationLabel: "Innovation:",
    innovationText: "Creative approaches to complex legal challenges",

    // Journey Section
    journeyTitle: "Our Journey",
    journeySubtitle: "For nearly two decades, we have been dedicated to serving our clients with excellence and integrity.",

    // Timeline Data
    timeline: [
      { year: '2005', title: 'Firm Establishment', description: 'Founded with a vision to provide exceptional legal services with integrity and excellence.' },
      { year: '2010', title: 'First Major Case', description: 'Successfully represented a Fortune 500 company in a landmark corporate litigation case.' },
      { year: '2015', title: 'International Expansion', description: 'Opened our first international office in London to serve global clients.' },
      { year: '2020', title: 'Digital Transformation', description: 'Implemented advanced technology solutions for more efficient client service.' },
      { year: '2023', title: 'Pro Bono Initiative', description: 'Launched our community outreach program, providing free legal services to those in need.' },
    ],

    // Legacy Section
    legacyTitle: "Our Enduring Legacy",
    legacySubtitle: "For generations, we have built a reputation founded on excellence, integrity, and transformative legal advocacy.",
    pioneeringTitle: "Pioneering Legal Excellence",
    pioneeringText: "Since our founding, we have consistently pushed the boundaries of legal practice, setting precedents that have shaped industry standards and influenced jurisprudence across multiple practice areas.",
    casesWon: "Cases Won",
    clientSatisfaction: "Client Satisfaction",
    yearsExperience: "Years Experience",
    trustTitle: "Building Trust Through Generations",
    trustText: "Our firm has represented families and businesses across generations, building relationships that span decades. This continuity allows us to provide unparalleled insight and consistency in our legal counsel.",
    trustQuote: "The measure of a great law firm is not in cases won, but in trust earned and maintained over time.",

    // Team Section
    teamTitle: "Our Legal Team",
    teamSubtitle: "Our attorneys bring decades of combined experience and a track record of success in complex legal matters.",

    // Team Members
    teamMembers: [
      { name: 'Robert Johnson', role: 'Senior Partner', specialty: 'Corporate Law' },
      { name: 'Sarah Williams', role: 'Partner', specialty: 'Litigation' },
      { name: 'Michael Chen', role: 'Partner', specialty: 'Intellectual Property' },
      { name: 'Elizabeth Martinez', role: 'Senior Associate', specialty: 'Family Law' },
    ],

    // Practice Areas
    practiceAreas: [
      { title: 'Corporate Law', description: 'Business formation, mergers & acquisitions, compliance, and corporate governance.' },
      { title: 'Real Estate Law', description: 'Property transactions, zoning, landlord-tenant disputes, and development.' },
      { title: 'Family Law', description: 'Divorce, child custody, adoption, and other domestic matters.' },
      { title: 'Estate Planning', description: 'Wills, trusts, probate, and estate administration.' },
    ],

    // CTA Section
    ctaTitle: "Schedule a Consultation",
    ctaText: "Contact us today to discuss your legal needs and learn how our experienced team can help you achieve your objectives.",
    ctaButton: "Contact Our Office"
  },
  ar: {
    // Hero Section
    heroTitle: "خبرة قانونية يمكنكم الوثوق بها",
    heroSubtitle: "حماية حقوقكم ومصالحكم بعقود من الخبرة وسجل حافل بالنجاحات.",

    // Mission Section
    missionTitle: "مهمتنا",
    missionQuote: "تقديم تمثيل قانوني استثنائي بنزاهة لا تتزعزع واهتمام شخصي والتزام بتحقيق أفضل النتائج الممكنة لعملائنا.",
    philosophyTitle: "فلسفتنا",
    philosophyText1: "في شركة ليبرتي القانونية، نؤمن أن كل عميل يستحق تمثيلاً قانونياً مخصصاً ومدروساً. يجمع نهجنا بين الخبرة القانونية الواسعة والفهم العميق لاحتياجات وأهداف عملائنا الفريدة.",
    philosophyText2: "نفخر ببناء علاقات طويلة الأمد مع عملائنا، ونعمل كمستشارين موثوقين يقدمون ليس فقط الحلول القانونية ولكن أيضاً التوجيه الاستراتيجي لأكثر تحدياتهم تعقيداً.",
    valuesTitle: "قيمنا",
    integrityLabel: "النزاهة:",
    integrityText: "معايير أخلاقية لا تتنازل عنها في كل ما نقوم به",
    excellenceLabel: "التميز:",
    excellenceText: "الالتزام بأعلى جودة في العمل القانوني",
    clientFocusLabel: "التركيز على العميل:",
    clientFocusText: "اهتمام شخصي وحلول مخصصة",
    innovationLabel: "الابتكار:",
    innovationText: "مناهج إبداعية للتحديات القانونية المعقدة",

    // Journey Section
    journeyTitle: "رحلتنا",
    journeySubtitle: "لما يقارب عقدين من الزمان، كرسنا جهودنا لخدمة عملائنا بتميز ونزاهة.",

    // Timeline Data
    timeline: [
      { year: '2005', title: 'تأسيس الشركة', description: 'تأسست برؤية لتقديم خدمات قانونية استثنائية بنزاهة وتميز.' },
      { year: '2010', title: 'أول قضية كبرى', description: 'مثلنا بنجاح شركة من فورتشن 500 في قضية تقاضي مؤسسي بارزة.' },
      { year: '2015', title: 'التوسع الدولي', description: 'افتتحنا أول مكتب دولي لنا في لندن لخدمة العملاء العالميين.' },
      { year: '2020', title: 'التحول الرقمي', description: 'طبقنا حلول تكنولوجية متقدمة لخدمة عملاء أكثر كفاءة.' },
      { year: '2023', title: 'مبادرة الخدمة المجانية', description: 'أطلقنا برنامج التواصل المجتمعي، نقدم خدمات قانونية مجانية للمحتاجين.' },
    ],

    // Legacy Section
    legacyTitle: "إرثنا الدائم",
    legacySubtitle: "لأجيال، بنينا سمعة مؤسسة على التميز والنزاهة والدفاع القانوني التحويلي.",
    pioneeringTitle: "ريادة التميز القانوني",
    pioneeringText: "منذ تأسيسنا، دفعنا باستمرار حدود الممارسة القانونية، ووضعنا سوابق شكلت معايير الصناعة وأثرت على الفقه القانوني في مجالات ممارسة متعددة.",
    casesWon: "قضايا منتصرة",
    clientSatisfaction: "رضا العملاء",
    yearsExperience: "سنوات الخبرة",
    trustTitle: "بناء الثقة عبر الأجيال",
    trustText: "مثلت شركتنا العائلات والشركات عبر الأجيال، وبنت علاقات تمتد لعقود. هذا الاستمرار يتيح لنا تقديم بصيرة وثبات لا مثيل لهما في استشاراتنا القانونية.",
    trustQuote: "مقياس الشركة القانونية العظيمة ليس في القضايا المنتصرة، ولكن في الثقة المكتسبة والمحافظ عليها عبر الزمن.",

    // Team Section
    teamTitle: "فريقنا القانوني",
    teamSubtitle: "يجلب محامونا عقوداً من الخبرة المجمعة وسجل نجاح في القضايا القانونية المعقدة.",

    // Team Members
    teamMembers: [
      { name: 'روبرت جونسون', role: 'شريك أول', specialty: 'القانون المؤسسي' },
      { name: 'سارة ويليامز', role: 'شريك', specialty: 'التقاضي' },
      { name: 'مايكل تشين', role: 'شريك', specialty: 'الملكية الفكرية' },
      { name: 'إليزابيث مارتينيز', role: 'مشارك أول', specialty: 'قانون الأسرة' },
    ],

    // Practice Areas
    practiceAreas: [
      { title: 'القانون المؤسسي', description: 'تكوين الأعمال، عمليات الدمج والاستحواذ، الامتثال، والحوكمة المؤسسية.' },
      { title: 'قانون العقارات', description: 'معاملات الممتلكات، تقسيم المناطق، نزاعات المالك والمستأجر، والتطوير.' },
      { title: 'قانون الأسرة', description: 'الطلاق، حضانة الأطفال، التبني، وأمور أسرية أخرى.' },
      { title: 'تخطيط التركات', description: 'الوصايا، الصناديق الاستئمانية، الوصاية، وإدارة التركات.' },
    ],

    // CTA Section
    ctaTitle: "حدد موعد استشارة",
    ctaText: "اتصل بنا اليوم لمناقشة احتياجاتكم القانونية وتعلم كيف يمكن لفريقنا ذو الخبرة مساعدتكم في تحقيق أهدافكم.",
    ctaButton: "اتصل بمكتبنا"
  },
  he: {
    // Hero Section
    heroTitle: "מומחיות משפטית שניתן לסמוך עליה",
    heroSubtitle: "הגנה על זכויותיכם ואינטרסים שלכם עם עשרות שנות ניסיון ורקורד הוכח של הצלחה.",

    // Mission Section
    missionTitle: "המשימה שלנו",
    missionQuote: "לספק ייצוג משפטי יוצא דופן עם יושרה בלתי מתערערת, תשומת לב אישית והתחייבות להשגת התוצאות הטובות ביותר האפשריות עבור לקוחותינו.",
    philosophyTitle: "הפילוסופיה שלנו",
    philosophyText1: "ב-Liberty Legal Partners, אנו מאמינים שכל לקוח זכאי לייצוג משפטי מסור ובעל ידע. הגישה שלנו משלבת מומחיות משפטית נרחבת עם הבנה עמוקה של הצרכים והיעדים הייחודיים של לקוחותינו.",
    philosophyText2: "אנו מתגאים בבניית יחסים ארוכי טווח עם לקוחותינו, משרתים כיועצים מהימנים המספקים לא רק פתרונות משפטיים אלא גם הדרכה אסטרטגית לאתגרים המורכבים ביותר שלהם.",
    valuesTitle: "הערכים שלנו",
    integrityLabel: "יושרה:",
    integrityText: "סטנדרטים אתיים בלתי מתפשרים בכל מה שאנו עושים",
    excellenceLabel: "מצוינות:",
    excellenceText: "מחויבות לאיכות הגבוהה ביותר בעבודה משפטית",
    clientFocusLabel: "מיקוד בלקוח:",
    clientFocusText: "תשומת לב אישית ופתרונות מותאמים",
    innovationLabel: "חדשנות:",
    innovationText: "גישות יצירתיות לאתגרים משפטיים מורכבים",

    // Journey Section
    journeyTitle: "המסע שלנו",
    journeySubtitle: "במשך כמעט שני עשורים, התמסרנו לשרת את לקוחותינו במצוינות ויושרה.",

    // Timeline Data
    timeline: [
      { year: '2005', title: 'הקמת המשרד', description: 'נוסד עם חזון לספק שירותים משפטיים יוצאי דופן ביושרה ומצוינות.' },
      { year: '2010', title: 'התיק הגדול הראשון', description: 'ייצגנו בהצלחה חברת Fortune 500 בתיק ליטיגציה תאגידי פורץ דרך.' },
      { year: '2015', title: 'התרחבות בינלאומית', description: 'פתחנו את המשרד הבינלאומי הראשון שלנו בלונדון כדי לשרת לקוחות גלובליים.' },
      { year: '2020', title: 'טרנספורמציה דיגיטלית', description: 'יישמנו פתרונות טכנולוגיים מתקדמים לשירות לקוחות יעיל יותר.' },
      { year: '2023', title: 'יוזמת פרו בונו', description: 'השקנו את תוכנית ההסברה הקהילתית שלנו, המספקת שירותים משפטיים חינם לנזקקים.' },
    ],

    // Legacy Section
    legacyTitle: "המורשת הנצחית שלנו",
    legacySubtitle: "במשך דורות, בנינו מוניטין המבוסס על מצוינות, יושרה וסנגוריה משפטית משנה חיים.",
    pioneeringTitle: "חלוצי מצוינות משפטית",
    pioneeringText: "מאז הקמתנו, דחפנו באופן עקבי את גבולות הפרקטיקה המשפטית, קבענו תקדימים שעיצבו סטנדרטים תעשייתיים והשפיעו על הפסיקה במספר תחומי פרקטיקה.",
    casesWon: "תיקים שזכו",
    clientSatisfaction: "שביעות רצון לקוחות",
    yearsExperience: "שנות ניסיון",
    trustTitle: "בניית אמון על פני דורות",
    trustText: "המשרד שלנו ייצג משפחות ועסקים על פני דורות, בונה יחסים הנמשכים עשרות שנים. הרציפות הזו מאפשרת לנו לספק תובנה ועקביות ללא תחרות בייעוץ המשפטי שלנו.",
    trustQuote: "המדד למשרד עורכי דין גדול אינו בתיקים שזכו, אלא באמון שנרכש ונשמר לאורך זמן.",

    // Team Section
    teamTitle: "הצוות המשפטי שלנו",
    teamSubtitle: "עורכי הדין שלנו מביאים עשרות שנות ניסיון משולב ורקורד הצלחה בענייני משפט מורכבים.",

    // Team Members
    teamMembers: [
      { name: 'רוברט ג\'ונסון', role: 'שותף בכיר', specialty: 'משפט תאגידי' },
      { name: 'שרה ויליאמס', role: 'שותפה', specialty: 'ליטיגציה' },
      { name: 'מייקל צ\'ן', role: 'שותף', specialty: 'קניין רוחני' },
      { name: 'אליזבת מרטינז', role: 'שותפה בכירה', specialty: 'משפט משפחה' },
    ],

    // Practice Areas
    practiceAreas: [
      { title: 'משפט תאגידי', description: 'הקמת עסקים, מיזוגים ורכישות, ציות, וממשל תאגידי.' },
      { title: 'משפט נדל"ן', description: 'עסקאות נכסים, אזוור, סכסוכי בעל-שוכר, ופיתוח.' },
      { title: 'משפט משפחה', description: 'גירושין, משמורת ילדים, אימוץ, ועניינים משפחתיים אחרים.' },
      { title: 'תכנון עיזבון', description: 'צוואות, נאמנויות, צווי קיום צוואה, וניהול עיזבונות.' },
    ],

    // CTA Section
    ctaTitle: "קבעו פגישת ייעוץ",
    ctaText: "צרו איתנו קשר היום כדי לדון בצרכים המשפטיים שלכם ולהיכר עם הדרך שבה הצוות המנוסה שלנו יכול לעזור לכם להשיג את היעדים שלכם.",
    ctaButton: "צרו קשר עם המשרד שלנו"
  }
};

function AboutUs() {
  const navigate = useNavigate(); // Add this hook
  const videoRef = useRef(null);
  const [language, setLanguage] = useState('en');

  // Get current translation data
  const t = translations[language];

  // Dynamic data based on current language
  const practiceAreas = [
    { icon: '⚖️', title: t.practiceAreas[0].title, description: t.practiceAreas[0].description },
    { icon: '🏠', title: t.practiceAreas[1].title, description: t.practiceAreas[1].description },
    { icon: '👨‍👩‍👧‍👦', title: t.practiceAreas[2].title, description: t.practiceAreas[2].description },
    { icon: '📝', title: t.practiceAreas[3].title, description: t.practiceAreas[3].description },
  ];

  // Team members data with translation
  const teamMembers = [
    { name: t.teamMembers[0].name, role: t.teamMembers[0].role, specialty: t.teamMembers[0].specialty, image: team1 },
    { name: t.teamMembers[1].name, role: t.teamMembers[1].role, specialty: t.teamMembers[1].specialty, image: team2 },
    { name: t.teamMembers[2].name, role: t.teamMembers[2].role, specialty: t.teamMembers[2].specialty, image: team3 },
    { name: t.teamMembers[3].name, role: t.teamMembers[3].role, specialty: t.teamMembers[3].specialty, image: team4 },
  ];

  // Timeline data with translation
  const timelineData = t.timeline;

  // Refs for scroll animations
  const storyRef = useRef(null);
  const practiceRef = useRef(null);
  const teamRef = useRef(null);

  const [storyVisible, setStoryVisible] = useState(false);
  const [practiceVisible, setPracticeVisible] = useState(false);
  const [teamVisible, setTeamVisible] = useState(false);

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

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

    const storyObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setStoryVisible(true);
        storyObserver.unobserve(entry.target);
      }
    }, observerOptions);

    const practiceObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setPracticeVisible(true);
        practiceObserver.unobserve(entry.target);
      }
    }, observerOptions);

    const teamObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTeamVisible(true);
        teamObserver.unobserve(entry.target);
      }
    }, observerOptions);

    const currentStoryRef = storyRef.current;
    const currentPracticeRef = practiceRef.current;
    const currentTeamRef = teamRef.current;

    if (currentStoryRef) storyObserver.observe(currentStoryRef);
    if (currentPracticeRef) practiceObserver.observe(currentPracticeRef);
    if (currentTeamRef) teamObserver.observe(currentTeamRef);

    return () => {
      if (currentStoryRef) storyObserver.unobserve(currentStoryRef);
      if (currentPracticeRef) practiceObserver.unobserve(currentPracticeRef);
      if (currentTeamRef) teamObserver.unobserve(currentTeamRef);
    };
  }, []);
  const legacyRef = useRef(null);
  const [legacyVisible, setLegacyVisible] = useState(false);
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

    const legacyObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setLegacyVisible(true);
        legacyObserver.unobserve(entry.target);
      }
    }, observerOptions);

    const currentLegacyRef = legacyRef.current;

    if (currentLegacyRef) legacyObserver.observe(currentLegacyRef);

    return () => {
      if (currentLegacyRef) legacyObserver.unobserve(currentLegacyRef);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
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

      {/* Mission Section */}
      <section className="py-20 px-4 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-black dark:text-white">{t.missionTitle}</h2>
            <div className="w-20 h-1 bg-[#2874f0] mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-[#2874f0] italic max-w-4xl mx-auto">
              "{t.missionQuote}"
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-serif font-semibold mb-6 text-black dark:text-white">{t.philosophyTitle}</h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                {t.philosophyText1}
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                {t.philosophyText2}
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-semibold mb-6 text-black dark:text-white">{t.valuesTitle}</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[#2874f0] text-xl mr-2">•</span>
                  <span className="text-lg"><strong>{t.integrityLabel}</strong> {t.integrityText}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2874f0] text-xl mr-2">•</span>
                  <span className="text-lg"><strong>{t.excellenceLabel}</strong> {t.excellenceText}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2874f0] text-xl mr-2">•</span>
                  <span className="text-lg"><strong>{t.clientFocusLabel}</strong> {t.clientFocusText}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2874f0] text-xl mr-2">•</span>
                  <span className="text-lg"><strong>{t.innovationLabel}</strong> {t.innovationText}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section
        ref={storyRef}
        className={`py-10 px-4 bg-white dark:bg-black transition-opacity duration-1000 ${storyVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-black dark:text-white">{t.journeyTitle}</h2>
            <div className="w-20 h-1 bg-[#2874f0] mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              {t.journeySubtitle}
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#2874f0]"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {timelineData.map((item, index) => (
                <div
                  key={index}
                  className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
                >
                  <div className="w-1/2 pr-8 pl-8">
                    <div className="bg-white dark:bg-black p-6 rounded-lg shadow-md border border-[#2874f0]">
                      <h3 className="text-xl font-serif font-semibold text-[#2874f0]">{item.year}</h3>
                      <h4 className="text-lg font-semibold mt-2 text-black dark:text-white">{item.title}</h4>
                      <p className="text-gray-700 dark:text-gray-300 mt-2">{item.description}</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#2874f0] border-4 border-white dark:border-black relative z-10"></div>
                  <div className="w-1/2 pl-8 pr-8"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/*new section*/}
      <section
        ref={legacyRef}
        className={`py-10 px-4 transition-all duration-1000 ${legacyVisible ? 'opacity-100' : 'opacity-0'
          }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-serif font-bold mb-4`}>
              {t.legacyTitle}
            </h2>
            <div className={`w-20 h-1 mx-auto mb-8`}></div>
            <p className={`text-xl max-w-3xl mx-auto`}>
              {t.legacySubtitle}
            </p>
          </div>

          {/* Asymmetric content blocks */}
          <div className="space-y-32">
            {/* First block - Text left, visual right */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row items-center gap-12"
            >
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className={`absolute -left-6 -top-6 w-24 h-24 rounded-full`}></div>
                  <h3 className="text-2xl font-serif font-semibold relative z-10 mb-6">{t.pioneeringTitle}</h3>
                </div>
                <p className={`text-lg leading-relaxed mb-6`}>
                  {t.pioneeringText}
                </p>
                <div className="flex items-center space-x-8 text-center">
                  <div>
                    <div className={`text-3xl font-bold`}>150+</div>
                    <div className={`text-sm`}>{t.casesWon}</div>
                  </div>
                  <div>
                    <div className={`text-3xl font-bold`}>98%</div>
                    <div className={`text-sm`}>{t.clientSatisfaction}</div>
                  </div>
                  <div>
                    <div className={`text-3xl font-bold`}>40+</div>
                    <div className={`text-sm`}>{t.yearsExperience}</div>
                  </div>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className="lg:w-1/2 relative"
              >
                <div className={`aspect-video bg-gradient-to-br rounded-lg overflow-hidden relative`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={about1}
                      alt="Building Trust Through Generations"
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </div>
                </div>
                <div className={`absolute -bottom-6 -right-6 w-32 h-32 rounded-full`}></div>
              </motion.div>
            </motion.div>

            {/* Second block - Visual left, text right */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row-reverse items-center gap-12"
            >
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className={`absolute -right-6 -top-6 w-24 h-24 rounded-full`}></div>
                  <h3 className="text-2xl font-serif font-semibold relative z-10 mb-6">{t.trustTitle}</h3>
                </div>
                <p className={`text-lg leading-relaxed mb-6`}>
                  {t.trustText}
                </p>
                <div className={`border-l-4 pl-4 py-2 italic`}>
                  "{t.trustQuote}"
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className="lg:w-1/2 relative"
              >
                <div className={`aspect-video bg-gradient-to-br rounded-lg overflow-hidden relative flex items-center justify-center`}>
                  <img
                    src={about2}
                    alt="Building Trust Through Generations"
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
                <div className={`absolute -bottom-6 -left-6 w-32 h-32 rounded-full`}></div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section
        ref={teamRef}
        className={`py-20 px-4 bg-white dark:bg-black transition-opacity duration-1000 ${teamVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-black dark:text-white">{t.teamTitle}</h2>
            <div className="w-20 h-1 bg-[#2874f0] mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              {t.teamSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white dark:bg-black rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-[#2874f0]">
                <div className="h-64 bg-[#2874f0] flex items-center justify-center text-white text-5xl font-bold">
                  {/* Show image if available, else fallback to initial */}
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    member.name.charAt(0)
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-black dark:text-white">{member.name}</h3>
                  <p className="text-[#2874f0] font-medium">{member.role}</p>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">{member.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#2874f0] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">{t.ctaTitle}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {t.ctaText}
          </p>
          <button
            className="bg-white text-[#2874f0] px-8 py-4 rounded-md font-semibold text-lg hover:bg-black hover:text-white transition-colors duration-300"
            onClick={() => navigate("/contact")}
          >
            {t.ctaButton}
          </button>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;