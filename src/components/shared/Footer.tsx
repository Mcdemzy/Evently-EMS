import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { DarkModeProps } from '../../types';

const Footer: React.FC<DarkModeProps> = ({ darkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <footer
      ref={ref}
      className={`relative py-10 ${
        darkMode ? 'bg-[rgb(13,13,13)]' : 'bg-gray-100'
      } transition-all duration-500 overflow-hidden`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#FA776C] to-[#FBD67B] opacity-10 -z-10 animate-pulse"></div>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6 px-4">
        <a href="/" className="flex items-center">
          <img
            src="images/logo.svg"
            width={30}
            height={50}
            alt="Evently logo"
          />
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            className={`ml-2 text-2xl font-bold ${
              darkMode ? 'text-white' : 'text-gray-800'
            } transition-all duration-500`}
          >
            Evently
          </motion.span>
        </a>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
          className="flex flex-col md:flex-row items-center gap-4"
        >
          <a
            href="/about"
            className={`hover:${darkMode ? 'text-gray-300' : 'text-gray-500'}`}
          >
            About Us
          </a>
          <a
            href="/events"
            className={`hover:${darkMode ? 'text-gray-300' : 'text-gray-500'}`}
          >
            Events
          </a>
          <a
            href="/contact"
            className={`hover:${darkMode ? 'text-gray-300' : 'text-gray-500'}`}
          >
            Contact
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
          transition={{ duration: 0.5, delay: 0.6, ease: 'easeOut' }}
          className="flex gap-4"
        >
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[#FA776C] flex items-center justify-center p-2"
            aria-label="Facebook"
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`w-6 h-6 text-[#FA776C] hover:text-${
                darkMode ? 'white' : 'black'
              } transition-colors duration-300`}
            >
              <FaFacebookF />
            </motion.div>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[#FA776C] flex items-center justify-center p-2"
            aria-label="Twitter"
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`w-6 h-6 text-[#FA776C] hover:text-${
                darkMode ? 'white' : 'black'
              } transition-colors duration-300`}
            >
              <FaTwitter />
            </motion.div>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[#FA776C] flex items-center justify-center p-2"
            aria-label="Instagram"
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`w-6 h-6 text-[#FA776C] hover:text-${
                darkMode ? 'white' : 'black'
              } transition-colors duration-300`}
            >
              <FaInstagram />
            </motion.div>
          </a>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.5, delay: 0.8, ease: 'easeOut' }}
        className={`mt-5 pt-4 text-center text-sm ${
          darkMode ? 'text-gray-300' : 'text-gray-700'
        } transition-all duration-500`}
      >
        <p>© 2023 Evently. All rights reserved.</p>
        <p>
          Designed and created by{' '}
          <a
            href="https://the4coders.com"
            className="font-bold text-[#FA776C] hover:underline dark:text-[#FA776C]"
          >
            The4Coders
          </a>
          .
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
