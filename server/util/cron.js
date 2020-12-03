const { promises: { unlink } } = require('fs');
const { models } = require('../database');
const { CronJob } = require('cron');
const { Op } = require('sequelize');
const path = require('path');

module.exports.start = async () => {
	new CronJob('0 * * * * *', async () => {
		const files = await models.files.findAll({
			where: {
				expiresAt: {
					[Op.lte]: new Date(Date.now()),
				},
			},
		});

		if (!files.length) return;

		try {
			console.log(`[CronJob]: Deleting ${files.length} file${files.length > 1 ? 's' : ''}`);

			files.forEach(async (file) => {
				await unlink(path.join(path.resolve('uploads'), file.name));
				await file.destroy();
			});
		} catch (err) {
			console.log('[CronJob]: Failed to delete files');
		}
	}).start();

	return console.log('[CronJob]: Running every minute');
};
