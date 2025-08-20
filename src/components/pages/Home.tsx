import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import HeroSection from '../HeroSection';
import AboutSection from './AboutSection';
import heroBg1 from '@/assets/hero-bg-1.jpg';
import heroBg2 from '@/assets/hero-bg-2.jpg';
import heroBg3 from '@/assets/hero-bg-3.jpg';

const Loader = ({ progress }) => (
  <motion.div
    className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
    initial={{ opacity: 1 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
  >
    {/* Animated background gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />
    
    {/* Floating particles */}
    <div className="absolute inset-0 pointer-events-none">
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/30"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>

    {/* Main content */}
    <div className="relative z-10 text-center space-y-8">
      {/* Brand logo */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Chrishans
        </h1>
        <p className="text-lg text-foreground/70 mt-3 font-light tracking-wide">
          Creative Media Agency
        </p>
      </motion.div>

      {/* Loading animation */}
      <div className="space-y-6">
        {/* Modern spinning loader */}
        <div className="relative w-20 h-20 mx-auto">
          <motion.div
            className="absolute inset-0 border-4 border-primary/20 rounded-full"
          />
          <motion.div
            className="absolute inset-0 border-4 border-transparent border-t-primary border-r-secondary rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-2 border-2 border-transparent border-b-accent rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Progress bar */}
        <div className="w-80 max-w-sm mx-auto space-y-3">
          <div className="flex justify-between text-sm text-foreground/60">
            <span>Loading...</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-1 bg-foreground/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* Dynamic loading text */}
        <motion.div
          className="text-sm text-foreground/60 h-6"
          key={Math.floor(progress / 25)} // Re-animate every 25%
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {progress < 25 && "Initializing creative elements..."}
          {progress >= 25 && progress < 50 && "Loading visual assets..."}
          {progress >= 50 && progress < 75 && "Preparing 3D experience..."}
          {progress >= 75 && progress < 95 && "Finalizing your journey..."}
          {progress >= 95 && "Welcome to creativity..."}
        </motion.div>
      </div>

      {/* Pulsing dots */}
      <div className="flex justify-center space-x-2">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full bg-primary/40"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  </motion.div>
);

interface HomeProps {
  onNavigate?: (page: string) => void;
}

const Home = ({ onNavigate }: HomeProps) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const loadResources = async () => {
      // Start loading
      setProgress(5);

      // Simulate initial setup
      await new Promise<void>(resolve => setTimeout(resolve, 300));
      setProgress(15);

      // Preload critical images
      const backgroundImages = [heroBg1, heroBg2, heroBg3];
      const imagePromises = backgroundImages.map(src => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          img.onload = () => resolve();
          img.onerror = () => resolve(); // Continue even if image fails
          img.src = src;
        });
      });

      // Load images with progress updates
      let loadedImages = 0;
      imagePromises.forEach(promise => {
        promise.then(() => {
          loadedImages++;
          setProgress(15 + (loadedImages / backgroundImages.length) * 35); // 15% to 50%
        });
      });

      await Promise.all(imagePromises);
      setProgress(55);

      // Simulate 3D scene preparation
      await new Promise(resolve => setTimeout(resolve, 800));
      setProgress(75);

      // Simulate component initialization
      await new Promise(resolve => setTimeout(resolve, 600));
      setProgress(90);

      // Final touches
      await new Promise(resolve => setTimeout(resolve, 400));
      setProgress(98);

      // Complete loading
      await new Promise(resolve => setTimeout(resolve, 200));
      setProgress(100);

      // Hold at 100% briefly before hiding
      setTimeout(() => {
        setLoading(false);
      }, 300);
    };

    loadResources();
  }, []);

  return (
    <div className="min-h-screen relative">
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" progress={progress} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <HeroSection />
            <AboutSection onNavigate={onNavigate} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;