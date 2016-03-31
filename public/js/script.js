$( document ).ready(function() {
    $('.skill-box').click(function() {
      $(this).toggleClass('full-size').find('.skill-subtext').toggle();
    })
});
