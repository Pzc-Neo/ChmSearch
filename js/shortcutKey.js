//用于“展开/折叠左侧面板”，判断左侧面板是否折叠
var isFold = 1;

//按键执行的操作
document.onkeydown = function (event) {

    var e = event || window.event || arguments.callee.caller.arguments[0];

    //搜索框设置焦点  ctrl+X
    if (e && e.keyCode == 88 && e.ctrlKey === true) {
        $("#keyword").focus();
    }

    // 搜索引擎快捷键 

    //打开/折叠“搜索引擎”面板 ctrl+alt+1
    if (e && e.keyCode == 49 && e.ctrlKey && e.altKey === true) {
        $("#collapseParent_searchEngine").click();
    }

    //打开/折叠“常用网站”面板 ctrl+alt+2
    if (e && e.keyCode == 50 && e.ctrlKey && e.altKey === true) {
        $("#collapseParent_commentUse").click();
    }


    //打开/折叠“资源搜索”面板 ctrl+alt+3
    if (e && e.keyCode == 51 && e.ctrlKey && e.altKey === true) {
        $("#collapseParent_resource").click();
    }

    //用百度搜索 ctrl+alt+y
    if (e && e.keyCode == 89 && e.ctrlKey === true && e.altKey === true) {
        $("#baidu")[0].click();
    }

    //用谷歌搜索 ctrl+alt+u
    if (e && e.keyCode == 85 && e.ctrlKey === true && e.altKey === true) {
        engine_id = "google";
        $("#google")[0].click();
    }

    //用必应搜索 ctrl+alt+i
    if (e && e.keyCode == 73 && e.ctrlKey === true && e.altKey === true) {
        engine_id = "bing";
        $("#" + engine_id)[0].click();
    }

    //用密迹搜索 ctrl+alt+o
    if (e && e.keyCode == 79 && e.ctrlKey === true && e.altKey === true) {
        engine_id = "mijisou";
        $("#" + engine_id)[0].click();
    }

    //用神马搜索 ctrl+alt+p
    if (e && e.keyCode == 80 && e.ctrlKey === true && e.altKey === true) {
        engine_id = "shenma";
        $("#" + engine_id)[0].click();
    }

    //用magi搜索 ctrl+alt+[
    if (e && e.keyCode == 219 && e.ctrlKey === true && e.altKey === true) {
        engine_id = "magi";
        $("#" + engine_id)[0].click();
    }

    //常用网站
    //哔哩哔哩 ctrl+alt+h
    if (e && e.keyCode == 72 && e.ctrlKey === true && e.altKey === true) {
        engine_id = "bilibili";
        $("#" + engine_id)[0].click();
    }

    //知乎搜索 ctrl+alt+j
    if (e && e.keyCode == 74 && e.ctrlKey === true && e.altKey === true) {
        engine_id = "sogouzhihu";
        $("#" + engine_id)[0].click();
    }

    //搜狗微信 ctrl+alt+k
    if (e && e.keyCode == 75 && e.ctrlKey === true && e.altKey === true) {
        engine_id = "sogouweixin";
        $("#" + engine_id)[0].click();
    }

    //微博搜索 ctrl+alt+l
    if (e && e.keyCode == 76 && e.ctrlKey === true && e.altKey === true) {
        engine_id = "weibo";
        $("#" + engine_id)[0].click();
    }

    //资源搜索
    //网盘搜索 ctrl+alt+g
    if (e && e.keyCode == 71 && e.ctrlKey === true && e.altKey === true) {
        engine_id = "sowangpan";
        $("#" + engine_id)[0].click();
    }


    //音乐搜索 ctrl+alt+b
    if (e && e.keyCode == 66 && e.ctrlKey === true && e.altKey === true) {
        engine_id = "soyinyue";
        $("#" + engine_id)[0].click();
    }

    //书籍搜索 ctrl+alt+n
    if (e && e.keyCode == 78 && e.ctrlKey === true && e.altKey === true) {
        engine_id = "soshuji";
        $("#" + engine_id)[0].click();
    }

    //电影搜索 ctrl+alt+m
    if (e && e.keyCode == 77 && e.ctrlKey === true && e.altKey === true) {
        engine_id = "sodianying";
        $("#" + engine_id)[0].click();
    }


    //加词面板快捷键

    //打开加词面板 ctrl+shift+a
    if (e && e.keyCode == 65 && e.ctrlKey === true && e.shiftKey === true) {
        $("#dropdown_btn").click();
    }


    //加引号 ctrl+shift+5
    if (e && e.keyCode == 53 && e.ctrlKey === true && e.shiftKey === true) {
        $("#add_quotest").click();
    }

    //加网盘词 ctrl+shift+6
    if (e && e.keyCode == 54 && e.ctrlKey === true && e.shiftKey === true) {
        $("#pan_keyword").click();
    }

    //加书籍词 ctrl+shift+7
    if (e && e.keyCode == 55 && e.ctrlKey === true && e.shiftKey === true) {
        $("#ebook_keyword").click();
    }


    //加音乐词 ctrl+shift+8
    if (e && e.keyCode == 56 && e.ctrlKey === true && e.shiftKey === true) {
        $("#music_keyword").click();
    }


    //加视频词 ctrl+shift+9 
    if (e && e.keyCode == 57 && e.ctrlKey === true && e.shiftKey === true) {
        $("#movie_keyword").click();
    }



    //打开/折叠搜索面板
    if (e && e.keyCode == 65 && e.ctrlKey === true && e.altKey === true) {
        $("#search_type").click();
    }

    //单搜 ctrl+alt+6
    if (e && e.keyCode == 54 && e.ctrlKey === true && e.altKey === true) {
        $('#auto').removeClass();
        $('#auto').addClass("auto_hidden");
        $("#one_engine").click();
    }

    //双搜 ctrl+alt+7
    if (e && e.keyCode == 55 && e.ctrlKey === true && e.altKey === true) {
        $('#auto').removeClass();
        $('#auto').addClass("auto_hidden");
        $("#two_engine").click();
    }

    //三搜 ctrl+alt+8
    if (e && e.keyCode == 56 && e.ctrlKey === true && e.altKey === true) {
        $('#auto').removeClass();
        $('#auto').addClass("auto_hidden");
        $("#three_engine").click();
    }

    //展开/折叠左侧面板 ctrl+q
    if (e && e.keyCode == 81 && e.ctrlKey === true) {
        // 显示左侧面板
        if (isFold == 0) {
            isFold = 1;
            $('#leftPanel').show();
            // 用左侧面板的宽度来计算右侧面板的宽度
            var temp = document.getElementById("leftPanel").style.width.replace("%", "")
            console.log(temp)
            temp = 100 - parseFloat(temp)
            console.log(temp)
            $('#rightPanel').css("width", temp + "%");
            console.log(isFold, $('#rightPanel').css('width'), $('#leftPanel').css('width'))
            // 隐藏左侧面板
        } else {
            isFold = 0;
            $('#leftPanel').hide();
            $('#rightPanel').css("width", "100%");
            console.log(isFold, $('#rightPanel').css('width'), $('#leftPanel').css('width'))
        }

    }
}