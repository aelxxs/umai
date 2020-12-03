const parseURL = (url) => {
	const parsedUrl = url.trim();

	if (parsedUrl.startsWith('http://') || url.startsWith('https://')) {
		return parsedUrl;
	}

	if (parsedUrl.startsWith('/')) {
		const pattern = /^(\/+)(.*)/;
		return parsedUrl.replace(pattern, 'https://$2');
	}

	if (parsedUrl.includes(':/')) {
		const pattern = /(.*)(:\/+)(.*)/;
		return parsedUrl.replace(pattern, 'https://$3');
	}

	return `https://${parsedUrl}`;
};

const isValidURL = (url) => {
	const exp = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;

	return exp.test(url);
};

module.exports = { parseURL, isValidURL };
