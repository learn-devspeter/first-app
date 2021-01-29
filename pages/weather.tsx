import axios from 'axios';
import { useEffect, useState } from 'react';
import WeatherType from './api/types/weather';

const Weather = () => {
	const [data, setData] = useState<WeatherType | null>(null);

	const fetchData = async () => {
		try {
			const res = await axios.get<WeatherType>('/api/weather');
			console.log(res.status);
			res.status == 200 && setData(res.data);
		} catch {
			console.error('server error');
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div>
			<p>Location: {data?.name}</p>
			<p>{data?.weather[0].description}</p>
			<p>Temp {data?.main.temp} F</p>
			<p>Humidity {data?.main.humidity} %</p>
			<p>Pressure {data?.main.pressure} </p>
			<p>Wind Speed: {data?.wind.speed}</p>
		</div>
	);
};

export default Weather;
