import axios from 'axios';
import { useEffect, useState } from 'react';

const Weather = () => {
	const [data, setData] = useState({});

	const fetchData = async () => {
		const res = await axios.get('/api/weather');
		setData(res.data);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div>
			<pre>Weather {JSON.stringify(data, null, 2)}</pre>
		</div>
	);
};

export default Weather;
