//[当前搜索引擎] 全局变量，记录当前使用的搜索引擎，便于直接按enter键搜索的时候引用这个参数
//默认用百度搜索引擎
var engine_id_current = "baidu";

//默认的搜索方式
var default_search_type = "one_engine"

//选择引擎按钮默认值
var selectEngine_default_1 = "baidu"
var selectEngine_default_2 = "bing"
var selectEngine_default_3 = "shenma"

//[搜索函数]
//engine_id就是自己定一的不同搜索引擎的id，searchWord()函数，需要通过id来识别用哪个链接来搜索。
function searchWord(engine_id = engine_id_current, target_window = "mainWindow") {

    //获取输入框的关键词
    var keyword = $("#keyword").val();

    // 当用户搜索“预先设定的关键词”的时候，做出相应的回应
    if (keyword == "~说明~") {

        // 在新标签中打开链接
        window.open("./defaultPage.html", '_blank').location;

    } else {
        //获取搜索链接
        var engine_url = $("#" + engine_id).attr("rel");

        // 转换关键词中的特殊字符,以适合url使用(有些特殊字符放到链接里面的话，会解析不了，所以要转换)
        keyword = transformCharacter(keyword);

        //把链接里面的占位词 ~word~ 替换成搜索的关键词 txt
        var real_url = engine_url.replace("{word}", keyword);

        //设置面板的链接
        $("#" + target_window).attr("src", real_url);

        //把当前搜索引擎设置为刚刚使用的引擎
        engine_id_current = engine_id;

        //因为有时候内容会被导航栏遮住，所以在搜索的时候设置一下主体的上边距
        document.getElementsByTagName("body")[0].setAttribute("style", "padding-top:49px")
    }
}


//如果是直接点击“搜索”按钮或者直接按“enter”键搜索的话，会调用这个函数
function activeSearchWord(search_type = default_search_type, use_current_engine = "no") {
    //获取当前活动的搜索引擎，并且点击
    switch (search_type) {
        case "one_engine":

            //设置默认的搜索方式为：one_engine
            default_search_type = "one_engine";
            if (use_current_engine == "yes") {
                searchWord(engine_id_current, "mainWindow")
            } else {
                searchWord("baidu", "mainWindow")
            }

            // 隐藏语录,因为显示的位置不够，所以要隐藏
            blowser_width = document.body.clientWidth;
            $("#top_div").show();

            break;
        case "two_engine":
            //设置默认的搜索方式为：two_engine
            default_search_type = "two_engine";

            //切换选择引擎按钮的文字
            $("#selectEngine_current_1").text($("#" + "selectEngine_" + selectEngine_default_1 + "_1").text().split(" ")[0]);
            $("#selectEngine_current_2").text($("#" + "selectEngine_" + selectEngine_default_2 + "_1").text().split(" ")[0]);

            //设置各个iframe的链接
            searchWord(selectEngine_default_1, "two_left_window");
            searchWord(selectEngine_default_2, "two_right_window")

            // 隐藏语录,因为显示的位置不够，所以要隐藏
            blowser_width = document.body.clientWidth;
            if (blowser_width < 1500) {
                $("#top_div").hide();
            }
            break;
        case "three_engine":
            //设置默认的搜索方式为：three_engine
            default_search_type = "three_engine";

            //切换选择引擎按钮的文字
            $("#selectEngine_current_1").text($("#" + "selectEngine_" + selectEngine_default_1 + "_1").text().split(" ")[0]);
            $("#selectEngine_current_2").text($("#" + "selectEngine_" + selectEngine_default_2 + "_1").text().split(" ")[0]);
            $("#selectEngine_current_3").text($("#" + "selectEngine_" + selectEngine_default_3 + "_1").text().split(" ")[0]);

            //设置各个iframe的链接
            searchWord(selectEngine_default_1, "three_left_window");
            searchWord(selectEngine_default_2, "three_middle_window");
            searchWord(selectEngine_default_3, "three_right_window");

            // 隐藏语录,因为显示的位置不够，所以要隐藏
            blowser_width = document.body.clientWidth;
            if (blowser_width < 1500) {
                $("#top_div").hide();
            }
            break;
    }
}


