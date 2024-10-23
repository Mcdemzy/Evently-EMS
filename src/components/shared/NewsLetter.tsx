import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function NewsLetter({ darkMode }: { darkMode: boolean }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Submitted:', { name, email });
    setName('');
    setEmail('');
  };

  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.2, 
  });

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <div>
      <motion.section
        ref={ref} 
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={sectionVariants}
        className={`w-full lg:w-[75%] mx-auto mb-16 p-8 lg:p-12 rounded-lg transition-all duration-500 ${
          darkMode ? 'bg-[rgb(13,13,13)] text-white' : 'bg-[#EDEFFF] text-black'
        }`}
      >
        <h2 className="text-2xl lg:text-3xl font-semibold text-center mb-4">
          Subscribe to our Events Newsletter
        </h2>
        <p className="text-center text-sm lg:text-base font-normal mb-6 lg:mb-10">
          Subscribe to our Newsletter so you don't miss new events, exclusive
          offers, and premium discounts.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
          <div>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full p-3 rounded-md transition-all duration-500 ${
                darkMode ? 'bg-[#000000] text-white' : 'bg-[#DFE1FF] text-black'
              }`}
              required
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full p-3 rounded-md transition-all duration-500 ${
                darkMode ? 'bg-[#000000] text-white' : 'bg-[#DFE1FF] text-black'
              }`}
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-auto bg-gradient-to-r from-[#624CF5] to-[#624CF5] hover:bg-gradient-to-l hover:from-[#5a4cb1] hover:to-[#5536c4] text-white py-3 px-10 rounded-md hover:bg-indigo-900 transition-colors duration-300"
            >
              Subscribe
            </button>
          </div>
        </form>
      </motion.section>
    </div>
  );
}

export default NewsLetter;
