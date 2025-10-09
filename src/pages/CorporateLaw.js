import { useNavigate } from 'react-router-dom';
import service1 from "../images/service1.jpg";
import { FaScaleBalanced, FaBuilding, FaHandshake, FaFileContract, FaShieldHalved, FaChartLine } from 'react-icons/fa6';
import videohero from "../images/service1.mp4";
import { motion } from "framer-motion";
const CorporateLaw = () => {
  const navigate = useNavigate();
    const darkMode = document.documentElement.classList.contains('dark');

  const handleGetStarted = (path) => {
    navigate(path);
  };

  return (
    <div className={darkMode ? "min-h-screen bg-gray-900 text-white" : "min-h-screen bg-gray-50 text-gray-800"}>

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

      {/* Corporate Law Introduction */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img
                src={service1}
                alt="Corporate Law Introduction"
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Corporate Legal Expertise</h2>
              <p className="text-lg mb-6">
                In today's complex business environment, having experienced corporate legal counsel is essential for navigating regulatory requirements, mitigating risks, and seizing growth opportunities. Our corporate law practice provides comprehensive legal solutions tailored to your business needs.
              </p>
              <p className="text-lg mb-8">
                From startup formation to multinational transactions, we offer strategic guidance that aligns with your business objectives while ensuring compliance and protecting your interests.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  <span>Business Formation & Structuring</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  <span>Regulatory Compliance</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  <span>Mergers & Acquisitions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase Section */}
      <section className={`py-16 px-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Corporate Legal Services</h2>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
            Comprehensive legal solutions designed to support your business at every stage of growth
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className={`rounded-xl p-6 shadow-md transition-all hover:shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <FaBuilding className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Business Formation</h3>
              <p className="mb-4">
                Entity selection, incorporation, partnership agreements, and corporate structuring to establish a solid legal foundation for your business.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>LLC, Corporation, Partnership formation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Bylaws & operating agreements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Equity structure planning</span>
                </li>
              </ul>
             
            </div>

            {/* Service 2 */}
            <div className={`rounded-xl p-6 shadow-md transition-all hover:shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <FaFileContract className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Contracts & Agreements</h3>
              <p className="mb-4">
                Drafting, reviewing, and negotiating contracts to protect your interests in business transactions and relationships.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Commercial contracts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Employment agreements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Vendor and supplier contracts</span>
                </li>
              </ul>
              
            </div>

            {/* Service 3 */}
            <div className={`rounded-xl p-6 shadow-md transition-all hover:shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <FaHandshake className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Mergers & Acquisitions</h3>
              <p className="mb-4">
                Strategic guidance through mergers, acquisitions, and divestitures to maximize value and minimize risk.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Due diligence</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Transaction structuring</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Post-merger integration</span>
                </li>
              </ul>
             
            </div>

            {/* Service 4 */}
            <div className={`rounded-xl p-6 shadow-md transition-all hover:shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <FaShieldHalved className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Compliance & Governance</h3>
              <p className="mb-4">
                Ensuring your business meets all regulatory requirements and maintains proper corporate governance.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Regulatory compliance programs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Corporate governance policies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Board meeting management</span>
                </li>
              </ul>
             
            </div>

            {/* Service 5 */}
            <div className={`rounded-xl p-6 shadow-md transition-all hover:shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <FaScaleBalanced className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Dispute Resolution</h3>
              <p className="mb-4">
                Effective strategies for resolving business disputes through negotiation, mediation, or litigation when necessary.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Commercial litigation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Alternative dispute resolution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Contract disputes</span>
                </li>
              </ul>
              
            </div>

            {/* Service 6 */}
            <div className={`rounded-xl p-6 shadow-md transition-all hover:shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <FaChartLine className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Intellectual Property</h3>
              <p className="mb-4">
                Protection and management of intellectual property assets critical to your business's competitive advantage.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Trademark registration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Patent strategies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>IP licensing agreements</span>
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
                <h2 className="text-3xl font-bold mb-6">Client Success: TechGrowth Inc.</h2>
                <p className="text-lg mb-6">
                  TechGrowth Inc., a rapidly expanding SaaS company, faced complex regulatory challenges as they prepared for international expansion. Our corporate team provided comprehensive guidance that enabled their successful market entry into three new countries.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">47%</div>
                    <div className="text-sm">Faster compliance approval</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">$2.3M</div>
                    <div className="text-sm">Potential penalties avoided</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">3</div>
                    <div className="text-sm">New international markets</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">12</div>
                    <div className="text-sm">Months of strategic guidance</div>
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
                  src={service1}
                  alt="Corporate Law Case Study"
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Why Choose Our Corporate Legal Services</h2>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
            Experience the difference that specialized corporate legal expertise can make for your business
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Industry Expertise</h3>
              <p>Deep understanding of various industries and their unique legal challenges</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Proactive Approach</h3>
              <p>Identifying potential issues before they become problems for your business</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Business-Focused Solutions</h3>
              <p>Legal strategies aligned with your commercial objectives and growth plans</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Dedicated Team</h3>
              <p>Consistent access to attorneys who understand your business inside and out</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Strengthen Your Corporate Legal Foundation?</h2>
          <p className="text-xl mb-8">
            Schedule a consultation with our corporate law experts to discuss how we can support your business goals and mitigate legal risks.
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

export default CorporateLaw;