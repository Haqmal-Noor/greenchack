import { motion } from "framer-motion";
import PageHeader from "../components/shared/PageHeader";
import SectionHeader from "../components/shared/SectionHeader";
import { Star, ShieldCheck, Handshake, BarChart2 } from "lucide-react";

// Sample team members data
// const teamMembers = [
// 	{
// 		id: 1,
// 		name: "Robert Johnson",
// 		position: "CEO & Founder",
// 		image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
// 		bio: "With over 25 years in the construction industry, Robert founded GreenChack with a vision to deliver premium quality construction services.",
// 	},
// 	{
// 		id: 2,
// 		name: "Sarah Martinez",
// 		position: "Chief Architect",
// 		image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
// 		bio: "Sarah brings creative vision and technical expertise to every project, designing innovative spaces that meet client needs.",
// 	},
// 	{
// 		id: 3,
// 		name: "Michael Chen",
// 		position: "Construction Manager",
// 		image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
// 		bio: "Michael ensures all construction activities run smoothly, maintaining the highest standards of quality and safety.",
// 	},
// 	{
// 		id: 4,
// 		name: "Lisa Anderson",
// 		position: "Interior Design Lead",
// 		image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
// 		bio: "Lisa specializes in creating beautiful, functional interior spaces that perfectly complement the architectural design.",
// 	},
// 	{
// 		id: 5,
// 		name: "James Wilson",
// 		position: "Civil Engineer",
// 		image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
// 		bio: "James brings technical precision to our structural engineering, ensuring buildings are safe, durable, and innovative.",
// 	},
// 	{
// 		id: 6,
// 		name: "Emily Thompson",
// 		position: "Project Coordinator",
// 		image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
// 		bio: "Emily keeps projects on schedule and clients informed, serving as the central point of communication for all stakeholders.",
// 	},
// ];

// Company history timeline
const timelineEvents = [
	{
		year: 2020,
		title: "Company Founded",
		description:
			"GreenChack was established with a small team of dedicated professionals.",
	},
	{
		year: 2021,
		title: "First Major Commercial Project",
		description:
			"Completed our first major office building, establishing our reputation in commercial construction.",
	},
	{
		year: 2022,
		title: "Expanded Services",
		description:
			"Added interior design and sustainable building practices to our service offerings.",
	},
	{
		year: 2023,
		title: "Industry Recognition",
		description:
			"Received multiple awards for excellence in construction and innovative design.",
	},
	{
		year: 2024,
		title: "National Expansion",
		description:
			"Opened additional offices to serve clients across the country.",
	},
];

