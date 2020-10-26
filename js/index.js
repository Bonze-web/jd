$(function () {
    index_real()
})

function index_real() {
    setFontSize();
    // getScreenRate();
    // window.onresize = function () {
    //     setFontSize();
    //     // getScreenRate()
    // };
    window.count = ["img/0.png", "img/1.png", "img/2.png", "img/3.png", "img/4.png", "img/5.png", "img/6.png", "img/7.png", "img/8.png", "img/9.png"];
    RegisterFun();
    loading();
}

function setFontSize() {
    var html = document.documentElement;
    var hWidth = html.getBoundingClientRect().width;
    html.style.fontSize = hWidth / 25 + "px";
}

function getScreenRate() {
    var document_height = parseInt(document.body.clientHeight);
    var document_width = parseInt(document.body.clientWidth);
    var rate = document_height / document_width;
    // var game_main = $(".game_main");
    // var firstPage_bottom = $("#firstPage").find(".bottom");
    if (rate < 1.6) {
        // firstPage_bottom.css("bottom",-(1.5*rate)+"rem");
        // game_main.css({"transform":"scale("+0.56*rate+")","top":"7.5rem"});
        // $(".game1_mask").css("top","1rem");
    } else if (rate > 1.8133) { // 375*680
        // firstPage_bottom.css("bottom",(1.5*rate)+"rem");
        // game_main.css("top",(6*rate)+"rem");
        // $(".game1_mask").css("top","1.5rem");
    }
}


