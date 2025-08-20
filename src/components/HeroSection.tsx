import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Hero3DScene from './Hero3DScene';
import heroBg1 from '@/assets/hero-bg-1.jpg';
import heroBg2 from '@/assets/hero-bg-2.jpg';
import heroBg3 from '@/assets/hero-bg-3.jpg';

const HeroSection = () => {
  const backgroundImages = [heroBg1, heroBg2, heroBg3];

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative py-28 flex items-center justify-center">
        {/* Animated Background Images */}
        <div className="absolute inset-0">
          {backgroundImages.map((bg, index) => (
            <motion.div
              key={index}
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
              style={{ backgroundImage: `url(${bg})`, willChange: 'opacity, transform' }}
              initial={{ opacity: 0.3, scale: 1 }}
              animate={{
                opacity: [0.3, 0.5, 0.3],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 8,
                delay: index * 2.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}

          {/* Gradient Overlays */}
          <div className="absolute inset-0 gradient-radial" />
          <div className="absolute inset-0 bg-background/40" />
        </div>

        {/* 3D Scene */}
<div
  className="absolute inset-0 opacity-60 hidden md:block"
  style={{ willChange: 'transform, opacity' }}
>
  <Hero3DScene />
</div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-primary/30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                willChange: 'transform, opacity',
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}

          {/* Geometric Shapes */}
          <motion.div
            className="absolute top-20 left-10 w-16 h-16 border-2 border-primary/30 rotate-45"
            animate={{ rotate: [45, 405] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            style={{ willChange: 'transform' }}
          />
          <motion.div
            className="absolute bottom-32 right-16 w-12 h-12 rounded-full border-2 border-accent/40"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            style={{ willChange: 'transform' }}
          />
          <motion.div
            className="absolute top-1/3 right-1/4 w-8 h-8 bg-secondary/20 rotate-12"
            animate={{ rotate: [12, 372] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            style={{ willChange: 'transform' }}
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="space-y-8"
          >
            {/* Hero Title */}
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <span className="block">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Creative
                </span>{' '}
                <span className="text-foreground">Media</span>
              </span>
              <span className="block mt-2">
                <span className="text-foreground">Agency</span>{' '}
                <span className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
                  Excellence
                </span>
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-lg md:text-xl lg:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              Transforming visions into stunning visual experiences through
              cutting-edge creativity and innovative media solutions.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="flex flex-wrap justify-center gap-8 py-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.4 }}
            >
              {[
                { number: '500+', label: 'Projects' },
                { number: '50+', label: 'Clients' },
                { number: '5+', label: 'Years' },
                { number: '15+', label: 'Awards' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6 + index * 0.1 }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary neon-cyan">
                    {stat.number}
                  </div>
                  <div className="text-sm text-foreground/60 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.8 }}
            >
              <Button
                size="lg"
                className="group bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-accent text-background font-semibold px-8 py-6 rounded-full neon-cyan transition-all duration-300"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="group glass border-primary/30 hover:border-primary text-foreground hover:text-primary px-8 py-6 rounded-full transition-all duration-300"
              >
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
