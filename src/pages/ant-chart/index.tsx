import {FlowAnalysisGraph} from '@ant-design/graphs';
import {data} from "./datra";
import {View} from "@tarojs/components";

const AntChart = () => {
    const config = {
        data,
        // layout: {
        //     rankdir: 'TB',
        //     ranksepFunc: () => 20,
        // },
        nodeCfg: {
            anchorPoints: [
                [0.5, 0],
                [0.5, 1],
            ],
        },
        // edgeCfg: {
        //     type: 'polyline',
        //     endArrow: true,
        // },
        // markerCfg: (cfg) => {
        //     return {
        //         position: 'bottom',
        //         show: data.edges.filter((item) => item.source === cfg.id)?.length,
        //     };
        // },
        // behaviors: ['drag-canvas', 'zoom-canvas', 'drag-node'],
    };

    return (
        <View>
            <FlowAnalysisGraph {...config} />
        </View>
    );
};

export default AntChart;
