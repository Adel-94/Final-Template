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
    });