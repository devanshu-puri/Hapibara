import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./components/AboutUs";
import RecipePage from "./pages/RecipePage";
import Waitlist from "./pages/Waitlist";
import ComingSoon from "./pages/ComingSoon";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/recipes" element={<RecipePage />} />
          <Route path="/waitlist" element={<Waitlist />} />
          <Route path="/shop" element={<ComingSoon />} />
          <Route path="/blog" element={<ComingSoon />} />
          
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
