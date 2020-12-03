const ApplicationError = require('../util/ApplicationError');
const { models } = require('../database');

module.exports = {
	async saveFiles(files) {
		if (!files.length) throw new ApplicationError('No files provided - Please try again.', 400);

		return files.forEach(async (file) => {
			await models.files.create({
				name: file.filename,
				expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
			});
		});
	},
};
