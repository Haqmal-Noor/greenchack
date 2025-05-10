import { motion } from "framer-motion";

interface SectionHeaderProps {
	title: string;
	subtitle?: string;
	centered?: boolean;
}

const SectionHeader = ({
	title,
	subtitle,
	centered = true,
}: SectionHeaderProps) => {
	return (
		<div className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}>
			<motion.h2
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-100px" }}
				transition={{ duration: 0.7 }}
				className="text-3xl md:text-4xl font-bold font-heading mb-4">
				Wellcome to <span className="text-primary-700">{title}</span>
			</motion.h2>
			{subtitle && (
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.7, delay: 0.2 }}
					className={`text-gray-600 text-lg ${
						centered ? "max-w-2xl mx-auto" : ""
					}`}>
					{subtitle}
				</motion.p>
			)}
		</div>
	);
};

export default SectionHeader;
