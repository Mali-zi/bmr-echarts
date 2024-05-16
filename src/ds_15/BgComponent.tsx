import React from "react";
import * as echarts from "echarts";
import ReactEChart from "echarts-for-react";

const goolValue = 100;
interface IItem {
  name: string;
  value: number;
}

export default function BgComponent() {
  const chartData = [
    { name: "ЦГБ №1", value: 120 },
    { name: "ЦГБ №2", value: 80 },
    { name: "ЦГБ №3", value: 102 },
    { name: "ЦГБ №4", value: 90 },
    { name: "ЦГБ №5", value: 70 },
    { name: "ЦГБ №6", value: 98 },
    { name: "ЦГБ №7", value: 70 },
    { name: "ЦГБ №8", value: 135 },
    { name: "ЦГБ №9", value: 80 },
    { name: "ЦГБ №10", value: 60 },
    { name: "ЦГБ №11", value: 100 },
    { name: "ЦГБ №12", value: 110 },
    { name: "ЦГБ №13", value: 103 },
    { name: "ЦГБ №14", value: 97 },
    { name: "ЦГБ №15", value: 101 },
  ];

  const sortedChartData = chartData.sort((a, b) => b.value - a.value);
  const chartValues = sortedChartData.map((d) => d.value);
  const chartNames = sortedChartData.map((d) => d.name);
  const maxValue = Math.max(...chartValues)*1.5;

  let group1: IItem[] = [];
  let group2: IItem[] = [];
  let group3: IItem[] = [];
  let group4: IItem[] = [];
  let group5: IItem[] = [];

  chartData.map((d) => {
    if (d.value < goolValue * 0.95) group1 = [...group1, d];
    if (d.value >= goolValue * 0.95 && d.value < goolValue * 0.99)
      group2 = [...group2, d];
    if (d.value >= goolValue * 0.99 && d.value <= goolValue * 1.01)
      group3 = [...group3, d];
    if (d.value > goolValue * 1.01 && d.value <= goolValue * 1.05)
      group4 = [...group4, d];
    if (d.value > goolValue * 1.05) group5 = [...group5, d];
  });

  const groups = [
    {
      name: "group1",
      arr: group1.sort((a, b) => b.value - a.value),
      background: "rgba(223, 154, 154, 0.3)",
    },
    {
      name: "group2",
      arr: group2.sort((a, b) => b.value - a.value),
      background: "rgba(255, 241, 169, 0.3)",
    },
    {
      name: "group3",
      arr: group3.sort((a, b) => b.value - a.value),
      background: "rgba(182, 232, 203, 0.3)",
    },
    {
      name: "group4",
      arr: group4.sort((a, b) => b.value - a.value),
      background: "rgba(255, 241, 169, 0.3)",
    },
    {
      name: "group5",
      arr: group5.sort((a, b) => b.value - a.value),
      background: "rgba(223, 154, 154, 0.3)",
    },
  ];

  const conditions = [
    "Более +5%",
    "Менее +5% и более 1%",
    "Менее +1% и более -1%",
    "Менее -1% и более -5%",
    "Менее -5%",
  ];

  const markAreaData = groups
    .map((group, index) => {
      if (group.arr.length > 0) {
        return [
          {
            name: conditions[index],
            xAxis: group.arr[0].name,
            yAxis: 0,
            itemStyle: {
              color: group.background,
            },
          },
          {
            xAxis: group.arr[group.arr.length - 1].name,
            yAxis: maxValue,
            itemStyle: {
              color: group.background,
            },
          },
        ];
      }
    })
    .filter((item) => item !== undefined);

  const chartOption = {
    xAxis: {
      type: "category",
      data: [...chartNames],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        type: "bar",
        data: [...chartValues],
        itemStyle: {
          borderColor: "rgba(135, 135, 135, 1)",
          borderWidth: 2,
          barBorderRadius: [10, 10, 0, 0],
          color: (d) => {
            if (d.value < goolValue * 0.95) return "rgba(223, 154, 154, 1)";
            if (d.value >= goolValue * 0.95 && d.value < goolValue * 0.99)
              return "rgba(255, 241, 169, 1)";
            if (d.value >= goolValue * 0.99 && d.value <= goolValue * 1.01)
              return "rgba(182, 232, 203, 1)";
            if (d.value > goolValue * 1.01 && d.value <= goolValue * 1.05)
              return "rgba(255, 241, 169, 1)";
            if (d.value > goolValue * 1.05) return "rgba(223, 154, 154, 1)";
          },
        },
        markArea: {
          data: markAreaData,
        },
      },
    ],
  };

  return (
    <ReactEChart
      option={chartOption}
      style={{ height: 400 }}
      opts={{ renderer: "svg" }} // use svg to render the chart
      // opts={{ locale: 'FR' }}
    />
  );
}
