import { motion } from 'framer-motion';
import PageHeader from '../components/shared/PageHeader';
import SectionHeader from '../components/shared/SectionHeader';
import { Star, Quote } from 'lucide-react';

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: 'John Smith',
    position: 'CEO, Tech Innovations',
    text: 'SolidBuild delivered our office complex on time and within budget. Their attention to detail and communication throughout the process was exceptional. The team was responsive to our needs and made the construction process as smooth as possible.',
    rating: 5,
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
    project: 'Corporate Headquarters'
  },
  {
    id: 2,
    name: 'Amanda Johnson',
    position: 'Homeowner',
    text: 'The team at SolidBuild turned our dream home into reality. Their craftsmanship and professionalism exceeded our expectations at every turn. From the initial design consultation to the final walkthrough, they were attentive to our needs and preferences.',
    rating: 5,
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    project: 'Custom Residence'
  },
  {
    id: 3,
    name: 'Michael Rodriguez',
    position: 'Project Manager, Retail Solutions',
    text: 'Working with SolidBuild on our shopping center renovation was a seamless experience. They managed the complexities of the project efficiently and kept the work on schedule despite some unexpected challenges. The end result has exceeded our expectations.',
    rating: 4,
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    project: 'Retail Center Renovation'
  },
  {
    id: 4,
    name: 'Sarah Williams',
    position: 'Director, Healthcare Facilities',
    text: 'Our medical center required specific construction requirements, and SolidBuild delivered with precision. They understood the unique needs of healthcare construction and worked closely with our staff to minimize disruption to patient care during the renovation.',
    rating: 5,
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
    project: 'Medical Center Expansion'
  },
  {
    id: 5,
    name: 'David Chen',
    position: 'Developer, Urban Properties',
    text: 'We have worked with SolidBuild on multiple apartment complexes, and they consistently deliver high-quality results. Their project management is exceptional, keeping our developments on schedule and within budget. We look forward to working with them on future projects.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1138903/pexels-photo-1138903.jpeg',
    project: 'Luxury Apartment Building'
  },
  {
    id: 6,
    name: 'Emily Thompson',
    position: 'School Principal',
    text: 'The renovation of our school facilities was executed perfectly by SolidBuild. They worked diligently to complete the majority of the project during summer break to minimize disruption to students. The team was responsive to our concerns and made safety a top priority.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
    project: 'Educational Facility Renovation'
  },
  {
    id: 7,
    name: 'James Wilson',
    position: 'Restaurant Owner',
    text: 'SolidBuild transformed our restaurant space with creativity and precision. They understood the unique requirements of a commercial kitchen and dining area, and their suggestions helped us optimize the space for both functionality and atmosphere.',
    rating: 4,
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
    project: 'Restaurant Build-Out'
  },
  {
    id: 8,
    name: 'Rebecca Martinez',
    position: 'Homeowner',
    text: 'Our home addition project was handled with care and professionalism by SolidBuild. They blended the new construction seamlessly with our existing home, and we appreciated their attention to detail. The crew was respectful of our property and kept the site clean throughout the project.',
    rating: 5,
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
    project: 'Residential Addition'
  }
];

const TestimonialsPage = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star 
        key={index} 
        size={20} 
        className={`${index < rating ? 'text-accent-500 fill-accent-500' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PageHeader
        title="Client Testimonials"
        subtitle="Hear what our clients have to say about their experience working with SolidBuild Co."
        backgroundImage="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg"
      />

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            title="What Our Clients Say"
            subtitle="Don't just take our word for it. These testimonials from our valued clients reflect our commitment to excellence in every construction project."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-soft p-8"
              >
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-20 h-20 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.position}</p>
                    <p className="text-primary-600 mt-1 text-sm font-medium">
                      Project: {testimonial.project}
                    </p>
                    <div className="flex mt-2">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
                <div>
                  <Quote size={36} className="text-primary-200 mb-3" />
                  <p className="text-gray-700 italic leading-relaxed">{testimonial.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            title="Trusted by Leading Organizations"
            subtitle="We're proud to have worked with these companies on their construction projects."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {Array.from({ length: 8 }).map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-soft flex items-center justify-center h-32"
              >
                <div className="text-primary-900 font-bold text-xl">Client Logo</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            title="Our Client Satisfaction"
            subtitle="Numbers that reflect our commitment to excellence and client satisfaction."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              { label: 'Satisfied Clients', value: '250+' },
              { label: 'Projects Completed', value: '500+' },
              { label: 'Years in Business', value: '20+' },
              { label: 'Repeat Clients', value: '85%' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2 text-accent-400">{stat.value}</div>
                <div className="text-xl text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Ready to Join Our Satisfied Clients?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact us today to discuss your construction project and experience the SolidBuild difference.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <a 
                href="/contact" 
                className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-bold px-8 py-3 rounded-md transition-colors"
              >
                Get in Touch
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default TestimonialsPage;