import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ContactPage from "./components/Contact/ContactPage";
import AboutPage from "./components/About/AboutPage";
import LandingPage from "./components/Home/LandingPage";
import CreateEvent from "./events/CreateEvent";
import Event2 from "./events/2";
import Event3 from "./events/3";
import PreviewTicket from "./events/2/PreviewTicket";
import AllEvents from "./components/Events/AllEvents/AllEvents";
import Signup from "./components/Auth/Signup/Signup";
import Login from "./components/Auth/Login/Login";
import Test from "./Test";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/test" element={<Test />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/events/all" element={<AllEvents />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/events/create" element={<CreateEvent />} />
        <Route path="/events/create/2" element={<Event2 />} />
        <Route path="/events/preview" element={<PreviewTicket />} />
        <Route path="/events/create/3" element={<Event3 />} />
      </Routes>
    </Router>
  );
};

export default App;
