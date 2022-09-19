<<<<<<< HEAD
var chart_chart12 = echarts.init(
    document.getElementById('chart12'), 'white', { renderer: 'canvas' });
var option_chart12 = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "color": [
        "#c23531",
        "#2f4554",
        "#61a0a8",
        "#d48265",
        "#749f83",
        "#ca8622",
        "#bda29a",
        "#6e7074",
        "#546570",
        "#c4ccd3",
        "#f05b72",
        "#ef5b9c",
        "#f47920",
        "#905a3d",
        "#fab27b",
        "#2a5caa",
        "#444693",
        "#726930",
        "#b2d235",
        "#6d8346",
        "#ac6767",
        "#1d953f",
        "#6950a1",
        "#918597"
    ],
    grid: {
        left: "2%",
        right: "2%",
        top: "20%",
        bottom:"0%",
        containLabel: true,
    },
    "series": [
        {
            "type": "bar",
            "name": "\u7164\u70ad",
            "legendHoverLink": true,
            "data": [
                63.8,
                56.8
            ],
            "showBackground": false,
            "stack": "stack1",
            "barMinHeight": 0,
            "barCategoryGap": "20%",
            "barGap": "30%",
            "large": false,
            "largeThreshold": 400,
            "seriesLayoutBy": "column",
            "datasetIndex": 0,
            "clip": true,
            "zlevel": 0,
            "z": 2,
            "label": {
                "show": false,
                "position": "top",
                "margin": 8
            },
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        },
        {
            "type": "bar",
            "name": "\u77f3\u6cb9",
            "legendHoverLink": true,
            "data": [
                18.3,
                18.9
            ],
            "showBackground": false,
            "stack": "stack1",
            "barMinHeight": 0,
            "barCategoryGap": "20%",
            "barGap": "30%",
            "large": false,
            "largeThreshold": 400,
            "seriesLayoutBy": "column",
            "datasetIndex": 0,
            "clip": true,
            "zlevel": 0,
            "z": 2,
            "label": {
                "show": false,
                "position": "top",
                "margin": 8
            },
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        },
        {
            "type": "bar",
            "name": "\u5929\u7136\u6c14",
            "legendHoverLink": true,
            "data": [
                5.9,
                8.4
            ],
            "showBackground": false,
            "stack": "stack1",
            "barMinHeight": 0,
            "barCategoryGap": "20%",
            "barGap": "30%",
            "large": false,
            "largeThreshold": 400,
            "seriesLayoutBy": "column",
            "datasetIndex": 0,
            "clip": true,
            "zlevel": 0,
            "z": 2,
            "label": {
                "show": false,
                "position": "top",
                "margin": 8
            },
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        },
        {
            "type": "bar",
            "name": "\u975e\u5316\u77f3\u80fd\u6e90",
            "legendHoverLink": true,
            "data": [
                12.0,
                15.9
            ],
            "showBackground": false,
            "stack": "stack1",
            "barMinHeight": 0,
            "barCategoryGap": "20%",
            "barGap": "30%",
            "large": false,
            "largeThreshold": 400,
            "seriesLayoutBy": "column",
            "datasetIndex": 0,
            "clip": true,
            "zlevel": 0,
            "z": 2,
            "label": {
                "show": false,
                "position": "top",
                "margin": 8
            },
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5
    },
    "xAxis": [
        {
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 0,
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            },
            "data": [
                2015,
                2020
            ]
        }
    ],
    "yAxis": [
        {
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 0,
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            }
        }
    ],
    "title": [{
        "text": "新能源汽车销量构成图",
        "x": "center",
        "y": "top",
        "textStyle": {
            "fontSize": 30,
            "color": "black",
            "itemGap": 10,

        },
    }
    ],
    "legend": [
        {
            "data": [
                "\u7164\u70ad",
                "\u77f3\u6cb9",
                "\u5929\u7136\u6c14",
                "\u975e\u5316\u77f3\u80fd\u6e90"
            ],
            "selected": {
                "\u7164\u70ad": true,
                "\u77f3\u6cb9": true,
                "\u5929\u7136\u6c14": true,
                "\u975e\u5316\u77f3\u80fd\u6e90": true
            },
            "show": true,
            "padding": 50,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14,

        }
    ],
};
=======
var chart_chart12 = echarts.init(
    document.getElementById('chart12'), 'white', { renderer: 'canvas' });
