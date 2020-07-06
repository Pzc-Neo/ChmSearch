var app = new Vue({
    el: "#app",
    data: {
        web_name: "哔哩哔哩",
        web_link: "https://www.bilibili.com",
        web_discript: "番剧 - 最及时的动漫新番。",
        content: "",
    },
    // 网页载入的时候，要执行的代码
    mounted() {
        // 把文本框的html代码赋给“标签效果”
        this.content = document.getElementById("code_show").textContent

    },
    methods: {
        change: function () {
            //修改之后，把文本框的html代码赋给“标签效果”
            this.content = document.getElementById("code_show").textContent
        }
    },
})

// 点击按钮复制代码框里面的内容到剪切板
function copyCode() {
    var area = document.getElementById("code_show");

    // 选择对象
    area.select();

    // 执行浏览器复制命令
    document.execCommand("Copy");


}