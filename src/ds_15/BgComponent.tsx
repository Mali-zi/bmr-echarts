import React from "react";
import * as echarts from "echarts";
import ReactEChart from "echarts-for-react";

export default function BgComponent() {
  const option4 = {
    color: ["#007BFF", "#4cabce", "#006699", "#F0AD4E80"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        crossStyle: {
          color: "#999",
        },
      },
    },
    grid: {
      left: "20",
      right: "20",
      bottom: "20",
      top: "130",
      containLabel: true,
    },
    legend: {
      data: ["The previous year", "last year", "this year", "average"],
    },
    xAxis: {
      type: "category",
      data: ["EN ECTION ", " 11 month ", "December", "Jan"],
      boundaryGap: true,
      splitArea: {
        show: true,
        interval: 0,
        areaStyle: {
          color: ["red", "orange", "gray", "green"],
        },
      },
    },
    yAxis: [
      {
        type: "value",
        min: 0,
        max: 250,
        interval: 50,
      },
    ],
    series: [
      {
        Name: "The previous year",
        type: "bar",
        barGap: 0,
        roundCap: true,
        label: {
          show: true,
          position: "insideBottom",
          color: "red",
        },
        data: [230, 180, 80, 130],
      },
      {
        Name: "last year",
        type: "bar",
        data: [220, 154, 90, 150],
      },
      {
        Name: "This year",
        type: "bar",
        data: [220, 130, 90, 180],
      },
      {
        Name: "average",
        type: "line",
        step: "middle",
        data: [223, 155, 87, 153],
      },
    ],
  };

  const option = {
    legend: {},
    tooltip: {},
    data: [
      {
        name: "2012",
        value: 41,
        itemStyle: {
          color: "orange",
        },
      },
      {
        name: "2013",
        value: 50,
        itemStyle: {
          color: "orange",
        },
      },
      {
        name: "2014",
        value: 70,
        itemStyle: {
          color: "orange",
        },
      },
    ],
    dataset: {
      source: [
        //     // ["2012", "2013", "2014", "2015"],
        ["Более 10%", 48, 55, 67, 76],
        ["От 5% до 10%", 41, 50, 60, 56],
        ["До 1%", 41, 50, 60, 47],
        ["От -5% до -10%", 41, 50, 60, 28],
        ["Менее -10%", 41, 50, 60, 34],

        //     // ["От 5% до 10%", 86.5, 92.1, 85.7, 83.1],
        //     // ["До 1%", 24.1, 67.2, 79.5, 86.4],
        //     // ["От -5% до -10%", 24.1, 67.2, 79.5, 86.4],
        //     // ["Менее -10%", 24.1, 67.2, 79.5, 86.4]
      ],
    },
    xAxis: {
      type: "category",
      boundaryGap: true,
      splitArea: {
        show: true,
        interval: 0,
        areaStyle: {
          color: ["#f7a8a8", "#f1f7a8", "#b3f7a8", "#f1f7a8", "#f7a8a8"],
        },
      },
    },
    yAxis: {
      type: "value",
    },

    series: [
      {
        type: "bar",
        legendHoverLink: true,
        roundCap: true,
        // stack: 'colorbyvalue',
        colorBy: "data",
        itemStyle: {
          color: "green",
          borderRadius: [50, 50, 0, 0], // Specify the border radius
          borderColor: "green",
          borderWidth: 1,
        },
        markLine: {
          symbol: ["none", "none"],
          data: [
            {
              type: "average",
              name: "Среднее1",
              lineStyle: {
                normal: {
                  type: "solid",
                  width: 2,
                },
              },
            },
          ],
        },
      },
      {
        type: "bar",
        colorBy: "data",
        z: 10,
      },
      {
        type: "bar",
        colorBy: "data",
      },
      {
        type: "bar",
        colorBy: "data",
      },
      {
        type: "bar",
        colorBy: "data",
      },
    ],
  };

  const option3 = {
    backgroundColor: "#dde0dc",
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        crossStyle: {
          color: "#999",
        },
      },
    },
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      boundaryGap: true,
      splitArea: {
        show: true,
        interval: 0,
        areaStyle: {
          color: ["#f7a8a8", "#f1f7a8", "#b3f7a8", "#f1f7a8", "#f7a8a8"],
        },
      },
    },
    yAxis: {
      type: "value",
    },
    // series: [
    //   {
    //     data: [120, 200, 150, 80, 70, 110, 130],
    //     type: "bar",
    //   },
    // ],
    series: [
      {
        type: "bar",
        // Styles for normal state.
        itemStyle: {
          // Color of the point.
          color: "rgba(47, 158, 30, 1)",
        },
        label: {
          show: true,
          // Text of labels.
          formatter: "This is a normal label.",
        },
        emphasis: {
          focus: "series",
          itemStyle: {
            // Color in emphasis state.
            color: "rgba(47, 158, 30, 0.5)",
          },
          label: {
            show: true,
            fontSize: "16",
            fontWeight: "bold",
            formatter: function (param) {
              console.log(param);
            },
            position: "top",
          },
        },
        data: [
          20,
          {
            value: 22,
            itemStyle: {
              normal: {
                color: "green",
              },
            },
          },
          {
            value: 29,
            itemStyle: {
              normal: {
                color: "green",
              },
            },
          },
          25,
          27,
          30,
          25,
        ],
      },
    ],
  };

  const option5 = {
    title: {
      text: "Asynchronous Loading Example",
    },
    tooltip: {},
    legend: {
      data: ["Sales"],
    },
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "Sales",
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "bar",
        showBackground: true,
        backgroundStyle: {
          color: "rgba(220, 220, 220, 0.8)",
        },
      },
    ],
  };

  const chartData = [
    { name: "ЦГБ №1", value: 120 },
    { name: "ЦГБ №2", value: 80 },
    { name: "ЦГБ №3", value: 110 },
    { name: "ЦГБ №4", value: 90 },
    { name: "ЦГБ №5", value: 70 },
    { name: "ЦГБ №6", value: 50 },
    { name: "ЦГБ №7", value: 70 },
    { name: "ЦГБ №8", value: 45 },
    { name: "ЦГБ №9", value: 80 },
    { name: "ЦГБ №10", value: 60 },
    { name: "ЦГБ №11", value: 100 },
    { name: "ЦГБ №12", value: 110 },
    { name: "ЦГБ №13", value: 130 },
    { name: "ЦГБ №14", value: 140 },
    { name: "ЦГБ №15", value: 150 },
  ];

  const chartValues = chartData.map((d) => d.value).sort((a, b) => b - a);
  const maxValue = Math.max(...chartValues);
  const maxValueArr: number[] = new Array(chartValues.length).fill(maxValue);
  const chartNames = chartData.map((d) => d.name);

  const option6 = {
    xAxis: {
      data: chartNames,
      axisTick: { show: false },
    },
    yAxis: {
      splitLine: { show: false },
    },
    animationDurationUpdate: 1200,
    series: [
      {
        type: "bar",
        itemStyle: {
          color: (d) => {
            console.log("d", d);
            if (chartValues[d.dataIndex] <= 60) return "#ffbcb8";
            if (chartValues[d.dataIndex] <= 80) return "#f9ffb8";
            if (chartValues[d.dataIndex] > 80 && chartValues[d.dataIndex] <= 110) return "#c1ffb8";
            if (chartValues[d.dataIndex] > 110 && chartValues[d.dataIndex] <= 130) return "#f9ffb8";
            if (chartValues[d.dataIndex] > 130) return "#ffbcb8";
          },
        },
        silent: true,
        barWidth: "100%",
        barGap: "-95%",
        data: maxValueArr,
      },
      {
        type: "bar",
        itemStyle: {
          color: (d) => {
            if (d.value <= 60) return "red";
            if (d.value > 60 && d.value <= 80) return "yellow";
            if (d.value > 80 && d.value <= 110) return "green";
            if (d.value > 110 && d.value <= 130) return "yellow";
            if (d.value > 130) return "red";

          },
        },
        barWidth: "90%",
        z: 10,
        data: chartValues,
      },
    ],
  };

  return (
    <ReactEChart
      option={option6}
      style={{ height: 400 }}
      // showLoading={true}
      opts={{ renderer: "svg" }} // use svg to render the chart
      // opts={{ locale: 'FR' }}
    />
  );
}
