require('dotenv').config();

const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

// * Middleware --
const init = async () => {
	const errors = require('./util/errors');
	const routes = require('./routes');

	app.use(express.urlencoded({ extended: true }));
	app.use(express.json());
	app.use(morgan('dev'));
	app.use(helmet());
	app.use(cors());

	routes.init(app);
	errors.init(app);
};

const start = async () => {
	const cron = require('./util/cron');
	const db = require('./database');

	await init();
	await db.connect();
	await cron.start();

	app.listen(process.env.PORT || 3000, () => {
		return console.info(`[Express API]: Listening on PORT: ${process.env.PORT || 3000}`);
	});
};

start();
