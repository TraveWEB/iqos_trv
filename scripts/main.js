$(document).ready(function(){
  $('.header-button').click(function(event) {
    $('.header-button, .span, .header_active').toggleClass('active');
  });
});

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  if (anchor.getAttribute('href') != '#') {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const blockID = anchor.getAttribute('href').substr(1)

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }
}