const { Router } = require('express');

module.exports = Router()
	// ? Register API Routes
	.use('/url', require('./url.route'))
	.use('/file', require('./file.route'));
