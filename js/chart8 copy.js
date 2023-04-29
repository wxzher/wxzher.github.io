var chartDom = document.getElementById('chart8');
var myChart = echarts.init(chartDom);
var option;
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'cross' }
    },
    legend: {},
    xAxis: [
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            data: ["第一次", "第二次", "第三次", "第四次", "第五次", "第六次", "第七次", "第八次", "第九次"],

        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '全国森林面积',
            min: 0,
            max: 250,
            position: 'right',
            axisLabel: {
                formatter: '{value} 百万公顷'
            }
        },
        {
            type: 'value',
            name: '全国森林覆盖率',
            min: 0,
            max: 25,
            position: 'left',
            axisLabel: {
                formatter: '{value} %'
            }
        }
    ],
    series: [
        {
            name: '全国森林面积',
            type: 'bar',
            yAxisIndex: 0,
            itemStyle: {
                color: "#09860C",
                barBorderRadius: 5,
                borderWidth: 1,
                borderType: 'solid',
                // borderColor: '#73c0de',
                shadowColor: '#5470c6',
                shadowBlur: 3
            },
            data: [121.8600, 115.2774, 124.6528, 133.7035, 158.9409, 174.9092, 195.4522, 207.6873, 220.4462]
        },
        {
            name: '全国森林覆盖率',
            type: 'line',
            smooth: true,
            yAxisIndex: 1,
            data: [12.7, 12, 12.98, 13.92, 16.55, 18.21, 20.36, 21.63, 22.96]
        }
    ]
};
option && myChart.setOption(option);