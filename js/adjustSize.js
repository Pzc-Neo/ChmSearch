//根据浏览器的宽度来改变左侧面板和右侧面板的宽度，以达到合适的排版
function setDivSize() {
    //获取网页可见区域宽度
    blowser_width = document.body.clientWidth;

    // 如果网页宽度小于1500px，而且搜索模式等于“双搜”或者“三搜”的话，就隐藏语录
    // if ($("#btn_text").text() == "双搜" || $("#btn_text").text() == "三搜") {
    //     // 隐藏语录,因为显示的位置不够，所以要隐藏
    //     if (blowser_width < 1500) {
    //         $("#top_div").hide();
    //     }
    // }

    if (blowser_width >= 650 && blowser_width < 900) {
        document.getElementById("leftPanel").style.width = "20%";
        document.getElementById("rightPanel").style.width = "80%";
        // document.getElementById("motto").setAttribute("hidden", true);

    } else if (blowser_width >= 900 && blowser_width < 1300) {
        document.getElementById("leftPanel").style.width = "15%";
        document.getElementById("rightPanel").style.width = "85%";
        // document.getElementById("motto").removeAttribute("hidden");
        // document.getElementById("motto").setAttribute("hidden", true);
    } else if (blowser_width >= 1300 && blowser_width < 1700) {
        document.getElementById("leftPanel").style.width = "12%";
        document.getElementById("rightPanel").style.width = "88%";
        // document.getElementById("motto").removeAttribute("hidden");
    } else if (blowser_width >= 1700 && blowser_width < 1930) {
        document.getElementById("leftPanel").style.width = "8.5%";
        document.getElementById("rightPanel").style.width = "91.5%";
        // document.getElementById("motto").removeAttribute("hidden");
        // 显示语录
        $("#top_div").show();
    } else {
        document.getElementById("leftPanel").style.width = "23%";
        document.getElementById("rightPanel").style.width = "77%";
        // document.getElementById("motto").setAttribute("hidden", true);
    }
    //如果左面板是隐藏的话，那么就把右面板的宽度设置为100%
    if ($("#leftPanel").is(":hidden")) {
        document.getElementById("rightPanel").style.width = "100%";
    }

    //设置语录的宽度为网页区域宽度的40%
    document.getElementById("top_div").style.width = document.body.clientWidth * 0.40 + "px";
};
// }

//在网页加载完毕的时候执行
$(document).ready(function () {
    //设置换引擎按钮的可见性
    $("#select_iframe_engine_1").hide()
    $("#select_iframe_engine_2").hide()
    $("#select_iframe_engine_3").hide()

    //设置双搜、三搜面板的可见性
    $("#one_engine_panel").show()
    $("#two_engine_panel").hide()
    $("#three_engine_panel").hide()

    setDivSize();

    //设置语录的宽度为网页区域宽度的40%
    document.getElementById("top_div").style.width = document.body.clientWidth * 0.4 + "px";
    //在网页加载2秒后，为搜索框设置焦点
    setTimeout(function () {
        document.getElementById("keyword").focus();
    }, 2000);
});