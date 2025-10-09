import React from "react";
import { motion } from "framer-motion";
import servicesVideo from "../images/services-law.mp4"; // Replace with your actual video file path
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// Define services array outside JSX
const services = [
    {
        title: "Corporate Law",
        icon: "🏢",
        image: require("../images/service1.jpg"), // Replace with your actual image path
        description: "Comprehensive legal services for businesses of all sizes.",
        path: "/corporate-law",
    },
    {
        title: "Litigation",
        icon: "⚖️",
        image: require("../images/service2.jpg"),
        description: "Expert representation in court proceedings and disputes.",
        path: "/litigation"
    },
    {
        title: "Intellectual Property",
        icon: "🔍",
        image: require("../images/service5.jpg"),
        description: "Protection for your inventions, trademarks, and creative works.",
        path: "/intellectual-property"
    },
    {
        title: "Real Estate",
        icon: "🏠",
        image: require("../images/service4.jpg"),
        description: "Legal support for property transactions and disputes.",
        path: "/real-estate"
    },
    {
        title: "Family Law",
        icon: "👨‍👩‍👧‍👦",
        image: require("../images/service3.jpg"),
        description: "Sensitive handling of family-related legal matters.",
        path: "/family-law"
    },
    {
        title: "Immigration",
        icon: "✈️",
        image: require("../images/service6.jpg"),
        description: "Guidance through complex immigration processes.",
        path: "/immigration"
    }
];
const differentiators = [
    { title: 'Boutique Attention, Big Firm Results', desc: 'We provide personalized service without sacrificing legal firepower.', id: 1 },
    { title: 'Industry-Specific Expertise', desc: 'We understand the nuances of your specific field and its legal landscape.', id: 2 },
    { title: 'Technology-Driven Efficiency', desc: 'We use cutting-edge tools to streamline processes and reduce costs.', id: 3 },
];
const faqs = [
    {
        question: "How do I know if I have a valid legal case?",
        answer: "The best way to determine if you have a valid case is to schedule a consultation. We offer initial case evaluations where we'll review the specifics of your situation and provide honest feedback about your legal options at no obligation.",
        id: 1
    },
    {
        question: "What are your billing arrangements?",
        answer: "We offer flexible billing options tailored to your case, including hourly rates, flat fees for certain services, and contingency fees for appropriate cases (where we only get paid if you win). During our consultation, we'll clearly explain all potential costs.",
        id: 2
    },
    {
        question: "How long will my case take to resolve?",
        answer: "Case duration varies significantly based on complexity, the court's schedule, and whether settlement is possible. Simple matters may resolve in weeks, while complex litigation can take years. We'll provide a realistic timeline assessment after reviewing your case.",
        id: 3
    },
    {
        question: "Will my case go to trial?",
        answer: "Most civil cases settle before trial, but we prepare every case as if it will go to trial. This approach strengthens our negotiating position and ensures we're fully prepared if settlement isn't possible. We'll discuss the likelihood of trial specific to your case.",
        id: 4
    },
    {
        question: "How often will I receive updates about my case?",
        answer: "We pride ourselves on communication. You'll receive regular updates at significant milestones, and our team is always accessible to answer questions. We also provide client portal access where you can view case progress 24/7.",
        id: 5
    }
];

const recognitions = [
    {
        id: 1,
        title: "Best Law Firm 2023",
        issuer: "National Legal Review",
        icon: "🏆",
        description: "Recognized for excellence in client service and case outcomes"
    },
    {
        id: 2,
        title: "Top 100 Trial Lawyers",
        issuer: "American Trial Lawyers Association",
        icon: "⭐",
        description: "Multiple attorneys named to this prestigious list"
    },
    {
        id: 3,
        title: "AV Preeminent Rating",
        issuer: "Martindale-Hubbell",
        icon: "📊",
        description: "Highest possible rating for legal ability and ethical standards"
    },
    {
        id: 4,
        title: "Super Lawyers",
        issuer: "Thomson Reuters",
        icon: "🔝",
        description: "Selected through peer recognition and professional achievement"
    }
];

const affiliations = [
    { name: "American Bar Association", logo: "⚖️", id: 1 },
    { name: "State Bar Association", logo: "📝", id: 2 },
    { name: "National Trial Lawyers", logo: "👨‍⚖️", id: 3 },
    { name: "Legal Ethics Council", logo: "📘", id: 4 },
];


