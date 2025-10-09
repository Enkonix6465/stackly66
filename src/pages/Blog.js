import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import video from "../images/law-hero.mp4";
import { useNavigate } from "react-router-dom"; // Add this import

const Blog = () => {
  // State for dark mode toggle
  const [darkMode, setDarkMode] = useState(false);
  
  // State for active carousel item
  const [activeCase, setActiveCase] = useState(0);
  
  // State for active timeline step
  const [activeStep, setActiveStep] = useState(0);

  // Sample data for the blog
  const articlesData = [
    {
      id: 1,
      title: "Understanding Intellectual Property Rights",
      description: "Learn how to protect your creative works and innovations in today's competitive business landscape.",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      path: "/article/ip-rights"
    },
    {
      id: 2,
      title: "Navigating Corporate Compliance Regulations",
      description: "Stay compliant with the latest corporate regulations and avoid costly legal penalties.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      path: "/article/compliance"
    },
    {
      id: 3,
      title: "The Impact of Recent Supreme Court Decisions",
      description: "Analysis of how recent rulings may affect your business and personal legal matters.",
      image: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      path: "/article/supreme-court"
    }
  ];

  // Case studies data
  const caseStudies = [
    {
      id: 1,
      title: "Corporate Merger Success",
      date: "October 2023",
      category: "Corporate Law",
      description: "Successfully navigated a complex $500M merger between two major tech firms, overcoming regulatory hurdles.",
      image: "https://images.unsplash.com/photo-1666214280550-65ef9d1de32b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      stats: {
        "Client": "TechCorp Inc.",
        "Value": "$500M",
        "Duration": "8 months"
      },
      path: "/cases/merger"
    },
    {
      id: 2,
      title: "Intellectual Property Victory",
      date: "September 2023",
      category: "IP Law",
      description: "Won a landmark patent infringement case protecting our client's innovative technology.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      stats: {
        "Client": "Innovate Labs",
        "Award": "$12M",
        "Duration": "14 months"
      },
      path: "/cases/ip-victory"
    },
    {
      id: 3,
      title: "Real Estate Dispute Resolution",
      date: "August 2023",
      category: "Real Estate Law",
      description: "Resolved a complex commercial real estate dispute, saving our client millions in potential losses.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      stats: {
        "Client": "Property Developers LLC",
        "Savings": "$8.5M",
        "Duration": "6 months"
      },
      path: "/cases/real-estate"
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

  // Upcoming events data
  const upcomingEvents = [
    {
      id: 1,
      title: "Corporate Law Seminar",
      date: "December 15, 2023",
      location: "Chicago, IL",
      image: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&w=600&q=80",
      category: "Corporate Law"
    },
    {
      id: 2,
      title: "Intellectual Property Workshop",
      date: "January 10-12, 2024",
      location: "New York, NY",
      image: "https://images.unsplash.com/photo-1462826303086-329426d1aef5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      category: "IP Law"
    },
    {
      id: 3,
      title: "Legal Tech Conference",
      date: "March 5-7, 2024",
      location: "San Francisco, CA",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      category: "Technology"
    }
  ];

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
            Expert Legal Representation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl text-white mb-8 max-w-2xl mx-auto"
          >
            Protecting your rights with decades of experience and a track record of success.
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
        <h2 className="text-3xl font-bold text-center mb-12">Featured Legal Articles</h2>
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
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies Carousel */}
      <section className="py-16 bg-gray-100 px-4 dark:bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Notable Case Studies</h2>
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
                  <button
                    className="text-[#2874f0] hover:text-blue-800 font-medium text-left"
                    onClick={() => handleNavigation(caseStudy.path)}
                  >
                    View Case Details →
                  </button>
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
          <h2 className="text-3xl font-bold text-center mb-4 dark:text-white">Upcoming Legal Events</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto dark:text-white">
            Join us for these informative legal seminars and workshops
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
                    Register Now
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
          <h2 className="text-3xl font-bold mb-6">Case Evaluation: Building a Strong Legal Foundation</h2>
          <p className="text-gray-600 mb-4 dark:text-white">
            The initial phase of any legal matter involves thorough evaluation and preparation. Our attorneys conduct comprehensive case assessments to identify strengths, weaknesses, and potential strategies.
          </p>
          <p className="text-gray-600 dark:text-white">
            We gather all relevant documentation, interview key witnesses, and research applicable laws and precedents. This meticulous approach ensures we develop the most effective legal strategy tailored to your specific situation and objectives.
          </p>
        </div>

        <hr className="my-12 border-gray-200" />

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Legal Strategy: Developing Your Path to Success</h2>
          <p className="text-gray-600 mb-4 dark:text-white">
            Once we've gathered all necessary information, our legal team develops a comprehensive strategy designed to achieve your goals. This involves analyzing various approaches, assessing risks and potential outcomes, and determining the most effective course of action.
          </p>
          <p className="text-gray-600 dark:text-white">
            We believe in transparent communication throughout this process, ensuring you understand each strategic decision and how it serves your interests. Whether through negotiation, mediation, or litigation, we craft approaches that maximize your chances of success while minimizing unnecessary conflict and expense.
          </p>
        </div>

        <hr className="my-12 border-gray-200" />

        <div>
          <h2 className="text-3xl font-bold mb-6">Case Resolution: Achieving Favorable Outcomes</h2>
          <p className="text-gray-600 mb-4 dark:text-white">
            The final phase focuses on achieving resolution and ensuring proper implementation of any agreements or court decisions. Our attorneys work diligently to secure the best possible outcome, whether through settlement negotiations or courtroom advocacy.
          </p>
          <p className="text-gray-600 dark:text-white">
            Following resolution, we assist with all necessary documentation, compliance matters, and implementation of terms. We also conduct post-case reviews to identify lessons learned and strategies that could benefit future cases.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/3 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Need Expert Legal Guidance?</h2>
            <p className="text-blue-100 max-w-2xl">
              Our experienced attorneys are ready to provide the strategic counsel and representation you need to protect your interests and achieve your objectives.
            </p>
          </div>
          <button 
            className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg transition duration-300 whitespace-nowrap"
            onClick={() => handleNavigation("/contact")}
          >
            Schedule a Consultation
          </button>
        </div>
      </section>

      

      
    </div>
  );
};

export default Blog;