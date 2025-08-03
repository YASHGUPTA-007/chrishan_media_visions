import { motion } from 'framer-motion';
import { Users, Target, Lightbulb, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Precision",
      description: "Every project crafted with meticulous attention to detail and strategic thinking."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "Pushing creative boundaries with cutting-edge technology and fresh perspectives."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "Working closely with clients to bring their visions to life through partnership."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "Delivering award-winning content that exceeds expectations and drives results."
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              About
            </span>{' '}
            <span className="text-foreground">Chrishans</span>
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            We are a creative media agency dedicated to transforming ideas into compelling visual stories
            that resonate with audiences and drive meaningful connections.
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">Our Story</h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  Founded with a passion for visual storytelling, Chrishans has grown from a small creative 
                  team into a full-service media agency that serves clients across diverse industries.
                </p>
                <p>
                  Our journey began with a simple belief: that great creative work has the power to 
                  transform businesses and connect people in meaningful ways.
                </p>
                <p>
                  Today, we continue to push the boundaries of what's possible in media and design, 
                  combining artistic vision with strategic thinking to deliver exceptional results.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="glass rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold text-primary mb-2">5+</div>
                <div className="text-foreground/60 mb-4">Years of Excellence</div>
                <div className="text-2xl font-bold text-secondary mb-2">500+</div>
                <div className="text-foreground/60 mb-4">Projects Completed</div>
                <div className="text-2xl font-bold text-accent mb-2">50+</div>
                <div className="text-foreground/60">Happy Clients</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-foreground">Our</span>{' '}
            <span className="text-primary">Values</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="glass rounded-xl p-6 text-center hover:border-primary/30 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-primary mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{value.title}</h3>
                <p className="text-foreground/70 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Preview */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-6">
            <span className="text-foreground">Meet Our</span>{' '}
            <span className="text-primary">Team</span>
          </h2>
          <p className="text-foreground/80 mb-8 max-w-2xl mx-auto">
            Our diverse team of creative professionals brings together decades of experience 
            in media production, design, and strategic communication.
          </p>
          <div className="glass rounded-xl p-8 max-w-md mx-auto">
            <div className="text-lg font-semibold text-primary mb-2">Ready to work with us?</div>
            <div className="text-foreground/70 mb-4">Let's create something amazing together.</div>
            <motion.button
              className="bg-gradient-to-r from-primary to-secondary text-background px-6 py-3 rounded-full font-semibold hover:from-secondary hover:to-accent transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;