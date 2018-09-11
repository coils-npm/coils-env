const path = require('path')
class CoilsEnv {
	static mounted (application, envPath) {
		envPath = envPath || path.resolve(process.cwd(), 'config/env.js')
		let env = require(envPath)
		const freezeObj = Object.freeze(env || {})
		Object.defineProperties(application, { '_env': { "get": () => { return freezeObj } } })
	}
}
module.exports = CoilsEnv