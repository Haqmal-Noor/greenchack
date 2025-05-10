import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHeader from '../components/shared/PageHeader';
import SectionHeader from '../components/shared/SectionHeader';
import { X } from 'lucide-react';

// Sample projects data
const projects = [
  {
    id: 1,
    title: 'Downtown Office Complex',
    category: 'Commercial',
    location: 'Chicago, IL',
    year: 2022,
    thumbnail: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg',
    images: [
      'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg',
      'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg',
      'https://images.pexels.com/photos/4069891/pexels-photo-4069891.jpeg',
    ],
    description: 'A modern 12-story office complex featuring floor-to-ceiling windows, collaborative spaces, and sustainable design elements. This project earned LEED Gold certification for its energy-efficient systems and innovative use of recycled materials.',
    client: 'Horizon Enterprises',
    timeline: '18 months',
    outcome: 'Completed on time and under budget, this project has become a landmark in the downtown business district and is currently at 95% occupancy.'
  },
  {
    id: 2,
    title: 'Luxury Waterfront Home',
    category: 'Residential',
    location: 'Miami, FL',
    year: 2021,
    thumbnail: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg',
    images: [
      'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg',
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
      'https://images.pexels.com/photos/5490636/pexels-photo-5490636.jpeg',
    ],
    description: 'This 7,500 sq ft waterfront residence features custom Italian marble throughout, a glass-walled wine cellar, infinity pool, and smart home automation. The architecture emphasizes indoor-outdoor living with expansive sliding glass walls.',
    client: 'Private Family',
    timeline: '14 months',
    outcome: 'The completed residence has been featured in multiple architectural magazines and has won a regional design award for residential excellence.'
  },
  {
    id: 3,
    title: 'Riverside Shopping Center',
    category: 'Commercial',
    location: 'Portland, OR',
    year: 2020,
    thumbnail: 'https://images.pexels.com/photos/3651577/pexels-photo-3651577.jpeg',
    images: [
      'https://images.pexels.com/photos/3651577/pexels-photo-3651577.jpeg',
      'https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg',
      'https://images.pexels.com/photos/60080/pexels-photo-60080.jpeg',
    ],
    description: 'A 135,000 sq ft shopping center with 42 retail spaces, food court, and underground parking. The design incorporates the riverfront setting with a promenade and outdoor dining areas overlooking the water.',
    client: 'Northwest Development Group',
    timeline: '22 months',
    outcome: 'The shopping center has become a popular destination for locals and tourists alike, with 100% occupancy since opening and strong foot traffic throughout the year.'
  },
  {
    id: 4,
    title: 'Modern Apartment Complex',
    category: 'Residential',
    location: 'Austin, TX',
    year: 2021,
    thumbnail: 'https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg',
    images: [
      'https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg',
      'https://images.pexels.com/photos/1795996/pexels-photo-1795996.jpeg',
      'https://images.pexels.com/photos/4069891/pexels-photo-4069891.jpeg',
    ],
    description: 'A 120-unit apartment complex with studio, one, and two-bedroom layouts. Amenities include a rooftop pool, fitness center, co-working spaces, and electric vehicle charging stations. The building features contemporary architecture with industrial elements.',
    client: 'Urban Living Developments',
    timeline: '20 months',
    outcome: 'The apartment complex achieved 90% occupancy within three months of completion and has maintained high resident satisfaction scores.'
  },
  {
    id: 5,
    title: 'Historic Theater Renovation',
    category: 'Commercial',
    location: 'Boston, MA',
    year: 2019,
    thumbnail: 'https://images.pexels.com/photos/3062969/pexels-photo-3062969.jpeg',
    images: [
      'https://images.pexels.com/photos/3062969/pexels-photo-3062969.jpeg',
      'https://images.pexels.com/photos/1552617/pexels-photo-1552617.jpeg',
      'https://images.pexels.com/photos/2258307/pexels-photo-2258307.jpeg',
    ],
    description: 'Complete restoration of a 1920s theater, preserving historic elements while upgrading technical systems and amenities. The project involved careful restoration of ornate plasterwork, original seating, and the iconic marquee.',
    client: 'Downtown Heritage Foundation',
    timeline: '16 months',
    outcome: 'The renovated theater has resumed its place as a cultural landmark, hosting performances, film festivals, and community events. The project won a preservation award for its sensitive restoration approach.'
  },
  {
    id: 6,
    title: 'Coastal Vacation Home',
    category: 'Residential',
    location: 'Malibu, CA',
    year: 2022,
    thumbnail: 'https://images.pexels.com/photos/2351649/pexels-photo-2351649.jpeg',
    images: [
      'https://images.pexels.com/photos/2351649/pexels-photo-2351649.jpeg',
      'https://images.pexels.com/photos/189333/pexels-photo-189333.jpeg',
      'https://images.pexels.com/photos/1438834/pexels-photo-1438834.jpeg',
    ],
    description: 'A 4,200 sq ft beach house designed to maximize ocean views and withstand coastal conditions. Features include hurricane-resistant construction, sustainable bamboo flooring, and a wraparound deck with glass railings.',
    client: 'Private Owner',
    timeline: '12 months',
    outcome: 'The completed home provides a perfect balance of luxury and durability, with energy-efficient systems that reduce operating costs despite the challenging coastal environment.'
  },
  {
    id: 7,
    title: 'Urban Boutique Hotel',
    category: 'Commercial',
    location: 'Seattle, WA',
    year: 2020,
    thumbnail: 'https://images.pexels.com/photos/462235/pexels-photo-462235.jpeg',
    images: [
      'https://images.pexels.com/photos/462235/pexels-photo-462235.jpeg',
      'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg',
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
    ],
    description: 'Conversion of a former warehouse into a 72-room boutique hotel with rooftop bar, restaurant, and spa. The design preserved industrial elements like exposed brick and beams while adding modern luxury amenities.',
    client: 'Cityscape Hospitality Group',
    timeline: '15 months',
    outcome: 'The hotel has quickly become one of the city\'s top-rated accommodations, known for its unique character and excellent guest experience.'
  },
  {
    id: 8,
    title: 'Contemporary Family Home',
    category: 'Residential',
    location: 'Denver, CO',
    year: 2021,
    thumbnail: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
    images: [
      'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
      'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg',
      'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg',
    ],
    description: 'A 3,800 sq ft modern family home with an open floor plan, home office, home gym, and outdoor living area with fireplace. The energy-efficient design includes solar panels, high-efficiency HVAC, and insulation exceeding code requirements.',
    client: 'The Johnson Family',
    timeline: '10 months',
    outcome: 'The completed home provides the perfect balance of functionality and style for a growing family, with flexible spaces that can adapt to changing needs over time.'
  },
  {
    id: 9,
    title: 'Medical Office Building',
    category: 'Commercial',
    location: 'Minneapolis, MN',
    year: 2019,
    thumbnail: 'https://images.pexels.com/photos/668298/pexels-photo-668298.jpeg',
    images: [
      'https://images.pexels.com/photos/668298/pexels-photo-668298.jpeg',
      'https://images.pexels.com/photos/127873/pexels-photo-127873.jpeg',
      'https://images.pexels.com/photos/247564/pexels-photo-247564.jpeg',
    ],
    description: 'A 45,000 sq ft medical office building housing multiple specialties with shared waiting areas and administrative facilities. The design prioritized patient comfort, staff efficiency, and specialized requirements for medical equipment.',
    client: 'Northside Health Partners',
    timeline: '14 months',
    outcome: 'The facility has improved patient experience and operational efficiency for the medical group, with features that support both current needs and future expansion.'
  },
  {
    id: 10,
    title: 'Mountain Retreat',
    category: 'Residential',
    location: 'Aspen, CO',
    year: 2022,
    thumbnail: 'https://images.pexels.com/photos/803975/pexels-photo-803975.jpeg',
    images: [
      'https://images.pexels.com/photos/803975/pexels-photo-803975.jpeg',
      'https://images.pexels.com/photos/3220824/pexels-photo-3220824.jpeg',
      'https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg',
    ],
    description: 'A 5,600 sq ft mountain lodge combining rustic materials with modern design. Features include floor-to-ceiling stone fireplace, timber frame construction, home automation system, and a heated outdoor patio with hot tub and mountain views.',
    client: 'Private Owner',
    timeline: '16 months',
    outcome: 'The completed home provides a luxurious mountain getaway with durable construction that will withstand the alpine environment for generations.'
  },
  {
    id: 11,
    title: 'Community Recreation Center',
    category: 'Commercial',
    location: 'Nashville, TN',
    year: 2020,
    thumbnail: 'https://images.pexels.com/photos/260352/pexels-photo-260352.jpeg',
    images: [
      'https://images.pexels.com/photos/260352/pexels-photo-260352.jpeg',
      'https://images.pexels.com/photos/261328/pexels-photo-261328.jpeg',
      'https://images.pexels.com/photos/5997967/pexels-photo-5997967.jpeg',
    ],
    description: 'A 35,000 sq ft community center featuring an indoor pool, basketball courts, fitness area, multipurpose rooms, and child care facilities. The design emphasized accessibility, durability, and energy efficiency.',
    client: 'Metropolitan Parks Department',
    timeline: '18 months',
    outcome: 'The center has become a hub for community activities, serving residents of all ages and abilities with programs and facilities that promote health and social connection.'
  },
  {
    id: 12,
    title: 'Urban Loft Renovation',
    category: 'Residential',
    location: 'Philadelphia, PA',
    year: 2021,
    thumbnail: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    images: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg',
      'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg',
    ],
    description: 'Conversion of a former factory space into a 2,800 sq ft residential loft. The renovation preserved industrial elements like exposed brick, concrete floors, and ductwork while adding modern kitchen, bathrooms, and custom storage solutions.',
    client: 'Private Owner',
    timeline: '8 months',
    outcome: 'The completed loft balances historic character with contemporary comfort, creating a unique urban living space that honors the building\'s industrial past.'
  }
];

