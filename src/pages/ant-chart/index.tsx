import {FlowAnalysisGraph} from '@ant-design/graphs';
import {data} from "./data";
import {View} from "@tarojs/components";
import type {FlowAnalysisGraphConfig} from "@ant-design/graphs/es/components/flow-analysis-graph";
import { NodeConfig } from "@ant-design/graphs/es/interface";

const AntChart = () => {
    const config: FlowAnalysisGraphConfig = {
        data,
        customLayout: true,
        autoFit: false,
        fitCenter: false,
        nodeCfg: {
            type: 'rect',
            size: [50, 50],
            anchorPoints: (node: NodeConfig) => {
                console.log('---node', node);
                return ([
                    [0.5, 1],
                    [0.5, 0],
                ]);
            },
        },
        edgeCfg: {
            type: 'polyline',
        },
        behaviors: ['drag-canvas', 'zoom-canvas', 'drag-node'],
        width: window.screen.width,
        height: window.screen.height,
    };

    return (
        <View>
            <FlowAnalysisGraph {...config} />
        </View>
    );
};

export default AntChart;
