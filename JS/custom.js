/*global $, alert, console*/
$(function() {
    'use strict';
    // Trigger nice scroll
    $('html').niceScroll();

    // Change header hight
    $('.header').height($(window).height());
    // Resize
    $(window).resize(function() {
        $('.header').height($(window).height());

        $('.intro').each(function() {
            $(this).css('paddingTop', ($(window).height() - $('.intro').height()) / 2);
        });

    });

    // Text position center

    $('.intro').each(function() {

        $(this).css('paddingTop', ($(window).height() - $('.intro').height()) / 2);

    });

    //Arrow clicked animation

    $('.header .arrow i').click(function() {
        $('html, body').animate({
            scrollTop: $('.features').offset().top
        }, 1000);
    });

    // Show hidden item from button clicked
    $('.btn-show').click(function() {

        $('.ourWork .hidden').fadeIn(1300);

    });
    // Check testimonials
    var
        rightArrow = $('.testim .fa-angle-right'),
        leftArrow = $('.testim .fa-angle-left');

    function checkClients() {

        $('.client:first').hasClass('active') ? leftArrow.fadeOut() : leftArrow.fadeIn();
        $('.client:last').hasClass('active') ? rightArrow.fadeOut() : rightArrow.fadeIn();

    }
    checkClients();

    $('.testim i').click(function() {
        console.log($(this));

        if ($(this).hasClass('fa-angle-right')) {
            console.log('kk11');

            $('.testim .active').fadeOut(200, function() {
                console.log('kk22');

                $(this).removeClass('active').next('.client').addClass('active').fadeIn();

                checkClients();

            });
        } else {
            $(this).hasClass('fa-angle-left')
            $('.testim .active').fadeOut(200, function() {

                $(this).removeClass('active').prev('.client').addClass('active').fadeIn();

                checkClients();

            });
        }

    });
});