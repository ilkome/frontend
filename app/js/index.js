// Run animation with reveal plugin
function initAnimation() {
  const sr = ScrollReveal({
    viewFactor: 0.3
  })

  // Portfolio
  sr.reveal('.js-portfolioAnim', {
    origin: 'bottom',
    distance: '100px',
    duration: 1000,
    delay: 200
  })

  // Contacts
  sr.reveal('.js-contactsAnim', {
    origin: 'bottom',
    distance: '100px',
    duration: 1000
  })
}

// DOM ready
$(() => {
  new Blazy({
    selector: '.js-belazy',
    offset: 500,
    successClass: 'js-belazy-loaded'
  })
})


// Everything ready
$(window).load(() => {
  initAnimation()
})