const ProjectsPage = () => {
  const [category, setCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredProjects = category === 'All' 
    ? projects 
    : projects.filter(project => project.category === category);

  const openProject = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((currentImageIndex + 1) % selectedProject.images.length);
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((currentImageIndex - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PageHeader
        title="Our Projects"
        subtitle="Explore our portfolio of completed construction projects."
        backgroundImage="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg"
      />

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            title="Project Portfolio"
            subtitle="Browse through our diverse range of construction projects, showcasing our expertise and commitment to quality craftsmanship."
          />

          {/* Category Filter */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-gray-100 rounded-lg p-1">
              {['All', 'Residential', 'Commercial'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-6 py-2 rounded-md transition-colors ${
                    category === cat
                      ? 'bg-primary-600 text-white'
                      : 'text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-soft overflow-hidden cursor-pointer group"
                onClick={() => openProject(project)}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={project.thumbnail} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="bg-accent-500 text-primary-900 text-sm font-medium inline-block px-3 py-1 rounded mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-heading">{project.title}</h3>
                  <p className="text-gray-600 mb-2">{project.location} | {project.year}</p>
                  <p className="text-primary-600 font-medium mt-4 group-hover:underline">
                    View Project Details
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 md:p-8"
            onClick={closeProject}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeProject}
                className="absolute top-4 right-4 bg-white p-2 rounded-full z-10"
              >
                <X size={24} />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image Gallery */}
                <div className="relative h-[300px] md:h-[500px] lg:h-full bg-gray-900">
                  {selectedProject.images.map((img, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-500 ${
                        index === currentImageIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
                      }`}
                    >
                      <img 
                        src={img} 
                        alt={`${selectedProject.title} - Image ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}

                  {/* Navigation Arrows */}
                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => { e.stopPropagation(); prevImage(); }}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M15 18l-6-6 6-6" />
                        </svg>
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); nextImage(); }}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 18l6-6-6-6" />
                        </svg>
                      </button>
                    </>
                  )}

                  {/* Image Counter */}
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                    {currentImageIndex + 1} / {selectedProject.images.length}
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-8">
                  <div className="bg-accent-500 text-primary-900 text-sm font-medium inline-block px-3 py-1 rounded mb-3">
                    {selectedProject.category}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 font-heading">{selectedProject.title}</h3>
                  <p className="text-gray-600 mb-6">{selectedProject.location} | {selectedProject.year}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-bold mb-2 font-heading">Project Details</h4>
                    <p className="text-gray-700 leading-relaxed">{selectedProject.description}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <h4 className="text-lg font-bold mb-1 font-heading">Client</h4>
                      <p className="text-gray-700">{selectedProject.client}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1 font-heading">Timeline</h4>
                      <p className="text-gray-700">{selectedProject.timeline}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1 font-heading">Category</h4>
                      <p className="text-gray-700">{selectedProject.category}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold mb-2 font-heading">Outcome</h4>
                    <p className="text-gray-700 leading-relaxed">{selectedProject.outcome}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectsPage;