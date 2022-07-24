const buttonMenu = document.querySelector('.menu-bar')
const buttonCloseMenu = document.querySelector('.cont-menu-mobile').querySelector('i')

buttonMenu.addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelector('.cont-menu-mobile').classList.add('active')
})

buttonCloseMenu.addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelector('.cont-menu-mobile').classList.remove('active')
})