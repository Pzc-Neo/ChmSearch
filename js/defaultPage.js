//根据浏览器的宽度来改变左侧面板和右侧面板的宽度，以达到合适的排版
function setDivSize() {
    //获取网页可见区域宽度
    blowser_width = document.body.clientWidth
    if (blowser_width >= 0 && blowser_width < 1300) {
        document.getElementById("body_style").style.paddingRight = "7%";
        document.getElementsByClassName("disc_text ").style

    } else {
        document.getElementById("body_style").style.paddingRight = "20%";
    }
}

//在网页加载完毕的时候执行
$(document).ready(function () {
    setDivSize();

    $("#keyword").focus();
;
})