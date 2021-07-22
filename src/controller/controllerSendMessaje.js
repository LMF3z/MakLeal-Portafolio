const transporter = require('../mailer/mailer')


const controllerSendMessaje = async (req, res) => {

	const body = req.body

	try {
		
		// send mail with defined transport object
		let info = await transporter.sendMail({
		    from: '"New Message From Portfolio" <mjla1707@gmail.com>', // sender address
		    to: "mjla1707@gmail.com", // list of receivers
		    subject: "SomeOne Interest", // Subject line
		    html: `
		    	<h1>New Message</h1>
		    	<p>Nombre: ${body.name}</p>
		    	<p>Apelldo: ${body.lastName}</p>
		    	<p>Correo: ${body.email}</p>
		    	<p>Empresa: ${body.empresa ? body.empresa : 'Sin empresa'}</p>
		    	<p>Mensaje: ${body.mensaje}</p>
		    `,
		  });

		console.log(info)
		res.json({ send: true })

	} catch(error) {
		res.json(error)
		console.log(error);
	}
}

module.exports = controllerSendMessaje