$( function() {

    var wind = $(window);

    // wow = new WOW({
    //     boxClass: 'wow',
    //     animateClass: 'animated',
    //     offset: 200,
    //     mobile: false,
    //     live: false
    // });
    // wow.init();

    // ---------- background change -----------
    var pageSection = $(".bg-img");
    pageSection.each(function (indx) {

        if ($(this).attr("data-background")) {
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });

    // ---------- to top -----------

    wind.on("scroll", function() {

        var bodyScroll = wind.scrollTop(),
            toTop = $(".to_top")

        if (bodyScroll > 700) {

            toTop.addClass("show");

        } else {

            toTop.removeClass("show");
        }
    });

    $('.to_top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 0);
        return false;
    });

    /* ==  float_box_container button  == */
  $( ".float_box_container" ).mousemove(function(e) {
        var parentOffset = $(this).offset(); 
        var relX = e.pageX - parentOffset.left;
        var relY = e.pageY - parentOffset.top;
        $(".float_box").css({"left": relX, "top": relY });
        $(".float_box").addClass("show");
    });
    $( ".float_box_container" ).mouseleave(function(e) {
        $(".float_box").removeClass("show");
    });

    /* ==  Button Animation  == */
  $( ".button_su_inner" ).mouseenter(function(e) {
    var parentOffset = $(this).offset(); 
    var relX = e.pageX - parentOffset.left;
    var relY = e.pageY - parentOffset.top;
    $(this).prev(".su_button_circle").css({"left": relX, "top": relY });
    $(this).prev(".su_button_circle").removeClass("desplode-circle");
    $(this).prev(".su_button_circle").addClass("explode-circle");
  });
  
  $( ".button_su_inner" ).mouseleave(function(e) {
    var parentOffset = $(this).offset(); 
    var relX = e.pageX - parentOffset.left;
    var relY = e.pageY - parentOffset.top;
    $(this).prev(".su_button_circle").css({"left": relX, "top": relY });
    $(this).prev(".su_button_circle").removeClass("explode-circle");
    $(this).prev(".su_button_circle").addClass("desplode-circle");
  });

  // -------- counter --------
  $('.counter').countUp({
        delay: 10,
        time: 2000
    });

    // --------- fav btn ---------
    $(".fav-btn").on("click" , function(){
        $(this).toggleClass("active");
    })

});

// ------------ working in desktop -----------
if ($(window).width() > 991) {
    $('.parallaxie').parallaxie({
    });
}

// ------------ swiper sliders -----------
$(document).ready(function() {

    // ------------ tc-awards-slider1 -----------
    var swiper = new Swiper('.tc-awards-slider6', {
        spaceBetween: 60,
        centeredSlides: true,
        slidesPerView: "auto",
        speed: 10000,
        autoplay: {
            delay: 1,
        },
        loop: true,
    //   allowTouchMove: false,
        disableOnInteraction: true,
    });

    // ------------ tc-marqee-slider6 -----------
    var swiper = new Swiper('.tc-marqee-slider6', {
        spaceBetween: 100,
        centeredSlides: true,
        slidesPerView: "auto",
        speed: 15000,
        navigation: false,
        autoplay: {
            delay: 1,
        },
        loop: true,
    //   allowTouchMove: false,
        disableOnInteraction: true,
    });

    // ------------ tc-marqee-slider6 -----------
    var swiper = new Swiper('.testimonials-slider6', {
        slidesPerView: 2,
        spaceBetween: 30,
        // centeredSlides: true,
        speed: 1000,
        pagination: {
            el: ".testimonials-slider6 .swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: '.testimonials-slider6 .swiper-button-next',
            prevEl: '.testimonials-slider6 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 2,
            }
        }
    });

});


// ------------ scripts -----------
$(document).ready(function(){
    $(".tc-services-style6 .service-card").on("mouseenter" , function(){
        $(this).find(".text").slideDown();
    })
    $(".tc-services-style6 .service-card").on("mouseleave" , function(){
        $(this).find(".text").slideUp();
    })
});

