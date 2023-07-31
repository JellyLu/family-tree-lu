export const data = {
    nodes: [
        {
            id: '11',
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
            id: '12',
            x: 300,
            y: 100,
            startPoint: [0.5, 1],
            endPoint: [1, 0.5],
            value: {
                title: '甲夫人',
                items: [],
            },
        },
        {
            id: '13',
            x: 700,
            y: 100,
            startPoint: [0.5, 1],
            endPoint: [1, 0.5],
            value: {
                title: '甲夫人2',
                items: [],
            },
        },
        {
            id: '21',
            x: 400,
            y: 300,
            startPoint: [0.5, 1],
            endPoint: [0, 0.5],
            value: {
                title: '乙',
            },
        },
        {
            id: '22',
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
            id: '23',
            x: 600,
            y: 300,
            startPoint: [0.5, 1],
            endPoint: [0, 0.5],
            value: {
                title: '丙',
                items: [],
            },
        },
        {
            id: '24',
            x: 800,
            y: 300,
            startPoint: [0.5, 1],
            endPoint: [0, 0.5],
            value: {
                title: '丁',
                items: [],
            },
        },
    ],
    edges: [
        {
            source: '11',
            target: '21',
            value: '父女',
        },
        {
            source: '12',
            target: '21',
            value: '母女',
        },
        {
            source: '11',
            target: '23',
            value: '父子',
        },
        // {
        //     source: '12',
        //     target: '23',
        //     value: '母子',
        // },
        {
            source: '12',
            target: '11',
            value: '夫妻',
        },
        {
            source: '21',
            target: '22',
            value: '夫妻',
        },
        {
            source: '11',
            target: '13',
            value: '夫妻',
        },
        {
            source: '11',
            target: '24',
            value: '父子',
        },
        // {
        //     source: '14',
        //     target: '24',
        //     value: '母子',
        // },
    ],
};
