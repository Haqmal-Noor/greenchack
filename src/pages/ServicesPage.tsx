import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHeader from "../components/shared/PageHeader";
import SectionHeader from "../components/shared/SectionHeader";
import { ChevronDown } from "lucide-react";
import Button from "../components/ui/Button";

// Services data

const services = [
	// --- Construction & Infrastructure Development (6 subcategories) ---
	{
		id: 1,
		category: "Construction & Infrastructure Development",
		title: "Residential & Commercial Building Construction",
		description:
			"Design, execution, and supervision of durable and cost-effective housing, office buildings, and commercial facilities.",
		image:
			"https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
	},
	{
		id: 2,
		category: "Construction & Infrastructure Development",
		title: "Roads & Transportation Infrastructure",
		description:
			"Planning and construction of roads, bridges, and transportation networks to improve connectivity and mobility.",
		image:
			"https://img.freepik.com/free-photo/modern-highway-taken-by-drone_23-2148346107.jpg?t=st=1746970508~exp=1746974108~hmac=7a21fbea41cac90111971e64fa37568b2bb6b39ea0b3e5cecc134e8eb2d228cd&w=1380",
	},
	{
		id: 3,
		category: "Construction & Infrastructure Development",
		title: "Water Supply & Irrigation Systems",
		description:
			"Construction of water distribution networks, reservoirs, wells, and irrigation canals for urban and rural communities.",
		image:
			"https://img.freepik.com/premium-photo/industrial-pipeline-that-goes-into-perspective-ground-structures-modern-mine_533998-1446.jpg?w=1380",
	},
	{
		id: 4,
		category: "Construction & Infrastructure Development",
		title: "Public Facilities & Institutional Buildings",
		description:
			"Development of schools, health centers, government buildings, and community spaces to serve the public.",
		image:
			"https://www.shutterstock.com/image-photo/exterior-facade-generic-small-business-260nw-1476338159.jpg",
	},
	{
		id: 5,
		category: "Construction & Infrastructure Development",
		title: "Industrial & Warehouse Construction",
		description:
			"Turnkey solutions for factories, warehouses, and production units to support industrial growth.",
		image:
			"https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
	},
	{
		id: 6,
		category: "Construction & Infrastructure Development",
		title: "Construction Project Management & Supervision",
		description:
			"End-to-end management and quality control to ensure timely, safe, and budget-aligned project delivery.",
		image:
			"https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
	},

	// --- Organizational Development Consulting (4 subcategories) ---
	{
		id: 7,
		category: "Organizational Development Consulting",
		title: "Monitoring & Evaluation (M&E)",
		description:
			"Designing and implementing robust M&E frameworks to track project performance, ensure compliance with donor requirements, and enhance transparency.",
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPqWmTRkEc6zzgbtawb-KpDcklpx0yXWQiZA&s",
	},
	{
		id: 8,
		category: "Organizational Development Consulting",
		title: "Proposal Writing & Grant Securing",
		description:
			"Crafting compelling proposals to secure funding from major donors. Our expertise ensures competitive positioning in the grant application process.",
		image:
			"https://images.pexels.com/photos/6693655/pexels-photo-6693655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
	},
	{
		id: 9,
		category: "Organizational Development Consulting",
		title: "Capacity Building & Training",
		description:
			"Empowering organizations' professionals through hands-on training in project management, compliance, reporting, and donor engagement.",
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEKlQMr8gSlEjcjg8YlNNBsoRE2QRsJD1DoA&s",
	},
	{
		id: 10,
		category: "Organizational Development Consulting",
		title: "Strategic Program Development",
		description:
			"Assisting organizations in designing impactful programs aligned with donor priorities and community needs.",
		image:
			"https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
	},

	// --- Engineering & Infrastructure Development Consulting (5 subcategories) ---
	{
		id: 11,
		category: "Engineering & Infrastructure Development Consulting",
		title: "Civil & Structural Engineering",
		description:
			"Offering expert consultation on roads, bridges, water supply networks, urban planning, and infrastructure resilience.",
		image:
			"https://images.pexels.com/photos/53176/architecture-iron-steel-building-53176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
	},
	{
		id: 12,
		category: "Engineering & Infrastructure Development Consulting",
		title: "Water & Sanitation Engineering",
		description:
			"Developing sustainable solutions for water distribution, wastewater treatment, and sanitation systems to enhance public health.",
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgFMXANVv7kP8rHwyxLDMjz8fc5uRMPJZ3Yg&s",
	},
	{
		id: 13,
		category: "Engineering & Infrastructure Development Consulting",
		title: "Renewable Energy & Sustainability",
		description:
			"Supporting businesses and NGOs in implementing solar, wind, and hydroelectric power solutions to address Afghanistan's energy challenges.",
		image:
			"https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
	},
	{
		id: 14,
		category: "Engineering & Infrastructure Development Consulting",
		title: "Environmental Engineering & Climate Resilience",
		description:
			"Providing environmental impact assessments, sustainability planning, and resource management consulting.",
		image:
			"https://images.pexels.com/photos/2990650/pexels-photo-2990650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
	},
	{
		id: 15,
		category: "Engineering & Infrastructure Development Consulting",
		title: "Mechanical & Electrical Engineering",
		description:
			"Consulting on industrial automation, HVAC systems, electrical grid optimization, and energy efficiency for public and private sector projects.",
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl1XLt_GVyzNQ-FgAfY6uRRu7AVKw85XMScA&s",
	},

	// --- Business, Legal & Market Advisory Services (4 subcategories) ---
	{
		id: 16,
		category: "Business, Legal & Market Advisory Services",
		title: "Business Strategy & Market Research",
		description:
			"Providing in-depth market analysis, feasibility studies, and strategic planning for startups, SMEs, and investors.",
		image:
			"https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
	},
	{
		id: 17,
		category: "Business, Legal & Market Advisory Services",
		title: "Technical Translation & Documentation",
		description:
			"Delivering high-quality Pashto/Dari-to-English translations for technical reports, donor proposals, business contracts, and international collaborations.",
		image:
			"https://images.pexels.com/photos/4126743/pexels-photo-4126743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
	},
	{
		id: 18,
		category: "Business, Legal & Market Advisory Services",
		title: "Regulatory Compliance & Legal Advisory",
		description:
			"Assisting businesses with corporate governance, licensing, tax compliance, and adherence to Afghan regulatory frameworks.",
		image:
			"https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
	},
	{
		id: 19,
		category: "Business, Legal & Market Advisory Services",
		title: "Investment & Financial Advisory",
		description:
			"Offering insights and guidance on investment opportunities, risk assessments, and financial structuring for business growth.",
		image:
			"https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
	},
];

