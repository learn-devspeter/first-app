import axios from 'axios';

const API_KEY = process.env.WEATHER_API_KEY;
const city = 'chicago';
const stateCode = 'IL';
const countryCode = 'US';
const units = 'imperial';
const QUERY = `https://api.openweathermap.org/data/2.5/weather?q=${city},${stateCode},${countryCode}&units=${units}&appid=${API_KEY}`;
console.log(QUERY);
const cache = {};

export default async function (req, res) {
	if (cache[QUERY]) {
		res.statusCode = 200;
		res.json(cache[QUERY]);
		console.log('cached data');
		return;
	}

	try {
		const data = await axios.get(QUERY);
		if (data.status == 200) {
			res.statusCode = 200;
			res.json(data.data);
			cache[QUERY] = data.data;
			return;
		}
		res.statusCode = data.status;
		res.json({});
	} catch {
		res.statusCode = 500;
		res.json({});
	}
}
