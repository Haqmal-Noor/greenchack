import { motion } from "framer-motion";
import {
	Settings,
	Target,
	Briefcase,
	Leaf,
	Users,
	Lightbulb,
} from "lucide-react"; // Added Lightbulb icon
import SectionHeader from "../shared/SectionHeader";
import Card from "../ui/Card";

const features = [
	{
		icon: <Briefcase size={40} className="text-primary-600" />,
		title: "Industry Expertise",
		description:
			"GreenChack is backed by a team of highly skilled staf with extensive experience across multiple sectors, including humanitarian aid, engineering, business strategy, and infrastructure development. Our professionals bring in-depth knowledge and hands-on experience in managing complex projects, securing funding, and optimizing operations to help clients achieve their strategic objectives efficiently.",
	},
	{
		icon: <Settings size={40} className="text-primary-600" />,
		title: "Tailored Solutions",
		description:
			"We recognize that every organization, business, and project has distinct needs and challenges. Our services are carefully customized to align with the specific goals of our clients. By conducting in-depth assessments and leveraging industry best practices, we design strategic, practical, and innovative solutions that maximize efficiency, enhance performance, and drive sustainable growth.",
	},
	{
		icon: <Target size={40} className="text-primary-600" />,
		title: "Results-Driven Approach",
		description:
			"At GreenChack, we measure success through impact. Our methodology emphasizes data-driven decision-making, rigorous performance monitoring, and continuous improvement to ensure that every initiative delivers measurable outcomes. We work closely with clients to track progress, optimize strategies, and achieve long-term success in their humanitarian, business, and infrastructure endeavors.",
	},
	{
		icon: <Leaf size={40} className="text-primary-600" />,
		title: "Sustainability Focus",
		description:
			"GreenChack is committed to integrating sustainability into every aspect of our work. Whether it’s engineering environmentally friendly infrastructure, promoting renewable energy solutions, or advising on climate resilience strategies, we prioritize long-term, eco-conscious solutions that contribute to sustainable development. Our approach ensures that businesses, NGOs, and projects not only meet today’s needs but also create lasting benefits for future generations.",
	},
	{
		icon: <Users size={40} className="text-primary-600" />,
		title: "Strong Network",
		description:
			"With well-established relationships across international donor agencies, government bodies, NGOs, and private sector stakeholders, GreenChack has a robust network that enhances collaboration and resource mobilization. Our connections with major funding organizations, such as the UN, USAID, and the EU, enable us to support clients in securing financial and technical resources essential for project success.",
	},
	{
		icon: <Lightbulb size={40} className="text-primary-600" />,
		title: "Innovation",
		description:
			"We leverage state-of-the-art technologies and innovative, tailor-made solutions to provide services that are not only efficient and high-quality but also designed to anticipate future needs. Our commitment to forward-thinking practices ensures that every project we undertake is built with precision, sustainability, and long-term value in mind, setting new standards in the industry.",
	},
];

const IntroSection = () => {
	const cardVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: (i: number) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.1 * i,
				duration: 0.7,
			},
		}),
	};

	return (
		<section id="intro-section" className="py-20 md:py-28 bg-gray-50">
			<div className="container mx-auto px-4 md:px-6">
				<SectionHeader
					title="GreenChack"
					subtitle="At GreenChack, we are dedicated to driving impactful change through innovative construction, engineering, and consulting services across Afghanistan. With a deep understanding of the local landscape and a commitment to excellence, we empower organizations, businesses, and communities to build sustainable, resilient futures. Explore how our tailored solutions can turn your vision into reality."
				/>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true, margin: "-100px" }}
					className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
					{features.map((feature, index) => (
						<motion.div
							key={feature.title}
							custom={index}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, margin: "-100px" }}
							variants={cardVariants}>
							<Card className="p-8 h-full flex flex-col items-center text-center transition-all duration-300 hover:bg-primary-50 hover:shadow-md group">
								<div className="mb-5 text-primary-600 group-hover:text-primary-700 transition-colors duration-300">
									{feature.icon}
								</div>
								<h3 className="text-xl font-bold mb-3 font-heading group-hover:text-primary-800 transition-colors duration-300">
									{feature.title}
								</h3>
								<p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
									{feature.description}
								</p>
							</Card>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default IntroSection;
