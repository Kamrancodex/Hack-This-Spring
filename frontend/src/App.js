import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer/Footer";
import Rules from "./pages/Rules";
import About from "./pages/About";
import Register from "./pages/Register";
import Conduct from "./pages/Conduct";
import Admin from "./pages/Admin";

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/conduct" element={<Conduct />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
