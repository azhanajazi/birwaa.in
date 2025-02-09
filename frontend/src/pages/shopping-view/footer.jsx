import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYoutube, faPinterest, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-200 py-10 px-5 md:py-20 mt-auto">
      <div className="text-center">
        <p className="text-lg md:text-xl font-medium">© 2025, Birwaa Developed by sriocsc.in</p>

        {/* ✅ Updated Links */}
        <div className="mt-6 text-sm md:text-lg space-y-2 md:space-y-0 md:space-x-8 flex flex-col md:flex-row items-center justify-center">
          <a href="/shop/privacy" className="hover:underline">Privacy Policy</a>
          <span className="hidden md:inline">・</span>
          <a href="/shop/terms" className="hover:underline">Terms and Conditions</a>
          <span className="hidden md:inline">・</span>
          <a href="/shop/cancellation" className="hover:underline">Cancellation and Refunds</a>
          <span className="hidden md:inline">・</span>
          <a href="/shop/shipping" className="hover:underline">Shipping and Delivery</a>
          <span className="hidden md:inline">・</span>
          <a href="/shop/contact" className="hover:underline">Contact Us</a>
        </div>

        {/* ✅ Social Media Icons */}
        <div className="mt-6 flex flex-wrap justify-center space-x-6 md:space-x-10">
          <a href="https://www.facebook.com/profile.php?id=61556520849824" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          <a href="https://www.instagram.com/seneohl/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a href="https://www.youtube.com/@Seneohl" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
            <FontAwesomeIcon icon={faYoutube} size="lg" />
          </a>
          <a href="https://in.pinterest.com/seneohl/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
            <FontAwesomeIcon icon={faPinterest} size="lg" />
          </a>
          <a href="https://x.com/seneohl" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
