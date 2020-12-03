module.exports = (route) => {
	return (req, res, next) => {
		return Promise.resolve(route(req, res)).catch(next);
	};
};
