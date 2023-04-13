import React from 'react';
import hero from '../assets/breaking-bad-hero.png';

const Quotes = (props) => {
	return (
		// Flex Container
		<div className="flex flex-col md:flex-row justify-center items-center mt-16 md:mt-20 px-8">
			{/* Quotes */}

			{props.data.length > 0 && (
				<div className="container pl-4 pr-4 border-l-4 border-white md:ml-16 md:mb-10">
					<p className="text-white md:text-lg lg:text-2xl">
						<em>{props.data[0].quote}</em>
					</p>
					<span className="text-gray-400 md:text-lg lg:text-2xl">
						<em>- {props.data[0].author}</em>
					</span>
				</div>
			)}

			{/* Image */}
			<div className="flex mt-8 md:mt-0 mx-auto justify-center items-center">
				<img className="md:w-full" src={hero}></img>
			</div>
		</div>
	);
};

export default Quotes;
