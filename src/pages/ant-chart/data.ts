export const data = {
    nodes: [
        {
            id: '1',
            x: 500,
            y: 100,
            startPoint: [0.5, 1],
            endPoint: [0, 0.5],
            value: {
                title: '甲',
                items: [],
            },
        },
        {
            id: '2',
            x: 700,
            y: 100,
            startPoint: [0.5, 1],
            endPoint: [1, 0.5],
            value: {
                title: '甲夫人',
                items: [],
            },
        },
        {
            id: '3',
            x: 400,
            y: 300,
            startPoint: [0.5, 1],
            endPoint: [0, 0.5],
            value: {
                title: '乙',
            },
        },
        {
            id: '4',
            x: 200,
            y: 300,
            startPoint: [0.5, 1],
            endPoint: [1, 0.5],
            value: {
                title: '乙丈夫',
                items: [],
            },
        },
        {
            id: '5',
            x: 600,
            y: 300,
            startPoint: [0.5, 1],
            endPoint: [0, 0.5],
            value: {
                title: '丙',
                items: [],
            },
        },
    ],
    edges: [
        {
            source: '1',
            target: '3',
            value: '父女',
        },
        // {
        //     source: '2',
        //     target: '3',
        //     value: '母女',
        // },
        {
            source: '1',
            target: '5',
            value: '父子',
        },
        // {
        //     source: '2',
        //     target: '5',
        //     value: '母子',
        // },
        {
            source: '2',
            target: '1',
            value: '夫妻',
        },
        {
            source: '3',
            target: '4',
            value: '夫妻',
        },
    ],
};
