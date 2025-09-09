import { Link } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white ">
      <nav className="  max-w-[1296px] mx-auto flex items-center justify-between px-6 lg:px-[7px] py-6">
        
        {/* Left - Logo */}
        <div className="flex items-center gap-3 w-[180px]">
          <img 
            src="/src/assets/carimg.png"   
            alt="Car Logo" 
            className="w-12 h-12 rounded-md"
          />
          <span className="text-xl font-bold text-black">CarZone</span>
        </div>

        {/* Middle - Navigation Links  */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-black font-medium">
          <Link to="/" className="text-[18px] hover:text-purple-600 transition">Home</Link>
          <Link to="/vehicles" className="text-[18px] font-semibold hover:text-purple-600 transition">Vehicles</Link>
          <Link to="/services" className="text-[18px] hover:text-purple-600 transition">Services</Link>
          <Link to="/about" className="text-[18px] hover:text-purple-600 transition">About Us</Link>
          <Link to="/contact" className="text-[18px] hover:text-purple-600 transition">Contact Us</Link>
        </div>

        {/* Right - Phone + Hamburger */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#5937E0] text-white">
              <Phone size={20} />
            </span>
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="text-sm text-black">Need help?</span>
              <span className="text-sm font-semibold text-black">+996 247-1680</span>
            </div>
          </div>

          {/* Hamburger (only on mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 py-4 bg-gray-100">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/vehicles" onClick={() => setIsOpen(false)}>Vehicles</Link>
          <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;
