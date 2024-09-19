import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import HomePage from "./components/HomePage.jsx";
import Hella from "./pages/Hella"; // Komponent til Hella-projektet
import TroejborgBryg from "./pages/Troejborgbryg.jsx";
import Nippon from "./pages/Nippon"; // Komponent til Nippon-projektet
import StudieSpar from "./pages/StudieSpar"; // Komponent til StudieSpar-projektet
import Streetfood from "./pages/Streetfood"; // Komponent til Aarhus Streetfood-projektet
import InteractiveStorytelling from "./pages/InteractiveStorytelling"; // Komponent til Interactive Storytelling-projektet
import About from "./pages/About/About.jsx";

function App() {
  return (
    <>
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hella" element={<Hella />} />
        <Route path="/troejborgbryg" element={<TroejborgBryg />} />
        <Route path="/nippon" element={<Nippon />} />
        <Route path="/studiespar" element={<StudieSpar />} />
        <Route path="/streetfood" element={<Streetfood />} />
        <Route
          path="/interactive-storytelling"
          element={<InteractiveStorytelling />}
        />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
