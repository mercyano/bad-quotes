import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Quotes from './components/Quotes';

const App = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios
			.get('https://api.breakingbadquotes.xyz/v1/quotes')
			.then((res) => setData(res.data))
			.catch((err) => console.error(err));
	}, []);

	return (
		<div className="font-courier">
			<Header />
			<Quotes data={data} />
		</div>
	);
};

export default App;
