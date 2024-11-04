import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FiSun, FiMoon } from 'react-icons/fi';
import useDarkMode from './hooks/useDarkMode';

import ContactPage from './components/Contact/ContactPage';
import AboutPage from './components/About/AboutPage';
import LandingPage from './components/Home/LandingPage';
import CreateEvent from './events/CreateEvent';
import Event2 from './events/2';
import Event3 from './events/3';
import PreviewTicket from './events/2/PreviewTicket';
import AllEvents from './components/Events/AllEvents/AllEvents';
import Signup from './components/Auth/Signup/Signup';
import Login from './components/Auth/Login/Login';
import Test from './Test';
import ForgotPassword from './components/Auth/ForgotPassword/ForgotPassword';

const App = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <div
      className={`${isDarkMode ? 'dark' : 'light'} transition-all duration-500`}
    >
      <Router>
        <div className="fixed top-4 right-4 z-10 flex items-center justify-end">
          <div
            onClick={toggleDarkMode}
            className="relative w-9 h-9 bg-gray-700 rounded-full p-1 transition-all duration-500 flex items-center justify-between overflow-hidden cursor-pointer"
          >
            <button
              onClick={toggleDarkMode}
              className={`w-full h-auto flex items-center justify-center rounded-full transition-all duration-500 transform ${
                isDarkMode ? 'translate-x-[-150%]' : 'translate-x-[30%]'
              }`}
            >
              <FiMoon
                size={18}
                onClick={toggleDarkMode}
                className="text-gray-300"
              />
            </button>

            <button
              onClick={toggleDarkMode}
              className={`w-full h-auto flex items-center justify-center rounded-full transition-all duration-500 transform ${
                isDarkMode ? 'translate-x-[-70%]' : 'translate-x-[1500%]'
              }`}
            >
              <FiSun
                size={18}
                onClick={toggleDarkMode}
                className="text-yellow-500"
              />
            </button>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/test" element={<Test />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/events/all" element={<AllEvents />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/events/create" element={<CreateEvent />} />
          <Route path="/events/create/2" element={<Event2 />} />
          <Route path="/events/preview" element={<PreviewTicket />} />
          <Route path="/events/create/3" element={<Event3 />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
