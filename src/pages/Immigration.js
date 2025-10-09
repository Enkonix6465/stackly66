import { useNavigate } from 'react-router-dom';
import service6 from "../images/service6.jpg";
import { FaPassport, FaUserCheck, FaHandshake, FaFileContract, FaShieldAlt, FaGlobeAmericas } from 'react-icons/fa';
import videohero from "../images/law-service2.mp4";
import { motion } from "framer-motion";

const Immigration= () => {
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
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">Immigration Solutions for Your Future</h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">Navigating the path to residency, citizenship, and opportunity with trusted legal guidance.</p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Immigration Legal Expertise</h2>
              <p className="text-lg mb-6">
                Immigration law is complex and ever-changing. Our experienced team helps individuals, families, and businesses achieve their immigration goals, from visas and green cards to citizenship and deportation defense.
              </p>
              <p className="text-lg mb-8">
                We provide clear guidance and strong advocacy, ensuring your case is handled with care and precision every step of the way.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  <span>Visa Applications</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  <span>Green Cards & Residency</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  <span>Citizenship & Naturalization</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase Section */}
      <section className={`py-16 px-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Immigration Legal Services</h2>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
            Comprehensive immigration solutions for individuals, families, and businesses
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className={`rounded-xl p-6 shadow-md transition-all hover:shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <FaPassport className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Visa Applications</h3>
              <p className="mb-4">
                Assistance with all types of visas, including work, student, family, and visitor visas.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Work & employment visas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Student & exchange visas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Family & fiancé visas</span>
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className={`rounded-xl p-6 shadow-md transition-all hover:shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <FaUserCheck className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Green Cards & Residency</h3>
              <p className="mb-4">
                Guidance through the process of obtaining lawful permanent residency for you and your loved ones.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Family-based green cards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Employment-based green cards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Adjustment of status</span>
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className={`rounded-xl p-6 shadow-md transition-all hover:shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <FaHandshake className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Citizenship & Naturalization</h3>
              <p className="mb-4">
                Support for those seeking U.S. citizenship through naturalization and related processes.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Naturalization applications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Citizenship interviews & tests</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Dual citizenship guidance</span>
                </li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className={`rounded-xl p-6 shadow-md transition-all hover:shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <FaFileContract className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Business Immigration</h3>
              <p className="mb-4">
                Solutions for employers and entrepreneurs, including investor visas and global mobility.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Investor & entrepreneur visas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Global talent mobility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Corporate immigration compliance</span>
                </li>
              </ul>
            </div>

            {/* Service 5 */}
            <div className={`rounded-xl p-6 shadow-md transition-all hover:shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <FaShieldAlt className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Deportation Defense</h3>
              <p className="mb-4">
                Aggressive defense against removal and deportation, including appeals and waivers.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Removal proceedings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Appeals & waivers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Bond hearings</span>
                </li>
              </ul>
            </div>

            {/* Service 6 */}
            <div className={`rounded-xl p-6 shadow-md transition-all hover:shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <FaGlobeAmericas className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Humanitarian Immigration</h3>
              <p className="mb-4">
                Support for refugees, asylum seekers, and victims of violence or trafficking.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Asylum & refugee status</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>U & T visas for victims</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Temporary protected status</span>
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
                <h2 className="text-3xl font-bold mb-6">Client Success: The Martinez Family</h2>
                <p className="text-lg mb-6">
                  The Martinez family overcame a complex immigration challenge with our help, securing lawful permanent residency and reuniting loved ones after years of separation.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">5</div>
                    <div className="text-sm">Family members reunited</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">2</div>
                    <div className="text-sm">Years to resolve case</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">100%</div>
                    <div className="text-sm">Successful outcome</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">3</div>
                    <div className="text-sm">Countries involved</div>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Why Choose Our Immigration Legal Services</h2>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
            Experience the difference that expert, caring immigration support can make for your future
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalized Guidance</h3>
              <p>We tailor our approach to your unique immigration goals and challenges</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Clear Communication</h3>
              <p>We keep you informed and confident throughout your immigration journey</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p>Successful outcomes for families, individuals, and businesses</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Dedicated Support</h3>
              <p>We stand by you from start to finish, every step of the way</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your Immigration Journey?</h2>
          <p className="text-xl mb-8">
            Schedule a consultation with our immigration law team to discuss your options and secure your future.
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

export default Immigration;