var chart_chart14 = echarts.init(
    document.getElementById("chart15"),
    "white",
    { renderer: "canvas" }
  );
  var option_chart14 = {
    grid: {
      left: "2%",
      right: "2%",
      top: "0%",
      bottom:"0%",
      containLabel: true,
    },
    title: {
      text: "新能源汽车销量构成图",
      x: "center",
      textStyle: {
        fontSize: 30,
        color: "black",
      },
    },
    animation: true,
    animationThreshold: 2000,
    animationDuration: 1000,
    animationEasing: "cubicOut",
    animationDelay: 0,
    animationDurationUpdate: 300,
    animationEasingUpdate: "cubicOut",
    animationDelayUpdate: 0,
    series: [
      {
        type: "liquidFill",
        data: [
          { value: 0.7, name: "纯电动乘用车" },
          { value: 0.205, name: "插电式混合动力乘用车" },
          { value: 0.091, name: "纯电动商用车" },
          { value: 0.004, name: "插电式混合动力商用车" },
        ],
        waveAnimation: true,
        animationDuration: 2000,
        animationDurationUpdate: 1000,
        color: ["#294D99", "#156ACF", "#1598ED", "#45BDFF"],
        shape: "circle",
        backgroundStyle: {},
        outline: {
          show: false,
          borderDistance: 8,
        },
        label: {
          show: true,
          position: "inside",
          margin: 8,
          fontSize: 50,
        },
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
  };
  chart_chart14.setOption(option_chart14);