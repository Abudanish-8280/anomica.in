
$(document).ready(function () {
    $('.homereviews-slider').slick({
        slidesToShow:3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        nav: false,
        pauseOnHover: false,
        navText: ["<div class='nav-btn prev-slide'>swfds</div><div id='slider-num'>", "</div><div class='nav-btn next-slide'>dgfdg</div>"],
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1
            }
        }]
    });
});

$(document).ready(function () {
    $('.partner-slier').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        nav: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 1
            }
        }, {
            breakpoint: 569,
            settings: {
                slidesToShow: 1
            }
        }]
    });
});

