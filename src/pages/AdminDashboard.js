import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

import { useNavigate } from "react-router-dom";

// Translations object
const translations = {
  en: {
    dashboard: "Admin Dashboard",
    totalUsers: "Total Users",
    totalLogins: "Total Logins",
    activeToday: "Active Today",
    monthlySignups: "Monthly Signups",
    userEmailDomains: "User Email Domains",
    registrationsOverTime: "Registrations Over Time",
    userDataTable: "User Data Table",
    name: "Name",
    email: "Email",
    loginDate: "Login Date/Time",
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Now"],
    mostActiveUsers: "Most Active Users (Past Week)"
  },
  ar: {
    dashboard: "لوحة تحكم المدير",
    totalUsers: "إجمالي المستخدمين",
    totalLogins: "إجمالي تسجيلات الدخول",
    activeToday: "النشطون اليوم",
    monthlySignups: "التسجيلات الشهرية",
    userEmailDomains: "نطاقات البريد الإلكتروني للمستخدمين",
    registrationsOverTime: "التسجيلات عبر الزمن",
    userDataTable: "جدول بيانات المستخدمين",
    name: "الاسم",
    email: "البريد الإلكتروني",
    loginDate: "تاريخ/وقت الدخول",
    months: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "الآن"],
    mostActiveUsers: "المستخدمون الأكثر نشاطًا (الأسبوع الماضي)"
  },
  he: {
    dashboard: "לוח מנהל",
    totalUsers: "סה\"כ משתמשים",
    totalLogins: "סה\"כ כניסות",
    activeToday: "פעילים היום",
    monthlySignups: "הרשמות חודשיות",
    userEmailDomains: "דומיינים של אימייל משתמשים",
    registrationsOverTime: "הרשמות לאורך זמן",
    userDataTable: "טבלת נתוני משתמשים",
    name: "שם",
    email: "אימייל",
    loginDate: "תאריך/שעת כניסה",
    months: ["ינו", "פבר", "מרץ", "אפר", "מאי", "עכשיו"],
    mostActiveUsers: "המשתמשים הפעילים ביותר (שבוע אחרון)"
  }
};

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [logins, setLogins] = useState({});
  const [language, setLanguage] = useState(localStorage.getItem("language") || "en");

  useEffect(() => {
    const localUsers = JSON.parse(localStorage.getItem("users")) || [];
    const localLogins = JSON.parse(localStorage.getItem("userLogins")) || {};
    setUsers(localUsers);
    setLogins(localLogins);
  }, []);

  useEffect(() => {
    const handleLanguageChange = () => setLanguage(localStorage.getItem("language") || "en");
    window.addEventListener("languageChanged", handleLanguageChange);
    return () => window.removeEventListener("languageChanged", handleLanguageChange);
  }, []);

  const t = translations[language];

  const totalUsers = users.length;
  const totalLogins = Object.keys(logins).length;

  // Active users today
  const today = new Date().toISOString().split("T")[0];
  const activeToday = Object.values(logins).filter((time) =>
    time.startsWith(today)
  ).length;

  // New signups this month
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  const signupsThisMonth = users.filter((user) => {
    if (!user.createdAt) return false;
    const signupDate = new Date(user.createdAt);
    return (
      signupDate.getMonth() === currentMonth &&
      signupDate.getFullYear() === currentYear
    );
  }).length;

  // Registration Bar Chart (placeholder + total)
  const registrationsByMonth = [5, 8, 12, 6, 10, totalUsers];

  const barData = {
    labels: t.months,
    datasets: [
      {
        label: t.registrationsOverTime,
        data: registrationsByMonth,
        backgroundColor: "#0a0343ff",
      },
    ],
  };

  const barOptions = {
    indexAxis: 'x',
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: {
        barThickness: 2,
        maxBarThickness: 3,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  const navigate = useNavigate();
    const darkMode = document.documentElement.classList.contains('dark');

  // Calculate most active users for the past week
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
  const loginCounts = {};
  
  Object.entries(logins).forEach(([email, time]) => {
    if (new Date(time) >= oneWeekAgo) {
      loginCounts[email] = (loginCounts[email] || 0) + 1;
    }
  });
  
  const mostActiveUsers = users
    .filter(user => loginCounts[user.email])
    .sort((a, b) => loginCounts[b.email] - loginCounts[a.email])
    .slice(0, 5);

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-black"}`}>
      <div className="container mx-auto p-5">
        {/* Header */}
        <header className={`flex items-center gap-4 p-4 rounded-lg ${darkMode ? "bg-gray-800" : "bg-blue-900"} text-white shadow-md`}>
          <h1 className="text-2xl font-bold text-orange-500 select-none">{t.dashboard}</h1>
        </header>

        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          <div className={`p-4 rounded-lg text-center font-bold border border-orange-500 shadow-sm transition-colors ${darkMode ? "bg-gray-800 hover:bg-orange-500" : "bg-white hover:bg-orange-500 hover:text-white"}`}>
            <h3 className="text-lg">{t.totalUsers}</h3>
            <p className="text-2xl">{totalUsers}</p>
          </div>
          <div className={`p-4 rounded-lg text-center font-bold border border-orange-500 shadow-sm transition-colors ${darkMode ? "bg-gray-800 hover:bg-orange-500" : "bg-white hover:bg-orange-500 hover:text-white"}`}>
            <h3 className="text-lg">{t.totalLogins}</h3>
            <p className="text-2xl">{totalLogins}</p>
          </div>
          <div className={`p-4 rounded-lg text-center font-bold border border-orange-500 shadow-sm transition-colors ${darkMode ? "bg-gray-800 hover:bg-orange-500" : "bg-white hover:bg-orange-500 hover:text-white"}`}>
            <h3 className="text-lg">{t.activeToday}</h3>
            <p className="text-2xl">{activeToday}</p>
          </div>
          <div className={`p-4 rounded-lg text-center font-bold border border-orange-500 shadow-sm transition-colors ${darkMode ? "bg-gray-800 hover:bg-orange-500" : "bg-white hover:bg-orange-500 hover:text-white"}`}>
            <h3 className="text-lg">{t.monthlySignups}</h3>
            <p className="text-2xl">{signupsThisMonth}</p>
          </div>
        </div>

        {/* Charts Section */}
        <div className="flex flex-col md:flex-row gap-6 mt-8">
          {/* Most Active Users Table */}
          <div className={`p-5 rounded-lg shadow-md flex-1 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
            <h3 className={`text-xl font-semibold mb-4 text-center ${darkMode ? "text-orange-400" : "text-orange-500"}`}>{t.mostActiveUsers}</h3>
            <div className="overflow-x-auto">
              <table className="w-full mx-auto border-collapse">
                <thead>
                  <tr className={darkMode ? "bg-orange-700 text-white" : "bg-orange-500 text-white"}>
                    <th className="p-2 border">Name</th>
                    <th className="p-2 border">Email</th>
                    <th className="p-2 border">Login Count</th>
                  </tr>
                </thead>
                <tbody>
                  {mostActiveUsers.map(user => (
                    <tr key={user.email}>
                      <td className="p-2 border">{user.firstName + ' ' + user.lastName}</td>
                      <td className="p-2 border">{user.email}</td>
                      <td className="p-2 border">{loginCounts[user.email]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Registrations Chart */}
          <div className={`p-5 rounded-lg shadow-md flex-1 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
            <h3 className={`text-xl font-semibold mb-4 text-center ${darkMode ? "text-orange-400" : "text-orange-500"}`}>{t.registrationsOverTime}</h3>
            <div className="w-full h-64">
              <Bar data={barData} options={barOptions} />
            </div>
          </div>
        </div>

        {/* User Table */}
        <div className={`mt-8 p-5 rounded-lg shadow-md ${darkMode ? "bg-gray-800" : "bg-white"}`}>
          <h2 className={`text-xl font-semibold mb-4 text-center ${darkMode ? "text-orange-400" : "text-orange-500"}`}>{t.userDataTable}</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse" dir={["ar", "he"].includes(language) ? "rtl" : "ltr"}>
              <thead>
                <tr className={darkMode ? "bg-orange-700 text-white" : "bg-orange-500 text-white"}>
                  <th className="p-2 border">{t.name}</th>
                  <th className="p-2 border">{t.email}</th>
                  <th className="p-2 border">{t.loginDate}</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.email} className={darkMode ? "even:bg-gray-700" : "even:bg-gray-100"}>
                    <td className="p-2 border">{user.firstName + ' ' + user.lastName}</td>
                    <td className="p-2 border">{user.email}</td>
                    <td className="p-2 border">{logins[user.email] ? new Date(logins[user.email]).toLocaleString() : "N/A"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;