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

function AboutUs() {
  const navigate = useNavigate(); // Add this hook
  const videoRef = useRef(null);

  // Practice areas data
  const practiceAreas = [
    { icon: '⚖️', title: 'Corporate Law', description: 'Business formation, mergers & acquisitions, compliance, and corporate governance.' },
    { icon: '🏠', title: 'Real Estate Law', description: 'Property transactions, zoning, landlord-tenant disputes, and development.' },
    { icon: '👨‍👩‍👧‍👦', title: 'Family Law', description: 'Divorce, child custody, adoption, and other domestic matters.' },
    { icon: '📝', title: 'Estate Planning', description: 'Wills, trusts, probate, and estate administration.' },
  ];

  // Team members data
  const teamMembers = [
    { name: 'Robert Johnson', role: 'Senior Partner', specialty: 'Corporate Law', image: team1 },
    { name: 'Sarah Williams', role: 'Partner', specialty: 'Litigation', image: team2 },
    { name: 'Michael Chen', role: 'Partner', specialty: 'Intellectual Property', image: team3 },
    { name: 'Elizabeth Martinez', role: 'Senior Associate', specialty: 'Family Law', image: team4 },
  ];

  // Timeline data
  const timelineData = [
    { year: '2005', title: 'Firm Establishment', description: 'Founded with a vision to provide exceptional legal services with integrity and excellence.' },
    { year: '2010', title: 'First Major Case', description: 'Successfully represented a Fortune 500 company in a landmark corporate litigation case.' },
    { year: '2015', title: 'International Expansion', description: 'Opened our first international office in London to serve global clients.' },
    { year: '2020', title: 'Digital Transformation', description: 'Implemented advanced technology solutions for more efficient client service.' },
    { year: '2023', title: 'Pro Bono Initiative', description: 'Launched our community outreach program, providing free legal services to those in need.' },
  ];

  // Refs for scroll animations
  const storyRef = useRef(null);
  const practiceRef = useRef(null);
  const teamRef = useRef(null);

  const [storyVisible, setStoryVisible] = useState(false);
  const [practiceVisible, setPracticeVisible] = useState(false);
  const [teamVisible, setTeamVisible] = useState(false);

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
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">Legal Expertise You Can Trust</h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">Protecting your rights and interests with decades of experience and a proven track record.</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-black dark:text-white">Our Mission</h2>
            <div className="w-20 h-1 bg-[#2874f0] mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-[#2874f0] italic max-w-4xl mx-auto">
              "To provide exceptional legal representation with unwavering integrity, personalized attention, and a commitment to achieving the best possible outcomes for our clients."
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-serif font-semibold mb-6 text-black dark:text-white">Our Philosophy</h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                At Liberty Legal Partners, we believe that every client deserves dedicated, knowledgeable legal representation.
                Our approach combines extensive legal expertise with a deep understanding of our clients' unique needs and objectives.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                We pride ourselves on building long-term relationships with our clients, serving as trusted advisors who provide
                not just legal solutions but strategic guidance for their most complex challenges.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-semibold mb-6 text-black dark:text-white">Our Values</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[#2874f0] text-xl mr-2">•</span>
                  <span className="text-lg"><strong>Integrity:</strong> Uncompromising ethical standards in all we do</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2874f0] text-xl mr-2">•</span>
                  <span className="text-lg"><strong>Excellence:</strong> Commitment to the highest quality legal work</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2874f0] text-xl mr-2">•</span>
                  <span className="text-lg"><strong>Client Focus:</strong> Personalized attention and tailored solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2874f0] text-xl mr-2">•</span>
                  <span className="text-lg"><strong>Innovation:</strong> Creative approaches to complex legal challenges</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section
        ref={storyRef}
        className={`py-20 px-4 bg-white dark:bg-black transition-opacity duration-1000 ${storyVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-black dark:text-white">Our Journey</h2>
            <div className="w-20 h-1 bg-[#2874f0] mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              For nearly two decades, we have been dedicated to serving our clients with excellence and integrity.
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
        className={`py-20 px-4 transition-all duration-1000 ${legacyVisible ? 'opacity-100' : 'opacity-0'
          }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-serif font-bold mb-4`}>
              Our Enduring Legacy
            </h2>
            <div className={`w-20 h-1 mx-auto mb-8`}></div>
            <p className={`text-xl max-w-3xl mx-auto`}>
              For generations, we have built a reputation founded on excellence, integrity, and transformative legal advocacy.
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
                  <h3 className="text-2xl font-serif font-semibold relative z-10 mb-6">Pioneering Legal Excellence</h3>
                </div>
                <p className={`text-lg leading-relaxed mb-6`}>
                  Since our founding, we have consistently pushed the boundaries of legal practice,
                  setting precedents that have shaped industry standards and influenced jurisprudence
                  across multiple practice areas.
                </p>
                <div className="flex items-center space-x-8 text-center">
                  <div>
                    <div className={`text-3xl font-bold`}>150+</div>
                    <div className={`text-sm`}>Cases Won</div>
                  </div>
                  <div>
                    <div className={`text-3xl font-bold`}>98%</div>
                    <div className={`text-sm`}>Client Satisfaction</div>
                  </div>
                  <div>
                    <div className={`text-3xl font-bold`}>40+</div>
                    <div className={`text-sm`}>Years Experience</div>
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
                  <h3 className="text-2xl font-serif font-semibold relative z-10 mb-6">Building Trust Through Generations</h3>
                </div>
                <p className={`text-lg leading-relaxed mb-6`}>
                  Our firm has represented families and businesses across generations,
                  building relationships that span decades. This continuity allows us to provide
                  unparalleled insight and consistency in our legal counsel.
                </p>
                <div className={`border-l-4 pl-4 py-2 italic`}>
                  "The measure of a great law firm is not in cases won, but in trust earned and maintained over time."
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
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-black dark:text-white">Our Legal Team</h2>
            <div className="w-20 h-1 bg-[#2874f0] mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Our attorneys bring decades of combined experience and a track record of success in complex legal matters.
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
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Schedule a Consultation</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your legal needs and learn how our experienced team can help you achieve your objectives.
          </p>
          <button
            className="bg-white text-[#2874f0] px-8 py-4 rounded-md font-semibold text-lg hover:bg-black hover:text-white transition-colors duration-300"
            onClick={() => navigate("/contact")}
          >
            Contact Our Office
          </button>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;