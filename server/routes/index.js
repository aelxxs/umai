module.exports.init = (app) => {
	app.use('/v1/', require('./v1'));
};
