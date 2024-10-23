import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ContactPage from "./components/Contact/ContactPage";
import AboutPage from "./components/About/AboutPage";
import LandingPage from "./components/Home/LandingPage";
import AllEvents from "./components/Events/AllEvents/AllEvents";
import Signup from "./components/Auth/Signup/Signup";
import Login from "./components/Auth/Login/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/events/all" element={<AllEvents />} />
      </Routes>
    </Router>
  );
};

export default App;
