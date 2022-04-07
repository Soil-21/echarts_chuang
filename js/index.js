// 监控区域模块制作
(function() {
    $(".monitor .tabs").on("click", "a", function() {
        $(this)
            .addClass("active")
            .siblings("a")
            .removeClass("active");


        // console.log($(this).index());
        //   选取对应索引号的content
        $(".monitor .content")
            .eq($(this).index())
            .show()
            .siblings(".content")
            .hide();
    });
    // 1. 先克隆marquee里面所有的行（row）
    $(".marquee-view .marquee").each(function() {
        // console.log($(this));
        var rows = $(this)
            .children()
            .clone();
        $(this).append(rows);
    });
})();
// 点位分布统计模块
(function() {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".pie"));
    // 2. 指定配置项和数据
    var option = {
        tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        // 注意颜色写的位置
        color: [
            "#006cff",
            "#60cda0",
            "#ed8884",
            "#ff9f7f",
            "#0096ff",
            "#9fe6b8",
            "#32c5e9",
            "#1d9dff"
        ],
        series: [{
            name: "点位统计",
            type: "pie",
            // 如果radius是百分比则必须加引号
            radius: ["10%", "70%"],
            center: ["50%", "50%"],
            roseType: "radius",
            data: [
                { value: 533, name: "禅城区" },
                { value: 540, name: "南海区" },
                { value: 650, name: "顺德区" },
                { value: 500, name: "三水区" },
                { value: 430, name: "高明区" },
                { value: 380, name: "祖庙街道" },

            ],
            // 修饰饼形图文字相关的样式 label对象
            label: {
                fontSize: 10
            },
            // 修饰引导线样式
            labelLine: {
                // 连接到图形的线长度
                length: 6,
                // 连接到文字的线长度
                length2: 8
            }
        }]
    }

    // 3. 配置项和数据给我们的实例化对象
    myChart.setOption(option);
    // 4. 当我们浏览器缩放的时候，图表也等比例缩放
    window.addEventListener("resize", function() {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    });
})();
// 柱形图模块
(function() {
    var item = {
        name: "",
        value: 1200,
        // 1. 修改当前柱形的样式
        itemStyle: {
            color: "#254065"
        },
        // 2. 鼠标放到柱子上不想高亮显示
        emphasis: {
            itemStyle: {
                color: "#254065"
            }
        },
        // 3. 鼠标经过柱子不显示提示框组件
        tooltip: {
            extraCssText: "opacity: 0"
        }
    };
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".bar"));
    // 2. 指定配置和数据
    var option = {
        color: new echarts.graphic.LinearGradient(
            // (x1,y2) 点到点 (x2,y2) 之间进行渐变
            0,
            0,
            0,
            1, [
                { offset: 0, color: "#00fffb" }, // 0 起始颜色
                { offset: 1, color: "#0061ce" } // 1 结束颜色
            ]
        ),
        tooltip: {
            trigger: "item"
        },
        grid: {
            left: "0%",
            right: "3%",
            bottom: "3%",
            top: "3%",
            //  图表位置紧贴画布边缘是否显示刻度以及label文字 防止坐标轴标签溢出跟grid 区域有关系
            containLabel: true,
            // 是否显示直角坐标系网格
            show: true,
            //grid 四条边框的颜色
            borderColor: "rgba(0, 240, 255, 0.3)"
        },
        xAxis: [{
            type: "category",
            data: [
                "禅城区",
                "南海区",
                "顺德区",
                "三水区",
                "高明区"
            ],
            axisTick: {
                alignWithLabel: false,
                // 把x轴的刻度隐藏起来
                show: false
            },
            axisLabel: {
                color: "#4c9bfd"
            },
            // x轴这条线的颜色样式
            axisLine: {
                lineStyle: {
                    color: "rgba(0, 240, 255, 0.3)"
                        // width: 3
                }
            }
        }],
        yAxis: [{
            type: "value",
            axisTick: {
                alignWithLabel: false,
                // 把y轴的刻度隐藏起来
                show: false
            },
            axisLabel: {
                color: "#4c9bfd"
            },
            // y轴这条线的颜色样式
            axisLine: {
                lineStyle: {
                    color: "rgba(0, 240, 255, 0.3)"
                        // width: 3
                }
            },
            // y轴分割线的颜色样式
            splitLine: {
                lineStyle: {
                    color: "rgba(0, 240, 255, 0.3)"
                }
            }
        }],
        series: [{
            name: "直接访问",
            type: "bar",
            barWidth: "60%",
            data: [
                32100,
                18799,
                26864,
                25000,
                18136
            ]
        }]
    };
    // 3. 把配置给实例对象
    myChart.setOption(option);
    // 4. 当我们浏览器缩放的时候，图表也等比例缩放
    window.addEventListener("resize", function() {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    });
})();

(function() {
    $(".order .filter").on("click", "a", function() {
        // 此时要注意这个索引号的问题
        // 解决点击后下一个自动点击问题
        index = $(this).index();
        // 点击当前a 高亮显示 调用active
        $(this)
            .addClass("active")
            .siblings("a")
            .removeClass("active");

        //注意！！！
        $('.soil').eq($(this).index()).removeClass('dataview');
        $('.soil').eq($(this).index()).siblings().addClass('dataview');
        //这里接着写，写出应该添加的类
    });

    var as = $(".order .filter a");
    console.log(as);
    var index = 0;
    var timer = setInterval(function() {
        index++;
        if (index >= 3) index = 0;
        as.eq(index).click();
    }, 3000);
    // 鼠标经过order，关闭定时器，离开开启定时器
    $(".order .filter").hover(
        function() {
            clearInterval(timer);
        },
        function() {
            clearInterval(timer);
            timer = setInterval(function() {
                index++;
                if (index >= 3) index = 0;
                as.eq(index).click();
            }, 3000);
        }
    );
})();