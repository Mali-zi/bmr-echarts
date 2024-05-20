import React from "react";
import * as echarts from "echarts";
import ReactEChart from "echarts-for-react";
import "./BgComponent.css";

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
  const maxValue = Math.max(...chartValues) * 1.3;
  const maxValueArr: number[] = new Array(chartValues.length).fill(maxValue);

  const option = {
    textStyle: {
      color: "#6F6F6F",
    },
    tooltip: {},
    xAxis: {
      data: chartNames,
      axisTick: { show: false },
      axisLine: {
        show: true,
        lineStyle: {
          color: "#878787",
        },
      },
      axisLabel: {
        show: true,
        rotate: 45,
      },
    },
    yAxis: {
      name: "%",
      nameLocation: "center",
      nameTextStyle: {
        fontSize: "14",
        lineHeight: 56,
      },
      max: maxValue,
      axisLine: {
        show: true,
        lineStyle: {
          color: "#878787",
        },
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: "#878787",
        },
      },
      splitLine: { show: false },
    },
    animationDurationUpdate: 1200,
    series: [
      {
        type: "bar",
        label: {
          show: true,
          position: "insideTop",
          color: "#6F6F6F",
          distance: 34,
          fontSize: 14,
          formatter: (d) => {
            const foundItem = chartData.find((el, index) => d.name === el.name);
            return `${foundItem.value}%`;
          },
        },
        itemStyle: {
          color: (d) => {
            const foundItem = chartData.find((el, index) => d.name === el.name);
            if (foundItem && foundItem.value < goolValue * 0.95)
              return "rgba(223, 154, 154, 0.3)";
            if (
              foundItem &&
              foundItem.value >= goolValue * 0.95 &&
              foundItem.value < goolValue * 0.99
            )
              return "rgba(255, 241, 169, 0.3)";
            if (
              foundItem &&
              foundItem.value >= goolValue * 0.99 &&
              foundItem.value <= goolValue * 1.01
            )
              return "rgba(182, 232, 203, 0.3)";
            if (
              foundItem &&
              foundItem.value > goolValue * 1.01 &&
              foundItem.value <= goolValue * 1.05
            )
              return "rgba(255, 241, 169, 0.3)";
            if (foundItem && foundItem.value > goolValue * 1.05)
              return "rgba(223, 154, 154, 0.3)";
          },
        },
        silent: true,
        barWidth: "100%",
        barGap: "-95%",
        data: maxValueArr,
      },
      {
        type: "bar",
        label: {
          show: true,
          position: "top",
          formatter: "{c}%",
          color: "#6F6F6F",
          distance: 8,
          fontSize: 14,
        },
        markLine: {
          symbol: ["none", "none"],
          data: [
            {
              type: "average",
              name: "Среднее1",
              lineStyle: {
                  type: "solid",
                  width: 2,
                  color: '#5ab07f',
              },
            },
          ],
        },
        itemStyle: {
          borderColor: "rgba(135, 135, 135, 1)",
          borderWidth: 1,
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
        barWidth: "90%",
        z: 2,
        data: chartValues,
      },
    ],
  };

  return (
    <div className="container">
      <ReactEChart
        option={option}
        style={{ height: "100%" }}
        opts={{ renderer: "svg" }} // use svg to render the chart
        // opts={{ locale: 'FR' }}
      />
      <div className="legend">
        <div className="legend-item">
          <div className="red-circle"></div>
          <div className="legend-text">Отклонение от плана более 5%</div>
        </div>
        <div className="legend-item">
          <div className="yellow-circle"></div>
          <div className="legend-text">Отклонение от плана от 1% до 5%</div>
        </div>
        <div className="legend-item">
          <div className="green-circle"></div>
          <div className="legend-text">Менее 1%</div>
        </div>
        <div className="legend-item">
          <div className="green-line"></div>
          <div className="legend-text">В среднем по городу</div>
        </div>
      </div>
    </div>
  );
}
