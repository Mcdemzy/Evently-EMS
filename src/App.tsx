import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ContactPage from "./components/Contact/ContactPage";
import AboutPage from "./components/About/AboutPage";
import LandingPage from "./components/Home/LandingPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default App;
