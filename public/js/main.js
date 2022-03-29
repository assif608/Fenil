(function($) {
    "use strict";
    $(window).on('load', function() {
        function preLoader() {
            setTimeout(function() {
                $('#preloader .scroll-static').addClass('loaded');
                setTimeout(function() {
                    $('#preloader').addClass('loaded');
                    setTimeout(function() {
                        $('#preloader').remove()
                    }, 400);
                    Splitting()
                }, 600)
            }, 1000)
        };
        preLoader();

        function projectFilter() {
            var $gridt = $('.portfolio-grid');
            $gridt.isotope();
            $('.portfolio-filter').on('click', 'button', function() {
                var filterValue = $(this).attr('data-filter');
                $gridt.isotope({
                    filter: filterValue
                });
                $(this).addClass('active').siblings().removeClass('active')
            })
        };
        projectFilter()
    });
    $(window).on('scroll', function() {
        function headerFixed() {
            var sticky = $("header"),
                scroll = $(window).scrollTop();
            if (scroll >= 100) sticky.addClass("fixed");
            else sticky.removeClass("fixed")
        };
        headerFixed()
    });
    $(document).ready(function() {
        function imagesLoadedInit() {
            $('body').imagesLoaded({
                background: !0
            })
        }
        imagesLoadedInit();

        function menuInit() {
            $('.menu-btn').on('click', function() {
                var delay = 150;
                var menu_items = 5;
                var clicks = $(this).data('clicks');
                if (clicks) {
                    $('.nav-menu ul li').each(function(i, e) {
                        setTimeout(function() {
                            $(e).removeClass('show')
                        }, i * delay - 100)
                    });
                    setTimeout(function() {
                        $('nav').removeClass('show');
                        $('.menu-btn').removeClass('open');
                        $('.header-nav-toggler').removeClass('fixxed')
                    }, menu_items * 150)
                } else {
                    $('nav').addClass('show');
                    $('.menu-btn').addClass('open');
                    $('.header-nav-toggler').hide().delay(300).show(200).addClass('fixxed');
                    $('.nav-menu ul li').each(function(i, e) {
                        setTimeout(function() {
                            $(e).addClass('show')
                        }, i * delay + 300)
                    })
                }
                $(this).data("clicks", !clicks)
            })
        };
        menuInit();

        function countUp() {
            $('.numberCount').counterUp({
                delay: 10,
                time: 1000
            })
        };
        countUp();

        function testimonialsCarouselInit() {
            $('.owl-carousel.testimonials-carousel').owlCarousel({
                items: 1,
                margin: 0,
                dots: !1,
                nav: !0,
                autoplay: !0,
                autoplayHoverPause: !0,
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                rewind: !0,
                navText: ['<i class="lni-arrow-left"></i>', '<i class="lni-arrow-right"></i>']
            })
        };
        testimonialsCarouselInit();

        function clientsCarouselInit() {
            $('.owl-carousel.clients-carousel').owlCarousel({
                dots: !1,
                nav: !1,
                loop: !0,
                autoplay: !0,
                responsive: {
                    0: {
                        items: 2,
                        margin: 30,
                    },
                    480: {
                        items: 3,
                        margin: 30,
                    },
                    768: {
                        items: 4,
                        margin: 40,
                    },
                    1200: {
                        items: 5,
                        margin: 50,
                    }
                }
            })
        };
        clientsCarouselInit();

        function portfolioPopupInit() {
            $(document).on('click', '.portfolio-link', function() {
                var portfolioURL = $(this).attr('href');
                $('body').addClass('popup-added');
                $('.load-popup-content').addClass('shown');
                setTimeout(function() {
                    $('.load-popup-content .popup-content-inner').load(portfolioURL + ' .load-data > *', function() {
                        $('.popup-loader').fadeOut(200)
                    });
                    setTimeout(function() {
                        $('.load-popup-content').css('overflow-y', 'scroll')
                    }, 300)
                }, 300);
                return !1
            });
            $('.close-popup-content').on('click', function() {
                $('body').removeClass('popup-added');
                $('.load-popup-content .popup-content-inner').empty();
                $('.load-popup-content').removeClass('shown').css('overflow', 'auto');
                setTimeout(function() {
                    $('.popup-loader').fadeIn(200)
                }, 100);
                return !1
            })
        }
        portfolioPopupInit();

        function blogPopupInit() {
            $(document).on('click', '.blog-link', function() {
                var portfolioURL = $(this).attr('href');
                $('body').addClass('popup-added');
                $('.load-popup-content').addClass('shown');
                setTimeout(function() {
                    $('.load-popup-content .popup-content-inner').load(portfolioURL + ' .load-data > *', function() {
                        $('.popup-loader').fadeOut(200)
                    });
                    setTimeout(function() {
                        $('.load-popup-content').css('overflow-y', 'scroll')
                    }, 300)
                }, 300);
                return !1
            });
            $('.close-popup-content').on('click', function() {
                $('body').removeClass('popup-added');
                $('.load-popup-content .popup-content-inner').empty();
                $('.load-popup-content').removeClass('shown').css('overflow', 'auto');
                setTimeout(function() {
                    $('.popup-loader').fadeIn(200)
                }, 100);
                return !1
            })
        }
        blogPopupInit();

        // function scrollToTopInit() {
        //     var progressPath = document.querySelector('.progress-wrap path');
        //     var pathLength = progressPath?.getTotalLength();
        //     // progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        //     progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        //     progressPath.style.strokeDashoffset = pathLength;
        //     progressPath.getBoundingClientRect();
        //     progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
        //     var updateProgress = function() {
        //         var scroll = $(window).scrollTop();
        //         var height = $(document).height() - $(window).height();
        //         var progress = pathLength - (scroll * pathLength / height);
        //         progressPath.style.strokeDashoffset = progress
        //     }
        //     updateProgress();
        //     $(window).scroll(updateProgress);
        //     var offset = 50;
        //     var duration = 300;
        //     jQuery(window).on('scroll', function() {
        //         if (jQuery(this).scrollTop() > offset) {
        //             jQuery('.progress-wrap').addClass('active-progress')
        //         } else {
        //             jQuery('.progress-wrap').removeClass('active-progress')
        //         }
        //     });
        //     jQuery('.progress-wrap').on('click', function(event) {
        //         event.preventDefault();
        //         jQuery('html, body').animate({
        //             scrollTop: 0
        //         }, duration);
        //         return !1
        //     })
        // }
        // scrollToTopInit()
    })
})(jQuery)