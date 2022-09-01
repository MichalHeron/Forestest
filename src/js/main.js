const burger = document.querySelector('.burger-btn')
const navItems = document.querySelector('.nav_items')

const showNav = () => {
    navItems.classList.toggle('show')
}

burger.addEventListener('click', showNav)


