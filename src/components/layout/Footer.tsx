import { Link } from "react-router-dom";
import {
	Mail,
	MapPin,
	Phone,
	Facebook,
	Instagram,
	Linkedin,
	ArrowRight,
} from "lucide-react";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-primary-900 text-white">
			<div className="container mx-auto px-4 md:px-6 pt-16 pb-8">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
					{/* Company Info */}
					<div>
						<div className="flex items-center space-x-2 mb-4">
							<img
								src="/images/logo-white.png"
								alt="Greenchack Logo"
								className="w-12 h-12 object-contain"
							/>
							<span className="text-2xl font-bold font-heading">
								GreenChack
							</span>
						</div>
						<p className="text-gray-300 mb-6 leading-relaxed">
							Empowering Excellence, Ensuring Integrity and Sustainable
							Development
						</p>
						<div className="flex space-x-4">
							<a
								href="https://www.facebook.com/share/16YTmMkDFj/"
								target="_blank"
								className="bg-primary-800 hover:bg-primary-700 p-2 rounded-full transition-colors">
								<Facebook size={20} />
							</a>

							<a
								href="https://www.linkedin.com/company/greenchack"
								target="_blank"
								className="bg-primary-800 hover:bg-primary-700 p-2 rounded-full transition-colors">
								<Linkedin size={20} />
							</a>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="text-xl font-bold mb-4 font-heading">Quick Links</h3>
						<ul className="space-y-3">
							{["Home", "About", "Services", "Projects", "Contact"].map(
								(item) => (
									<li key={item}>
										<Link
											to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
											className="text-gray-300 hover:text-primary-400 transition-colors inline-flex items-center">
											<ArrowRight size={14} className="mr-2" />
											{item}
										</Link>
									</li>
								)
							)}
						</ul>
					</div>

					{/* Services */}
					<div>
						<h3 className="text-xl font-bold mb-4 font-heading">
							Our Services
						</h3>
						<ul className="space-y-3">
							{[
								"Construction & Infrastructure Development",
								"Organizational Development Consulting",
								"Engineering & Infrastructure Development Consulting",
								"Business, Legal & Market Advisory Services",
							].map((service) => (
								<li key={service}>
									<Link
										to="/services"
										className="text-gray-300 hover:text-primary-400 transition-colors inline-flex items-center">
										<ArrowRight size={14} className="mr-2" />
										{service}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Contact Info */}
					<div>
						<h3 className="text-xl font-bold mb-4 font-heading">Contact Us</h3>
						<ul className="space-y-4">
							<li className="flex items-start">
								<MapPin
									size={20}
									className="text-primary-400 mr-3 mt-1 flex-shrink-0"
								/>
								<span className="text-gray-300">
									Khoshhal Khan, 5th District, Kabul, Afghanistan
								</span>
							</li>
							<li className="flex items-center">
								<Phone
									size={20}
									className="text-primary-400 mr-3 flex-shrink-0"
								/>
								<a
									href="tel:+93775575448"
									className="text-gray-300 hover:text-white transition-colors">
									+93 (0) 775 575 448
								</a>
							</li>
							<li className="flex items-center">
								<Mail
									size={20}
									className="text-primary-400 mr-3 flex-shrink-0"
								/>
								<a
									href="mailto:info@greenchack.com"
									className="text-gray-300 hover:text-white transition-colors">
									info@greenchack.com
								</a>
							</li>
						</ul>
					</div>
				</div>

				{/* Copyright */}
				<div className="text-center pt-8 border-t border-primary-800 mt-8">
					<p className="text-gray-400 text-sm">
						© {currentYear} GreenChack. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
