import { motion } from 'framer-motion';
import { ExternalLink, Play, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PortfolioSection = () => {
  const portfolioItems = [
    {
      id: 1,
      title: 'Luxury Brand Campaign',
      category: 'Photography & Video',
      description: 'Award-winning campaign featuring stunning visuals and cinematic storytelling for a luxury fashion brand.',
      image: 'https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Photography', 'Video', 'Branding'],
      gradient: 'from-purple-500 to-pink-500',
      awards: 3
    },
    {
      id: 2,
      title: 'Tech Startup Identity',
      category: 'Branding & Web',
      description: 'Complete brand identity and web platform for an innovative AI startup, featuring modern design and seamless UX.',
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Web Design', 'Branding', 'UI/UX'],
      gradient: 'from-blue-500 to-cyan-500',
      awards: 2
    },
    {
      id: 3,
      title: 'Music Festival Visuals',
      category: 'Motion Graphics',
      description: 'Dynamic motion graphics and stage visuals for a major electronic music festival, creating immersive experiences.',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Motion Graphics', 'Live Events', 'Creative Direction'],
      gradient: 'from-orange-500 to-red-500',
      awards: 4
    },
    {
      id: 4,
      title: 'Corporate Documentary',
      category: 'Film Production',
      description: 'Professional documentary showcasing company culture and values through authentic storytelling and expert cinematography.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Documentary', 'Corporate', 'Storytelling'],
      gradient: 'from-green-500 to-emerald-500',
      awards: 1
    },
    {
      id: 5,
      title: 'E-commerce Platform',
      category: 'Web Development',
      description: 'Custom e-commerce solution with advanced features, responsive design, and optimized user experience.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['E-commerce', 'Development', 'User Experience'],
      gradient: 'from-indigo-500 to-purple-500',
      awards: 2
    },
    {
      id: 6,
      title: 'Product Launch Campaign',
      category: 'Multi-Media',
      description: 'Comprehensive campaign including photography, video, graphics, and web presence for a major product launch.',
      image: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Campaign', 'Multi-Media', 'Strategy'],
      gradient: 'from-pink-500 to-rose-500',
      awards: 5
    }
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-slate-800 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), 
                             radial-gradient(circle at 80% 80%, rgba(147, 51, 234, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.05) 0%, transparent 50%)`
          }}
          animate={{
            backgroundPosition: ['0% 0%, 100% 100%, 50% 50%', '100% 0%, 0% 100%, 50% 50%', '0% 0%, 100% 100%, 50% 50%']
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />

        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
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
            <span className="text-white">Featured</span>{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
              Portfolio
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-slate-300 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Explore our award-winning projects that showcase our commitment to excellence 
            and innovation in creative media production.
          </motion.p>

          {/* Portfolio Stats */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              { number: '150+', label: 'Projects Completed' },
              { number: '25+', label: 'Awards Won' },
              { number: '98%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="group relative bg-slate-800/50 rounded-2xl overflow-hidden backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Play button for video content */}
                {item.tags.includes('Video') && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </motion.div>
                )}

                {/* Awards indicator */}
                {item.awards > 0 && (
                  <div className="absolute top-4 right-4 flex items-center space-x-1">
                    {Array.from({ length: item.awards }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                )}

                {/* Category badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r ${item.gradient} text-white text-sm font-medium`}>
                  {item.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-400 mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-full bg-slate-700/50 text-slate-300 border border-slate-600/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action button */}
                <Button
                  variant="outline"
                  size="sm"
                  className="group/btn w-full bg-transparent border-slate-600 hover:border-blue-400 text-slate-300 hover:text-blue-400 transition-all duration-300"
                >
                  View Project
                  <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Animated borders */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: `linear-gradient(90deg, transparent, ${item.gradient.split(' ')[1]}, transparent)`,
                  mask: 'linear-gradient(white, white) content-box, linear-gradient(white, white)',
                  maskComposite: 'xor',
                  padding: '2px'
                }}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.3 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white font-semibold px-8 py-4 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            View Full Portfolio
            <ExternalLink className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;