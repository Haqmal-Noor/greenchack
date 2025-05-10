import { motion } from 'framer-motion';
import Button from '../ui/Button';

const CtaSection = () => {
  return (
    <section className="relative py-20 md:py-28">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/1547576/pexels-photo-1547576.jpeg')"
        }}
      >
        <div className="absolute inset-0 bg-primary-900/80"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6"
          >
            Ready to Start Your Construction Project?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl mb-8 text-gray-100"
          >
            Let us turn your vision into reality. Contact our team today for a free consultation and quote on your next construction project.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button to="/contact" variant="accent" size="lg">
              Get a Free Quote
            </Button>
            <Button to="/services" variant="outline" size="lg">
              Explore Our Services
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;