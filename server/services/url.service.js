const ApplicationError = require('../util/ApplicationError');
const { nanoid } = require('nanoid');
const fetch = require('node-fetch');
const util = require('../util/url');

module.exports = {
	validateURL(_url) {
		const parsed = util.parseURL(_url);

		if (!util.isValidURL(parsed)) {
			throw new ApplicationError('Invalid URL - Please try again.', 403);
		}
		if (parsed.toLowerCase().includes('umai.pw')) {
			throw new ApplicationError(`Base URL cannot be umai.pw - Please try again.`, 403);
		}

		return parsed;
	},

	async createURL(terminus) {
		try {
			const id = nanoid(6);

			const accountID = process.env.CLOUDFLARE_ACCOUNT_ID;
			const namespaceID = process.env.CLOUDFLARE_NAMESPACE_ID;
			const keyWorkerURL = `https://api.cloudflare.com/client/v4/accounts/${accountID}/storage/kv/namespaces/${namespaceID}/values`;

			await fetch(`${keyWorkerURL}/${id}`, {
				method: 'PUT',
				headers: {
					'X-Auth-Email': process.env.CLOUDFLARE_EMAIL,
					'X-Auth-Key': process.env.CLOUDFLARE_AUTH_KEY,
					'Content-Type': 'text/plain',
				},
				body: terminus,
			});

			return { id, terminus };
		} catch (err) {
			throw new ApplicationError('An error occured - Please try again.', 500);
		}
	},
};
