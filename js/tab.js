// --sidebar--
$(document).ready(function () {
    // $('.menubar li').click(function(){return false;});
    $('.yes').click(function () {
        $('.sidebar1').animate({ left: '0' }, "1000");
    })
    $('.no').click(function () {
        $('.sidebar1').animate({ left: '-400' }, "1000");
    })
    $(".sidebar1  i").click(function () {
        $(this).toggleClass("fa-angle-up");
        $(this).toggleClass("fa-angle-down");
        // $(".js-toggle").css("display", "none");
        var myattr = $(this).attr("rel");
        $("#" + myattr).slideToggle();
    });

    // -----menubar--scroll
    var elementPosition = $('.menubar').offset();
    console.log(elementPosition);
    $(window).scroll(function () {
        if ($(window).scrollTop() > elementPosition.top) {
            $('.menubar').css('position', 'fixed').css('top', '0').css('width', '100%').css('z-index', "8000");
        } else {
            $('.menubar').css('position', 'static').css('width', '1170');
        }
    });
    //  First Tab

    $(".tab-panels .tabs li").click(function () {
        var panelattr = $(this).attr("tab-index");
        $(".tab-panels .tabs li").removeClass("active");
        $('.panel').removeClass('active3');
        $(this).addClass("active");
        $("#" + panelattr).addClass('active3');
    });


    // SECOND TAB 
    $(".tab-panels2 .tabs2 li").click(function () {
        var panattr = $(this).attr("tab-val");
        $(".tab-panels2 .tabs2 li").removeClass("act");
        $('.pan').removeClass("act");
        $(this).addClass("act");
        $("#" + panattr).addClass("act");
    });
    //FIRST ACCORDION 
    $(".body:first").css("display", "block");
    $(".head").click(function () {
        $(this).next().slideToggle(300);
        $(".head").not($(this)).find("i").removeClass("fa-minus").addClass("fa-plus");
        $(".body").not($(this).next()).slideUp(300);
        $(this).find("i").toggleClass("fa-minus");

    })
    //SECOND ACCORDION 
    $(".sechead").click(function () {
        console.log($(this).next())
        $(this).next().slideToggle(300);
        $(".sechead").not($(this)).find("i").removeClass("fa-minus").addClass("fa-plus");
        $(".secbody").not($(this).next()).slideUp(300);
        $(this).find("i").toggleClass("fa-minus");
    })


});


