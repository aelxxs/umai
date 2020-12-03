const { validateURL, createURL } = require('../services/url.service');

module.exports = {
	async shorten(req, res) {
		const { url } = req.body;

		const parsed = await validateURL(url);
		const { id, terminus } = await createURL(parsed);

		return res.json({
			id,
			origin: `${process.env.BASE_URL}/${id}`,
			terminus,
		});
	},
};
