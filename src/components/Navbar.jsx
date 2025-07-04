import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="w-full bg-[#EDD7B4] px-10 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Hapibara Logo" className="h-10" />
        <Link to="/" className="text-green-900 font-bold text-xl">Hapibara</Link>
      </div>

      <ul className="hidden md:flex gap-8 font-medium text-black">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/recipes">Recipes</Link></li>
        <li><Link to="#">Grocery Shop</Link></li>
        <li><Link to="/waitlist">Waitlist</Link></li>
        <li><Link to="#">Blog</Link></li>
        <li><Link to="/about">About Us</Link></li>
      </ul>

      <button className="bg-black text-white px-4 py-1 rounded-full text-sm font-medium hover:bg-gray-800 transition">
        Log in
      </button>
    </nav>
  );
};

export default Navbar;
