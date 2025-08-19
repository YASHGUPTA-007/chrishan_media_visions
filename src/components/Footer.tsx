import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowRight, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-background overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Overlays aligned with hero */}
        <div className="absolute inset-0 gradient-radial"></div>
        <div className="absolute inset-0 bg-background/40"></div>
        
        {/* Floating Geometric Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-gradient-to-r from-secondary to-accent transform rotate-45 opacity-15 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-full opacity-25"></div>
        <div className="absolute bottom-40 right-1/3 w-24 h-24 border-2 border-primary/20 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
        
        {/* Abstract Shapes */}
        <div className="absolute top-1/2 left-0 w-32 h-32 bg-gradient-to-r from-secondary/20 to-transparent transform -translate-x-16 rotate-12"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-primary/20 to-transparent transform translate-x-20 -rotate-12"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3 gradient-primary neon-cyan">
                <Sparkles className="w-6 h-6 text-background" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Chrishans
              </h3>
            </div>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              Transforming visions into stunning visual experiences through cutting-edge creativity and innovative media solutions.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, index) => (
                <div key={index} className="group relative">
                  <div className="w-10 h-10 glass rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 group-hover:border-primary group-hover:scale-110 group-hover:rotate-6">
                    <Icon className="w-5 h-5 text-foreground/60 group-hover:text-primary transition-colors duration-300" />
                  </div>
                  <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-semibold text-foreground mb-6 relative">
              Quick Links
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-primary to-secondary"></div>
            </h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Portfolio', 'Blog', 'Contact'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-foreground/60 hover:text-primary transition-colors duration-300 flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0" />
                    <span className="group-hover:translate-x-2 transition-transform duration-300">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-semibold text-foreground mb-6 relative">
              Services
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-secondary to-accent"></div>
            </h4>
            <ul className="space-y-4">
              {['Brand Design', 'Web Development', 'Digital Marketing', 'Video Production', 'UI/UX Design', 'Content Creation'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-foreground/60 hover:text-primary transition-colors duration-300 flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0" />
                    <span className="group-hover:translate-x-2 transition-transform duration-300">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-semibold text-foreground mb-6 relative">
              Get In Touch
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-primary to-accent"></div>
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="w-8 h-8 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center mt-1 group-hover:from-primary/40 group-hover:to-secondary/40 transition-all duration-300">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <p className="text-foreground/60 group-hover:text-foreground/80 transition-colors duration-300">
                  123 Creative Street,<br />
                  Design District, NY 10001
                </p>
              </div>
              <div className="flex items-center space-x-3 group cursor-pointer">
                <div className="w-8 h-8 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center group-hover:from-primary/40 group-hover:to-secondary/40 transition-all duration-300">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <p className="text-foreground/60 group-hover:text-foreground/80 transition-colors duration-300">
                  +1 (555) 123-4567
                </p>
              </div>
              <div className="flex items-center space-x-3 group cursor-pointer">
                <div className="w-8 h-8 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center group-hover:from-primary/40 group-hover:to-secondary/40 transition-all duration-300">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <p className="text-foreground/60 group-hover:text-foreground/80 transition-colors duration-300">
                  hello@chrishans.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-border/50 pt-8 mb-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-6 lg:mb-0">
              <h4 className="text-xl font-semibold text-foreground mb-2">
                Stay Creative with Us
              </h4>
              <p className="text-foreground/60">
                Subscribe to our newsletter for the latest design trends and creative insights.
              </p>
            </div>
            <div className="flex w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 lg:w-80 px-4 py-3 bg-background/60 border border-border rounded-l-lg focus:outline-none focus:border-primary text-foreground placeholder-foreground/50 transition-colors duration-300"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-background rounded-r-lg hover:to-accent transition-all duration-300 transform hover:scale-105 flex items-center">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 pt-8 flex flex-col lg:flex-row items-center justify-between">
          <div className="text-foreground/60 mb-4 lg:mb-0">
            © 2024 Chrishans Creative Media Agency. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
    </footer>
  );
}