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
		// console.log(e.target)
		e.target.classList.add('active')
		navItems.classList.remove('active')
	}
}

burger.addEventListener('click', showNav)
navItems.addEventListener('click', showNav)

for (const link of navLinks) {
	link.addEventListener('click', navActive)
}
// navLinks.forEach(addEventListener('click', navActive))

//trying ad listener on indow with sroll
// window.addEventListener('mousemove', console.log(scrollY))
// console.log(window.scrollY)
// console.log(window)
