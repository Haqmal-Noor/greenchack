import { motion } from "framer-motion";
import {
	Award,
	Clock,
	ShieldCheck,
	Leaf,
	Users,
	Lightbulb,
} from "lucide-react"; // Added Lightbulb icon
import SectionHeader from "../shared/SectionHeader";
import Card from "../ui/Card";

const features = [
	{
		icon: <ShieldCheck size={40} className="text-primary-600" />,
		title: "Safety",
		description:
			"Commitment to maintaining the highest safety standards on every construction site, protecting our workers and clients.",
	},
	{
		icon: <Award size={40} className="text-primary-600" />,
		title: "Quality",
		description:
			"Premium materials and expert craftsmanship to deliver construction projects that stand the test of time.",
	},
	{
		icon: <Clock size={40} className="text-primary-600" />,
		title: "Timeliness",
		description:
			"Strict adherence to project timelines and deadlines, ensuring your construction project finishes on schedule.",
	},
	{
		icon: <Leaf size={40} className="text-primary-600" />,
		title: "Sustainability",
		description:
			"We prioritize eco-friendly materials and energy-efficient designs to reduce our environmental footprint.",
	},
	{
		icon: <Users size={40} className="text-primary-600" />,
		title: "Customer Focus",
		description:
			"Transparent communication and a client-first approach ensure your vision is always our priority.",
	},
	{
		icon: <Lightbulb size={40} className="text-primary-600" />,
		title: "Innovation",
		description:
			"We implement cutting-edge technologies and creative solutions to deliver forward-thinking construction services.",
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
					subtitle="With over 5 years of industry experience, we've established ourselves as a leader in construction services. From residential to commercial projects, we bring expertise, quality and professionalism to every build."
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
