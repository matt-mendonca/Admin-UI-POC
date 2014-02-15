(function($) {
    window.StaticAdmin = window.StaticAdmin || {};

    StaticAdmin.ui = function(){
        var nav_top_menu_click = function(event) {
            if($('.left-off-canvas-menu').hasClass('expanded')) {
                $('.left-off-canvas-menu').attr('class', 'left-off-canvas-menu');
                $('.left-off-canvas-menu .sub-menu,'+
                  '.left-off-canvas-menu .top-menu li').removeClass('active');
            }
        },

        nav_top_link_toggle_click = function(event) {
            var sub_menu = $(this).siblings('a').attr('data-sub-menu');

            event.stopPropagation();

            if(!$('.left-off-canvas-menu').hasClass('expanded')) {
                $('.left-off-canvas-menu').addClass('expanded').addClass(sub_menu);
                $('.left-off-canvas-menu .sub-menu.'+sub_menu+','+
                  '.left-off-canvas-menu .top-menu .'+sub_menu+'-link').addClass('active');
            }
        };


        return {
            nav_top_menu_click: nav_top_menu_click,
            nav_top_link_toggle_click: nav_top_link_toggle_click
        };
    }();

    $(document).ready(function() {
        $('.left-off-canvas-menu .top-menu').click(StaticAdmin.ui.nav_top_menu_click);
        $('.left-off-canvas-menu .top-menu i:last-child').click(StaticAdmin.ui.nav_top_link_toggle_click);
    });

    $(window).load(function() {
        
    });
})(jQuery);