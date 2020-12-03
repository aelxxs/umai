const { Router } = require('express');
const o_O = require('../../util/async');

const files = require('../../util/file');

const { upload } = require('../../controllers/file.controller');

module.exports = Router()
	// Routes
	.post('/', files, o_O(upload));
