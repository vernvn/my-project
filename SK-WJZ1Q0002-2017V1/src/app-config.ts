export const appConfig: {
    chapter: string,
    isChapter: boolean,
    logo?: string,
    pages: any[],
}[] =
    [
        // 第二页模板
        {
            chapter: '介绍',
            isChapter: false,
            pages: [
                {
                    // 简介页面
                    template: 'profile',
                    flg: true,
                    img: './assets/images1/profile_bg.png',
                },
                    // 目标页面
                {
                    template: 'fjzinfo',
                    flg: true,
                    gytittle: '目标',
                    img: './assets/images/info_bg.png',
                    targetList: [
                        '能独立按照安全标准操作相关生产设备',
                        '能按照安全要求使用防护装置',
                        '能按照标准处理危险品/化学品/污染性车辆零件&材料',
                    ],
                    targetText: '本课程将向大家介绍关于安全的相关知识',
                },
            ],
        },
        // 安全标准 章节
        {
            chapter: '安全标准',
            isChapter: true,
            pages: [
                // 上文字下多图  标准
                {
                    template: 'fjz-hc-mis',
                    gytittle: '标准',
                     flg: false,
                    content: {
                        // 中间图片尺寸
                        size: {
                            'max-width': '440px',
                            'max-height': '310px',
                        },
                        style: {
                            // 'background-color' : 'orange',
                        },
                        targetList: [
                        ],
                        imgs: [
                            // {
                            //     img: './assets/images1/huaxue.png',
                            //     top: {},
                            //     bottom: {
                            //         style: {
                            //             'color': '#000',
                            //             'font-size': '16px',
                            //             // 'font-weight': 'bold'
                            //         }, content: '载色剂'
                            //     }
                            // },
                            {
                                img: './assets/images1/bg-3.jpg',
                                top: {},
                                bottom: {
                                    style: {
                                        'color': '#476BAC',
                                        'font-size': '16px',
                                        'font-weight': 'bold'
                                    },
                                    content: '为了保证车间生产安全，请参考国家标准',
                                    text: '【中华人民共和国安全生产法】',
                                }
                            }
                        ],
                    }
                },
                // 原则
                {
                    template: 'target',
                    gytittle: '原则',
                    img: './assets/images1/10.png',
                    line: true,
                    content: [
                    ]
                },
            ],
        },
        // 设备安全 章节
        {
            chapter: '设备安全',
            isChapter: true,
            pages: [
                // 点击出文字框  压缩空气
                {
                    template: 'target',
                    gytittle: '压缩空气',
                    img: './assets/images1/yasuo_1.png',
                    line: true,
                    content: [
                        {
                            point: '',
                            type: 1,
                            show: false,
                            position: {
                                left: '269',
                                top: '202',
                                wbleft: '99',
                                wbtop: '139',
                            },
                            style: {
                                width: 120,
                            },
                            content: {
                                text: [
                                    '全铜电机',
                                ],
                            },
                        },
                        {
                            point: '',
                            type: 2,
                            show: false,
                            position: {
                                left: '207',
                                top: '202',
                                wbleft: '64',
                                wbtop: '223',
                            },
                            style: {
                                width: 120,
                            },
                            content: {
                                text: [
                                    '压力表',
                                ],
                            },
                        },
                        {
                            point: '',
                            type: 3,
                            show: false,
                            position: {
                                left: '289',
                                top: '146',
                                wbleft: '190',
                                wbtop: '70',
                            },
                            style: {
                                width: 120,
                            },
                            content: {
                                text: [
                                    '散热片',
                                ],
                            },
                        },
                        {
                            point: '',
                            type: 4,
                            show: false,
                            position: {
                                left: '400',
                                top: '146',
                                wbleft: '433',
                                wbtop: '94',
                            },
                            style: {
                                width: 120,
                            },
                            content: {
                                text: [
                                    '消音器',
                                ],
                            },
                        },
                        {
                            point: '',
                            type: 5,
                            show: false,
                            position: {
                                left: '553',
                                top: '183',
                                wbleft: '598',
                                wbtop: '185',
                            },
                            style: {
                                width: 120,
                            },
                            content: {
                                text: [
                                    '保险盒',
                                ],
                            },
                        },
                        {
                            point: '',
                            type: 6,
                            show: false,
                            position: {
                                left: '284',
                                top: '305',
                                wbleft: '113',
                                wbtop: '307',
                            },
                            style: {
                                width: 120,
                            },
                            content: {
                                text: [
                                    '压缩空气',
                                ],
                            },
                        },
                    ]
                },
                // 上文字下多图  防护装置  压缩空气
                {
                    template: 'fjz-hc-mis',
                    gytittle: '压缩空气',
                    animations: 'down',
                    content: {
                        // 中间图片尺寸
                        size: {
                            'max-width': '300px',
                            'max-height': '264px',
                        },
                        style: {
                        },
                        targetList: [
                            '压缩空气会造成人体伤害，使用时发现软管与接头损坏立即修理',
                        ],
                        imgs: [
                            {
                                img: './assets/images1/yasuo_6.png',
                            },
                        ],
                    }
                },
                // 点击出文字框 角磨机
                {
                    template: 'target',
                    gytittle: '角磨机',
                    img: './assets/images1/jiaomo.png',
                    line: true,
                    content: [
                        {
                            point: '',
                            type: 1,
                            show: false,
                            position: {
                                left: '250',
                                top: '218',
                                wbleft: '113',
                                wbtop: '163',
                            },
                            style: {
                                width: 120,
                            },
                            content: {
                                text: [
                                    '锁止按钮',
                                ],
                            },
                        },
                        {
                            point: '',
                            type: 2,
                            show: false,
                            position: {
                                left: '588',
                                top: '173',
                                wbleft: '619',
                                wbtop: '137',
                            },
                            style: {
                                width: 120,
                            },
                            content: {
                                text: [
                                    '散热口',
                                ],
                            },
                        },
                        {
                            point: '',
                            type: 3,
                            show: false,
                            position: {
                                left: '416',
                                top: '243',
                                wbleft: '439',
                                wbtop: '256',
                            },
                            style: {
                                width: 110,
                            },
                            content: {
                                text: [
                                    '开 关',
                                ],
                            },
                        },
                        {
                            point: '',
                            type: 4,
                            show: false,
                            position: {
                                left: '357',
                                top: '351',
                                wbleft: '389',
                                wbtop: '313',
                            },
                            style: {
                                width: 120,
                            },
                            content: {
                                text: [
                                    '防护挡板',
                                ],
                            },
                        },
                        {
                            point: '',
                            type: 5,
                            show: false,
                            position: {
                                left: '218',
                                top: '377',
                                wbleft: '68',
                                wbtop: '333',
                            },
                            style: {
                                width: 120,
                            },
                            content: {
                                text: [
                                    '膜 片',
                                ],
                            },
                        },
                    ]
                },
                // 角磨机 左图右文字
                {
                    template: 'lgy_lcri',
                    gytittle: '角磨机',
                    // img: './assets/images/info_bg.png',
                     // 动画方向
                    animations: 'show',
                    content: {
                        targetList: [
                            '带手套、带护目目镜',
                            '使用前确定磨片可用',
                            '打开开关，等砂轮转稳后再工作',
                            '收起长发',
                            '切割方向不对人',
                            '小部件要固定在台钳维修',
                            '更换磨片时切断电源',
                        ],
                        imgs: {
                            //             // 图片路径
                            img: './assets/images1/jiaomoji_3.png',
                        },
                    },
                },
                // 点击出文字框 手电钻
                {
                    template: 'target',
                    gytittle: '手电钻',
                    img: './assets/images1/shoudian.png',
                    line: true,
                    content: [
                        {
                            point: '',
                            type: 1,
                            show: false,
                            position: {
                                left: '216',
                                top: '176',
                                wbleft: '66',
                                wbtop: '121',
                            },
                            style: {
                                width: 120,
                            },
                            content: {
                                text: [
                                    '金属夹头',
                                ],
                            },
                        },
                        {
                            point: '',
                            type: 2,
                            show: false,
                            position: {
                                left: '487',
                                top: '200',
                                wbleft: '511',
                                wbtop: '153',
                            },
                            style: {
                                width: 120,
                            },
                            content: {
                                text: [
                                    '通风口',
                                ],
                            },
                        },
                        {
                            point: '',
                            type: 3,
                            show: false,
                            position: {
                                left: '455',
                                top: '257',
                                wbleft: '307',
                                wbtop: '219',
                            },
                            style: {
                                width: 120,
                            },
                            content: {
                                text: [
                                    '正反转按钮',
                                ],
                            },
                        },
                        {
                            point: '',
                            type: 4,
                            show: false,
                            position: {
                                left: '469',
                                top: '299',
                                wbleft: '320',
                                wbtop: '305',
                            },
                            style: {
                                width: 120,
                            },
                            content: {
                                text: [
                                    '操纵开关',
                                ],
                            },
                        },
                        {
                            point: '',
                            type: 5,
                            show: false,
                            position: {
                                left: '512',
                                top: '300',
                                wbleft: '561',
                                wbtop: '270',
                            },
                            style: {
                                width: 160,
                            },
                            content: {
                                text: [
                                    '电源锁定按钮',
                                ],
                            },
                        },
                    ]
                },
                // 手电钻页面
                {
                    template: 'fjz_lc_ri',
                    gytittle: '手电钻',
                    // img: './assets/images/info_bg.png',
                    animations: 'margin',
                    content: {
                        targetList: [
                            '带手套、带护目镜',
                            '收起长发',
                            '小部件要固定在台钳维修',
                            '使用前要确认开关处于关断状态',
                            '更换钻头时切断电源',
                            '使用专用扳手更换钻头',
                        ],
                        imgs: {
                            //             // 图片路径
                            img: './assets/images1/shoudianzuan_1.png',
                        },
                    },

                },
                // 点击出文字框 英制
                {
                    template: 'target',
                    gytittle: '英制&公制',
                    img: './assets/images1/yingzhi.png',
                    line: true,
                    content: [
                        {
                            point: '',
                            type: 1,
                            show: false,
                            position: {
                                left: '191',
                                top: '245',
                                wbleft: '300',
                                wbtop: '80',
                            },
                            style: {
                                width: 300,
                            },
                            content: {
                                text: [
                                    '英制工具与公制工具不可互相代替使用',
                                ],
                            },
                        },
                        {
                            point: '',
                            type: 2,
                            show: false,
                            position: {
                                left: '554',
                                top: '245',
                                wbleft: '300',
                                wbtop: '400',
                            },
                            style: {
                                width: 300,
                            },
                            content: {
                                text: [
                                    '错误使用不但会损坏本身还会损坏部件',
                                ],
                            },
                        },
                    ]
                },
                // 点击出文字框 剪式举升机
                {
                    template: 'target',
                    gytittle: '剪式举升机',
                    img: './assets/images1/bantiao.png',
                    line: true,
                    content: [
                        {
                            point: '',
                            type: 1,
                            show: false,
                            position: {
                                left: '333',
                                top: '149',
                                wbleft: '186',
                                wbtop: '70',
                            },
                            style: {
                                width: 120,
                            },
                            content: {
                                text: [
                                    '举升托盘',
                                ],
                            },
                        },
                        {
                            point: '',
                            type: 2,
                            show: false,
                            position: {
                                left: '257',
                                top: '184',
                                wbleft: '70',
                                wbtop: '210',
                            },
                            style: {
                                width: 120,
                            },
                            content: {
                                text: [
                                    '举升支架',
                                ],
                            },
                        },
                        {
                            point: '',
                            type: 3,
                            show: false,
                            position: {
                                left: '432',
                                top: '211',
                                wbleft: '616',
                                wbtop: '271',
                            },
                            style: {
                                width: 140,
                            },
                            content: {
                                text: [
                                    '气动解锁装置',
                                ],
                            },
                        },
                        {
                            point: '',
                            type: 4,
                            show: false,
                            position: {
                                left: '327',
                                top: '256',
                                wbleft: '496',
                                wbtop: '310',
                            },
                            style: {
                                width: 120,
                            },
                            content: {
                                text: [
                                    '保险机构',
                                ],
                            },
                        },
                        {
                            point: '',
                            type: 5,
                            show: false,
                            position: {
                                left: '245',
                                top: '338',
                                wbleft: '72',
                                wbtop: '290',
                            },
                            style: {
                                width: 120,
                            },
                            content: {
                                text: [
                                    '固定托架',
                                ],
                            },
                        }
                    ]
                },
                // 剪式举升机使用要求
                {
                    template: 'fjz_lc_ri',
                    gytittle: '剪式举升机使用要求',
                    // img: './assets/images/info_bg.png',
                    // 动画方向
                    animations: 'left',
                    content: {
                        targetList: [
                            '举升前车辆摆正车门关闭，使用胶垫摆放在规定的支撑部位',
                            '举升时轮胎稍离地，即要检查车辆支撑是否合适',
                            '在抬升和降下前要确定范围内无人员或其他物体',
                            '举升完毕后降低至安全保险位置',
                            '严格按照额定起重量使用',
                            '短时间内未完成作业，则要把车放低一些',
                        ],
                        imgs: {
                            //             // 图片路径
                            img: './assets/images1/btjushengji.png',
                        },
                    },
                },
                // 点击出文字框 剪式举升机维护
                {
                    template: 'target',
                    gytittle: '剪式举升机维护',
                    img: './assets/images1/bantiao.png',
                    line: true,
                    content: [
                        {
                            point: '',
                            type: 1,
                            show: false,
                            position: {
                                left: '277',
                                top: '238',
                                wbleft: '25',
                                wbtop: '155',
                            },
                            style: {
                                width: 250,
                            },
                            content: {
                                text: [
                                    '定期检查气动部分密封管路',
                                ],
                            },
                        },
                        {
                            point: '',
                            type: 2,
                            show: false,
                            position: {
                                left: '546',
                                top: '200',
                                wbleft: '600',
                                wbtop: '170',
                            },
                            style: {
                                width: 260,
                            },
                            content: {
                                text: [
                                    '定期检查连接点是否松动、断裂',
                                ],
                            },
                        },
                        {
                            point: '',
                            type: 3,
                            show: false,
                            position: {
                                left: '345',
                                top: '269',
                                wbleft: '475',
                                wbtop: '285',
                            },
                            style: {
                                width: 320,
                            },
                            content: {
                                text: [
                                    '检查液压系统是否出现磨损、渗漏情况',
                                ],
                            },
                        },
                        {
                            point: '',
                            type: 4,
                            show: false,
                            position: {
                                left: '211',
                                top: '328',
                                wbleft: '2',
                                wbtop: '340',
                            },
                            style: {
                                width: 220,
                            },
                            content: {
                                text: [
                                    '定期检查所有固定螺丝',
                                ],
                            },
                        },
                        {
                            point: '',
                            type: 5,
                            show: false,
                            position: {
                                left: '451',
                                top: '351',
                                wbleft: '522',
                                wbtop: '370',
                            },
                            style: {
                                width: 280,
                            },
                            content: {
                                text: [
                                    '检查立柱内侧滑块运动是否正确，必要时补充润滑脂',
                                ],
                            },
                        }
                    ]
                },
                // 点击出文字框 门市双柱举升机
                {
                    template: 'target',
                    gytittle: '门式双柱举升机',
                    img: './assets/images1/menshi.png',
                    line: true,
                    content: [
                        {
                            point: '',
                            type: 1,
                            show: false,
                            position: {
                                left: '234',
                                top: '296',
                                wbleft: '81',
                                wbtop: '242',
                            },
                            style: {
                                width: 120,
                            },
                            content: {
                                text: [
                                    '举升开关',
                                ],
                            },
                        },
                        {
                            point: '',
                            type: 2,
                            show: false,
                            position: {
                                left: '237',
                                top: '348',
                                wbleft: '94',
                                wbtop: '298',
                            },
                            style: {
                                width: 120,
                            },
                            content: {
                                text: [
                                    '液压油',
                                ],
                            },
                        },
                        {
                            point: '',
                            type: 3,
                            show: false,
                            position: {
                                left: '362',
                                top: '349',
                                wbleft: '399',
                                wbtop: '350',
                            },
                            style: {
                                width: 120,
                            },
                            content: {
                                text: [
                                    '举升托盘',
                                ],
                            },
                        },
                        {
                            point: '',
                            type: 4,
                            show: false,
                            position: {
                                left: '448',
                                top: '409',
                                wbleft: '480',
                                wbtop: '420',
                            },
                            style: {
                                width: 160,
                            },
                            content: {
                                text: [
                                    '钢丝绳传递槽',
                                ],
                            },
                        },
                        {
                            point: '',
                            type: 5,
                            show: false,
                            position: {
                                left: '477',
                                top: '319',
                                wbleft: '330',
                                wbtop: '277',
                            },
                            style: {
                                width: 120,
                            },
                            content: {
                                text: [
                                    '举升支架',
                                ],
                            },
                        },
                        {
                            point: '',
                            type: 6,
                            show: false,
                            position: {
                                left: '559',
                                top: '191',
                                wbleft: '587',
                                wbtop: '152',
                            },
                            style: {
                                width: 120,
                            },
                            content: {
                                text: [
                                    '举升支柱',
                                ],
                            },
                        }
                    ]
                },
                // 门式双柱举升机使用要求 左图右文字
                {
                    template: 'lgy_lcri',
                    gytittle: '门式双柱举升机使用要求',
                     // 动画方向
                    animations: 'down',
                    // img: './assets/images/info_bg.png',
                    content: {
                        targetList: [
                            '举升前车辆摆正车门关闭，摆臂至于规定的支撑部位',
                            '举升时轮胎稍离地，即要检查车辆支撑是否合适',
                            '在抬升和降下前要确定范围内无人员或其他物体',
                            '举升完毕后降低至安全保险位置',
                            '严格按照额定起重量使用',
                            '短时间内未完成作业，则要把车放低一些',
                        ],
                        imgs: {
                            //             // 图片路径
                            img: './assets/images1/menshi_2.png',
                        },
                    },
                },
                // 点击出文字框 门式举升机维护
                {
                    template: 'target',
                    gytittle: '门式双柱举升机维护',
                    img: './assets/images1/menshi.png',
                    line: true,
                    content: [
                        {
                            point: '',
                            type: 1,
                            show: false,
                            position: {
                                left: '300',
                                top: '338',
                                wbleft: '5',
                                wbtop: '265',
                            },
                            style: {
                                width: 260,
                            },
                            content: {
                                text: [
                                    '定期检查连接点是否松动、断裂',
                                ],
                            },
                        },
                        {
                            point: '',
                            type: 2,
                            show: false,
                            position: {
                                left: '550',
                                top: '178',
                                wbleft: '605',
                                wbtop: '136',
                            },
                            style: {
                                width: 220,
                            },
                            content: {
                                text: [
                                    '钢丝绳如有断裂立即更换',
                                ],
                            },
                        },
                        {
                            point: '',
                            type: 3,
                            show: false,
                            position: {
                                left: '550',
                                top: '275',
                                wbleft: '605',
                                wbtop: '233',
                            },
                            style: {
                                width: 240,
                            },
                            content: {
                                text: [
                                    '检查液压系统是否磨损、渗漏',
                                ],
                            },
                        },
                        {
                            point: '',
                            type: 4,
                            show: false,
                            position: {
                                left: '550',
                                top: '390',
                                wbleft: '605',
                                wbtop: '350',
                            },
                            style: {
                                width: 280,
                            },
                            content: {
                                text: [
                                    '定期检查所有固定螺丝',
                                ],
                            },
                        }
                    ]
                },
                // 点击出文字框 四柱举升机
                {
                    template: 'target',
                    gytittle: '四柱举升机',
                    img: './assets/images1/sizhu.png',
                    line: true,
                    content: [
                        {
                            point: '',
                            type: 1,
                            show: false,
                            position: {
                                left: '330',
                                top: '125',
                                wbleft: '187',
                                wbtop: '90',
                            },
                            style: {
                                width: 120,
                            },
                            content: {
                                text: [
                                    '举升支柱',
                                ],
                            },
                        },
                        {
                            point: '',
                            type: 2,
                            show: false,
                            position: {
                                left: '227',
                                top: '219',
                                wbleft: '62',
                                wbtop: '230',
                            },
                            style: {
                                width: 120,
                            },
                            content: {
                                text: [
                                    '举升电机',
                                ],
                            },
                        },
                        {
                            point: '',
                            type: 3,
                            show: false,
                            position: {
                                left: '227',
                                top: '268',
                                wbleft: '86',
                                wbtop: '295',
                            },
                            style: {
                                width: 110,
                            },
                            content: {
                                text: [
                                    '液压油',
                                ],
                            },
                        },
                        {
                            point: '',
                            type: 4,
                            show: false,
                            position: {
                                left: '398',
                                top: '289',
                                wbleft: '400',
                                wbtop: '228',
                            },
                            style: {
                                width: 120,
                            },
                            content: {
                                text: [
                                    '二次举升托盘',
                                ],
                            },
                        },
                        {
                            point: '',
                            type: 5,
                            show: false,
                            position: {
                                left: '504',
                                top: '345',
                                wbleft: '521',
                                wbtop: '257',
                            },
                            style: {
                                width: 120,
                            },
                            content: {
                                text: [
                                    '举升横梁',
                                ],
                            },
                        },
                        {
                            point: '',
                            type: 6,
                            show: false,
                            position: {
                                left: '442',
                                top: '397',
                                wbleft: '258',
                                wbtop: '400',
                            },
                            style: {
                                width: 90,
                            },
                            content: {
                                text: [
                                    '工位板',
                                ],
                            },
                        }
                    ]
                },
                // 四柱举升机使用要求 左图右文字
                {
                    template: 'lgy_lcri',
                    gytittle: '四柱举升机使用要求',
                    // img: './assets/images/info_bg.png',
                     // 动画方向
                    animations: 'down',
                    content: {
                        targetList: [
                            '注意上架车速',
                            '抬升和降下前要确定周围无人员或物体',
                            '举升完毕卡到保险位置、且保证四个保险都卡住',
                            '严格按照额定起重量使用',
                            '短时间内未完成作业，则要把车放低一些',
                        ],
                        imgs: {
                            //             // 图片路径
                            img: './assets/images1/sizhu_3.png',
                        },
                    },
                },
                // 点击出文字框 四柱举升机维护
                {
                    template: 'target',
                    gytittle: '四柱举升机维护',
                    img: './assets/images1/sizhu_2.png',
                    line: true,
                    content: [
                        {
                            point: '',
                            type: 1,
                            show: false,
                            position: {
                                left: '156',
                                top: '366',
                                wbleft: '170',
                                wbtop: '396',
                            },
                            style: {
                                width: 240,
                            },
                            content: {
                                text: [
                                    '定期检查所有固定螺丝',
                                ],
                            },
                        },
                        {
                            point: '',
                            type: 2,
                            show: false,
                            position: {
                                left: '335',
                                top: '297',
                                wbleft: '150',
                                wbtop: '215',
                            },
                            style: {
                                width: 160,
                            },
                            content: {
                                text: [
                                    '定期检查气动部分密封管路',
                                ],
                            },
                        },
                        {
                            point: '',
                            type: 3,
                            show: false,
                            position: {
                                left: '377',
                                top: '286',
                                wbleft: '425',
                                wbtop: '205',
                            },
                            style: {
                                width: 160,
                            },
                            content: {
                                text: [
                                    '检查液压系统是否出现磨损、渗漏',
                                ],
                            },
                        },
                        {
                            point: '',
                            type: 4,
                            show: false,
                            position: {
                                left: '450',
                                top: '337',
                                wbleft: '502',
                                wbtop: '382',
                            },
                            style: {
                                width: 160,
                            },
                            content: {
                                text: [
                                    '定期检查连接点是否松动、断裂',
                                ],
                            },
                        },
                        {
                            point: '',
                            type: 5,
                            show: false,
                            position: {
                                left: '617',
                                top: '196',
                                wbleft: '659',
                                wbtop: '133',
                            },
                            style: {
                                width: 160,
                            },
                            content: {
                                text: [
                                    '钢丝绳如有断裂立即更换',
                                ],
                            },
                        }
                    ]
                },
                // 点击出文字框 卧式千斤顶
                {
                    template: 'target',
                    gytittle: '卧式千斤顶',
                    img: './assets/images1/qianjing.png',
                    line: true,
                    content: [
                        {
                            point: '',
                            type: 1,
                            show: false,
                            position: {
                                left: '261',
                                top: '145',
                                wbleft: '104',
                                wbtop: '105',
                            },
                            style: {
                                width: 120,
                            },
                            content: {
                                text: [
                                    '顶升托盘',
                                ],
                            },
                        },
                        {
                            point: '',
                            type: 2,
                            show: false,
                            position: {
                                left: '335',
                                top: '180',
                                wbleft: '358',
                                wbtop: '140',
                            },
                            style: {
                                width: 120,
                            },
                            content: {
                                text: [
                                    '顶升机构',
                                ],
                            },
                        },
                        {
                            point: '',
                            type: 3,
                            show: false,
                            position: {
                                left: '543',
                                top: '190',
                                wbleft: '575',
                                wbtop: '147',
                            },
                            style: {
                                width: 110,
                            },
                            content: {
                                text: [
                                    '升降孔',
                                ],
                            },
                        },
                        {
                            point: '',
                            type: 4,
                            show: false,
                            position: {
                                left: '504',
                                top: '233',
                                wbleft: '534',
                                wbtop: '246',
                            },
                            style: {
                                width: 120,
                            },
                            content: {
                                text: [
                                    '液压泵',
                                ],
                            },
                        },
                        {
                            point: '',
                            type: 5,
                            show: false,
                            position: {
                                left: '214',
                                top: '275',
                                wbleft: '60',
                                wbtop: '232',
                            },
                            style: {
                                width: 120,
                            },
                            content: {
                                text: [
                                    '金属轮',
                                ],
                            },
                        },
                        {
                            point: '',
                            type: 6,
                            show: false,
                            position: {
                                left: '366',
                                top: '283',
                                wbleft: '257',
                                wbtop: '323',
                            },
                            style: {
                                width: 120,
                            },
                            content: {
                                text: [
                                    '支撑机构',
                                ],
                            },
                        },
                        {
                            point: '',
                            type: 7,
                            show: false,
                            position: {
                                left: '540',
                                top: '370',
                                wbleft: '566',
                                wbtop: '330',
                            },
                            style: {
                                width: 120,
                            },
                            content: {
                                text: [
                                    '操纵手柄',
                                ],
                            },
                        },
                    ]
                },
                // 卧式千斤顶使用要求
                {
                    template: 'fjz_lc_ri',
                    gytittle: '卧式千斤顶使用要求',
                      // 动画方向
                    animations: 'up',
                    // img: './assets/images/info_bg.png',
                    content: {
                        targetList: [
                            '操作时放在坚实平整的地方',
                            '整体机构有裂纹禁止使用',
                            '顶升时千斤顶重心不能偏歪',
                            '严格按照额定功率使用，最大顶升范围不应超过全长的75%',
                            '一定要拧紧泄压阀再开始顶升',
                            '降落时微开泄压阀即可',
                            '尽量避免多个千斤顶联合使用',
                            '带空气悬架的车辆需要参考维修手册说明'
                        ],
                        imgs: {
                            //             // 图片路径
                            img: './assets/images1/qianjinding_1.png',
                        },
                    },
                },
                // 点击出文字框 千斤顶2
                {
                    template: 'target',
                    gytittle: '千斤顶',
                    img: './assets/images1/qianjin_2.png',
                    line: true,
                    content: [
                        {
                            point: '',
                            type: 1,
                            show: false,
                            position: {
                                left: '368',
                                top: '117',
                                wbleft: '209',
                                wbtop: '129',
                            },
                            style: {
                                width: 120,
                            },
                            content: {
                                text: [
                                    '调整螺栓',
                                ],
                            },
                        },
                        {
                            point: '',
                            type: 2,
                            show: false,
                            position: {
                                left: '368',
                                top: '181',
                                wbleft: '204',
                                wbtop: '196',
                            },
                            style: {
                                width: 120,
                            },
                            content: {
                                text: [
                                    '活塞挺柱',
                                ],
                            },
                        },
                        {
                            point: '',
                            type: 3,
                            show: false,
                            position: {
                                left: '368',
                                top: '293',
                                wbleft: '201',
                                wbtop: '256',
                            },
                            style: {
                                width: 120,
                            },
                            content: {
                                text: [
                                    '千斤顶主体',
                                ],
                            },
                        },
                        {
                            point: '',
                            type: 4,
                            show: false,
                            position: {
                                left: '334',
                                top: '368',
                                wbleft: '177',
                                wbtop: '319',
                            },
                            style: {
                                width: 90,
                            },
                            content: {
                                text: [
                                    '泄压阀',
                                ],
                            },
                        },
                        {
                            point: '',
                            type: 5,
                            show: false,
                            position: {
                                left: '385',
                                top: '383',
                                wbleft: '276',
                                wbtop: '413',
                            },
                            style: {
                                width: 120,
                            },
                            content: {
                                text: [
                                    '千斤顶主体',
                                ],
                            },
                        },
                        {
                            point: '',
                            type: 6,
                            show: false,
                            position: {
                                left: '416',
                                top: '310',
                                wbleft: '450',
                                wbtop: '245',
                            },
                            style: {
                                width: 120,
                            },
                            content: {
                                text: [
                                    '泵 体',
                                ],
                            },
                        },
                        {
                            point: '',
                            type: 7,
                            show: false,
                            position: {
                                left: '503',
                                top: '353',
                                wbleft: '540',
                                wbtop: '297',
                            },
                            style: {
                                width: 120,
                            },
                            content: {
                                text: [
                                    '手 柄',
                                ],
                            },
                        }
                    ]
                },
                // 千斤顶使用要求2
                {
                    template: 'fjz_lc_ri',
                    gytittle: '千斤顶使用要求',
                      // 动画方向
                    animations: 'show',
                    // img: './assets/images/info_bg.png',
                    content: {
                        targetList: [
                            '操作时放在坚实平整的地方',
                            '液压油如有泄漏禁止使用',
                            '顶升时千斤顶重心不能偏歪',
                            '严格按照额定载重使用',
                            '一定要拧紧泄压阀再开始顶升',
                            '降落时微开泄压阀即可',
                            '尽量避免多个千斤顶联合使用',
                            '带空气悬架的车辆需要参考维修手册说明'
                        ],
                        imgs: {
                            //             // 图片路径
                            img: './assets/images1/qianjinding_2.png',
                        },
                    },
                },
                // 点击出文字框 马凳
                {
                    template: 'target',
                    gytittle: '马凳',
                    img: './assets/images1/baoan.png',
                    line: true,
                    content: [
                        {
                            point: '',
                            type: 1,
                            show: false,
                            position: {
                                left: '280',
                                top: '328',
                                wbleft: '120',
                                wbtop: '268',
                            },
                            style: {
                                width: 120,
                            },
                            content: {
                                text: [
                                    '刚性支架',
                                ],
                            },
                        },
                        {
                            point: '',
                            type: 2,
                            show: false,
                            position: {
                                left: '477',
                                top: '147',
                                wbleft: '321',
                                wbtop: '91',
                            },
                            style: {
                                width: 120,
                            },
                            content: {
                                text: [
                                    '支撑齿条',
                                ],
                            },
                        },
                        {
                            point: '',
                            type: 3,
                            show: false,
                            position: {
                                left: '528',
                                top: '254',
                                wbleft: '570',
                                wbtop: '193',
                            },
                            style: {
                                width: 110,
                            },
                            content: {
                                text: [
                                    '解锁手柄',
                                ],
                            },
                        },
                    ]
                },
                // 马凳使用要求
                {
                    template: 'target',
                    gytittle: '马凳的使用要求',
                    img: './assets/images1/baoan_2.png',
                    line: true,
                    content: [
                        {
                            point: '',
                            type: 1,
                            show: false,
                            position: {
                                left: '330',
                                top: '254',
                                wbleft: '340',
                                wbtop: '143',
                            },
                            style: {
                                width: 240,
                            },
                            content: {
                                text: [
                                    '只允许配合千斤顶使用',
                                ],
                            },
                        },
                    ]
                },
            ]
        },
        // 生产安全 章节
        {
            chapter: '生产安全',
            isChapter: true,
            pages: [
                // 上文字下多图  防火
                {
                    template: 'fjz-hc-mis',
                    gytittle: '防火',
                       animations: 'left',
                    content: {
                        // 中间图片尺寸
                        size: {
                            'max-width': '800px',
                            'max-height': '175px',
                        },
                        style: {
                            // 'background-color' : 'orange',
                        },
                        targetList: [
                        ],
                        imgs: [
                            {
                                img: './assets/images1/fanghuo_3.png',
                                top: {},
                                bottom: {
                                    style: {
                                        // 'color': 'black',
                                        'font-size': '14px',
                                        // 'font-weight': 'bold'
                                        'position': 'absolute',
                                        'top': '190px',
                                        'left': '130px',
                                    },
                                    content: '全国统一消防热线——',
                                    text: '119',
                                    styles: {
                                        'color': 'red',
                                    }
                                }
                            }
                        ],
                    }
                },
                // 消防栓
                {
                    template: 'fjz_lc_ri',
                    gytittle: '消防栓',
                      // 动画方向
                    animations: 'down',
                    listyle: {
                        'margin-top': '15px',
                    },
                    // img: './assets/images/info_bg.png',
                    content: {
                        targetList: [
                            '定期检查有无生锈、漏水现象',
                            '检查接口垫圈是否完整无缺',
                            '定期进行放水检查',
                            '使用后要完全恢复',
                            '发现问题要及时更换、修理',
                        ],
                        imgs: {
                            //             // 图片路径
                            img: './assets/images1/xiaofangshuan.png',
                        },
                    },
                },
                // 灭火器
                {
                    template: 'target',
                    gytittle: '灭火器',
                    img: './assets/images1/miehuo.png',
                    line: true,
                    content: [
                        {
                            point: '',
                            type: 1,
                            show: false,
                            position: {
                                left: '360',
                                top: '150',
                                wbleft: '430',
                                wbtop: '100',
                            },
                            style: {
                                width: 240,
                            },
                            content: {
                                text: [
                                    '压力必须在正常范围',
                                ],
                            },
                        },
                        {
                            point: '',
                            type: 2,
                            show: false,
                            position: {
                                left: '360',
                                top: '197',
                                wbleft: '90',
                                wbtop: '130',
                            },
                            style: {
                                width: 250,
                            },
                            content: {
                                text: [
                                    '检查有无锈蚀、外观变形',
                                ],
                            },
                        },
                        {
                            point: '',
                            type: 3,
                            show: false,
                            position: {
                                left: '360',
                                top: '280',
                                wbleft: '420',
                                wbtop: '290',
                            },
                            style: {
                                width: 180,
                            },
                            content: {
                                text: [
                                    '检查铭牌标注的项目是否清楚齐全',
                                ],
                            },
                        },
                        {
                            point: '',
                            type: 4,
                            show: false,
                            position: {
                                left: '360',
                                top: '350',
                                wbleft: '80',
                                wbtop: '270',
                            },
                            style: {
                                width: 240,
                            },
                            content: {
                                text: [
                                    '检查灭火器是否在有效使用期内',
                                ],
                            },
                        }
                    ]
                },
                // 用电安全
                {
                    template: 'target',
                    gytittle: '用电安全',
                    img: './assets/images1/yongdian.png',
                    line: true,
                    content: [
                        {
                            point: '',
                            type: 1,
                            show: false,
                            position: {
                                left: '310',
                                top: '217',
                                wbleft: '40',
                                wbtop: '150',
                            },
                            style: {
                                width: 240,
                            },
                            content: {
                                text: [
                                    '不要用湿手接触任何电气设备',
                                ],
                            },
                        },
                        {
                            point: '',
                            type: 2,
                            show: false,
                            position: {
                                left: '352',
                                top: '197',
                                wbleft: '369',
                                wbtop: '100',
                            },
                            style: {
                                width: 250,
                            },
                            content: {
                                text: [
                                    '不要靠近断裂或摇晃的电线',
                                ],
                            },
                        },
                        {
                            point: '',
                            type: 3,
                            show: false,
                            position: {
                                left: '520',
                                top: '246',
                                wbleft: '585',
                                wbtop: '185',
                            },
                            style: {
                                width: 180,
                            },
                            content: {
                                text: [
                                    '拔插头时不要拉电线',
                                ],
                            },
                        },
                        {
                            point: '',
                            type: 4,
                            show: false,
                            position: {
                                left: '375',
                                top: '333',
                                wbleft: '430',
                                wbtop: '370',
                            },
                            style: {
                                width: 240,
                            },
                            content: {
                                text: [
                                    '不要让电缆侵在水或油脂中',
                                ],
                            },
                        }
                    ]
                },
                // 驾驶安全
                {
                    template: 'fjz_lc_ri',
                    gytittle: '驾驶安全',
                      // 动画方向
                    animations: 'left',
                    listyle: {
                        'margin-top': '10px',
                    },
                    // img: './assets/images/info_bg.png',
                    content: {
                        targetList: [
                            '厂区内限速5km/h',
                            '系好安全带，包括车内乘客',
                            '勿超速行驶',
                            '按照交通标志规定行驶',
                        ],
                        imgs: {
                            //             // 图片路径
                            img: './assets/images1/jiashi.png',
                        },
                    },
                },
                // 尾气抽排系统
                {
                    template: 'target',
                    gytittle: '尾气抽排系统',
                    img: './assets/images1/weiqi.png',
                    line: true,
                    content: [
                        {
                            point: '',
                            type: 1,
                            show: false,
                            position: {
                                left: '305',
                                top: '168',
                                wbleft: '176',
                                wbtop: '200',
                            },
                            style: {
                                width: 120,
                            },
                            content: {
                                text: [
                                    '滑  轨',
                                ],
                            },
                        },
                        {
                            point: '',
                            type: 2,
                            show: false,
                            position: {
                                left: '468',
                                top: '150',
                                wbleft: '300',
                                wbtop: '77',
                            },
                            style: {
                                width: 120,
                            },
                            content: {
                                text: [
                                    '辅助排气管',
                                ],
                            },
                        },
                        {
                            point: '',
                            type: 3,
                            show: false,
                            position: {
                                left: '564',
                                top: '152',
                                wbleft: '612',
                                wbtop: '67',
                            },
                            style: {
                                width: 110,
                            },
                            content: {
                                text: [
                                    '驱动电机',
                                ],
                            },
                        },
                        {
                            point: '',
                            type: 4,
                            show: false,
                            position: {
                                left: '526',
                                top: '190',
                                wbleft: '621',
                                wbtop: '154',
                            },
                            style: {
                                width: 120,
                            },
                            content: {
                                text: [
                                    '密封胶条',
                                ],
                            },
                        },
                        {
                            point: '',
                            type: 5,
                            show: false,
                            position: {
                                left: '479',
                                top: '291',
                                wbleft: '583',
                                wbtop: '239',
                            },
                            style: {
                                width: 120,
                            },
                            content: {
                                text: [
                                    '连接弯头',
                                ],
                            },
                        },
                        {
                            point: '',
                            type: 6,
                            show: false,
                            position: {
                                left: '311',
                                top: '332',
                                wbleft: '168',
                                wbtop: '370',
                            },
                            style: {
                                width: 90,
                            },
                            content: {
                                text: [
                                    '橡胶管',
                                ],
                            },
                        },
                        {
                            point: '',
                            type: 7,
                            show: false,
                            position: {
                                left: '425',
                                top: '422',
                                wbleft: '516',
                                wbtop: '376',
                            },
                            style: {
                                width: 90,
                            },
                            content: {
                                text: [
                                    '连接口',
                                ],
                            },
                        }
                    ]
                },
                // 尾气抽排系统
                {
                    template: 'fjz_lc_ri',
                    gytittle: '尾气抽排系统',
                      // 动画方向
                    animations: 'show',
                    listyle: {
                        'margin-top': '12px',
                    },
                    // img: './assets/images/info_bg.png',
                    content: {
                        targetList: [
                            '检查橡胶件是否有老化、断裂',
                            '检查运动部件是否松旷、损坏',
                            '定期清洁灰尘',
                            '使用完毕后第一时间撤掉连接口',
                        ],
                        imgs: {
                            //             // 图片路径
                            img: './assets/images1/weiqi_1.png',
                        },
                    },
                },
            ],
        },
        // 健康安全 章节
        {
            chapter: '健康安全',
            isChapter: true,
            pages: [
                // 个人意识
                {
                    template: 'fjz_lc_ri',
                    gytittle: '个人意识',
                      // 动画方向
                    animations: 'up',
                    // img: './assets/images/info_bg.png',
                    content: {
                        targetList: [
                            '在工作场所不要奔跑、不要戴随身听、切勿在身体状况状况不佳的情况下工作',
                            '身体部位及衣服应远离转动的部件，尤其是风扇和皮带',
                            '应避免接触高温金属部件',
                            '工作前应摘掉戒指、手表、项链、长头发应挽起',
                        ],
                        imgs: {
                            //             // 图片路径
                            img: './assets/images1/geren.png',
                        },
                    },
                },
                // 防护装置
                {
                    template: 'target',
                    gytittle: '防护装置',
                    img: './assets/images1/fanghu.png',
                    line: true,
                    yg: true,
                    p: '头部防护装置：在车辆被顶升的情况下工作时应注意头部保护，防止因工具或物体掉落而受伤',
                    content: [
                        {
                            point: '',
                            type: 1,
                            show: false,
                            position: {
                                left: '397',
                                top: '263',
                                wbleft: '455',
                                wbtop: '160',
                            },
                            style: {
                                width: 170,
                            },
                            content: {
                                text: [
                                    '涉及到安全工作时佩戴，提高头部保护，例如高空作业',
                                ],
                            },
                        },
                        {
                            point: '',
                            type: 2,
                            show: false,
                            position: {
                                left: '623',
                                top: '322',
                                wbleft: '420',
                                wbtop: '395',
                            },
                            style: {
                                width: 140,
                            },
                            content: {
                                text: [
                                    '其他工作环境下佩戴，起到保暖或擦伤',
                                ],
                            },
                        },
                    ]
                },
                // 上文字下多图  防护装置  眼睛
                {
                    template: 'fjz-hc-mis',
                    gytittle: '防护装置',
                       animations: 'down',
                    content: {
                        // 中间图片尺寸
                        size: {
                            'max-width': '190px',
                            'max-height': '240px',
                        },
                        style: {
                        },
                        targetList: [
                            '眼睛防护装置：在有飞溅火花、液体、钻孔产生粉尘的区域工作时应使用眼睛防护装置',
                        ],
                        imgs: [
                            {
                                img: './assets/images1/yangjing.png',
                                // top: {},
                                // bottom: {
                                //     style: {
                                //         'color': '#AE0000',
                                //         'font-size': '18px',
                                //         'font-weight': 'bold'
                                //     }, content: '轮胎气压过高'
                                // }
                            },
                            {
                                img: './assets/images1/yanjing_1.png',
                                // top: {},
                                // bottom: {
                                //     style: {
                                //         'color': '#AE0000',
                                //         'font-size': '18px',
                                //         'font-weight': 'bold'
                                //     },
                                //     content: '轮胎中部异常磨'
                                // }
                            }
                        ],
                    }
                },
                // 上文字下多图  防护装置  耳朵
                {
                    template: 'fjz-hc-mis',
                    gytittle: '防护装置',
                       animations: 'left',
                    content: {
                        // 中间图片尺寸
                        size: {
                            'max-width': '190px',
                            'max-height': '240px',
                        },
                        style: {
                        },
                        targetList: [
                            '耳朵防护装置：如果你必须喊叫对方才能听见，则表明环境噪音过大需要使用耳朵防护装置',
                        ],
                        imgs: [
                            {
                                img: './assets/images1/erduo.png',
                                // top: {},
                                // bottom: {
                                //     style: {
                                //         'color': '#AE0000',
                                //         'font-size': '18px',
                                //         'font-weight': 'bold'
                                //     }, content: '轮胎气压过高'
                                // }
                            },
                            {
                                img: './assets/images1/erduo_1.png',
                                // top: {},
                                // bottom: {
                                //     style: {
                                //         'color': '#AE0000',
                                //         'font-size': '18px',
                                //         'font-weight': 'bold'
                                //     },
                                //     content: '轮胎中部异常磨'
                                // }
                            }
                        ],
                    }
                },
                // 上文字下多图  防护装置 手部
                {
                    template: 'fjz-hc-mis',
                    gytittle: '防护装置',
                       animations: 'show',
                    content: {
                        // 中间图片尺寸
                        size: {
                            'max-width': '190px',
                            'max-height': '240px',
                        },
                        style: {
                        },
                        targetList: [
                            '手部防护装置：处理锋利或高温材料时，使用正确类型的手套可防止割伤或烫伤',
                        ],
                        imgs: [
                            {
                                img: './assets/images1/fanghu_1.png',
                                // top: {},
                                // bottom: {
                                //     style: {
                                //         'color': '#AE0000',
                                //         'font-size': '18px',
                                //         'font-weight': 'bold'
                                //     }, content: '轮胎气压过高'
                                // }
                            },
                            {
                                img: './assets/images1/fanghu_2.png',
                                // top: {},
                                // bottom: {
                                //     style: {
                                //         'color': '#AE0000',
                                //         'font-size': '18px',
                                //         'font-weight': 'bold'
                                //     },
                                //     content: '轮胎中部异常磨'
                                // }
                            }
                        ],
                    }
                },
                // 上文字下多图  防护装置  脚部
                {
                    template: 'fjz-hc-mis',
                    gytittle: '防护装置',
                       animations: 'right',
                    content: {
                        // 中间图片尺寸
                        size: {
                            'max-width': '190px',
                            'max-height': '240px',
                        },
                        style: {
                        },
                        targetList: [
                            '脚部防护装置：劳保靴应该适合于从事的工作。鞋底应该防滑，脚趾部位应有防压铁头',
                        ],
                        imgs: [
                            {
                                img: './assets/images1/jiaobu.png',
                                // top: {},
                                // bottom: {
                                //     style: {
                                //         'color': '#AE0000',
                                //         'font-size': '18px',
                                //         'font-weight': 'bold'
                                //     }, content: '轮胎气压过高'
                                // }
                            },
                            {
                                img: './assets/images1/jiaobu_1.png',
                                // top: {},
                                // bottom: {
                                //     style: {
                                //         'color': '#AE0000',
                                //         'font-size': '18px',
                                //         'font-weight': 'bold'
                                //     },
                                //     content: '轮胎中部异常磨'
                                // }
                            }
                        ],
                    }
                },
                // 上文字下多图  防护装置  呼吸
                {
                    template: 'fjz-hc-mis',
                    gytittle: '防护装置',
                       animations: 'down',
                    content: {
                        // 中间图片尺寸
                        size: {
                            'max-width': '190px',
                            'max-height': '240px',
                        },
                        style: {
                        },
                        targetList: [
                            '呼吸防护装置：针对于粉尘或释放烟雾的材料应该使用正确型式的面具，防止吸入粉尘或烟雾',
                        ],
                        imgs: [
                            {
                                img: './assets/images1/huxi.png',
                                // top: {},
                                // bottom: {
                                //     style: {
                                //         'color': '#AE0000',
                                //         'font-size': '18px',
                                //         'font-weight': 'bold'
                                //     }, content: '轮胎气压过高'
                                // }
                            },
                            {
                                img: './assets/images1/huxi_1.png',
                                // top: {},
                                // bottom: {
                                //     style: {
                                //         'color': '#AE0000',
                                //         'font-size': '18px',
                                //         'font-weight': 'bold'
                                //     },
                                //     content: '轮胎中部异常磨'
                                // }
                            }
                        ],
                    }
                },
            ],
        },
        // 车辆零件 章节
        {
            chapter: '车辆零件',
            isChapter: true,
            pages: [

                // 上文字下多图  制动片&离合器片
                {
                    template: 'fjz-hc-mis',
                    gytittle: '制动片&离合器片',
                    content: {
                        // 中间图片尺寸
                        size: {
                            'max-width': '190px',
                            'max-height': '240px',
                        },
                        style: {
                        },
                        targetList: [
                            '石棉对人体健康和环境是有危害，所以工作当中对制动片和离合器片的维修，要配戴呼吸防护装置',
                        ],
                        imgs: [
                            {
                                img: './assets/images1/zhidong.png',
                                // top: {},
                                // bottom: {
                                //     style: {
                                //         'color': '#AE0000',
                                //         'font-size': '18px',
                                //         'font-weight': 'bold'
                                //     }, content: '轮胎气压过高'
                                // }
                            },
                            {
                                img: './assets/images1/zhidong_1.png',
                                // top: {},
                                // bottom: {
                                //     style: {
                                //         'color': '#AE0000',
                                //         'font-size': '18px',
                                //         'font-weight': 'bold'
                                //     },
                                //     content: '轮胎中部异常磨'
                                // }
                            }
                        ],
                    }
                },
            ],
        },
        // 化学材料 章节
        {
            chapter: '化学材料',
            isChapter: true,
            pages: [
                // 上文字下多图  化学品
                {
                    template: 'fjz-hc-mis',
                    gytittle: '化学品',
                       animations: 'show',
                    content: {
                        // 中间图片尺寸
                        size: {
                            'max-width': '190px',
                            'max-height': '240px',
                        },
                        style: {
                            // 'background-color': 'orange',
                            'color':'#f00'
                        },
                        targetList: [
                            '使用或搬运化工材料时一定要小心谨慎，轻拿轻放，这些材料有刺激性、腐蚀性、高温易燃易爆',
                            '化学材料会危及人的生命或折减寿命'
                        ],
                        imgs: [
                            {
                                img: './assets/images1/huaxue.png',
                                top: {},
                                bottom: {
                                    style: {
                                        // 'color': '#000',
                                        'font-size': '14px',
                                        // 'font-weight': 'bold'
                                    }, content: '载色剂'
                                }
                            },
                            {
                                img: './assets/images1/huaxue_1.png',
                                top: {},
                                bottom: {
                                    style: {
                                        // 'color': '#000',
                                        'font-size': '14px',
                                        // 'font-weight': 'bold'
                                    },
                                    content: '制动液'
                                }
                            }
                        ],
                    }
                },
                // 空调制冷剂 左图右文字
                {
                    template: 'lgy_lcri',
                    gytittle: '空调制冷剂',
                     // 动画方向
                    animations: 'right',
                    listyle: {
                        'margin-top': '10px',
                    },
                    // img: './assets/images/info_bg.png',
                    content: {
                        targetList: [
                            '不得混用制冷剂',
                            '在通风良好的环境下加注',
                            '不得将制冷剂向大气排放',
                            '不得将制冷剂容罐暴露于日光或高温下',
                            '皮肤或眼睛接触到制冷剂，应立即用清水冲洗',
                        ],
                        imgs: {
                            //             // 图片路径
                            img: './assets/images1/kongtiao_1.png',
                        },
                    },
                },
                // 燃油
                {
                    template: 'fjz_lc_ri',
                    gytittle: '燃油',
                    flag: true,
                      // 动画方向
                    animations: 'show',
                    listyle: {
                        'margin-top': '10px',
                    },
                    // img: './assets/images/info_bg.png',
                    content: {
                        targetList: [
                            '对口腔和咽喉会产生刺激，肠胃吸收后可导致神志不清',
                            '会引起皮肤过敏和皮炎，进入眼睛会产生严重刺激',
                            '运输中一定要严格遵守防火安全条例',
                            '注意：燃油严禁倒入下水道，有引起爆炸可能',
                        ],
                        imgs: {
                            //             // 图片路径
                            img: './assets/images1/ranyou.png',
                        },
                    },
                },
                // 溶剂
                {
                    template: 'fjz_lc_ri',
                    gytittle: '溶剂',
                      // 动画方向
                    animations: 'down',
                    listyle: {
                        'margin-top': '10px',
                    },
                    // img: './assets/images/info_bg.png',
                    content: {
                        targetList: [
                            '用于材料的清洗、易燃易爆',
                            '严重刺激并可能导致视力丧失',
                            '高浓度溶剂蒸气或烟雾会引起神志不清',
                            '反复或长期接触会产生更严重的有毒或有害影响'

                        ],
                        imgs: {
                            //             // 图片路径
                            img: './assets/images1/rongji.png',
                        },
                    },
                },
                // 润滑油&润滑脂
                {
                    template: 'fjz_lc_ri',
                    gytittle: '润滑油&润滑脂',
                      // 动画方向
                    animations: 'up',
                    // li标签的样式
                    listyle: {
                        'margin-top': '10px',
                    },
                    // img: './assets/images/info_bg.png',
                    content: {
                        targetList: [
                            '对眼睛和皮肤会产生刺激',
                            '废机油含有导致皮肤癌的有害物质',
                            '废机油和废滤清器应交给特许废物处理场进行处理',

                        ],
                        imgs: {
                            //             // 图片路径
                            img: './assets/images1/runhuayou_1.png',
                        },
                    },
                },
                // 防冻液 左图右文字
                {
                    template: 'lgy_lcri',
                    gytittle: '防冻液',
                    // img: './assets/images/info_bg.png',
                     // 动画方向
                    animations: 'up',
                    // li标签的样式
                    listyle: {
                        'margin-top': '10px',
                    },
                    content: {
                        targetList: [
                            '高温易燃',
                            '受热时会释放有毒蒸气',
                            '可通过皮肤吸收引起中毒',
                            '如果误食可能致命',
                        ],
                        imgs: {
                            //             // 图片路径
                            img: './assets/images1/fangdong_2.png',
                        },
                    },
                },
            ]
        },
        // 结束
        {
            chapter: '结束',
            isChapter: false,
            pages: [
                {
                    template: 'single',
                    title: '所有内容已经学习完成，您可以开始课后测试',
                    text: '请在[课后测试]页面完成本课程测试',
                    img: './assets/images1/profile_bg.png',
                },
            ],
        },
    ] ;
