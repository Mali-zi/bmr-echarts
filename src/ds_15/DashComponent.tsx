import React from "react";
import * as echarts from "echarts";
import ReactEChart from "echarts-for-react";

export default function DashComponent() {
  const options = {
    title: {
      text: "Chart Example",
      subtext: "New Chart Example",
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["Всего коек", "Занято коек"],
    },
    toolbox: {
      show: true,
      feature: {
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ["line", "bar"] },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    calculable: true,
    xAxis: [
      {
        type: "category",
        data: [
          "ЦГБ №1",
          "ЦГБ №2",
          "ЦГБ №3",
          "ЦГБ №4",
          "ЦГБ №5",
          "ЦГБ №6",
          "ЦГБ №7",
          "ЦГБ №8",
          "ЦГБ №9",
          "ЦГБ №10",
          "ЦГБ №11",
          "ЦГБ №12",
        ],
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        name: "Всего коек",
        type: "bar",
        data: [
          2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3,
        ],
        markPoint: {
          data: [
            { type: "max", name: "Тест3" },
            { type: "min", name: "Тест4" },
          ],
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
        name: "Занято коек",
        type: "bar",
        data: [
          2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3,
        ],
        markPoint: {
          data: [
            { name: "Тест1", value: 182.2, xAxis: 7, yAxis: 183 },
            { name: "Тест2", value: 2.3, xAxis: 11, yAxis: 3 },
          ],
        },
        markLine: {
          symbol: ["none", "none"],
          data: [
            {
              symbol: "none",
              name: "GOAL",
              yAxis: 90,
              label: {
                normal: {
                  show: true,
                  position: "insideEndTop",
                },
              },
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
    ],
  };

  return (
    <ReactEChart
      option={options}
      style={{ height: '100%' }}
      opts={{ renderer: "svg" }} // use svg to render the chart
      // opts={{ locale: 'FR' }}
    />
  );
}
