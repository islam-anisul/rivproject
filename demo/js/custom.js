//smooth scroll
$(document).on('click','a[href^="#"]', function(event){
    "use strict";

    event.preventDefault();
    $(' html,body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top} ,2000);
});

//sticky navbar
$(function(){
    "use strict";
    
    $(window).on('scroll', function(){
        var sticky = $(this).scrollTop();

        if(sticky>=400){
            $("#topbar").addClass("stickyNav");
        } else{
            $("#topbar").removeClass("stickyNav");
        }
    });
})

// navbar trigger
$(function () {
    "use strict";

    $(".trigger").on('click', function () {
        $(this).toggleClass("active");
        $(".list").toggle('slow');
    });
});

// resume
$(function () {
    "use strict";

    $(".resumeBTN").on('click', function () {
        $(this).addClass("open").siblings().removeClass("open");
    });

    $(".eduBTN").on('click', function () {
        $(".eduCont").show('slow');
        $(".expCont").hide('slow');
    });

    $(".expBTN").on('click', function () {
        $(".expCont").show('slow');
        $(".eduCont").hide('slow');
    });
});

// portfolio
$(function () {
    "use strict";

    // portfolio button
    $(".pb").on('click', function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(".port_container").removeClass("close");
    });

    // portfolio item slider
    $('.port_slider.owl-carousel').owlCarousel({
        dots: true,
        margin: 10,
        responsiveClass: true,
        autoplay: true,
        rewind: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                loop: true
            },
            600: {
                items: 2,
                nav: true,
                loop: true

            },
            1000: {
                items: 2,
                nav: true,
                loop: true
            }
        }
    });
    
});

 //portfolio mixit up
$(function(){
    "use strict";
    var mixer = mixitup('.port_item');
});
//portfoli end

// available
$(function () {
    "use strict";

    particlesJS("available", {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ff1818"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
           
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "section",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": false
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });

});

// blog
$(function(){
    "use strict";

    $('.blogCont').slick({
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        speed: 2000,
        mobileFirst: true,
        dots: true,
        arrows: true,
        prevArrow: '.preBTN',
        nextArrow: '.nxtBTN',
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

});

// testimonial
$(function(){
    "use strict";

    $('.sliderCont').slick({
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        speed: 2000,
        arrows: false,
        mobileFirst: true,
        dots: true,
        arrows: true,
        prevArrow: '.prev_btn',
        nextArrow: '.nxt_btn',
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

});
//back to top button
$(function(){
    "use strict"

    $("#backToTop").hide();
    $(window).on('scroll', function(){
        var backTop = $(this).scrollTop();
        if(backTop >= 400){
            $("#backToTop").show('slow');
        } else{
            $("#backToTop").hide('slow');
        }
    });
    $("#backToTop").on('click', function(){
        $('html,body').animate({
            scrollTop:0,
        },1500);
    });
});

//index2 banner
$(function(){
    "use strict";

    particlesJS("index2Particles", {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ff1818"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
           
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": true,
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ff1818",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "section",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": false
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
});



