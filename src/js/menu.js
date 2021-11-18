const menuTriggers = document.querySelectorAll('[menu-trigger]'),
    menuClose = document.querySelector('[menu-close]'),
    menu = document.querySelector('.right-menu');

menuTriggers.forEach((item) => {
    item.addEventListener('click', () => {
        menu.classList.add('active');
    })
})

menuClose.addEventListener('click', () => {
    menu.classList.remove('active')
})