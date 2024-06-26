const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
const navMenu = document.getElementsByTagName('nav')[0]
const navItems = Array.from(navMenu.getElementsByTagName('i'))

navItems.forEach(element => {
    element.addEventListener('click', () => {
        const itemSelected = document.getElementsByClassName('item-menu-selected')[0]
        if (!element.classList.contains('item-menu-selected')){
            element.classList.add('item-menu-selected')
            itemSelected.classList.remove('item-menu-selected')
        }
    })
});