$(document).ready(function() {
    $('#menu').click(function() {
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');

        if ($('header').hasClass('toggle')) {
            $('header').animate({
                left: '0%'
            }, 300);
        } else {
            $('header').animate({
                left: '-120%'
            }, 300);
        }
    });

    $(window).on('scroll load', function() {
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
    });

    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        const targetOffset = $($(this).attr('href')).offset().top - 70; 
        $('html, body').animate({
            scrollTop: targetOffset
        }, 500, 'linear');
    });
});

/******************* */
document.addEventListener("DOMContentLoaded", function() {
    var skillItems = document.querySelectorAll(".skill");

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScroll() {
        skillItems.forEach(function(item) {
            if (isElementInViewport(item) && !item.classList.contains("in-view")) {
                item.classList.add("in-view");
                animateProgressBar(item);
            }
        });
    }
    /********************************************************* */
    var skillItems = document.querySelectorAll(".skill");
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", resetAnimation);
    handleScroll(); 
});