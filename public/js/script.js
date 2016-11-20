$( document ).ready(function() {
    
    $('.skill-box').click(function() {
      $(this).toggleClass('full-size').find('.skill-subtext').toggle();
    });
    
    $(document).bind('click', function(e) {
     console.log(e.target);
      if(!$(e.target).parents('.skill-box').length && !$(e.target).hasClass('skill-box')) {
        $('.skill-box').removeClass('full-size');
        $('.skill-subtext').hide();
      }
    });
    
});
