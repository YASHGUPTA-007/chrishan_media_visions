import { motion } from 'framer-motion';
import { Users, Award, Clock, Heart } from 'lucide-react';

interface AboutSectionProps {
  onNavigate?: (page: string) => void;
}

const AboutSection = ({ onNavigate }: AboutSectionProps) => {
  const teamMembers = [
    {
      name: 'Alex Rodriguez',
      role: 'Creative Director',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      name: 'Sarah Chen',
      role: 'Lead Designer',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Marcus Johnson',
      role: 'Video Producer',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
      gradient: 'from-pink-500 to-red-500'
    },
    {
      name: 'Emily Davis',
      role: 'Technical Lead',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=300',
      gradient: 'from-green-500 to-blue-500'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passion-Driven',
      description: 'Every project we take on is fueled by genuine passion for creative excellence and innovation.',
      color: 'text-red-400'
    },
    {
      icon: Users,
      title: 'Collaborative',
      description: 'We believe the best results come from close collaboration with our clients and team members.',
      color: 'text-blue-400'
    },
    {
      icon: Award,
      title: 'Award-Winning',
      description: 'Our commitment to quality has been recognized with numerous industry awards and accolades.',
      color: 'text-yellow-400'
    },
    {
      icon: Clock,
      title: 'Reliable',
      description: 'We deliver exceptional results on time, every time, without compromising on quality or creativity.',
      color: 'text-green-400'
    }
  ];

  const handleContactRedirect = () => {
    console.log('Contact button clicked!'); // Debug log
    if (onNavigate) {
      console.log('Calling onNavigate with contact'); // Debug log
      onNavigate('contact');
    } else {
      console.log('No onNavigate prop provided'); // Debug log
      // Fallback: scroll to contact section if it exists on the same page
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        alert('Contact redirect clicked! Please connect the navigation function.');
      }
    }
  };

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      {/* Background Effects aligned with Hero */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-purple-500/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-slate-900/40" />

        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 border-2 border-purple-400/20 rounded-full"
          animate={{ rotate: [0, 360], scale: [1, 1.15, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 rotate-45 border-2 border-cyan-400/20"
          animate={{ rotate: [45, 405], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-10 h-10 bg-pink-500/10"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        />
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
            <span className="text-white">About</span>{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Our Story
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            We are a passionate team of creative professionals dedicated to transforming ideas into 
            extraordinary visual experiences. With over 5 years of industry expertise, we've helped 
            hundreds of clients bring their visions to life through innovative media solutions.
          </motion.p>
        </motion.div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                className="text-center group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6 group-hover:border-purple-400/40 transition-all duration-300"
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
                  }}
                >
                  <Icon className={`w-8 h-8 ${value.color}`} />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Team Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Meet Our{' '}
            <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Creative Team
            </span>
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Talented professionals who bring diverse skills and fresh perspectives to every project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="group text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="relative mb-6 inline-block">
                <motion.div
                  className={`w-32 h-32 rounded-full bg-gradient-to-r ${member.gradient} p-1`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </motion.div>
                
                {/* Floating particles around image */}
                <motion.div
                  className="absolute -top-2 -right-2 w-3 h-3 rounded-full bg-blue-400/60"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                />
                <motion.div
                  className="absolute -bottom-2 -left-2 w-2 h-2 rounded-full bg-purple-400/60"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                />
              </div>

              <h4 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                {member.name}
              </h4>
              <p className={`bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent font-medium`}>
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Company Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-t border-b border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {[
            { number: '500+', label: 'Happy Clients', suffix: '' },
            { number: '1000', label: 'Projects Done', suffix: '+' },
            { number: '25', label: 'Team Members', suffix: '+' },
            { number: '99', label: 'Success Rate', suffix: '%' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center group"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2"
                style={{ filter: 'drop-shadow(0 0 10px rgba(168, 85, 247, 0.5))' }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
              >
                {stat.number}{stat.suffix}
              </motion.div>
              <div className="text-gray-400 group-hover:text-gray-300 transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Redirect Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="relative group cursor-pointer"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            onClick={handleContactRedirect}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleContactRedirect();
              }
            }}
          >
            <div className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-purple-400/40 transition-all duration-500">
              {/* Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Floating particles */}
              <motion.div
                className="absolute top-8 right-8 w-4 h-4 rounded-full bg-blue-400/30"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.7, 0.3],
                  x: [0, 10, 0],
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-12 left-12 w-3 h-3 rounded-full bg-purple-400/30"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                  x: [0, -8, 0],
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
              <motion.div
                className="absolute top-1/2 left-8 w-2 h-2 rounded-full bg-cyan-400/40"
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              />

              <div className="relative z-10 px-8 md:px-12 py-12 md:py-16 text-center">
                <motion.div
                  className="mb-6"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
                  viewport={{ once: true }}
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-purple-400/40 transition-all duration-300 mb-2">
                    <motion.div
                      className="text-4xl"
                      animate={{ 
                        rotateY: [0, 360],
                      }}
                      transition={{ 
                        duration: 8, 
                        repeat: Infinity, 
                        ease: "linear" 
                      }}
                    >
                      ✨
                    </motion.div>
                  </div>
                  
                  <motion.div
                    className="w-24 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 rounded-full mx-auto group-hover:w-32 transition-all duration-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: '6rem' }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    viewport={{ once: true }}
                  />
                </motion.div>

                <motion.h3
                  className="text-3xl md:text-4xl font-bold mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <span className="text-white">Ready to Start Your</span>{' '}
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                    Creative Journey?
                  </span>
                </motion.h3>

                <motion.p
                  className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Let's bring your vision to life! Get in touch with our creative team and discover how we can transform your ideas into extraordinary visual experiences.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                  className="inline-block"
                >
                  <motion.div
                    className="relative inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/20 group-hover:border-purple-400/50 transition-all duration-300"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)'
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Animated arrow */}
                    <motion.div
                      className="text-purple-400"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      →
                    </motion.div>
                    <span className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Get In Touch
                    </span>
                    
                    {/* Ripple effect on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-purple-400/10 opacity-0 group-hover:opacity-100"
                      initial={false}
                      animate={{ 
                        scale: [0.8, 1.2, 1],
                        opacity: [0, 0.3, 0]
                      }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity,
                        repeatDelay: 0.5
                      }}
                    />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;