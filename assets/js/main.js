/*=============== SHOW SIDEBAR ===============*/
const showSidebar = (toggleId, sidebarId, headerId, mainId) => {
  const toggle = document.getElementById(toggleId),
        sidebar = document.getElementById(sidebarId),
        header = document.getElementById(headerId),
        main = document.getElementById(mainId)
  
  if (toggle && sidebar && header && main) {
    toggle.addEventListener('click', () => {
      /* Show sidebar */
      sidebar.classList.toggle('show-sidebar');
      /* Add padding header */
      header.classList.toggle('left-pd');
      /* Add padding main */
      main.classList.toggle('left-pd');
    }) 
  }
}
showSidebar('header-toggle', 'sidebar', 'header', 'main')

/*=============== LINK ACTIVE ===============*/
const sidebarLinks = document.querySelectorAll('.sidebar__list a')

function linkColor() {
  sidebarLinks.forEach(link => link.classList.remove('active-link'))
  this.classList.add('active-link')
}
sidebarLinks.forEach(link => link.addEventListener('click', linkColor))

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-fill'

// Thème précedemment sélectionné par l'utilisateur d&éfinit dans le LS
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// On obtient le thème actuel de l'interface en validant la classe dark-theme
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-clear-fill' : 'ri-sun-fill'

// On valide si l'utilisateur a précedemment choisi un thème
if (selectedTheme) {
  // Si la validation est ok, nous demandons quel était le problème pour savoir si nous avons activé ou désactivé le dark
  document.body.classList[selectedTheme === 'dark'? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-clear-fill' ? 'add' : 'remove'](iconTheme)
}

// Activer/désactiver le thème manuellement avec le bouton
themeButton.addEventListener('click', () => {
  // Ajouter ou supprimer le dark / icon thème
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  // Sauvegarder le thème et l'icône actuels que l'utilisateur a choisi dans le LS
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})






















