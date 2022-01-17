
if(window.matchMedia('(max-width: 768px)').matches){
	var block_show = false;
    
    function scrollTracking(){
        if (block_show) {
            return false;
        }
    
        var wt = $(window).scrollTop();
        var wh = $(window).height();
        var et = $('.partners__item').offset().top;
        var eh = $('.partners__item').outerHeight();
        var dh = $(document).height();   
    
        if (wt + wh >= et || wh + wt == dh || eh + et < wh){
            block_show = true;
            
            // Код анимации
            $('.partners__item').show('fast', function(){
                $(this).addClass('partners__item_color')
            });
        }
            
    }
    
    $(window).scroll(function(){
        scrollTracking();
    });
        
    $(document).ready(function(){ 
        scrollTracking();
    });
}