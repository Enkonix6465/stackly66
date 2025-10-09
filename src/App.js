import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./compentents/Header";
import Home1 from "./pages/Home1"; // ✅ import Home1
import Home2 from "./pages/Home2"; // ✅ import Home2
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import CorporateLaw from "./pages/CorporateLaw";
import Immigration from "./pages/Immigration";
import FamilyLaw from "./pages/FamilyLaw";
import Litigation from "./pages/Litigation";
import Realestate from "./pages/Realestate";
import IntellectualProperty from "./pages/IntellectualProperty";
import Blog1 from "./pages/Blog1";
import Blog2 from "./pages/Blog2";
import Blog3 from "./pages/Blog3";  
import AdminDashboard from "./pages/AdminDashboard"; // ✅ import AdminDashboard
import Welcome from "./pages/Welcome"; // ✅ import Welcome
function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const newTheme = !prev;
      if (newTheme) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newTheme;
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <Header toggleTheme={toggleTheme} isDark={isDark} />

      <main className="p-0 m-0">
        <Routes>
          <Route path="/home1" element={<Home1 />} /> {/* ✅ route */}
          <Route path="/home2" element={<Home2 />} /> {/* ✅ route */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/corporate-law" element={<CorporateLaw />} />
          <Route path="/family-law" element={<FamilyLaw />} />
          <Route path="/immigration" element={<Immigration />} />
          <Route path="/litigation" element={<Litigation />} />
          <Route path="/real-estate" element={<Realestate />} />
          <Route path="/intellectual-property" element={<IntellectualProperty />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog1" element={<Blog1 />} />
          <Route path="/blog2" element={<Blog2 />} />
          <Route path="/blog3" element={<Blog3 />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="*" element={<Welcome />} /> 
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
