// 初始化echarts实例
var myEcharts = echarts.init(document.getElementById("chart9-3"));
var option = {
    grid: {
        left: "2%",
        right: "2%",
        top: "5%",
        bottom: "0%",
        containLabel: true,
    },
    title: [{
        //标题样式
        text: "中国各省碳储量",
        x: "center",
        y: "top",
        textStyle: {
            fontSize: 30,
            color: "black",
        },
    },
    {
        text: "数据来源:第九次全国森林资源清查",
        x: "center",
        y: "50",
        textStyle: {
            color: "#898686",
            fontSize: 13,
        },
    }],
    tooltip: {
        //这里设置提示框
        trigger: "item", //数据项图形触发
        backgroundColor: "green", //提示框浮层的背景颜色。
        //字符串模板(地图): {a}（系列名称），{b}（区域名称），{c}（合并数值）,{d}（无
        formatter: "地区：{b}<br/>碳储量：{c}（万立方米)",
    },
    visualMap: {
        //视觉映射组件
        top: "50%",
        left: "10%",
        min: 10,
        max: 100000,
        text: ["High", "Low"],
        realtime: false, //拖拽时，是否实时更新
        calculable: true, //是否显示拖拽用的手柄
        inRange: {
            color: ["#A0E5A0", "#0DED12", "#0A890D", "#056C08"],
        },
    },
    series: [
        {
            name: "碳储量",
            type: "map",
            mapType: "china",
            roam: false, //是否开启鼠标缩放和平移漫游
            itemStyle: {
                //地图区域的多边形 图形样式
                normal: {
                    //是图形在默认状态下的样式
                    label: {
                        show: true, //是否显示标签
                        textStyle: {
                            color: "black",
                        },
                    },
                },
                zoom: 1.5, //地图缩放比例,默认为1
                emphasis: {
                    //是图形在高亮状态下的样式,比如在鼠标悬浮或者图例联动高亮时
                    label: { show: true },
                },
            },
            top: "3%", //组件距离容器的距离
            data: [
                { name: "北京", value: 1917.87 },
                { name: "天津", value: 347.84 },
                { name: "上海", value: 334.98 },
                { name: "重庆", value: 12900.46 },
                { name: "河北", value: 9205.62 },
                { name: "河南", value: 15595.39 },
                { name: "云南", value: 98477.66 },
                { name: "辽宁", value: 15510.49 },
                { name: "黑龙江", value: 92883.59 },
                { name: "湖南", value: 27273.08 },
                { name: "安徽", value: 15361.37 },
                { name: "山东", value: 6978.01 },
                { name: "新疆", value: 21891.40 },
                { name: "江苏", value: 5008.69 },
                { name: "浙江", value: 22842.18 },
                { name: "江西", value: 36058.88 },
                { name: "湖北", value: 24402.15 },
                { name: "广西", value: 41356.89 },
                { name: "甘肃", value: 15789.07 },
                { name: "山西", value: 11351.65 },
                { name: "内蒙古", value: 82003.85 },
                { name: "陕西", value: 47866.70 },
                { name: "吉林", value: 47872.51 },
                { name: "福建", value: 42848.88 },
                { name: "贵州", value: 21742.21 },
                { name: "广东", value: 28486.34 },
                { name: "青海", value: 5580.57 },
                { name: "西藏", value: 81669.13 },
                { name: "四川", value: 71582.45 },
                { name: "宁夏", value: 814.91 },
                { name: "海南", value: 8245.53 },
                { name: "台湾", value: NaN },
                { name: "香港", value: NaN },
                { name: "澳门", value: NaN },
            ],
        },
    ],
};
// 使用刚指定的配置项和数据显示图表。
myEcharts.setOption(option);