$(function () {
    //E : Header
    $(window).scroll(function () {
        var sct = $(window).scrollTop();
        console.log(sct);
        //만약에 sct의 값이 45보다 크거나 같다면, .s_logo에 .fixed_l추가
        if (sct >= 45) {
            $(".e_logo").addClass("fixed_l");
            $(".e_nav_wrap").css("border-top", "1px solid #959595");
        } else {
            $(".e_logo").removeClass("fixed_l");
            $(".e_nav_wrap").css("border-top", "none");
        }
        if (sct >= 97) {
            $(".e_nav_wrap").addClass("fixed_g");
            $("body").addClass("fixed_b");
        } else {
            $(".e_nav_wrap").removeClass("fixed_g");
            $("body").removeClass("fixed_b");
        }
        if (sct >= 1000) {
            $(".e_top_btn").stop().fadeIn(300);
        } else {
            $(".e_top_btn").stop().fadeOut(300);
        }
    }); //Header 이벤트 종료

    //E : Gnb
    var gnbLi = $("#e_gnb>li");
    var gnbUl = $("#e_gnb>li>ul");

    gnbUl.slideUp();

    gnbLi.on("mouseover focusin", function () {
        $(this).children("ul").stop().slideDown(300);
        $(this).addClass("on");
    });

    gnbLi.on("mouseout focusout", function () {
        $(this).children("ul").stop().slideUp(300);
        $(this).removeClass("on");
    });

    //E : TOP버튼 클릭 시 맨 위로 이동
    $(".e_top_btn").click(function () {
        $("html,body").stop().animate({
            "scrollTop": "0px"
        }, 1000);
        return false;
    });

    //E : TOP버튼 클릭 시 맨 위로 이동
    $(".e_top_btn").click(function () {
        $("html,body").stop().animate({
            "scrollTop": "0px"
        }, 1000);
        return false;
    });

    //E : Visual
    $(".bxslider").bxSlider();
});
