$(document).ready(function () {
    function navPc() {
        var windowWidth = $(window).width();
        if (windowWidth > 1023) {
            $("body").addClass("pcMode");
        }
        else {
            $("body").removeClass("pcMode");
        }
        $('.pcMode #header nav').hover(function () {
            $(this).addClass('active');
            var maxHeight = 0;
            $('.pcMode #header nav>ul>li').each(function () {
                maxHeight = Math.max(maxHeight, $(this).height());
            });
            $('.pcMode #header nav>ul>li').css("height", maxHeight);
        }, function () {
            $(this).removeClass('active');
            $('.pcMode #header nav>ul>li').css("height", "");
        });
        $('.pcMode #header nav>ul>li').hover(function () {
            $(this).addClass('over');
        }, function () {
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
        $("#header nav").css("display", "");
        $('#content').removeClass("mobile_navOn");
    });
    $('section.main .goods').each(function () {
        $(this).css("background", "url('" + $(this).find("img").attr("src") + "') no-repeat center / cover");
    });
    $(".ticket .tabs a").click(function () {
        var tabs = $(this).attr("data");
        $(".ticket .tabs a").removeClass("active");
        $(this).addClass("active");
        $(".ticket div.tab-data").removeClass("active");
        $(".ticket div #" + tabs).addClass("active");
    });
    $(".ticket .calendar h4").click(function () {
        $("div.popup").css("display", "block");
    });
    $("div.popup .close").click(function () {
        $("div.popup").css("display", "none");
    });
    $(".ticket #discount .toggle").click(function () {
        $("div.discount_div").css("display", "block");
    });
    $("div.discount_div .close").click(function () {
        $("div.discount_div").css("display", "none");
    });
    $("div.discount_div .btn-area .cancle").click(function () {
        $("div.discount_div").css("display", "none");
    });
    $(".sub .container ul.tabs a").click(function () {
        var tabs = $(this).attr("data");
        $(".sub .container ul.tabs a").removeClass("active");
        $(this).addClass("active");
        $(".sub div.tab-contents").removeClass("active");
        $(".sub div #" + tabs).addClass("active");
    });
    $(".sub.detail.view .star button").click(function () {
        var starValue = $(this).attr("data");
        $(".sub.detail.view button.star").removeClass("on");
        $(".sub.detail.view .star button").each(function () {
            $(this).find("i").removeClass("fa-star");
            $(this).find("i").addClass("fa-star-o");
            if ($(this).attr("data") <= starValue) {
                $(this).addClass("on");
                $(this).find("i").removeClass("fa-star-o");
                $(this).find("i").addClass("fa-star");
            }
        });
    });
    $(".accordion h5").click(function () {
        var accOn = $(this).attr("data");
        $(".accordion h5").removeClass("active");
        $(this).addClass("active");
        $(".accordion>div").removeClass("active");
        $(".accordion>div." + accOn).addClass("active");
    });
    $(window).load(function () {
        $('.image_slider .bx').bxSlider({
            pagerCustom: '#bx-pager'
            , auto: true
        });
    });
});