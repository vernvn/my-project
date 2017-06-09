interface Config {
    description;
    chapterArray;
    pageArray;
}

const appConfig: Config = {
    description: {
        name: '车型介绍',
        metadata: {
            schema: '', // 基于什么标准，xcj，scrom
            schemaversion: '0.1'
        },
        courseNumber: 'imports_magotan_demo_001',
        type: '', // 课件类型，WBT ,SBT,RM
        types: '', // wbtCourseWare，rmCourseWare，sbtCourseWare
        purpose: '', // 目的
        require: '', // 学习课件之前需要掌握什么技术
        keyword: '', // 关键词
        language: '', // 课件语言
        version: '', // 课件自身版本号
        client: 'PC', // 适用终端，PC、Android、iOS
        sumScore: '', // 总分数
        passCondition: '', // 通过条件
        completeCondition: '', // 完成条件，nub，
        entry: '', // 课件入口链接
    },
    chapterArray: [
        {
            id: 'chapter01',
            name: 'xx',
            description: '',
            order: '1',
            childChapterArray: []
        }
    ],
    pageArray: [
        {
            id: 'page01',
            isPass: 0,
            order: '1',
            chapterID: 'chapter01',
            componentArray: [
                {
                    id: 'page01-component01',
                    type: 'image',
                    passCondition: {
                        event: '',
                        state: ''
                    },
                    remark: '车辆场景',
                    initialStateID: 'state01',
                    src: '',
                    stateArray: [
                        {
                          id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '944',
                                    height: '520',
                                    positionLeft: '0',
                                    positionTop: '40',
                                    zIndex: '1',
                                    backgroundImage: './assets/images/plj_diag/vs_bg3.png',
                                    display: 'block',
                                    bacgroundColor: '#5b9bd5'
                                }
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: ''
                            },
                            textArray: []
                        }
                    ]
                }, {
                    id: 'page01-component02', // 车辆场景 文字
                    type: 'text',
                    initialStateID: 'state01',
                    passCondition: { event: '', state: '', },
                    remark: '',
                    src: '',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                              default: {
                                width: '92',
                                height: '27',
                                positionLeft: '20',
                                positionTop: '40',
                                zIndex: '1',
                                backgroundColor: '',
                                display: 'block',
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
                                    content: '车辆场景',
                                    style: {
                                      color: '#23577b',
                                      fontSize: '20',
                                      fontStyle: '',
                                      fontWeight: 'bold',
                                      lineHeight: '',
                                      // textDecoration: 'underline',
                                      textAlign: 'left',
                                    },
                                }
                            ],
                        },
                    ],
                }, {
                    id: 'page01-component03', // 右下方文字
                    type: 'text',
                    initialStateID: 'state01',
                    passCondition: { event: '', state: '', },
                    remark: '',
                    src: '',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                              default: {
                                display: 'none'
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
                                    content: '',
                                    style: {
                                      color: '#5b9bd5',
                                      fontSize: '14',
                                      fontStyle: '',
                                      fontWeight: '',
                                      lineHeight: '',
                                      // textDecoration: 'underline',
                                      textAlign: '',
                                    },
                                }
                            ],
                        }, {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                              default: {
                                width: '140',
                                height: '45',
                                positionLeft: '685',
                                positionTop: '445',
                                zIndex: '1',
                                backgroundColor: '#a5a2a3',
                                display: 'block',
                                border: '3px solid #afabab',
                                boxShadow: '0 0 15px 0 #afabab, 0 0 10px 0 #afabab inset',
                                borderRadius: '5px',
                                padding: '10px',
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
                                    content: '请点击【下一页】进入ODIS诊断界面',
                                    style: {
                                      color: '#000',
                                      fontSize: '16',
                                      fontStyle: '',
                                      fontWeight: '',
                                      lineHeight: '',
                                      // textDecoration: 'underline',
                                      textAlign: '',
                                    },
                                }
                            ],
                        },
                    ],
                }, {
                    id: 'page01-component04', // 右上方文字
                    type: 'text',
                    initialStateID: 'state01',
                    passCondition: { event: '', state: '', },
                    remark: '',
                    src: '',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                              default: {
                                width: '130',
                                height: '45',
                                positionLeft: '685',
                                positionTop: '192',
                                zIndex: '1',
                                backgroundColor: '#a5a2a3',
                                display: 'block',
                                border: '3px solid #afabab',
                                boxShadow: '0 0 15px 0 #afabab, 0 0 10px 0 #afabab inset',
                                borderRadius: '5px',
                                padding: '10px',
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
                                    content: '请打开危险警告灯及亮起三次超车灯',
                                    style: {
                                      color: '#000',
                                      fontSize: '16',
                                      fontStyle: '',
                                      fontWeight: '',
                                      lineHeight: '',
                                      // textDecoration: 'underline',
                                      textAlign: '',
                                    },
                                }
                            ],
                        },
                    ],
                }, {
                    id: 'page01-component05', // 三角跳页按钮
                    type: 'button',
                    initialStateID: 'state01',
                    passCondition: {
                        event: '',
                        state: ''
                    },
                    remark: 'anniu',
                    src: '',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '53',
                                    height: '20',
                                    positionLeft: '509',
                                    positionTop: '400',
                                    zIndex: '2',
                                    backgroundImage: '',
                                    border: '3px solid #5b9bd5',
                                    boxShadow: '0 0 15px 0 #163c7a',
                                    borderRadius: '0 0 5px 5px'
                                },
                                hover: {}
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: ''
                            },
                            textArray: [
                                {
                                    id: '',
                                    order: '1',
                                    content: '',
                                    style: {
                                        color: '',
                                        fontSize: '20',
                                        fontStyle: '',
                                        fontWeight: '',
                                        lineHeight: '64',
                                        textDecoration: '',
                                        textAlign: ''
                                    }
                                }
                            ]
                        }, {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                                default: {
                                    display: 'none'
                                },
                                hover: {}
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: ''
                            },
                            textArray: [
                                {
                                    id: '',
                                    order: '1',
                                    content: '',
                                    style: {
                                        color: '',
                                        fontSize: '20',
                                        fontStyle: '',
                                        fontWeight: '',
                                        lineHeight: '64',
                                        textDecoration: '',
                                        textAlign: ''
                                    }
                                }
                            ]
                        }
                    ]
                }, {
                    id: 'page01-component06', // 超车灯跳页按钮
                    type: 'jump',
                    initialStateID: 'state00',
                    passCondition: {
                        event: 'click',
                        state: 'start'
                    },
                    timeOut: '2500',
                    remark: 'anniu',
                    src: '',
                    stateArray: [
                        {
                            id: 'state00',
                            isScroll: 1,
                            style: {
                                default: {
                                    display: 'none',
                                },
                                hover: {}
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: ''
                            },
                            textArray: [
                                {
                                    id: '',
                                    order: '1',
                                    content: '',
                                    style: {
                                        color: '',
                                        fontSize: '20',
                                        fontStyle: '',
                                        fontWeight: '',
                                        lineHeight: '64',
                                        textDecoration: '',
                                        textAlign: ''
                                    }
                                }
                            ]
                        }, {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '50',
                                    height: '13',
                                    positionLeft: '116',
                                    positionTop: '307',
                                    zIndex: '2',
                                    backgroundImage: '',
                                    border: '3px solid #5b9bd5',
                                    boxShadow: '0 0 5px 0 #5b9bd5',
                                    display: 'block',
                                    borderRadius: '5px 5px 0 0'
                                },
                                hover: {}
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: ''
                            },
                            textArray: [
                                {
                                    id: '',
                                    order: '1',
                                    content: '',
                                    style: {
                                        color: '',
                                        fontSize: '20',
                                        fontStyle: '',
                                        fontWeight: '',
                                        lineHeight: '64',
                                        textDecoration: '',
                                        textAlign: ''
                                    }
                                }
                            ]
                        },
                        {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '50',
                                    height: '13',
                                    positionLeft: '116',
                                    positionTop: '307',
                                    zIndex: '2',
                                    backgroundImage: '',
                                    border: '3px solid #5b9bd5',
                                    boxShadow: '0 0 5px 0 #5b9bd5',
                                    display: 'block',
                                    backgroundColor: '#5b9bd5',
                                    borderRadius: '5px 5px 0 0'
                                },
                                hover: {}
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'ficker2',
                                animationOutID: ''
                            },
                            textArray: [
                                {
                                    id: '',
                                    order: '1',
                                    content: '',
                                    style: {
                                        color: '',
                                        fontSize: '20',
                                        fontStyle: '',
                                        fontWeight: '',
                                        lineHeight: '64',
                                        textDecoration: '',
                                        textAlign: ''
                                    }
                                }
                            ]
                        }
                    ]
                }, {
                    id: 'page01-component07',
                    type: 'image',
                    passCondition: {
                        event: '',
                        state: ''
                    },
                    remark: '车辆场景',
                    initialStateID: 'state01',
                    src: '',
                    stateArray: [
                        {
                          id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '10',
                                    height: '10',
                                    positionLeft: '534',
                                    positionTop: '408',
                                    zIndex: '1',
                                    backgroundImage: './assets/images/plj_diag/san.png',
                                    display: 'block',
                                    bacgroundColor: ''
                                }
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: ''
                            },
                            textArray: []
                        }, {
                          id: 'state02',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '10',
                                    height: '10',
                                    positionLeft: '534',
                                    positionTop: '408',
                                    zIndex: '1',
                                    backgroundImage: './assets/images/plj_diag/san.png',
                                    display: 'block',
                                    bacgroundColor: ''
                                }
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'ficker1',
                                animationOutID: ''
                            },
                            textArray: []
                        }
                    ]
                },
            ],
            publishArray: [
                {
                    id: 'publish01',
                    component: {
                        id: 'page01-component05',
                        stateID: 'state01'
                    },
                    order: '',
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-component05',
                                stateID: 'state01'
                            },
                            timeOut: '0',
                            setCurrentState: 'state02'
                        }, {
                            id: 'subscribe1103',
                            component: {
                                id: 'page01-component06',
                                stateID: 'state00'
                            },
                            timeOut: '0',
                            setCurrentState: 'state01'
                        }, {
                            id: 'subscribe1104',
                            component: {
                                id: 'page01-component07',
                                stateID: 'state01'
                            },
                            timeOut: '0',
                            setCurrentState: 'state02'
                        }
                    ]
                }, {
                    id: 'publish02',
                    component: {
                        id: 'page01-component06',
                        stateID: 'state01'
                    },
                    order: '',
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-component06',
                                stateID: 'state01'
                            },
                            timeOut: '0',
                            setCurrentState: 'state02'
                        }, {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-component03',
                                stateID: 'state01'
                            },
                            timeOut: '2500',
                            setCurrentState: 'state02'
                        }
                    ]
                }
            ],
            // 页面动画,暂没此功能
            animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: ''
            },
            backgroundImageSrc: ''
        },
        {
            id: 'page02',
            isPass: 0,
            order: '2',
            chapterID: 'chapter01',
            componentArray: [
                {
                    id: 'page01-component01',
                    type: 'image',
                    passCondition: {
                        event: '',
                        state: ''
                    },
                    remark: '诊断仪-启动诊断',
                    initialStateID: 'state01',
                    src: '',
                    stateArray: [
                        {
                            id: 'state00',
                            isScroll: 1,
                            style: {
                                default: {
                                    display: 'none'
                                }
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: ''
                            },
                            textArray: []
                        },
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '944',
                                    height: '520',
                                    positionLeft: '0',
                                    positionTop: '40',
                                    zIndex: '1',
                                    backgroundImage: './assets/images/plj_diag/diag1.png',
                                    display: 'block'
                                }
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: ''
                            },
                            textArray: []
                        }, {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '944',
                                    height: '520',
                                    positionLeft: '0',
                                    positionTop: '40',
                                    zIndex: '1',
                                    backgroundImage: './assets/images/plj_diag/diag2.png',
                                    display: 'block'
                                }
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: ''
                            },
                            textArray: []
                        }, {
                            id: 'state03',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '944',
                                    height: '520',
                                    positionLeft: '0',
                                    positionTop: '40',
                                    zIndex: '1',
                                    backgroundImage: './assets/images/plj_diag/diag3.png',
                                    display: 'block'
                                }
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: ''
                            },
                            textArray: []
                        }, {
                            id: 'state04',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '944',
                                    height: '520',
                                    positionLeft: '0',
                                    positionTop: '40',
                                    zIndex: '1',
                                    backgroundImage: './assets/images/plj_diag/diag4.png',
                                    display: 'block'
                                }
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: ''
                            },
                            textArray: []
                        }, {
                            id: 'state05',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '944',
                                    height: '520',
                                    positionLeft: '0',
                                    positionTop: '40',
                                    zIndex: '1',
                                    backgroundImage: './assets/images/plj_diag/diag5.png',
                                    display: 'block'
                                }
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: ''
                            },
                            textArray: []
                        }, {
                            id: 'state06',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '944',
                                    height: '520',
                                    positionLeft: '0',
                                    positionTop: '40',
                                    zIndex: '1',
                                    backgroundImage: './assets/images/plj_diag/diag6.png',
                                    display: 'block'
                                }
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: ''
                            },
                            textArray: []
                        }, {
                            id: 'state07',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '944',
                                    height: '520',
                                    positionLeft: '0',
                                    positionTop: '40',
                                    zIndex: '1',
                                    backgroundImage: './assets/images/plj_diag/diag7.png',
                                    display: 'block'
                                }
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: ''
                            },
                            textArray: []
                        }, {
                            id: 'state08',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '944',
                                    height: '520',
                                    positionLeft: '0',
                                    positionTop: '40',
                                    zIndex: '1',
                                    backgroundImage: './assets/images/plj_diag/diag8.png',
                                    display: 'block'
                                }
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: ''
                            },
                            textArray: []
                        }, {
                            id: 'state09',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '944',
                                    height: '520',
                                    positionLeft: '0',
                                    positionTop: '40',
                                    zIndex: '1',
                                    backgroundImage: './assets/images/plj_diag/diag9.png',
                                    display: 'block'
                                }
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: ''
                            },
                            textArray: []
                        }, {
                            id: 'state10',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '944',
                                    height: '520',
                                    positionLeft: '0',
                                    positionTop: '40',
                                    zIndex: '1',
                                    backgroundImage: './assets/images/plj_diag/diag10.png',
                                    display: 'block'
                                }
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: ''
                            },
                            textArray: []
                        }, {
                            id: 'state11',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '944',
                                    height: '520',
                                    positionLeft: '0',
                                    positionTop: '40',
                                    zIndex: '1',
                                    backgroundImage: './assets/images/plj_diag/diag11.png',
                                    display: 'block'
                                }
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: ''
                            },
                            textArray: []
                        }, {
                            id: 'state12',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '944',
                                    height: '520',
                                    positionLeft: '0',
                                    positionTop: '40',
                                    zIndex: '1',
                                    backgroundImage: './assets/images/plj_diag/diag12.png',
                                    display: 'block'
                                }
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: ''
                            },
                            textArray: []
                        }, {
                            id: 'state13',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '944',
                                    height: '520',
                                    positionLeft: '0',
                                    positionTop: '40',
                                    zIndex: '1',
                                    backgroundImage: './assets/images/plj_diag/diag13.png',
                                    display: 'block'
                                }
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: ''
                            },
                            textArray: []
                        }, {
                            id: 'state14',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '944',
                                    height: '520',
                                    positionLeft: '0',
                                    positionTop: '40',
                                    zIndex: '1',
                                    backgroundImage: './assets/images/plj_diag/diag14.png',
                                    display: 'block'
                                }
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: ''
                            },
                            textArray: []
                        }, {
                            id: 'state15',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '944',
                                    height: '520',
                                    positionLeft: '0',
                                    positionTop: '40',
                                    zIndex: '1',
                                    backgroundImage: './assets/images/plj_diag/diag15.png',
                                    display: 'block'
                                }
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: ''
                            },
                            textArray: []
                        }, {
                            id: 'state16',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '944',
                                    height: '520',
                                    positionLeft: '0',
                                    positionTop: '40',
                                    zIndex: '1',
                                    backgroundImage: './assets/images/plj_diag/diag16.png',
                                    display: 'block'
                                }
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: ''
                            },
                            textArray: []
                        }, {
                            id: 'state17',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '944',
                                    height: '520',
                                    positionLeft: '0',
                                    positionTop: '40',
                                    zIndex: '1',
                                    backgroundImage: './assets/images/plj_diag/diag16.png',
                                    display: 'block'
                                }
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: ''
                            },
                            textArray: []
                        }, {
                            id: 'state18',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '944',
                                    height: '520',
                                    positionLeft: '0',
                                    positionTop: '40',
                                    zIndex: '1',
                                    backgroundImage: './assets/images/plj_diag/diag16.png',
                                    display: 'block'
                                }
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: ''
                            },
                            textArray: []
                        }, {
                            id: 'state19',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '944',
                                    height: '520',
                                    positionLeft: '0',
                                    positionTop: '40',
                                    zIndex: '1',
                                    backgroundImage: './assets/images/plj_diag/diag17.png',
                                    display: 'block'
                                }
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: ''
                            },
                            textArray: []
                        }, {
                            id: 'state20',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '944',
                                    height: '520',
                                    positionLeft: '0',
                                    positionTop: '40',
                                    zIndex: '1',
                                    backgroundImage: './assets/images/plj_diag/diag14-1.png',
                                    display: 'block'
                                }
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: ''
                            },
                            textArray: []
                        }
                    ]
                }, {
                    id: 'page01-component02',
                    type: 'button',
                    initialStateID: 'state01',
                    passCondition: {
                        event: '',
                        state: ''
                    },
                    remark: 'anniu',
                    src: '',
                    stateArray: [
                        {
                            id: 'state00',
                            isScroll: 1,
                            style: {
                                default: {
                                    display: 'none'
                                },
                                hover: {}
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: ''
                            },
                            textArray: [
                                {
                                    id: '',
                                    order: '1',
                                    content: '',
                                    style: {
                                        color: '',
                                        fontSize: '20',
                                        fontStyle: '',
                                        fontWeight: '',
                                        lineHeight: '64',
                                        textDecoration: '',
                                        textAlign: ''
                                    }
                                }
                            ]
                        },
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '90',
                                    height: '35',
                                    positionLeft: '120',
                                    positionTop: '440',
                                    zIndex: '2',
                                    backgroundImage: '',
                                    border: '3px solid #5b9bd5',
                                    boxShadow: '0 0 15px 0 #163c7a',
                                    display: 'block'
                                },
                                hover: {}
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: ''
                            },
                            textArray: [
                                {
                                    id: '',
                                    order: '1',
                                    content: '',
                                    style: {
                                        color: '',
                                        fontSize: '20',
                                        fontStyle: '',
                                        fontWeight: '',
                                        lineHeight: '64',
                                        textDecoration: '',
                                        textAlign: ''
                                    }
                                }
                            ]
                        }, {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '45',
                                    height: '35',
                                    positionLeft: '293',
                                    positionTop: '317',
                                    zIndex: '2',
                                    backgroundImage: '',
                                    border: '3px solid #5b9bd5',
                                    boxShadow: '0 0 15px 0 #163c7a',
                                },
                                hover: {}
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: ''
                            },
                            textArray: [
                                {
                                    id: '',
                                    order: '1',
                                    content: '',
                                    style: {
                                        color: '',
                                        fontSize: '20',
                                        fontStyle: '',
                                        fontWeight: '',
                                        lineHeight: '64',
                                        textDecoration: '',
                                        textAlign: ''
                                    }
                                }
                            ]
                        }, {
                            id: 'state03',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '45',
                                    height: '35',
                                    positionLeft: '337',
                                    positionTop: '318',
                                    zIndex: '2',
                                    backgroundImage: '',
                                    border: '3px solid #5b9bd5',
                                    boxShadow: '0 0 15px 0 #163c7a',
                                },
                                hover: {}
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: ''
                            },
                            textArray: [
                                {
                                    id: '',
                                    order: '1',
                                    content: '',
                                    style: {
                                        color: '',
                                        fontSize: '20',
                                        fontStyle: '',
                                        fontWeight: '',
                                        lineHeight: '64',
                                        textDecoration: '',
                                        textAlign: ''
                                    }
                                }
                            ]
                        }, {
                            id: 'state04',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '17',
                                    height: '20',
                                    positionLeft: '607',
                                    positionTop: '161',
                                    zIndex: '2',
                                    backgroundImage: '',
                                    border: '3px solid #5b9bd5',
                                    boxShadow: '0 0 15px 0 #163c7a',
                                    display: 'block'
                                },
                                hover: {}
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: ''
                            },
                            textArray: [
                                {
                                    id: '',
                                    order: '1',
                                    content: '',
                                    style: {
                                        color: '',
                                        fontSize: '20',
                                        fontStyle: '',
                                        fontWeight: '',
                                        lineHeight: '64',
                                        textDecoration: '',
                                        textAlign: ''
                                    }
                                }
                            ]
                        }, {
                            id: 'state05',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '34',
                                    height: '28',
                                    positionLeft: '576',
                                    positionTop: '445',
                                    zIndex: '2',
                                    backgroundImage: '',
                                    border: '3px solid #5b9bd5',
                                    boxShadow: '0 0 15px 0 #163c7a',
                                },
                                hover: {}
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: ''
                            },
                            textArray: [
                                {
                                    id: '',
                                    order: '1',
                                    content: '',
                                    style: {
                                        color: '',
                                        fontSize: '20',
                                        fontStyle: '',
                                        fontWeight: '',
                                        lineHeight: '64',
                                        textDecoration: '',
                                        textAlign: ''
                                    }
                                }
                            ]
                        }, {
                            id: 'state06',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '365',
                                    height: '26',
                                    positionLeft: '110',
                                    positionTop: '286',
                                    zIndex: '2',
                                    backgroundImage: '',
                                    border: '3px solid #5b9bd5',
                                    boxShadow: '0 0 15px 0 #163c7a',
                                },
                                hover: {}
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: ''
                            },
                            textArray: [
                                {
                                    id: '',
                                    order: '1',
                                    content: '',
                                    style: {
                                        color: '',
                                        fontSize: '20',
                                        fontStyle: '',
                                        fontWeight: '',
                                        lineHeight: '64',
                                        textDecoration: '',
                                        textAlign: ''
                                    }
                                }
                            ]
                        }, {
                            id: 'state07',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '103',
                                    height: '25',
                                    positionLeft: '416',
                                    positionTop: '424',
                                    zIndex: '2',
                                    backgroundImage: '',
                                    border: '3px solid #5b9bd5',
                                    boxShadow: '0 0 15px 0 #163c7a',
                                    display: 'block'
                                },
                                hover: {}
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: ''
                            },
                            textArray: [
                                {
                                    id: '',
                                    order: '1',
                                    content: '',
                                    style: {
                                        color: '',
                                        fontSize: '20',
                                        fontStyle: '',
                                        fontWeight: '',
                                        lineHeight: '64',
                                        textDecoration: '',
                                        textAlign: ''
                                    }
                                }
                            ]
                        }, {
                            id: 'state08',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '126',
                                    height: '17',
                                    positionLeft: '208',
                                    positionTop: '262',
                                    zIndex: '2',
                                    backgroundImage: '',
                                    border: '3px solid #5b9bd5',
                                    boxShadow: '0 0 15px 0 #163c7a',
                                },
                                hover: {}
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: ''
                            },
                            textArray: [
                                {
                                    id: '',
                                    order: '1',
                                    content: '',
                                    style: {
                                        color: '',
                                        fontSize: '20',
                                        fontStyle: '',
                                        fontWeight: '',
                                        lineHeight: '64',
                                        textDecoration: '',
                                        textAlign: ''
                                    }
                                }
                            ]
                        }, {
                            id: 'state09',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '32',
                                    height: '26',
                                    positionLeft: '269',
                                    positionTop: '379',
                                    zIndex: '2',
                                    backgroundImage: '',
                                    border: '3px solid #5b9bd5',
                                    boxShadow: '0 0 15px 0 #163c7a',
                                },
                                hover: {}
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: ''
                            },
                            textArray: [
                                {
                                    id: '',
                                    order: '1',
                                    content: '',
                                    style: {
                                        color: '',
                                        fontSize: '20',
                                        fontStyle: '',
                                        fontWeight: '',
                                        lineHeight: '64',
                                        textDecoration: '',
                                        textAlign: ''
                                    }
                                }
                            ]
                        }, {
                            id: 'state10',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '135',
                                    height: '27',
                                    positionLeft: '664',
                                    positionTop: '204',
                                    zIndex: '2',
                                    backgroundImage: '',
                                    border: '3px solid #5b9bd5',
                                    boxShadow: '0 0 15px 0 #163c7a',
                                    display: 'block'
                                },
                                hover: {}
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: ''
                            },
                            textArray: [
                                {
                                    id: '',
                                    order: '1',
                                    content: '',
                                    style: {
                                        color: '',
                                        fontSize: '20',
                                        fontStyle: '',
                                        fontWeight: '',
                                        lineHeight: '64',
                                        textDecoration: '',
                                        textAlign: ''
                                    }
                                }
                            ]
                        }, {
                            id: 'state11',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '135',
                                    height: '27',
                                    positionLeft: '664',
                                    positionTop: '204',
                                    zIndex: '2',
                                    backgroundImage: '',
                                    border: '3px solid #5b9bd5',
                                    boxShadow: '0 0 15px 0 #163c7a',
                                    display: 'block'
                                },
                                hover: {}
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: ''
                            },
                            textArray: [
                                {
                                    id: '',
                                    order: '1',
                                    content: '',
                                    style: {
                                        color: '',
                                        fontSize: '20',
                                        fontStyle: '',
                                        fontWeight: '',
                                        lineHeight: '64',
                                        textDecoration: '',
                                        textAlign: ''
                                    }
                                }
                            ]
                        }, {
                            id: 'state12',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '135',
                                    height: '27',
                                    positionLeft: '664',
                                    positionTop: '204',
                                    zIndex: '2',
                                    backgroundImage: '',
                                    border: '3px solid #5b9bd5',
                                    boxShadow: '0 0 15px 0 #163c7a',
                                    display: 'block'
                                },
                                hover: {}
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: ''
                            },
                            textArray: [
                                {
                                    id: '',
                                    order: '1',
                                    content: '',
                                    style: {
                                        color: '',
                                        fontSize: '20',
                                        fontStyle: '',
                                        fontWeight: '',
                                        lineHeight: '64',
                                        textDecoration: '',
                                        textAlign: ''
                                    }
                                }
                            ]
                        }, {
                            id: 'state13',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '135',
                                    height: '27',
                                    positionLeft: '664',
                                    positionTop: '171',
                                    zIndex: '2',
                                    backgroundImage: '',
                                    border: '3px solid #5b9bd5',
                                    boxShadow: '0 0 15px 0 #163c7a',
                                    display: 'block'
                                },
                                hover: {}
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: ''
                            },
                            textArray: [
                                {
                                    id: '',
                                    order: '1',
                                    content: '',
                                    style: {
                                        color: '',
                                        fontSize: '20',
                                        fontStyle: '',
                                        fontWeight: '',
                                        lineHeight: '64',
                                        textDecoration: '',
                                        textAlign: ''
                                    }
                                }
                            ]
                        }, {
                            id: 'state14',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '43',
                                    height: '30',
                                    positionLeft: '306',
                                    positionTop: '340',
                                    zIndex: '2',
                                    backgroundImage: '',
                                    border: '3px solid #5b9bd5',
                                    boxShadow: '0 0 15px 0 #163c7a',
                                    display: 'block'
                                },
                                hover: {}
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: ''
                            },
                            textArray: [
                                {
                                    id: '',
                                    order: '1',
                                    content: '',
                                    style: {
                                        color: '',
                                        fontSize: '20',
                                        fontStyle: '',
                                        fontWeight: '',
                                        lineHeight: '64',
                                        textDecoration: '',
                                        textAlign: ''
                                    }
                                }
                            ]
                        }, {
                            id: 'state15',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '34',
                                    height: '28',
                                    positionLeft: '626',
                                    positionTop: '508',
                                    zIndex: '2',
                                    backgroundImage: '',
                                    border: '3px solid #5b9bd5',
                                    boxShadow: '0 0 15px 0 #163c7a',
                                },
                                hover: {}
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: ''
                            },
                            textArray: [
                                {
                                    id: '',
                                    order: '1',
                                    content: '',
                                    style: {
                                        color: '',
                                        fontSize: '20',
                                        fontStyle: '',
                                        fontWeight: '',
                                        lineHeight: '64',
                                        textDecoration: '',
                                        textAlign: ''
                                    }
                                }
                            ]
                        }, {
                            id: 'state16',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '135',
                                    height: '26',
                                    positionLeft: '664',
                                    positionTop: '171',
                                    zIndex: '2',
                                    backgroundImage: '',
                                    border: '3px solid #5b9bd5',
                                    boxShadow: '0 0 15px 0 #163c7a',
                                },
                                hover: {}
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: ''
                            },
                            textArray: [
                                {
                                    id: '',
                                    order: '1',
                                    content: '',
                                    style: {
                                        color: '',
                                        fontSize: '20',
                                        fontStyle: '',
                                        fontWeight: '',
                                        lineHeight: '64',
                                        textDecoration: '',
                                        textAlign: ''
                                    }
                                }
                            ]
                        }, {
                            id: 'state17',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '135',
                                    height: '26',
                                    positionLeft: '664',
                                    positionTop: '171',
                                    zIndex: '2',
                                    backgroundImage: '',
                                    border: '3px solid #5b9bd5',
                                    boxShadow: '0 0 15px 0 #163c7a',
                                },
                                hover: {}
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: ''
                            },
                            textArray: [
                                {
                                    id: '',
                                    order: '1',
                                    content: '',
                                    style: {
                                        color: '',
                                        fontSize: '20',
                                        fontStyle: '',
                                        fontWeight: '',
                                        lineHeight: '64',
                                        textDecoration: '',
                                        textAlign: ''
                                    }
                                }
                            ]
                        }
                    ]
                }, {
                    id: 'page01-component03',
                    type: 'input',
                    initialStateID: 'state01',
                    passCondition: {
                        event: '',
                        state: ''
                    },
                    remark: 'shurukuang',
                    src: '',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    display: 'none'
                                },
                                hover: {}
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: ''
                            },
                            textArray: [
                                {
                                    id: '',
                                    order: '1',
                                    placeholder: '',
                                    type: 'text',
                                    style: {
                                        color: '',
                                        fontSize: '12',
                                        fontStyle: '',
                                        fontWeight: '',
                                        lineHeight: '20',
                                        textDecoration: '',
                                        textAlign: ''
                                    }
                                }
                            ]
                        },
                        {
                            id: 'state02',
                            isScroll: 1,
                            length: 4,
                            style: {
                                default: {
                                    width: '133',
                                    height: '21',
                                    positionLeft: '667',
                                    positionTop: '180',
                                    zIndex: '2',
                                    backgroundImage: '',
                                    display: 'block'
                                },
                                hover: {}
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: ''
                            },
                            textArray: [
                                {
                                    id: '',
                                    order: '1',
                                    placeholder: '',
                                    type: 'text',
                                    style: {
                                        color: '',
                                        fontSize: '12',
                                        fontStyle: '',
                                        fontWeight: '',
                                        lineHeight: '',
                                        textDecoration: '',
                                        textAlign: ''
                                    }
                                }
                            ]
                        },
                        {
                            id: 'state03',
                            isScroll: 1,
                            length: 4,
                            style: {
                                default: {
                                    width: '133',
                                    height: '21',
                                    positionLeft: '667',
                                    positionTop: '180',
                                    zIndex: '2',
                                    backgroundImage: '',
                                    display: 'block'
                                },
                                hover: {}
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: ''
                            },
                            textArray: [
                                {
                                    id: '',
                                    order: '1',
                                    placeholder: '',
                                    type: 'text',
                                    style: {
                                        color: '',
                                        fontSize: '12',
                                        fontStyle: '',
                                        fontWeight: '',
                                        lineHeight: '',
                                        textDecoration: '',
                                        textAlign: ''
                                    }
                                }
                            ]
                        },
                        {
                            id: 'state04',
                            isScroll: 1,
                            length: 2,
                            style: {
                                default: {
                                    width: '133',
                                    height: '21',
                                    positionLeft: '667',
                                    positionTop: '180',
                                    zIndex: '2',
                                    backgroundImage: '',
                                    display: 'block'
                                },
                                hover: {}
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: ''
                            },
                            textArray: [
                                {
                                    id: '',
                                    order: '1',
                                    placeholder: '',
                                    type: 'text',
                                    style: {
                                        color: '',
                                        fontSize: '12',
                                        fontStyle: '',
                                        fontWeight: '',
                                        lineHeight: '',
                                        textDecoration: '',
                                        textAlign: ''
                                    }
                                }
                            ]
                        },
                        {
                            id: 'state05',
                            isScroll: 1,
                            length: 6,
                            style: {
                                default: {
                                    width: '131',
                                    height: '14',
                                    positionLeft: '254',
                                    positionTop: '308',
                                    zIndex: '2',
                                    backgroundImage: '',
                                    display: 'block'
                                },
                                hover: {}
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: ''
                            },
                            textArray: [
                                {
                                    id: '',
                                    order: '1',
                                    placeholder: '',
                                    type: 'password',
                                    length: '6',
                                    style: {
                                        color: '',
                                        fontSize: '12',
                                        fontStyle: '',
                                        fontWeight: '',
                                        lineHeight: '',
                                        textDecoration: '',
                                        textAlign: ''
                                    }
                                }
                            ]
                        },
                    ]
                }, {
                    id: 'page01-component04',
                    type: 'text',
                    initialStateID: 'state01',
                    passCondition: { event: '', state: '', },
                    remark: '',
                    src: '',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                              default: {
                                display: 'none'
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
                                    content: '0',
                                    style: {
                                    },
                                }
                            ],
                        },
                        {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                              default: {
                                width: '',
                                height: '',
                                positionLeft: '81',
                                positionTop: '238',
                                zIndex: '1',
                                backgroundColor: '#fff',
                                display: 'block'
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
                                    content: '1',
                                    style: {
                                      color: '#000',
                                      fontSize: '12',
                                      fontStyle: '',
                                      fontWeight: '',
                                      lineHeight: '',
                                      // textDecoration: 'underline',
                                      textAlign: '',
                                    },
                                }
                            ],
                        },
                        {
                            id: 'state03',
                            isScroll: 1,
                            style: {
                              default: {
                                positionLeft: '81',
                                positionTop: '238',
                                zIndex: '1',
                                backgroundColor: '#fff',
                                display: 'block'
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
                                    content: '2',
                                    style: {
                                      color: '#000',
                                      fontSize: '12',
                                      fontStyle: '',
                                      fontWeight: '',
                                      lineHeight: '',
                                      // textDecoration: 'underline',
                                      textAlign: '',
                                    },
                                }
                            ],
                        }, {
                            id: 'state04',
                            isScroll: 1,
                            style: {
                              default: {
                                width: '130',
                                height: '65',
                                positionLeft: '390',
                                positionTop: '280',
                                zIndex: '1',
                                backgroundColor: '#a5a2a3',
                                display: 'block',
                                border: '3px solid #afabab',
                                boxShadow: '0 0 15px 0 #afabab, 0 0 10px 0 #afabab inset',
                                borderRadius: '5px',
                                padding: '10px'
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
                                    content: '请点击【下一页】进入【车辆场景】操作两把点火钥匙',
                                    style: {
                                      color: '#000',
                                      fontSize: '16',
                                      fontStyle: '',
                                      fontWeight: '',
                                      lineHeight: '',
                                      // textDecoration: 'underline',
                                      textAlign: '',
                                      left: '15',
                                      top: '15'
                                    },
                                }
                            ],
                        },
                    ],
                }, {
                    id: 'page01-component05',
                    type: 'jump',
                    initialStateID: 'state01',
                    passCondition: {
                        event: 'click',
                        state: 'start'
                    },
                    remark: 'anniu',
                    src: '',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    display: 'none'
                                },
                                hover: {}
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: ''
                            },
                            textArray: [
                                {
                                    id: '',
                                    order: '1',
                                    content: '',
                                    style: {
                                        color: '',
                                        fontSize: '20',
                                        fontStyle: '',
                                        fontWeight: '',
                                        lineHeight: '64',
                                        textDecoration: '',
                                        textAlign: ''
                                    }
                                }
                            ]
                        }, {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '135',
                                    height: '26',
                                    positionLeft: '664',
                                    positionTop: '223',
                                    zIndex: '2',
                                    backgroundImage: '',
                                    border: '3px solid #5b9bd5',
                                    boxShadow: '0 0 15px 0 #163c7a',
                                },
                                hover: {}
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: ''
                            },
                            textArray: [
                                {
                                    id: '',
                                    order: '1',
                                    content: '',
                                    style: {
                                        color: '',
                                        fontSize: '20',
                                        fontStyle: '',
                                        fontWeight: '',
                                        lineHeight: '64',
                                        textDecoration: '',
                                        textAlign: ''
                                    }
                                }
                            ]
                        }
                    ]
                }, {
                    id: 'page01-component06',
                    type: 'button',
                    initialStateID: 'state01',
                    passCondition: {
                        event: '',
                        state: ''
                    },
                    remark: 'anniu',
                    src: '',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    display: 'none'
                                },
                                hover: {}
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: ''
                            },
                            textArray: [
                                {
                                    id: '',
                                    order: '1',
                                    content: '',
                                    style: {
                                        color: '',
                                        fontSize: '20',
                                        fontStyle: '',
                                        fontWeight: '',
                                        lineHeight: '64',
                                        textDecoration: '',
                                        textAlign: ''
                                    }
                                }
                            ]
                        },
                        {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '140',
                                    height: '24',
                                    positionLeft: '661',
                                    positionTop: '176',
                                    zIndex: '1',
                                    backgroundImage: '',
                                    border: '3px solid #5b9bd5',
                                    boxShadow: '0 0 15px 0 #163c7a',
                                    display: 'block'
                                },
                                hover: {}
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: ''
                            },
                            textArray: [
                                {
                                    id: '',
                                    order: '1',
                                    content: '',
                                    style: {
                                        color: '',
                                        fontSize: '20',
                                        fontStyle: '',
                                        fontWeight: '',
                                        lineHeight: '64',
                                        textDecoration: '',
                                        textAlign: ''
                                    }
                                }
                            ]
                        }, {
                            id: 'state03',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '134',
                                    height: '19',
                                    positionLeft: '248',
                                    positionTop: '307',
                                    zIndex: '1',
                                    backgroundImage: '',
                                    border: '3px solid #5b9bd5',
                                    boxShadow: '0 0 15px 0 #163c7a',
                                },
                                hover: {}
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: ''
                            },
                            textArray: [
                                {
                                    id: '',
                                    order: '1',
                                    content: '',
                                    style: {
                                        color: '',
                                        fontSize: '20',
                                        fontStyle: '',
                                        fontWeight: '',
                                        lineHeight: '64',
                                        textDecoration: '',
                                        textAlign: ''
                                    }
                                }
                            ]
                        }
                    ]
                }
            ],
            publishArray: [
                {
                    id: 'publish01',
                    component: {
                        id: 'page01-component02',
                        stateID: 'state01'
                    },
                    order: '',
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-component01',
                                stateID: 'state01'
                            },
                            timeOut: '0',
                            setCurrentState: 'state02'
                        }, {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-component02',
                                stateID: 'state01'
                            },
                            timeOut: '0',
                            setCurrentState: 'state02'
                        }
                    ]
                }, {
                    id: 'publish02',
                    component: {
                        id: 'page01-component02',
                        stateID: 'state02'
                    },
                    order: '',
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-component01',
                                stateID: 'state02'
                            },
                            timeOut: '0',
                            setCurrentState: 'state03'
                        }, {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-component02',
                                stateID: 'state02'
                            },
                            timeOut: '0',
                            setCurrentState: 'state03'
                        }
                    ]
                }, {
                    id: 'publish03',
                    component: {
                        id: 'page01-component02',
                        stateID: 'state03'
                    },
                    order: '',
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-component01',
                                stateID: 'state03'
                            },
                            timeOut: '0',
                            setCurrentState: 'state04'
                        }, {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-component02',
                                stateID: 'state03'
                            },
                            timeOut: '0',
                            setCurrentState: 'state04'
                        }
                    ]
                }, {
                    id: 'publish04',
                    component: {
                        id: 'page01-component02',
                        stateID: 'state04'
                    },
                    order: '',
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-component01',
                                stateID: 'state04'
                            },
                            timeOut: '0',
                            setCurrentState: 'state05'
                        }, {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-component02',
                                stateID: 'state04'
                            },
                            timeOut: '0',
                            setCurrentState: 'state05'
                        }
                    ]
                }, {
                    id: 'publish05',
                    component: {
                        id: 'page01-component02',
                        stateID: 'state05'
                    },
                    order: '',
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-component01',
                                stateID: 'state05'
                            },
                            timeOut: '0',
                            setCurrentState: 'state06'
                        }, {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-component02',
                                stateID: 'state05'
                            },
                            timeOut: '0',
                            setCurrentState: 'state06'
                        }
                    ]
                }, {
                    id: 'publish06',
                    component: {
                        id: 'page01-component02',
                        stateID: 'state06'
                    },
                    order: '',
                    triggerEvent: 'dblclick',
                    subscribeArray: [
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-component01',
                                stateID: 'state06'
                            },
                            timeOut: '0',
                            setCurrentState: 'state07'
                        }, {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-component02',
                                stateID: 'state06'
                            },
                            timeOut: '0',
                            setCurrentState: 'state07'
                        }
                    ]
                }, {
                    id: 'publish07',
                    component: {
                        id: 'page01-component02',
                        stateID: 'state07'
                    },
                    order: '',
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-component01',
                                stateID: 'state07'
                            },
                            timeOut: '0',
                            setCurrentState: 'state08'
                        }, {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-component02',
                                stateID: 'state07'
                            },
                            timeOut: '0',
                            setCurrentState: 'state08'
                        }
                    ]
                }, {
                    id: 'publish08',
                    component: {
                        id: 'page01-component02',
                        stateID: 'state08'
                    },
                    order: '',
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-component01',
                                stateID: 'state08'
                            },
                            timeOut: '0',
                            setCurrentState: 'state09'
                        }, {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-component02',
                                stateID: 'state08'
                            },
                            timeOut: '0',
                            setCurrentState: 'state09'
                        }
                    ]
                }, {
                    id: 'publish09',
                    component: {
                        id: 'page01-component02',
                        stateID: 'state09'
                    },
                    order: '',
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-component01',
                                stateID: 'state09'
                            },
                            timeOut: '0',
                            setCurrentState: 'state10'
                        }, {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-component02',
                                stateID: 'state09'
                            },
                            timeOut: '0',
                            setCurrentState: 'state00'
                        }, {
                            id: 'subscribe1103',
                            component: {
                                id: 'page01-component03',
                                stateID: 'state01'
                            },
                            timeOut: '0',
                            setCurrentState: 'state02'
                        }, {
                            id: 'subscribe1104',
                            component: {
                                id: 'page01-component06',
                                stateID: 'state01'
                            },
                            timeOut: '0',
                            setCurrentState: 'state02'
                        }
                    ]
                }, {
                    id: 'publish10',
                    component: {
                        id: 'page01-component03',
                        stateID: 'state02'
                    },
                    order: '',
                    triggerEvent: 'input',
                    subscribeArray: [
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-component02',
                                stateID: 'state00'
                            },
                            timeOut: '0',
                            setCurrentState: 'state10'
                        }, {
                            id: 'subscribe1103',
                            component: {
                                id: 'page01-component06',
                                stateID: 'state02'
                            },
                            timeOut: '0',
                            setCurrentState: 'state01'
                        }
                    ]
                }, {
                    id: 'publish11',
                    component: {
                        id: 'page01-component02',
                        stateID: 'state10'
                    },
                    order: '',
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-component01',
                                stateID: 'state10'
                            },
                            timeOut: '0',
                            setCurrentState: 'state11'
                        }, {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-component02',
                                stateID: 'state10'
                            },
                            timeOut: '0',
                            setCurrentState: 'state00'
                        }, {
                            id: 'subscribe1103',
                            component: {
                                id: 'page01-component03',
                                stateID: 'state02'
                            },
                            timeOut: '0',
                            setCurrentState: 'state03'
                        }, {
                            id: 'subscribe1104',
                            component: {
                                id: 'page01-component06',
                                stateID: 'state01'
                            },
                            timeOut: '0',
                            setCurrentState: 'state02'
                        }
                    ]
                }, {
                    id: 'publish12',
                    component: {
                        id: 'page01-component03',
                        stateID: 'state03'
                    },
                    order: '',
                    triggerEvent: 'input',
                    subscribeArray: [
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-component02',
                                stateID: 'state00'
                            },
                            timeOut: '0',
                            setCurrentState: 'state11'
                        }, {
                            id: 'subscribe1104',
                            component: {
                                id: 'page01-component06',
                                stateID: 'state02'
                            },
                            timeOut: '0',
                            setCurrentState: 'state01'
                        }
                    ]
                }, {
                    id: 'publish13',
                    component: {
                        id: 'page01-component02',
                        stateID: 'state11'
                    },
                    order: '',
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-component01',
                                stateID: 'state11'
                            },
                            timeOut: '0',
                            setCurrentState: 'state12'
                        }, {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-component02',
                                stateID: 'state11'
                            },
                            timeOut: '0',
                            setCurrentState: 'state00'
                        }, {
                            id: 'subscribe1103',
                            component: {
                                id: 'page01-component03',
                                stateID: 'state03'
                            },
                            timeOut: '0',
                            setCurrentState: 'state04'
                        }, {
                            id: 'subscribe1104',
                            component: {
                                id: 'page01-component06',
                                stateID: 'state01'
                            },
                            timeOut: '0',
                            setCurrentState: 'state02'
                        }
                    ]
                }, {
                    id: 'publish14',
                    component: {
                        id: 'page01-component03',
                        stateID: 'state04'
                    },
                    order: '',
                    triggerEvent: 'input',
                    subscribeArray: [
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-component02',
                                stateID: 'state00'
                            },
                            timeOut: '0',
                            setCurrentState: 'state12'
                        }, {
                            id: 'subscribe1104',
                            component: {
                                id: 'page01-component06',
                                stateID: 'state02'
                            },
                            timeOut: '0',
                            setCurrentState: 'state01'
                        }
                    ]
                }, {
                    id: 'publish15',
                    component: {
                        id: 'page01-component02',
                        stateID: 'state12'
                    },
                    order: '',
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-component01',
                                stateID: 'state12'
                            },
                            timeOut: '0',
                            setCurrentState: 'state13'
                        }, {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-component02',
                                stateID: 'state12'
                            },
                            timeOut: '0',
                            setCurrentState: 'state13'
                        }, {
                            id: 'subscribe1103',
                            component: {
                                id: 'page01-component03',
                                stateID: 'state04'
                            },
                            timeOut: '0',
                            setCurrentState: 'state01'
                        }
                    ]
                }, {
                    id: 'publish16',
                    component: {
                        id: 'page01-component02',
                        stateID: 'state13'
                    },
                    order: '',
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-component01',
                                stateID: 'state13'
                            },
                            timeOut: '0',
                            setCurrentState: 'state14'
                        }, {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-component02',
                                stateID: 'state13'
                            },
                            timeOut: '0',
                            setCurrentState: 'state00'
                        }, {
                            id: 'subscribe1103',
                            component: {
                                id: 'page01-component03',
                                stateID: 'state01'
                            },
                            timeOut: '0',
                            setCurrentState: 'state05'
                        }, {
                            id: 'subscribe1104',
                            component: {
                                id: 'page01-component06',
                                stateID: 'state01'
                            },
                            timeOut: '0',
                            setCurrentState: 'state03'
                        }
                    ]
                }, {
                    id: 'publish17',
                    component: {
                        id: 'page01-component03',
                        stateID: 'state05'
                    },
                    order: '',
                    triggerEvent: 'input',
                    subscribeArray: [
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-component01',
                                stateID: 'state14'
                            },
                            timeOut: '0',
                            setCurrentState: 'state20'
                        },
                       {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-component02',
                                stateID: 'state00'
                            },
                            timeOut: '0',
                            setCurrentState: 'state14'
                        }, {
                            id: 'subscribe1103',
                            component: {
                                id: 'page01-component03',
                                stateID: 'state05'
                            },
                            timeOut: '0',
                            setCurrentState: 'state01'
                        }, {
                            id: 'subscribe1104',
                            component: {
                                id: 'page01-component06',
                                stateID: 'state03'
                            },
                            timeOut: '0',
                            setCurrentState: 'state01'
                        }
                    ]
                }, {
                    id: 'publish18',
                    component: {
                        id: 'page01-component02',
                        stateID: 'state14'
                    },
                    order: '',
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-component01',
                                stateID: 'state20'
                            },
                            timeOut: '0',
                            setCurrentState: 'state15'
                        }, {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-component02',
                                stateID: 'state14'
                            },
                            timeOut: '0',
                            setCurrentState: 'state00'
                        }, {
                            id: 'subscribe1103',
                            component: {
                                id: 'page01-component03',
                                stateID: 'state05'
                            },
                            timeOut: '0',
                            setCurrentState: 'state01'
                        }, {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-component01',
                                stateID: 'state15'
                            },
                            timeOut: '1000',
                            setCurrentState: 'state16'
                        }, {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-component02',
                                stateID: 'state00'
                            },
                            timeOut: '1000',
                            setCurrentState: 'state16'
                        }
                    ]
                }, {
                    id: 'publish19',
                    component: {
                        id: 'page01-component02',
                        stateID: 'state16'
                    },
                    order: '',
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-component01',
                                stateID: 'state16'
                            },
                            timeOut: '0',
                            setCurrentState: 'state17'
                        }, {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-component02',
                                stateID: 'state16'
                            },
                            timeOut: '0',
                            setCurrentState: 'state17'
                        }, {
                            id: 'subscribe1103',
                            component: {
                                id: 'page01-component04',
                                stateID: 'state01'
                            },
                            timeOut: '0',
                            setCurrentState: 'state02'
                        }
                    ]
                }, {
                    id: 'publish20',
                    component: {
                        id: 'page01-component02',
                        stateID: 'state17'
                    },
                    order: '',
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-component01',
                                stateID: 'state17'
                            },
                            timeOut: '0',
                            setCurrentState: 'state18'
                        }, {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-component02',
                                stateID: 'state17'
                            },
                            timeOut: '0',
                            setCurrentState: 'state00'
                        }, {
                            id: 'subscribe1103',
                            component: {
                                id: 'page01-component04',
                                stateID: 'state02'
                            },
                            timeOut: '0',
                            setCurrentState: 'state03'
                        }, {
                            id: 'subscribe1104',
                            component: {
                                id: 'page01-component05',
                                stateID: 'state01'
                            },
                            timeOut: '0',
                            setCurrentState: 'state02'
                        }
                    ]
                }, {
                    id: 'publish21',
                    component: {
                        id: 'page01-component05',
                        stateID: 'state02'
                    },
                    order: '',
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-component01',
                                stateID: 'state18'
                            },
                            timeOut: '0',
                            setCurrentState: 'state19'
                        }, {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-component02',
                                stateID: 'state18'
                            },
                            timeOut: '0',
                            setCurrentState: 'state00'
                        }, {
                            id: 'subscribe1103',
                            component: {
                                id: 'page01-component04',
                                stateID: 'state03'
                            },
                            timeOut: '0',
                            setCurrentState: 'state04'
                        }, {
                            id: 'subscribe1104',
                            component: {
                                id: 'page01-component05',
                                stateID: 'state02'
                            },
                            timeOut: '0',
                            setCurrentState: 'state01'
                        }
                    ]
                }
            ],
            // 页面动画,暂没此功能
            animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: ''
            },
            backgroundImageSrc: ''
        },
        {
            id: 'page03',
            isPass: 0,
            order: '3',
            chapterID: 'chapter01',
            title: '车辆场景',
            backgroundImageSrc: '',
            componentArray: [
                {
                    id: 'page01-component01',
                    type: 'image',
                    passCondition: {
                        event: '',
                        state: ''
                    },
                    remark: '车辆场景',
                    initialStateID: 'state01',
                    src: '',
                    stateArray: [
                        {
                          id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '944',
                                    height: '520',
                                    positionLeft: '0',
                                    positionTop: '40',
                                    zIndex: '1',
                                    backgroundImage: './assets/images/plj_diag/vs_bg.png',
                                    display: 'block'
                                }
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: ''
                            },
                            textArray: []
                        }, {
                          id: 'state02',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '944',
                                    height: '520',
                                    positionLeft: '0',
                                    positionTop: '40',
                                    zIndex: '1',
                                    backgroundImage: './assets/images/plj_diag/vs_bg2.png',
                                    display: 'block'
                                }
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: ''
                            },
                            textArray: []
                        }
                    ]
                }, {
                    id: 'page01-component02', // 点火钥匙1
                    type: 'button',
                    initialStateID: 'state01',
                    passCondition: {
                        event: 'click',
                        state: 'start'
                    },
                    remark: 'anniu',
                    src: '',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '71',
                                    height: '71',
                                    positionLeft: '440',
                                    positionTop: '185',
                                    zIndex: '2',
                                    backgroundImage: './assets/images/plj_diag/ignition.png',
                                    border: '3px solid #5b9bd5',
                                    boxShadow: '0 0 15px 0 #163c7a',
                                    display: 'block',
                                    borderRadius: '5px'
                                },
                                hover: {}
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: ''
                            },
                            textArray: [
                                {
                                    id: '',
                                    order: '1',
                                    content: '',
                                    style: {
                                        color: '',
                                        fontSize: '',
                                        fontStyle: '',
                                        fontWeight: '',
                                        lineHeight: '64',
                                        textDecoration: '',
                                        textAlign: ''
                                    }
                                }
                            ]
                        }, {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                                default: {
                                    display: 'none'
                                },
                                hover: {}
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: ''
                            },
                            textArray: [
                                {
                                    id: '',
                                    order: '1',
                                    content: '',
                                    style: {
                                        color: '',
                                        fontSize: '20',
                                        fontStyle: '',
                                        fontWeight: '',
                                        lineHeight: '64',
                                        textDecoration: '',
                                        textAlign: ''
                                    }
                                }
                            ]
                        }, {
                            id: 'state03',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '71',
                                    height: '71',
                                    positionLeft: '440',
                                    positionTop: '185',
                                    zIndex: '2',
                                    backgroundImage: './assets/images/plj_diag/ignition.png',
                                    border: '3px solid #5b9bd5',
                                    boxShadow: '0 0 15px 0 #163c7a',
                                    display: 'block',
                                    borderRadius: '5px'
                                },
                                hover: {}
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: ''
                            },
                            textArray: [
                                {
                                    id: '',
                                    order: '1',
                                    content: '',
                                    style: {
                                        color: '',
                                        fontSize: '',
                                        fontStyle: '',
                                        fontWeight: '',
                                        lineHeight: '64',
                                        textDecoration: '',
                                        textAlign: ''
                                    }
                                }
                            ]
                        },
                    ]
                }, {
                    id: 'page01-component03', // 点火钥匙2
                    type: 'jump',
                    initialStateID: 'state01',
                    passCondition: {
                        event: 'click',
                        state: 'start'
                    },
                    remark: 'anniu',
                    src: '',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '71',
                                    height: '71',
                                    positionLeft: '540',
                                    positionTop: '185',
                                    zIndex: '2',
                                    backgroundImage: './assets/images/plj_diag/ignition.png',
                                    border: '3px solid #5b9bd5',
                                    boxShadow: '0 0 15px 0 #163c7a',
                                    display: 'block',
                                },
                                hover: {}
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: ''
                            },
                            textArray: [
                                {
                                    id: '',
                                    order: '1',
                                    content: '',
                                    style: {
                                        color: '',
                                        fontSize: '',
                                        fontStyle: '',
                                        fontWeight: '',
                                        lineHeight: '64',
                                        textDecoration: '',
                                        textAlign: ''
                                    }
                                }
                            ]
                        }, {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                                default: {
                                    display: 'none'
                                },
                                hover: {}
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: ''
                            },
                            textArray: [
                                {
                                    id: '',
                                    order: '1',
                                    content: '',
                                    style: {
                                        color: '',
                                        fontSize: '20',
                                        fontStyle: '',
                                        fontWeight: '',
                                        lineHeight: '64',
                                        textDecoration: '',
                                        textAlign: ''
                                    }
                                }
                            ]
                        },
                    ]
                }, {
                    id: 'page01-component04', // 右下方文字
                    type: 'text',
                    initialStateID: 'state01',
                    passCondition: { event: '', state: '', },
                    remark: '',
                    src: '',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                              default: {
                                display: 'none'
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
                                    content: '',
                                    style: {
                                      color: '#5b9bd5',
                                      fontSize: '14',
                                      fontStyle: '',
                                      fontWeight: '',
                                      lineHeight: '',
                                      // textDecoration: 'underline',
                                      textAlign: '',
                                      left: '15',
                                      top: '15'
                                    },
                                }
                            ],
                        }, {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                              default: {
                                width: '143',
                                height: '45',
                                positionLeft: '680',
                                positionTop: '435',
                                zIndex: '1',
                                backgroundColor: '#a5a2a3',
                                display: 'block',
                                border: '3px solid #afabab',
                                boxShadow: '0 0 15px 0 #afabab, 0 0 10px 0 #afabab inset',
                                borderRadius: '5px',
                                padding: '10px'
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
                                    content: '请点击【下一页】返回ODIS诊断界面',
                                    style: {
                                      color: '#000',
                                      fontSize: '16',
                                      fontStyle: '',
                                      fontWeight: '',
                                      lineHeight: '',
                                      // textDecoration: 'underline',
                                      textAlign: '',
                                      left: '15',
                                      top: '15'
                                    },
                                }
                            ],
                        },
                    ],
                }, {
                    id: 'page01-component05', // 点火钥匙1 文字
                    type: 'text',
                    initialStateID: 'state01',
                    passCondition: { event: '', state: '', },
                    remark: '',
                    src: '',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                              default: {
                                width: '71',
                                height: '',
                                positionLeft: '445',
                                positionTop: '265',
                                zIndex: '1',
                                backgroundColor: '',
                                display: 'block',
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
                                    content: '点火钥匙1',
                                    style: {
                                      color: '#355c83',
                                      fontSize: '14',
                                      fontStyle: '',
                                      fontWeight: '',
                                      lineHeight: '',
                                      // textDecoration: 'underline',
                                      textAlign: 'center',
                                    },
                                }
                            ],
                        }, {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                              default: {
                                width: '71',
                                height: '',
                                positionLeft: '445',
                                positionTop: '265',
                                zIndex: '1',
                                backgroundColor: '',
                                display: 'block',
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
                                    content: '点火钥匙1 以识别',
                                    style: {
                                      color: '#355c83',
                                      fontSize: '14',
                                      fontStyle: '',
                                      fontWeight: '',
                                      lineHeight: '',
                                      // textDecoration: 'underline',
                                      textAlign: 'center',
                                    },
                                }
                            ],
                        },
                    ],
                }, {
                    id: 'page01-component06', // 点火钥匙2 文字
                    type: 'text',
                    initialStateID: 'state01',
                    passCondition: { event: '', state: '', },
                    remark: '',
                    src: '',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                              default: {
                                width: '71',
                                height: '',
                                positionLeft: '545',
                                positionTop: '265',
                                zIndex: '1',
                                backgroundColor: '',
                                display: 'block',
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
                                    content: '点火钥匙2',
                                    style: {
                                      color: '#355c83',
                                      fontSize: '14',
                                      fontStyle: '',
                                      fontWeight: '',
                                      lineHeight: '',
                                      // textDecoration: 'underline',
                                      textAlign: 'center',
                                    },
                                }
                            ],
                        },
                    ],
                }, {
                    id: 'page01-component07', // 车辆场景 文字
                    type: 'text',
                    initialStateID: 'state01',
                    passCondition: { event: '', state: '', },
                    remark: '',
                    src: '',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                              default: {
                                width: '92',
                                height: '27',
                                positionLeft: '20',
                                positionTop: '40',
                                zIndex: '1',
                                backgroundColor: '',
                                display: 'block',
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
                                    content: '车辆场景',
                                    style: {
                                      color: '#23577b',
                                      fontSize: '20',
                                      fontStyle: '',
                                      fontWeight: 'bold',
                                      lineHeight: '',
                                      // textDecoration: 'underline',
                                      textAlign: 'left',
                                    },
                                }
                            ],
                        },
                    ],
                }, {
                    id: 'page01-component08', // 右下方文字
                    type: 'text',
                    initialStateID: 'state01',
                    passCondition: { event: '', state: '', },
                    remark: '',
                    src: '',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                              default: {
                                width: '145',
                                height: '60',
                                positionLeft: '685',
                                positionTop: '192',
                                zIndex: '1',
                                backgroundColor: '#a5a2a3',
                                display: 'block',
                                border: '3px solid #afabab',
                                boxShadow: '0 0 15px 0 #afabab, 0 0 10px 0 #afabab inset',
                                borderRadius: '5px',
                                padding: '10px',
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
                                    content: '切记：两把点火钥匙的调换时间不能超过30S',
                                    style: {
                                      color: '#000',
                                      fontSize: '16',
                                      fontStyle: '',
                                      fontWeight: '',
                                      lineHeight: '',
                                      // textDecoration: 'underline',
                                      textAlign: '',
                                    },
                                }
                            ],
                        },
                    ],
                }
            ],
            publishArray: [
                {
                    id: 'publish01',
                    component: {
                        id: 'page01-component02',
                        stateID: 'state01'
                    },
                    order: '1',
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-component01',
                                stateID: 'state01'
                            },
                            timeOut: '0',
                            setCurrentState: 'state02'
                        }, {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-component02',
                                stateID: 'state01'
                            },
                            timeOut: '0',
                            setCurrentState: 'state02'
                        }
                    ]
                }, {
                    id: 'publish02',
                    component: {
                        id: 'page01-component03',
                        stateID: 'state01'
                    },
                    order: '2',
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-component02',
                                stateID: 'state02'
                            },
                            timeOut: '0',
                            setCurrentState: 'state03'
                        }, {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-component03',
                                stateID: 'state01'
                            },
                            timeOut: '0',
                            setCurrentState: 'state02'
                        }, {
                          id: 'subscribe1103',
                            component: {
                                id: 'page01-component04',
                                stateID: 'state01'
                            },
                            timeOut: '0',
                            setCurrentState: 'state02'
                        }, {
                          id: 'subscribe1104',
                            component: {
                                id: 'page01-component05',
                                stateID: 'state01'
                            },
                            timeOut: '0',
                            setCurrentState: 'state02'
                        }
                    ]
                }
            ],
            animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: ''
            },
        },
        {
            id: 'page04',
            isPass: 0,
            order: '4',
            chapterID: 'chapter01',
            componentArray: [
                {
                    id: 'page01-component01',
                    type: 'image',
                    passCondition: {
                        event: '',
                        state: ''
                    },
                    remark: '诊断仪-完成继续',
                    initialStateID: 'state01',
                    src: '',
                    stateArray: [
                        {
                            id: 'state00',
                            isScroll: 1,
                            style: {
                                default: {
                                    display: 'none'
                                }
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: ''
                            },
                            textArray: []
                        },
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '944',
                                    height: '520',
                                    positionLeft: '0',
                                    positionTop: '40',
                                    zIndex: '1',
                                    backgroundImage: './assets/images/plj_diag/diag17.png',
                                    display: 'block'
                                }
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: ''
                            },
                            textArray: []
                        }, {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '944',
                                    height: '520',
                                    positionLeft: '0',
                                    positionTop: '40',
                                    zIndex: '1',
                                    backgroundImage: './assets/images/plj_diag/diag18.png',
                                    display: 'block'
                                }
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: ''
                            },
                            textArray: []
                        }, {
                            id: 'state03',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '944',
                                    height: '520',
                                    positionLeft: '0',
                                    positionTop: '40',
                                    zIndex: '1',
                                    backgroundImage: './assets/images/plj_diag/diag19.png',
                                    display: 'block'
                                }
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: ''
                            },
                            textArray: []
                        }, {
                            id: 'state04',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '944',
                                    height: '520',
                                    positionLeft: '0',
                                    positionTop: '40',
                                    zIndex: '1',
                                    backgroundImage: './assets/images/plj_diag/diag20.png',
                                    display: 'block'
                                }
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: ''
                            },
                            textArray: []
                        }, {
                            id: 'state05',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '944',
                                    height: '520',
                                    positionLeft: '0',
                                    positionTop: '40',
                                    zIndex: '1',
                                    backgroundImage: './assets/images/plj_diag/diag21.png',
                                    display: 'block'
                                }
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: ''
                            },
                            textArray: []
                        }
                    ]
                }, {
                    id: 'page01-component02',
                    type: 'button',
                    initialStateID: 'state01',
                    passCondition: {
                        event: '',
                        state: ''
                    },
                    remark: 'anniu',
                    src: '',
                    stateArray: [
                        {
                            id: 'state00',
                            isScroll: 1,
                            style: {
                                default: {
                                    display: 'none'
                                },
                                hover: {}
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: ''
                            },
                            textArray: [
                                {
                                    id: '',
                                    order: '1',
                                    content: '',
                                    style: {
                                        color: '',
                                        fontSize: '20',
                                        fontStyle: '',
                                        fontWeight: '',
                                        lineHeight: '64',
                                        textDecoration: '',
                                        textAlign: ''
                                    }
                                }
                            ]
                        },
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '135',
                                    height: '26',
                                    positionLeft: '664',
                                    positionTop: '171',
                                    zIndex: '2',
                                    backgroundImage: '',
                                    border: '3px solid #5b9bd5',
                                    boxShadow: '0 0 15px 0 #163c7a',
                                    display: 'block'
                                },
                                hover: {}
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: ''
                            },
                            textArray: [
                                {
                                    id: '',
                                    order: '1',
                                    content: '',
                                    style: {
                                        color: '',
                                        fontSize: '20',
                                        fontStyle: '',
                                        fontWeight: '',
                                        lineHeight: '64',
                                        textDecoration: '',
                                        textAlign: ''
                                    }
                                }
                            ]
                        }, {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '135',
                                    height: '26',
                                    positionLeft: '664',
                                    positionTop: '171',
                                    zIndex: '2',
                                    backgroundImage: '',
                                    border: '3px solid #5b9bd5',
                                    boxShadow: '0 0 15px 0 #163c7a',
                                    display: 'block'
                                },
                                hover: {}
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: ''
                            },
                            textArray: [
                                {
                                    id: '',
                                    order: '1',
                                    content: '',
                                    style: {
                                        color: '',
                                        fontSize: '20',
                                        fontStyle: '',
                                        fontWeight: '',
                                        lineHeight: '64',
                                        textDecoration: '',
                                        textAlign: ''
                                    }
                                }
                            ]
                        }, {
                            id: 'state03',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '135',
                                    height: '26',
                                    positionLeft: '664',
                                    positionTop: '171',
                                    zIndex: '2',
                                    backgroundImage: '',
                                    border: '3px solid #5b9bd5',
                                    boxShadow: '0 0 15px 0 #163c7a',
                                    display: 'block'
                                },
                                hover: {}
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: ''
                            },
                            textArray: [
                                {
                                    id: '',
                                    order: '1',
                                    content: '',
                                    style: {
                                        color: '',
                                        fontSize: '20',
                                        fontStyle: '',
                                        fontWeight: '',
                                        lineHeight: '64',
                                        textDecoration: '',
                                        textAlign: ''
                                    }
                                }
                            ]
                        }, {
                            id: 'state04',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '135',
                                    height: '26',
                                    positionLeft: '664',
                                    positionTop: '171',
                                    zIndex: '2',
                                    backgroundImage: '',
                                    border: '3px solid #5b9bd5',
                                    boxShadow: '0 0 15px 0 #163c7a',
                                    display: 'block'
                                },
                                hover: {}
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: ''
                            },
                            textArray: [
                                {
                                    id: '',
                                    order: '1',
                                    content: '',
                                    style: {
                                        color: '',
                                        fontSize: '20',
                                        fontStyle: '',
                                        fontWeight: '',
                                        lineHeight: '64',
                                        textDecoration: '',
                                        textAlign: ''
                                    }
                                }
                            ]
                        }
                    ]
                }, {
                    id: 'page01-component03',
                    type: 'text',
                    initialStateID: 'state01',
                    passCondition: { event: '', state: '', },
                    remark: '',
                    src: '',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                              default: {
                                display: 'none'
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
                                    content: '0',
                                    style: {
                                    },
                                }
                            ],
                        },
                        {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                              default: {
                                width: '176',
                                height: '23',
                                positionLeft: '390',
                                positionTop: '255',
                                zIndex: '1',
                                backgroundColor: '#a5a2a3',
                                display: 'block',
                                border: '3px solid #afabab',
                                boxShadow: '0 0 15px 0 #afabab, 0 0 10px 0 #afabab inset',
                                borderRadius: '5px',
                                padding: '10px'
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
                                    content: '两把钥匙的匹配流程结束',
                                    style: {
                                      color: '#000',
                                      fontSize: '16',
                                      fontStyle: '',
                                      fontWeight: '',
                                      lineHeight: '',
                                      // textDecoration: 'underline',
                                      textAlign: '',
                                      left: '15',
                                      top: '15'
                                    },
                                }
                            ],
                        },
                    ],
                }
            ],
            publishArray: [
                {
                    id: 'publish01',
                    component: {
                        id: 'page01-component02',
                        stateID: 'state01'
                    },
                    order: '',
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-component01',
                                stateID: 'state01'
                            },
                            timeOut: '0',
                            setCurrentState: 'state02'
                        }, {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-component02',
                                stateID: 'state01'
                            },
                            timeOut: '0',
                            setCurrentState: 'state02'
                        }
                    ]
                }, {
                    id: 'publish02',
                    component: {
                        id: 'page01-component02',
                        stateID: 'state02'
                    },
                    order: '',
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-component01',
                                stateID: 'state02'
                            },
                            timeOut: '0',
                            setCurrentState: 'state03'
                        }, {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-component02',
                                stateID: 'state02'
                            },
                            timeOut: '0',
                            setCurrentState: 'state00'
                        }, {
                            id: 'subscribe1103',
                            component: {
                                id: 'page01-component01',
                                stateID: 'state03'
                            },
                            timeOut: '1000',
                            setCurrentState: 'state04'
                        }, {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-component02',
                                stateID: 'state00'
                            },
                            timeOut: '1000',
                            setCurrentState: 'state03'
                        }
                    ]
                }, {
                    id: 'publish03',
                    component: {
                        id: 'page01-component02',
                        stateID: 'state03'
                    },
                    order: '',
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-component01',
                                stateID: 'state04'
                            },
                            timeOut: '0',
                            setCurrentState: 'state05'
                        }, {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-component02',
                                stateID: 'state03'
                            },
                            timeOut: '0',
                            setCurrentState: 'state00'
                        }, {
                            id: 'subscribe1103',
                            component: {
                                id: 'page01-component03',
                                stateID: 'state01'
                            },
                            timeOut: '0',
                            setCurrentState: 'state02'
                        }
                    ]
                }
            ],
            // 页面动画,暂没此功能
            animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: ''
            },
            backgroundImageSrc: ''
        }
    ]
};

export {Config, appConfig}