function leftPanel_searchWord(engine_id) {


    if (engine_id == "google") {
        //获取输入框的关键词
        var keyword = $("#keyword").val();

        //获取搜索链接
        var engine_url = $("#" + engine_id).attr("rel")

        // 转换关键词中的特殊字符,以适合url使用(有些特殊字符放到链接里面的话，会解析不了，所以要转换)
        keyword = transformCharacter(keyword);

        //把链接里面的占位词 ~word~ 替换成搜索的关键词 txt
        var real_url = engine_url.replace("{word}", keyword);

        //设置面板的链接
        $("#" + engine_id).attr("href", real_url)

        //把当前搜索引擎设置为刚刚使用的引擎
        engine_id_current = engine_id;

    } else {
        //控制单搜面板的可见性
        $("#btn_text").text("单搜");
        $("#one_engine_panel").show()
        $("#two_engine_panel").hide()
        $("#three_engine_panel").hide()


        //设置隐藏面板的iframe链接为simpleHtml(最简单的网页),不用占用那么多资源

        //两个引擎的面板
        $("#two_left_window").attr("src", "./simpleHtml.html")
        $("#two_right_window").attr("src", "./simpleHtml.html")

        //三个引擎的面板
        $("#three_left_window").attr("src", "./simpleHtml.html")
        $("#three_middle_window").attr("src", "./simpleHtml.html")
        $("#three_right_window").attr("src", "./simpleHtml.html")

        //获取输入框的关键词
        var keyword = $("#keyword").val();

        //获取搜索链接
        var engine_url = $("#" + engine_id).attr("rel")

        // 转换关键词中的特殊字符,以适合url使用(有些特殊字符放到链接里面的话，会解析不了，所以要转换)
        keyword = transformCharacter(keyword);

        //把链接里面的占位词 ~word~ 替换成搜索的关键词 txt
        var real_url = engine_url.replace("{word}", keyword);

        //设置面板的链接
        // document.getElementById(engine_id).href = real_url;
        $("#" + engine_id).attr("href", real_url)

        //把当前搜索引擎设置为刚刚使用的引擎
        engine_id_current = engine_id;
        default_search_type = "one_engine"


        //设置换引擎按钮的可见性
        $("#select_iframe_engine_1").hide()
        $("#select_iframe_engine_2").hide()
        $("#select_iframe_engine_3").hide()
    }
}


//修改关键词，加双引号、加搜索词之类的
function keywordTransform(add_word) {

    //加词列表
    var ebook_keyword = " txt pdf mobi epub azw"
    var pan_keyword = " pan.baidu 提取码"
    var music_keyword = " mp3 flac ape"
    var movie_keyword = " bt magnet 迅雷"

    //获取搜索框的关键词
    var keyword_region = $("#keyword").val();

    //加引号
    if (add_word == "add_quotest") {
        $("#keyword").val('"' + keyword_region + '"');
    } else {
        $("#keyword").val(keyword_region + eval(add_word))
    }

    //让下拉菜单的按钮失去焦点，不然按enter搜索的时候，会打开下拉菜单
    $("#dropdown_btn").blur();
    $("#keyword").focus();

    //调整一下宽度
    adjustWidth();
}





//通过用户选择的搜索引擎个数，来改变mainPage的布局
function changeLayout(searchType = default_search_type) {
    switch (searchType) {
        case "one_engine":
            //控制单搜面板的可见性
            $("#btn_text").text("单搜");

            //设置双搜、三搜面板的可见性
            $("#one_engine_panel").show()
            $("#two_engine_panel").hide()
            $("#three_engine_panel").hide()

            //设置每个面板所用的搜索引擎
            activeSearchWord("one_engine")

            //设置隐藏面板的iframe链接为simpleHtml(最简单的网页),不用占用那么多资源
            //两个引擎的面板
            $("#two_left_window").attr("src", "simpleHtml.html")
            $("#two_right_window").attr("src", "simpleHtml.html")

            //三个引擎的面板
            $("#three_left_window").attr("src", "simpleHtml.html")
            $("#three_middle_window").attr("src", "simpleHtml.html")
            $("#three_right_window").attr("src", "simpleHtml.html")

            //设置换引擎按钮的可见性
            $("#select_iframe_engine_1").hide()
            $("#select_iframe_engine_2").hide()
            $("#select_iframe_engine_3").hide()

            break;

        case "two_engine":
            //控制双搜面板的可见性
            $("#btn_text").text("双搜")

            //设置双搜、三搜面板的可见性
            $("#one_engine_panel").hide()
            $("#two_engine_panel").show()
            $("#three_engine_panel").hide()

            //设置每个面板所用的搜索引擎
            activeSearchWord("two_engine")


            //设置隐藏面板的iframe链接为simpleHtml(最简单的网页),不用占用那么多资源

            //一个引擎的面板
            $("#mainWindow").attr("src", "simpleHtml.html");

            //三个引擎的面板
            $("#three_left_window").attr("src", "simpleHtml.html")
            $("#three_middle_window").attr("src", "simpleHtml.html")
            $("#three_right_window").attr("src", "simpleHtml.html")


            //设置换引擎按钮的可见性
            $("#select_iframe_engine_1").show()
            $("#select_iframe_engine_2").show()
            $("#select_iframe_engine_3").hide()

            break;

        case "three_engine":
            //控制三搜面板的可见性
            $("#btn_text").text("三搜")

            //设置双搜、三搜面板的可见性
            $("#one_engine_panel").hide()
            $("#two_engine_panel").hide()
            $("#three_engine_panel").show()


            //设置每个面板所用的搜索引擎
            activeSearchWord("three_engine")

            //设置隐藏面板的iframe链接为simpleHtml(最简单的网页),不用占用那么多资源

            //一个引擎的面板
            $("#mainWindow").attr("src", "simpleHtml.html")

            //两个引擎的面板
            $("#two_left_window").attr("src", "simpleHtml.html")
            $("#two_right_window").attr("src", "simpleHtml.html")

            //设置换引擎按钮的可见性
            $("#select_iframe_engine_1").show()
            $("#select_iframe_engine_2").show()
            $("#select_iframe_engine_3").show()
            break;
    }
}


