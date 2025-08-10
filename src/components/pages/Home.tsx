import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import HeroSection from '../HeroSection';
import AboutSection from './AboutSection';

const Loader = () => (
  <motion.div
    className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
    initial={{ opacity: 1 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0, transition: { duration: 0.5 } }}
  >
    {/* Bouncing circles */}
    <div className="flex space-x-4">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-6 h-6 rounded-full bg-primary"
          animate={{
            y: [0, -15, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            delay: i * 0.3,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
    <p className="mt-6 text-primary text-lg font-semibold tracking-wide">
      Loading Creative Media...
    </p>
  </motion.div>
);

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen relative">
      <AnimatePresence>
        {loading ? (
          <Loader key="loader" />
        ) : (
          <>
            <HeroSection key="hero" />
            <AboutSection key="about" />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
