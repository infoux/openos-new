$(document).ready(function () {



    // call jRespond and add breakpoints
    var jRes = jRespond([{
        label: 'handheld',
        enter: 0,
        exit: 320
    }, {
        label: 'handheld2',
        enter: 320,
        exit: 748
    }, {
        label: 'tablet',
        enter: 748,
        exit: 1000
    }, {
        label: 'tablet2',
        enter: 1000,
        exit: 1300
    }, {
        label: 'laptop',
        enter: 1300,
        exit: 1630
    }, {
        label: 'desktop',
        enter: 1640,
        exit: 10000
    }]);

    // usage
    var outputStr = document.getElementById('output');

    jRes.addFunc({
        breakpoint: 'desktop',
        enter: function () {
            $("body").addClass("desktop");
            $("body").removeClass("laptop");
            $("body").removeClass("tablet");
            $("body").removeClass("tablet2");
            $("body").removeClass("handheld");
            $("body").removeClass("handheld2");
        }
    });

    jRes.addFunc({
        breakpoint: 'laptop',
        enter: function () {
            $("body").removeClass("desktop");
            $("body").addClass("laptop");
            $("body").removeClass("tablet");
            $("body").removeClass("tablet2");
            $("body").removeClass("handheld");
            $("body").removeClass("handheld2");
        }
    });

    jRes.addFunc({
        breakpoint: 'tablet',
        enter: function () {
            $("body").removeClass("desktop");
            $("body").removeClass("laptop");
            $("body").addClass("tablet");
            $("body").removeClass("tablet2");
            $("body").removeClass("handheld");
            $("body").removeClass("handheld2");
        }
    });

    jRes.addFunc({
        breakpoint: 'tablet2',
        enter: function () {
            $("body").removeClass("desktop");
            $("body").removeClass("laptop");
            $("body").removeClass("tablet");
            $("body").addClass("tablet2");
            $("body").removeClass("handheld");
            $("body").removeClass("handheld2");
        }
    });

    jRes.addFunc({
        breakpoint: 'handheld',
        enter: function () {
            $("body").removeClass("desktop");
            $("body").removeClass("laptop");
            $("body").removeClass("tablet");
            $("body").removeClass("tablet2");
            $("body").addClass("handheld");
            $("body").removeClass("handheld2");
        }
    });

    jRes.addFunc({
        breakpoint: 'handheld2',
        enter: function () {
            $("body").removeClass("desktop");
            $("body").removeClass("laptop");
            $("body").removeClass("tablet");
            $("body").removeClass("tablet2");
            $("body").removeClass("handheld");
            $("body").addClass("handheld2");
        }
    });














    $("#header .mobileMenu a").click(function () {
        $("#header nav").css("display", "block");
        $('#content').addClass("mobile_navOn");
    });

    $("#header nav .mobileClose").click(function () {
        $("#header nav").css("display", "none");
        $('#content').removeClass("mobile_navOn");
    });


});