//切换引擎的按钮
function changeIframeSrc(select_engine_id) {

    //要切换的引擎的id
    changeIframe_btn_engine_id = select_engine_id.split("_")[1]

    //修改按钮的文字
    $("#" + "selectEngine_current_" + select_engine_id.split("_")[2]).text($("#" + select_engine_id).text().split(" ")[0]);

    //获取要改变的Iframe
    changeIframe_btn_target_window = parseInt(select_engine_id.split("_")[2])

    switch (changeIframe_btn_target_window) {
        case 1:
            selectEngine_default_1 = changeIframe_btn_engine_id;
            if (default_search_type == "two_engine") {
                changeIframe_btn_target_window = "two_left_window";
            } else {
                changeIframe_btn_target_window = "three_left_window";
            }
            break;
        case 2:
            selectEngine_default_2 = changeIframe_btn_engine_id;
            if (default_search_type == "two_engine") {
                changeIframe_btn_target_window = "two_right_window";
            } else {
                changeIframe_btn_target_window = "three_middle_window";
            }
            break;
        case 3:
            selectEngine_default_3 = changeIframe_btn_engine_id;
            changeIframe_btn_target_window = "three_right_window"
            break;
    }

    searchWord(changeIframe_btn_engine_id, changeIframe_btn_target_window);

}

function setSaying() {
    //获取并设置语录
    var saying = getSaying()
    // 在打开网页的时候，刷新顶部的语录
    $("#saying").text(saying);
    $("#saying").attr("title", saying);
}



//在网页加载完毕的时候执行
$(document).ready(function () {

    $("#keyword").focus();

    //左侧分组展开/折叠时，改变箭头方向 (搜索引擎)
    $("#collapseParent_searchEngine").click(function () {
        if ($("#collapseParent_searchEngine span").hasClass("glyphicon-chevron-down")) {

            $("#collapseParent_searchEngine span.glyphicon").removeClass("glyphicon-chevron-down");
            $("#collapseParent_searchEngine span.glyphicon").addClass("glyphicon-chevron-left");

        }else{

            $("#collapseParent_searchEngine span.glyphicon").removeClass("glyphicon-chevron-left");
            $("#collapseParent_searchEngine span.glyphicon").addClass("glyphicon-chevron-down");
        }
    });

    //左侧分组展开/折叠时，改变箭头方向 (常用网站)
    $("#collapseParent_commentUse").click(function () {
        if ($("#collapseParent_commentUse span").hasClass("glyphicon-chevron-down")) {

            $("#collapseParent_commentUse span.glyphicon").removeClass("glyphicon-chevron-down");
            $("#collapseParent_commentUse span.glyphicon").addClass("glyphicon-chevron-left");

        }else{

            $("#collapseParent_commentUse span.glyphicon").removeClass("glyphicon-chevron-left");
            $("#collapseParent_commentUse span.glyphicon").addClass("glyphicon-chevron-down");
        }
    });

    //左侧分组展开/折叠时，改变箭头方向 (资源搜索)
    $("#collapseParent_resource").click(function () {
        if ($("#collapseParent_resource span").hasClass("glyphicon-chevron-down")) {

            $("#collapseParent_resource span.glyphicon").removeClass("glyphicon-chevron-down");
            $("#collapseParent_resource span.glyphicon").addClass("glyphicon-chevron-left");

        }else{

            $("#collapseParent_resource span.glyphicon").removeClass("glyphicon-chevron-left");
            $("#collapseParent_resource span.glyphicon").addClass("glyphicon-chevron-down");
        }
    });

    setSaying()
})