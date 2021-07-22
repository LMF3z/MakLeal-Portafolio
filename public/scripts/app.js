document.addEventListener("DOMContentLoaded", e => {

	const cabecera = document.querySelector('#cabecera')
	const foto = document.querySelector("#foto")
	const picture = document.querySelector('#picture')
	const img_galery = document.querySelector(".img_galery")
	const container_modal = document.querySelector('.container_modal')
	const modal = document.querySelector(".modal")
	const arrow_left = document.querySelector(".arrow_left")
	const arrow_right = document.querySelector('.arrow_right')
	const state_bar = document.querySelector('.state_bar')
	const form_contact = document.querySelector('#form_contact')
	const errors = document.querySelector('.errors')
	const textarea = document.querySelector("#mensaje")
	const countChangeTextArea = document.querySelector('#countChangeTextArea')
	const lessChangeTextArea = document.querySelector("#lessChangeTextArea")
	const contiene_imagenes = document.querySelector(".contiene_imagenes")
	const ruta = '../imagenes/'
	const finalTextArea = 360

	gsap.fromTo(foto, {y: -250}, {y: 0, duration: 1.5});
	gsap.fromTo(".contiene_titulo", {y: 500, opacity: 0}, {y: 0, opacity: 1, duration: 1.5})

	gsap.fromTo('.description_imagen_img',{
		x: -1000
	},{
		x: 0,
		duration: 1.5,
		scrollTrigger: {
			trigger: '.description_imagen_img',
			start: 'top center+=100'
		}
	})

	gsap.fromTo('.description', {
		x: 1000,
	},{
		x: 0,
		duration: 1.5,
		scrollTrigger: {
			trigger: ".description",
			start: 'top center+=100'
		}
	})

	gsap.fromTo('.galeria', {
		opacity: 0
	},{
		opacity: 1,
		duration: 0.5,
		scrollTrigger: {
			trigger: '.galeria',
			start: 'top center+=100'
		}
	})

	lessChangeTextArea.innerHTML = finalTextArea

	const array_imagenes = [
		'18.jpg',
		'4.jpg',
		'6.jpg',
		'5.jpg',
		'21.jpg',
		'23.jpg',
		'10.jpg',
		'15.jpg',
		'13.jpg',
		'17.jpg',
		'16.jpg',
		'7.jpg',
		'11.jpg',
		'14.jpg',
		'8.jpg',
		'3.jpg',
		'9.jpg',
		'12.jpg',
		'1.jpg',
		'2.jpg',
		'19.jpg',
		'20.jpg',
		'22.jpg',
	];

	cabecera.style.backgroundImage = `url(${ruta+array_imagenes.filter(i => i == '13.jpg')})`

	array_imagenes.map(img => {
		picture.innerHTML += `<img src=${ruta+img} alt="picture"	class="img_galery">` 
	})

	array_imagenes.map((item, index) => {		
		state_bar.innerHTML += `<div class="ball" id=${index} ></div>`
	})

	picture.addEventListener('mouseover', e => {
		let imagen = e.target.className

		if(imagen === 'img_galery'){
			gsap.to(e.target, {scaleX: 0.8, scaleY: 0.8})
		}
	})
	picture.addEventListener('mouseout', e => {
		let imagen = e.target.className

		if(imagen === 'img_galery'){
			gsap.to(e.target, {scaleX: 1, scaleY: 1})
		}
	})

	picture.addEventListener('click', e => {
		if(e.target.className == 'img_galery') {

			container_modal.classList.toggle('show_modal')

			gsap.fromTo(modal,{
				scaleX: 0.4,
				scaleY: 0.4
			},{
				duration: 1,
				scaleX: 1,
				scaleY: 1
			})

			contiene_imagenes.style.backgroundImage = `url(${e.target.src})`

			let indexActual = searchIndex(e)

			Object.entries(state_bar.children).map((item, index) => {
				if(indexActual == item[1].id){
					item[1].classList.add('activeBall')
				} else {
					item[1].classList.remove('activeBall')
				}
			})
		}
	})

	container_modal.addEventListener('click', e => {

		if(e.target.classList.contains('container_modal') || e.target.classList.contains('close')) {
			gsap.fromTo(modal,{
				scaleX: 1,
				scaleY: 1
			},{
				duration: 0.5,
				scaleX: 0.4,
				scaleY: 0.4,
				onComplete: () => container_modal.classList.toggle('show_modal')
			})			
		}


		// container_modal.classList.toggle('show_modal')
	})

	arrow_right.addEventListener('click', e => handleArrow(e))
	arrow_left.addEventListener('click', e => handleArrow(e))


	textarea.addEventListener('keyup', e => {
		countChangeTextArea.innerHTML = e.target.value.length
	})
	
	const handleArrow = event => {
		if(event.target.id == 'next') {

			let indexActual = searchIndex(event)
			let cantidadImagenes = array_imagenes.length - 1

			if(indexActual < cantidadImagenes) {
				contiene_imagenes.style.backgroundImage = `url(${ruta+array_imagenes[indexActual + 1]})`

				gsap.fromTo(contiene_imagenes, {opacity: 0}, {duration: 0.5, opacity: 1})

				Object.entries(state_bar.children).map((item, index) => {
					if(indexActual + 1 == item[1].id){
						item[1].classList.add('activeBall')
					} else {
						item[1].classList.remove('activeBall')
					}
				})
			} else if(indexActual === cantidadImagenes) {
				contiene_imagenes.style.backgroundImage = `url(${ruta+array_imagenes[0]})`

				gsap.fromTo(contiene_imagenes, {opacity: 0}, {duration: 0.5, opacity: 1})

				Object.entries(state_bar.children).map((item, index) => {
					if(indexActual + 1 != item[1].id){
						item[1].classList.remove('activeBall')
						
					}
				})

				let primerChild = Object.entries(state_bar.children)[0]
				primerChild[1].classList.add('activeBall')
			}

		}

		if(event.target.id == 'back') {

			let indexActual = searchIndex(event)
			let cantidadImagenes = array_imagenes.length - 1

			if(indexActual > 0) {
				contiene_imagenes.style.backgroundImage = `url(${ruta+array_imagenes[indexActual - 1]})`

				gsap.fromTo(contiene_imagenes, {opacity: 0}, {duration: 0.5, opacity: 1})

				Object.entries(state_bar.children).map((item, index) => {
					if(indexActual - 1 == item[1].id){
						item[1].classList.add('activeBall')
					} else {
						item[1].classList.remove('activeBall')
					}
				})
			} else if(indexActual === 0) {
				contiene_imagenes.style.backgroundImage = `url(${ruta+array_imagenes[cantidadImagenes]})`

				gsap.fromTo(contiene_imagenes, {opacity: 0}, {duration: 0.5, opacity: 1})

				Object.entries(state_bar.children).map((item, index) => {
					if(indexActual + 1 != item[1].id){
						item[1].classList.remove('activeBall')
						
					}
				})

				let primerChild = Object.entries(state_bar.children)[Object.entries(state_bar.children).length - 1]
				primerChild[1].classList.add('activeBall')
			}
		}
	}

	contiene_imagenes.addEventListener('mouseover', e => {
		gsap.to([arrow_right, arrow_left, '.close', '.state_bar'], {opacity: 1})
	})

	contiene_imagenes.addEventListener('mouseout', e => {
		gsap.to([arrow_right, arrow_left, '.close', '.state_bar'], {opacity: 0})
	})

	const searchIndex = e => {
		let { backgroundImage } = contiene_imagenes.style
		let image = backgroundImage.split('/')
		let actual = image[image.length - 1].replace('")','')

		return array_imagenes.findIndex(img => img === actual)
	}

	form_contact.addEventListener('submit', async e => {
		e.preventDefault()
		
		const name = document.querySelector('#name').value
		const lastName = document.querySelector('#lastName').value
		const email = document.querySelector('#email').value
		const empresa = document.querySelector('#empresa').value
		const mensaje = textarea.value

		const data = {
			name,
			lastName,
			email,
			empresa,
			mensaje
		}

		const respuesta = await fetch("http://localhost:3001/saveData", {
			method: 'post',
			headers: {
				'Content-Type': 'application/json'
			},

			body: JSON.stringify(data)
		})

		const decode = await respuesta.json()
		
		if(decode?.message) {
			errors.style.visibility = 'visible'
			errors.innerHTML = decode.message
			return null
		} else {
			errors.style.visibility = 'hidden'
			errors.innerHTML = ''
		}

		if(decode.send){
			e.target.reset()
			alert('your message was sent')
			return null
		}

	})
})

