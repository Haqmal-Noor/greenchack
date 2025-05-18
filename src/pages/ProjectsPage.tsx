import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHeader from "../components/shared/PageHeader";
import SectionHeader from "../components/shared/SectionHeader";
import { X } from "lucide-react";

const shuffleArray = (array) => {
	const shuffled = [...array];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
};

// Sample projects data
const projects = [
	{
		id: 1,
		title:
			" Dam Construction for Water Management and Agricultural Sustainability in Kunar",
		category: "Construction and Infrastructure Development",
		location: "Kunar, Afghanistan",
		year: 2025,
		thumbnail: "/images/projects/dam-in-kunar.jpg",
		images: ["/images/projects/dam-in-kunar.jpg"],
		description:
			"This project focused on the construction of a strategically designed check dam in Pashad, Sarkano District, Kunar Province, aimed at regulating water flow, preventing erosion, and enhancing water conservation for agricultural sustainability. Commissioned by the Ministry of Energy and Water of Afghanistan. GreenChack team carried out comprehensive fieldwork including site preparation, excavation, foundation construction, reinforcement, and finishing works ensuring the use of high-quality materials and strict compliance with technical and engineering standards.The completed structure provides critical benefits in managing seasonal water flow, reducing land degradation, and supporting irrigation systems for local communities.",
		client: "Ministry of Energy and Water",
		outcome:
			"The outcomes of thiresource management and demonstrate GreenChack's continued commitment to delivering resilient infrastructure in support of environmental s project contribute to national efforts in sustainable water and agricultural development across Afghanistan.",
	},
	{
		id: 2,
		title:
			"Urban Drainage Infrastructure Enhancement in District #3 of Kandahar City",
		category: "Construction and Infrastructure Development",
		location: "Kandahar, Afghanistan",
		year: 2025,
		thumbnail: "/images/projects/urban-drainage.jpg",
		images: ["/images/projects/urban-drainage.jpg"],
		description:
			"This project focused on upgrading the Shaysta Kandahar Karta Drainage Protection Wall in Gozar #4, District #3 of Kandahar City, aimed at improving flood protection, water management, and urban resilience. Construction activities commenced on October 27, 2024, covering a total length of 507 meters. GreenChack’s technical team carried out the construction with a strong emphasis on quality, durability, and compliance with engineering best practices. The work involved structural reinforcement, elevation correction, and alignment improvements to ensure efficient drainage and long-term performance. The project significantly enhances the urban drainage infrastructure of District #3, reducing the risk of water damage and contributing to safer, more sustainable living conditions for residents.",
		client: "United Nations Office for Project Services (UNOPS)",
		outcome:
			"The outcomes underscore GreenChack's commitment to delivering high-impact infrastructure solutions that support municipal development and improve community resilience across Afghanistan.",
	},
	{
		id: 3,
		title:
			"Improving Urban Water Access through Distribution Network Installation",
		category: "Construction and Infrastructure Development",
		location: "Kandahar, Afghanistan",
		year: 2025,
		thumbnail: "/images/projects/urban-water.jpg",
		images: ["/images/projects/urban-water.jpg"],
		description:
			"This project focused on the construction of a comprehensive water distribution network in Mirwais Mena, Police District 7 of Kandahar City, aimed at improving access to clean and reliable water for urban households. Commissioned by the International Committee of the Red Cross (ICRC). GreenChack's team led the supply and installation of all essential materials for the main water network, including piping systems, valves, water meter kits, and connections to reservoir inlet, outlet, overflow, and wash-out components. The system was designed to serve 1,050 households, ensuring broad community coverage and long-term functionality.",
		client: "International Committee of the Red Cross (ICRC)",
		outcome:
			"By applying high-quality engineering standards and materials, the project resulted in a reliable water infrastructure system that significantly enhances public health and quality of life in the target area.The successful implementation reflects GreenChack’s commitment to delivering essential public service infrastructure and its continued partnership with humanitarian organizations to strengthen basic service delivery in urban Afghanistan.",
	},
	{
		id: 4,
		title: "Plum Concrete Road Construction to Enhance Urban Mobility",
		category: "Construction and Infrastructure Development",
		location: "Kandahar, Afghanistan",
		year: 2025,
		thumbnail: "/images/projects/urban-plum.jpg",
		images: ["/images/projects/urban-plum.jpg"],
		description:
			"This project focused on the construction of a durable plum concrete surface for Ghowsia Street in District #9 of Kandahar Province, aiming to improve urban mobility, accessibility, and road safety for residents. GreenChack's team carried out the work with precision, ensuring adherence to high-quality engineering standards and construction best practices. The project involved the preparation and surfacing of the roadway with plum concrete—a robust solution known for its strength and longevity in high-traffic and variable weather conditions.",
		client: "United Nations Office for Project Services (UNOPS)",
		outcome:
			"Upon completion, the upgraded street significantly ease transportation challenges in the area, promoting smoother travel and contributing to improved community infrastructure. The successful delivery of this project reinforces GreenChack’s commitment to advancing urban development through reliable and sustainable infrastructure solutions, in partnership with international agencies such as UNOPS.",
	},
	{
		id: 5,
		title:
			"Establishment of Telecommunication Infrastructure in Tolak District, Ghor Province",
		category: "Construction and Infrastructure Development",
		location: "Ghor, Afghanistan",
		year: 2024,
		thumbnail: "/images/projects/tolak-tele.jpg",
		images: ["/images/projects/tolak-tele.jpg"],
		description:
			"This project focused on the construction of a fully functional telecommunication site in Tolak District of Ghor Province, aimed at enhancing connectivity and communication services in a previously underserved region. Commissioned by Afghan Telecom, the project was implemented by GreenChack between March 28 and May 30, 2024. GreenChack’s team executed the project with strict adherence to quality standards and technical specifications. The scope of work included comprehensive site preparation, the construction of critical support structures, installation of power systems, and fencing to ensure the site's operational security. Final finishing works were also completed to deliver a durable and efficient telecommunication facility.",
		client: "Afghan Telecom",
		outcome:
			"The completion of the site has significantly improved access to communication services in Tolak District, contributing to broader social and economic development through increased connectivity. This project underscores GreenChack’s commitment to delivering essential infrastructure that bridges technological gaps and fosters sustainable development across Afghanistan.",
	},
	{
		id: 6,
		title:
			"Implementation of Water Supply Systems in Zabul and Urozgan Provinces",
		category: "Construction and Infrastructure Development",
		location: "Zabul and Urozgan, Afghanistan",
		year: 2022,
		thumbnail: "/images/projects/water-zabul.jpg",
		images: ["/images/projects/water-zabul.jpg"],
		description:
			"This project focused on the construction of ten community-based water supply systems aimed at improving access to clean water across Zabul and Urozgan Provinces. Commissioned by UNHCR in collaboration with ACHRO, the initiative was implemented by GreenChack and spanned five sites in each province. GreenChack's team led comprehensive operations including the drilling of deep wells, construction of 50,000-liter elevated water tanks, and installation of solar power systems to ensure continuous water flow. The project also involved the procurement and integration of essential accessories for the operational efficiency of each system. These systems now serve as a critical resource for local residents, significantly enhancing access to safe and reliable water while reducing dependency on unsafe sources.",
		client: "Afghan Community and Health Rehabilitation Organization (ACHRO)",
		outcome:
			"The successful delivery of this project highlights GreenChack’s commitment to humanitarian infrastructure, renewable energy integration, and sustainable water solutions in underserved regions of Afghanistan.",
	},
	{
		id: 7,
		title: "Adalat Gozar Water Supply Network Project Re-assessment",
		category: "Engineering & infrastructure Development Consulting",
		location: "Kandahar, Afghanistan",
		year: 2024,
		thumbnail: "/images/projects/adalat-gozar.jpg",
		images: ["/images/projects/adalat-gozar.jpg"],
		description:
			"The Adalat Gozar Water Supply Network Project Re-assessment aimed to thoroughly evaluate the existing water supply infrastructure in the Adalat Gozar area of Kandahar. Commissioned by HECC in partnership with the International Committee of the Red Cross (ICRC), the project focused on identifying technical gaps, operational challenges, and the overall condition of the water distribution network.",
		client: "HECC and ICRC",
		outcome:
			"The re-assessment included comprehensive field surveys, community consultations, infrastructure mapping, and technical diagnostics to ensure the network could be upgraded or rehabilitated to meet the community's needs sustainably. The findings provided essential insights for future planning and improvement of safe and reliable water access in the region.",
	},
	{
		id: 8,
		title:
			"Complete Engineering Design Package for Chni Froshi Business Center",
		category: "Engineering & infrastructure Development Consulting",
		location: "Mazar-e-Sharif, Balkh, Afghanistan",
		year: 2025,
		thumbnail: "/images/projects/engineering-design.PNG",
		images: ["/images/projects/engineering-design.PNG"],
		description:
			"This project involved the delivery of a comprehensive engineering design package for the Chini Froshi Business Center, a major commercial development in Mazar-e-Sharif. Commissioned by Blue Galaxy Construction, the scope of work included architectural planning, structural engineering, and the complete design of electrical and plumbing systems.",
		client: "Blue Galaxy Construction",
		outcome:
			"Our team developed integrated, code-compliant designs tailored to meet both functional and aesthetic standards suitable for a modern business center. The design package aimed to ensure efficient spatial utilization, energy-conscious infrastructure, and long-term sustainability. This project reflects our commitment to delivering high-quality design solutions that support commercial growth and urban development in northern Afghanistan.",
	},
	{
		id: 9,
		title: "Complete Engineering Design Package for Muslim Business Center",
		category: "Engineering & infrastructure Development Consulting",
		location: "Kabul, Afghanistan",
		year: 2025,
		thumbnail: "/images/projects/muslim-design.PNG",
		images: ["/images/projects/muslim-design.PNG"],
		description:
			"The Muslim Business Center project involved the development of a complete engineering design package for a prominent commercial facility in the heart of Kabul. Delivered in collaboration with Qalamyar Zahiri Construction and Roadbuilding Company, the scope covered comprehensive architectural design, structural analysis, and fully integrated electrical and plumbing systems.",
		client: "Qalamyar Zahiri Construction and Roadbuilding Company",
		outcome:
			"The design emphasized modern commercial functionality, energy efficiency, and compliance with local and international standards. By integrating all core engineering disciplines, the project aimed to provide a streamlined and future-ready facility that caters to the dynamic needs of Kabul's growing business community.",
	},
	{
		id: 10,
		title: "Design of 1000+ kW Rooftop Solar Systems for Multiple Clients",
		category: "Engineering & infrastructure Development Consulting",
		location: "Various Locations Across Afghanistan",
		year: 2025,
		thumbnail: "/images/projects/design-1000.png",
		images: ["/images/projects/design-1000.png"],
		description:
			"This multi-year project encompassed the design of rooftop solar photovoltaic (PV) systems totaling over 1000 kilowatts (kW) in capacity for a diverse portfolio of clients across Afghanistan. Serving both commercial and institutional sectors, our team provided tailored solar solutions that addressed the unique energy needs of each customer while optimizing rooftop space and system efficiency. The scope included site assessments, system sizing, detailed engineering designs, load analysis, and integration plans with existing electrical systems. Each design prioritized reliability, performance, and cost-effectiveness, supporting sustainable energy access and reducing reliance on conventional power sources. This initiative demonstrates our commitment to advancing clean energy and promoting environmentally responsible engineering across multiple regions and sectors.",
		client: "Multiple",
		outcome:
			"Delivered over 1000 kW of rooftop solar PV systems across Afghanistan, improving energy reliability and reducing reliance on conventional power by providing efficient, cost-effective clean energy solutions.",
	},
	{
		id: 11,
		title: "Feasibility Study for 2.5 MW Solar Power Plant",
		category: "Engineering & infrastructure Development Consulting",
		location: "Kabul, Afghanistan",
		year: 2024,
		thumbnail: "/images/projects/feasibility-study.png",
		images: ["/images/projects/feasibility-study.png"],
		description:
			"This project involved conducting a comprehensive feasibility study for a proposed 2.5 megawatt (MW) solar power plant in Kabul. Commissioned by FourCorner, the study aimed to assess the technical, environmental, and financial viability of establishing a utility-scale solar energy facility. The assessment included site evaluation, solar resource analysis, load forecasting, grid connectivity options, and financial modeling. Special attention was given to regulatory compliance, environmental impact, and long-term sustainability.",
		client: "FourCorner",
		outcome:
			"The outcome of the study provided FourCorner with a detailed roadmap for potential investment and development, aligning with Afghanistan's growing demand for clean and reliable energy solutions.",
	},
	{
		id: 12,
		title: "Monitoring and Evaluation of Micro Businesses Project",
		category: "Organizational Development Consulting",
		location: "Kabul, Afghanistan",
		year: 2024,
		thumbnail: "/images/projects/monitoring-and-eval.png",
		images: ["/images/projects/monitoring-and-eval.png"],
		description:
			"This project focused on the comprehensive monitoring and evaluation (M&E) of a micro businesses support initiative implemented across Kabul. Commissioned by Public Awareness for Relief and Equity, the project aimed to assess the effectiveness, sustainability, and community impact of small-scale entrepreneurial activities funded under the program. Our team conducted regular field visits, data collection, beneficiary interviews, and performance assessments to track progress against key indicators. The evaluation provided critical insights into the operational challenges, economic outcomes, and scalability of micro businesses in urban settings.",
		client: "Public Awareness for Relief and Equity",
		outcome:
			"The findings were used to enhance project implementation strategies and inform future programming in livelihood development and economic resilience.",
	},
	{
		id: 13,
		title: "Upgrade of Organizational Policies and Procedures",
		category: "Organizational Development Consulting",
		location: "Kabul, Afghanistan",
		year: 2024,
		thumbnail: "/images/projects/upgrade.png",
		images: ["/images/projects/upgrade.png"],
		description:
			"This project involved the comprehensive review and upgrade of internal policies and procedures for the Social Welfare and Environmental Organization (SWEO). The objective was to strengthen the organization's operational framework, enhance compliance with national and international standards, and improve overall governance and accountability. The scope of work included assessing existing policies, identifying gaps, and developing updated documentation covering administrative operations, human resources, finance, procurement, and project management.",
		client: "Social Welfare and Environmental Organization (SWEO)",
		outcome:
			"Through this upgrade, SWEO is now better equipped to deliver its social and environmental programs effectively, ensuring transparency, efficiency, and donor confidence.",
	},
	{
		id: 14,
		title: "Capacity Building Training for SWEO Staff",
		category: "Organizational Development Consulting",
		location: "Kabul, Afghanistan",
		year: 2024,
		thumbnail: "/images/projects/capacity.png",
		images: ["/images/projects/capacity.png"],
		description:
			"This project involved the design and delivery of a targeted capacity building training program for the staff of the Social Welfare and Environmental Organization (SWEO). The objective was to strengthen institutional capacity, improve staff performance, and enhance the organization's ability to implement its programs effectively. Training sessions focused on key areas such as project management, monitoring and evaluation, financial management, proposal writing, and organizational communication. Interactive methodologies and real-world case studies were used to ensure practical learning and long-term skill retention.",
		client: "Social Welfare and Environmental Organization (SWEO)",
		outcome:
			"The program contributed to improved staff competence and operational efficiency, empowering SWEO to deliver its mission with greater impact and professionalism.",
	},
	{
		id: 15,
		title:
			"Business Management System (BMS) Interface Development for Trust Corps Co.",
		category: "Organizational Development Consulting",
		location: "Kabul, Afghanistan",
		year: 2024,
		thumbnail: "/images/projects/business.png",
		images: ["/images/projects/business.png"],
		description:
			"This project involved the design and development of a custom Building Management System (BMS) interface for Trust Corps Co., aimed at enhancing the automation, control, and monitoring of building infrastructure systems. The solution integrated various subsystems—including project management, budgeting, timeline, TMS,  and progress management—into a unified digital interface, providing real-time data visualization, system alerts, and remote access functionality.",
		client: "Trust Corps Co.",
		outcome:
			"The BMS interface was developed with user-friendly navigation, robust performance, and scalability in mind, supporting Trust Corps Co. in achieving greater operational efficiency, reduced energy consumption, and improved facility management.",
	},
	{
		id: 16,
		title:
			"Development of Complete Public-Private Partnership (PPP) Documents for Chini Froshi Business Center",
		category: "Business, Legal & Market Advisory Services",
		location: "Mazar-e-Sharif, Balkh, Afghanistan",
		year: 2025,
		thumbnail: "/images/projects/development.png",
		images: ["/images/projects/development.png"],
		description:
			"This project entailed the preparation of a comprehensive set of Public-Private Partnership (PPP) documents to facilitate the successful development and financing of the Chini Froshi Business Center in Kabul. Commissioned by Blue Galaxy Construction, the scope included creating a detailed financial proposal and financial model, conducting an in-depth market study, and preparing all necessary technical documentation. The deliverables provided a clear framework for partnership engagement, investment analysis, and project feasibility, enabling stakeholders to make informed decisions. The market study offered valuable insights into demand, competition, and potential revenue streams, while the technical documents ensured compliance with industry standards and project requirements.",
		client: "Blue Galaxy Construction Co.",
		outcome:
			"This integrated approach supported effective collaboration between public and private entities to promote sustainable commercial development in Kabul.",
	},
	{
		id: 17,
		title:
			"Development of Complete Public-Private Partnership (PPP) Documents for Chini Froshi Business Center",
		category: "Business, Legal & Market Advisory Services",
		location: "Kabul, Afghanistan",
		year: 2025,
		thumbnail: "/images/projects/development-2.png",
		images: ["/images/projects/development-2.png"],
		description:
			"This project involved the preparation of a comprehensive suite of Public-Private Partnership (PPP) documents to support the development and financing of the Muslim Business Center in Kabul. Commissioned by Qalamyar Zahiri Construction and Roadbuilding Company, the scope covered the creation of a detailed financial proposal and financial model, an extensive market study, and the preparation of all necessary technical documentation. The documents provided a robust framework for structuring partnerships, assessing financial viability, and analyzing market opportunities, thereby facilitating informed decision-making for investors and stakeholders. The market study offered critical insights into demand patterns, competitive dynamics, and potential revenue streams, while technical documentation ensured compliance with regulatory and industry standards.",
		client: "Qalamyar Zahiri Construction and Roadbuilding Company",
		outcome:
			"This comprehensive approach enabled effective collaboration between public and private sectors to drive sustainable commercial growth in Kabul.",
	},
];