// FAQ data
const faqs = [
	{
		question: "What areas do you serve?",
		answer:
			"GreenChack primarily serves the metropolitan area and surrounding suburbs within a 100-mile radius. For larger commercial projects, we may travel further. Contact us to discuss your specific location.",
	},
	{
		question: "How long does a typical construction project take?",
		answer:
			"Project timelines vary greatly depending on scope and complexity. A small renovation might take 4-8 weeks, while a custom home typically requires 6-12 months. Commercial projects can range from 3 months to several years. During our initial consultation, we'll provide a detailed timeline specific to your project.",
	},
	{
		question: "Do you handle permits and inspections?",
		answer:
			"Yes, GreenChack manages all necessary permits, approvals, and inspections as part of our comprehensive service. Our team is familiar with local building codes and regulations, and we work directly with municipal authorities to ensure compliance throughout the construction process.",
	},
	{
		question: "How do you handle project changes and additions?",
		answer:
			"We understand that changes sometimes occur during construction. We manage changes through a formal change order process that documents the requested modifications, associated costs, and any impact on the timeline. All changes must be approved before implementation to ensure transparency and proper project management.",
	},
	{
		question: "What type of warranty do you offer?",
		answer:
			"GreenChack provides a comprehensive 1-year warranty on workmanship, plus we pass through all manufacturer warranties on materials and systems. For structural elements, we offer an extended 10-year structural warranty. Detailed warranty information is provided in our contract documents.",
	},
];

const categories = [
	"All",
	"Construction & Infrastructure Development",
	"Organizational Development Consulting",
	"Engineering & Infrastructure Development Consulting",
	"Business, Legal & Market Advisory Services",
];

