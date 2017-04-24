// --sidebar--
$(document).ready(function () {
    // $('.menubar li').click(function () { return false; });
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
    $(window).scroll(function () {
        if ($(window).scrollTop() > elementPosition.top) {
            $('.menubar').css('position', 'fixed').css('top', '0').css('width', '100%').css('z-index', "8000");
        } else {
            $('.menubar').css('position', 'static').css('width', '1170');
        }
    });
// '''' Second form''


$(".secform form").submit(function(){
    if( ($("input").val() === "") || ($("textarea").val() === ""))  {
      $(".secform span").text("The text field is required").show();
       $(".secform input").css("border-color","#f54b0f");
       $(".secform textarea").css("border-color","#f54b0f");
        $(".secbut").css("background-color","#18afd3").css("outline","0");
      event.preventDefault();
    }
});


// '''' Third form''

$(".thform form").submit(function(){
    if ($("input:first").val() === "") {
        $(".thform span").text("The e-mail is not a valid e-mail").show();
        $(".thbut").css("background-color","#f54b0f").css("outline","0");
        $(".thirdd input").css("border-color","#f54b0f");
        event.preventDefault();
    }
})
});