import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import useDarkMode from "./hooks/useDarkMode";
import ProtectedRoute from "./components/Auth/ProtectedRoute"; // Import the ProtectedRoute component

// Import all your components
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
import EmailCode from "./components/Auth/ForgotPassword/EmailCode";
import ResetPassword from "./components/Auth/ForgotPassword/ResetPassword";
import NotFound from "./components/NotFound";
import Footer from "./components/shared/Footer";

const App = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  const NavBarWrapper = ({
    isDarkMode,
    toggleDarkMode,
  }: NavBarProps): JSX.Element | null => {
    const location = useLocation();

    const authRoutes = [
      "/login",
      "/signup",
      "/forgot-password",
      "/reset-password",
      "/forgot-password/email-code",
    ];

    if (authRoutes.includes(location.pathname)) {
      return null;
    }

    return <NavBar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />;
  };
  const FooterWrapper = (): JSX.Element | null => {
    const location = useLocation();

    const authRoutes = [
      "/login",
      "/signup",
      "/forgot-password",
      "/reset-password",
      "/forgot-password/email-code",
    ];

    if (authRoutes.includes(location.pathname)) {
      return null; // Don't render the footer on auth screens
    }

    return <Footer />; // Render the footer on all other screens
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
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/test" element={<Test />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/events/all" element={<AllEvents />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/forgot-password/email-code" element={<EmailCode />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/get-tickets" element={<TicketsPage />} />
          <Route path="/get-tickets/contact" element={<TicketsPage2 />} />
          <Route path="/get-tickets/checkout" element={<TicketsPage3 />} />
          <Route path="/event-details" element={<EventDetails />} />
          {/* <Route path="/events/create" element={<CreateEvent />} /> */}
          {/* <Route path="/events/create/2" element={<Event2 />} /> */}
          <Route path="/events/preview" element={<PreviewTicket />} />
          <Route path="*" element={<NotFound />} />
          {/* <Route path="/events/create/3" element={<Event3 />} /> */}

          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<Profile />} />
            {/* Add more protected routes here */}
            <Route path="/events/create" element={<CreateEvent />} />
            <Route path="/events/create/2" element={<Event2 />} />
            <Route path="/events/create/3" element={<Event3 />} />
            <Route
              path="/profile-event/:tab/:eventId"
              element={<EventDetailsPage />}
            />
          </Route>
        </Routes>

        <FooterWrapper />
      </Router>
    </div>
  );
};

export default App;
