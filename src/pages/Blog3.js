import React from "react";

const Blog3 = () => {
  const darkMode = document.documentElement.classList.contains('dark');

  return (
    <div className={darkMode ? "min-h-screen bg-gray-900 text-white" : "min-h-screen bg-gray-50 text-gray-800"}>
      {/* Section 1: Overview of Recent Supreme Court Decisions */}
      <section className={darkMode ? "py-10 px-4 bg-gray-800" : "py-10 px-4 bg-gray-100"}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Overview of Recent Supreme Court Decisions</h2>
          <p className="mb-4">
            The Supreme Court has issued several landmark decisions in recent years, shaping the legal landscape on issues such as civil rights, business regulations, and constitutional interpretation. These rulings have far-reaching effects on individuals, organizations, and government policies.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Clarification of constitutional rights and freedoms</li>
            <li>Changes in regulatory and compliance requirements</li>
            <li>Influence on lower court rulings and legal precedents</li>
            <li>Impact on public policy and social issues</li>
          </ul>
        </div>
      </section>

      {/* Section 2: Practical Impact on Businesses and Individuals */}
      <section className={darkMode ? "py-10 px-4 bg-gray-900" : "py-10 px-4 bg-white"}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Practical Impact on Businesses and Individuals</h2>
          <p className="mb-4">
            Supreme Court decisions can directly affect business operations, individual rights, and everyday life. Understanding these impacts helps organizations and citizens adapt to new legal realities.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Adjustment of company policies to comply with new legal standards</li>
            <li>Greater awareness of individual rights and protections</li>
            <li>Preparation for potential legal challenges or opportunities</li>
            <li>Engagement with advocacy and policy change efforts</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Blog3;