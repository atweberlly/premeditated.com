function mobileMenu() {
  const button = document.getElementById('menu-button')
  const menu = document.getElementById('mobile-menu')
  const menuLinks = document.querySelectorAll('.mobile-menu a')
  const close = document.getElementById('close-button')

  button.addEventListener('click', () => {
    menu.classList.add('active')
  })

  menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('active')
    })
  })

  close.addEventListener('click', () => {
    menu.classList.remove('active')
  })
}

export default mobileMenu
