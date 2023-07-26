import {FlowAnalysisGraph} from '@ant-design/graphs';
import {data} from "./data";
import {View} from "@tarojs/components";

const AntChart = () => {
    const config = {
        data,
        layout: {
            rankdir: 'TB',
            // ranksepFunc: () => 20,
        },
        nodeCfg: {
            type: 'rect',
            size: [50, 50],
            anchorPoints: [
                [0.5, 1],
                [0.5, 0],
            ]
        },
        edgeCfg: {
            type: 'polyline',
        },
        markerCfg: (cfg) => {
            return {
                position: 'bottom',
                show: data.edges.filter((item) => item.source === cfg.id)?.length,
            };
        },
        behaviors: ['drag-canvas', 'zoom-canvas', 'drag-node'],
    };

    return (
        <View>
            <FlowAnalysisGraph {...config} />
        </View>
    );
};

export default AntChart;
