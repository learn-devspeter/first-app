import axios from 'axios';
import Weather from './types/weather';

const API_KEY = process.env.WEATHER_API_KEY;
const city = 'chicago';
const stateCode = 'IL';
const countryCode = 'US';
const units = 'imperial';
const QUERY = `https://api.openweathermap.org/data/2.5/weather?q=${city},${stateCode},${countryCode}&units=${units}&appid=${API_KEY}`;
const cache = {};

async function cacheQuery<T>(query: string): Promise<Weather | null> {
	if (cache[query]) {
		console.log('cached data');
		return cache[query];
	}
	try {
		const data = await axios.get<T>(query);
		if (data.status == 200) {
			cache[query] = data.data;
			return cache[query];
		}
	} catch (err) {
		if (err instanceof Error) {
			console.error(err.message);
		}
		throw err;
	}
	return null;
}

export default async function (req, res) {
	try {
		const data = await cacheQuery<Weather>(QUERY);
		if (data) {
			res.statusCode = 200;
			res.json(data);
		} else {
			res.statusCode = 204;
			res.json({});
		}
	} catch (err) {
		console.log('ERROR');
		res.statusCode = 500;
		if (err instanceof Error) {
			console.log(err.message);
			res.json({ error: err.message });
		}
	}
}
