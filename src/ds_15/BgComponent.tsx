import React from "react";
import * as echarts from "echarts";
import ReactEChart from "echarts-for-react";

export default function BgComponent() {
  const data = [
    { product: "Matcha Latte", count: 823, score: 95.8 },
    { product: "Milk Tea", count: 235, score: 81.4 },
    { product: "Cheese Cocoa", count: 1042, score: 91.2 },
    { product: "Walnut Brownie", count: 988, score: 76.9 },
  ];
  const colors = ["red", "green", "blue", "orange", "gray", "violet", "yellow"];
  const color = (d: number) => {
    if (d >= 130) return "red";
    if (d >= 80) return "green";
    if (d >= 30) return "orange";
  };

  const series = data.map((d, index) => ({
    data: [d],
    type: "bar",
    showBackground: true,
    backgroundStyle: {
      color: color(d),
    },
  }));

  const options = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Tdc", "Kab"],
    },
    yAxis: {
      type: "value",
    },
    series: series,
  };

  const option = {
    xAxis: {
      type: "category",
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [
          { value: 400, name: "Searching Engine" },
          { value: 335, name: "Direct" },
          { value: 310, name: "Email" },
          { value: 274, name: "Alliance Advertisement" },
          { value: 235, name: "Video Advertisement" },
        ],
        type: "bar",
        barCategoryGap: "50%",
        showBackground: true,
        backgroundStyle: {
          color: "red",
        },
      },
    ],
  };

  const colorPalette = [
    "#d87c7c",
    "#919e8b",
    "#d7ab82",
    "#6e7074",
    "#61a0a8",
    "#efa18d",
    "#787464",
    "#cc7e63",
    "#724e58",
    "#4b565b",
  ];

  const newOption = {
    showBackground: true,

    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [
          {
            value: 120,
            itemStyle: {
              color: "blue",
              showBackground: true,
            },
          },
          {
            value: 200,
            itemStyle: { color: "red" },
            backgroundStyle: {
              color: "blue",
            },
          },
          {
            value: 150,
            itemStyle: { color: "green" },
          },
        ],
        type: "bar",
      },
    ],
    graph: {
      color: colorPalette,
    },
  };

  const barData = {
    legendData: ["Sales", "HR", "Engineering"],
    greenSeriesData: ["-", 96.38, 98.43],
    yellowSeriesData: [44.23, "-", "-"],
  };

  var barOption = {
    title: {
      text: "2019 Progress",
      left: "center",
    },
    xAxis: {
      type: "category",
      data: barData.legendData,
    },
    yAxis: {
      type: "value",
      axisLabel: {
        formatter: function (val) {
          return val + "%";
        },
      },
    },
    series: [
      {
        data: barData.greenSeriesData,
        type: "bar",
        stack: "colorbyvalue",
        label: {
          show: true,
          position: "insideTop",
          formatter: "{c}%",
          color: "#000000",
        },
        barWidth: 50,
        itemStyle: {
          color: "green",
        },
      },
      {
        data: barData.yellowSeriesData,
        type: "bar",
        stack: "colorbyvalue",
        label: {
          show: true,
          position: "insideTop",
          formatter: "{c}%",
          color: "#000000",
        },
        barWidth: 50,
        itemStyle: {
          color: "yellow",
        },
      },
    ],
    animation: false,
  };

  const elseOption = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [120, 200, 150],
        type: "bar",
        barWidth: "100%",
        colorBy: 'data',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
        },
        itemStyle: {
          borderRadius : [50, 50, 0, 0], // Specify the border radius
          borderColor: 'green',
          borderWidth: 1
      }
        // itemStyle: {
        //   // HERE IS THE IMPORTANT PART
        //   color: (seriesIndex) => console.log(colors[seriesIndex.dataIndex]), // you will get access to array data passed and its index values
        // },
      },
    ],
    graph: {
      color: colorPalette,
    },
  };

  return (
    <ReactEChart
      option={elseOption}
      style={{ height: 400 }}
      opts={{ renderer: "svg" }} // use svg to render the chart
      // opts={{ locale: 'FR' }}
    />
  );
}
