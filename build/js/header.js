'use strict';

// Fix header jumping on mobile browsers
// =================================================================================================
function fixHeaderHeight(className) {
  console.log('1');
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (userAgent.match(/Android/i) || userAgent.match(/iPad/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPod/i)) {
    var block = $(className);
    var blockHeight = block.outerHeight();

    block.css('height', blockHeight);
    block.css('min-height', 'auto');
  }
}
//# sourceMappingURL=header.js.map
