
if(window.matchMedia('(max-width: 768px)').matches){
    jQuery.fn.extend({
        onAppearanceAddClass: function(class_to_add) {
        var $window = $( window ),
            window_height = $window.height(),
            array_of_$elements = [];
        this.each(function(i,el) {
            array_of_$elements.push($( el ));
        })
        scrollHandler();
            if (array_of_$elements.length) {
            $window.on('resize', resizeHandler).on('resize', scrollHandler).on('scroll', scrollHandler);
        }
        function resizeHandler() {
            window_height = $window.height();
        }
        function watchProcessedElements(array_of_indexes) {
            var l, i;
            for (l = array_of_indexes.length, i = l - 1; i > -1; --i) {
            array_of_$elements.splice(array_of_indexes[i], 1);
            }
            if (!array_of_$elements.length) {
            $window.off('resize', resizeHandler).off('scroll', scrollHandler).off('resize', scrollHandler);
            }
        }
        function scrollHandler() {
            var i, l, processed = [];
            for ( l = array_of_$elements.length, i = 0; i < l; ++i ) {
            if ($window.scrollTop() + window_height > array_of_$elements[i].offset().top) {
                array_of_$elements[i].addClass(class_to_add);
                processed.push(i); 
            }
            }
            if (processed.length) {
            watchProcessedElements(processed);
            }
        }
        return this;
        }
    })
    
    $('.partners__item').onAppearanceAddClass('partners__item_color');
}