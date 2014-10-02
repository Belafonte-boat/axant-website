//=require jquery/jquery.min

// If JavaScript is enabled remove 'no-js' class and give 'js' class
jQuery('html').removeClass('no-js').addClass('js');

// Add .osx class to html if on Os/x
if (navigator.appVersion.indexOf("Mac") !== -1) {
	jQuery('html').addClass('osx');
}

// When DOM is fully loaded
jQuery(document).ready(function($) {
    "use strict";


// External links
    $(window).load(function () {
        $('a[rel=external]').attr('target', '_blank');
    });


    // scroll body to 0px on click
    $(function () {
        $('.back-to-top').bind('click', function (event) {
            $('html, body').stop().animate({
                scrollTop: 0
            }, 1200, 'easeInOutExpo');
            event.preventDefault();
        });
    });

    $(function () {
        $('.down').bind('click', function (event) {
            var $tag = $(this);
            var navbar = $('.navbar').outerHeight();
            $('html, body').stop().animate({
                scrollTop: $($tag.attr('href')).offset().top - navbar + "px"
            }, 1200, 'easeInOutExpo');

            event.preventDefault();
        });
    });


// sticky for navbar
    $('.navbar').sticky({topSpacing: 0});


// One page navigation 

    $('.navbar').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 750,
        scrollOffset: 100,
        scrollThreshold: 0.1,
        filter: ':not(.ext)',
        easing: 'swing',
    });


// detect mobile devices

    var detectmob = false;
    if (navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)) {
        detectmob = true;
    }


    if (detectmob === false) {
        $('*[data-ani]').addClass('animated');
    }



});

   
 

