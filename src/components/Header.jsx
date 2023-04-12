import React from 'react';
import logo from '../assets/breaking-bad-logo.svg';

const Header = () => {
	return (
		// Flex Container
		<div className="container flex flex-col text-center items-center mx-auto mt-6 mb-10">
			{/* Logo */}
			<div className="w-3/5 md:w-1/4">
				<img src={logo} alt="Logo" />
			</div>
			{/* Tagline */}
			<p className="text-gray-300 text-sm md:text-md mt-2 px-8 md:text-md">
				Get a daily dose of Breaking Bad quotes from your favorite characters.
			</p>
		</div>
	);
};

export default Header;
