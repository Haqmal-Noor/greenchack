import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
	{ name: "Home", path: "/" },
	{ name: "About", path: "/about" },
	{ name: "Services", path: "/services" },
	{ name: "Projects", path: "/projects" },
	// { name: "Testimonials", path: "/testimonials" },
	{ name: "Contact", path: "/contact" },
];

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const toggleMenu = () => setIsOpen(!isOpen);
	const closeMenu = () => setIsOpen(false);

	return (
		<header
			className={`fixed w-full z-50 transition-all duration-300 ${
				scrolled
					? "bg-white shadow-medium py-3"
					: "bg-transparent py-5 text-white"
			}`}>
			<div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
				{/* Logo */}
				<Link
					to="/"
					className="flex items-center space-x-3 font-heading font-bold text-xl"
					onClick={closeMenu}>
					<img
						src={scrolled ? "/images/logo-green.png" : "/images/logo-white.png"}
						alt="Greenchack Logo"
						className="w-12 h-12 object-contain"
					/>
					<span
						className={`${
							scrolled ? "text-primary-800" : "text-white"
						} text-lg`}>
						GreenChack
					</span>
				</Link>

				{/* Desktop Navigation */}
				<nav className="hidden lg:flex items-center space-x-8">
					{navLinks.map((link) => (
						<NavLink
							key={link.path}
							to={link.path}
							className={({ isActive }) =>
								`font-medium hover:text-accent-500 transition-colors ${
									scrolled
										? isActive
											? "text-primary-600"
											: "text-gray-800"
										: isActive
										? "text-accent-400"
										: "text-white"
								}`
							}>
							{link.name}
						</NavLink>
					))}
					<a
						href="tel:+93775 575 448"
						className="flex items-center bg-primary-600 hover:bg-primary-700 text-white px-5 py-2 rounded-md transition-all ml-4">
						<Phone size={18} className="mr-2" />
						+93 (0) 775 575 448
					</a>
				</nav>

				{/* Mobile Menu Button */}
				<button
					className="lg:hidden text-2xl focus:outline-none z-20"
					onClick={toggleMenu}
					aria-label="Toggle menu">
					{isOpen ? (
						<X
							size={28}
							className={scrolled ? "text-gray-900" : "text-white"}
						/>
					) : (
						<Menu
							size={28}
							className={scrolled ? "text-gray-900" : "text-white"}
						/>
					)}
				</button>

				{/* Mobile Menu */}
				<AnimatePresence>
					{isOpen && (
						<motion.div
							initial={{ opacity: 0, x: "100%" }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: "100%" }}
							transition={{ duration: 0.3 }}
							className="fixed inset-0 bg-primary-800 z-10 lg:hidden pt-24">
							<nav className="flex flex-col items-center space-y-6 pt-12 text-white">
								{navLinks.map((link) => (
									<NavLink
										key={link.path}
										to={link.path}
										className={({ isActive }) =>
											`text-xl font-medium ${
												isActive ? "text-accent-400" : "text-white"
											}`
										}
										onClick={closeMenu}>
										{link.name}
									</NavLink>
								))}
								<a
									href="tel:+1234567890"
									className="flex items-center bg-accent-500 hover:bg-accent-600 text-primary-900 px-6 py-3 rounded-md transition-all mt-4 text-xl"
									onClick={closeMenu}>
									<Phone size={20} className="mr-2" />
									(123) 456-7890
								</a>
							</nav>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</header>
	);
};

export default Navbar;