// ------------ charts -----------
$(document).ready(function(){
    var bar_chart_options = {
        series: [{
            name:  '  ',
            data: [06, 04, 03, 01]
        }, {
            name: '  ',
            data: [05, 03, 01, 0.2]
        }],
        colors: ['#c20b0b', '#000000'],
        chart: {
            type: 'bar',
            height: 450,
            theme: 'dark',
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '50%',
                endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 8,
            colors: ['transparent']
        },
        xaxis: {
            categories: ['2023','2022', '2021', '2020'],
        },
        yaxis: {
            title: {
                text: ''
            }
        },
        fill: {
            opacity: 1
        },
        tooltip: {
            y: {
                formatter: function(val) {
                    return val + " $"
                }
            }
        },
    };
    var chart = new ApexCharts(document.querySelector("#bar_chart1"), bar_chart_options);
    chart.render();
});



// ------------ gsap scripts -----------
$( function() {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    // create the smooth scroller FIRST!
    const smoother = ScrollSmoother.create({
    content: "#scrollsmoother-container",
    smooth: 2,
    normalizeScroll: true,
    ignoreMobileResize: true,
        effects: true,
    //preventDefault: true,
    //ease: 'power4.out',
    //smoothTouch: 0.1, 
    });

    // smoother.effects("img", { speed: "auto" });

    let headings = gsap.utils.toArray(".js-title").reverse();
    headings.forEach((heading, i) => {
    let headingIndex = i + 1;
    let mySplitText = new SplitText(heading, { type: "chars" });
    let chars = mySplitText.chars;

    chars.forEach((char, i) => {
    smoother.effects(char, { lag: (i + headingIndex) * 0.03, speed: 1 });
    });
    });


    let splitTextLines = gsap.utils.toArray(".js-splittext-lines");

    splitTextLines.forEach(splitTextLine => {
    const tl = gsap.timeline({
        scrollTrigger: {
        trigger: splitTextLine,
        start: 'top 90%',
        duration: 1,
        end: 'bottom 60%',
        scrub: false,
        markers: false,
        toggleActions: 'play none none none'
        // toggleActions: 'play none play reset'
        }
    });

    const itemSplitted = new SplitText(splitTextLine, { type: "lines" });
    gsap.set(splitTextLine, { perspective: 400 });
    itemSplitted.split({ type: "lines" })
    // tl.from(itemSplitted.lines, { y: 100, delay: 0.2, opacity: 0, stagger: 0.1, duration: 1, ease: 'inOut' });
    // tl.from(itemSplitted.lines, { y: 100, opacity: 0, stagger: 0.05, duration: 1, ease: 'back.inOut' });
    tl.from(itemSplitted.lines, { duration: 1, delay: 0, opacity: 0, rotationX: -80, force3D: true, transformOrigin: "top center -50", stagger: 0.1 });
    });

});

$( function() {
    //  Button Move Animation
  const all_btns = gsap.utils.toArray(".btn_wrapper");
  if (all_btns.length > 0) {
    var all_btn = gsap.utils.toArray(".btn_wrapper");
  }
  else {
    var all_btn = gsap.utils.toArray("#btn_wrapper");
  }
  const all_btn_cirlce = gsap.utils.toArray(".btn-item");
  all_btn.forEach((btn, i) => {
    $(btn).mousemove(function (e) {
      callParallax(e);
    });
    function callParallax(e) {
      parallaxIt(e, all_btn_cirlce[i], 20);
    }

    function parallaxIt(e, target, movement) {
      var $this = $(btn);
      var relX = e.pageX - $this.offset().left;
      var relY = e.pageY - $this.offset().top;

      gsap.to(target, 0.5, {
        x: ((relX - $this.width() / 1.2) / $this.width()) * movement,
        y: ((relY - $this.height() / 1.2) / $this.height()) * movement,
        ease: Power2.easeOut,
      });
    }
    $(btn).mouseleave(function (e) {
      gsap.to(all_btn_cirlce[i], 0.5, {
        x: 0,
        y: 0,
        ease: Power2.easeOut,
      });
    });
  });
});


