// Click the hamburger, run a function
// Inside function, add/remove class of .open
// Make sure our link does not jump to the top

$('.menu-toggle').on('click', function() {
  $('.menu').toggleClass('open')

  return false
})
