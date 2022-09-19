<<<<<<< HEAD
var chart_chart6 = echarts.init(
    document.getElementById("chart6"),
    "white",
    { renderer: "canvas" }
  );
  var option_chart6 = {
    animation: true,
    animationThreshold: 2000,
    animationDuration: 1000,
    animationEasing: "cubicOut",
    animationDelay: 0,
    animationDurationUpdate: 300,
    animationEasingUpdate: "cubicOut",
    animationDelayUpdate: 0,
    color: [
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
      "#918597",
    ],
    grid: {
      left: "2%",
      right: "2%",
      top: "15%",
      containLabel: true,
    },
    series: [
      {
        type: "line",
        name: "\u78b3\u6392\u653e\uff08Mt\uff09",
        connectNulls: false,
        symbol: "emptyCircle",
        symbolSize: 4,
        showSymbol: true,
        smooth: true,
        clip: true,
        step: false,
        color: "#1AA034",
        data: [
          ["1997", 2923.8],
          ["1998", 2886.3],
          ["1999", 2878.6],
          ["2000", 3003.4],
          ["2001", 3250.14],
          ["2002", 3472.13],
          ["2003", 4084],
          ["2004", 32],
          ["2005", 4695.8],
          ["2006", 5398.72],
          ["2007", 6008.7],
          ["2008", 6546.3],
          ["2009", 6761.01],
          ["2010", 7333.6],
          ["2011", 7904.54],
          ["2012", 8741.56],
          ["2013", 9080.54],
          ["2014", 9534.24],
          ["2015", 9451.28],
          ["2016", 9253.5],
          ["2017", 9256.25],
          ["2018", 9408.17],
          ["2019", 9621.11],
        ],
        hoverAnimation: true,
        label: {
          show: false,
          position: "top",
          margin: 8,
        },
        lineStyle: {
          show: true,
          width: 1,
          opacity: 1,
          curveness: 0,
          type: "solid",
        },
        // areaStyle: {
        //   color: {
        // x: 0,
        // y: 0,
        // x2: 0,
        // y2: 1, //改变渐变色的方向
        // colorStops: [
        //   {
        // offset: 0,
        // color: "#B5CEA8",
        //   },
        //   {
        // offset: 0.5,
        // color: "#2EC4D1",
        //   },
        //   {
        // offset: 0.7,
        // color: "#29ADB7",
        //   },
        //   {
        // offset: 0.9,
        // color: "1E8089",
        //   },
        // ],
        // global: false,
        //   },
        // },
      },
    ],
    legend: [
      {
        data: ["\u78b3\u6392\u653e\uff08Mt\uff09"],
        selected: {
          "\u78b3\u6392\u653e\uff08Mt\uff09": true,
        },
        show: true,
        padding: 50,
        itemGap: 10,
        itemWidth: 25,
        itemHeight: 14,
        x: "center",
      },
    ],
    tooltip: {
      show: true,
      trigger: "item",
      triggerOn: "mousemove|click",
      axisPointer: {
        type: "line",
      },
      showContent: true,
      alwaysShowContent: false,
      showDelay: 0,
      hideDelay: 100,
      textStyle: {
        fontSize: 14,
      },
      borderWidth: 0,
      padding: 5,
    },
    xAxis: [
      {
        type: "category",
        show: true,
        scale: false,
        nameLocation: "end",
        nameGap: 15,
        gridIndex: 0,
        inverse: false,
        offset: 0,
        splitNumber: 5,
        minInterval: 0,
        splitLine: {
          show: false,
          lineStyle: {
            show: true,
            width: 1,
            opacity: 1,
            curveness: 0,
            type: "solid",
          },
        },
        data: [
          "1997",
          "1998",
          "1999",
          "2000",
          "2001",
          "2002",
          "2003",
          "2004",
          "2005",
          "2006",
          "2007",
          "2008",
          "2009",
          "2010",
          "2011",
          "2012",
          "2013",
          "2014",
          "2015",
          "2016",
          "2017",
          "2018",
          "2019",
        ],
      },
    ],
    yAxis: [
      {
        type: "value",
        show: true,
        scale: false,
        nameLocation: "end",
        nameGap: 15,
        gridIndex: 0,
        axisTick: {
          show: true,
          alignWithLabel: false,
          inside: false,
        },
        inverse: false,
        offset: 0,
        splitNumber: 5,
        minInterval: 0,
        splitLine: {
          show: true,
          lineStyle: {
            show: true,
            width: 1,
            opacity: 1,
            curveness: 0,
            type: "solid",
          },
        },
      },
    ],
    title: [
      {
        text: "全球总碳排放量图",
        x: "center",
        y: "top",
        textStyle: {
          fontSize: 30,
          color: "black",
          itemGap: 10,
        },
      },
    ],
  };
