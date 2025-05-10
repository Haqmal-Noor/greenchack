import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHeader from "../components/shared/PageHeader";
import SectionHeader from "../components/shared/SectionHeader";
import {
	Home,
	Building2,
	Hammer,
	Paintbrush,
	ClipboardList,
	Leaf,
	ChevronDown,
} from "lucide-react";
import Button from "../components/ui/Button";

// Services data
const services = [
	{
		id: 1,
		title: "Residential Building",
		icon: <Home size={40} className="text-primary-600" />,
		shortDesc:
			"Custom homes and residential developments built to the highest standard.",
		longDesc:
			"Our residential building services cover everything from single-family homes to multi-unit developments. We work closely with homeowners and developers to create living spaces that are beautiful, functional, and built to last. Our team handles every stage of the process, from design consultation to final touches.",
		image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
	},
	{
		id: 2,
		title: "Commercial Construction",
		icon: <Building2 size={40} className="text-primary-600" />,
		shortDesc:
			"Office buildings, retail spaces, and other commercial projects.",
		longDesc:
			"We deliver commercial construction projects that meet the unique needs of businesses and organizations. Our expertise includes office buildings, retail spaces, restaurants, hotels, and industrial facilities. We prioritize functionality, energy efficiency, and timely completion to ensure minimal disruption to your business operations.",
		image: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg",
	},
	{
		id: 3,
		title: "Renovations",
		icon: <Hammer size={40} className="text-primary-600" />,
		shortDesc:
			"Transforming existing structures with modern upgrades and renovations.",
		longDesc:
			"Our renovation services breathe new life into existing structures. Whether you're looking to update a historic building, expand your current space, or completely transform your property, our team has the expertise to execute your vision while maintaining structural integrity and addressing any underlying issues.",
		image: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg",
	},
	{
		id: 4,
		title: "Interior Finishing",
		icon: <Paintbrush size={40} className="text-primary-600" />,
		shortDesc:
			"Premium interior finishes and custom cabinetry for a polished look.",
		longDesc:
			"From premium flooring and custom cabinetry to detailed millwork and paint finishes, our interior finishing services add the perfect final touch to your construction project. We work with high-quality materials and skilled craftspeople to create interiors that are both beautiful and durable.",
		image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
	},
	{
		id: 5,
		title: "Project Management",
		icon: <ClipboardList size={40} className="text-primary-600" />,
		shortDesc:
			"End-to-end project management for construction projects of all sizes.",
		longDesc:
			"Our project management services ensure your construction project runs smoothly from start to finish. We handle scheduling, coordination with subcontractors, procurement of materials, quality control, and budget management. Our experienced project managers serve as your single point of contact throughout the construction process.",
		image: "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg",
	},
	{
		id: 6,
		title: "Sustainability Consulting",
		icon: <Leaf size={40} className="text-primary-600" />,
		shortDesc:
			"Green building practices and sustainability solutions for eco-friendly construction.",
		longDesc:
			"We provide expertise in sustainable building practices, from material selection and energy-efficient designs to LEED certification assistance. Our sustainability consulting helps clients reduce the environmental impact of their construction projects while often reducing long-term operating costs and creating healthier spaces for occupants.",
		image: "https://images.pexels.com/photos/3779399/pexels-photo-3779399.jpeg",
	},
];

// FAQ data
const faqs = [
	{
		question: "What areas do you serve?",
		answer:
			"SolidBuild Co. primarily serves the metropolitan area and surrounding suburbs within a 100-mile radius. For larger commercial projects, we may travel further. Contact us to discuss your specific location.",
	},
	{
		question: "How long does a typical construction project take?",
		answer:
			"Project timelines vary greatly depending on scope and complexity. A small renovation might take 4-8 weeks, while a custom home typically requires 6-12 months. Commercial projects can range from 3 months to several years. During our initial consultation, we'll provide a detailed timeline specific to your project.",
	},
	{
		question: "Do you handle permits and inspections?",
		answer:
			"Yes, SolidBuild Co. manages all necessary permits, approvals, and inspections as part of our comprehensive service. Our team is familiar with local building codes and regulations, and we work directly with municipal authorities to ensure compliance throughout the construction process.",
	},
	{
		question: "How do you handle project changes and additions?",
		answer:
			"We understand that changes sometimes occur during construction. We manage changes through a formal change order process that documents the requested modifications, associated costs, and any impact on the timeline. All changes must be approved before implementation to ensure transparency and proper project management.",
	},
	{
		question: "What type of warranty do you offer?",
		answer:
			"SolidBuild Co. provides a comprehensive 1-year warranty on workmanship, plus we pass through all manufacturer warranties on materials and systems. For structural elements, we offer an extended 10-year structural warranty. Detailed warranty information is provided in our contract documents.",
	},
];

const ServicesPage = () => {
	const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

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
				subtitle="Comprehensive construction services tailored to your needs."
				backgroundImage="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg"
			/>

			{/* Services Introduction */}
			<section className="py-20">
				<div className="container mx-auto px-4 md:px-6">
					<SectionHeader
						title="Building Excellence in Every Project"
						subtitle="At SolidBuild Co., we offer a comprehensive range of construction services designed to meet your specific needs. From initial concept to final completion, our experienced team delivers exceptional quality, attention to detail, and client-focused solutions."
					/>

					{/* Services Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
						{services.map((service, index) => (
							<motion.div
								key={service.id}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className="bg-white rounded-lg shadow-soft overflow-hidden h-full flex flex-col">
								{/* Service Image */}
								<div className="h-56 overflow-hidden">
									<img
										src={service.image}
										alt={service.title}
										className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
									/>
								</div>

								{/* Service Content */}
								<div className="p-6 flex flex-col flex-grow">
									<div className="flex items-center mb-4">
										<div className="mr-4">{service.icon}</div>
										<h3 className="text-xl font-bold font-heading">
											{service.title}
										</h3>
									</div>
									<p className="text-gray-600 mb-6">{service.shortDesc}</p>
									<p className="text-gray-700 mb-6 flex-grow">
										{service.longDesc}
									</p>
									<Button
										to="/contact"
										variant="outline"
										className="mt-auto self-start">
										Request Service
									</Button>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Process Section */}
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
			</section>

			{/* FAQ Section */}
			<section className="py-20">
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
			</section>

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
							Ready to Start Your Construction Project?
						</motion.h2>
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.7, delay: 0.2 }}
							className="text-xl mb-8 text-gray-100">
							Contact us today to schedule a consultation and discuss your
							construction needs.
						</motion.p>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.7, delay: 0.3 }}>
							<Button to="/contact" variant="accent" size="lg">
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
