const ApplicationError = require('./ApplicationError');

const EXTENSIONS = [
	'.jar',
	'.exe',
	'.exec',
	'.msi',
	'.com',
	'.bat',
	'.cmd',
	'.nt',
	'.scr',
	'.ps1',
	'.psm1',
	'.sh',
	'.bash',
	'.bsh',
	'.csh',
	'.bash_profile',
	'.bashrc',
	'.profile',
];

const { nanoid } = require('nanoid');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		return cb(null, path.join(__dirname, '..', 'uploads'));
	},
	filename: (req, file, cb) => {
		const id = nanoid(6);

		return cb(null, id + path.extname(file.originalname));
	},
});

const fileFilter = (req, file, cb) => {
	const ext = path.extname(file.originalname);

	if (EXTENSIONS.some((extension) => ext.toLowerCase() === extension)) {
		return cb(new ApplicationError('Unsupported file type - Please try again.', 415));
	}

	return cb(null, true);
};

module.exports = multer({
	storage,
	fileFilter,
	limits: {
		fileSize: '512MB',
	},
}).array('files[]');