function loading() {
    var topArr = ["-4rem", "20.1rem", "5rem", "10rem", "13rem", "-8rem", "-18rem", "-25rem"];
    var duration_timeArr = ["5s", "6s", "6.5s"];
    var delay_timeArr = ["2s", "4s", "0s"];
    parseInt(Math.random() * 5 + 1);

    $(".Cherry1").addClass("flowerAni")
        .css({
            "top": topArr[parseInt(Math.random() * 7)],
            "animation-duration": duration_timeArr[parseInt(Math.random() * 3)],
            "animation-delay": delay_timeArr[parseInt(Math.random() * 3)]
        });
    $(".Cherry2").addClass("flowerAni")
        .css({
            "top": topArr[parseInt(Math.random() * 7)],
            "animation-duration": duration_timeArr[parseInt(Math.random() * 3)],
            "animation-delay": delay_timeArr[parseInt(Math.random() * 3)]
        });
    $(".Cherry3").addClass("flowerAni")
        .css({
            "top": topArr[parseInt(Math.random() * 7)],
            "animation-duration": duration_timeArr[parseInt(Math.random() * 3)],
            "animation-delay": delay_timeArr[parseInt(Math.random() * 3)]
        });
    $(".Cherry4").addClass("flowerAni")
        .css({
            "top": topArr[parseInt(Math.random() * 7)],
            "animation-duration": duration_timeArr[parseInt(Math.random() * 3)],
            "animation-delay": delay_timeArr[parseInt(Math.random() * 3)]
        });
    $(".Cherry5").addClass("flowerAni")
        .css({
            "top": topArr[parseInt(Math.random() * 7)],
            "animation-duration": duration_timeArr[parseInt(Math.random() * 3)],
            "animation-delay": delay_timeArr[parseInt(Math.random() * 3)]
        });
    $(".Cherry6").addClass("flowerAni")
        .css({
            "top": topArr[parseInt(Math.random() * 7)],
            "animation-duration": duration_timeArr[parseInt(Math.random() * 3)],
            "animation-delay": delay_timeArr[parseInt(Math.random() * 3)]
        });
    $(".Cherry7").addClass("flowerAni")
        .css({
            "top": topArr[parseInt(Math.random() * 7)],
            "animation-duration": duration_timeArr[parseInt(Math.random() * 3)],
            "animation-delay": delay_timeArr[parseInt(Math.random() * 3)]
        });
    $(".Cherry8").addClass("flowerAni")
        .css({
            "top": topArr[parseInt(Math.random() * 7)],
            "animation-duration": duration_timeArr[parseInt(Math.random() * 3)],
            "animation-delay": delay_timeArr[parseInt(Math.random() * 3)]
        });
    $(".Cherry9").addClass("flowerAni")
        .css({
            "top": topArr[parseInt(Math.random() * 7)],
            "animation-duration": duration_timeArr[parseInt(Math.random() * 3)],
            "animation-delay": delay_timeArr[parseInt(Math.random() * 3)]
        });
    $(".Cherry10").addClass("flowerAni")
        .css({
            "top": topArr[parseInt(Math.random() * 7)],
            "animation-duration": duration_timeArr[parseInt(Math.random() * 3)],
            "animation-delay": delay_timeArr[parseInt(Math.random() * 3)]
        });

    // 图片预加载
    var main_src = ["img//1fushishan.png", "img/2xinxingpai2.png", "img/3chengbao.png", "img/8niaobushi3.png", "img/9daniaobu.png",
        "img/9dawanggongchang.png", "img/10niaobushi1.png", "img/11niaobushi2.png", "img/12tieta1.png", "img/13wheel.png",
        "img/15qinacaosi.png", "img/20xinxingpai2.png", "img/23changjing1.png", "img/23qiu_20.png", "img/23smoke.png",
        "img/24cloud.png", "img/24damen1.png", "img/25xinxingpai1.png", "img/26fangzi1.png", "img/27yinghuadao.png", "img/bg.jpg",
        "img/feiji1.png", "img/feiji2.png", "img/wind1/P1.png", "img/wind1/P2.png", "img/wind1/P3.png", "img/wind1/P4.png",
        "img/wind1/P5.png", "img/wind1/P6.png", "img/wind2/P1.png", "img/wind2/P2.png", "img/wind2/P3.png", "img/wind2/P4.png",
        "img/wind2/P5.png", "img/wind2/P6.png"
    ];
    var alert_src = ["img/caidai.png", "img/jiangpin1.png", "img/jiangpin2.png", "img/jiangpin3.png", "img/jiangpinbg.png",
        "img/dipan.png", "img/jieshu.png", "img/fenxiang.png", "img/chanpinbg.png", "img/guize.png", "img/guizebg.png"
    ];
    var saizi_src = ["img/dianshu/1.png", "img/dianshu/2.png", "img/dianshu/3.png", "img/dianshu/4.png", "img/dianshu/5.png", "img/dianshu/6.png",
        "img/bg.png", "img/backLeft/1.png", "img/backLeft/2.png", "img/backLeft/3.png", "img/backLeft/4.png",
        "img/backLeft/5.png", "img/backLeft/6.png", "img/backLeft/7.png", "img/backLeft/8.png",
        "img/backLeft/9.png", "img/backLeft/10.png", "img/backLeft/11.png", "img/backLeft/12.png",
        "img/backRight/1.png", "img/backRight/2.png", "img/backRight/3.png", "img/backRight/4.png", "img/backRight/5.png", "img/backRight/6.png",
        "img/backRight/7.png", "img/backRight/8.png", "img/backRight/9.png", "img/backRight/10.png", "img/backRight/11.png", "img/backRight/12.png",
        "img/faceLeft/1.png", "img/faceLeft/2.png", "img/faceLeft/3.png", "img/faceLeft/4.png", "img/faceLeft/5.png", "img/faceLeft/6.png",
        "img/faceLeft/7.png", "img/faceLeft/8.png", "img/faceLeft/9.png", "img/faceLeft/10.png", "img/faceLeft/11.png", "img/faceLeft/12.png",
        "img/faceRight/1.png", "img/faceRight/2.png", "img/faceRight/3.png", "img/faceRight/4.png", "img/faceRight/5.png", "img/faceRight/6.png",
        "img/faceRight/7.png", "img/faceRight/8.png", "img/faceRight/9.png", "img/faceRight/10.png", "img/faceRight/11.png", "img/faceRight/12.png",
        "img/S2.png", "img/S3.png", "img/S4.png", "img/S5.png",
        "img/S6.png", "img/S7.png", "img/S8.png", "img/S2.png", "img/S3.png", "img/S4.png", "img/S5.png",
        "img/S6.png", "img/S7.png", "img/S8.png", "img/S22.png", "img/S33.png", "img/S44.png", "img/S55.png", "img/S66.png", "img/S77.png", "img/S88.png", "img/S22.png", "img/S33.png", "img/S44.png", "img/S55.png",
        "img/S66.png", "img/S77.png", "img/S88.png"
    ];
    var backImg_src = main_src.concat(saizi_src, alert_src);

    var goNext = false;

    function preloadImg(arr, callback) {
        var count = 0,
            images = {},
            len = arr.length,
            imgNum = 0;
        console.log("length:" + len);
        for (src in arr) {
            images[src] = new Image();
            images[src].onload = function () {
                imgNum++;
                if (imgNum === len) {
                    callback(images);
                }
            };
            images[src].src = arr[src];
        }
    }

    var timer = setTimeout(function () {
        clearTimeout(timer);
        if (goNext) {
            clearTimeout(time_has);
            $("#load").animate({
                "bottom": "-10rem",
                "opacity": "0"
            }, 250, "linear");
            $("#first").animate({
                "bottom": "0rem",
                "opacity": "1"
            }, 500, "linear");
            game();
        }
    }, 2000);
    var time_has = setTimeout(function () {
        clearTimeout(time_has);
        // console.log("会进入time_has吗"+time_has);
        $("#load").animate({
            "bottom": "-10rem",
            "opacity": "0"
        }, 250, "linear");
        $("#first").animate({
            "bottom": "0rem",
            "opacity": "1"
        }, 500, "linear");
        game();
    }, 4500);
    preloadImg(backImg_src, function (images) {
        goNext = true;
        console.log("加载完成~");
    });
}

