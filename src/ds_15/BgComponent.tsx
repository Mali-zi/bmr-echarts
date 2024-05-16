import React from "react";
import * as echarts from "echarts";
import ReactEChart from "echarts-for-react";

export default function BgComponent() {
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
      opts={{ renderer: "svg" }} // use svg to render the chart
      // opts={{ locale: 'FR' }}
    />
  );
}