var option_chart12 = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "color": [
        "#c23531",
        "#2f4554",
        "#61a0a8",
        "#d48265",
        "#749f83",
        "#ca8622",
        "#bda29a",
        "#6e7074",
        "#546570",
        "#c4ccd3",
        "#f05b72",
        "#ef5b9c",
        "#f47920",
        "#905a3d",
        "#fab27b",
        "#2a5caa",
        "#444693",
        "#726930",
        "#b2d235",
        "#6d8346",
        "#ac6767",
        "#1d953f",
        "#6950a1",
        "#918597"
    ],
    grid: {
        left: "2%",
        right: "2%",
        top: "20%",
        bottom:"0%",
        containLabel: true,
    },
    "series": [
        {
            "type": "bar",
            "name": "\u7164\u70ad",
            "legendHoverLink": true,
            "data": [
                63.8,
                56.8
            ],
            "showBackground": false,
            "stack": "stack1",
            "barMinHeight": 0,
            "barCategoryGap": "20%",
            "barGap": "30%",
            "large": false,
            "largeThreshold": 400,
            "seriesLayoutBy": "column",
            "datasetIndex": 0,
            "clip": true,
            "zlevel": 0,
            "z": 2,
            "label": {
                "show": false,
                "position": "top",
                "margin": 8
            },
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        },
        {
            "type": "bar",
            "name": "\u77f3\u6cb9",
            "legendHoverLink": true,
            "data": [
                18.3,
                18.9
            ],
            "showBackground": false,
            "stack": "stack1",
            "barMinHeight": 0,
            "barCategoryGap": "20%",
            "barGap": "30%",
            "large": false,
            "largeThreshold": 400,
            "seriesLayoutBy": "column",
            "datasetIndex": 0,
            "clip": true,
            "zlevel": 0,
            "z": 2,
            "label": {
                "show": false,
                "position": "top",
                "margin": 8
            },
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        },
        {
            "type": "bar",
            "name": "\u5929\u7136\u6c14",
            "legendHoverLink": true,
            "data": [
                5.9,
                8.4
            ],
            "showBackground": false,
            "stack": "stack1",
            "barMinHeight": 0,
            "barCategoryGap": "20%",
            "barGap": "30%",
            "large": false,
            "largeThreshold": 400,
            "seriesLayoutBy": "column",
            "datasetIndex": 0,
            "clip": true,
            "zlevel": 0,
            "z": 2,
            "label": {
                "show": false,
                "position": "top",
                "margin": 8
            },
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        },
        {
            "type": "bar",
            "name": "\u975e\u5316\u77f3\u80fd\u6e90",
            "legendHoverLink": true,
            "data": [
                12.0,
                15.9
            ],
            "showBackground": false,
            "stack": "stack1",
            "barMinHeight": 0,
            "barCategoryGap": "20%",
            "barGap": "30%",
            "large": false,
            "largeThreshold": 400,
            "seriesLayoutBy": "column",
            "datasetIndex": 0,
            "clip": true,
            "zlevel": 0,
            "z": 2,
            "label": {
                "show": false,
                "position": "top",
                "margin": 8
            },
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5
    },
    "xAxis": [
        {
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 0,
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            },
            "data": [
                2015,
                2020
            ]
        }
    ],
    "yAxis": [
        {
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 0,
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            }
        }
    ],
    "title": [{
        "text": "新能源汽车销量构成图",
        "x": "center",
        "y": "top",
        "textStyle": {
            "fontSize": 30,
            "color": "black",
            "itemGap": 10,

        },
    }
    ],
    "legend": [
        {
            "data": [
                "\u7164\u70ad",
                "\u77f3\u6cb9",
                "\u5929\u7136\u6c14",
                "\u975e\u5316\u77f3\u80fd\u6e90"
            ],
            "selected": {
                "\u7164\u70ad": true,
                "\u77f3\u6cb9": true,
                "\u5929\u7136\u6c14": true,
                "\u975e\u5316\u77f3\u80fd\u6e90": true
            },
            "show": true,
            "padding": 50,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14,

        }
    ],
};
>>>>>>> acc4185 (third commit)
chart_chart12.setOption(option_chart12);