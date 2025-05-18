import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "../shared/SectionHeader";
import Button from "../ui/Button";

// Sample project data
const projects = [
	{
		id: 1,
		title:
			"Dam Construction for Water Management and Agricultural Sustainability in Kuar",
		category: "Construction and Infrastructure Development",
		image: "/images/projects/dam-in-kunar.jpg",
		description:
			"This project focused on the construction of a strategically designed check dam in Pashad, Sarkano District, Kunar Province, aimed at regulating water flow, preventing erosion, and enhancing water conservation for agricultural sustainability. Commissioned by the Ministry of Energy and Water of Afghanistan.",
	},
	{
		id: 2,
		title: "Adalat Gozar Water Supply Network Project Re-assessment",
		category: "Engineering & infrastructure Development Consulting",
		image: "/images/projects/adalat-gozar.jpg",
		description:
			"The Adalat Gozar Water Supply Network Project Re-assessment aimed to thoroughly evaluate the existing water supply infrastructure in the Adalat Gozar area of Kandahar.",
	},
	{
		id: 3,
		title: "Monitoring and Evaluation of Micro Businesses Project",
		category: "Organizational Development Consulting",
		image: "/images/projects/monitoring-and-eval.png",
		description:
			"This project focused on the comprehensive monitoring and evaluation (M&E) of a micro businesses support initiative implemented across Kabul. ",
	},
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
							className="relative rounded-lg overflow-hidden group h-[450px]">
							<div
								className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-110"
								style={{ backgroundImage: `url(${project.image})` }}></div>
							<div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/50 to-transparent"></div>

							<div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
								<div className="bg-primary-600 text-primary-50 text-sm font-medium inline-block px-3 py-1 rounded mb-3">
									{project.category}
								</div>
								<h3 className="text-xl md:text-2xl font-bold mb-2 font-heading">
									{project.title}
								</h3>
								<p className="mb-4 opacity-90 line-clamp-2">
									{project.description}
								</p>
								<Button to={`/projects/#${project.id}`} size="sm">
									View Details
								</Button>
							</div>
						</motion.div>
					))}
				</div>

				<div className="text-center mt-12">
					<Button to="/projects">View All Projects</Button>
				</div>
			</div>
		</section>
	);
};

export default FeaturedProjects;
