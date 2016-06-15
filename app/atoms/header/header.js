// Fix header jumping on mobile browsers
// =================================================================================================
function fixHeaderHeight(className) {
  console.log('1')
  const userAgent = navigator.userAgent || navigator.vendor || window.opera

  if (userAgent.match(/Android/i) || userAgent.match(/iPad/i)
    || userAgent.match(/iPhone/i) || userAgent.match(/iPod/i)) {
    const block = $(className)
    const blockHeight = block.outerHeight()

    block.css('height', blockHeight)
    block.css('min-height', 'auto')
  }
}
