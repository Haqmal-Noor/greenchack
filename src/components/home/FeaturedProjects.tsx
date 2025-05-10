import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../shared/SectionHeader';
import Button from '../ui/Button';

// Sample project data
const projects = [
  {
    id: 1,
    title: 'Modern Office Complex',
    category: 'Commercial',
    image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg',
    description: 'A state-of-the-art office complex featuring open spaces and sustainable design.'
  },
  {
    id: 2,
    title: 'Luxury Residential Villa',
    category: 'Residential',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
    description: 'Custom-built luxury villa with premium finishes and modern architecture.'
  },
  {
    id: 3,
    title: 'Shopping Mall Renovation',
    category: 'Commercial',
    image: 'https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg',
    description: 'Complete renovation of a shopping mall, updating both interior and exterior elements.'
  }
];

const FeaturedProjects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader
          title="Featured Projects"
          subtitle="Take a look at some of our recent construction projects, showcasing our expertise and attention to detail."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="relative rounded-lg overflow-hidden group h-[400px]"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-110"
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/50 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                <div className="bg-accent-500 text-primary-900 text-sm font-medium inline-block px-3 py-1 rounded mb-3">
                  {project.category}
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 font-heading">{project.title}</h3>
                <p className="mb-4 opacity-90 line-clamp-2">{project.description}</p>
                <Button to={`/projects`} size="sm" variant="outline">
                  View Details
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button to="/projects">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;