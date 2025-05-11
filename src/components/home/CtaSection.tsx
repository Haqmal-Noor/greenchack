import { motion } from "framer-motion";
import Button from "../ui/Button";

const CtaSection = () => {
	return (
		<section className="relative py-20 md:py-28">
			{/* Background Image with Overlay */}
			<div
				className="absolute inset-0 bg-cover bg-center bg-fixed"
				style={{
					backgroundImage:
						"url('https://images.pexels.com/photos/1547576/pexels-photo-1547576.jpeg')",
				}}>
				<div className="absolute inset-0 bg-primary-900/80"></div>
			</div>

			{/* Content */}
			<div className="container mx-auto px-4 md:px-6 relative z-10">
				<div className="max-w-4xl mx-auto text-center text-white">
					<motion.h4
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7 }}
						className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">
						Partner with GreenChack today and turn your goals into lasting
						impact.
					</motion.h4>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7, delay: 0.2 }}
						className="text-xl mb-8 text-gray-100">
						Ready to bring your vision to life? Our team of experienced
						professionals is here to guide you every step of the way, from
						concept to completion. Reach out today to schedule your free
						consultation and receive a personalized quote tailored to your next
						construction project. Let us help you build with confidence,
						clarity, and craftsmanship.
					</motion.p>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7, delay: 0.3 }}
						className="flex flex-wrap justify-center gap-4">
						<Button to="/contact" variant="primary" size="md">
							Get a Free Quote
						</Button>
						<Button to="/services" variant="outline" size="md">
							Explore Our Services
						</Button>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default CtaSection;
