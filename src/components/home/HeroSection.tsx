import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Button from "../ui/Button";

const HeroSection = () => {
	const scrollToContent = () => {
		const contentElement = document.getElementById("intro-section");
		if (contentElement) {
			contentElement.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section className="relative h-screen flex items-center">
			{/* Background Image */}
			<div
				className="absolute inset-0 bg-cover bg-center bg-no-repeat"
				style={{
					backgroundImage: "url('/images/hero.jpg')",
				}}>
				<div className="absolute inset-0 bg-primary-900/60"></div>
			</div>

			{/* Content */}
			<div className="container mx-auto px-4 md:px-6 relative z-10 text-white">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="max-w-4xl">
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-6">
						Empowering Excellence, Ensuring Integrity and Sustainable
						Development
					</h2>
					<p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl">
						From smart construction to strategic consulting, GreenChack, with
						years of experience in Engineering and business sectors. delivers
						tailored, high-impact solutions that build resilient infrastructure,
						strengthen organizations, and drive sustainable growth across
						Afghanistan.
					</p>
					<div className="flex flex-wrap gap-4">
						<Button to="/projects" size="md">
							Explore Projects
						</Button>
						<Button to="/contact" size="md">
							Get a Quote
						</Button>
					</div>
				</motion.div>
			</div>

			{/* Scroll Down Indicator */}
			<motion.div
				className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-center cursor-pointer"
				onClick={scrollToContent}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.5, duration: 0.8 }}>
				<p className="text-sm mb-2">Scroll Down</p>
				<motion.div
					animate={{ y: [0, 10, 0] }}
					transition={{ repeat: Infinity, duration: 1.5 }}>
					<ChevronDown size={24} />
				</motion.div>
			</motion.div>
		</section>
	);
};

export default HeroSection;
