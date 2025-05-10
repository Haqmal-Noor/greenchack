import { motion } from 'framer-motion';
import HeroSection from '../components/home/HeroSection';
import IntroSection from '../components/home/IntroSection';
import FeaturedProjects from '../components/home/FeaturedProjects';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CtaSection from '../components/home/CtaSection';
import { Helmet } from 'react-helmet-async';

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Helmet>
        <title>SolidBuild Co. | Building the Future, One Brick at a Time</title>
        <meta name="description" content="SolidBuild Co. offers premium construction services with over 20 years of experience. Residential, commercial construction and renovations." />
      </Helmet>

      <HeroSection />
      <IntroSection />
      <FeaturedProjects />
      <TestimonialsSection />
      <CtaSection />
    </motion.div>
  );
};

export default HomePage;