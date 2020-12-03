const { saveFiles } = require('../services/file.service');

module.exports = {
	async upload(req, res) {
		const { files } = req;

		await saveFiles(files);

		return res.json({
			files: files.map((file) => {
				return {
					name: file.filename,
					size: file.size,
					origin: `${process.env.BASE_IMG_URL}/${file.filename}`,
				};
			}),
		});
	},
};
