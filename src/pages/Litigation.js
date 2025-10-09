import { useNavigate } from 'react-router-dom';
import service2 from "../images/service2.jpg";
import { FaBalanceScale, FaGavel, FaHandshake, FaFileContract, FaShieldAlt, FaChartLine } from 'react-icons/fa';
import videohero from "../images/law-services.mp4";
import { motion } from "framer-motion";

const Litigation = () => {
  const navigate = useNavigate();
  const darkMode = document.documentElement.classList.contains('dark');

  const handleGetStarted = (path) => {
    navigate(path);
  };

  return (
    <div className={darkMode ? "min-h-screen bg-gray-900 text-white" : "min-h-screen bg-gray-50 text-gray-800"}>

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
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">Litigation Expertise You Can Rely On</h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">Resolving disputes and defending your interests with proven courtroom experience.</p>
        </div>
      </section>

      {/* Litigation Law Introduction */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img
                src={service2}
                alt="Litigation Law Introduction"
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Litigation Legal Expertise</h2>
              <p className="text-lg mb-6">
                When legal disputes arise, you need a team with the skill and tenacity to protect your interests. Our litigation practice covers commercial, civil, and complex cases, providing strategic advocacy from pre-trial negotiations to courtroom representation.
              </p>
              <p className="text-lg mb-8">
                We combine deep legal knowledge with practical experience to achieve favorable outcomes for individuals and businesses.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  <span>Commercial Litigation</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  <span>Civil Disputes</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  <span>Alternative Dispute Resolution</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase Section */}
      <section className={`py-16 px-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Litigation Services</h2>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
            Comprehensive representation for all types of disputes and legal challenges
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className={`rounded-xl p-6 shadow-md transition-all hover:shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <FaGavel className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Commercial Litigation</h3>
              <p className="mb-4">
                Resolving business disputes, breach of contract, and partnership conflicts in court or through settlement.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Breach of contract cases</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Shareholder & partnership disputes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Business torts</span>
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className={`rounded-xl p-6 shadow-md transition-all hover:shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <FaBalanceScale className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Civil Litigation</h3>
              <p className="mb-4">
                Representation in personal injury, property, and other civil disputes before courts and tribunals.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Personal injury claims</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Property & real estate disputes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Consumer protection cases</span>
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className={`rounded-xl p-6 shadow-md transition-all hover:shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <FaHandshake className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Alternative Dispute Resolution</h3>
              <p className="mb-4">
                Mediation and arbitration services to resolve disputes efficiently and cost-effectively.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Mediation sessions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Arbitration proceedings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Settlement negotiations</span>
                </li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className={`rounded-xl p-6 shadow-md transition-all hover:shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <FaFileContract className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Contract Disputes</h3>
              <p className="mb-4">
                Expert handling of contract interpretation, enforcement, and breach matters.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Contract review & analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Enforcement actions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Settlement agreements</span>
                </li>
              </ul>
            </div>

            {/* Service 5 */}
            <div className={`rounded-xl p-6 shadow-md transition-all hover:shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <FaShieldAlt className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Defense & Appeals</h3>
              <p className="mb-4">
                Vigorous defense against claims and representation in appellate courts.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Defense in civil & commercial cases</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Appellate advocacy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Post-judgment motions</span>
                </li>
              </ul>
            </div>

            {/* Service 6 */}
            <div className={`rounded-xl p-6 shadow-md transition-all hover:shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <FaChartLine className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Complex Litigation</h3>
              <p className="mb-4">
                Handling multi-party, high-stakes, and class action lawsuits with strategic expertise.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Class actions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Multi-jurisdictional disputes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Complex commercial cases</span>
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
                <h2 className="text-3xl font-bold mb-6">Client Success: Apex Manufacturing</h2>
                <p className="text-lg mb-6">
                  Apex Manufacturing faced a multi-million dollar contract dispute. Our litigation team secured a favorable verdict, protecting their assets and reputation.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">$8M</div>
                    <div className="text-sm">Damages avoided</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">6</div>
                    <div className="text-sm">Months to resolve case</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">100%</div>
                    <div className="text-sm">Client satisfaction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">3</div>
                    <div className="text-sm">Jurisdictions involved</div>
                  </div>
                </div>
                <button 
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                  onClick={() => handleGetStarted("/case-studies")}
                >
                  Read Full Case Study
                </button>
              </div>
              <div className="lg:w-1/2">
                <img
                  src={service2}
                  alt="Litigation Law Case Study"
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Why Choose Our Litigation Services</h2>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
            Experience the difference that skilled litigation counsel can make for your case
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Courtroom Experience</h3>
              <p>Proven track record in trials, hearings, and appeals</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Strategic Advocacy</h3>
              <p>Tailored strategies for negotiation, mediation, and litigation</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Transparent Communication</h3>
              <p>Clear updates and honest advice throughout your case</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Results-Driven Approach</h3>
              <p>Focused on achieving the best possible outcome for you</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Litigation Support?</h2>
          <p className="text-xl mb-8">
            Schedule a consultation with our litigation team to discuss your dispute and protect your interests.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-8 py-3 bg-white text-blue-600 hover:bg-gray-100 font-medium rounded-lg transition-colors"
              onClick={() => handleGetStarted("/contact")}
            >
              Contact Us Today
            </button>
            <button 
              className="px-8 py-3 border border-white text-white hover:bg-blue-700 font-medium rounded-lg transition-colors"
              onClick={() => handleGetStarted("/services")}
            >
              Browse All Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Litigation;