function game() {
    var planeArr = ["img/feiji1.png", "img/feiji2.png"];
    var wind1Arr = ["img/wind1/P1.png", "img/wind1/P2.png", "img/wind1/P3.png", "img/wind1/P4.png", "img/wind1/P5.png", "img/wind1/P6.png"];
    var wind2Arr = ["img/wind2/P1.png", "img/wind2/P2.png", "img/wind2/P3.png", "img/wind2/P4.png", "img/wind2/P5.png", "img/wind2/P6.png"];
    var plane = 0;
    var wind = 0;

    var ballNum = 0;
    var smokeNum = 0;
    window.ballGame = setInterval(function (arr) {
        if (ballNum >= 30) {
            ballNum = 0;
        }
        if (smokeNum >= 36) {
            smokeNum = 0;
        }
        $("#qiu_20").css('background-position', ((ballNum % 6)) / 5 * 100 + "%" + ((Math.floor(ballNum / 6))) / 4 * 100 + "%");

        $("#wheelBig").css('background-position', ((ballNum % 5)) / 4 * 100 + "%" + ((Math.floor(ballNum / 5))) / 5 * 100 + "%");

        $("#smoke").css('background-position', ((smokeNum % 6)) / 5 * 100 + "%" + ((Math.floor(smokeNum / 6))) / 5 * 100 + "%");

        ballNum++;
        smokeNum++;

        if (plane >= 2) {
            plane = 0;
        }
        if (wind >= 6) {
            wind = 0;
        }
        $("#plane_circle").find("img").attr("src", planeArr[plane]);
        $("#fengche2_arm").find("img").attr("src", wind2Arr[wind]);
        $("#fengche2_wind").find("img").attr("src", wind2Arr[wind]);
        $("#fengche1_arm").find("img").attr("src", wind1Arr[wind]);

        plane++;
        wind++;
    }, 150);
}

