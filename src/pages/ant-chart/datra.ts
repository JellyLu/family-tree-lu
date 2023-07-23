export const data = {
    nodes: [
        {
            id: '1',
            value: {
                title: '甲',
                items: [
                    {
                        text: 'LU1',
                        value: 'diyige',
                        icon: 'https://gw.alipayobjects.com/zos/antfincdn/iFh9X011qd/7797962c-04b6-4d67-9143-e9d05f9778bf.png',
                    },
                ],
            },
        },
        {
            id: '2',
            value: {
                title: '甲夫人',
                items: [],
            },
        },
        {
            id: '3',
            value: {
                title: '乙',
                items: [],
            },
        },
        {
            id: '4',
            value: {
                title: '乙丈夫',
                items: [],
            },
        },
        {
            id: '5',
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
            source: '1',
            target: '2',
            value: '夫妻',
        },
        {
            source: '3',
            target: '4',
            value: '夫妻',
        },
    ],
};
