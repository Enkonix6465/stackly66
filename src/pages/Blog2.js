import React from "react";

const Blog2 = () => {
  const darkMode = document.documentElement.classList.contains('dark');

  return (
    <div className={darkMode ? "min-h-screen bg-gray-900 text-white" : "min-h-screen bg-gray-50 text-gray-800"}>
      {/* Section 1: What is Corporate Compliance? */}
      <section className={darkMode ? "py-10 px-4 bg-gray-800" : "py-10 px-4 bg-gray-100"}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">What is Corporate Compliance?</h2>
          <p className="mb-4">
            Corporate compliance refers to the processes and policies that organizations implement to ensure adherence to laws, regulations, and ethical standards. It helps businesses avoid legal risks, maintain integrity, and build stakeholder trust.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Following industry-specific regulations and standards</li>
            <li>Implementing internal controls and audits</li>
            <li>Training employees on compliance requirements</li>
            <li>Reporting and addressing violations promptly</li>
          </ul>
        </div>
      </section>

      {/* Section 2: Key Steps for Navigating Compliance Regulations */}
      <section className={darkMode ? "py-10 px-4 bg-gray-900" : "py-10 px-4 bg-white"}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Key Steps for Navigating Compliance Regulations</h2>
          <p className="mb-4">
            Successfully navigating corporate compliance requires a proactive approach and ongoing commitment. Here are essential steps for businesses:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Stay updated on relevant laws and regulatory changes</li>
            <li>Conduct regular compliance risk assessments</li>
            <li>Develop clear policies and procedures</li>
            <li>Monitor and review compliance programs regularly</li>
            <li>Engage legal counsel for complex regulatory matters</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Blog2;