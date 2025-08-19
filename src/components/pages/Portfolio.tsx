import { motion } from 'framer-motion';
import { ExternalLink, Play, Camera, Palette } from 'lucide-react';

const Portfolio = () => {
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'video', name: 'Video Production' },
    { id: 'design', name: 'Graphic Design' },
    { id: 'photography', name: 'Photography' },
    { id: 'web', name: 'Web Design' }
  ];

  const projects = [
    {
      id: 1,
      title: "Brand Revolution Campaign",
      category: "video",
      description: "Complete brand transformation with stunning video content",
      image: "/api/placeholder/600/400",
      tags: ["Branding", "Video", "Motion Graphics"],
      type: "video"
    },
    {
      id: 2,
      title: "Corporate Identity Suite",
      category: "design",
      description: "Comprehensive visual identity for tech startup",
      image: "/api/placeholder/600/400",
      tags: ["Logo Design", "Brand Identity", "Print"],
      type: "design"
    },
    {
      id: 3,
      title: "Product Photography Series",
      category: "photography",
      description: "Professional product shots for e-commerce brand",
      image: "/api/placeholder/600/400",
      tags: ["Product Photography", "Lighting", "Retouching"],
      type: "photo"
    },
    {
      id: 4,
      title: "Interactive Web Experience",
      category: "web",
      description: "Award-winning website with custom animations",
      image: "/api/placeholder/600/400",
      tags: ["Web Design", "UI/UX", "Development"],
      type: "web"
    },
    {
      id: 5,
      title: "Documentary Short Film",
      category: "video",
      description: "Emotional storytelling through cinematic visuals",
      image: "/api/placeholder/600/400",
      tags: ["Documentary", "Cinematography", "Post-Production"],
      type: "video"
    },
    {
      id: 6,
      title: "Packaging Design Collection",
      category: "design",
      description: "Sustainable packaging solutions for organic brand",
      image: "/api/placeholder/600/400",
      tags: ["Packaging", "Sustainability", "Print Design"],
      type: "design"
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'video': return <Play className="w-6 h-6" />;
      case 'design': return <Palette className="w-6 h-6" />;
      case 'photo': return <Camera className="w-6 h-6" />;
      default: return <ExternalLink className="w-6 h-6" />;
    }
  };

  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      {/* Themed background overlays and particles */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 gradient-radial" />
        <div className="absolute inset-0 bg-background/40" />

        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-primary/30"
              style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
              animate={{ y: [0, -16, 0], opacity: [0.25, 0.8, 0.25] }}
              transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
            />
          ))}
          <motion.div
            className="absolute top-16 left-6 w-12 h-12 border-2 border-secondary/30 rounded-full"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-24 right-10 w-10 h-10 rotate-45 border-2 border-accent/30"
            animate={{ rotate: [45, 405] }}
            transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
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
              Portfolio
            </span>
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Explore our collection of creative work that showcases the power of 
            visual storytelling and innovative design solutions.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              className="px-6 py-3 rounded-full glass border-primary/30 hover:border-primary text-foreground hover:text-primary transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative overflow-hidden rounded-xl glass hover:border-primary/30 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Project Image */}
              <div className="relative h-64 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                <motion.div
                  className="absolute inset-0 bg-primary/10"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Project Type Icon */}
                <div className="absolute top-4 right-4 z-20 text-primary">
                  {getIcon(project.type)}
                </div>

                {/* Hover Overlay */}
                <motion.div
                  className="absolute inset-0 bg-primary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.button
                    className="bg-primary text-background p-3 rounded-full neon-cyan"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink className="w-6 h-6" />
                  </motion.button>
                </motion.div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/70 mb-4 text-sm">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            className="glass border-primary/30 hover:border-primary text-foreground hover:text-primary px-8 py-4 rounded-full transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Load More Projects
          </motion.button>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 text-center glass rounded-2xl p-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h2 className="text-3xl font-bold mb-6">
            <span className="text-foreground">Like What</span>{' '}
            <span className="text-primary">You See?</span>
          </h2>
          <p className="text-foreground/80 mb-8 max-w-2xl mx-auto">
            Ready to create something extraordinary? Let's collaborate and bring 
            your vision to life with our creative expertise.
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

export default Portfolio;