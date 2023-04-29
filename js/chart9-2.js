// 初始化echarts实例
var myEcharts = echarts.init(document.getElementById("chart9-2"));
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
        text: "中国各省森林覆盖率",
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
        formatter: "地区：{b}<br/>森林覆盖率：{c}%",
    },
    visualMap: {
        //视觉映射组件
        top: "50%",
        left: "10%",
        min: 0,
        max: 100,
        text: ["High", "Low"],
        realtime: false, //拖拽时，是否实时更新
        calculable: true, //是否显示拖拽用的手柄
        inRange: {
            color: ["#A0E5A0", "#0DED12", "#0A890D", "#056C08"],
        },
    },
    series: [
        {
            name: "森林覆盖率",
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
                { name: "北京", value: 43.77 },
                { name: "天津", value: 12.07 },
                { name: "上海", value: 14.04 },
                { name: "重庆", value: 43.11 },
                { name: "河北", value: 26.78 },
                { name: "河南", value: 24.14 },
                { name: "云南", value: 55.04 },
                { name: "辽宁", value: 39.24 },
                { name: "黑龙江", value: 43.78 },
                { name: "湖南", value: 49.69 },
                { name: "安徽", value: 28.65 },
                { name: "山东", value: 17.51 },
                { name: "新疆", value: 4.87 },
                { name: "江苏", value: 15.20 },
                { name: "浙江", value: 59.43 },
                { name: "江西", value: 61.16 },
                { name: "湖北", value: 39.61 },
                { name: "广西", value: 142965 },
                { name: "甘肃", value: 11.33 },
                { name: "山西", value: 20.50 },
                { name: "内蒙古", value: 22.10 },
                { name: "陕西", value: 43.06 },
                { name: "吉林", value: 41.49 },
                { name: "福建", value: 66.80 },
                { name: "贵州", value: 43.77 },
                { name: "广东", value: 53.52 },
                { name: "青海", value: 5.82 },
                { name: "西藏", value: 12.14 },
                { name: "四川", value: 38.03 },
                { name: "宁夏", value: 12.63 },
                { name: "海南", value: 57.36 },
                { name: "台湾", value: 60.71 },
                { name: "香港", value: 25.05 },
                { name: "澳门", value: 30 },
            ],
        },
    ],
};
// 使用刚指定的配置项和数据显示图表。
myEcharts.setOption(option);