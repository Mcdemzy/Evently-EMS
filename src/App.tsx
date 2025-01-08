import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import useDarkMode from "./hooks/useDarkMode";

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
import ForgotPassword from "./components/Auth/ForgotPassword/ForgotPassword";
import Pricing from "./components/Pricing/Pricing";
import NavBar from "./NavBar";
import EventDetails from "./components/Events/EventDetails/EventDetails";
import TicketsPage from "./components/Tickets/TicketsPage";
import TicketsPage2 from "./components/Tickets/ContactPage";
import TicketsPage3 from "./components/Tickets/PaymentPage";
import Profile from "./components/Profile/Profile";
import { NavBarProps } from "./types";
import EventDetailsPage from "./components/shared/EventDetailsPage";

const App = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  const NavBarWrapper = ({
    isDarkMode,
    toggleDarkMode,
  }: NavBarProps): JSX.Element | null => {
    const location = useLocation();

    const authRoutes = ["/login", "/signup", "/forgot-password"];

    if (authRoutes.includes(location.pathname)) {
      return null;
    }

    return <NavBar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />;
  };

  return (
    <div
      className={`${isDarkMode ? "dark" : "light"} transition-all duration-500`}
    >
      <Router>
        <NavBarWrapper
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/test" element={<Test />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/events/all" element={<AllEvents />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/get-tickets" element={<TicketsPage />} />
          <Route path="/get-tickets/contact" element={<TicketsPage2 />} />
          <Route path="/get-tickets/checkout" element={<TicketsPage3 />} />
          <Route path="/event-details" element={<EventDetails />} />
          <Route path="/events/create" element={<CreateEvent />} />
          <Route path="/events/create/2" element={<Event2 />} />
          <Route path="/events/preview" element={<PreviewTicket />} />
          <Route path="/events/create/3" element={<Event3 />} />

          <Route
            path="/profile-event/:tab/:eventId"
            element={<EventDetailsPage />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
