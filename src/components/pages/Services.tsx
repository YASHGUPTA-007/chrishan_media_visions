import { motion } from 'framer-motion';
import { Camera, Film, Palette, Monitor, Megaphone, Edit } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Photography",
      description: "Professional photography services for brands, events, and creative projects.",
      features: ["Product Photography", "Event Coverage", "Portrait Sessions", "Commercial Shoots"]
    },
    {
      icon: <Film className="w-8 h-8" />,
      title: "Video Production",
      description: "High-quality video content from concept to final delivery.",
      features: ["Corporate Videos", "Commercials", "Social Media Content", "Live Streaming"]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Graphic Design",
      description: "Visual identity and design solutions that make your brand stand out.",
      features: ["Logo Design", "Brand Identity", "Print Design", "Packaging Design"]
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Web Design",
      description: "Modern, responsive websites that engage users and drive conversions.",
      features: ["Custom Websites", "E-commerce", "UI/UX Design", "Mobile Apps"]
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "Digital Marketing",
      description: "Strategic marketing campaigns that amplify your brand's reach.",
      features: ["Social Media", "Content Strategy", "SEO/SEM", "Email Marketing"]
    },
    {
      icon: <Edit className="w-8 h-8" />,
      title: "Post-Production",
      description: "Professional editing and post-production services for all media types.",
      features: ["Video Editing", "Color Grading", "Audio Mixing", "Motion Graphics"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "We start by understanding your goals, audience, and vision for the project."
    },
    {
      step: "02",
      title: "Strategy",
      description: "Develop a comprehensive plan and creative direction for your project."
    },
    {
      step: "03",
      title: "Creation",
      description: "Bring your vision to life with our team of creative professionals."
    },
    {
      step: "04",
      title: "Delivery",
      description: "Final delivery with ongoing support and optimization as needed."
    }
  ];

  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      {/* Themed background overlays and particles */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 gradient-radial" />
        <div className="absolute inset-0 bg-background/40" />

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-secondary/30"
              style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
              animate={{ y: [0, -18, 0], opacity: [0.25, 0.8, 0.25] }}
              transition={{ duration: 2.8 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
            />
          ))}
          <motion.div
            className="absolute top-12 left-8 w-12 h-12 border-2 border-primary/30 rounded-full"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute bottom-20 right-12 w-10 h-10 rotate-12 bg-accent/10"
            animate={{ rotate: [12, 372] }}
            transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-foreground">Our</span>{' '}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Comprehensive creative services designed to elevate your brand and 
            connect with your audience through powerful visual storytelling.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="glass rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
              <p className="text-foreground/70 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-foreground/60 flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-foreground">Our</span>{' '}
            <span className="text-primary">Process</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                className="text-center relative"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-background font-bold text-xl neon-cyan">
                    {item.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
                <p className="text-foreground/70 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center glass rounded-2xl p-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h2 className="text-3xl font-bold mb-6">
            <span className="text-foreground">Ready to</span>{' '}
            <span className="text-primary">Get Started?</span>
          </h2>
          <p className="text-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create something amazing together. 
            Contact us today for a free consultation.
          </p>
          <motion.button
            className="bg-gradient-to-r from-primary to-secondary text-background px-8 py-4 rounded-full font-semibold text-lg hover:from-secondary hover:to-accent transition-all duration-300 neon-cyan"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;