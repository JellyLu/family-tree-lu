import { Component } from "react";
import { View } from "@tarojs/components";
import { EChart } from "../../echarts-taro3-react";

import "./index.scss";

export default class Index extends Component {
  componentDidMount() {
    const option = {
      title: {
        text: '族谱图',
      },
      series: [
        {
          type: 'tree',
          data: [
            {
              name: '父亲',
              children: [
                {
                  name: '儿子1',
                  children: [
                    {
                      name: '女儿1',
                      children: [

                      ]
                    },
                    {
                      name: '儿子2',
                    },
                  ],
                },
                {
                  name: '儿子2',
                },
              ],
            },
          ],
          expandAndCollapse: true,
          layout: "radial"
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
