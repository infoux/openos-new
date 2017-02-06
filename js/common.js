$(document).ready(function () {


    function navPc() {
        var windowWidth = $(window).width();
        if (windowWidth > 1023) {
            $("body").addClass("pcMode");
        } else {
            $("body").removeClass("pcMode");
        }

        $('.pcMode #header nav').hover(function () {
                $(this).addClass('active');

                var maxHeight = 0;
                $('.pcMode #header nav>ul>li').each(function () {
                    maxHeight = Math.max(maxHeight, $(this).height());
                });
                $('.pcMode #header nav>ul>li').css("height", maxHeight);
            },
            function () {
                $(this).removeClass('active');
                $('.pcMode #header nav>ul>li').css("height", "");
            });
        $('.pcMode #header nav>ul>li').hover(function () {
                $(this).addClass('over');
            },
            function () {
                $(this).removeClass('over');
            });
    }

    navPc();
    $(window).resize(function () {
        navPc();
    });


    $("#header .mobileMenu").click(function () {
        $("#header nav").css("display", "block");
        $('#content').addClass("mobile_navOn");
    });

    $("#header nav .mobileClose").click(function () {
        $("#header nav").css("display", "none");
        $('#content').removeClass("mobile_navOn");
    });


    $('section.main .goods').each(function () {

        $(this).css("background", "url('" + $(this).find("img").attr("src") + "') no-repeat center / cover");



    });




});