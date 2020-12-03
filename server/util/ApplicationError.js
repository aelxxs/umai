class ApplicationError extends Error {
	constructor(message, status, request) {
		super(message);

		Error.captureStackTrace(this, this.constructor);

		this.message = message || 'Something went wrong - Please try again.';
		this.status = status || 500;
	}
}

module.exports = ApplicationError;
