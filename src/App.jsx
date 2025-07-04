import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import RecipePage from "./pages/RecipePage";

function App() {
  return (
    <div className="font-sans bg-white">
      {/* Top Navigation */}
      <Navbar />

      {/* Page Routing */}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/recipes" element={<RecipePage />} />
      </Routes>

      {/* Footer across all pages */}
      <Footer />
    </div>
  );
}

export default App;