function RegisterFun() {
    draggable_need();
    $("#gg_back").on("touchstart", function () {
        $("#myBox").css("display", "none");
        $("#giftWrap").find("div").find("img").css("display", "none");
    });
    $(".myGift_btn").on("touchstart", function () {
        $("#myBox").css("display", "block");
        $.ajax({
            type: "get",
            url: "http://case.h5tu.com/h5/DaWang/server/app/client/userinfo/UserAwardInfo.php",
            dataType: "json",
            data: {
                "utoken": window.utoken
            },
            success: function (res) {
                if (String(res.code) === "10000") {
                    var arr = res.award_info;
                    if (arr.length > 0) {
                        $(".gg_f").css("display", "none");
                        for (var i = 0; i <= arr.length; i++) {
                            if (String(arr[i].award_name) === "40元优惠券") {
                                $("#quan40").css("display", "block");
                            } else if (String(arr[i].award_name) === "110元优惠券") {
                                $("#quan110").css("display", "block");
                            } else if (String(arr[i].award_name) === "120元优惠券") {
                                $("#quan120").css("display", "block");
                            } else if (String(arr[i].award_name) === "150元优惠券") {
                                $("#quan150").css("display", "block");
                            } else if (String(arr[i].award_name) === "纸巾礼包") {
                                $("#libao").css("display", "block");
                            } else if (String(arr[i].award_name) === "iPad") {
                                $("#ipad").css("display", "block");
                            } else if (String(arr[i].award_name) === "日本全家游") {
                                $("#dajiang").css("display", "block");
                            }
                        }
                        new iScroll('giftWrap', {
                            scrollbars: false
                        });
                    } else {
                        $(".gg_f").css("display", "block");
                    }

                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {}
        });


    });
    //小老虎的路线
    var game = $("#game");
    var mapBox = game.find("#parent").find("#mapBox");
    var gamePerson = mapBox.find("#gamePerson");


    mapBox.css({
        left: "46.9333rem",
        top: "10.7667rem"
    });
    mapBox.draggable({
        containment: "parent"
    });

    var alertPage = $("#alertPage");
    $("#begin_btn").on("touchstart", function () {
        $("#loading").css("display", "none");
        $("#game").css("display", "block");
        alertPage.css("display", "block");
        alertPage.find("#rulePage").css("display", "block");
        new iScroll('ruleWrap', {
            scrollbars: false
        });
    });
    $("#ruleBtn").on("touchstart", function () {
        alertPage.css("display", "block");
        alertPage.find("#rulePage").css("display", "block");
    });
    // 人物的移动序列帧
    var backLeftArr = ["img/backLeft/1.png", "img/backLeft/2.png", "img/backLeft/3.png", "img/backLeft/4.png", "img/backLeft/5.png", "img/backLeft/6.png",
        "img/backLeft/7.png", "img/backLeft/8.png", "img/backLeft/9.png", "img/backLeft/10.png", "img/backLeft/11.png", "img/backLeft/12.png"
    ];
    var backRightArr = ["img/backRight/1.png", "img/backRight/2.png", "img/backRight/3.png", "img/backRight/4.png", "img/backRight/5.png", "img/backRight/6.png",
        "img/backRight/7.png", "img/backRight/8.png", "img/backRight/9.png", "img/backRight/10.png", "img/backRight/11.png", "img/backRight/12.png"
    ];
    var faceLeftArr = ["img/faceLeft/1.png", "img/faceLeft/2.png", "img/faceLeft/3.png", "img/faceLeft/4.png", "img/faceLeft/5.png", "img/faceLeft/6.png",
        "img/faceLeft/7.png", "img/faceLeft/8.png", "img/faceLeft/9.png", "img/faceLeft/10.png", "img/faceLeft/11.png", "img/faceLeft/12.png"
    ];
    var faceRightArr = ["img/faceRight/1.png", "img/faceRight/2.png", "img/faceRight/3.png", "img/faceRight/4.png", "img/faceRight/5.png", "img/faceRight/6.png",
        "img/faceRight/7.png", "img/faceRight/8.png", "img/faceRight/9.png", "img/faceRight/10.png", "img/faceRight/11.png", "img/faceRight/12.png"
    ];

    var oncePlay = true;
    window.productOnOff = false;
    $(".close").on("touchstart", function () {
        alertPage.css("display", "none");
        alertPage.find(".alertBox").css("display", "none");
        $("#award_btn").find("img").css("display", "none");
        $("#award_caidai").css("display", "none");
        if (oncePlay) {
            oncePlay = false;
            window.canDice = false;
            setTimeout(function () {
                gamePerson.animate({
                    left: "38.2333rem",
                    top: "28.1667rem"
                }, 1550, "linear", function () {
                    clearInterval(window.personTime);
                    window.canDice = true;
                });
                personAni(backLeftArr);
            }, 600);
        }
        if (window.productOnOff) {
            window.productOnOff = false;
        }
        if (window.seeEnd) {
            alertPage.css("display", "block");
            $("#endPage").css("display", "block");
        }
    });


    window.canDice = true;
    var time = 0;


    $("#diceBox").on("touchstart", function () {
        if (window.canDice) {
            window.canDice = false;
            time++;
            if (time === 1) { //第一次跳（抽奖）
                personMove("46.9333rem", "10.7667rem", 2, 1, backLeftArr, faceLeftArr);

            } else if (time === 2) { //第二次跳(产品)
                personMove2("74.4rem", "15.233rem", 1, 1, faceLeftArr, backLeftArr, 27, 27, "14.433rem", "27.167rem", 800, "10.967rem", "25.067rem", 800, product);

            } else if (time === 3) { //第三次跳（抽奖）
                personMove2("74.4rem", "15.233rem", 3, 2, backLeftArr, backRightArr, 27, 24, "3.433rem", "20.733rem", 1600, "15.267rem", "13.8rem", 2400, drawFun);
            } else if (time === 4) { //第四次跳(产品)
                personMove3("62.667rem", "20.767rem", 1, 2, backRightArr, 24, "27.133rem", "6.733rem", 2400, product);
            } else if (time === 5) { //第五次跳（抽奖）
                personMove4("47.2rem", "20.767rem", 1, 1, backRightArr, faceRightArr, drawFun);
            } else if (time === 6) { //第6次跳(产品)
                personMove2("36.6rem", "20.767rem", 3, 1, faceRightArr, faceLeftArr, 12, 12, "53.267rem", "7.333rem", 2400, "49.7rem", "9.633rem", 800, product);
            } else if (time === 7) { //第7次跳（抽奖）
                personMove2("36.6rem", "20.767rem", 1, 1, faceLeftArr, faceRightArr, 12, 12, "47.133rem", "11.667rem", 800, "50.2rem", "13.6rem", 800, drawFun);
            } else if (time === 8) { //第8次跳（抽奖）
                personMove8("26.2rem", "13.367rem", 4, 1, faceRightArr, faceLeftArr, 11, 13, "67.533rem", "23.467rem", 3200, "65.533rem", "24.6rem", 500, "63.733rem", "25.9rem", 400, drawFun);
            } else if (time === 9) { //第9次跳(产品)
                personMove5("19.2rem", "3.367rem", 1, 1, faceLeftArr, faceRightArr, 13, "56.2rem", "30.5rem", 1600, product);
            } else if (time === 10) { //第10次跳(产品)
                personMove5("19.2rem", "0", 1, 1, faceRightArr, faceRightArr, 13, "65rem", "35.5rem", 1600, product);
            } else if (time === 11) { //第11次跳（抽大奖）
                personMove3("10.333rem", "9rem", 3, 1, backRightArr, 14, "80.233rem", "26.3rem", 3200, showCircle);
            }

        }
    });

    window.seeEnd = false;

    $("#award_btn_nn").on("touchend", function () {
        $(this).css("display", "none");
        $("#award").css("display", "none");
        if (window.seeEnd) {
            $("#endPage").css("display", "block");
        } else {
            $("#alertPage").css("display", "none");
        }

    });
    $("#award_btn_vv").on("touchend", function () {
        $(this).css("display", "none");
        $("#award").css("display", "none");
        if (window.seeEnd) {
            $("#endPage").css("display", "block");
        } else {
            $("#alertPage").css("display", "none");
        }
    });
    $("#award_btn_ss").on("touchend", function () {
        $(this).css("display", "none");
        $("#award").css("display", "none");
        $("#award_caidai").css("display", "none");
        $("#writeMessage").css("display", "block");
    });

    $("#draw_btn").on("touchend", function () {
        bigDraw();
        window.seeEnd = true;
    });
    $("#draw_needle").on("animationend", function () {
        $("#drawCircle").css("display", "none");
        $("#award").css("display", "block");

        $(this).removeClass("noAwardAni");
        $(this).removeClass("awardIpadAni");
        $(this).removeClass("awardPaperAni");
        $(this).removeClass("quan150Ani");
        $(this).removeClass("quan120Ani");
        $(this).removeClass("quan110Ani");
        $(this).removeClass("quan40Ani");
    });

    $("#submit_btn").on("touchend", function () {
        var name = $("#username").val();
        var phone = $("#phonenumber").val();
        if (name && phone) {
            $.ajax({
                type: "post",
                url: "http://case.h5tu.com/h5/DaWang/server/app/client/bonus/InUserInfo.php",
                dataType: "json",
                data: {
                    "utoken": window.utoken,
                    "award_hash": window.award_hash,
                    "name": name,
                    "phone": phone,
                    "address": "xx"
                },
                success: function (res) {
                    if (String(res.code) === "10000") {
                        alert("提交成功");
                        $("#writeMessage").css("display", "none");
                        if (time < 9) {
                            $("#alertPage").css("display", "none");
                        } else {
                            $("#endPage").css("display", "block");
                        }
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {}
            });

        } else {
            alert("请填写信息~");
        }
    });

    $("#share_mask").on("touchend", function () {
        if (window.shareSu) {
            time = 0;
            window.seeEnd = false;
            mapBox.css({
                left: "46.9333rem",
                top: "10.7667rem"
            });
            gamePerson.css({
                left: "38.2333rem",
                top: "28.1667rem"
            });
            gamePerson.find("img").attr("src", "img/backLeft/1.png");
            $(this).css("display", "none");
            $("#alertPage").css("display", "none");
            $("#endPage").css("display", "none");
            // console.log("分享成功之后关闭蒙版");
        } else {
            $(this).css("display", "none");
            $("#alertPage").css("display", "block");
            $("#endPage").css("display", "block");
        }
    });

    $("#play_again").on("touchend", function () {
        $.ajax({
            type: "get",
            url: "http://case.h5tu.com/h5/DaWang/server/app/client/userinfo/UserInfoToken.php",
            dataType: "json",
            data: {
                "utoken": window.utoken
            },
            success: function (res) {
                if (String(res.code) === "10000") {
                    $("#alertPage").css("display", "none");
                    $("#endPage").css("display", "none");
                    if (String(res.share_display) === "1") { //展示分享提示
                        $("#share_mask").css("display", "block");
                        window.shareSu = false;
                    } else {
                        time = 0;
                        window.seeEnd = false;
                        mapBox.css({
                            left: "46.9333rem",
                            top: "10.7667rem"
                        });
                        gamePerson.css({
                            left: "38.2333rem",
                            top: "28.1667rem"
                        });
                        gamePerson.find("img").attr("src", "img/backLeft/1.png");
                    }
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {}
        });
    });

    $("#quan40").on("touchend", function () {
        window.location.replace("http://coupon.m.jd.com/coupons/show.action?key=f7a39d671ba94f908e3ce9a8e2f868f2&roleId=17850731&to=https://pro.m.jd.com/mall/active/ny6LrczkF9BGyigYdTPTfM6Kc10w/index.html");
    });
    $("#quan110").on("touchend", function () {
        window.location.replace("http://coupon.m.jd.com/coupons/show.action?key=5f35b651a2f24dadae8a6d68250b03d9&roleId=17850770&to=https://pro.m.jd.com/mall/active/ny6LrczkF9BGyigYdTPTfM6Kc10w/index.html");
    });
    $("#quan120").on("touchend", function () {
        window.location.replace("http://coupon.m.jd.com/coupons/show.action?key=5b53a7901cb24095a4ca6ddfd917a955&roleId=17850813&to=https://pro.m.jd.com/mall/active/ny6LrczkF9BGyigYdTPTfM6Kc10w/index.html");
    });
    $("#quan150").on("touchend", function () {
        window.location.replace("http://coupon.m.jd.com/coupons/show.action?key=4ccd33db91544279a28beee4fda563cc&roleId=17850841&to=https://pro.m.jd.com/mall/active/ny6LrczkF9BGyigYdTPTfM6Kc10w/index.html");
    });
    $("#alertPage").not("#product").on("touchend", function () {
        if (window.productOnOff) {
            window.productOnOff = false;
            alertPage.css("display", "none");
            alertPage.find("#product").css("display", "none");
        }
    });
}

function personMove8(mapL, mapT, dice1_num, dice2_num, arr1, arr2, index1, index2, p1L, p1T, time1, p2L, p2T, time2, p3L, p3T, time3, fn1) {
    var dice1 = $("#dice1");
    var dice2 = $("#dice2");

    var game = $("#game");
    var mapBox = game.find("#parent").find("#mapBox");
    var gamePerson = mapBox.find("#gamePerson");

    diceAni(dice1, dice2, dice1_num, dice2_num);
    var tempT = setTimeout(function () {
        mapBox.animate({
            left: mapL,
            top: mapT
        }, 900);
        clearTimeout(tempT);
        personAni(arr1);
        gamePerson.css("z-index", index1);
        gamePerson.animate({
            left: p1L,
            top: p1T
        }, time1, "linear", function () {
            clearInterval(window.personTime);
            personAni(arr2);
            gamePerson.animate({
                left: p2L,
                top: p2T
            }, time2, "linear", function () {
                gamePerson.css("z-index", index2);
                gamePerson.animate({
                    left: p3L,
                    top: p3T
                }, time3, "linear", function () {
                    clearInterval(window.personTime);
                    window.canDice = true;
                    fn1();
                });
            });
        });
    }, 900);
}

function showCircle() {
    $.ajax({
        type: "get",
        url: "http://case.h5tu.com/h5/DaWang/server/app/client/userinfo/UserInfoToken.php",
        dataType: "json",
        data: {
            "utoken": window.utoken
        },
        success: function (res) {
            if (String(res.code) === "10000") {
                if (String(res.dial_display) === "1") { //展示转盘
                    alertPage("drawCircle");
                } else {
                    alertPage("endPage");
                }
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {}
    });
}

function product() {
    var productArr = ["img/chanpin1.png", "img/chanpin2.png", "img/chanpin3.png", "img/chanpin4.png", "img/chanpin5.png"];
    var product_num = $("#product_num");
    product_num.attr("src", productArr[parseInt(Math.random() * 5)]);
    alertPage("product");
    window.productOnOff = true;
}

function personMove(mapL, mapT, dice1_num, dice2_num, arr1, arr2) {
    var dice1 = $("#dice1");
    var dice2 = $("#dice2");

    var game = $("#game");
    var mapBox = game.find("#parent").find("#mapBox");
    var gamePerson = mapBox.find("#gamePerson");
    diceAni(dice1, dice2, dice1_num, dice2_num);
    var tempT = setTimeout(function () {
        clearTimeout(tempT);
        // mapBox.animate({left:mapL,top:mapT},800);
        personAni(arr1);
        gamePerson.css("z-index", "13");
        mapBox.animate({
            left: "60rem",
            top: "13.3rem"
        }, 900);
        gamePerson.animate({
            left: "32.633rem",
            top: "24.5rem"
        }, 1100, "linear", function () {
            clearInterval(window.personTime);
            gamePerson.css("z-index", "-1");
            gamePerson.find("img").attr("src", arr2[0]);
            setTimeout(function () {
                gamePerson.css({
                    left: "21.567rem",
                    top: "23.767rem",
                    "z-index": "26"
                });
                gamePerson.animate({
                    left: "18.4rem",
                    top: "24.5rem"
                }, 550, "linear", function () {
                    window.canDice = true;
                    drawFun();
                });
            }, 800);
        });
    }, 900);
}

function personMove2(mapL, mapT, dice1_num, dice2_num, arr1, arr2, index1, index2, p1L, p1T, time1, p2L, p2T, time2, fn1) {
    var dice1 = $("#dice1");
    var dice2 = $("#dice2");

    var game = $("#game");
    var mapBox = game.find("#parent").find("#mapBox");
    var gamePerson = mapBox.find("#gamePerson");

    diceAni(dice1, dice2, dice1_num, dice2_num);
    var tempT = setTimeout(function () {
        mapBox.animate({
            left: mapL,
            top: mapT
        }, 900);
        clearTimeout(tempT);
        personAni(arr1);
        gamePerson.css("z-index", index1);
        gamePerson.animate({
            left: p1L,
            top: p1T
        }, time1, "linear", function () {
            clearInterval(window.personTime);
            gamePerson.css("z-index", index2);
            personAni(arr2);
            gamePerson.animate({
                left: p2L,
                top: p2T
            }, time2, "linear", function () {
                clearInterval(window.personTime);
                window.canDice = true;
                fn1();
            });
        });
    }, 900);
}

function personMove3(mapL, mapT, dice1_num, dice2_num, arr1, index1, p1L, p1T, time1, fn) {
    var dice1 = $("#dice1");
    var dice2 = $("#dice2");

    var game = $("#game");
    var mapBox = game.find("#parent").find("#mapBox");
    var gamePerson = mapBox.find("#gamePerson");
    diceAni(dice1, dice2, dice1_num, dice2_num);
    var tempT = setTimeout(function () {
        mapBox.animate({
            left: mapL,
            top: mapT
        }, 900);
        clearTimeout(tempT);
        personAni(arr1);
        gamePerson.css("z-index", index1);
        gamePerson.animate({
            left: p1L,
            top: p1T
        }, time1, "linear", function () {
            clearInterval(window.personTime);
            window.canDice = true;
            fn();
        });
    }, 900);
}

function personMove4(mapL, mapT, dice1_num, dice2_num, arr1, arr2, fn) {
    var dice1 = $("#dice1");
    var dice2 = $("#dice2");

    var game = $("#game");
    var mapBox = game.find("#parent").find("#mapBox");
    var gamePerson = mapBox.find("#gamePerson");
    diceAni(dice1, dice2, dice1_num, dice2_num);
    var tempT = setTimeout(function () {
        clearTimeout(tempT);
        mapBox.animate({
            left: mapL,
            top: mapT
        }, 900);
        personAni(arr1);
        gamePerson.css("z-index", "13");
        gamePerson.animate({
            left: "28.966rem",
            top: "5.8rem"
        }, 550, "linear", function () {
            clearInterval(window.personTime);
            gamePerson.css("z-index", "-1");
            gamePerson.find("img").attr("src", arr2[0]);
            setTimeout(function () {
                gamePerson.css({
                    left: "41.367rem",
                    top: "0",
                    "z-index": "0"
                });
                window.canDice = true;
                fn();
            }, 1000);
        });
    }, 900);
}


function personMove5(mapL, mapT, dice1_num, dice2_num, arr1, arr2, index1, p1L, p1T, time1, fn) {
    var dice1 = $("#dice1");
    var dice2 = $("#dice2");

    var game = $("#game");
    var mapBox = game.find("#parent").find("#mapBox");
    var gamePerson = mapBox.find("#gamePerson");
    diceAni(dice1, dice2, dice1_num, dice2_num);
    var tempT = setTimeout(function () {
        mapBox.animate({
            left: mapL,
            top: mapT
        }, 900);
        clearTimeout(tempT);
        personAni(arr1);
        gamePerson.css("z-index", index1);
        gamePerson.animate({
            left: p1L,
            top: p1T
        }, time1, "linear", function () {
            clearInterval(window.personTime);
            gamePerson.find("img").attr("src", arr2[0]);
            window.canDice = true;
            fn();
        });
    }, 900);
}

function diceAni(obj1, obj2, a, b) {
    var diceArr1 = ["img/S2.png", "img/S3.png", "img/S4.png", "img/S5.png",
        "img/S6.png", "img/S7.png", "img/S8.png", "img/S2.png", "img/S3.png", "img/S4.png", "img/S5.png",
        "img/S6.png", "img/S7.png", "img/S8.png"
    ];
    var diceArr2 = ["img/S22.png", "img/S33.png", "img/S44.png", "img/S55.png",
        "img/S66.png", "img/S77.png", "img/S88.png", "img/S22.png", "img/S33.png", "img/S44.png", "img/S55.png",
        "img/S66.png", "img/S77.png", "img/S88.png"
    ];
    var diceArr = ["img/dianshu/1.png", "img/dianshu/2.png", "img/dianshu/3.png", "img/dianshu/4.png", "img/dianshu/5.png", "img/dianshu/6.png"];
    var diceNumObj = $("#diceNum");
    var mapBox = $("#mapBox");
    var diceNum = 0;
    var diceTime = setInterval(function () {
        // mapBox.draggable('enable');
        if (diceNum >= 14) {
            diceNum = -1;
            clearInterval(diceTime);
            // mapBox.draggable('disable');
            obj1.attr("src", diceArr[parseInt(a - 1)]);
            obj2.attr("src", diceArr[parseInt(b - 1)]);
            diceNumObj.find("img").attr("src", "img/dianshu/" + (parseInt(a) + parseInt(b)) + ".png");
            diceNumObj.css("display", "block");
            setTimeout(function () {
                diceNumObj.hide();
            }, 1500);
        }
        obj1.attr("src", diceArr1[diceNum]);
        obj2.attr("src", diceArr2[diceNum]);
        diceNum++;
    }, 50);
}

function personAni(arr) {
    var gamePerson = $("#gamePerson").find("img");
    var personNum = 0;
    window.personTime = setInterval(function () {
        // mapBox.draggable('enable');
        if (personNum >= 12) {
            personNum = 0;
        }
        gamePerson.attr("src", arr[personNum]);
        personNum++;
    }, 50);
}


function drawFun() {
    var Quan_awardArr = ["img/quan1.png", "img/quan2.png", "img/quan3.png", "img/quan4.png"];
    var true_awardArr = ["img/jiangpin1.png", "img/jiangpin2.png", "img/jiangpin3.png"];
    var award_num = $("#award_num");
    $.ajax({
        type: "post",
        url: "http://case.h5tu.com/h5/DaWang/server/app/client/bonus/GameBonus.php",
        dataType: "json",
        data: {
            "utoken": window.utoken
        },
        success: function (res) {
            if (String(res.code) === "10000") {
                if (String(res.bonus_info.award_type) === "0") { //未中奖
                    award_num.attr("src", "img/weizhongjiang.png");
                    $("#award_btn_nn").css("display", "block");
                } else if (String(res.bonus_info.award_type) === "1") { //实物奖
                    $("#award_caidai").css("display", "block");
                    window.award_hash = res.bonus_info.award_hash;
                    $("#award_btn_ss").css("display", "block");
                    if (String(res.bonus_info.award_name) === "纸巾礼包") {
                        award_num.attr("src", true_awardArr[0]);
                    } else if (String(res.bonus_info.award_name) === "iPad") {
                        award_num.attr("src", true_awardArr[1]);
                    } else {
                        award_num.attr("src", true_awardArr[2]);
                    }
                } else if (String(res.bonus_info.award_type) === "2") { //优惠券
                    $("#award_btn_vv").css("display", "block");
                    if (String(res.bonus_info.award_name) === "40元优惠券") {
                        award_num.attr("src", Quan_awardArr[0]);
                    } else if (String(res.bonus_info.award_name) === "110元优惠券") {
                        award_num.attr("src", Quan_awardArr[1]);
                    } else if (String(res.bonus_info.award_name) === "120元优惠券") {
                        award_num.attr("src", Quan_awardArr[2]);
                    } else if (String(res.bonus_info.award_name) === "150元优惠券") {
                        award_num.attr("src", Quan_awardArr[3]);
                    }
                }
                alertPage("award");
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {}
    });
}

function bigDraw() {
    var Quan_awardArr = ["img/quan1.png", "img/quan2.png", "img/quan3.png", "img/quan4.png"];
    var true_awardArr = ["img/jiangpin1.png", "img/jiangpin2.png", "img/jiangpin3.png"];
    var award_num = $("#award_num");
    $.ajax({
        type: "post",
        url: "http://case.h5tu.com/h5/DaWang/server/app/client/bonus/DialBonus.php",
        dataType: "json",
        data: {
            "utoken": window.utoken
        },
        success: function (res) {
            if (String(res.code) === "10000") {
                if (String(res.bonus_info.award_type) === "0") { //未中奖
                    $("#draw_needle").addClass("noAwardAni");
                    award_num.attr("src", "img/weizhongjiang.png");
                    $("#award_btn_nn").css("display", "block");
                } else if (String(res.bonus_info.award_type) === "1") { //实物奖

                    $("#award_caidai").css("display", "block");
                    window.award_hash = res.bonus_info.award_hash;
                    $("#award_btn_ss").css("display", "block");
                    if (String(res.bonus_info.award_name) === "纸巾礼包") {
                        award_num.attr("src", true_awardArr[0]);
                        $("#draw_needle").addClass("awardPaperAni");
                    } else if (String(res.bonus_info.award_name) === "iPad") {
                        award_num.attr("src", true_awardArr[1]);
                        $("#draw_needle").addClass("awardIpadAni");
                    } else {
                        award_num.attr("src", true_awardArr[2]);
                        $("#draw_needle").addClass("awardIpadAni");
                    }
                } else if (String(res.bonus_info.award_type) === "2") { //优惠券
                    $("#award_btn_vv").css("display", "block");
                    if (String(res.bonus_info.award_name) === "40元优惠券") {
                        award_num.attr("src", Quan_awardArr[0]);
                        $("#draw_needle").addClass("quan40Ani");
                    } else if (String(res.bonus_info.award_name) === "110元优惠券") {
                        award_num.attr("src", Quan_awardArr[1]);
                        $("#draw_needle").addClass("quan110Ani");
                    } else if (String(res.bonus_info.award_name) === "120元优惠券") {
                        award_num.attr("src", Quan_awardArr[2]);
                        $("#draw_needle").addClass("quan120Ani");
                    } else if (String(res.bonus_info.award_name) === "150元优惠券") {
                        award_num.attr("src", Quan_awardArr[3]);
                        $("#draw_needle").addClass("quan150Ani");
                    }
                }
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {}
    });

}

function alertPage(xx) {
    $("#alertPage").css("display", "block");
    $("#" + xx).css("display", "block");
}

function draggable_need() {
    /iPad|iPhone|Android/.test(navigator.userAgent) && (function ($) {
        var proto = $.ui.mouse.prototype,
            _mouseInit = proto._mouseInit;

        $.extend(proto, {
            _mouseInit: function () {
                this.element
                    .bind("touchstart." + this.widgetName, $.proxy(this, "_touchStart"));
                _mouseInit.apply(this, arguments);
            },

            _touchStart: function (event) {
                this.element
                    .bind("touchmove." + this.widgetName, $.proxy(this, "_touchMove"))
                    .bind("touchend." + this.widgetName, $.proxy(this, "_touchEnd"));

                this._modifyEvent(event);

                $(document).trigger($.Event("mouseup")); //reset mouseHandled flag in ui.mouse
                this._mouseDown(event);

                //return false;
            },

            _touchMove: function (event) {
                this._modifyEvent(event);
                this._mouseMove(event);
            },

            _touchEnd: function (event) {
                this.element
                    .unbind("touchmove." + this.widgetName)
                    .unbind("touchend." + this.widgetName);
                this._mouseUp(event);
            },

            _modifyEvent: function (event) {
                event.which = 1;
                var target = event.originalEvent.targetTouches[0];
                event.pageX = target.clientX;
                event.pageY = target.clientY;
            }

        });

    })(jQuery);
}