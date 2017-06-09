interface Config {
    description;
    chapterArray;
    pageArray;
}
const principleConfig: Config = {
    description: {
        name: '原理',
        metadata: {
            schema: '', // 基于什么标准，xcj，scrom
            schemaversion: '0.1',
        },
        courseNumber: 'SK_WJZ1Q0001_2017V1',
        type: '', // 课件类型，WBT ,SBT,RM
        types: '', // wbtCourseWare，rmCourseWare，sbtCourseWare
        purpose: '',  // 目的
        require: '', // 学习课件之前需要掌握什么技术
        keyword: '', // 关键词
        language: '', // 课件语言
        version: '', // 课件自身版本号
        client: 'PC',  // 适用终端，PC、Android、iOS
        sumScore: '',  // 总分数
        passCondition: '', // 通过条件
        completeCondition: '',  // 完成条件，nub，
        entry: '', // 课件入口链接
    },
    chapterArray: [
        {
            id: 'chapter01',
            name: '原理',
            description: '原理页面',
            order: '2',
            childChapterArray: [],
        },
    ],
    pageArray: [
        {
            id: 'page01',
            isPass: 1,
            order: '1',
            chapterID: 'chapter01',
            componentArray: [
                {
                    id: 'page01-component00',
                    type: 'image',
                    passCondition: { event: '', state: '', },
                    remark: 'theory',
                    initialStateID: 'state01',
                    src: './assets/images/principle/theory.png',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '807',
                                    height: '331',
                                    positionLeft: '87',
                                    positionTop: '43',
                                    zIndex: '1001',
                                    display: 'block',
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                                default: {
                                    display: 'none',
                                },

                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                    ],
                },
                {
                    id: 'page01-component01',
                    type: 'image',
                    passCondition: { event: '', state: '', },
                    remark: 'J527',
                    initialStateID: 'state02',
                    src: './assets/images/principle/J527.png',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '202',
                                    height: '64',
                                    positionLeft: '75',
                                    positionTop: '93',
                                    zIndex: '1002',
                                    display: 'block',
                                    cursor: 'pointer'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '202',
                                    height: '64',
                                    positionLeft: '75',
                                    positionTop: '93',
                                    zIndex: '1002',
                                    display: 'block',
                                    cursor: 'default'
                                },

                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state03',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '202',
                                    height: '64',
                                    positionLeft: '75',
                                    positionTop: '93',
                                    zIndex: '1002',
                                    display: 'block',
                                    cursor: 'pointer'
                                },

                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state09',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '202',
                                    height: '64',
                                    positionLeft: '75',
                                    positionTop: '93',
                                    zIndex: '1002',
                                    display: 'block',
                                    cursor: 'pointer'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state99',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '202',
                                    height: '64',
                                    positionLeft: '75',
                                    positionTop: '93',
                                    zIndex: '1002',
                                    display: 'block',
                                    cursor: 'pointer'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                    ],
                },
                {
                    id: 'page01-component02',
                    type: 'image',
                    passCondition: { event: '', state: '', },
                    remark: 'E415',
                    initialStateID: 'state01',
                    src: './assets/images/principle/E415.png',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '97',
                                    height: '55',
                                    positionLeft: '129',
                                    positionTop: '236',
                                    zIndex: '1001',
                                    display: 'block',
                                    cursor: 'pointer'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '97',
                                    height: '55',
                                    positionLeft: '129',
                                    positionTop: '236',
                                    zIndex: '1001',
                                    display: 'block',
                                    cursor: 'default'
                                },

                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state03',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '97',
                                    height: '55',
                                    positionLeft: '129',
                                    positionTop: '236',
                                    zIndex: '1001',
                                    display: 'block',
                                    cursor: 'pointer'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state04',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '97',
                                    height: '55',
                                    positionLeft: '129',
                                    positionTop: '236',
                                    zIndex: '1001',
                                    display: 'block',
                                    cursor: 'pointer'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state09',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '97',
                                    height: '55',
                                    positionLeft: '129',
                                    positionTop: '236',
                                    zIndex: '1001',
                                    display: 'block',
                                    cursor: 'pointer'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state99',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '97',
                                    height: '55',
                                    positionLeft: '129',
                                    positionTop: '236',
                                    zIndex: '1001',
                                    display: 'block',
                                    cursor: 'pointer'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state999',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '97',
                                    height: '55',
                                    positionLeft: '129',
                                    positionTop: '236',
                                    zIndex: '1001',
                                    display: 'block',
                                    cursor: 'pointer'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                    ],
                },
                {
                    id: 'page01-component03',
                    type: 'image',
                    passCondition: { event: '', state: '', },
                    remark: 'J519',
                    initialStateID: 'state01',
                    src: './assets/images/principle/J519.png',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '93',
                                    height: '78',
                                    positionLeft: '376',
                                    positionTop: '14',
                                    zIndex: '1003',
                                    display: 'block',
                                    cursor: 'default'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '93',
                                    height: '78',
                                    positionLeft: '376',
                                    positionTop: '2',
                                    zIndex: '1003',
                                    display: 'block',
                                    cursor: 'default'
                                },

                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                    ],
                },
                {
                    id: 'page01-component04',
                    type: 'image',
                    passCondition: { event: '', state: '', },
                    remark: 'J533',
                    initialStateID: 'state01',
                    src: './assets/images/principle/J533.png',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '93',
                                    height: '78',
                                    positionLeft: '375',
                                    positionTop: '152',
                                    zIndex: '1003',
                                    display: 'block',
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                                default: {
                                    display: 'none',
                                },

                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                    ],
                },
                {
                    id: 'page01-component05',
                    type: 'image',
                    passCondition: { event: '', state: '', },
                    remark: 'J764',
                    initialStateID: 'state01',
                    src: './assets/images/principle/J764.png',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '64',
                                    height: '93',
                                    positionLeft: '375',
                                    positionTop: '293',
                                    zIndex: '1001',
                                    display: 'block',
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '64',
                                    height: '93',
                                    positionLeft: '375',
                                    positionTop: '293',
                                    zIndex: '1001',
                                    display: 'block',
                                },

                            },
                            animation: {
                                animationInID: 'light2',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                    ],
                },
                {
                    id: 'page01-component06',
                    type: 'image',
                    passCondition: { event: '', state: '', },
                    remark: 'J285',
                    initialStateID: 'state01',
                    src: './assets/images/principle/J285-1.png',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '215',
                                    height: '79',
                                    positionLeft: '522',
                                    positionTop: '138',
                                    zIndex: '1001',
                                    display: 'block',
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                                default: {
                                    display: 'none',
                                },

                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                    ],
                },
                {
                    id: 'page01-component07',
                    type: 'image',
                    passCondition: { event: '', state: '', },
                    remark: 'J623',
                    initialStateID: 'state01',
                    src: './assets/images/principle/J623.png',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '89',
                                    height: '86',
                                    positionLeft: '574',
                                    positionTop: '271',
                                    zIndex: '1003',
                                    display: 'block',
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                                default: {
                                    display: 'none',
                                },

                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                    ],
                },
                {
                    id: 'page01-component08',
                    type: 'image',
                    passCondition: { event: '', state: '', },
                    remark: 'J104',
                    initialStateID: 'state01',
                    src: './assets/images/principle/J104.png',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '104',
                                    height: '88',
                                    positionLeft: '741',
                                    positionTop: '260',
                                    zIndex: '1002',
                                    display: 'block',
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                                default: {
                                    display: 'none',
                                },

                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                    ],
                },
                {
                    id: 'page01-component09',
                    type: 'image',
                    passCondition: { event: '', state: '', },
                    remark: 'J393',
                    initialStateID: 'state02',
                    src: './assets/images/principle/J393.png',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '133',
                                    height: '87',
                                    positionLeft: '789',
                                    positionTop: '72',
                                    zIndex: '1002',
                                    display: 'block',
                                    cursor: 'pointer'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '133',
                                    height: '87',
                                    positionLeft: '789',
                                    positionTop: '72',
                                    zIndex: '1002',
                                    display: 'block',
                                    cursor: 'default'
                                },

                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state03',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '133',
                                    height: '87',
                                    positionLeft: '789',
                                    positionTop: '72',
                                    zIndex: '1002',
                                    display: 'block',
                                    cursor: 'pointer'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state04',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '133',
                                    height: '87',
                                    positionLeft: '789',
                                    positionTop: '72',
                                    zIndex: '1002',
                                    display: 'block',
                                    cursor: 'default'
                                },

                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state05',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '133',
                                    height: '87',
                                    positionLeft: '789',
                                    positionTop: '72',
                                    zIndex: '1002',
                                    display: 'block',
                                    cursor: 'pointer'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state09',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '133',
                                    height: '87',
                                    positionLeft: '789',
                                    positionTop: '72',
                                    zIndex: '1002',
                                    display: 'block',
                                    cursor: 'pointer'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state99',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '133',
                                    height: '87',
                                    positionLeft: '789',
                                    positionTop: '72',
                                    zIndex: '1002',
                                    display: 'block',
                                    cursor: 'pointer'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state999',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '133',
                                    height: '87',
                                    positionLeft: '789',
                                    positionTop: '72',
                                    zIndex: '1002',
                                    display: 'block',
                                    cursor: 'pointer'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                    ],
                },
                {
                    id: 'page01-component10',
                    type: 'arrow',
                    passCondition: { event: '', state: '', },
                    remark: 'pointLight',
                    initialStateID: 'state01',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '20',
                                    height: '20',
                                    positionLeft: '403',
                                    positionTop: '345',
                                    zIndex: '1001',
                                    display: 'block',
                                    backgroundImage: './assets/images/principle/redLight.png',
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '20',
                                    height: '20',
                                    positionLeft: '403',
                                    positionTop: '345',
                                    zIndex: '1001',
                                    display: 'block',
                                    backgroundImage: './assets/images/principle/greenLight.png',
                                },

                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state03',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '20',
                                    height: '20',
                                    positionLeft: '403',
                                    positionTop: '345',
                                    zIndex: '1001',
                                    display: 'block',
                                    backgroundImage: './assets/images/principle/redLight.png',
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'light2',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                    ],
                },
                {
                    id: 'page01-component11',
                    type: 'image',
                    passCondition: { event: '', state: '', },
                    remark: 'engine-key',
                    initialStateID: 'state01',
                    src: './assets/images/principle/engine-key.png',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    display: 'none',
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '40',
                                    height: '48',
                                    positionLeft: '150',
                                    positionTop: '238',
                                    zIndex: '1001',
                                    display: 'block',
                                },

                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                    ],
                },
                {
                    id: 'page01-component12',
                    type: 'image',
                    passCondition: { event: '', state: '', },
                    remark: 'engine-key',
                    initialStateID: 'state01',
                    src: './assets/images/principle/meter.png',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '166',
                                    height: '65',
                                    positionLeft: '545',
                                    positionTop: '152',
                                    zIndex: '1001',
                                    display: 'block',
                                    backgroundImage: './assets/images/principle/meter.png',
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '166',
                                    height: '65',
                                    positionLeft: '545',
                                    positionTop: '152',
                                    zIndex: '1001',
                                    display: 'block',
                                    backgroundImage: './assets/images/principle/meter-light.png',
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                    ],
                },
                {
                    id: 'page01-line01',
                    type: 'image',
                    passCondition: { event: '', state: '', },
                    remark: 'J519T415',
                    initialStateID: 'state02',
                    src: './assets/images/principle/J519T415.png',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '162',
                                    height: '230',
                                    positionLeft: '224',
                                    positionTop: '43',
                                    zIndex: '1001',
                                    display: 'block',
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                                default: {
                                    display: 'none',
                                },

                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                    ],
                },
                {
                    id: 'page01-line02',
                    type: 'image',
                    passCondition: { event: '', state: '', },
                    remark: 'E415T764',
                    initialStateID: 'state02',
                    src: './assets/images/principle/E415T764.png',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '216',
                                    height: '43',
                                    positionLeft: '173',
                                    positionTop: '288',
                                    zIndex: '1001',
                                    display: 'block',
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                                default: {
                                    display: 'none',
                                },

                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                    ],
                },
                {
                    id: 'page01-line03',
                    type: 'image',
                    passCondition: { event: '', state: '', },
                    remark: 'J519T415',
                    initialStateID: 'state02',
                    src: './assets/images/principle/E415T764-r.png',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '196',
                                    height: '29',
                                    positionLeft: '193',
                                    positionTop: '286',
                                    zIndex: '1001',
                                    display: 'block',
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                                default: {
                                    display: 'none',
                                },

                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                    ],
                },
                {
                    id: 'page01-line04',
                    type: 'image',
                    passCondition: { event: '', state: '', },
                    remark: 'J285T623',
                    initialStateID: 'state02',
                    src: './assets/images/principle/J285T623.png',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '16',
                                    height: '47',
                                    positionLeft: '615',
                                    positionTop: '229',
                                    zIndex: '1002',
                                    display: 'block',
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                                default: {
                                    display: 'none',
                                },

                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                    ],
                },
                {
                    id: 'page01-line05',
                    type: 'image',
                    passCondition: { event: '', state: '', },
                    remark: 'J519T533',
                    initialStateID: 'state02',
                    src: './assets/images/principle/J519T533.png',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '15',
                                    height: '171',
                                    positionLeft: '429',
                                    positionTop: '73',
                                    zIndex: '1002',
                                    display: 'block',
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                                default: {
                                    display: 'none',
                                },

                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                    ],
                },
                {
                    id: 'page01-line06',
                    type: 'image',
                    passCondition: { event: '', state: '', },
                    remark: 'J527T393',
                    initialStateID: 'state02',
                    src: './assets/images/principle/J527T393.png',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '580',
                                    height: '10',
                                    positionLeft: '216',
                                    positionTop: '112',
                                    zIndex: '1001',
                                    display: 'block',
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                                default: {
                                    display: 'none',
                                },

                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                    ],
                },
                {
                    id: 'page01-line07',
                    type: 'image',
                    passCondition: { event: '', state: '', },
                    remark: 'J527T451',
                    initialStateID: 'state02',
                    src: './assets/images/principle/J527T451.png',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '7',
                                    height: '93',
                                    positionLeft: '191',
                                    positionTop: '156',
                                    zIndex: '1001',
                                    display: 'block',
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                                default: {
                                    display: 'none',
                                },

                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                    ],
                },
                {
                    id: 'page01-line08',
                    type: 'image',
                    passCondition: { event: '', state: '', },
                    remark: 'J527T451_deep',
                    initialStateID: 'state02',
                    src: './assets/images/principle/J527T451_deep.png',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '7',
                                    height: '82',
                                    positionLeft: '173',
                                    positionTop: '156',
                                    zIndex: '1001',
                                    display: 'block',
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                                default: {
                                    display: 'none',
                                },

                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                    ],
                },
                {
                    id: 'page01-line09',
                    type: 'image',
                    passCondition: { event: '', state: '', },
                    remark: 'J527T764',
                    initialStateID: 'state02',
                    src: './assets/images/principle/J527T764.png',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '289',
                                    height: '194',
                                    positionLeft: '88',
                                    positionTop: '156',
                                    zIndex: '1001',
                                    display: 'block',
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                                default: {
                                    display: 'none',
                                },

                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                    ],
                },
                {
                    id: 'page01-line10',
                    type: 'image',
                    passCondition: { event: '', state: '', },
                    remark: 'J533T104',
                    initialStateID: 'state02',
                    src: './assets/images/principle/J533T104.png',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '357',
                                    height: '120',
                                    positionLeft: '431',
                                    positionTop: '157',
                                    zIndex: '1001',
                                    display: 'block',
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                                default: {
                                    display: 'none',
                                },

                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                    ],
                },
                {
                    id: 'page01-line11',
                    type: 'image',
                    passCondition: { event: '', state: '', },
                    remark: 'J533T285',
                    initialStateID: 'state02',
                    src: './assets/images/principle/J533T285.png',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '67',
                                    height: '9',
                                    positionLeft: '456',
                                    positionTop: '183',
                                    zIndex: '1001',
                                    display: 'block',
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                                default: {
                                    display: 'none',
                                },

                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                    ],
                },
                {
                    id: 'page01-line12',
                    type: 'image',
                    passCondition: { event: '', state: '', },
                    remark: 'J533T764',
                    initialStateID: 'state02',
                    src: './assets/images/principle/J533T764.png',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '1',
                                    height: '74',
                                    positionLeft: '408',
                                    positionTop: '222',
                                    zIndex: '1001',
                                    display: 'block',
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                                default: {
                                    display: 'none',
                                },

                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                    ],
                },
                {
                    id: 'page01-line13',
                    type: 'image',
                    passCondition: { event: '', state: '', },
                    remark: 'J764T393',
                    initialStateID: 'state02',
                    src: './assets/images/principle/J764T393.png',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '448',
                                    height: '211',
                                    positionLeft: '429',
                                    positionTop: '151',
                                    zIndex: '1001',
                                    display: 'block',
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                                default: {
                                    display: 'none',
                                },

                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                    ],
                },
                {
                    id: 'page01-button01',
                    type: 'button',
                    initialStateID: 'state01',
                    passCondition: {
                        event: 'click',
                        state: 'start',
                    },
                    remark: 'anniu',
                    src: '',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '20',
                                    height: '20',
                                    positionLeft: '0',
                                    positionTop: '10',
                                    textAlign: 'center',
                                    zIndex: '4',
                                    borderRadius: '50%',
                                    backgroundColor: '#003c65',
                                    innerHTML : '1',
                                    display : 'none',
                                    cursor : 'default'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [
                                {
                                    id: '',
                                    order: '1',
                                    content: '按下点火钥匙，E415首先向J527发送P档解除信号，随后发送S触电启动信号',
                                    style: {
                                        color: '#003c65',
                                        fontSize: '14',
                                        fontStyle: '',
                                        fontWeight: '',
                                        lineHeight: '0',
                                        textDecoration: '',
                                        textAlign: '',
                                        positionLeft: '40',
                                        positionTop : '-8',
                                        display : 'none'
                                    },
                                },
                            ],
                        },
                        {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '20',
                                    height: '20',
                                    positionLeft: '0',
                                    positionTop: '10',
                                    textAlign: 'center',
                                    zIndex: '4',
                                    borderRadius: '50%',
                                    backgroundColor: '#003c65',
                                    innerHTML : '1',
                                    display : 'block',
                                    cursor : 'default'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [
                                {
                                    id: '',
                                    order: '1',
                                    content: '按下点火钥匙，E415首先向J527发送P档解除信号，随后发送S触电启动信号',
                                    style: {
                                        color: '#003c65',
                                        fontSize: '14',
                                        fontStyle: '',
                                        fontWeight: '',
                                        lineHeight: '0',
                                        textDecoration: '',
                                        textAlign: '',
                                        positionLeft: '40',
                                        positionTop : '-8',
                                        display : 'block'
                                    },
                                },
                            ],
                        },
                        {
                            id: 'state03',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '20',
                                    height: '20',
                                    positionLeft: '0',
                                    positionTop: '10',
                                    textAlign: 'center',
                                    zIndex: '4',
                                    borderRadius: '50%',
                                    backgroundColor: '#003c65',
                                    innerHTML : '1',
                                    display : 'block',
                                    cursor : 'pointer'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: '',
                            },
                            textArray: [
                                {
                                    id: '',
                                    order: '1',
                                    content: '按下点火钥匙，E415首先向J527发送P档解除信号，随后发送S触电启动信号',
                                    style: {
                                        color: '#003c65',
                                        fontSize: '14',
                                        fontStyle: '',
                                        fontWeight: '',
                                        lineHeight: '0',
                                        textDecoration: '',
                                        textAlign: '',
                                        positionLeft: '40',
                                        positionTop : '-8',
                                        display : 'block'
                                    },
                                },
                            ],
                        },
                    ],
                },
                {
                    id: 'page01-button02',
                    type: 'button',
                    initialStateID: 'state01',
                    passCondition: {
                        event: 'click',
                        state: 'start',
                    },
                    remark: 'anniu',
                    src: '',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    display: 'none',
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [
                                {
                                    id: '',
                                    order: '1',
                                    content: 'J527接到信号后向舒适CAN线发送唤醒信号',
                                    style: {
                                        display: 'none',
                                    },
                                },
                            ],
                        },
                        {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '20',
                                    height: '20',
                                    positionLeft: '0',
                                    positionTop: '10',
                                    textAlign: 'center',
                                    zIndex: '4',
                                    borderRadius: '50%',
                                    backgroundColor: '#003c65',
                                    innerHTML : '2',
                                    display: 'block',
                                    cursor : 'default'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [
                                {
                                    id: '',
                                    order: '1',
                                    content: 'J527接到信号后向舒适CAN线发送唤醒信号',
                                    style: {
                                        color: '#003c65',
                                        fontSize: '14',
                                        fontStyle: '',
                                        fontWeight: '',
                                        lineHeight: '0',
                                        textDecoration: '',
                                        textAlign: '',
                                        positionLeft: '40',
                                        positionTop : '-8',
                                        display: 'block',
                                    },
                                },
                            ],
                        },
                        {
                            id: 'state03',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '20',
                                    height: '20',
                                    positionLeft: '0',
                                    positionTop: '10',
                                    textAlign: 'center',
                                    zIndex: '4',
                                    borderRadius: '50%',
                                    backgroundColor: '#003c65',
                                    innerHTML : '2',
                                    display: 'block',
                                    cursor : 'pointer'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: '',
                            },
                            textArray: [
                                {
                                    id: '',
                                    order: '1',
                                    content: 'J527接到信号后向舒适CAN线发送唤醒信号',
                                    style: {
                                        color: '#003c65',
                                        fontSize: '14',
                                        fontStyle: '',
                                        fontWeight: '',
                                        lineHeight: '0',
                                        textDecoration: '',
                                        textAlign: '',
                                        positionLeft: '40',
                                        positionTop : '-8',
                                        display: 'block',
                                    },
                                },
                            ],
                        },
                    ],
                },
                {
                    id: 'page01-button03',
                    type: 'button',
                    initialStateID: 'state01',
                    passCondition: {
                        event: 'click',
                        state: 'start',
                    },
                    remark: 'anniu',
                    src: '',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    display: 'none',
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [
                                {
                                    id: '',
                                    order: '1',
                                    content: 'J393被唤醒后发送信号确定J764锁止状态及点火钥匙的合法性',
                                    style: {
                                        display: 'none',
                                    },
                                },
                            ],
                        },
                        {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '20',
                                    height: '20',
                                    positionLeft: '0',
                                    positionTop: '10',
                                    textAlign: 'center',
                                    zIndex: '4',
                                    borderRadius: '50%',
                                    backgroundColor: '#003c65',
                                    innerHTML : '3',
                                    display: 'block',
                                    cursor : 'default'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [
                                {
                                    id: '',
                                    order: '1',
                                    content: 'J393被唤醒后发送信号确定J764锁止状态及点火钥匙的合法性',
                                    style: {
                                        color: '#003c65',
                                        fontSize: '14',
                                        fontStyle: '',
                                        fontWeight: '',
                                        lineHeight: '0',
                                        textDecoration: '',
                                        textAlign: '',
                                        positionLeft: '40',
                                        positionTop : '-8',
                                        display: 'block',
                                    },
                                },
                            ],
                        },
                        {
                            id: 'state03',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '20',
                                    height: '20',
                                    positionLeft: '0',
                                    positionTop: '10',
                                    textAlign: 'center',
                                    zIndex: '4',
                                    borderRadius: '50%',
                                    backgroundColor: '#003c65',
                                    innerHTML : '3',
                                    display: 'block',
                                    cursor : 'pointer'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: '',
                            },
                            textArray: [
                                {
                                    id: '',
                                    order: '1',
                                    content: 'J393被唤醒后发送信号确定J764锁止状态及点火钥匙的合法性',
                                    style: {
                                        color: '#003c65',
                                        fontSize: '14',
                                        fontStyle: '',
                                        fontWeight: '',
                                        lineHeight: '0',
                                        textDecoration: '',
                                        textAlign: '',
                                        positionLeft: '40',
                                        positionTop : '-8',
                                        display: 'block',
                                    },
                                },
                            ],
                        },
                    ],
                },
                {
                    id: 'page01-button04',
                    type: 'button',
                    initialStateID: 'state01',
                    passCondition: {
                        event: 'click',
                        state: 'start',
                    },
                    remark: 'anniu',
                    src: '',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    display: 'none',
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [
                                {
                                    id: '',
                                    order: '1',
                                    content: 'E415将合法钥匙信息及J764锁止状态两组信息同时反馈给J393',
                                    style: {
                                        display: 'none',
                                    },
                                },
                            ],
                        },
                        {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '20',
                                    height: '20',
                                    positionLeft: '0',
                                    positionTop: '10',
                                    textAlign: 'center',
                                    zIndex: '4',
                                    borderRadius: '50%',
                                    backgroundColor: '#003c65',
                                    innerHTML : '4',
                                    display: 'block',
                                    cursor : 'default'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [
                                {
                                    id: '',
                                    order: '1',
                                    content: 'E415将合法钥匙信息及J764锁止状态两组信息同时反馈给J393',
                                    style: {
                                        color: '#003c65',
                                        fontSize: '14',
                                        fontStyle: '',
                                        fontWeight: '',
                                        lineHeight: '0',
                                        textDecoration: '',
                                        textAlign: '',
                                        positionLeft: '40',
                                        positionTop : '-8',
                                        display: 'block',
                                    },
                                },
                            ],
                        },
                        {
                            id: 'state03',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '20',
                                    height: '20',
                                    positionLeft: '0',
                                    positionTop: '10',
                                    textAlign: 'center',
                                    zIndex: '4',
                                    borderRadius: '50%',
                                    backgroundColor: '#003c65',
                                    innerHTML : '4',
                                    display: 'block',
                                    cursor : 'pointer'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: '',
                            },
                            textArray: [
                                {
                                    id: '',
                                    order: '1',
                                    content: 'E415将合法钥匙信息及J764锁止状态两组信息同时反馈给J393',
                                    style: {
                                        color: '#003c65',
                                        fontSize: '14',
                                        fontStyle: '',
                                        fontWeight: '',
                                        lineHeight: '0',
                                        textDecoration: '',
                                        textAlign: '',
                                        positionLeft: '40',
                                        positionTop : '-8',
                                        display: 'block',
                                    },
                                },
                            ],
                        },
                    ],
                },
                {
                    id: 'page01-button05',
                    type: 'button',
                    initialStateID: 'state01',
                    passCondition: {
                        event: 'click',
                        state: 'start',
                    },
                    remark: 'anniu',
                    src: '',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    display: 'none',
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [
                                {
                                    id: '',
                                    order: '1',
                                    content: 'J393做出应答，给J764供电解除方向盘锁止，同时给E415供电允许做出15及50信号应答',
                                    style: {
                                        display: 'none',
                                    },
                                },
                            ],
                        },
                        {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '20',
                                    height: '20',
                                    positionLeft: '0',
                                    positionTop: '10',
                                    textAlign: 'center',
                                    zIndex: '4',
                                    borderRadius: '50%',
                                    backgroundColor: '#003c65',
                                    innerHTML : '5',
                                    display: 'block',
                                    cursor : 'default'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [
                                {
                                    id: '',
                                    order: '1',
                                    content: 'J393做出应答，给J764供电解除方向盘锁止，同时给E415供电允许做出15及50信号应答',
                                    style: {
                                        color: '#003c65',
                                        fontSize: '14',
                                        fontStyle: '',
                                        fontWeight: '',
                                        lineHeight: '0',
                                        textDecoration: '',
                                        textAlign: '',
                                        positionLeft: '40',
                                        positionTop : '-8',
                                        display: 'block',
                                    },
                                },
                            ],
                        },
                        {
                            id: 'state03',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '20',
                                    height: '20',
                                    positionLeft: '0',
                                    positionTop: '10',
                                    textAlign: 'center',
                                    zIndex: '4',
                                    borderRadius: '50%',
                                    backgroundColor: '#003c65',
                                    innerHTML : '5',
                                    display: 'block',
                                    cursor : 'pointer'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: '',
                            },
                            textArray: [
                                {
                                    id: '',
                                    order: '1',
                                    content: 'J393做出应答，给J764供电解除方向盘锁止，同时给E415供电允许做出15及50信号应答',
                                    style: {
                                        color: '#003c65',
                                        fontSize: '14',
                                        fontStyle: '',
                                        fontWeight: '',
                                        lineHeight: '0',
                                        textDecoration: '',
                                        textAlign: '',
                                        positionLeft: '40',
                                        positionTop : '-8',
                                        display: 'block',
                                    },
                                },
                            ],
                        },
                    ],
                },
                {
                    id: 'page01-button06',
                    type: 'button',
                    initialStateID: 'state01',
                    passCondition: {
                        event: 'click',
                        state: 'start',
                    },
                    remark: 'anniu',
                    src: '',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    display: 'none',
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [
                                {
                                    id: '',
                                    order: '1',
                                    content: 'E415同时向J527和J519先后发送15和50信号，此方式属于[冗余设计]，其目的是避免一路信息传递发生错误而另一路仍可以正常传递，冗余J519',
                                    style: {
                                        display: 'none',
                                    },
                                },
                            ],
                        },
                        {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '20',
                                    height: '20',
                                    positionLeft: '0',
                                    positionTop: '10',
                                    textAlign: 'center',
                                    zIndex: '4',
                                    borderRadius: '50%',
                                    backgroundColor: '#003c65',
                                    innerHTML : '6',
                                    display: 'block',
                                    cursor : 'default'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [
                                {
                                    id: '',
                                    order: '1',
                                    content: 'E415同时向J527和J519先后发送15和50信号，此方式属于[冗余设计]，其目的是避免一路信息传递发生错误而另一路仍可以正常传递，冗余J519',
                                    style: {
                                        color: '#003c65',
                                        fontSize: '14',
                                        fontStyle: '',
                                        fontWeight: '',
                                        lineHeight: '0',
                                        textDecoration: '',
                                        textAlign: '',
                                        positionLeft: '40',
                                        positionTop : '-8',
                                        display: 'block',
                                    },
                                },
                            ],
                        },
                        {
                            id: 'state03',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '20',
                                    height: '20',
                                    positionLeft: '0',
                                    positionTop: '10',
                                    textAlign: 'center',
                                    zIndex: '4',
                                    borderRadius: '50%',
                                    backgroundColor: '#003c65',
                                    innerHTML : '6',
                                    display: 'block',
                                    cursor : 'pointer'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: '',
                            },
                            textArray: [
                                {
                                    id: '',
                                    order: '1',
                                    content: 'E415同时向J527和J519先后发送15和50信号，此方式属于[冗余设计]，其目的是避免一路信息传递发生错误而另一路仍可以正常传递，冗余J519',
                                    style: {
                                        color: '#003c65',
                                        fontSize: '14',
                                        fontStyle: '',
                                        fontWeight: '',
                                        lineHeight: '0',
                                        textDecoration: '',
                                        textAlign: '',
                                        positionLeft: '40',
                                        positionTop : '-8',
                                        display: 'block',
                                    },
                                },
                            ],
                        },
                    ],
                },
                {
                    id: 'page01-button07',
                    type: 'button',
                    initialStateID: 'state01',
                    passCondition: {
                        event: 'click',
                        state: 'start',
                    },
                    remark: 'anniu',
                    src: '',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    display: 'none',
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [
                                {
                                    id: '',
                                    order: '1',
                                    content: 'J527向舒适CAN线发送15及50两组信号',
                                    style: {
                                        display: 'none',
                                    },
                                },
                            ],
                        },
                        {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '20',
                                    height: '20',
                                    positionLeft: '0',
                                    positionTop: '10',
                                    textAlign: 'center',
                                    zIndex: '4',
                                    borderRadius: '50%',
                                    backgroundColor: '#003c65',
                                    innerHTML : '7',
                                    display: 'block',
                                    cursor : 'default'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [
                                {
                                    id: '',
                                    order: '1',
                                    content: 'J527向舒适CAN线发送15及50两组信号',
                                    style: {
                                        color: '#003c65',
                                        fontSize: '14',
                                        fontStyle: '',
                                        fontWeight: '',
                                        lineHeight: '0',
                                        textDecoration: '',
                                        textAlign: '',
                                        positionLeft: '40',
                                        positionTop : '-8',
                                        display: 'block',
                                    },
                                },
                            ],
                        },
                        {
                            id: 'state03',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '20',
                                    height: '20',
                                    positionLeft: '0',
                                    positionTop: '10',
                                    textAlign: 'center',
                                    zIndex: '4',
                                    borderRadius: '50%',
                                    backgroundColor: '#003c65',
                                    innerHTML : '7',
                                    display: 'block',
                                    cursor : 'pointer'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: '',
                            },
                            textArray: [
                                {
                                    id: '',
                                    order: '1',
                                    content: 'J527向舒适CAN线发送15及50两组信号',
                                    style: {
                                        color: '#003c65',
                                        fontSize: '14',
                                        fontStyle: '',
                                        fontWeight: '',
                                        lineHeight: '0',
                                        textDecoration: '',
                                        textAlign: '',
                                        positionLeft: '40',
                                        positionTop : '-8',
                                        display: 'block',
                                    },
                                },
                            ],
                        },
                    ],
                },
                {
                    id: 'page01-button08',
                    type: 'button',
                    initialStateID: 'state01',
                    passCondition: {
                        event: 'click',
                        state: 'start',
                    },
                    remark: 'anniu',
                    src: '',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    display: 'none',
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [
                                {
                                    id: '',
                                    order: '1',
                                    content: 'J393做出应答，允许15电接通，J285显示信息，同时J623与J393进行防盗密码比较，并允许发动机启动',
                                    style: {
                                        display: 'none',
                                    },
                                },
                            ],
                        },
                        {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '20',
                                    height: '20',
                                    positionLeft: '0',
                                    positionTop: '10',
                                    textAlign: 'center',
                                    zIndex: '4',
                                    borderRadius: '50%',
                                    backgroundColor: '#003c65',
                                    innerHTML : '8',
                                    display: 'block',
                                    cursor : 'default'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [
                                {
                                    id: '',
                                    order: '1',
                                    content: 'J393做出应答，允许15电接通，J285显示信息，同时J623与J393进行防盗密码比较，并允许发动机启动',
                                    style: {
                                        color: '#003c65',
                                        fontSize: '14',
                                        fontStyle: '',
                                        fontWeight: '',
                                        lineHeight: '0',
                                        textDecoration: '',
                                        textAlign: '',
                                        positionLeft: '40',
                                        positionTop : '-8',
                                        display: 'block',
                                    },
                                },
                            ],
                        },
                        {
                            id: 'state03',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '20',
                                    height: '20',
                                    positionLeft: '0',
                                    positionTop: '10',
                                    textAlign: 'center',
                                    zIndex: '4',
                                    borderRadius: '50%',
                                    backgroundColor: '#003c65',
                                    innerHTML : '8',
                                    display: 'block',
                                    cursor : 'pointer'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: '',
                            },
                            textArray: [
                                {
                                    id: '',
                                    order: '1',
                                    content: 'J393做出应答，允许15电接通，J285显示信息，同时J623与J393进行防盗密码比较，并允许发动机启动',
                                    style: {
                                        color: '#003c65',
                                        fontSize: '14',
                                        fontStyle: '',
                                        fontWeight: '',
                                        lineHeight: '0',
                                        textDecoration: '',
                                        textAlign: '',
                                        positionLeft: '40',
                                        positionTop : '-8',
                                        display: 'block',
                                    },
                                },
                            ],
                        },
                    ],
                },
                {
                    id: 'page01-arrow01',
                    type: 'arrow',
                    passCondition: { event: '', state: '', },
                    remark: 'arrow01',
                    initialStateID: 'state01',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    display: 'none',
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '11',
                                    height: '23',
                                    positionLeft: '168',
                                    positionTop: '215',
                                    zIndex: '1001',
                                    display: 'block',
                                    rotate: '0',
                                    backgroundImage: './assets/images/principle/arrow-gray.png',
                                },

                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'up61',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state03',
                            isScroll: 1,
                            style: {
                                default: {
                                    display: 'none',
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                    ],
                },
                {
                    id: 'page01-arrow02',
                    type: 'arrow',
                    passCondition: { event: '', state: '', },
                    remark: 'arrow02',
                    initialStateID: 'state01',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    display: 'none',
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '11',
                                    height: '23',
                                    positionLeft: '174',
                                    positionTop: '215',
                                    zIndex: '1001',
                                    display: 'block',
                                    rotate: '0',
                                    backgroundImage: './assets/images/principle/arrow-gray.png',
                                },

                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'up61',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state03',
                            isScroll: 1,
                            style: {
                                default: {
                                    display: 'none',
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                    ],
                },
                {
                    id: 'page01-arrow03',
                    type: 'arrow',
                    passCondition: { event: '', state: '', },
                    remark: 'arrow03',
                    initialStateID: 'state01',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    display: 'none',
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '30',
                                    height: '15',
                                    positionLeft: '600',
                                    positionTop: '110',
                                    zIndex: '1001',
                                    display: 'block',
                                    rotate: '0',
                                    backgroundImage: './assets/images/principle/twoWayLine.png',
                                },

                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'light3',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                    ],
                },
                {
                    id: 'page01-arrow04',
                    type: 'arrow',
                    passCondition: { event: '', state: '', },
                    remark: 'arrow04',
                    initialStateID: 'state01',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    display: 'none',
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '11',
                                    height: '23',
                                    positionLeft: '888',
                                    positionTop: '156',
                                    zIndex: '1001',
                                    display: 'block',
                                    rotate: '0',
                                    backgroundImage: './assets/images/principle/arrow.png',
                                },

                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'down196',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state03',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '23',
                                    height: '11',
                                    positionLeft: '873',
                                    positionTop: '366',
                                    zIndex: '1001',
                                    display: 'block',
                                    rotate: '90',
                                    backgroundImage: './assets/images/principle/arrow2.png',
                                },

                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state04',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '23',
                                    height: '11',
                                    positionLeft: '873',
                                    positionTop: '366',
                                    zIndex: '1001',
                                    display: 'block',
                                    rotate: '90',
                                    backgroundImage: './assets/images/principle/arrow2.png',
                                },

                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'left400',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state05',
                            isScroll: 1,
                            style: {
                                default: {
                                    display: 'none',
                                },

                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                    ],
                },
                {
                    id: 'page01-arrow05',
                    type: 'arrow',
                    passCondition: { event: '', state: '', },
                    remark: 'arrow05',
                    initialStateID: 'state01',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    display: 'none',
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '23',
                                    height: '11',
                                    positionLeft: '368',
                                    positionTop: '324',
                                    zIndex: '1001',
                                    display: 'block',
                                    rotate: '0',
                                    backgroundImage: './assets/images/principle/arrow2.png',
                                },

                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'left400',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state03',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '11',
                                    height: '23',
                                    positionLeft: '169',
                                    positionTop: '309',
                                    zIndex: '1001',
                                    display: 'block',
                                    rotate: '90',
                                    backgroundImage: './assets/images/principle/arrow3.png',
                                },

                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state04',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '11',
                                    height: '23',
                                    positionLeft: '168',
                                    positionTop: '309',
                                    zIndex: '1001',
                                    display: 'block',
                                    rotate: '90',
                                    backgroundImage: './assets/images/principle/arrow3.png',
                                },

                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'up61',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state05',
                            isScroll: 1,
                            style: {
                                default: {
                                    display: 'none',
                                },

                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                    ],
                },
                {
                    id: 'page01-arrow06',
                    type: 'arrow',
                    passCondition: { event: '', state: '', },
                    remark: 'arrow05',
                    initialStateID: 'state01',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    display: 'none',
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '11',
                                    height: '23',
                                    positionLeft: '168',
                                    positionTop: '287',
                                    zIndex: '1001',
                                    display: 'block',
                                    rotate: '0',
                                    backgroundImage: './assets/images/principle/arrow.png',
                                },

                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'down36',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state03',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '23',
                                    height: '11',
                                    positionLeft: '171',
                                    positionTop: '324',
                                    zIndex: '1001',
                                    display: 'block',
                                    rotate: '90',
                                    backgroundImage: './assets/images/principle/arrow4.png',
                                },

                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state04',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '23',
                                    height: '11',
                                    positionLeft: '171',
                                    positionTop: '324',
                                    zIndex: '1001',
                                    display: 'block',
                                    rotate: '90',
                                    backgroundImage: './assets/images/principle/arrow4.png',
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'right440',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state05',
                            isScroll: 1,
                            style: {
                                default: {
                                    display: 'none',
                                },

                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                    ],
                },
                {
                    id: 'page01-arrow07',
                    type: 'arrow',
                    passCondition: { event: '', state: '', },
                    remark: 'arrow07',
                    initialStateID: 'state01',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    display: 'none',
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '23',
                                    height: '11',
                                    positionLeft: '438',
                                    positionTop: '366',
                                    zIndex: '1001',
                                    display: 'block',
                                    rotate: '0',
                                    backgroundImage: './assets/images/principle/arrow4.png',
                                },

                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'right440',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state03',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '11',
                                    height: '23',
                                    positionLeft: '888',
                                    positionTop: '351',
                                    zIndex: '1001',
                                    display: 'block',
                                    rotate: '90',
                                    backgroundImage: './assets/images/principle/arrow3.png',
                                },

                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state04',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '11',
                                    height: '23',
                                    positionLeft: '888',
                                    positionTop: '351',
                                    zIndex: '1001',
                                    display: 'block',
                                    rotate: '90',
                                    backgroundImage: './assets/images/principle/arrow3.png',
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'up210',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state05',
                            isScroll: 1,
                            style: {
                                default: {
                                    display: 'none',
                                },

                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                    ],
                },
                {
                    id: 'page01-arrow08',
                    type: 'arrow',
                    passCondition: { event: '', state: '', },
                    remark: 'arrow08',
                    initialStateID: 'state01',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    display: 'none',
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '11',
                                    height: '23',
                                    positionLeft: '872',
                                    positionTop: '158',
                                    zIndex: '1001',
                                    display: 'block',
                                    rotate: '0',
                                    backgroundImage: './assets/images/principle/arrow.png',
                                },

                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'down196',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state03',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '23',
                                    height: '11',
                                    positionLeft: '857',
                                    positionTop: '356',
                                    zIndex: '1001',
                                    display: 'block',
                                    rotate: '90',
                                    backgroundImage: './assets/images/principle/arrow2.png',
                                },

                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state04',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '23',
                                    height: '11',
                                    positionLeft: '857',
                                    positionTop: '356',
                                    zIndex: '1001',
                                    display: 'block',
                                    rotate: '90',
                                    backgroundImage: './assets/images/principle/arrow2.png',
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'left400',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state05',
                            isScroll: 1,
                            style: {
                                default: {
                                    display: 'none',
                                },

                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                    ],
                },
                {
                    id: 'page01-arrow09',
                    type: 'arrow',
                    passCondition: { event: '', state: '', },
                    remark: 'arrow09',
                    initialStateID: 'state01',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    display: 'none',
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '23',
                                    height: '11',
                                    positionLeft: '368',
                                    positionTop: '308',
                                    zIndex: '1001',
                                    display: 'block',
                                    rotate: '0',
                                    backgroundImage: './assets/images/principle/arrow2.png',
                                },

                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'left170',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state03',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '11',
                                    height: '23',
                                    positionLeft: '189',
                                    positionTop: '294',
                                    zIndex: '1001',
                                    display: 'block',
                                    rotate: '90',
                                    backgroundImage: './assets/images/principle/arrow3.png',
                                },

                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state04',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '11',
                                    height: '23',
                                    positionLeft: '189',
                                    positionTop: '294',
                                    zIndex: '1001',
                                    display: 'block',
                                    rotate: '90',
                                    backgroundImage: './assets/images/principle/arrow3.png',
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'up21',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state05',
                            isScroll: 1,
                            style: {
                                default: {
                                    display: 'none',
                                },

                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                    ],
                },
                {
                    id: 'page01-arrow10',
                    type: 'arrow',
                    passCondition: { event: '', state: '', },
                    remark: 'arrow10',
                    initialStateID: 'state01',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    display: 'none',
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '11',
                                    height: '23',
                                    positionLeft: '186',
                                    positionTop: '226',
                                    zIndex: '1001',
                                    display: 'block',
                                    rotate: '0',
                                    backgroundImage: './assets/images/principle/arrow3.png',
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'up61',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                    ],
                },
                {
                    id: 'page01-arrow11',
                    type: 'arrow',
                    passCondition: { event: '', state: '', },
                    remark: 'arrow11',
                    initialStateID: 'state01',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    display: 'none',
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '11',
                                    height: '23',
                                    positionLeft: '193',
                                    positionTop: '226',
                                    zIndex: '1001',
                                    display: 'block',
                                    rotate: '0',
                                    backgroundImage: './assets/images/principle/arrow3.png',
                                },

                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'up61',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                    ],
                },
                {
                    id: 'page01-arrow12',
                    type: 'arrow',
                    passCondition: { event: '', state: '', },
                    remark: 'arrow12',
                    initialStateID: 'state01',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    display: 'none',
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '23',
                                    height: '11',
                                    positionLeft: '224',
                                    positionTop: '258',
                                    zIndex: '1001',
                                    display: 'block',
                                    rotate: '0',
                                    backgroundImage: './assets/images/principle/arrow4.png',
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'right200',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state03',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '11',
                                    height: '23',
                                    positionLeft: '293',
                                    positionTop: '238',
                                    zIndex: '1001',
                                    display: 'block',
                                    rotate: '0',
                                    backgroundImage: './assets/images/principle/arrow3.png',
                                },

                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state04',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '11',
                                    height: '23',
                                    positionLeft: '293',
                                    positionTop: '238',
                                    zIndex: '1001',
                                    display: 'block',
                                    rotate: '0',
                                    backgroundImage: './assets/images/principle/arrow3.png',
                                },

                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'up211',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state05',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '23',
                                    height: '11',
                                    positionLeft: '299',
                                    positionTop: '39',
                                    zIndex: '1001',
                                    display: 'block',
                                    rotate: '0',
                                    backgroundImage: './assets/images/principle/arrow4.png',
                                },

                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state06',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '23',
                                    height: '11',
                                    positionLeft: '299',
                                    positionTop: '39',
                                    zIndex: '1001',
                                    display: 'block',
                                    rotate: '0',
                                    backgroundImage: './assets/images/principle/arrow4.png',
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'right200',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state07',
                            isScroll: 1,
                            style: {
                                default: {
                                    display: 'none',
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                    ],
                },
                {
                    id: 'page01-arrow13',
                    type: 'arrow',
                    passCondition: { event: '', state: '', },
                    remark: 'arrow13',
                    initialStateID: 'state01',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    display: 'none',
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '23',
                                    height: '11',
                                    positionLeft: '224',
                                    positionTop: '267',
                                    zIndex: '1001',
                                    display: 'block',
                                    rotate: '0',
                                    backgroundImage: './assets/images/principle/arrow4.png',
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'right200',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state03',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '11',
                                    height: '23',
                                    positionLeft: '301',
                                    positionTop: '249',
                                    zIndex: '1001',
                                    display: 'block',
                                    rotate: '0',
                                    backgroundImage: './assets/images/principle/arrow3.png',
                                },

                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state04',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '11',
                                    height: '23',
                                    positionLeft: '301',
                                    positionTop: '249',
                                    zIndex: '1001',
                                    display: 'block',
                                    rotate: '0',
                                    backgroundImage: './assets/images/principle/arrow3.png',
                                },

                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'up211',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state05',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '23',
                                    height: '11',
                                    positionLeft: '306',
                                    positionTop: '48',
                                    zIndex: '1001',
                                    display: 'block',
                                    rotate: '0',
                                    backgroundImage: './assets/images/principle/arrow4.png',
                                },

                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state06',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '23',
                                    height: '11',
                                    positionLeft: '306',
                                    positionTop: '48',
                                    zIndex: '1001',
                                    display: 'block',
                                    rotate: '0',
                                    backgroundImage: './assets/images/principle/arrow4.png',
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'right200',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state07',
                            isScroll: 1,
                            style: {
                                default: {
                                    display: 'none',
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                    ],
                },
                {
                    id: 'page01-arrow14',
                    type: 'arrow',
                    passCondition: { event: '', state: '', },
                    remark: 'arrow14',
                    initialStateID: 'state01',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    display: 'none',
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '31',
                                    height: '32',
                                    positionLeft: '452',
                                    positionTop: '125',
                                    zIndex: '1001',
                                    display: 'block',
                                    rotate: '0',
                                    backgroundImage: './assets/images/principle/downRight.png',
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'light3',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                    ],
                },
                {
                    id: 'page01-promp01',
                    type: 'promp',
                    passCondition: { event: '', state: '', },
                    remark: 'promp01',
                    initialStateID: 'state01',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    display: 'none',
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            text: '15&50信号冗余设计',
                        },
                        {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                                default: {
                                    positionLeft: '231',
                                    positionTop: '1',
                                    display: 'block',
                                    opacity: '1'
                                },

                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'fadein',
                                animationOutID: '',
                            },
                            text: '15&50信号冗余设计',
                        },
                        {
                            id: 'state03',
                            isScroll: 1,
                            style: {
                                default: {
                                    positionLeft: '231',
                                    positionTop: '1',
                                    display: 'block',
                                    opacity : '1'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'fadeout',
                                animationOutID: '',
                            },
                            text: '15&50信号冗余设计',
                        },
                    ],
                },
            ],
            publishArray: [
                {
                    id: 'publish01',
                    component: {
                        id: 'page01-component02',
                        stateID: 'state01',
                    },
                    order: '1',
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-line08',
                                stateID: 'state02',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-component02',
                                stateID: 'state01',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1103',
                            component: {
                                id: 'page01-component11',
                                stateID: 'state01',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1104',
                            component: {
                                id: 'page01-button01',
                                stateID: 'state01',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1105',
                            component: {
                                id: 'page01-arrow01',
                                stateID: 'state01',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1106',
                            component: {
                                id: 'page01-arrow01',
                                stateID: 'state02',
                            },
                            timeOut: '2000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1107',
                            component: {
                                id: 'page01-arrow02',
                                stateID: 'state01',
                            },
                            timeOut: '1001',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-arrow02',
                                stateID: 'state02',
                            },
                            timeOut: '3000',
                            setCurrentState: 'state03',
                        },
                         {
                            id: 'subscribe1109',
                            component: {
                                id: 'page01-component01',
                                stateID: 'state02',
                            },
                            timeOut: '3000',
                            setCurrentState: 'state01',
                        },
                    ],
                },
                {
                    id: 'publish02',
                    component: {
                        id: 'page01-component01',
                        stateID: 'state01',
                    },
                    order: '2',
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-line06',
                                stateID: 'state02',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1202',
                            component: {
                                id: 'page01-component01',
                                stateID: 'state01',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1203',
                            component: {
                                id: 'page01-button02',
                                stateID: 'state01',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1204',
                            component: {
                                id: 'page01-arrow03',
                                stateID: 'state01',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1205',
                            component: {
                                id: 'page01-arrow03',
                                stateID: 'state02',
                            },
                            timeOut: '3000',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1206',
                            component: {
                                id: 'page01-component09',
                                stateID: 'state02',
                            },
                            timeOut: '3500',
                            setCurrentState: 'state01',
                        },
                    ],
                },
                {
                    id: 'publish03',
                    component: {
                        id: 'page01-component09',
                        stateID: 'state01',
                    },
                    order: '3',
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1301',
                            component: {
                                id: 'page01-component09',
                                stateID: 'state01',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1302',
                            component: {
                                id: 'page01-button03',
                                stateID: 'state01',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1303',
                            component: {
                                id: 'page01-arrow04',
                                stateID: 'state01',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1304',
                            component: {
                                id: 'page01-arrow04',
                                stateID: 'state02',
                            },
                            timeOut: '2000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1305',
                            component: {
                                id: 'page01-arrow04',
                                stateID: 'state03',
                            },
                            timeOut: '2000',
                            setCurrentState: 'state04',
                        },
                        {
                            id: 'subscribe1306',
                            component: {
                                id: 'page01-arrow04',
                                stateID: 'state04',
                            },
                            timeOut: '4000',
                            setCurrentState: 'state05',
                        },
                        {
                            id: 'subscribe1307',
                            component: {
                                id: 'page01-component05',
                                stateID: 'state01',
                            },
                            timeOut: '4000',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1308',
                            component: {
                                id: 'page01-component05',
                                stateID: 'state02',
                            },
                            timeOut: '6000',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1309',
                            component: {
                                id: 'page01-line02',
                                stateID: 'state02',
                            },
                            timeOut: '6000',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1310',
                            component: {
                                id: 'page01-arrow05',
                                stateID: 'state01',
                            },
                            timeOut: '6000',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1311',
                            component: {
                                id: 'page01-arrow05',
                                stateID: 'state02',
                            },
                            timeOut: '7000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1312',
                            component: {
                                id: 'page01-arrow05',
                                stateID: 'state03',
                            },
                            timeOut: '7000',
                            setCurrentState: 'state04',
                        },
                        {
                            id: 'subscribe1313',
                            component: {
                                id: 'page01-arrow05',
                                stateID: 'state04',
                            },
                            timeOut: '8000',
                            setCurrentState: 'state05',
                        },
                        {
                            id: 'subscribe1314',
                            component: {
                                id: 'page01-component02',
                                stateID: 'state02',
                            },
                            timeOut: '8000',
                            setCurrentState: 'state03',
                        },
                    ],
                },
                {
                    id: 'publish04',
                    component: {
                        id: 'page01-component02',
                        stateID: 'state03',
                    },
                    order: '4',
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1401',
                            component: {
                                id: 'page01-component02',
                                stateID: 'state03',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1402',
                            component: {
                                id: 'page01-button04',
                                stateID: 'state01',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1403',
                            component: {
                                id: 'page01-arrow06',
                                stateID: 'state01',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1404',
                            component: {
                                id: 'page01-arrow06',
                                stateID: 'state02',
                            },
                            timeOut: '1001',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1405',
                            component: {
                                id: 'page01-arrow06',
                                stateID: 'state03',
                            },
                            timeOut: '1001',
                            setCurrentState: 'state04',
                        },
                        {
                            id: 'subscribe1406',
                            component: {
                                id: 'page01-arrow06',
                                stateID: 'state04',
                            },
                            timeOut: '2000',
                            setCurrentState: 'state05',
                        },
                        {
                            id: 'subscribe1407',
                            component: {
                                id: 'page01-component05',
                                stateID: 'state01',
                            },
                            timeOut: '2000',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1408',
                            component: {
                                id: 'page01-component05',
                                stateID: 'state02',
                            },
                            timeOut: '4000',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1409',
                            component: {
                                id: 'page01-arrow07',
                                stateID: 'state01',
                            },
                            timeOut: '4000',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1410',
                            component: {
                                id: 'page01-arrow07',
                                stateID: 'state02',
                            },
                            timeOut: '6000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1411',
                            component: {
                                id: 'page01-arrow07',
                                stateID: 'state03',
                            },
                            timeOut: '6000',
                            setCurrentState: 'state04',
                        },
                        {
                            id: 'subscribe1412',
                            component: {
                                id: 'page01-arrow07',
                                stateID: 'state04',
                            },
                            timeOut: '8000',
                            setCurrentState: 'state05',
                        },
                        {
                            id: 'subscribe1413',
                            component: {
                                id: 'page01-component09',
                                stateID: 'state02',
                            },
                            timeOut: '8000',
                            setCurrentState: 'state03',
                        },
                    ],
                },
                {
                    id: 'publish05',
                    component: {
                        id: 'page01-component09',
                        stateID: 'state03',
                    },
                    order: '5',
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1501',
                            component: {
                                id: 'page01-component09',
                                stateID: 'state03',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1502',
                            component: {
                                id: 'page01-button05',
                                stateID: 'state01',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1503',
                            component: {
                                id: 'page01-line13',
                                stateID: 'state02',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1504',
                            component: {
                                id: 'page01-arrow08',
                                stateID: 'state01',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1505',
                            component: {
                                id: 'page01-arrow08',
                                stateID: 'state02',
                            },
                            timeOut: '2000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1506',
                            component: {
                                id: 'page01-arrow08',
                                stateID: 'state03',
                            },
                            timeOut: '2000',
                            setCurrentState: 'state04',
                        },
                        {
                            id: 'subscribe1507',
                            component: {
                                id: 'page01-arrow08',
                                stateID: 'state04',
                            },
                            timeOut: '4000',
                            setCurrentState: 'state05',
                        },
                        {
                            id: 'subscribe1508',
                            component: {
                                id: 'page01-component10',
                                stateID: 'state01',
                            },
                            timeOut: '4000',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1509',
                            component: {
                                id: 'page01-line03',
                                stateID: 'state02',
                            },
                            timeOut: '4000',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1510',
                            component: {
                                id: 'page01-arrow09',
                                stateID: 'state01',
                            },
                            timeOut: '4000',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1511',
                            component: {
                                id: 'page01-arrow09',
                                stateID: 'state02',
                            },
                            timeOut: '6000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1512',
                            component: {
                                id: 'page01-arrow09',
                                stateID: 'state03',
                            },
                            timeOut: '6000',
                            setCurrentState: 'state04',
                        },
                        {
                            id: 'subscribe1513',
                            component: {
                                id: 'page01-arrow09',
                                stateID: 'state04',
                            },
                            timeOut: '6500',
                            setCurrentState: 'state05',
                        },
                        {
                            id: 'subscribe1514',
                            component: {
                                id: 'page01-component02',
                                stateID: 'state02',
                            },
                            timeOut: '6500',
                            setCurrentState: 'state04',
                        },
                    ],
                },
                {
                    id: 'publish06',
                    component: {
                        id: 'page01-component02',
                        stateID: 'state04',
                    },
                    order: '6',
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1601',
                            component: {
                                id: 'page01-component02',
                                stateID: 'state04',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1602',
                            component: {
                                id: 'page01-button06',
                                stateID: 'state01',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1603',
                            component: {
                                id: 'page01-line07',
                                stateID: 'state02',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1604',
                            component: {
                                id: 'page01-line01',
                                stateID: 'state02',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1605',
                            component: {
                                id: 'page01-arrow10',
                                stateID: 'state01',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1606',
                            component: {
                                id: 'page01-arrow10',
                                stateID: 'state02',
                            },
                            timeOut: '2000',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1607',
                            component: {
                                id: 'page01-arrow11',
                                stateID: 'state01',
                            },
                            timeOut: '1001',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1608',
                            component: {
                                id: 'page01-arrow11',
                                stateID: 'state02',
                            },
                            timeOut: '3000',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1609',
                            component: {
                                id: 'page01-arrow12',
                                stateID: 'state01',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1610',
                            component: {
                                id: 'page01-arrow12',
                                stateID: 'state02',
                            },
                            timeOut: '500',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1611',
                            component: {
                                id: 'page01-arrow12',
                                stateID: 'state03',
                            },
                            timeOut: '500',
                            setCurrentState: 'state04',
                        },
                        {
                            id: 'subscribe1612',
                            component: {
                                id: 'page01-arrow12',
                                stateID: 'state04',
                            },
                            timeOut: '1500',
                            setCurrentState: 'state05',
                        },
                        {
                            id: 'subscribe1613',
                            component: {
                                id: 'page01-arrow12',
                                stateID: 'state05',
                            },
                            timeOut: '1500',
                            setCurrentState: 'state06',
                        },
                        {
                            id: 'subscribe1614',
                            component: {
                                id: 'page01-arrow12',
                                stateID: 'state06',
                            },
                            timeOut: '2000',
                            setCurrentState: 'state07',
                        },
                        {
                            id: 'subscribe1615',
                            component: {
                                id: 'page01-arrow13',
                                stateID: 'state01',
                            },
                            timeOut: '1001',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1616',
                            component: {
                                id: 'page01-arrow13',
                                stateID: 'state02',
                            },
                            timeOut: '1500',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1617',
                            component: {
                                id: 'page01-arrow13',
                                stateID: 'state03',
                            },
                            timeOut: '1500',
                            setCurrentState: 'state04',
                        },
                        {
                            id: 'subscribe1618',
                            component: {
                                id: 'page01-arrow13',
                                stateID: 'state04',
                            },
                            timeOut: '2500',
                            setCurrentState: 'state05',
                        },
                        {
                            id: 'subscribe1619',
                            component: {
                                id: 'page01-arrow13',
                                stateID: 'state05',
                            },
                            timeOut: '2500',
                            setCurrentState: 'state06',
                        },
                        {
                            id: 'subscribe1620',
                            component: {
                                id: 'page01-arrow13',
                                stateID: 'state06',
                            },
                            timeOut: '3000',
                            setCurrentState: 'state07',
                        },
                        {
                            id: 'subscribe1621',
                            component: {
                                id: 'page01-promp01',
                                stateID: 'state01',
                            },
                            timeOut: '1500',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1622',
                            component: {
                                id: 'page01-component01',
                                stateID: 'state02',
                            },
                            timeOut: '3000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1623',
                            component: {
                                id: 'page01-promp01',
                                stateID: 'state02',
                            },
                            timeOut: '5000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1624',
                            component: {
                                id: 'page01-promp01',
                                stateID: 'state03',
                            },
                            timeOut: '7000',
                            setCurrentState: 'state01',
                        },
                    ],
                },
                {
                    id: 'publish07',
                    component: {
                        id: 'page01-component01',
                        stateID: 'state03',
                    },
                    order: '7',
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1701',
                            component: {
                                id: 'page01-component01',
                                stateID: 'state03',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1702',
                            component: {
                                id: 'page01-button07',
                                stateID: 'state01',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1703',
                            component: {
                                id: 'page01-arrow03',
                                stateID: 'state01',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1704',
                            component: {
                                id: 'page01-arrow03',
                                stateID: 'state02',
                            },
                            timeOut: '3000',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1705',
                            component: {
                                id: 'page01-component09',
                                stateID: 'state02',
                            },
                            timeOut: '3000',
                            setCurrentState: 'state05',
                        },
                    ],
                },
                {
                    id: 'publish08',
                    component: {
                        id: 'page01-component09',
                        stateID: 'state05',
                    },
                    order: '8',
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1801',
                            component: {
                                id: 'page01-component09',
                                stateID: 'state05',
                            },
                            timeOut: '0',
                            setCurrentState: 'state04',
                        },
                        {
                            id: 'subscribe1802',
                            component: {
                                id: 'page01-button08',
                                stateID: 'state01',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1803',
                            component: {
                                id: 'page01-line04',
                                stateID: 'state02',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1804',
                            component: {
                                id: 'page01-line05',
                                stateID: 'state02',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1805',
                            component: {
                                id: 'page01-line10',
                                stateID: 'state02',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1806',
                            component: {
                                id: 'page01-line11',
                                stateID: 'state02',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1807',
                            component: {
                                id: 'page01-arrow14',
                                stateID: 'state01',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1808',
                            component: {
                                id: 'page01-arrow14',
                                stateID: 'state02',
                            },
                            timeOut: '3000',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1809',
                            component: {
                                id: 'page01-button01',
                                stateID: 'state02',
                            },
                            timeOut: '3000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1810',
                            component: {
                                id: 'page01-button02',
                                stateID: 'state02',
                            },
                            timeOut: '3000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1811',
                            component: {
                                id: 'page01-button03',
                                stateID: 'state02',
                            },
                            timeOut: '3000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1812',
                            component: {
                                id: 'page01-button04',
                                stateID: 'state02',
                            },
                            timeOut: '3000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1813',
                            component: {
                                id: 'page01-button05',
                                stateID: 'state02',
                            },
                            timeOut: '3000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1814',
                            component: {
                                id: 'page01-button06',
                                stateID: 'state02',
                            },
                            timeOut: '3000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1815',
                            component: {
                                id: 'page01-button07',
                                stateID: 'state02',
                            },
                            timeOut: '3000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1816',
                            component: {
                                id: 'page01-button08',
                                stateID: 'state02',
                            },
                            timeOut: '3000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1817',
                            component: {
                                id: 'page01-component12',
                                stateID: 'state01',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                    ],
                },
                {
                    id: 'publish09',
                    component: {
                        id: 'page01-button01',
                        stateID: 'state03',
                    },
                    // order: '9',
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1901',
                            component: {
                                id: 'page01-button01',
                                stateID: 'state03',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1902',
                            component: {
                                id: 'page01-button02',
                                stateID: 'state03',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1903',
                            component: {
                                id: 'page01-button03',
                                stateID: 'state03',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1904',
                            component: {
                                id: 'page01-button04',
                                stateID: 'state03',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1905',
                            component: {
                                id: 'page01-button05',
                                stateID: 'state03',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1906',
                            component: {
                                id: 'page01-button06',
                                stateID: 'state03',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1907',
                            component: {
                                id: 'page01-button07',
                                stateID: 'state03',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1908',
                            component: {
                                id: 'page01-button08',
                                stateID: 'state03',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1909',
                            component: {
                                id: 'page01-component02',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state09',
                        },
                    ],
                },
                {
                    id: 'publish10',
                    component: {
                        id: 'page01-button02',
                        stateID: 'state03',
                    },
                    // order: '10',
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1001',
                            component: {
                                id: 'page01-button01',
                                stateID: 'state03',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1002',
                            component: {
                                id: 'page01-button02',
                                stateID: 'state03',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1003',
                            component: {
                                id: 'page01-button03',
                                stateID: 'state03',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1004',
                            component: {
                                id: 'page01-button04',
                                stateID: 'state03',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1005',
                            component: {
                                id: 'page01-button05',
                                stateID: 'state03',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1006',
                            component: {
                                id: 'page01-button06',
                                stateID: 'state03',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1007',
                            component: {
                                id: 'page01-button07',
                                stateID: 'state03',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1008',
                            component: {
                                id: 'page01-button08',
                                stateID: 'state03',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1009',
                            component: {
                                id: 'page01-component01',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state09',
                        },
                    ],
                },
                {
                    id: 'publish11',
                    component: {
                        id: 'page01-button03',
                        stateID: 'state03',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe2101',
                            component: {
                                id: 'page01-button01',
                                stateID: 'state03',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe2102',
                            component: {
                                id: 'page01-button02',
                                stateID: 'state03',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe2103',
                            component: {
                                id: 'page01-button03',
                                stateID: 'state03',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe2104',
                            component: {
                                id: 'page01-button04',
                                stateID: 'state03',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe2105',
                            component: {
                                id: 'page01-button05',
                                stateID: 'state03',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe2106',
                            component: {
                                id: 'page01-button06',
                                stateID: 'state03',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe2107',
                            component: {
                                id: 'page01-button07',
                                stateID: 'state03',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe2108',
                            component: {
                                id: 'page01-button08',
                                stateID: 'state03',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe2109',
                            component: {
                                id: 'page01-component09',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state09',
                        },
                    ],
                },
                {
                    id: 'publish12',
                    component: {
                        id: 'page01-button04',
                        stateID: 'state03',
                    },
                    // order: '4',
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe2201',
                            component: {
                                id: 'page01-button01',
                                stateID: 'state03',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe2202',
                            component: {
                                id: 'page01-button02',
                                stateID: 'state03',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe2203',
                            component: {
                                id: 'page01-button03',
                                stateID: 'state03',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe2204',
                            component: {
                                id: 'page01-button04',
                                stateID: 'state03',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe2205',
                            component: {
                                id: 'page01-button05',
                                stateID: 'state03',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe2206',
                            component: {
                                id: 'page01-button06',
                                stateID: 'state03',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe2207',
                            component: {
                                id: 'page01-button07',
                                stateID: 'state03',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe2208',
                            component: {
                                id: 'page01-button08',
                                stateID: 'state03',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe2209',
                            component: {
                                id: 'page01-component02',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state99',
                        },
                    ],
                },
                {
                    id: 'publish13',
                    component: {
                        id: 'page01-button05',
                        stateID: 'state03',
                    },
                    // order: '4',
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe2301',
                            component: {
                                id: 'page01-button01',
                                stateID: 'state03',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe2302',
                            component: {
                                id: 'page01-button02',
                                stateID: 'state03',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe2303',
                            component: {
                                id: 'page01-button03',
                                stateID: 'state03',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe2304',
                            component: {
                                id: 'page01-button04',
                                stateID: 'state03',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe2305',
                            component: {
                                id: 'page01-button05',
                                stateID: 'state03',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe2306',
                            component: {
                                id: 'page01-button06',
                                stateID: 'state03',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe2307',
                            component: {
                                id: 'page01-button07',
                                stateID: 'state03',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe2308',
                            component: {
                                id: 'page01-button08',
                                stateID: 'state03',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe2309',
                            component: {
                                id: 'page01-component09',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state99',
                        },
                    ],
                },
                {
                    id: 'publish14',
                    component: {
                        id: 'page01-button06',
                        stateID: 'state03',
                    },
                    // order: '4',
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe2401',
                            component: {
                                id: 'page01-button01',
                                stateID: 'state03',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe2402',
                            component: {
                                id: 'page01-button02',
                                stateID: 'state03',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe2403',
                            component: {
                                id: 'page01-button03',
                                stateID: 'state03',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe2404',
                            component: {
                                id: 'page01-button04',
                                stateID: 'state03',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe2405',
                            component: {
                                id: 'page01-button05',
                                stateID: 'state03',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe2406',
                            component: {
                                id: 'page01-button06',
                                stateID: 'state03',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe2407',
                            component: {
                                id: 'page01-button07',
                                stateID: 'state03',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe2408',
                            component: {
                                id: 'page01-button08',
                                stateID: 'state03',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe2409',
                            component: {
                                id: 'page01-component02',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state999',
                        },
                    ],
                },
                {
                    id: 'publish15',
                    component: {
                        id: 'page01-button07',
                        stateID: 'state03',
                    },
                    // order: '4',
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe2501',
                            component: {
                                id: 'page01-button01',
                                stateID: 'state03',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe2502',
                            component: {
                                id: 'page01-button02',
                                stateID: 'state03',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe2503',
                            component: {
                                id: 'page01-button03',
                                stateID: 'state03',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe2504',
                            component: {
                                id: 'page01-button04',
                                stateID: 'state03',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe2505',
                            component: {
                                id: 'page01-button05',
                                stateID: 'state03',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe2506',
                            component: {
                                id: 'page01-button06',
                                stateID: 'state03',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe2507',
                            component: {
                                id: 'page01-button07',
                                stateID: 'state03',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe2508',
                            component: {
                                id: 'page01-button08',
                                stateID: 'state03',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe2509',
                            component: {
                                id: 'page01-component01',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state99',
                        },
                    ],
                },
                {
                    id: 'publish16',
                    component: {
                        id: 'page01-button08',
                        stateID: 'state03',
                    },
                    // order: '4',
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe2501',
                            component: {
                                id: 'page01-button01',
                                stateID: 'state03',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe2502',
                            component: {
                                id: 'page01-button02',
                                stateID: 'state03',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe2503',
                            component: {
                                id: 'page01-button03',
                                stateID: 'state03',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe2504',
                            component: {
                                id: 'page01-button04',
                                stateID: 'state03',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe2505',
                            component: {
                                id: 'page01-button05',
                                stateID: 'state03',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe2506',
                            component: {
                                id: 'page01-button06',
                                stateID: 'state03',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe2507',
                            component: {
                                id: 'page01-button07',
                                stateID: 'state03',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe2508',
                            component: {
                                id: 'page01-button08',
                                stateID: 'state03',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe2609',
                            component: {
                                id: 'page01-component09',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state999',
                        },
                    ],
                },
                {
                    id: 'publish17',
                    component: {
                        id: 'page01-component02',
                        stateID: 'state09',
                    },
                    // order: '4',
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe2701',
                            component: {
                                id: 'page01-component02',
                                stateID: 'state09',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe2702',
                            component: {
                                id: 'page01-arrow01',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe2703',
                            component: {
                                id: 'page01-arrow01',
                                stateID: 'state02',
                            },
                            timeOut: '2000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe2704',
                            component: {
                                id: 'page01-arrow02',
                                stateID: '',
                            },
                            timeOut: '1001',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe2705',
                            component: {
                                id: 'page01-arrow02',
                                stateID: 'state02',
                            },
                            timeOut: '3000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe2706',
                            component: {
                                id: 'page01-button01',
                                stateID: 'state02',
                            },
                            timeOut: '3000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe2707',
                            component: {
                                id: 'page01-button02',
                                stateID: 'state02',
                            },
                            timeOut: '3000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe2708',
                            component: {
                                id: 'page01-button03',
                                stateID: 'state02',
                            },
                            timeOut: '3000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe2709',
                            component: {
                                id: 'page01-button04',
                                stateID: 'state02',
                            },
                            timeOut: '3000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe2710',
                            component: {
                                id: 'page01-button05',
                                stateID: 'state02',
                            },
                            timeOut: '3000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe2711',
                            component: {
                                id: 'page01-button06',
                                stateID: 'state02',
                            },
                            timeOut: '3000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe2712',
                            component: {
                                id: 'page01-button07',
                                stateID: 'state02',
                            },
                            timeOut: '3000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe2713',
                            component: {
                                id: 'page01-button08',
                                stateID: 'state02',
                            },
                            timeOut: '3000',
                            setCurrentState: 'state03',
                        },
                    ],
                },
                {
                    id: 'publish18',
                    component: {
                        id: 'page01-component01',
                        stateID: 'state09',
                    },
                    // order: '4',
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe2801',
                            component: {
                                id: 'page01-component01',
                                stateID: 'state09',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe2802',
                            component: {
                                id: 'page01-button01',
                                stateID: 'state02',
                            },
                            timeOut: '3000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe2803',
                            component: {
                                id: 'page01-button02',
                                stateID: 'state02',
                            },
                            timeOut: '3000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe2804',
                            component: {
                                id: 'page01-button03',
                                stateID: 'state02',
                            },
                            timeOut: '3000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe2805',
                            component: {
                                id: 'page01-button04',
                                stateID: 'state02',
                            },
                            timeOut: '3000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe2806',
                            component: {
                                id: 'page01-button05',
                                stateID: 'state02',
                            },
                            timeOut: '3000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe2807',
                            component: {
                                id: 'page01-button06',
                                stateID: 'state02',
                            },
                            timeOut: '3000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe2808',
                            component: {
                                id: 'page01-button07',
                                stateID: 'state02',
                            },
                            timeOut: '3000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe2809',
                            component: {
                                id: 'page01-button08',
                                stateID: 'state02',
                            },
                            timeOut: '3000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe2810',
                            component: {
                                id: 'page01-arrow03',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe2811',
                            component: {
                                id: 'page01-arrow03',
                                stateID: 'state02',
                            },
                            timeOut: '3000',
                            setCurrentState: 'state01',
                        },
                    ],
                },
                {
                    id: 'publish19',
                    component: {
                        id: 'page01-component09',
                        stateID: 'state09',
                    },
                    // order: '4',
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe2901',
                            component: {
                                id: 'page01-component09',
                                stateID: 'state09',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe2902',
                            component: {
                                id: 'page01-button01',
                                stateID: 'state02',
                            },
                            timeOut: '8000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe2903',
                            component: {
                                id: 'page01-button02',
                                stateID: 'state02',
                            },
                            timeOut: '8000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe2904',
                            component: {
                                id: 'page01-button03',
                                stateID: 'state02',
                            },
                            timeOut: '8000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe2905',
                            component: {
                                id: 'page01-button04',
                                stateID: 'state02',
                            },
                            timeOut: '8000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe2906',
                            component: {
                                id: 'page01-button05',
                                stateID: 'state02',
                            },
                            timeOut: '8000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe2907',
                            component: {
                                id: 'page01-button06',
                                stateID: 'state02',
                            },
                            timeOut: '8000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe2908',
                            component: {
                                id: 'page01-button07',
                                stateID: 'state02',
                            },
                            timeOut: '8000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe2909',
                            component: {
                                id: 'page01-button08',
                                stateID: 'state02',
                            },
                            timeOut: '8000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe2901',
                            component: {
                                id: 'page01-arrow04',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe2911',
                            component: {
                                id: 'page01-arrow04',
                                stateID: 'state02',
                            },
                            timeOut: '2000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe2912',
                            component: {
                                id: 'page01-arrow04',
                                stateID: 'state03',
                            },
                            timeOut: '2000',
                            setCurrentState: 'state04',
                        },
                        {
                            id: 'subscribe2913',
                            component: {
                                id: 'page01-arrow04',
                                stateID: 'state04',
                            },
                            timeOut: '4000',
                            setCurrentState: 'state05',
                        },
                        {
                            id: 'subscribe2914',
                            component: {
                                id: 'page01-component05',
                                stateID: '',
                            },
                            timeOut: '4000',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe2915',
                            component: {
                                id: 'page01-component05',
                                stateID: 'state02',
                            },
                            timeOut: '6000',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe2916',
                            component: {
                                id: 'page01-arrow05',
                                stateID: '',
                            },
                            timeOut: '6000',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe2917',
                            component: {
                                id: 'page01-arrow05',
                                stateID: 'state02',
                            },
                            timeOut: '7000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe2918',
                            component: {
                                id: 'page01-arrow05',
                                stateID: 'state03',
                            },
                            timeOut: '7000',
                            setCurrentState: 'state04',
                        },
                        {
                            id: 'subscribe2919',
                            component: {
                                id: 'page01-arrow05',
                                stateID: 'state04',
                            },
                            timeOut: '8000',
                            setCurrentState: 'state05',
                        },
                        {
                            id: 'subscribe2920',
                            component: {
                                id: 'page01-component10',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                    ],
                },
                {
                    id: 'publish20',
                    component: {
                        id: 'page01-component02',
                        stateID: 'state99',
                    },
                    // order: '4',
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe3001',
                            component: {
                                id: 'page01-component02',
                                stateID: 'state99',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe3002',
                            component: {
                                id: 'page01-button01',
                                stateID: 'state02',
                            },
                            timeOut: '8000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe3003',
                            component: {
                                id: 'page01-button02',
                                stateID: 'state02',
                            },
                            timeOut: '8000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe3004',
                            component: {
                                id: 'page01-button03',
                                stateID: 'state02',
                            },
                            timeOut: '8000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe3005',
                            component: {
                                id: 'page01-button04',
                                stateID: 'state02',
                            },
                            timeOut: '8000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe3006',
                            component: {
                                id: 'page01-button05',
                                stateID: 'state02',
                            },
                            timeOut: '8000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe3007',
                            component: {
                                id: 'page01-button06',
                                stateID: 'state02',
                            },
                            timeOut: '8000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe3008',
                            component: {
                                id: 'page01-button07',
                                stateID: 'state02',
                            },
                            timeOut: '8000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe3009',
                            component: {
                                id: 'page01-button08',
                                stateID: 'state02',
                            },
                            timeOut: '8000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe3010',
                            component: {
                                id: 'page01-arrow06',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe3011',
                            component: {
                                id: 'page01-arrow06',
                                stateID: 'state02',
                            },
                            timeOut: '1001',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe3012',
                            component: {
                                id: 'page01-arrow06',
                                stateID: 'state03',
                            },
                            timeOut: '1001',
                            setCurrentState: 'state04',
                        },
                        {
                            id: 'subscribe3013',
                            component: {
                                id: 'page01-arrow06',
                                stateID: 'state04',
                            },
                            timeOut: '2000',
                            setCurrentState: 'state05',
                        },
                        {
                            id: 'subscribe3014',
                            component: {
                                id: 'page01-component05',
                                stateID: '',
                            },
                            timeOut: '2000',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe3015',
                            component: {
                                id: 'page01-component05',
                                stateID: 'state02',
                            },
                            timeOut: '4000',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe3016',
                            component: {
                                id: 'page01-arrow07',
                                stateID: '',
                            },
                            timeOut: '4000',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe3017',
                            component: {
                                id: 'page01-arrow07',
                                stateID: 'state02',
                            },
                            timeOut: '6000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe3018',
                            component: {
                                id: 'page01-arrow07',
                                stateID: 'state03',
                            },
                            timeOut: '6000',
                            setCurrentState: 'state04',
                        },
                        {
                            id: 'subscribe3019',
                            component: {
                                id: 'page01-arrow07',
                                stateID: 'state04',
                            },
                            timeOut: '8000',
                            setCurrentState: 'state05',
                        },
                        {
                            id: 'subscribe3020',
                            component: {
                                id: 'page01-component10',
                                stateID: '',
                            },
                            timeOut: '8000',
                            setCurrentState: 'state02',
                        },
                    ],
                },
                {
                    id: 'publish21',
                    component: {
                        id: 'page01-component09',
                        stateID: 'state99',
                    },
                    // order: '4',
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe3101',
                            component: {
                                id: 'page01-component09',
                                stateID: 'state99',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe3102',
                            component: {
                                id: 'page01-button01',
                                stateID: 'state02',
                            },
                            timeOut: '6500',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe3103',
                            component: {
                                id: 'page01-button02',
                                stateID: 'state02',
                            },
                            timeOut: '6500',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe3104',
                            component: {
                                id: 'page01-button03',
                                stateID: 'state02',
                            },
                            timeOut: '6500',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe3105',
                            component: {
                                id: 'page01-button04',
                                stateID: 'state02',
                            },
                            timeOut: '6500',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe3106',
                            component: {
                                id: 'page01-button05',
                                stateID: 'state02',
                            },
                            timeOut: '6500',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe3107',
                            component: {
                                id: 'page01-button06',
                                stateID: 'state02',
                            },
                            timeOut: '6500',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe3108',
                            component: {
                                id: 'page01-button07',
                                stateID: 'state02',
                            },
                            timeOut: '6500',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe3109',
                            component: {
                                id: 'page01-button08',
                                stateID: 'state02',
                            },
                            timeOut: '6500',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe3110',
                            component: {
                                id: 'page01-arrow08',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe3111',
                            component: {
                                id: 'page01-arrow08',
                                stateID: 'state02',
                            },
                            timeOut: '2000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe3112',
                            component: {
                                id: 'page01-arrow08',
                                stateID: 'state03',
                            },
                            timeOut: '2000',
                            setCurrentState: 'state04',
                        },
                        {
                            id: 'subscribe3113',
                            component: {
                                id: 'page01-arrow08',
                                stateID: 'state04',
                            },
                            timeOut: '4000',
                            setCurrentState: 'state05',
                        },
                        {
                            id: 'subscribe3114',
                            component: {
                                id: 'page01-arrow09',
                                stateID: '',
                            },
                            timeOut: '4000',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe3115',
                            component: {
                                id: 'page01-arrow09',
                                stateID: 'state02',
                            },
                            timeOut: '6000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe3116',
                            component: {
                                id: 'page01-arrow09',
                                stateID: 'state03',
                            },
                            timeOut: '6000',
                            setCurrentState: 'state04',
                        },
                        {
                            id: 'subscribe3117',
                            component: {
                                id: 'page01-arrow09',
                                stateID: 'state04',
                            },
                            timeOut: '6500',
                            setCurrentState: 'state05',
                        },
                        {
                            id: 'subscribe3118',
                            component: {
                                id: 'page01-component10',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                    ],
                },
                {
                    id: 'publish22',
                    component: {
                        id: 'page01-component02',
                        stateID: 'state999',
                    },
                    // order: '4',
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe3201',
                            component: {
                                id: 'page01-component02',
                                stateID: 'state999',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe3202',
                            component: {
                                id: 'page01-button01',
                                stateID: 'state02',
                            },
                            timeOut: '7000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe3203',
                            component: {
                                id: 'page01-button02',
                                stateID: 'state02',
                            },
                            timeOut: '7000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe3204',
                            component: {
                                id: 'page01-button03',
                                stateID: 'state02',
                            },
                            timeOut: '7000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe3205',
                            component: {
                                id: 'page01-button04',
                                stateID: 'state02',
                            },
                            timeOut: '7000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe3206',
                            component: {
                                id: 'page01-button05',
                                stateID: 'state02',
                            },
                            timeOut: '7000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe3207',
                            component: {
                                id: 'page01-button06',
                                stateID: 'state02',
                            },
                            timeOut: '7000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe3208',
                            component: {
                                id: 'page01-button07',
                                stateID: 'state02',
                            },
                            timeOut: '7000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe3209',
                            component: {
                                id: 'page01-button08',
                                stateID: 'state02',
                            },
                            timeOut: '7000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe3210',
                            component: {
                                id: 'page01-arrow10',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe3211',
                            component: {
                                id: 'page01-arrow10',
                                stateID: 'state02',
                            },
                            timeOut: '2000',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe3212',
                            component: {
                                id: 'page01-arrow11',
                                stateID: '',
                            },
                            timeOut: '1001',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe3213',
                            component: {
                                id: 'page01-arrow11',
                                stateID: 'state02',
                            },
                            timeOut: '3000',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe3214',
                            component: {
                                id: 'page01-arrow12',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe3215',
                            component: {
                                id: 'page01-arrow12',
                                stateID: 'state02',
                            },
                            timeOut: '500',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe3216',
                            component: {
                                id: 'page01-arrow12',
                                stateID: 'state03',
                            },
                            timeOut: '500',
                            setCurrentState: 'state04',
                        },
                        {
                            id: 'subscribe3217',
                            component: {
                                id: 'page01-arrow12',
                                stateID: 'state04',
                            },
                            timeOut: '1500',
                            setCurrentState: 'state05',
                        },
                        {
                            id: 'subscribe3218',
                            component: {
                                id: 'page01-arrow12',
                                stateID: 'state05',
                            },
                            timeOut: '1500',
                            setCurrentState: 'state06',
                        },
                        {
                            id: 'subscribe3219',
                            component: {
                                id: 'page01-arrow12',
                                stateID: 'state06',
                            },
                            timeOut: '2000',
                            setCurrentState: 'state07',
                        },
                        {
                            id: 'subscribe3220',
                            component: {
                                id: 'page01-arrow13',
                                stateID: '',
                            },
                            timeOut: '1001',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe3221',
                            component: {
                                id: 'page01-arrow13',
                                stateID: 'state02',
                            },
                            timeOut: '1500',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe3222',
                            component: {
                                id: 'page01-arrow13',
                                stateID: 'state03',
                            },
                            timeOut: '1500',
                            setCurrentState: 'state04',
                        },
                        {
                            id: 'subscribe3223',
                            component: {
                                id: 'page01-arrow13',
                                stateID: 'state04',
                            },
                            timeOut: '2500',
                            setCurrentState: 'state05',
                        },
                        {
                            id: 'subscribe3224',
                            component: {
                                id: 'page01-arrow13',
                                stateID: 'state05',
                            },
                            timeOut: '2500',
                            setCurrentState: 'state06',
                        },
                        {
                            id: 'subscribe3225',
                            component: {
                                id: 'page01-arrow13',
                                stateID: 'state06',
                            },
                            timeOut: '3000',
                            setCurrentState: 'state07',
                        },
                        {
                            id: 'subscribe3226',
                            component: {
                                id: 'page01-promp01',
                                stateID: '',
                            },
                            timeOut: '1500',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe3227',
                            component: {
                                id: 'page01-promp01',
                                stateID: 'state02',
                            },
                            timeOut: '5000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe3228',
                            component: {
                                id: 'page01-promp01',
                                stateID: 'state03',
                            },
                            timeOut: '7000',
                            setCurrentState: 'state01',
                        },
                    ],
                },
                {
                    id: 'publish23',
                    component: {
                        id: 'page01-component01',
                        stateID: 'state99',
                    },
                    // order: '4',
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe3301',
                            component: {
                                id: 'page01-component01',
                                stateID: 'state99',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe3302',
                            component: {
                                id: 'page01-button01',
                                stateID: 'state02',
                            },
                            timeOut: '2000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe3303',
                            component: {
                                id: 'page01-button02',
                                stateID: 'state02',
                            },
                            timeOut: '3000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe3304',
                            component: {
                                id: 'page01-button03',
                                stateID: 'state02',
                            },
                            timeOut: '3000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe3305',
                            component: {
                                id: 'page01-button04',
                                stateID: 'state02',
                            },
                            timeOut: '3000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe3306',
                            component: {
                                id: 'page01-button05',
                                stateID: 'state02',
                            },
                            timeOut: '3000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe3307',
                            component: {
                                id: 'page01-button06',
                                stateID: 'state02',
                            },
                            timeOut: '3000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe3308',
                            component: {
                                id: 'page01-button07',
                                stateID: 'state02',
                            },
                            timeOut: '3000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe3309',
                            component: {
                                id: 'page01-button08',
                                stateID: 'state02',
                            },
                            timeOut: '3000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe3310',
                            component: {
                                id: 'page01-arrow03',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe3311',
                            component: {
                                id: 'page01-arrow03',
                                stateID: 'state02',
                            },
                            timeOut: '3000',
                            setCurrentState: 'state01',
                        },
                    ],
                },
                {
                    id: 'publish24',
                    component: {
                        id: 'page01-component09',
                        stateID: 'state999',
                    },
                    // order: '4',
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe3401',
                            component: {
                                id: 'page01-component09',
                                stateID: 'state999',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe3402',
                            component: {
                                id: 'page01-button01',
                                stateID: 'state02',
                            },
                            timeOut: '2000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe3403',
                            component: {
                                id: 'page01-button02',
                                stateID: 'state02',
                            },
                            timeOut: '3000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe3404',
                            component: {
                                id: 'page01-button03',
                                stateID: 'state02',
                            },
                            timeOut: '3000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe3405',
                            component: {
                                id: 'page01-button04',
                                stateID: 'state02',
                            },
                            timeOut: '3000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe3406',
                            component: {
                                id: 'page01-button05',
                                stateID: 'state02',
                            },
                            timeOut: '3000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe3407',
                            component: {
                                id: 'page01-button06',
                                stateID: 'state02',
                            },
                            timeOut: '3000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe3408',
                            component: {
                                id: 'page01-button07',
                                stateID: 'state02',
                            },
                            timeOut: '3000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe3409',
                            component: {
                                id: 'page01-button08',
                                stateID: 'state02',
                            },
                            timeOut: '3000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe3410',
                            component: {
                                id: 'page01-component09',
                                stateID: 'state05',
                            },
                            timeOut: '0',
                            setCurrentState: 'state04',
                        },
                        {
                            id: 'subscribe3411',
                            component: {
                                id: 'page01-arrow14',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe3412',
                            component: {
                                id: 'page01-arrow14',
                                stateID: 'state02',
                            },
                            timeOut: '3000',
                            setCurrentState: 'state01',
                        },
                    ],
                },
            ],
            // 页面动画,暂没此功能
            animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
            },
            backgroundImageSrc: '',
        },
    ],
};

export {
    Config,
    principleConfig,
}
