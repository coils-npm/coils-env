const path = require('path')
class CoilsEnv {
	static mounted (application, envPath) {
		envPath = envPath || path.resolve(process.cwd(), 'config/env')
		let env = require(envPath) || {}
		Object.assign(env, env[application['NODE_ENV']])
		const freezeObj = Object.freeze(env)
		Object.defineProperties(application, { '_env': { "get": () => { return freezeObj } } })
	}
}
module.exports = CoilsEnv