import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#EDD7B4] text-[#222] pt-0">
      {/* ✅ Green Gradient Header with Separator */}
      <div className="bg-gradient-to-b from-[#7DC380] to-transparent pt-10 pb-6 px-6 md:px-20 text-2xl font-bold text-[#1F1F1F]">
        <h2 className="mb-4">EVERY BITES MAKES A DIFFERENCE</h2>
        <hr className="border-t border-[#ffffff60]" />
      </div>

      {/* ✅ Footer Grid Content */}
      <div className="px-6 md:px-20 py-10 grid grid-cols-1 md:grid-cols-5 gap-8 text-sm">
        {/* About */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="hapibara logo" className="h-10" />
            <h3 className="text-lg font-semibold">About</h3>
          </div>
          <p className="text-sm text-gray-500 max-w-md">
         Hapibara is India’s first vegan lifestyle platform — blending conscious food, fashion, wellness, and community to make kind living effortless and joyful.
        </p>

        </div>

        {/* Pages */}
        <div>
          <h4 className="font-semibold mb-3">Pages</h4>
          <ul className="space-y-1 text-gray-700">
            <li>Home</li>
            <li>Recipes</li>
            <li>Grocery Shop</li>
            <li>Blog</li>
            <li>About us</li>
          </ul>
        </div>

        {/* Shop */}
        <div>
          <h4 className="font-semibold mb-3">Shop</h4>
          <ul className="space-y-1 text-gray-700">
            <li>My Cart</li>
            <li>Track Order</li>
            <li>Return Policy</li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h4 className="font-semibold mb-3">Help</h4>
          <ul className="space-y-1 text-gray-700">
            <li>FAQ</li>
            <li>Shipping Info</li>
            <li>Delivery Details</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="font-semibold mb-3">Contact Us</h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center gap-2">
              <MdEmail className="text-lg" />
              <span>groceyish@contact.com</span>
            </li>
            <li className="flex items-center gap-2">
              <MdPhone className="text-lg" />
              <span>+91 9XXXXXXX87</span>
            </li>
          </ul>
          <div className="flex gap-4 mt-4 text-white">
            <span className="bg-green-600 p-2 rounded-full">
              <FaFacebookF />
            </span>
            <span className="bg-green-600 p-2 rounded-full">
              <FaLinkedinIn />
            </span>
            <span className="bg-green-600 p-2 rounded-full">
              <FaInstagram />
            </span>
            <span className="bg-green-600 p-2 rounded-full">
              <FaTwitter />
            </span>
          </div>
        </div>
      </div>

      {/* ✅ Bottom Copyright */}
      <div className="text-center text-gray-600 text-sm pt-4 border-t border-gray-300 mx-6 lg:mx-20 pb-4">
        © 2025 Hapibara. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
