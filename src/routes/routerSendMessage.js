const { Router } = require('express')
const routerSendMessage = Router()
const yup = require('yup')

const Schema = yup.object().shape({
	name: yup
		.string()
		.matches(/^[a-zA-Zá-üÁ-Ü]+$/, "Ingrese un nombre valido sin espacios")
		.required(),
	lastName: yup
		.string()
		.matches(/^[a-zA-Zá-üÁ-Ü]+$/, "Ingrese un apellido valido sin espacios")
		.required(),
	email: yup
		.string()
		.email()
		.required(),
	empresa: yup.string(),
	mensaje: yup
		.string()
		.required()
})

const validation = require('../middlewere/validateForm')

const controllerSendMessaje = require('../controller/controllerSendMessaje')

routerSendMessage.post('/', validation(Schema), controllerSendMessaje)

module.exports = routerSendMessage