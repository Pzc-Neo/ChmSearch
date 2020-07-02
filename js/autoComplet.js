window.onload = function () {
    new Vue({
        el: '#app',
        data: {
            myKeyword: '',
            // result是从百度获取的，提示词列表
            result: '',
            index: -1,
            is_Active: -1,
            show_panel: true
        },
        mounted() {
            // 让外部js可以调用vue的methods中的方法
            window.adjustWidth = this.adjustWidth;
        },
        methods: {
            sendJsonP: function (keyword) {

                this.adjustWidth();
                let url = 'https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web';
                this.$http.jsonp(url, {
                    params: {
                        wd: keyword
                    },
                    jsonp: 'cb' //jsonp默认是callback,百度缩写成了cb，所以需要指定下                     }
                }).then(res => {
                    if (res.data.g) {
                        this.showPanel(true)
                        this.result = res.data.g.map(x => x['q']);
                        this.show_panel = true;
                    } else {
                        this.showPanel(false)
                        this.result = [];
                    }
                });
            },

            // 根据用户输入的字符长度,调整搜索框宽度
            adjustWidth: function () {

                //获取搜索框里面的文本及文本长度
                var keyword = $("#keyword").val();
                var keyword_len = $("#keyword").val().length;

                //判断有没有中文，如果有就计算中文的个数，否则设置中文的个数为0
                re = /[\u4E00-\u9FA5]/g; //测试中文字符的正则
                var leng;
                if (keyword.match(re) == null) {
                    leng = 0;
                } else {
                    var leng = keyword.match(re).length; //计算中文的个数
                }

                //判断文本框的宽度，如果<=200或者>=480就不改变宽度，否则就根据字符长度来改变宽度
                input_len = (leng * 2 + keyword_len - leng) * 8;
                if (input_len <= 200) {
                    input_len = "200px";
                } else if (input_len >= 480) {
                    input_len = "480px";
                } else {
                    input_len = input_len + 'px';
                }

                $("#keyword").css("width", input_len)
                $("#auto").css("width", input_len)
            },
            getIndex: function (index) {
                $("#keyword").val(this.result[parseInt(index)]);
                $("#searchBtn").click();
                this.showPanel(false);
            },
            index_add: function () {
                if (this.index < this.result.length) {
                    var index = this.index + 1;
                    this.index = index;
                    this.is_Active = index;
                } else {
                    this.index = 0;
                    this.is_Active = 0;
                }

            },
            index_sub: function () {
                if (this.index >= 0) {
                    var index = this.index - 1;
                    this.index = index;
                    this.is_Active = index;
                } else {
                    this.index = this.result.length;
                    this.is_Active = this.result.length;
                }

            },
            setAndSearch: function () {
                if (this.index == -1) {
                    //直接用搜索框的词;
                    this.myKeyword = $("#keyword").val()
                } else {
                    this.myKeyword = this.result[this.index];
                }
                this.show_panel = false;
                this.index = -1;
                this.is_Active = -1;

                // 延迟50毫秒后，再按enter键，不然搜索的结果不是所选择的词
                setTimeout(function () {
                    $("#searchBtn").click();
                    this.adjustWidth();
                }, 100)
                this.showPanel(false)
            },
            // 显示/隐藏 搜索提示词面板
            showPanel: function (isShow) {
                if (isShow == true) {
                    if (this.show_panel == true) {
                        $('#auto').removeClass();
                        $('#auto').addClass("auto_show");
                    } else {
                        $('#auto').removeClass();
                        $('#auto').addClass("auto_hidden");
                    }
                } else {
                    $('#auto').removeClass();
                    $('#auto').addClass("auto_hidden");
                }
            },
            hidePanel: function () {
                this.show_panel = false;
                this.showPanel(false);
                this.index = -1;
                this.is_Active = -1;
            }
        }
    })
}