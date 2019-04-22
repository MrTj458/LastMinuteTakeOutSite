$(document).ready(() => {
  const nav = $('#navbar')

  $(window).scroll(() => {
    if (window.scrollY === 0) {
      nav.removeClass('bg-dark')
    } else {
      nav.addClass('bg-dark')
    }
  })
})
