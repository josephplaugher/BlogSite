const winston = require('winston')

const HOST = () => {
	if (process.env.NODE_ENV === 'production') {
		return process.env.BASE_URL_PROD
	} else {
		return process.env.BASE_URL_DEV
	}
}

const HttpOptions = {
	host: HOST(),
	port: process.env.PORT,
	path: '/logError',
	ssl: process.env.NODE_ENV === 'production'
}

const Info = (req, res, next) => {
	let log = winston.createLogger({
		format: winston.format.json(),
		transports: [
			new winston.transports.Http(HttpOptions),
			new winston.transports.Console()
		]
	})
	log.info(req, res)
	next()
}

const Error = (req, res, next) => {
	let log = winston.createLogger({
		format: winston.format.json(),
		transports: [
			new winston.transports.Http(HttpOptions),
			new winston.transports.Console()
		]
	})
	log.error(req, res)
	next()
}

module.exports = { Info, Error }
