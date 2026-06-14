import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Background from "./components/Background";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Artists from "./pages/Artists";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Apply from "./pages/Apply";

export default function App() {
  return (
    <BrowserRouter>
      <div className="light-theme">
        <Background />

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/apply" element={<Apply />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
