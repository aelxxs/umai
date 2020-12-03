const { Sequelize } = require('sequelize');

const database = new Sequelize(process.env.POSTGRES_URL, {
	logging: false,
});

const models = {
	files: database.define('files', {
		name: {
			type: Sequelize.STRING,
			primaryKey: true,
		},
		expiresAt: {
			type: Sequelize.DATE,
			primaryKey: true,
		},
	}),
};

const connect = async () => {
	await database.authenticate();
	Object.values(models).forEach((model) => model.sync());

	return console.log('[PostgreSQL]: Connected to the database');
};

module.exports = { connect, models };
