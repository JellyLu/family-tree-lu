import { Component } from "react";
import { View } from "@tarojs/components";
import { EChart } from "../../echarts-taro3-react";

import "./index.scss";

export default class Index extends Component {
  componentDidMount() {
    const option = {
      toolbox: {
        show : true,
        feature : {
          mark : {show: true},
          dataView : {show: true, readOnly: false},
          restore : {show: true},
          saveAsImage : {show: true}
        }
      },
      series: [
        {
          type: 'graph',
          layout: 'none',
          label: { show: true, padding: 10 },
          lineStyle: {
            join: 'round',
            width: 2,
          },
          autoCurveness: true,
          edgeShape: "polyline",
          edgeForkPosition: "50%",
          coordinateSystem: "view",
          itemStyle: { borderWidth: 1,},
          data: [
            { name: '甲', category: 0, x: 100, y: 100 },
            { name: '甲夫人', category: 2, x: 200, y: 100 },
            { name: '乙', category: 1, x: 50, y: 200 },
            { name: '乙丈夫', category: 3, x: 150, y: 200 },
            { name: '丙', category: 0, x: 250, y: 200 },
          ],
          links: [
            { source: '甲', target: '甲夫人' },
            { source: '甲', target: '乙' },
            { source: '甲夫人', target: '乙' },
            { source: '甲', target: '丙' },
            { source: '甲夫人', target: '丙' },
            { source: '乙', target: '乙丈夫' },
          ],
          categories: [
            {
              name: '子',
              itemStyle: {color: "white"},
              label: { backgroundColor: "blue"},
            },
            {
              name: '女',
              itemStyle: {color: "white"},
              label: { backgroundColor: "green"},
            },
            {
              name: '妻',
              itemStyle: {color: "white"},
              label: { backgroundColor: "red"},
            },
            {
              name: '婿',
              itemStyle: {color: "white"},
              label: { backgroundColor: "purple"},
            },
          ],
        },
      ],
    };


    this.chart.refresh(option);
  }

  chart: any;

  chartRef = (node) => (this.chart = node);

  render() {
    return (
        <View className='family-tree'>
          <EChart ref={this.chartRef} canvasId='pie-chart' />
        </View>
    );
  }
}
