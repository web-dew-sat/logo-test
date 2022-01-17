
if(window.matchMedia('(max-width: 768px)').matches){
    var block_show = null;
 
    function scrollTracking(){
        var wt = $(window).scrollTop();
        var wh = $(window).height();
        var et = $('.partners__item').offset().top;
        var eh = $('.partners__item').outerHeight();
    
        if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)){
            if (block_show == null || block_show == false) {
                $('.partners__item').show('fast', function(){
                      $(this).addClass('partners__item_color')
                   });
            }
            block_show = true;
        } else {
            if (block_show == null || block_show == true) {
                $('.partners__item').show('fast', function(){
                    $(this).removeClass('partners__item_color')
                 });
            }
            block_show = false;
        }
    }
    
    $(window).scroll(function(){
        scrollTracking();
    });
        
    $(document).ready(function(){ 
        scrollTracking();
    });
}