const ProjectsPage = () => {
	const [category, setCategory] = useState("All");
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedProject, setSelectedProject] = useState<
		(typeof projects)[0] | null
	>(null);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	// Shuffle utility
	const shuffleArray = (array: typeof projects) => {
		const shuffled = [...array];
		for (let i = shuffled.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
		}
		return shuffled;
	};

	const filteredProjects =
		category === "All"
			? shuffleArray(projects)
			: projects.filter((project) => project.category === category);

	const visibleProjects = filteredProjects.filter((project) => {
		const query = searchQuery.toLowerCase();
		return (
			project.title.toLowerCase().includes(query) ||
			project.description.toLowerCase().includes(query) ||
			project.location.toLowerCase().includes(query) ||
			project.client.toLowerCase().includes(query) ||
			project.outcome.toLowerCase().includes(query)
		);
	});

	const openProject = (project: (typeof projects)[0]) => {
		setSelectedProject(project);
		setCurrentImageIndex(0);
		document.body.style.overflow = "hidden";
	};

	const closeProject = () => {
		setSelectedProject(null);
		document.body.style.overflow = "auto";
	};

	const nextImage = () => {
		if (selectedProject) {
			setCurrentImageIndex(
				(currentImageIndex + 1) % selectedProject.images.length
			);
		}
	};

	const prevImage = () => {
		if (selectedProject) {
			setCurrentImageIndex(
				(currentImageIndex - 1 + selectedProject.images.length) %
					selectedProject.images.length
			);
		}
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}>
			<PageHeader
				title="Our Projects"
				subtitle="Explore our portfolio of completed projects."
				backgroundImage="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg"
			/>

			<section className="py-20">
				<div className="container mx-auto px-4 md:px-6">
					<SectionHeader
						title="Project Portfolio"
						subtitle="Browse through our diverse range of projects, showcasing our expertise and commitment to quality craftsmanship."
					/>

					{/* Search Bar */}
					<div className="mb-12 px-4 max-w-3xl mx-auto">
						<input
							type="text"
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							placeholder="Search projects by title, description, location, client, or outcome..."
							className="w-full px-6 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800 text-md"
						/>
					</div>

					{/* Category Filter */}
					<div className="flex justify-center mb-12 px-4">
						<div className="flex flex-wrap md:flex-row flex-col rounded-lg max-w-full w-full md:w-auto">
							{[
								"All",
								"Construction and Infrastructure Development",
								"Engineering & infrastructure Development Consulting",
								"Organizational Development Consulting",
								"Business, Legal & Market Advisory Services",
							].map((cat) => (
								<button
									key={cat}
									onClick={() => setCategory(cat)}
									className={`px-6 py-2 m-1 bg-gray-100 rounded-md text-md transition-colors w-full md:w-auto text-left
          ${
						category === cat
							? "bg-primary-600 text-white"
							: "text-gray-700 hover:bg-gray-200"
					}`}>
									{cat}
								</button>
							))}
						</div>
					</div>

					{/* Projects Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{visibleProjects.length === 0 ? (
							<p className="text-center text-gray-500 col-span-full">
								No projects found matching your search.
							</p>
						) : (
							visibleProjects.map((project, index) => (
								<motion.div
									key={project.id}
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									className="bg-white rounded-lg shadow-soft overflow-hidden cursor-pointer group"
									onClick={() => openProject(project)}>
									<div className="h-64 overflow-hidden">
										<img
											src={project.thumbnail}
											alt={project.title}
											className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
										/>
									</div>
									<div className="p-6">
										<div className="bg-primary-600 text-primary-50 text-sm font-medium inline-block px-3 py-1 rounded mb-2">
											{project.category}
										</div>
										<h3 className="text-xl font-bold mb-2 font-heading">
											{project.title}
										</h3>
										<p className="text-gray-600 mb-2">
											{project.location} | {project.year}
										</p>
										<p className="text-primary-600 font-medium mt-4 group-hover:underline">
											View Project Details
										</p>
									</div>
								</motion.div>
							))
						)}
					</div>
				</div>
			</section>

			{/* Project Detail Modal */}
			{/* ... modal code remains unchanged ... */}
		</motion.div>
	);
};

export default ProjectsPage;
