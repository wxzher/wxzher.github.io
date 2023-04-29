Highcharts.chart("map", {


    chart: {
        type: "packedbubble",
        height: "850px",
        backgroundColor: "#222",
        color: "#fff",
        // backgroundColor: {
        // linearGradient: [0, 0, 500, 500],
        // stops: [
        // [0, 'rgb(255, 0, 255)'],
        // [1, 'rgb(240, 240, 255)']
        // ]
        // },
        borderWidth: 2,
        plotBackgroundColor: '#222',
        plotShadow: true,
        plotBorderWidth: 0
    },
    title: " ",
    legend: {
        itemStyle: {
            color: '#FFFFFF' // 设置图例文字颜色为白色
        }
    },
    exporting: {
        enabled: false // 禁用导出按钮
    },


    tooltip: {
        useHTML: true,
        pointFormat: "<b>{point.name}:</b> {point.y} mtCO<sub>2</sub>e",
    },
    plotOptions: {
        packedbubble: {
            minSize: "30%",
            maxSize: "120%",
            zMin: 0,
            zMax: 1000,
            layoutAlgorithm: {
                gravitationalConstant: 0.05,
                splitSeries: true,
                seriesInteraction: false,
                dragBetweenSeries: true,
                parentNodeLimit: true,
            },

            dataLabels: {
                enabled: true,
                format: "{point.name}",
                filter: {
                    property: "y",
                    operator: ">",
                    value: 250,
                },
                style: {
                    color: "black",
                    textOutline: "none",
                    fontWeight: "normal",
                },
            },
        },
    },
    series: [
        {
            name: "欧洲",
            data: [
                { name: "Croatia", value: 12.18 },
                { name: "Belgium", value: 93.17 },
                { name: "Czech Republic", value: 90.47 },
                { name: "Netherlands", value: 147.7 },
                { name: "Spain", value: 226.09 },
                { name: "Ukraine", value: 162.54 },
                { name: "Poland", value: 262.22 },
                { name: "France", value: 238.53 },
                { name: "Romania", value: 51.06 },
                { name: "United Kingdom", value: 337.96 },
                { name: "Turkey", value: 368.19 },
                { name: "Italy", value: 304.42 },
                { name: "Greece", value: 61.39 },
                { name: "Austria", value: 57.64 },
                { name: "Belarus", value: 36.16 },
                { name: "Serbia", value: 45.86 },
                { name: "Finland", value: 47.65 },
                { name: "Bulgaria", value: 5.34 },
                { name: "Portugal", value: 44.93 },
                { name: "Norway", value: 17.02 },
                { name: "Sweden", value: 18.69 },
                { name: "Hungary", value: 48.27 },
                { name: "Switzerland", value: 35.14 },
                { name: "Denmark", value: 30.55 },
                { name: "Slovakia", value: 30.01 },
                { name: "Ireland", value: 32.96 },
                { name: "Croatia", value: 12.18 },
                { name: "Estonia", value: 12.13 },
                { name: "Slovenia", value: 13.94 },
                { name: "Lithuania", value: 11.1 },
                { name: "Luxembourg", value: 9.21 },
                { name: "Macedonia", value: 8.3 },
                { name: "Moldova", value: 8.97 },
                { name: "Latvia", value: 4.79 },
                { name: "Cyprus", value: 6.94 },

            ],
        },
        {
            name: "非洲",
            data: [
                { name: "Senegal", value: 14.95 },
                { name: "Cameroon", value: 43.19 },
                { name: "Zimbabwe", value: 98.92 },
                { name: "Ghana", value: -4.88 },
                { name: "Kenya", value: 14.66 },
                { name: "Sudan", value: 41.63 },
                { name: "Tunisia", value: 26.12 },
                { name: "Angola", value: 60.8 },
                { name: "Libya", value: 56.8 },
                { name: "Morocco", value: 69.54 },
                { name: "Ethiopia", value: 50.07 },
                { name: "Nigeria", value: 161.27 },
                { name: "South Africa", value: 446.19 },
                { name: "Egypt", value: 249.55 },
                { name: "Algeria", value: 171.45 },
            ],
        },
        {
            name: "大洋洲",
            data: [
                { name: "Australia", value: 388.71 },
                { name: "New Zealand", value: 23.39 },
            ],
        },
        {
            name: "北美洲",
            data: [
                { name: "Costa Rica", value: 0.94 },
                { name: "Honduras", value: 15.74 },
                { name: "Jamaica", value: 8.57 },
                { name: "Panama", value: 17.74 },
                { name: "Guatemala", value: 22.58 },
                { name: "Cuba", value: 22.86 },
                { name: "USA", value: 4585.99 },
                { name: "Canada", value: 615.48 },
                { name: "Mexico", value: 463.71 },
            ],
        },
        {
            name: "南美洲",
            data: [
                { name: "El Salvador", value: 8.88 },
                { name: "Uruguay", value: 4.72 },
                { name: "Bolivia", value: 89.72 },
                { name: "Ecuador", value: 65.44 },
                { name: "Chile", value: 33.51 },
                { name: "Peru", value: 146.54 },
                { name: "Colombia", value: 164.01 },
                { name: "Brazil", value: 818.6 },
                { name: "Argentina", value: 197.8 },
                { name: "Venezuela", value: 155.47 },
            ],
        },
        {
            name: "亚洲",
            data: [
                { name: "Nepal", value: 16.39 },
                { name: "Georgia", value: 10.11 },
                { name: "Kyrgyzstan", value: 6.78 },
                { name: "Afghanistan", value: 6.23 },
                { name: "Myanmar", value: 139.37 },
                { name: "Mongolia", value: 26.17 },
                { name: "Sri Lanka", value: 25.69 },
                { name: "Bahrain", value: 33.25 },
                { name: "Yemen", value: 11.1 },
                { name: "Jordan", value: 24.63 },
                { name: "Lebanon", value: 27.87 },
                { name: "Azerbaijan", value: 33.59 },
                { name: "Singapore", value: 47.41 },
                { name: "Syria", value: 25.72 },
                { name: "North Korea", value: 59.33 },
                { name: "Israel", value: 62.73 },
                { name: "Turkmenistan", value: 72.87 },
                { name: "Oman", value: 76.05 },
                { name: "Qatar", value: 91.97 },
                { name: "Philippines", value: 147.88 },
                { name: "Kuwait", value: 92.65 },
                { name: "Uzbekistan", value: 113.34 },
                { name: "Iraq", value: 175.05 },
                { name: "Pakistan", value: 197.57 },
                { name: "Vietnam", value: 324.0 },
                { name: "Malaysia", value: 334.48 },
                { name: "Kazakhstan", value: 209.12 },
                { name: "Thailand", value: 280.13 },
                { name: "Indonesia", value: 1475.21 },
                { name: "Saudi Arabia", value: 523.78 },
                { name: "Japan", value: 1049.5 },
                { name: "China", value: 10057.12 },
                { name: "India", value: 2422.03 },
                { name: "Russia", value: 1145.09 },
                { name: "Iran", value: 630.07 },
                { name: "South Korea", value: 564.99 },

            ],
        },
    ],
});