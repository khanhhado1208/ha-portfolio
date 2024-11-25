import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import { Contact } from "./Components/Contact/Contact";
import { Footer } from "./Components/Footer/Footer";
import { Blog } from "./Pages/Blog/Blog";
import { BlogDetail } from "./Pages/Blog/BlogDetail";
import { Projects } from "./Pages/Projects/Projects";

const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToHash />
      <Header />
      <Routes>
        <Route path="/" element={<div><Hero /><Contact /></div>} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} /> {/* blog details page*/}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
