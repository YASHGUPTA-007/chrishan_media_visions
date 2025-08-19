import { motion } from 'framer-motion';
import { Users, Award, Clock, Heart } from 'lucide-react';

const AboutSection = () => {
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

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Effects aligned with Hero */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 gradient-radial" />
        <div className="absolute inset-0 bg-background/40" />

        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 border-2 border-primary/20 rounded-full"
          animate={{ rotate: [0, 360], scale: [1, 1.15, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 rotate-45 border-2 border-accent/20"
          animate={{ rotate: [45, 405], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-10 h-10 bg-secondary/10"
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
            <span className="text-foreground">About</span>{' '}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Our Story
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-foreground/80 max-w-4xl mx-auto leading-relaxed"
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
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full glass border border-white/10 mb-6 group-hover:border-primary/40 transition-all duration-300"
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
                  }}
                >
                  <Icon className={`w-8 h-8 ${value.color}`} />
                </motion.div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
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
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet Our{' '}
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Creative Team
            </span>
          </h3>
          <p className="text-foreground/80 max-w-2xl mx-auto">
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

              <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
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
          className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-t border-b border-border/50"
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
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2 neon-cyan"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
              >
                {stat.number}{stat.suffix}
              </motion.div>
              <div className="text-foreground/60 group-hover:text-foreground/80 transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;