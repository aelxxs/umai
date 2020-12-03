const { Router } = require('express');
const o_O = require('../../util/async');

const { shorten } = require('../../controllers/url.controller');

module.exports = Router()
	// Routes
	.post('/', o_O(shorten));
