import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "hello@chrishans.com",
      description: "Send us an email anytime"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "Call us during business hours"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office",
      value: "123 Creative Street, Design City",
      description: "Visit our creative studio"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Hours",
      value: "Mon - Fri: 9AM - 6PM",
      description: "We're here to help"
    }
  ];

  const socialLinks = [
    { name: "Instagram", handle: "@chrishans_media" },
    { name: "LinkedIn", handle: "chrishans-agency" },
    { name: "Twitter", handle: "@chrishans" },
    { name: "Behance", handle: "chrishans-portfolio" }
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
            <span className="text-foreground">Get In</span>{' '}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Ready to bring your creative vision to life? We'd love to hear from you. 
            Let's start a conversation about your next project.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <MessageSquare className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-foreground">Send us a message</h2>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground/80 mb-2">
                      First Name
                    </label>
                    <Input
                      type="text"
                      placeholder="John"
                      className="glass border-primary/20 focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground/80 mb-2">
                      Last Name
                    </label>
                    <Input
                      type="text"
                      placeholder="Doe"
                      className="glass border-primary/20 focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    className="glass border-primary/20 focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    Project Type
                  </label>
                  <select className="w-full px-3 py-2 glass border border-primary/20 rounded-md focus:border-primary transition-colors bg-background text-foreground">
                    <option value="">Select a service</option>
                    <option value="video">Video Production</option>
                    <option value="photography">Photography</option>
                    <option value="design">Graphic Design</option>
                    <option value="web">Web Design</option>
                    <option value="marketing">Digital Marketing</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    Budget Range
                  </label>
                  <select className="w-full px-3 py-2 glass border border-primary/20 rounded-md focus:border-primary transition-colors bg-background text-foreground">
                    <option value="">Select your budget</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k+">$50,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    Message
                  </label>
                  <Textarea
                    placeholder="Tell us about your project..."
                    rows={5}
                    className="glass border-primary/20 focus:border-primary transition-colors resize-none"
                  />
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-accent text-background font-semibold py-3 rounded-full neon-cyan transition-all duration-300"
                  >
                    Send Message
                    <Send className="ml-2 w-4 h-4" />
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    className="glass rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-primary">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                        <p className="text-primary font-medium mb-1">{info.value}</p>
                        <p className="text-foreground/60 text-sm">{info.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                className="glass rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href="#"
                      className="flex items-center space-x-2 text-foreground/70 hover:text-primary transition-colors p-2 rounded-lg hover:bg-primary/10"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm">{social.handle}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Quick Response */}
              <motion.div
                className="glass rounded-xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                <h3 className="font-semibold text-foreground mb-2">Quick Response</h3>
                <p className="text-foreground/70 text-sm mb-4">
                  We typically respond within 24 hours
                </p>
                <div className="text-2xl font-bold text-primary">24hrs</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-foreground">Frequently Asked</span>{' '}
            <span className="text-primary">Questions</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "What's your typical project timeline?",
                answer: "Project timelines vary depending on scope, but most projects range from 2-8 weeks from concept to delivery."
              },
              {
                question: "Do you work with international clients?",
                answer: "Yes! We work with clients worldwide and have experience managing projects across different time zones."
              },
              {
                question: "What's included in your services?",
                answer: "Our services include concept development, production, post-production, and final delivery with source files."
              },
              {
                question: "Can you work within our budget?",
                answer: "We offer flexible solutions and can work with various budgets to find the best approach for your needs."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="glass rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 + index * 0.1 }}
              >
                <h4 className="font-semibold text-foreground mb-3">{faq.question}</h4>
                <p className="text-foreground/70 text-sm">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;