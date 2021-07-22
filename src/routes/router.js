const { Router } = require('express')
const indexController = require('../controller/indexController')


const router = Router()


router.get('/', indexController)


module.exports = router