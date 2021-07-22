const app = require('./server.js')

app.listen(app.get('port'), () => {
	console.log(`server running on port ${app.get('port')}`)
})