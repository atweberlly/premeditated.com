function mobileMenu() {
  const mainMenuButton = document.getElementById('menu-button')
  const mainMenu = document.getElementById('main-menu')
  const mainMenuLinks = document.querySelectorAll('.mobile-menu a')
  const mainMenuCloseButton = document.getElementById('close-button')

  // Opens the menu when `mainMenuButton` is pressed.
  mainMenuButton.addEventListener('click', () => {
    mainMenu.classList.add('active')
  })

  mainMenuLinks.forEach((mainMenuLink) => {
    mainMenuLink.addEventListener('click', (e) => {
      /**
       * If an anchor tag has an attribute `data-menu`, the whole menu won't close.
       * Otherwise, the menu will close.
       */
      if (mainMenuLink.hasAttribute('data-menu')) {
        e.preventDefault()
      } else {
        mainMenu.classList.remove('active')
      }
    })
  })

  // Closes the menu when `mainMenuCloseButton` is pressed.
  mainMenuCloseButton.addEventListener('click', () => {
    mainMenu.classList.remove('active')
  })

  const subMenuLinks = document.querySelectorAll('a[data-menu]')
  const subMenus = document.querySelectorAll('.mobile-menu [data-view]')
  const subMenuBackButtons = document.querySelectorAll('[data-view] button')

  subMenuLinks.forEach((subMenuLink) =>
    subMenuLink.addEventListener('click', () => {
      /**
       * Checks if `data-menu` and `data-view` attributes have the same value.
       * If true, adds an `active` class name to the `subMenu` element.
       * Otherwise, will log 'Not matched.'
       */
      if (subMenuLink.hasAttribute('data-menu')) {
        subMenus.forEach((subMenu) => {
          if (subMenuLink.getAttribute('data-menu') === subMenu.getAttribute('data-view')) {
            subMenu.classList.add('active')
          }
        })
      } else {
        console.log('Not matched')
      }
    })
  )

  /**
   * Accesses each back buttons then checks if the current `subMenu` element has an `active` class name.
   * If true, removes the `active` class name to go back to the main menu.
   */
  subMenuBackButtons.forEach((subMenuBackButton) => {
    subMenuBackButton.addEventListener('click', () => {
      subMenus.forEach((subMenu) => {
        if (subMenu.classList.contains('active')) {
          subMenu.classList.remove('active')
        }
      })
    })
  })
}

export default mobileMenu
