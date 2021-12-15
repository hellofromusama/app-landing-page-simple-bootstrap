$(window).on("load", function () {
    $(".preloader").fadeOut("slow");
});


$(document).ready(function () {
    /* --------------------------NavBar Shrink -------*/
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 90) {
            $(".navbar").addClass("navbar-shrink");
        }
        else {
            $(".navbar").removeClass("navbar-shrink");
        }
    })
    const videoSrc = $("#player-1").attr("src");
    $(".video-play-btn, .video-popup").on("click", function(){
        if($(".video-popup").hasClass("open")){
        $(".video-popup").removeClass("open");
        $("#player-1").attr("src","");
        }
    else{
        $(".video-popup").addClass("open");
        if($("#player-1").attr("src")==''){
            $("#player-1").attr("src",videoSrc);
        }
    }
});

    
    
    /*-------------Features Carouael --------*/

    $('.features-carousel').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        ressponsiveClass: true,
        responsive: {
            0: {
                items: 1,
               
            },
            600: {
                items: 2,
               
            },
            1000: {
                items: 3,
            }
        }
    });

        /*-------------Screenshot Carouael --------*/

        $('.screenshots-carousel').owlCarousel({
            loop: true,
            margin: 0,
            autoplay: true,
            ressponsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                   
                },
                600: {
                    items: 2,
                   
                },
                1000: {
                    items: 4,
                }
            }
        });
    
    
            /*-------------Testimonial Carouael --------*/

            $('.testimonials-carousel').owlCarousel({
                loop: true,
                margin: 0,
                autoplay: true,
                ressponsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                       
                    },
                    600: {
                        items: 2,
                       
                    },
                    1000: {
                        items: 3,
                    }
                }
            });
    
            $('.team-carousel').owlCarousel({
                loop: true,
                margin: 0,
                autoplay: true,
                ressponsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                       
                    },
                    600: {
                        items: 2,
                       
                    },
                    1000: {
                        items: 3,
                    }
                }
            });
// ----------------Page Scrolling --------------------------------
    $.scrollIt({
        topoffset: -50
    });
    // ---------------------- NavBar Collapse----------------------------
    $(".nav-link").on("click", function() {
        $(".navbar-collapse").collapse("hide");
    });
    /*--------------------- Toggle Theme - light and Dark--------------*/
    
    function toggleTheme() {
        if (localStorage.getItem("usama-theme") !== null) {
            if (localStorage.getItem("usama-theme") !== "dark") {
                $("body").addClass("dark");
            }
            else {
                $("body").removeClass("dark");
            }
         }
        updateIcon();
    }
    toggleTheme();
    $(".toggle-theme").on("click", function () {
        $("body").toggleClass("dark");
        if ($("body").hasClass("dark")) {
            localStorage.setItem("Usama-theme", "dark");
        }
        else {
            localStorage.setItem("Usama-theme", "light");
        }
        updateIcon();
    });
    function updateIcon() {
        if ($("body").hasClass("dark")) {
            $(".toggle-theme i").removeClass("fa-moon");
            $(".toggle-theme i").addClass("fa-sun");
        }
        else {
              $(".toggle-theme i").removeClass("fa-sun");
              $(".toggle-theme i").addClass("fa-moon");
        }
    }
});