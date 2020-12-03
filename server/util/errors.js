module.exports.init = (app) => {
	app.use((req, res, next) => {
		return res.status(404).json({
			path: req.originalUrl,
			status: 404,
			message: 'The provided path does not exist.',
		});
	});
	app.use((error, req, res, next) => {
		return res.status(error.status || 500).json({
			path: req.originalUrl,
			status: error.status || 500,
			message: error.message,
		});
	});
};
