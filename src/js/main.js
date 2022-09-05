const burger = document.querySelector('.burger-btn')
const navItems = document.querySelector('.nav_items')
const navLinks = document.querySelectorAll('.nav-link')
const navLink = document.querySelector('.nav-link')

const showNav = () => {
	navItems.classList.toggle('show')
}

const navActive = () => {
	for (const link of navLinks) {
		link.classList.remove('active')
	}
	navItems.onclick = e => {
		console.log(e.target)
		e.target.classList.add("active")
		navItems.classList.remove('active')
	}
	// navLinks.forEach(link => {
	// 	link.classList.remove('active')
	// })

	//warunek sprawdzic czy jest klasa active jezeli tak to return a jezeli nie to nadac oraz sprawdzic gdzie jest i usunac stamtad
}

burger.addEventListener('click', showNav)
navItems.addEventListener('click', showNav)

// navLinks.forEach().addEventListener('click', navActive)
for (const link of navLinks) {
	link.addEventListener('click', navActive)
}
// navLinks.forEach(addEventListener('click', navActive))
