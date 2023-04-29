// import * as echarts from 'echarts';

var chartDom = document.getElementById('area');
var myChart = echarts.init(chartDom);
var option;
option = {
    // legend: {
    // top: 'bottom'
    // },
    tooltip: {
        trigger: 'item',
        formatter: '{b} : {c} 百万吨({d}%)'
    },

    series: [
        {
            name: '',
            type: 'pie',
            radius: [50, 100],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
                borderRadius: 8
            },
            data: [
                { value: 17734.6, name: '亚太地区' },
                { value: 1290.7, name: '非洲' },
                { value: 2117.2, name: '中东' },
                { value: 2132.5, name: '独联体' },
                { value: 3793.7, name: '欧洲' },
                { value: 1213.1, name: '中南美' },
                { value: 5602.2, name: '北美' }
            ],
        }
    ]
};

option && myChart.setOption(option);
