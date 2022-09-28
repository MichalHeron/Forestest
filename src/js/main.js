const burger = document.querySelector('.burger-btn')
const navItems = document.querySelector('.nav_items')
const navLinks = document.querySelectorAll('.nav-link')
const navLink = document.querySelector('.nav-link')
const conInputs = document.querySelectorAll('.contact__input')
const form = document.querySelector('.contact-form')

const scrollSpySections = document.querySelectorAll('.scrollspy')


const showNav = () => {
	navItems.classList.toggle('show')
}

const navActive = () => {
	for (const link of navLinks) {
		link.classList.remove('active')
	}
	navItems.onclick = e => {
		// console.log(e.target)
		e.target.classList.add('active')
		navItems.classList.remove('active')
	}
}

// const observer = new IntersectionObserver(entries => {
// 	entries.forEach(entry => {
// 		console.log(entry)
// 		if (entry.isIntersecting) {

// 			entry.target.classList.add('active')
// 		} else {
// 			entry.target.classList.remove('active')
// 		}
// 	})
// })

// scrollSpySections.forEach(el => {
// 	observer.observe(el)
// })

// scrollspy begin

const handleScrollSpy = () => {
	if (document.body.classList.contains('main-page')) {
		document.body.style.height = 'auto'
		const sections = []
		// console.log('przed if')
		scrollSpySections.forEach(section => {
			console.log(window.scrollY)
			if (window.scrollY <= section.offsetTop + section.offsetHeight) {
				const currentSection = document.getElementById(section.id)

				sections.push(currentSection)
				// sections.forEach(e => {
				// 	console.log(e)
				// })
				const r = document.querySelector(`[href*="#${sections[0].id}"]`)
				// console.log(sections);
				navLinks.forEach(menuItem => menuItem.classList.remove('active'))

				if (r != null) {
					r.classList.add('active')
				}
			}
		})

		// if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
		// 	navLinks.forEach(menuItem => menuItem.classList.remove('active'))
		// 	navlinkostatni.classList.add('active')
		// }  //to jest do nadania klasy otatniej linku
	}
}
// scrollSpySections.forEach(section => {
// 	console.log(section.offsetHeight)
// })
// scrollSpySections.forEach(section => {
// 	console.log(section.offsetTop)
// })
window.addEventListener('scroll', handleScrollSpy)
window.addEventListener('scroll', console.log(window.scrollY))
// scrollspy end

// const check = (a) => {
// 	if (!form.contact_name.value) {
// 		console.log('pusto')
// 		// e.target.nextElementSibling.classList.remove('contact__label-moved')
// 		conInputs.forEach(input.nextElementSibling.classList.remove('contact__label-moved'))
// 	} else console.log('niepusto')
// }

burger.addEventListener('click', showNav)
navItems.addEventListener('click', showNav)

navLinks.forEach(link => {
	link.addEventListener('click', navActive)
})

// const labelMove = () => {
// 	form.onclick = e => {
// 		if (e.target.classList.contains('contact__input') || e.target.classList.contains('contact__textarea')) {
// 			e.target.nextElementSibling.classList.add('contact__label-moved')
// 			console.log(e.target)
// 		} else console.log('error')

// 		if (!form.contact_name.value) {
// 			console.log('pusto')
// 			// e.target.nextElementSibling.classList.remove('contact__label-moved')
// 		} else 	console.log(form.contact_name.value)
// 	}
// }

// conInputs.forEach(input => {
// 	input.addEventListener('click', labelMove)
// })

// for (const link of navLinks) {
// 	link.addEventListener('click', navActive)
// }

//trying ad listener on indow with sroll
// window.addEventListener('mousemove', console.log(scrollY))
// console.log(window.scrollY)
// console.log(window)
