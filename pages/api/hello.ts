// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function (req, res) {
	console.log('server api');
	res.statusCode = 200;
	res.json({ name: 'John Doe' });
}
