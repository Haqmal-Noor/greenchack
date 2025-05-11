import { useState } from "react";
import { motion } from "framer-motion";
import PageHeader from "../components/shared/PageHeader";
import SectionHeader from "../components/shared/SectionHeader";
import { MapPin, Phone, Mail, Send, Check } from "lucide-react";
import emailjs from "emailjs-com";

const ContactPage = () => {
	const [formStatus, setFormStatus] = useState<
		"idle" | "submitting" | "success" | "error"
	>("idle");
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		subject: "",
		message: "",
	});

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setFormStatus("submitting");

		const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
		const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
		const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
		// const emailAddress = import.meta.env.EMAIL_ADDRESS

		emailjs
			.send(serviceId!, templateId!, formData, publicKey!)
			.then(() => {
				setFormStatus("success");
				setFormData({
					name: "",
					email: "",
					phone: "",
					subject: "",
					message: "",
				});
				setTimeout(() => {
					setFormStatus("idle");
				}, 5000);
			})
			.catch((error) => {
				console.error("EmailJS Error:", error);
				setFormStatus("error");
				setTimeout(() => {
					setFormStatus("idle");
				}, 5000);
			});
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}>
			<PageHeader
				title="Contact Us"
				subtitle="Get in touch with our team to discuss your construction needs."
				backgroundImage="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg"
			/>

			<section className="py-20">
				<div className="container mx-auto px-4 md:px-6">
					<SectionHeader
						title="Get In Touch"
						subtitle="Have questions about our services or want to start a project? We're here to help."
					/>

					<div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
						{/* Contact Information */}
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.7 }}
							className="lg:col-span-1">
							<div className="bg-white rounded-lg shadow-soft p-8">
								<h3 className="text-2xl font-bold mb-6 font-heading">
									Contact Information
								</h3>

								<div className="space-y-6">
									<div className="flex items-start">
										<MapPin
											size={24}
											className="text-primary-600 mr-4 flex-shrink-0 mt-1"
										/>
										<div>
											<h4 className="font-bold mb-1">Office Address</h4>
											<p className="text-gray-600">
												Khoshhal Khan, 5th District, Kabul, Afghanistan
											</p>
										</div>
									</div>

									<div className="flex items-start">
										<Phone
											size={24}
											className="text-primary-600 mr-4 flex-shrink-0 mt-1"
										/>
										<div>
											<h4 className="font-bold mb-1">Phone</h4>
											<p className="text-gray-600">
												<a
													href="tel:+93775 575 448"
													className="hover:text-primary-600 transition-colors">
													+93 (0) 775 575 448
												</a>
											</p>
										</div>
									</div>

									<div className="flex items-start">
										<Mail
											size={24}
											className="text-primary-600 mr-4 flex-shrink-0 mt-1"
										/>
										<div>
											<h4 className="font-bold mb-1">Email</h4>
											<p className="text-gray-600">
												<a
													href="mailto:info@solidbuild.co"
													className="hover:text-primary-600 transition-colors">
													info@greenchack.com
												</a>
												<br />
												<a
													href="mailto:bd@greenchack.com"
													className="hover:text-primary-600 transition-colors">
													bd@greenchack.com
												</a>
											</p>
										</div>
									</div>
								</div>
							</div>
						</motion.div>

						{/* Contact Form */}
						<motion.div
							initial={{ opacity: 0, x: 30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.7 }}
							className="lg:col-span-2">
							<div className="bg-white rounded-lg shadow-soft p-8">
								<h3 className="text-2xl font-bold mb-6 font-heading">
									Send Us a Message
								</h3>

								<form onSubmit={handleSubmit} className="space-y-6">
									<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
										<div>
											<label
												htmlFor="name"
												className="block mb-2 text-gray-700 font-medium">
												Your Name*
											</label>
											<input
												type="text"
												id="name"
												name="name"
												value={formData.name}
												onChange={handleChange}
												required
												className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
												disabled={
													formStatus === "submitting" ||
													formStatus === "success"
												}
											/>
										</div>
										<div>
											<label
												htmlFor="email"
												className="block mb-2 text-gray-700 font-medium">
												Email Address*
											</label>
											<input
												type="email"
												id="email"
												name="email"
												value={formData.email}
												onChange={handleChange}
												required
												className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
												disabled={
													formStatus === "submitting" ||
													formStatus === "success"
												}
											/>
										</div>
									</div>

									<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
										<div>
											<label
												htmlFor="phone"
												className="block mb-2 text-gray-700 font-medium">
												Phone Number
											</label>
											<input
												type="tel"
												id="phone"
												name="phone"
												value={formData.phone}
												onChange={handleChange}
												className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
												disabled={
													formStatus === "submitting" ||
													formStatus === "success"
												}
											/>
										</div>
										<div>
											<label
												htmlFor="subject"
												className="block mb-2 text-gray-700 font-medium">
												Subject*
											</label>
											<input
												id="subject"
												name="subject"
												value={formData.subject}
												onChange={handleChange}
												required
												className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
												disabled={
													formStatus === "submitting" ||
													formStatus === "success"
												}
											/>
										</div>
									</div>

									<div>
										<label
											htmlFor="message"
											className="block mb-2 text-gray-700 font-medium">
											Your Message*
										</label>
										<textarea
											id="message"
											name="message"
											value={formData.message}
											onChange={handleChange}
											rows={6}
											required
											className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
											disabled={
												formStatus === "submitting" || formStatus === "success"
											}></textarea>
									</div>

									<div>
										<button
											type="submit"
											disabled={
												formStatus === "submitting" || formStatus === "success"
											}
											className={`flex items-center justify-center px-6 py-3 rounded-md transition-colors ${
												formStatus === "success"
													? "bg-success-500 text-white"
													: "bg-primary-600 hover:bg-primary-700 text-white"
											} font-medium w-full md:w-auto`}>
											{formStatus === "idle" && (
												<>
													<Send size={18} className="mr-2" />
													Send Message
												</>
											)}
											{formStatus === "submitting" && (
												<>
													<svg
														className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24">
														<circle
															className="opacity-25"
															cx="12"
															cy="12"
															r="10"
															stroke="currentColor"
															strokeWidth="4"></circle>
														<path
															className="opacity-75"
															fill="currentColor"
															d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
													</svg>
													Sending...
												</>
											)}
											{formStatus === "success" && (
												<>
													<Check size={18} className="mr-2" />
													Message Sent
												</>
											)}
										</button>

										{formStatus === "success" && (
											<p className="text-success-500 mt-3">
												Thank you for your message! We'll get back to you
												shortly.
											</p>
										)}
										{formStatus === "error" && (
											<p className="text-error-500 mt-3">
												There was an error sending your message. Please try
												again.
											</p>
										)}
									</div>
								</form>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Map Section */}
			<section className="py-20 bg-gray-50">
				<div className="container mx-auto px-4 md:px-6">
					<SectionHeader
						title="Our Location"
						subtitle="Visit our office to discuss your project in person."
					/>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7 }}
						className="mt-12 rounded-lg overflow-hidden shadow-soft">
						{/* Placeholder for Google Maps */}
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13148.84788196777!2d69.09095590715579!3d34.522857217730355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d16f593e27cfb3%3A0x6e728ed6f9d2ece6!2sKhushal%20Khan%20Mena%2C%20Kabul%2C%20Afghanistan!5e0!3m2!1sen!2s!4v1746898513616!5m2!1sen!2s"
							width="100%"
							height="450"
							style={{ border: 0 }}
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"></iframe>
					</motion.div>
				</div>
			</section>
		</motion.div>
	);
};

export default ContactPage;