const ServicesPage = () => {
	const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
	const [category, setCategory] = useState("All");

	const filteredServices =
		category === "All"
			? services
			: services.filter((service) => service.category === category);

	const toggleFaq = (index: number) => {
		if (expandedFaq === index) {
			setExpandedFaq(null);
		} else {
			setExpandedFaq(index);
		}
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}>
			<PageHeader
				title="Our Services"
				subtitle=""
				backgroundImage="/images/hero.jpg"
			/>

			{/* Services Introduction */}
			<section className="py-20">
				<div className="container mx-auto px-4 md:px-6">
					<SectionHeader
						title="Building Excellence in Every Project"
						subtitle="GreenChack provides integrated solutions in Construction & Infrastructure Development, Organizational Development, Engineering & Infrastructure Consulting, and Business, Legal & Market Advisory. We help NGOs boost impact through funding, monitoring, and training support. Our engineering team drives sustainable infrastructure in Afghanistan, focusing on civil works, energy, and resilience. We also guide businesses with market research, compliance, investment, and translation services, empowering clients to achieve sustainable growth and lasting impact."
					/>

					<div className="flex flex-wrap justify-center gap-2 mb-12">
						{categories.map((cat) => (
							<button
								key={cat}
								onClick={() => setCategory(cat)}
								className={`px-4 py-2 rounded-md border text-sm transition 
            ${
							category === cat
								? "bg-primary-600 text-white border-primary-500"
								: "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
						}`}>
								{cat}
							</button>
						))}
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{filteredServices.map((project, index) => (
							<motion.div
								key={project.id}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className="bg-white rounded-lg shadow-soft overflow-hidden cursor-pointer group">
								<div className="h-64 overflow-hidden">
									<img
										src={project.image}
										alt={project.title}
										className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
									/>
								</div>
								<div className="p-6">
									<div className="bg-primary-600 text-white text-sm font-medium inline-block px-3 py-1 rounded mb-2">
										{project.category}
									</div>
									<h3 className="text-xl font-bold mb-2 font-heading">
										{project.title}
									</h3>
									<p className="text-gray-600 mb-2">{project.description}</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Process Section
			<section className="py-20 bg-gray-50">
				<div className="container mx-auto px-4 md:px-6">
					<SectionHeader
						title="Our Construction Process"
						subtitle="A systematic approach to bringing your vision to life."
					/>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
						{[
							{
								step: 1,
								title: "Consultation",
								description:
									"We begin with a detailed consultation to understand your needs, vision, and budget constraints.",
							},
							{
								step: 2,
								title: "Design & Planning",
								description:
									"Our team creates comprehensive designs and develops detailed project plans and timelines.",
							},
							{
								step: 3,
								title: "Construction",
								description:
									"Our skilled craftspeople execute the plans with precision, quality, and attention to detail.",
							},
							{
								step: 4,
								title: "Completion",
								description:
									"After thorough inspections and final touches, we deliver your completed project.",
							},
						].map((process, index) => (
							<motion.div
								key={process.step}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.2 }}
								className="bg-white p-8 rounded-lg shadow-soft text-center">
								<div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
									{process.step}
								</div>
								<h3 className="text-xl font-bold mb-4 font-heading">
									{process.title}
								</h3>
								<p className="text-gray-600">{process.description}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section> */}

			{/* FAQ Section */}
			{/* <section className="py-20">
				<div className="container mx-auto px-4 md:px-6">
					<SectionHeader
						title="Frequently Asked Questions"
						subtitle="Find answers to common questions about our services and process."
					/>

					<div className="max-w-3xl mx-auto mt-12">
						{faqs.map((faq, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className="mb-6">
								<button
									onClick={() => toggleFaq(index)}
									className={`w-full flex justify-between items-center p-6 bg-white rounded-lg shadow-soft text-left transition-colors ${
										expandedFaq === index ? "bg-primary-50" : ""
									}`}>
									<span className="text-lg font-medium">{faq.question}</span>
									<ChevronDown
										size={20}
										className={`transition-transform ${
											expandedFaq === index ? "rotate-180" : ""
										}`}
									/>
								</button>
								<AnimatePresence>
									{expandedFaq === index && (
										<motion.div
											initial={{ height: 0, opacity: 0 }}
											animate={{ height: "auto", opacity: 1 }}
											exit={{ height: 0, opacity: 0 }}
											transition={{ duration: 0.3 }}
											className="overflow-hidden">
											<div className="p-6 pt-4 text-gray-600 border-t border-gray-100">
												{faq.answer}
											</div>
										</motion.div>
									)}
								</AnimatePresence>
							</motion.div>
						))}
					</div>
				</div>
			</section> */}

			{/* CTA Section */}
			<section className="py-20 bg-primary-900 text-white">
				<div className="container mx-auto px-4 md:px-6">
					<div className="max-w-4xl mx-auto text-center">
						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.7 }}
							className="text-3xl md:text-4xl font-bold font-heading mb-6">
							Ready to Start Your Project?
						</motion.h2>
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.7, delay: 0.2 }}
							className="text-xl mb-8 text-gray-100">
							Contact us today to schedule a consultation and discuss your
							needs.
						</motion.p>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.7, delay: 0.3 }}>
							<Button to="/contact" variant="primary" size="md">
								Get in Touch
							</Button>
						</motion.div>
					</div>
				</div>
			</section>
		</motion.div>
	);
};

export default ServicesPage;
