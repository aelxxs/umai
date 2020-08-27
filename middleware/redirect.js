import axios from 'axios';

export default async function(req, res, next) {
	try {
		const data = await axios.get(`https://api.umai.pw/v1/url/${req.url.slice(1)}`);

		res.writeHead(301, { Location: data.data.url.terminus });
		res.end();
	} catch (e) {
		next();
	}
}
