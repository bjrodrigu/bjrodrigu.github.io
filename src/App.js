import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import AllProjects from './pages/AllProjects/AllProjects';
import Home from './pages/Home/Home';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-projects" element={<AllProjects />} />
      </Routes>
    </>
  );
}
export default App;
