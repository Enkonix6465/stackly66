import React from "react";

const Blog1 = () => {
  const darkMode = document.documentElement.classList.contains('dark');

  return (
    <div className={darkMode ? "min-h-screen bg-gray-900 text-white" : "min-h-screen bg-gray-50 text-gray-800"}>
      {/* Section 1: Types of Intellectual Property Rights */}
      <section className={darkMode ? "py-10 px-4 bg-gray-800" : "py-10 px-4 bg-gray-100"}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Types of Intellectual Property Rights</h2>
          <p className="mb-4">
            Intellectual property rights (IPR) protect creations of the mind, giving creators exclusive rights to use and benefit from their work. The main types include:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Copyrights:</strong> Protect literary, artistic, and musical works.</li>
            <li><strong>Patents:</strong> Safeguard inventions and technological advancements.</li>
            <li><strong>Trademarks:</strong> Secure brand names, logos, and slogans.</li>
            <li><strong>Trade Secrets:</strong> Protect confidential business information and processes.</li>
          </ul>
        </div>
      </section>

      {/* Section 2: Importance of Protecting Intellectual Property */}
      <section className={darkMode ? "py-10 px-4 bg-gray-900" : "py-10 px-4 bg-white"}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Importance of Protecting Intellectual Property</h2>
          <p className="mb-4">
            Protecting intellectual property is crucial for fostering innovation, maintaining competitive advantage, and ensuring creators are rewarded for their efforts. Key benefits include:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Encourages creativity and investment in new ideas.</li>
            <li>Prevents unauthorized use or reproduction of original works.</li>
            <li>Helps businesses build brand value and reputation.</li>
            <li>Provides legal recourse against infringement and misuse.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Blog1;