export default function Services() {
    const [activeTab, setActiveTab] = useState(0);
    const [openIndex, setOpenIndex] = useState(0);
    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    const navigate = useNavigate();
    
    return (
        <div className="w-full min-h-screen bg-white dark:bg-black">
            {/* Hero Section with Background Video & Tagline (Full Screen) */}
            <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
                <video
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    src={servicesVideo}
                    autoPlay
                    loop
                    muted
                />
                <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center z-10 h-full">
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg text-center"
                    >
                        AI Tools Services
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto text-center"
                    >
                        Unlock the power of AI with our suite of innovative services.
                    </motion.p>
                </div>
            </section>
            {/* Section 2: Detailed Service Tabs */}
            <div className="max-w-7xl mx-auto mb-20 bg-white rounded-2xl shadow-lg overflow-hidden dark:bg-gray-800 mt-10">
                <h2 className="text-2xl font-serif font-semibold text-blue-800 mb-8 text-center pt-10">Comprehensive Legal Support</h2>
                <div className="p-6">
                    <div className="flex flex-wrap border-b border-gray-200 mb-6">
                        {services.map((service, index) => (
                            <button
                                key={index}
                                className={`py-3 px-6 font-medium transition-colors ${activeTab === index ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                                onClick={() => setActiveTab(index)}
                            >
                                {service.title}
                            </button>
                        ))}
                    </div>
                    <div className="p-4">
                        <div className="flex flex-col md:flex-row items-start gap-8">
                            <div className="flex-1">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{services[activeTab].title}</h3>
                                <p className="text-gray-600 mb-4 dark:text-white">
                                    Our {services[activeTab].title.toLowerCase()} services provide expert guidance and representation.
                                    We have a proven track record of success in this area of law, with numerous satisfied clients.
                                </p>
                                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6 dark:text-white">
                                    <li>Expert legal consultation and advice</li>
                                    <li>Thorough case analysis and strategy development</li>
                                    <li>Professional representation in relevant proceedings</li>
                                    <li>Ongoing support and guidance throughout your case</li>
                                </ul>
                                <button
                                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
                                    onClick={() => navigate(services[activeTab].path)}
                                >
                                    Schedule a Consultation
                                </button>
                            </div>
                            <div className="w-full md:w-96 h-64 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg flex items-center justify-center overflow-hidden">
                                <img
                                    src={services[activeTab].image}
                                    alt={services[activeTab].title}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="py-16 bg-gradient-to-r from-gray-800 to-blue-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-stretch gap-12 ">
                        {/* Left Column - Header */}
                        <div className="lg:w-2/5 flex flex-col justify-center">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Why We're The Right Firm For You</h2>
                            <p className="text-lg text-white-200">
                                In a crowded legal market, our distinct approach sets us apart and delivers superior value for our clients.
                            </p>
                        </div>

                        {/* Right Column - Differentiators */}
                        <div className="lg:w-3/5">
                            <div className="grid grid-cols-1 gap-6">
                                {differentiators.map((item, index) => (
                                    <div key={item.id} className="p-6 bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm rounded-xl border border-white border-opacity-20 hover:bg-opacity-15 transition-all duration-300">
                                        <div className="flex items-start">
                                            <span className="text-2xl mr-4 text-blue-400">{index + 1}.</span>
                                            <div>
                                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                                <p className="text-white-200">{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-16 bg-white dark:bg-black">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                        {/* Content */}
                        <div className="lg:w-1/2">
                            <span className="inline-block px-3 py-1 bg-blue-100 text-white-700 dark:text-black text-sm font-medium rounded-full mb-4">
                                Success Story
                            </span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-6 dark:text-white">Securing a Landmark Intellectual Property Victory</h2>
                            <p className="text-lg text-gray-600 mb-4 dark:text-white">
                                How we defended a tech startup against a patent infringement claim from a industry giant, securing not just a dismissal but also a favorable licensing agreement for our client.
                            </p>
                            <ul className="text-gray-600 mb-8 space-y-2">
                                <li className="flex items-start dark:text-white">
                                    <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                    <span><strong>Challenge:</strong> Multi-million dollar claim with potential to bankrupt the client</span>
                                </li>
                                <li className="flex items-start dark:text-white">
                                    <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                    <span><strong>Solution:</strong> Innovative prior art research and strategic negotiation</span>
                                </li>
                                <li className="flex items-start dark:text-white">
                                    <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                    <span><strong>Result:</strong> Claim dismissed + lucrative licensing agreement for our client</span>
                                </li>
                            </ul>
                            <a href="#" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800">
                                Read the Full Case Study
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>

                        {/* Image/Visual Placeholder */}
                        <div className="lg:w-1/2 flex flex-col justify-center h-full">
                            <div className=" rounded-2xl h-96 flex flex-col items-center justify-center p-8 border border-gray-200  dark:bg-gray-900">
                                <blockquote className="italic text-lg text-gray-700 mb-6 max-w-md mx-auto dark:text-white">
                                    "Liberty Legal Partners turned a potential disaster into a major win for our company. Their expertise and dedication made all the difference."
                                </blockquote>
                                <div className="font-semibold text-blue-700 mb-4">— Tech Startup CEO</div>
                                <ul className="text-gray-700 space-y-2 text-left max-w-md mx-auto">
                                    <li className="flex items-start dark:text-white">
                                        <svg className="h-5 w-5 text-[#2874f0] mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                        <span>Clear, strategic communication throughout the case</span>
                                    </li>
                                    <li className="flex items-start dark:text-white">
                                        <svg className="h-5 w-5 text-[#2874f0] mr-2 mt-0.5 " fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                        <span>Innovative legal strategy tailored to our needs</span>
                                    </li>
                                    <li className="flex items-start dark:text-white">
                                        <svg className="h-5 w-5 text-[#2874f0] mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                        <span>Results that exceeded expectations</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-16 bg-gradient-to-b from-blue-50 to-gray-100 dark:from-gray-900 dark:to-black">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4 dark:text-white">Recognized Excellence</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto dark:text-white">
                            Our commitment to legal excellence has been acknowledged by leading industry organizations and peers.
                        </p>
                    </div>

                    {/* Awards & Recognitions */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-semibold text-center text-gray-800 mb-8 dark:text-white">Awards & Accolades</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 dark:bg">
                            {recognitions.map((recognition) => (
                                <div key={recognition.id} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 text-center dark:bg-gray-800  ">
                                    <div className="text-4xl mb-4">{recognition.icon}</div>
                                    <h4 className="text-lg font-semibold text-gray-800 mb-2 dark:text-white">{recognition.title}</h4>
                                    <p className="text-blue-600 font-medium mb-2 dark:text-white">{recognition.issuer}</p>
                                    <p className="text-gray-600 text-sm dark:text-white">{recognition.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Professional Affiliations */}
                    <div>
                        <h3 className="text-2xl font-semibold text-center text-gray-800 mb-8 dark:text-white">Professional Affiliations</h3>
                        <div className="flex flex-wrap justify-center gap-8">
                            {affiliations.map((affiliation) => (
                                <div key={affiliation.id} className="flex flex-col items-center">
                                    <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center mb-3 dark:bg-gray-800">
                                        <span className="text-2xl">{affiliation.logo}</span>
                                    </div>
                                    <span className="text-gray-700 font-medium text-sm text-center dark:text-white">{affiliation.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-16 bg-white dark:bg-black">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4 dark:text-white">Frequently Asked Questions</h2>
                            <p className="text-lg text-gray-600 dark:text-white">Find answers to common questions about our legal services and processes.</p>
                        </div>

                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden ">
                                    <button
                                        className="flex justify-between items-center w-full p-6 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 dark:bg-gray-900 "
                                        onClick={() => toggleFAQ(index)}
                                        aria-expanded={openIndex === index}
                                    >
                                        <span className="text-lg font-medium text-gray-800 dark:text-white">{faq.question}</span>
                                        <svg
                                            className={`w-5 h-5 text-blue-600 transition-transform duration-300 ${openIndex === index ? 'transform rotate-180' : ''}`}
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    <div
                                        className={`overflow-hidden transition-all duration-300 ease-in-out  ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}
                                        aria-hidden={openIndex !== index}
                                    >
                                        <div className="p-6 bg-white dark:bg-gray-800">
                                            <p className="text-gray-600 dark:text-white">{faq.answer}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>


                    </div>
                </div>
            </section>
        </div>
    );
}