const AboutPage = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}>
			<PageHeader
				title="About GreenChack"
				subtitle=""
				backgroundImage="/images/hero.jpg"
			/>

			{/* Company Story */}
			<section className="py-20">
				<div className="container mx-auto px-4 md:px-6">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.7 }}>
							<h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
								<span className="text-primary-700">GreenChack:</span> Your
								Strategic Partner for Resilient Growth in Afghanistan
							</h2>
							<p className="text-gray-700 mb-6 leading-relaxed">
								GreenChack is a premier construction and consulting firm
								committed to driving positive change by empowering
								organizations, businesses, and infrastructure projects across
								Afghanistan. As a sister company of Hemayat Etmenan Construction
								Company (HECC), GreenChack builds upon a strong foundation of
								engineering excellence, field experience, and local trust to
								deliver impactful solutions that meet the highest national and
								international standards. With a team of highly skilled
								professionals, we provide innovative, data-driven, and
								results-oriented services that enhance operational efficiency,
								ensure regulatory compliance, and promote long-term
								sustainability. We understand the unique challenges faced by
								non-governmental organizations, businesses, and development
								initiatives operating in Afghanistan's evolving landscape. Our
								comprehensive consulting services are tailored to help clients
								navigate complexity, mitigate risks, and seize opportunities for
								growth. Whether it's launching new projects, optimizing
								operations, securing funding, or advancing infrastructure
								development, GreenChack offers strategic guidance that
								transforms vision into measurable success. On the construction
								side, we turn your dreams into reality—delivering high-quality
								projects at affordable costs while upholding stringent standards
								and time efficiency. Our client-centric approach, deep industry
								insights, and commitment to excellence enable us to deliver
								customized solutions that create meaningful impact. By fostering
								innovation, collaboration, and best practices, we support our
								partners in achieving their goals while contributing to
								Afghanistan's economic and social development. With GreenChack
								as your trusted partner, and the legacy of HECC behind us, you
								gain access to proven expertise that empowers you to build a
								stronger, more resilient future.
							</p>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, x: 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.7 }}>
							<div className="rounded-lg overflow-hidden shadow-medium">
								<img
									src="/images/about.jpg"
									alt="GreenChack"
									className="w-full h-full object-cover"
								/>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Core Values */}
			<section className="py-20 bg-gray-50">
				<div className="container mx-auto px-4 md:px-6">
					<SectionHeader
						title="Our Core Values"
						subtitle="The principles that guide our work and define our company culture."
					/>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
						{[
							{
								icon: <Star size={40} className="text-primary-600" />,
								title: "Excellence",
								description:
									"Delivering high-quality, results-driven construction and consulting solutions.",
							},
							{
								icon: <ShieldCheck size={40} className="text-primary-600" />,
								title: "Integrity",
								description:
									"Upholding transparency, ethical business practices, and full accountability in everything we do.",
							},

							{
								icon: <Handshake size={40} className="text-primary-600" />,
								title: "Collaboration",
								description:
									"Building strong partnerships to achieve mutual success and long-term impact.",
							},
							{
								icon: <BarChart2 size={40} className="text-primary-600" />,
								title: "Impact",
								description:
									"Driving meaningful, measurable change through effective and strategic solutions.",
							},
						].map((value, index) => (
							<motion.div
								key={value.title}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className="bg-white p-8 rounded-lg shadow-soft text-center">
								<div className="flex justify-center mb-4">{value.icon}</div>
								<h3 className="text-xl font-bold mb-3 font-heading">
									{value.title}
								</h3>
								<p className="text-gray-600">{value.description}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Team Section */}
			<section className="py-20">
				<div className="container mx-auto px-4 md:px-6">
					<div className="mb-12 md:mb-16 text-center">
						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-100px" }}
							transition={{ duration: 0.7 }}
							className="text-3xl md:text-4xl font-bold font-heading mb-4">
							<span className="text-primary-700">Our Team</span>
						</motion.h2>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-100px" }}
							transition={{ duration: 0.7, delay: 0.2 }}
							className="text-gray-600 text-lg max-w-2xl mx-auto">
							At GreenChack, our team is the heart of our success. Comprised of
							highly skilled professionals with diverse expertise in
							construction, engineering, and consulting, we are united by a
							shared commitment to excellence and sustainable development. Each
							team member brings unique insights and innovative solutions to the
							table, ensuring we deliver the highest quality service to our
							clients. Together, we drive positive change and build a stronger
							future for Afghanistan.
						</motion.p>
					</div>
					<p></p>
				</div>
			</section>

			{/* Timeline Section */}
			<section className="py-20 bg-gray-50">
				<div className="container mx-auto px-4 md:px-6">
					<SectionHeader
						title="Our Journey"
						subtitle="Key milestones in the evolution of GreenChack"
					/>

					<div className="relative mt-16">
						{/* Timeline Line */}
						<div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200"></div>

						{timelineEvents.map((event, index) => (
							<motion.div
								key={event.year}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.7, delay: index * 0.2 }}
								className={`relative mb-12 md:mb-24 ${
									index % 2 === 0 ? "md:text-right" : ""
								}`}>
								<div className="md:grid md:grid-cols-2 items-center">
									<div
										className={
											index % 2 === 0 ? "md:pr-12" : "md:pl-12 md:col-start-2"
										}>
										<div className="bg-white p-6 rounded-lg shadow-soft relative">
											{/* Year Bubble */}
											<div
												className={`absolute top-6 ${
													index % 2 === 0
														? "md:-right-20 right-6"
														: "md:-left-20 left-6"
												} bg-primary-600 text-white font-bold text-xl rounded-full w-16 h-16 flex items-center justify-center md:transform ${
													index % 2 === 0
														? "md:translate-x-1/2"
														: "md:-translate-x-1/2"
												}`}>
												{event.year}
											</div>
											<h3 className="text-xl font-bold mb-3 pr-16 md:pr-0 font-heading">
												{event.title}
											</h3>
											<p className="text-gray-600">{event.description}</p>
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* CEO Quote */}
			<section className="py-20 bg-primary-900 text-white">
				<div className="container mx-auto px-4 md:px-6">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7 }}
						className="max-w-4xl mx-auto text-center">
						<Quote size={60} className="mx-auto mb-8 text-primary-400" />
						<p className="text-2xl md:text-3xl italic mb-8 leading-relaxed">
							"At GreenChack, we are committed to delivering innovative,
							sustainable solutions that drive growth and create lasting impact.
							Our mission is to empower organizations and communities across
							Afghanistan, providing expert construction and consulting services
							that meet the highest standards of excellence and integrity.
							Together, we are building a brighter, more resilient future for
							Afghanistan."
						</p>
						<div className="flex flex-col items-center">
							<p className="font-bold text-xl mb-1">Ahmad Khalid Slimankhil</p>
							<p className="text-primary-400">CEO & Founder</p>
						</div>
					</motion.div>
				</div>
			</section>
		</motion.div>
	);
};

// Quote icon component
const Quote = ({ size = 24, className = "" }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		className={className}>
		<path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
		<path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
	</svg>
);

export default AboutPage;
