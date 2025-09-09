
const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-900  flex  ">
      <div className="w-full  md:max-w-[1296px] mx-auto px-6  lg:px-8">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      
          <div className="space-y-8">
            <div className="flex  items-center space-x-3">
              <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5 16l-1 4h16l-1-4H5zm0-6l7-4 7 4v4H5v-4z"/>
              </svg>
              <span className="text-xl font-bold">Car Rental</span>
            </div>

            <p className="text-lg leading-relaxed">
              Faucibus faucibus pellentesque dictum turpis. Id pellentesque turpis massa a id iaculis lorem t...
            </p>

            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook">
                <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12a10 10 0 10-11 9.95V15h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.2V12h2.2l-.3 3H14v6.95A10 10 0 0022 12z"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg className="w-8 h-8 text-pink-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm0 2h10a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3zm5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.5a1 1 0 110 2 1 1 0 010-2z"/>
                </svg>
              </a>
              <a href="#" aria-label="X (Twitter)">
                <svg className="w-8 h-8 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 4.01c-.77.35-1.6.58-2.46.69a4.27 4.27 0 001.88-2.36 8.57 8.57 0 01-2.7 1.03 4.26 4.26 0 00-7.26 3.88 12.1 12.1 0 01-8.77-4.45 4.26 4.26 0 001.32 5.69 4.25 4.25 0 01-1.93-.53v.05a4.26 4.26 0 003.42 4.18 4.3 4.3 0 01-1.92.07 4.26 4.26 0 003.98 2.96 8.54 8.54 0 01-5.29 1.82c-.34 0-.68-.02-1.01-.06a12.06 12.06 0 006.54 1.92c7.85 0 12.14-6.5 12.14-12.13 0-.18 0-.35-.01-.53A8.65 8.65 0 0022 4.01z"/>
                </svg>
              </a>
              <a href="#" aria-label="YouTube">
                <svg className="w-8 h-8 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21.8 8s-.2-1.4-.8-2a3.36 3.36 0 00-2.4-1.7C16.1 4 12 4 12 4s-4.1 0-6.6.6a3.36 3.36 0 00-2.4 1.7c-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.6c0 1.6.2 3.2.2 3.2s.2 1.4.8 2a3.36 3.36 0 002.4 1.7c2.5.6 6.6.6 6.6.6s4.1 0 6.6-.6a3.36 3.36 0 002.4-1.7c.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.6c0-1.6-.2-3.2-.2-3.2zM10 15V9l5 3-5 3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Address */}
          <div className="space-y-6  ">
            <div className="flex items-center-safe space-x-3">
              <svg className="w-10 h-10 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/>
              </svg>
              <div>
                <p className="font-medium">Address</p>
                <p className="font-semibold">Oxford Ave. Cary, NC 27511</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Useful links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-orange-500 transition">About us</a></li>
                <li><a href="#" className="hover:text-orange-500 transition">Contact us</a></li>
                <li><a href="#" className="hover:text-orange-500 transition">Gallery</a></li>
                <li><a href="#" className="hover:text-orange-500 transition">Blog</a></li>
                <li><a href="#" className="hover:text-orange-500 transition">F.A.Q</a></li>
              </ul>
            </div>
          </div>

          {/* Column 3: Email */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <svg className="w-10 h-10 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8l8 5 8-5v10H4z"/>
              </svg>
              <div>
                <p className="font-medium">Email</p>
                <p className="font-semibold">nwiger@yahoo.com</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Vehicles</h3>
              <ul className="mt-2 space-y-2">
                <li>Sedan</li>
                <li>Cabriolet</li>
                <li>Pickup</li>
                <li>Minivan</li>
                <li>SUV</li>
              </ul>
            </div>
          </div>

          {/* Column 4: Phone & App Download */}
          <div className="space-y-6  ">
            <div className="flex items-center space-x-3  ">
              <svg className="w-10 h-10 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21 11.36 11.36 0 003.57.57 1 1 0 011 1v3.25a1 1 0 01-1 1C10.3 21.33 2.67 13.7 2 5a1 1 0 011-1h3.25a1 1 0 011 1c0 1.27.2 2.53.57 3.57a1 1 0 01-.21 1.11l-2.2 2.2z"/>
              </svg>
              <div>
                <p className="font-medium">Phone</p>
                <p className="font-semibold">+537 547-6401</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Download App</h3>
              <div className="mt-4 space-y-3">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img src="https://developer.apple.com/app-store/images/badges/en-us/App_Store_Badge.svg" alt="Download on the App Store" className="w-48 h-12" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Get it on Google Play" className="w-48 h-12" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-2 pt-1 text-center text-gray-500 text-sm">
          <p>© Copyright Car Rental 2025. Design by </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
