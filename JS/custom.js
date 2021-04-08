/*global $, alert, comsole*/

$(function() {
    'use strict';
    //Adjust Header Height

    var myHeader = $('.header');
    var mySlider = $('.bxslider');

    myHeader.height($(window).height());

    // Resize

    $(window).resize(function() {
        myHeader.height($(window).height());

        mySlider.each(function() {
            $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);
        });

    });

    // Links Add Active Class

    $('.links li').click(function() {
        $(this).parent().addClass('active').siblings().removeClass('active');
    });


    // Adjust Bxslider List Item center

    mySlider.each(function() {

        $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);

    });

    // Trigger The Bx Slider


    mySlider.bxSlider({

        pager: false
    });

    $('.links li a').click(function() {
        $('html , body ').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 1000);
        console.log($(this).data('value'));
    });


    // Our Auto slider code
    (function autoSlider() {
        $('.slid .active').each(function() {
            if (!$(this).is(':last-child')) {
                $(this).delay(3000).fadeOut(1200, function() {
                    $(this).removeClass('active').next().addClass('active').fadeIn();

                    autoSlider();
                });
            } else {

                $(this).delay(4000).fadeOut(1200, function() {
                    $(this).removeClass('active');
                    $('.slid div').eq(0).addClass('active').fadeIn();
                    autoSlider();
                });

            }

        });
    }());

    //  Trigger mixitup
    $('.galary').mixItUp();
    // shuffle links
    $('.shuffle li').click(function() {
        $(this).addClass('selected').siblings().removeClass('selected');
    });

    // Trigger Nice scroll
    $('html').niceScroll({
        cursorcolor: '#1abc9c',
        cursorwidth: '7px',
        cursorborder: '1px solid #1abc9c'
    });

});