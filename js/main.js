$(document).ready(function(){
 
  const prodSlider = $('.products__slider');
  $('.products__slider').owlCarousel({
      items: 2,
      margin: 10,
      loop: true, 
      dots: false,
      autoplayTimeout: 3000,
      autoplay: true,
      smartSpeed: 950,
  });
  $('.owl-next').click(function() {
    prodSlider.trigger('next.owl.carousel');
})
// Go to the previous item
$('.owl-prev').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    prodSlider.trigger('prev.owl.carousel', [300]);
});
});
const footSubmit = () => {
    const footSubmitBtn = document.getElementById('footer__email-btn')
    footSubmitBtn.addEventListener('submit', (event) => {
        event.preventDefault()
    })

}
footSubmit()
