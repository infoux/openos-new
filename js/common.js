$(document).ready(function () {


    $("#header .mobileMenu a").click(function () {
        $("#header nav").css("display", "block");
        $('#content').addClass("mobile_navOn");
    });

    $("#header nav .mobileClose").click(function () {
        $("#header nav").css("display", "none");
        $('#content').removeClass("mobile_navOn");
    });


});