import './App.css';
import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import AllProjects from './pages/AllProjects/AllProjects';
import Home from './pages/Home/Home';

// React Router doesn't scroll to #anchors or reset scroll on navigation, so do it here.
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <>
      <ScrollManager />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<AllProjects />} />
      </Routes>
    </>
  );
}
export default App;
