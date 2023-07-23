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
          layout: 'force',
          force: {
            repulsion: 300,
            layoutAnimation: false,
            initLayout: 'x',
            edgeLength: 100,
          },
          label: { show: true, padding: 10 },
          lineStyle: { join: 'round' },
          itemStyle: { borderWidth: 1,},
          data: [
            { name: '甲', category: 0 },
            { name: '甲夫人', category: 2 },
            { name: '乙', category: 1 },
            { name: '乙丈夫', category: 3 },
            { name: '丙', category: 0 },
          ],
          links: [
            { source: '甲', target: '甲夫人' },
            { source: '甲', target: '乙' },
            // { source: '甲夫人', target: '乙' },
            { source: '甲', target: '丙' },
            // { source: '甲夫人', target: '丙' },
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
