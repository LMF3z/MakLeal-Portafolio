const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')

require('dotenv').config()
const router = require('./routes/router')
const routerSendMessage = require('./routes/routerSendMessage')

const port = process.env.PORT || 3002

app.set('port', port)

// middlewere
app.use(cors())
app.use(express.json())
// static files
app.use(express.static(path.join(__dirname, '../public')))

app.use('/', router)
app.use('/saveData', routerSendMessage)

module.exports = app
