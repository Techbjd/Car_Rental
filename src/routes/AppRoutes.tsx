import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Vehicles from "../pages/Vehicles";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Services from "../pages/Services";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehicles" element={<Vehicles />} />
         <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