=======
var chart_chart6 = echarts.init(
    document.getElementById("chart6"),
    "white",
    { renderer: "canvas" }
  );
  var option_chart6 = {
    animation: true,
    animationThreshold: 2000,
    animationDuration: 1000,
    animationEasing: "cubicOut",
    animationDelay: 0,
    animationDurationUpdate: 300,
    animationEasingUpdate: "cubicOut",
    animationDelayUpdate: 0,
    color: [
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
      "#918597",
    ],
    grid: {
      left: "2%",
      right: "2%",
      top: "15%",
      containLabel: true,
    },
    series: [
      {
        type: "line",
        name: "\u78b3\u6392\u653e\uff08Mt\uff09",
        connectNulls: false,
        symbol: "emptyCircle",
        symbolSize: 4,
        showSymbol: true,
        smooth: true,
        clip: true,
        step: false,
        color: "#1AA034",
        data: [
          ["1997", 2923.8],
          ["1998", 2886.3],
          ["1999", 2878.6],
          ["2000", 3003.4],
          ["2001", 3250.14],
          ["2002", 3472.13],
          ["2003", 4084],
          ["2004", 32],
          ["2005", 4695.8],
          ["2006", 5398.72],
          ["2007", 6008.7],
          ["2008", 6546.3],
          ["2009", 6761.01],
          ["2010", 7333.6],
          ["2011", 7904.54],
          ["2012", 8741.56],
          ["2013", 9080.54],
          ["2014", 9534.24],
          ["2015", 9451.28],
          ["2016", 9253.5],
          ["2017", 9256.25],
          ["2018", 9408.17],
          ["2019", 9621.11],
        ],
        hoverAnimation: true,
        label: {
          show: false,
          position: "top",
          margin: 8,
        },
        lineStyle: {
          show: true,
          width: 1,
          opacity: 1,
          curveness: 0,
          type: "solid",
        },
        // areaStyle: {
        //   color: {
        // x: 0,
        // y: 0,
        // x2: 0,
        // y2: 1, //改变渐变色的方向
        // colorStops: [
        //   {
        // offset: 0,
        // color: "#B5CEA8",
        //   },
        //   {
        // offset: 0.5,
        // color: "#2EC4D1",
        //   },
        //   {
        // offset: 0.7,
        // color: "#29ADB7",
        //   },
        //   {
        // offset: 0.9,
        // color: "1E8089",
        //   },
        // ],
        // global: false,
        //   },
        // },
      },
    ],
    legend: [
      {
        data: ["\u78b3\u6392\u653e\uff08Mt\uff09"],
        selected: {
          "\u78b3\u6392\u653e\uff08Mt\uff09": true,
        },
        show: true,
        padding: 50,
        itemGap: 10,
        itemWidth: 25,
        itemHeight: 14,
        x: "center",
      },
    ],
    tooltip: {
      show: true,
      trigger: "item",
      triggerOn: "mousemove|click",
      axisPointer: {
        type: "line",
      },
      showContent: true,
      alwaysShowContent: false,
      showDelay: 0,
      hideDelay: 100,
      textStyle: {
        fontSize: 14,
      },
      borderWidth: 0,
      padding: 5,
    },
    xAxis: [
      {
        type: "category",
        show: true,
        scale: false,
        nameLocation: "end",
        nameGap: 15,
        gridIndex: 0,
        inverse: false,
        offset: 0,
        splitNumber: 5,
        minInterval: 0,
        splitLine: {
          show: false,
          lineStyle: {
            show: true,
            width: 1,
            opacity: 1,
            curveness: 0,
            type: "solid",
          },
        },
        data: [
          "1997",
          "1998",
          "1999",
          "2000",
          "2001",
          "2002",
          "2003",
          "2004",
          "2005",
          "2006",
          "2007",
          "2008",
          "2009",
          "2010",
          "2011",
          "2012",
          "2013",
          "2014",
          "2015",
          "2016",
          "2017",
          "2018",
          "2019",
        ],
      },
    ],
    yAxis: [
      {
        type: "value",
        show: true,
        scale: false,
        nameLocation: "end",
        nameGap: 15,
        gridIndex: 0,
        axisTick: {
          show: true,
          alignWithLabel: false,
          inside: false,
        },
        inverse: false,
        offset: 0,
        splitNumber: 5,
        minInterval: 0,
        splitLine: {
          show: true,
          lineStyle: {
            show: true,
            width: 1,
            opacity: 1,
            curveness: 0,
            type: "solid",
          },
        },
      },
    ],
    title: [
      {
        text: "全球总碳排放量图",
        x: "center",
        y: "top",
        textStyle: {
          fontSize: 30,
          color: "black",
          itemGap: 10,
        },
      },
    ],
  };
>>>>>>> acc4185 (third commit)
  chart_chart6.setOption(option_chart6);