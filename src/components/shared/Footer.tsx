import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <footer
      ref={ref}
      className="relative py-10  overflow-hidden dark:bg-black dark:text-white"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6 px-16 pb-12 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
          className="flex gap-4 text-sm md:flex-row items-center"
        >
          <a href="/events">Events</a>
          <a href="/pricing">Pricing</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/blog">Blog</a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
          transition={{ duration: 0.5, delay: 0.6, ease: 'easeOut' }}
          className="flex gap-4 justify-center"
        >
          <Link
            to="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[#FA776C] flex items-center justify-center p-2"
            aria-label="Facebook"
          >
            <FaFacebookF className="w-5 h-5 text-[#FA776C]" />
          </Link>
          <Link
            to="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[#FA776C] flex items-center justify-center p-2"
            aria-label="Twitter"
          >
            <FaTwitter className="w-5 h-5 text-[#FA776C]" />
          </Link>
          <Link
            to="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[#FA776C] flex items-center justify-center p-2"
            aria-label="Instagram"
          >
            <FaInstagram className="w-5 h-5 text-[#FA776C]" />
          </Link>
        </motion.div>
      </div>
      <div className="border dark:border-[#EFEFEF] mx-16 border-gray-300"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.5, delay: 0.8, ease: 'easeOut' }}
        className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6 px-16 pb-10 text-center text-sm "
      >
        <p>© 2023 Evently. All rights reserved.</p>
        <a href="/" className="flex items-center">
          <img
            src="/images/logo.svg"
            width={30}
            height={50}
            alt="Evently logo"
          />
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            className="ml-2 text-2xl font-bold "
          >
            Evently
          </motion.span>
        </a>
        <div className="flex justify-center gap-4 mt-2">
          <a href="/terms" className="hover:underline">
            Terms of Service
          </a>
          <a href="/privacy" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
