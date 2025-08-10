import { motion } from 'framer-motion';
import { Camera, Film, Palette, Zap, Monitor, Headphones } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Camera,
      title: 'Photography',
      description: 'Professional photography services that capture your vision with stunning clarity and artistic flair.',
      color: 'from-blue-400 to-cyan-500',
      bgGradient: 'from-blue-500/10 to-cyan-500/10'
    },
    {
      icon: Film,
      title: 'Video Production',
      description: 'Cinematic video content that tells your story through compelling visuals and expert storytelling.',
      color: 'from-purple-400 to-pink-500',
      bgGradient: 'from-purple-500/10 to-pink-500/10'
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'Creative designs that communicate your brand message with visual impact and modern aesthetics.',
      color: 'from-pink-400 to-rose-500',
      bgGradient: 'from-pink-500/10 to-rose-500/10'
    },
    {
      icon: Monitor,
      title: 'Web Development',
      description: 'Cutting-edge websites and applications that deliver exceptional user experiences.',
      color: 'from-indigo-400 to-blue-500',
      bgGradient: 'from-indigo-500/10 to-blue-500/10'
    },
    {
      icon: Zap,
      title: 'Motion Graphics',
      description: 'Dynamic animations and motion graphics that bring your content to life with energy.',
      color: 'from-yellow-400 to-orange-500',
      bgGradient: 'from-yellow-500/10 to-orange-500/10'
    },
    {
      icon: Headphones,
      title: 'Audio Production',
      description: 'Professional audio services including mixing, mastering, and sound design for all media.',
      color: 'from-green-400 to-emerald-500',
      bgGradient: 'from-green-500/10 to-emerald-500/10'
    }
  ];

  return (
    <section className="relative py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5"
          animate={{
            background: [
              'linear-gradient(45deg, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05), rgba(236, 72, 153, 0.05))',
              'linear-gradient(135deg, rgba(236, 72, 153, 0.05), rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05))',
              'linear-gradient(45deg, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05), rgba(236, 72, 153, 0.05))'
            ]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        {/* Floating particles */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-blue-400/30 to-purple-400/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
              Our Services
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-slate-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Comprehensive creative solutions designed to elevate your brand and 
            captivate your audience across all digital platforms.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                className={`group relative p-8 rounded-2xl bg-gradient-to-br ${service.bgGradient} backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
                }}
              >
                {/* Gradient overlay on hover */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  whileHover={{ opacity: 0.1 }}
                />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.color} mb-6`}
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.1 
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed">
                    {service.description}
                  </p>

                  {/* Animated border */}
                  <motion.div
                    className={`absolute -bottom-2 -left-2 w-0 h-0 border-l-4 border-b-4 border-transparent group-hover:border-l-blue-400 group-hover:border-b-blue-400 transition-all duration-500`}
                    whileHover={{
                      width: 20,
                      height: 20,
                    }}
                  />
                  <motion.div
                    className={`absolute -top-2 -right-2 w-0 h-0 border-r-4 border-t-4 border-transparent group-hover:border-r-purple-400 group-hover:border-t-purple-400 transition-all duration-500`}
                    whileHover={{
                      width: 20,
                      height: 20,
                    }}
                  />
                </div>

                {/* Floating elements inside cards */}
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 rounded-full bg-white/20"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;