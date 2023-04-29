// 初始化 ECharts 实例
// var myChart = echarts.init(document.getElementById('carbon_world'));
var myChart = echarts.init(document.getElementById('carbon_world'), null, {
    width: 450,
    height: 250,

});

// 指定图表的配置项和数据
// 将表格的高度设置为 200px
var option = {
    // 修改文字颜色为白色
    grid:{
        left:80,
        bottom:90,
        width: 350,
    },

    textStyle: {
        color: '#fff'
    },
    tooltip: {},
    xAxis: {
        type: 'category',
        data: ['1970-1979', '1980-1989', '1990-1999', '2000-2009', '2010-2019']
    },
    yAxis: {
        type: 'value',
        name: '排放量',
        axisLabel: {
            formatter: '{value} mt'
        }
    },
    series: [{
        name: '碳排放量',
        type: 'line',
        data: [14914, 17715, 22834, 28736, 33674] // 每十年的全球碳排放量数据
    }]
};

// 使用刚指定的配置项和数据显示图表
myChart.setOption(option);
