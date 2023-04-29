// import * as echarts from 'echarts';

var chartDom = document.getElementById('world_sort');
var myChart = echarts.init(chartDom);
var option;

option = {
    textStyle: {
        color: '#fff'
    },
    grid: {
        // width:200,
        right: 50,
    },
    dataset: {
        source: [
            ['score', 'amount', 'country'],

            [10, 1134217.97, '法国'],
            [20, 1243957.941, '意大利'],
            [30, 1351312.049, '英国'],
            [40, 1662719.375, '巴西'],
            [50, 2582076.505, '德国'],
            [60, 4232193.552, '日本'],
            [70, 6981356.868, '俄罗斯'],
            [80, 9855569.039, '印度'],
            [90, 19395387.29, '美国'],
            [100, 43304218.26, '中国']
        ]
    },
    grid: { containLabel: true },
    xAxis: { name: 'amount' },
    yAxis: { type: 'category' },
    visualMap: {
        orient: 'horizontal',
        left: 'center',
        min: 10,
        max: 100,
        text: ['High Score', 'Low Score'],
        // Map the score column to color
        textStyle: {
            color: '#fff'
        },
        dimension: 0,
        inRange: {
            color: ['#65B581', '#FFCE34', '#FD665F']
        }
    },
    series: [
        {
            type: 'bar',
            encode: {
                // Map the "amount" column to X axis.
                x: 'amount',
                // Map the "product" column to Y axis
                y: 'country'
            }
        }
    ]
};

option && myChart.setOption(option);
