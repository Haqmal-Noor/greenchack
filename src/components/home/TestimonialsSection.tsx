import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionHeader from "../shared/SectionHeader";

// Sample testimonial data
const testimonials = [
	{
		id: 1,
		name: "John Smith",
		position: "CEO, Tech Innovations",
		text: "SolidBuild delivered our office complex on time and within budget. Their attention to detail and communication throughout the process was exceptional.",
		rating: 5,
		image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
	},
	{
		id: 2,
		name: "Amanda Johnson",
		position: "Homeowner",
		text: "The team at SolidBuild turned our dream home into reality. Their craftsmanship and professionalism exceeded our expectations at every turn.",
		rating: 5,
		image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
	},
	{
		id: 3,
		name: "Michael Rodriguez",
		position: "Project Manager, Retail Solutions",
		text: "Working with SolidBuild on our shopping center renovation was a seamless experience. They managed the complexities of the project efficiently.",
		rating: 4,
		image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
	},
	{
		id: 4,
		name: "Sarah Williams",
		position: "Director, Healthcare Facilities",
		text: "Our medical center required specific construction requirements, and SolidBuild delivered with precision. Highly recommend their services.",
		rating: 5,
		image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
	},
];

const TestimonialsSection = () => {
	const scrollRef = useRef<HTMLDivElement>(null);

	const scroll = (direction: "left" | "right") => {
		if (scrollRef.current) {
			const { current } = scrollRef;
			const scrollAmount = 400;

			if (direction === "left") {
				current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
			} else {
				current.scrollBy({ left: scrollAmount, behavior: "smooth" });
			}
		}
	};

	const renderStars = (rating: number) => {
		return Array.from({ length: 5 }).map((_, index) => (
			<svg
				key={index}
				className={`w-5 h-5 ${
					index < rating ? "text-accent-500" : "text-gray-300"
				}`}
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg">
				<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
			</svg>
		));
	};

	return (
		<section className="py-20 md:py-28 bg-gray-50">
			<div className="container mx-auto px-4 md:px-6">
				<SectionHeader
					title="What Our Clients Say"
					subtitle="Don't just take our word for it. Hear from our satisfied clients about their experience working with GreenChack"
				/>

				<div className="relative mt-12">
					{/* Navigation Buttons */}
					<div className="absolute top-1/2 -left-4 transform -translate-y-1/2 z-10 hidden md:block">
						<button
							onClick={() => scroll("left")}
							className="bg-white p-3 rounded-full shadow-medium hover:bg-gray-100 transition-colors">
							<ChevronLeft size={24} />
						</button>
					</div>
					<div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10 hidden md:block">
						<button
							onClick={() => scroll("right")}
							className="bg-white p-3 rounded-full shadow-medium hover:bg-gray-100 transition-colors">
							<ChevronRight size={24} />
						</button>
					</div>

					{/* Testimonials */}
					<div
						ref={scrollRef}
						className="flex space-x-6 overflow-x-scroll pb-8 hide-scrollbar snap-x snap-mandatory">
						{testimonials.map((testimonial, index) => (
							<motion.div
								key={testimonial.id}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-100px" }}
								transition={{ duration: 0.7, delay: index * 0.1 }}
								className="min-w-[300px] md:min-w-[500px] bg-white rounded-lg shadow-soft p-8 flex flex-col snap-start">
								<div className="flex items-center mb-6">
									<img
										src={testimonial.image}
										alt={testimonial.name}
										className="w-16 h-16 rounded-full object-cover mr-4"
									/>
									<div>
										<h3 className="font-bold text-lg">{testimonial.name}</h3>
										<p className="text-gray-600 text-sm">
											{testimonial.position}
										</p>
										<div className="flex mt-1">
											{renderStars(testimonial.rating)}
										</div>
									</div>
								</div>
								<div className="flex-grow">
									<Quote size={30} className="text-primary-200 mb-2" />
									<p className="text-gray-700 italic">{testimonial.text}</p>
								</div>
							</motion.div>
						))}
					</div>

					{/* Mobile Navigation */}
					<div className="flex justify-center space-x-4 mt-6 md:hidden">
						<button
							onClick={() => scroll("left")}
							className="bg-white p-3 rounded-full shadow-medium hover:bg-gray-100 transition-colors">
							<ChevronLeft size={20} />
						</button>
						<button
							onClick={() => scroll("right")}
							className="bg-white p-3 rounded-full shadow-medium hover:bg-gray-100 transition-colors">
							<ChevronRight size={20} />
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TestimonialsSection;
