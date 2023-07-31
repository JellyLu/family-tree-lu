import { FamDiagram } from './Diagrams';
import { PageFitMode, GroupByType } from 'basicprimitives';

const PrimitiveDiagram = () => {
    const config = {
        pageFitMode: PageFitMode.AutoSize,
        alignBylevels: true,
        cursorItem: 3,
        linesWidth: 1,
        linesColor: "black",
        hasSelectorCheckbox: false,
        normalLevelShift: 20,
        dotLevelShift: 20,
        lineLevelShift: 20,
        normalItemsInterval: 10,
        dotItemsInterval: 30,
        lineItemsInterval: 30,
        arrowsDirection: GroupByType.Parents,
        showExtraArrows: false,
        items: [
            { id: 1, title: "甲", label: "甲", description: "", },
            { id: 2, title: "甲夫人1", label: "甲夫人1", description: "",},
            { id: 3, title: "甲夫人2", label: "甲夫人2", description: "2nd Husband", },
            { id: 4, parents: [1, 2], title: "乙", label: "乙", description: "1st son", },
            { id: 5, parents: [1, 3], title: "丙", label: "丙", description: "2nd son, having 2 spouses", },
            { id: 6, title: "丙老公1", label: "丙老公1", description: "Spouse I", },
            { id: 11, parents: [5, 6], title: "丁", label: "丁", description: "1st son", },
            { id: 7, title: "丙老公2", label: "丙老公2", description: "Spouse II", },
            { id: 12, parents: [5, 7], title: "戊", label: "戊", description: "2ns son", },
            { id: 8, parents: [7], title: "己", label: "己", description: "",  }
        ]
    };

    return <div className="placeholder">
        <FamDiagram centerOnCursor={true} config={config} />
    </div>
}

export default PrimitiveDiagram;
