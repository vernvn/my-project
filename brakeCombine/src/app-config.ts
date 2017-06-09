export const appConfig: {
    chapter: string,
    isChapter: boolean,
    logo?: string,
    pages: any[]
}[] = [
    // 按章节定义配置数据
    {
        chapter: '介绍',
        isChapter: false,
        pages: [
            {
                // 简介页面---1
                template: 'profile',
                img: './assets/images/profile_bg.png'
            }, {
                // 目标页面---2
                template: 'fjzinfo',
                img: './assets/images/info_bg.png',
                targetList: [
                    '了解底盘机械系统的结构组成和结构原理', '对制动系统做基本的检查','能够对悬挂系统有基本诊断思路'],
                targetText: '本课程向大家介绍底盘机械系统的基本结构和功能作用'
            }
        ]
    },
    // 离合器作用
    {
        chapter: '制动系统的结构及原理',
        isChapter: true,
        logo: './assets/images/logo_5ling.png',
        pages: [
            {
                // 包含多个详细内容的页面
                template: 'lee_hc_mis_bc',
                intoPage:true,
                content: {
                    head: {
                        title: '制动系统功能',
                        p_contents: {
                            p_content: [
                                {
                                    style: {'font-size':'14px'},
                                    content: '汽车制动系统分为行车制动和驻车制动，具有以下功能：'
                                },
                            ]
                        },
                    },
                    targetList: ['使行驶中的汽车按照驾驶员的要求进行强制减速甚至停车', '使已停驶的汽车在各种道路条件下(包括在坡道上)稳定驻车','使在坡路行驶的汽车保持稳定'],
                    imgs: [
                        {
                            img: './assets/images/8.png',
                            imgstyle:{
                                'margin-top':'30px'
                            },
                            top: {
                                style: {},
                                content: ''
                            },
                            bottom: {
                                style: {},
                                content: ''
                            }
                        },
                    ],
                    p_contents: {
                        p_content: [
                            {
                                style: {
                                    'font-size': '18px',
                                    'font-weight': 'bold','magin-top':'20px','display':'block','text-align':'center'},
                                content: ``
                            }
                        ],

                    }
                },
                point: [
                    {
                        pointStyle: 'mail',
                        position: {
                            left: '240',
                            top: '310'
                        }
                    },
                    {
                        pointStyle: 'mail',
                        position: {
                            left: '240',
                            top: '410'
                        }
                    }
                ],
                textArr: [
                    {
                        text: '行车制动',
                        position: {
                            left: '100px',
                            top: '300px',
                            width: '100px',
                            background: '#224d99',
                            border: '1px solid #476bac',
                            lineHeight: '30px',
                            color: '#fff',
                            borderRadius: '5px',
                            fontWeight: 'bold',
                            fontSize: '16px'
                        }
                    }, {
                        text: '驻车制动',
                        position: {
                            left: '100px',
                            top: '400px',
                            width: '100px',
                            background: '#224d99',
                            border: '1px solid #476bac',
                            lineHeight: '30px',
                            color: '#fff',
                            borderRadius: '5px',
                            fontWeight: 'bold',
                            fontSize: '16px'
                        }
                    }
                ],
                childContent:[
                    {
                        text:'行车制动',
                        content:'行车制动器用于控制车辆速度和停下车辆，通常由驾驶员用脚操控，通常包含以下部件：',
                        spanText:['制动踏板','制动助力器','制动总泵','比例阀','制动器'],
                        img: './assets/images/9.png',
                        imgstyle:{'position':'absolute','left':'450px','top':'100px'}
                    },
                    {
                        text:'驻车制动',
                        content:'驻车制动器通常由手操作控制，又被称作手刹，通常由以下部件组成：',
                        spanText:['制动手柄','拉线','制动器'],
                        img: './assets/images/10.png',
                        imgstyle:{'position':'absolute','left':'450px','top':'100px'}
                    },
                ]
            },
            {
                template: 'lee_hc_mi', // ---16
                content: {
                    // 内容头部数据
                    head: {
                        // 控制内容头部的样式 可以控制头部div的样式
                        style: {
                            'height': '100px'
                        },
                        // 头部内容标题
                        title: '制动系统工作原理',
                        // 标题下面的内容块 可以是多个
                        p_contents: {
                            // 具体某一个大段落段落
                            p_content: [
                                {
                                    // 组成段落的小部分 如颜色字体大小等
                                    style: {
                                        'display': 'block'
                                    },
                                    content: '汽车通过发动机将热能转换成动能行驶，当车辆需要减速或停车时，就需要将能量消耗掉。制动系统是通过将车辆的动能转换成热能来完成车辆的减速或停车'
                                }
                            ]
                        }
                    },
                    imgs: {
                        // 图片路径
                        img: './assets/images/11.png',
                        // 图片顶部文字以及样式
                        top: {
                            // 图片顶部文字样式
                            style: '',
                            // 文字内容
                            content: ''
                        },
                        // 图片底部文字以及样式
                        bottom: {
                            // 图片底部文字样式
                            style: {
                                'color': '#fff',
                                'font-size': '18px',
                                'font-weight': 'bold'
                            },
                            // 文字内容
                            content: ''
                        }
                    }
                },
                point: [
                    {
                        pointStyle: 'mail',
                        position: {
                            left: '120',
                            top: '195'
                        }
                    }
                ]
            },
            {
                template: 'target-more', // ---7
                content: {
                    title: '制动系统工作原理',
                    explain: ['踩下制动踏板时，踏板力作用到总泵活塞，使活塞移动，活塞推动制动液，制动液在密闭环境通过管路流向制动器活塞，活塞被压向摩擦片，使之与运动的制动盘紧压在一起，产生摩擦力消耗动能，产生热能', '踩制动踏板的力越大，摩擦片和制动盘结合的越紧密，摩擦力越大，将动能转化成热能的速度也越快'],
                    imgs: [
                        './assets/images/12.png', './assets/images/13.png'
                    ],
                    content: [
                        {
                            point: '',
                            pointStyle: 'mail',
                            position: {
                                left: '205',
                                top: '230'
                            }
                        }, {
                            point: '',
                            pointStyle: 'mail',
                            position: {
                                left: '650',
                                top: '230'
                            }
                        }
                    ],
                    textArr: [
                        {
                            text: '松开踏板',
                            position: {
                                left: '240px',
                                top: '220px',
                                width: '100px',
                                background: '#224d99',
                                border: '1px solid #476bac',
                                lineHeight: '30px',
                                color: '#fff',
                                borderRadius: '5px',
                                fontWeight: 'bold',
                                fontSize: '16px'
                            }
                        }, {
                            text: '踩下踏板',
                            position: {
                                left: '685px',
                                top: '220px',
                                width: '100px',
                                background: '#224d99',
                                border: '1px solid #476bac',
                                lineHeight: '30px',
                                color: '#fff',
                                borderRadius: '5px',
                                fontWeight: 'bold',
                                fontSize: '16px'
                            }
                        }
                    ]
                }
            },
            {
                template: 'lee_hc_mi', // ---16
                content: {
                    // 内容头部数据
                    head: {
                        // 控制内容头部的样式 可以控制头部div的样式
                        style: {
                            'height': '100px'
                        },
                        // 头部内容标题
                        title: '制动系统工作原理',
                        // 标题下面的内容块 可以是多个
                        p_contents: {
                            // 具体某一个大段落段落
                            p_content: [
                                {
                                    // 组成段落的小部分 如颜色字体大小等
                                    style: {
                                        'display': 'block'
                                    },
                                    content: '液压制动系统根据帕斯卡液压定律，利用液体在部件之间传递力或运动。液压制动系统使用制动液作为介质，使总泵中的产生的液力通过制动管路传送给各个轮缸，从而将制动踏板的力经过放大传给各车轮制动器总成，作用在制动蹄片上产生制动力'
                                }
                            ]
                        }
                    },
                    imgs: {
                        // 图片路径
                        img: './assets/images/14.png',
                        // 图片顶部文字以及样式
                        top: {
                            // 图片顶部文字样式
                            style: '',
                            // 文字内容
                            content: ''
                        },
                        // 图片底部文字以及样式
                        bottom: {
                            // 图片底部文字样式
                            style: {
                                'color': '#fff',
                                'font-size': '18px',
                                'font-weight': 'bold'
                            },
                            // 文字内容
                            content: ''
                        }
                    }
                },
                point: [
                    {
                        pointStyle: 'mail',
                        position: {
                            left: '120',
                            top: '225'
                        }
                    }
                ]
            },
        ]
    },

    {
        chapter: '制动助力器',
        isChapter: true,
        logo: './assets/images/logo_5ling.png',
        pages:[
            {
                template: 'lee_hc_mi', // ---16
                content: {
                    // 内容头部数据
                    head: {
                        // 控制内容头部的样式 可以控制头部div的样式
                        style: {
                            'height': '100px'
                        },
                        // 头部内容标题
                        title: '制动助力器',
                        // 标题下面的内容块 可以是多个
                        p_contents: {
                            // 具体某一个大段落段落
                            p_content: [
                                {
                                    // 组成段落的小部分 如颜色字体大小等
                                    style: {
                                        'display': 'block'
                                    },
                                    content: '制动助力器又叫真空助力器，是一种助力装置，利用发动机进气真空和大气之间的压差作为助力源，使司机在踩制动踏板时感到轻松'
                                }
                            ],
                        },
                        p_img:{
                            img: './assets/images/15-2.png',
                            imgstyle: {
                                'position': 'absolute','left':'112px','top':'215px'
                            },
                        }
                    },
                    imgs: {
                        // 图片路径
                        img: './assets/images/15-1.png',
                        // 图片顶部文字以及样式
                        top: {
                            // 图片顶部文字样式
                            style: '',
                            // 文字内容
                            content: ''
                        },
                        // 图片底部文字以及样式
                        bottom: {
                            // 图片底部文字样式
                            style: {
                                'color': '#fff',
                                'font-size': '18px',
                                'font-weight': 'bold'
                            },
                            // 文字内容
                            content: '1 钢轮辋'
                        }
                    }
                },
                point: [
                    {
                        pointStyle: 'point',
                        position: {
                            left: '495',
                            top: '310'
                        }
                    }
                ]
            },
            {
                template: 'target', // ---3
                img: './assets/images/16.png',
                title: '制动助力器--结构',
                line: true,
                pointStyle: 'point',
                order: false,
                canCanvas:false,
                content: [
                    {
                        point: '',
                        pointStyle: 'mail',
                        // animation: 'right', tip: 'tip',
                        position: {
                            left: '641',
                            top: '182',
                            wbleft: '555',
                            wbtop: '104'
                        },
                        style: {
                            width: '53px'
                        },
                        content: {
                            text: ['真空室']
                        }
                    }, {
                        point: '',
                        pointStyle: 'mail',
                        position: {
                            left: '699',
                            top: '202',
                            wbleft: '654',
                            wbtop: '161'
                        },
                        style: {
                            width: '53px'
                        },
                        content: {
                            text: ['膜片']
                        }
                    }, {
                        point: '',
                        pointStyle: 'mail',
                        position: {
                            left: '644',
                            top: '323',
                            wbleft: '490',
                            wbtop: '462'
                        },
                        style: {
                            width: '53px'
                        },
                        content: {
                            text: ['推杆']
                        }
                    },
                    {
                        point: '',
                        pointStyle: 'mail',
                        position: {
                            left: '715',
                            top: '315',
                            wbleft: '673',
                            wbtop: '224'
                        },
                        style: {
                            width: '53px'
                        },
                        content: {
                            text: ['真空阀']
                        }
                    },
                    {
                        point: '',
                        pointStyle: 'mail',
                        position: {
                            left: '740',
                            top: '345',
                            wbleft: '694',
                            wbtop: '420'
                        },
                        style: {
                            width: '53px'
                        },
                        content: {
                            text: ['空气阀']
                        }
                    },
                    {
                        point: '',
                        pointStyle: 'mail',
                        position: {
                            left: '710',
                            top: '403',
                            wbleft: '660',
                            wbtop: '483'
                        },
                        style: {
                            width: '53px'
                        },
                        content: {
                            text: ['变压室']
                        }
                    },
                    {
                        point: '',
                        pointStyle: 'mail',
                        position: {
                            left: '848',
                            top: '331',
                            wbleft: '830',
                            wbtop: '415'
                        },
                        style: {
                            width: '53px'
                        },
                        content: {
                            text: ['阀杆']
                        }
                    }
                ],
            },
            {
                template: 'switch-two-img', // ---5
                content: {
                    title: '制动助力器—工作原理',
                    content: ['制动助力器主要有3种工作模式：释放、施加、保持'],
                    fixedImg:'',
                    spanStyle:{
                        'position':'absolute','left':'470px','top':'130px'
                    },
                    spanStyle2:{
                        'position':'absolute','left':'470px','top':'195px'
                    },
                    imgs: [
                        './assets/images/17.png',
                        './assets/images/17.png', './assets/images/18.png', './assets/images/19.png'
                    ],
                    imgstyle:{
                        'position':'absolute','left':'400px','top':'175px'
                    },
                    spanText: ['松开制动踏板，助力器回到释放位置：此时空气阀关闭、真空阀打开，变压室与大气隔断，与真空室接通；其他制动机构也恢复到原来位置，制动油压下降，制动解除。','松开制动踏板，助力器回到释放位置：此时空气阀关闭、真空阀打开，变压室与大气隔断，与真空室接通；其他制动机构也恢复到原来位置，制动油压下降，制动解除。','踩下制动踏板时，阀杆推动空气阀向前移动同时弹簧在阀杆推力下推动真空阀向左移动，真空阀接触到阀座关闭通道A。',' 继续踩制动踏板，阀杆推动空气阀打开通道B，引空气进入变压室，变压室和真空室的压差使活塞向左移动，提供制动助力。','制动踏板踩到一半停止移动时，阀杆和空气阀停止移动，但膜片由于压差继续左移，真空阀在弹簧作用下也左移，当真空阀移到空气阀位置，会关闭大气通道使变压室压力稳定，保持了现有的制动力'],
                    pointStyleArr: [
                        {
                            point: '',
                            pointStyle: 'mail',
                            position: {
                                left: '245',
                                top: '180'
                            }
                        }, {
                            point: '',
                            pointStyle: 'mail',
                            position: {
                                left: '245',
                                top: '300'
                            }
                        },
                        {
                            point: '',
                            pointStyle: 'mail',
                            position: {
                                left: '245',
                                top: '420'
                            }
                        }
                    ],
                    textArr: [
                        {
                            text: '释放状态',
                            position: {
                                left: '100px',
                                top: '170px',
                                width: '100px',
                                // background: '#224d99',
                                // background: 'url(./assets/images/up.png)',
                                border: '1px solid #476bac',
                                lineHeight: '30px',
                                color: '#fff',
                                borderRadius: '5px',
                                fontWeight: 'bold',
                                fontSize: '16px'
                            }
                        }, 
                        {
                            text: '施加状态',
                            position: {
                                left: '100px',
                                top: '290px',
                                width: '100px',
                                // background: '#224d99',
                                border: '1px solid #476bac',
                                lineHeight: '30px',
                                color: '#fff',
                                borderRadius: '5px',
                                fontWeight: 'bold',
                                fontSize: '16px'
                            }
                        },
                        {
                            text: '保持状态',
                            position: {
                                left: '100px',
                                top: '410px',
                                width: '100px',
                                // background: '#224d99',
                                border: '1px solid #476bac',
                                lineHeight: '30px',
                                color: '#fff',
                                borderRadius: '5px',
                                fontWeight: 'bold',
                                fontSize: '16px'
                            }
                        },
                    ]
                }
            }, 
        ]
    },

    // 离合器结构组成和工作原理
    {
        chapter: '制动主缸',
        isChapter: true,
        logo: './assets/images/logo_5ling.png',
        pages: [
            {
                // 包含多个详细内容的页面
                template: 'lee_hc_mis_bc',
                intoPage : false,
                content: {
                    head: {
                        title: '制动主缸--功能',
                        p_contents: {
                            p_content: [
                                {
                                    style: {'font-size':'14px'},
                                    content: '制动主缸是把制动踏板的操做力转换成液压力的装置。它通常有以下功能：'
                                },
                            ]
                        },
                        p_img:{
                            img: './assets/images/20-1.png',
                            imgstyle: {
                                'position': 'absolute','left':'145px','top':'317px','max-width':'250px'
                            },
                        }
                    },
                    targetList: ['给制动器施加压力', '摩擦片产生足够压力后，平衡制动压力','摩擦片磨损后，补偿系统内的制动液','防止空气和水进入系统'],
                    imgs: [
                        {
                            img: './assets/images/20-2.png',
                            imgstyle:{
                                'margin-top':'-32px'
                            },
                            top: {
                                style: {},
                                content: ''
                            },
                            bottom: {
                                style: {},
                                content: ''
                            }
                        },
                    ],
                    p_contents: {
                        p_content: [
                            {
                                style: {
                                    'font-size': '18px',
                                    'font-weight': 'bold','magin-top':'20px','display':'block','text-align':'center'},
                                content: ``
                            }
                        ],

                    }
                },
                point: [
                    {
                        pointStyle: 'point',
                        position: {
                            left: '623',
                            top: '324'
                        }
                    },
                ],
            },
            {
                template: 'target', // ---3
                img: './assets/images/21.png',
                title: '制动主缸--结构',
                contentText: '制动主缸有两个活塞，两路不同的制动回路，目的是当有一路出现故障时，另一路还能起到一定的制动作用',
                line: true,
                pointStyle: 'point',
                order: false,
                canCanvas:false,
                content: [
                    {
                        point: '',
                        pointStyle: 'mail',
                        // animation: 'right', tip: 'tip',
                        position: {
                            left: '371',
                            top: '335',
                            wbleft: '310',
                            wbtop: '177'
                        },
                        style: {
                            width: '95px'
                        },
                        content: {
                            text: ['2号回位弹簧']
                        }
                    }, {
                        point: '',
                        pointStyle: 'mail',
                        position: {
                            left: '454',
                            top: '375',
                            wbleft: '255',
                            wbtop: '465'
                        },
                        style: {
                            width: '95px'
                        },
                        content: {
                            text: ['2号活塞皮碗']
                        }
                    }, {
                        point: '',
                        pointStyle: 'mail',
                        position: {
                            left: '504',
                            top: '339',
                            wbleft: '396',
                            wbtop: '221'
                        },
                        style: {
                            width: '95px'
                        },
                        content: {
                            text: ['2号活塞']
                        }
                    },
                    {
                        point: '',
                        pointStyle: 'mail',
                        position: {
                            left: '609',
                            top: '337',
                            wbleft: '522',
                            wbtop: '137'
                        },
                        style: {
                           width: '95px'
                        },
                        content: {
                            text: ['1号回位弹簧']
                        }
                    },
                    {
                        point: '',
                        pointStyle: 'mail',
                        position: {
                            left: '665',
                            top: '285',
                            wbleft: '558',
                            wbtop: '170'
                        },
                        style: {
                            width: '95px'
                        },
                        content: {
                            text: ['补偿孔']
                        }
                    },
                    {
                        point: '',
                        pointStyle: 'mail',
                        position: {
                            left: '684',
                            top: '300',
                            wbleft: '578',
                            wbtop: '206'
                        },
                        style: {
                            width: '95px'
                        },
                        content: {
                            text: ['进油孔']
                        }
                    },
                    {
                        point: '',
                        pointStyle: 'mail',
                        position: {
                            left: '671',
                            top: '375',
                            wbleft: '564',
                            wbtop: '461'
                        },
                        style: {
                            width: '95px'
                        },
                        content: {
                            text: ['1号活塞皮碗']
                        }
                    },
                    {
                        point: '',
                        pointStyle: 'mail',
                        position: {
                            left: '734',
                            top: '338',
                            wbleft: '626',
                            wbtop: '252'
                        },
                        style: {
                            width: '95px'
                        },
                        content: {
                            text: ['1号活塞']
                        }
                    }
                ],
            },
            {
                template: 'switch-two-img', // ---5
                content: {
                    title: '制动主缸—工作原理',
                    content: '',
                    fixedImg:'',
                    imgs: [
                        './assets/images/22.png',
                        './assets/images/22.png', './assets/images/23.png'
                    ],
                    spanStyle:{
                        'position':'absolute','left':'197px','top':'107px'
                    },
                    imgstyle:{
                        'position':'absolute','left':'400px','top':'195px'
                    },
                    spanText: ['踩下制动时，活塞向右移动，压力腔建立压力，将制动液压往前、后制动器。','踩下制动时，活塞向右移动，压力腔建立压力，将制动液压往前、后制动器。','松开制动踏板后，制动液由两活塞后腔经节流孔进入前腔，补偿前腔的低压，实现快速的解除制动'],
                    pointStyleArr: [
                        {
                            point: '',
                            pointStyle: 'mail',
                            position: {
                                left: '245',
                                top: '180'
                            }
                        }, {
                            point: '',
                            pointStyle: 'mail',
                            position: {
                                left: '245',
                                top: '300'
                            }
                        }
                    ],
                    textArr: [
                        {
                            text: '踩下',
                            position: {
                                left: '100px',
                                top: '170px',
                                width: '100px',
                                // background: '#224d99',
                                border: '1px solid #476bac',
                                lineHeight: '30px',
                                color: '#fff',
                                borderRadius: '5px',
                                fontWeight: 'bold',
                                fontSize: '16px'
                            }
                        }, 
                        {
                            text: '释放',
                            position: {
                                left: '100px',
                                top: '290px',
                                width: '100px',
                                // background: '#224d99',
                                border: '1px solid #476bac',
                                lineHeight: '30px',
                                color: '#fff',
                                borderRadius: '5px',
                                fontWeight: 'bold',
                                fontSize: '16px'
                            }
                        },
                    ]
                }
            }, 
        ]
    },
    {
        chapter: '制动器',
        isChapter: true,
        logo: './assets/images/logo_5ling.png',
        pages: [
            {
                template: 'switch-two-img', // ---5
                content: {
                    title: '制动器--盘式制动器',
                    fixedImg:'./assets/images/25-3.png',
                    spanStyle:'',
                    imgs: [
                        './assets/images/25-2.png',
                        './assets/images/25-1.png','./assets/images/25-2.png',
                    ],
                    imgstyle:{
                        'position':'absolute','left':'495px','top':'226px'
                    },
                    content:['盘式制动器由制动卡钳、摩擦片、制动盘、活塞、导向销等组成。','它用来自总泵的液压力推动活塞，使摩擦片夹紧制动盘，使车轮停止转动'],
                    spanText: '',
                    pointStyleArr: [
                        {
                            point: '',
                            pointStyle: 'mail',
                            position: {
                                left: '510',
                                top: '180'
                            }
                        }, {
                            point: '',
                            pointStyle: 'mail',
                            position: {
                                left: '810',
                                top: '180'
                            }
                        }
                    ],
                    textArr: [
                        {
                            text: '踩下制动',
                            position: {
                                left: '550px',
                                top: '170px',
                                width: '100px',
                                // background: '#224d99',
                                border: '1px solid #476bac',
                                lineHeight: '30px',
                                color: '#fff',
                                borderRadius: '5px',
                                fontWeight: 'bold',
                                fontSize: '16px'
                            }
                        }, {
                            text: '松开制动',
                            position: {
                                left: '850px',
                                top: '170px',
                                width: '100px',
                                // background: '#224d99',
                                border: '1px solid #476bac',
                                lineHeight: '30px',
                                color: '#fff',
                                borderRadius: '5px',
                                fontWeight: 'bold',
                                fontSize: '16px'
                            }
                        }
                    ]
                }
            }, 
            {
                template: 'target', // ---3
                img: './assets/images/26.png',
                title: '制动器—鼓式制动器',
                contentText: '',
                liText:['鼓式制动器通过轮缸活塞推动制动蹄片顶到制动鼓，实现车辆的减速。','活塞上的压力消失后，回位弹簧拉动制动蹄片，离开制动鼓，回到原位'],
                line: true,
                pointStyle: 'point',
                order: false,
                canCanvas:false,
                content: [
                    {
                        point: '',
                        pointStyle: 'mail',
                        // animation: 'right', tip: 'tip',
                        position: {
                            left: '567',
                            top: '215',
                            wbleft: '526',
                            wbtop: '155'
                        },
                        style: {
                            width: '95px'
                        },
                        content: {
                            text: ['制动轮缸']
                        }
                    }, {
                        point: '',
                        pointStyle: 'mail',
                        position: {
                            left: '641',
                            top: '263',
                            wbleft: '611',
                            wbtop: '218'
                        },
                        style: {
                            width: '95px'
                        },
                        content: {
                            text: ['回位弹簧']
                        }
                    }, {
                        point: '',
                        pointStyle: 'mail',
                        position: {
                            left: '708',
                            top: '323',
                            wbleft: '686',
                            wbtop: '296'
                        },
                        style: {
                            width: '95px'
                        },
                        content: {
                            text: ['制动蹄片']
                        }
                    },
                ],
            },
        ]
    },
    // 离合器故障维修
    {
        chapter: '制动系统的检测',
        isChapter: true,
        logo: './assets/images/logo_5ling.png',
        pages: [
            {
                template: 'target', // ---3
                img: '',
                title: '制动盘厚度检查',
                line: true,
                pointStyle: 'point',
                order: true,
                fixedImg : './assets/images/27.png',
                fixedImgstyle:{
                    'position':'absolute','left':'660px','top':'100px'
                },
                content: [
                    {
                        point: '',
                        pointStyle: 'mail',
                        // animation: 'right', tip: 'tip',
                        position: {
                            left: '846',
                            top: '190',
                            wbleft: '778',
                            wbtop: '88'
                        },
                        style: {
                            width: '131px'
                        },
                        content: {
                            text: ['测试点距离制动盘边缘13mm']
                        }
                    }
                ],
                emails: [
                        {
                            point: '1',
                            pointStyle: 'point',
                            animation: 'right',
                            tip: 'tip',
                            showed: false,
                            canCanvas:false,
                            position: {
                                left: '113',
                                top: '162',
                                wbleft: '171',
                                wbtop: '145',
                            },
                            style: {
                                width: '240px',
                            },
                            content: {
                                text: {
                                    // 具体某一个大段落段落
                                    p_content1: [
                                        {
                                            style: {
                                                'font-size': '14px',
                                                'display': 'inline-block',
                                                'height': '46px',
                                                'text-align':'left',
                                                'line-height': '46px',
                                                'width': '450px',
                                                'padding-left': '5px',
                                            },
                                            // 组成段落的小部分 如颜色字体大小等
                                            content: '测试前需要给量具校零'
                                        },
                                    ],
                                },
                            },
                        },
                        {
                            point: '2',
                            pointStyle: 'point',
                            animation: 'right',
                            tip: 'tip',
                            showed: false,
                            canCanvas:false,
                            position: {
                                left: '113',
                                top: '282',
                                wbleft: '171',
                                wbtop: '265',
                            },
                            style: {
                                width: '240px',
                            },
                            content: {
                                text: {
                                    // 具体某一个大段落段落
                                    p_content1: [
                                        {
                                            style: {
                                                'font-size': '14px',
                                                'display': 'inline-block',
                                                'height': '46px',
                                                'text-align':'left',
                                                'line-height': '46px',
                                                'width': '450px',
                                                'padding-left': '5px',
                                            },
                                            // 组成段落的小部分 如颜色字体大小等
                                            content: '选择制动盘上同圆的4个以上的点进行测试，以检查厚度的变化'
                                        },
                                    ],
                                },
                            },
                        },
                        {
                            point: '3',
                            pointStyle: 'point',
                            animation: 'right',
                            tip: 'tip',
                            showed: false,
                            canCanvas:false,
                            position: {
                                left: '113',
                                top: '402',
                                wbleft: '171',
                                wbtop: '385',
                            },
                            style: {
                                width: '240px',
                            },
                            content: {
                                text: {
                                    // 具体某一个大段落段落
                                    p_content1: [
                                        {
                                            style: {
                                                'font-size': '14px',
                                                'display': 'inline-block',
                                                'height': '46px',
                                                'line-height': '46px',
                                                'width': '450px',
                                                'text-align':'left',
                                                'padding-left': '5px',
                                            },
                                            // 组成段落的小部分 如颜色字体大小等
                                            content: '如果测量点的厚度小于制动盘的规定的最小厚度，则需要更换制动盘'
                                        },
                                    ],
                                },
                            },
                        },
                    ],
            },
            {
                template: 'target', // ---3
                img: '',
                title: '制动盘端面跳动量检查',
                line: true,
                pointStyle: 'point',
                order: true,
                fixedImg : './assets/images/28.png',
                fixedImgstyle:{
                    'position':'absolute','left':'750px','top':'123px'
                },
                content: [
                    {
                        point: '',
                        pointStyle: 'mail',
                        // animation: 'right', tip: 'tip',
                        position: {
                            left: '924',
                            top: '178',
                            wbleft: '778',
                            wbtop: '88'
                        },
                        style: {
                            width: '131px'
                        },
                        content: {
                            text: ['百分表探针置于边缘10mm；表头垂直于盘面']
                        }
                    }, 
                    {
                        point: '',
                        pointStyle: 'mail',
                        // animation: 'right', tip: 'tip',
                        position: {
                            left: '874',
                            top: '362',
                            wbleft: '756',
                            wbtop: '264'
                        },
                        style: {
                            width: '180px'
                        },
                        content: {
                            text: ['测量时，匀速旋转制动盘；跳动量为最大值和最小值之差']
                        }
                    },
                ],
                emails: [
                        {
                            point: '1',
                            pointStyle: 'point',
                            animation: 'right',
                            tip: 'tip',
                            showed: false,
                            canCanvas:false,
                            position: {
                                left: '113',
                                top: '138',
                                wbleft: '171',
                                wbtop: '121',
                            },
                            style: {
                                width: '240px',
                            },
                            content: {
                                text: {
                                    // 具体某一个大段落段落
                                    p_content1: [
                                        {
                                            style: {
                                                'font-size': '14px',
                                                'display': 'inline-block',
                                                'height': '46px',
                                                'text-align':'left',
                                                'line-height': '46px',
                                                'width': '550px',
                                                'padding-left': '5px',
                                            },
                                            // 组成段落的小部分 如颜色字体大小等
                                            content: '准备拆装工具、测量工具-百分表'
                                        },
                                    ],
                                },
                            },
                        },
                        {
                            point: '2',
                            pointStyle: 'point',
                            animation: 'right',
                            tip: 'tip',
                            showed: false,
                            canCanvas:false,
                            position: {
                                left: '113',
                                top: '218',
                                wbleft: '171',
                                wbtop: '201',
                            },
                            style: {
                                width: '240px',
                            },
                            content: {
                                text: {
                                    // 具体某一个大段落段落
                                    p_content1: [
                                        {
                                            style: {
                                                'font-size': '14px',
                                                'display': 'inline-block',
                                                'height': '46px',
                                                'text-align':'left',
                                                'line-height': '46px',
                                                'width': '550px',
                                                'padding-left': '5px',
                                            },
                                            // 组成段落的小部分 如颜色字体大小等
                                            content: '拆下轮胎和制动钳'
                                        },
                                    ],
                                },
                            },
                        },
                        {
                            point: '3',
                            pointStyle: 'point',
                            animation: 'right',
                            tip: 'tip',
                            showed: false,
                            canCanvas:false,
                            position: {
                                left: '113',
                                top: '298',
                                wbleft: '171',
                                wbtop: '281',
                            },
                            style: {
                                width: '240px',
                            },
                            content: {
                                text: {
                                    // 具体某一个大段落段落
                                    p_content1: [
                                        {
                                            style: {
                                                'font-size': '14px',
                                                'display': 'inline-block',
                                                'height': '46px',
                                                'line-height': '46px',
                                                'width': '550px',
                                                'text-align':'left',
                                                'padding-left': '5px',
                                            },
                                            // 组成段落的小部分 如颜色字体大小等
                                            content: '安装百分表，确定百分表探针距离制动盘边缘10mm位置并垂直于盘面'
                                        },
                                    ],
                                },
                            },
                        },
                        {
                            point: '4',
                            pointStyle: 'point',
                            animation: 'right',
                            tip: 'tip',
                            showed: false,
                            canCanvas:false,
                            position: {
                                left: '113',
                                top: '378',
                                wbleft: '171',
                                wbtop: '361',
                            },
                            style: {
                                width: '240px',
                            },
                            content: {
                                text: {
                                    // 具体某一个大段落段落
                                    p_content1: [
                                        {
                                            style: {
                                                'font-size': '14px',
                                                'display': 'inline-block',
                                                'height': '46px',
                                                'line-height': '46px',
                                                'width': '550px',
                                                'text-align':'left',
                                                'padding-left': '5px',
                                            },
                                            // 组成段落的小部分 如颜色字体大小等
                                            content: '给百分表校零'
                                        },
                                    ],
                                },
                            },
                        },
                        {
                            point: '5',
                            pointStyle: 'point',
                            animation: 'right',
                            tip: 'tip',
                            showed: false,
                            canCanvas:false,
                            position: {
                                left: '113',
                                top: '458',
                                wbleft: '171',
                                wbtop: '441',
                            },
                            style: {
                                width: '240px',
                            },
                            content: {
                                text: {
                                    // 具体某一个大段落段落
                                    p_content1: [
                                        {
                                            style: {
                                                'font-size': '14px',
                                                'display': 'inline-block',
                                                'height': '46px',
                                                'line-height': '46px',
                                                'width': '550px',
                                                'text-align':'left',
                                                'padding-left': '5px',
                                            },
                                            // 组成段落的小部分 如颜色字体大小等
                                            content: '测量时匀速旋转制动盘查看表针变化，最大跳动量需小于0.1mm（宝骏乐驰）'
                                        },
                                    ],
                                },
                            },
                        },
                    ],
            },
            {
                // 上文字  下多图
                template: 'lee-hc-mis',
                canCanvas:false,
                content: {
                    head: {
                        title: '制动鼓检查',
                        p_contents: {
                            p_content: [

                                {
                                    content: '钢制轮辋采用钢板冲压轮盘铆接或焊接而成。铝轮辋比钢轮辋重量轻，而且有多种型式'
                                },

                            ],
                        },
                        Text:[
                            {
                                pText:'制动鼓问题引发的现象',
                                liText:[
                                    '制动时，车辆有节奏的跳动','制动时，车辆振动','制动过于敏感','制动时，踏板回弹过大','制动时，踏板太软','车轮不转或阻力太大'
                                ]
                            }
                        ]
                    },
                    imgs: 
                        {
                        img: './assets/images/29.png',
                        top: {},
                        bottom: {
                            style: {
                                'position': 'absolute',
                                'left': '580px',
                                'top': '165px'
                            }, 
                            content: ''
                        }
                    },
                },
                point: [
                    {
                        pointStyle: 'mail',
                        position: {
                            left: '300',
                            top: '124'
                        }
                    }
                ],
            },
            {
                template: 'target', // ---3
                img: './assets/images/30.png',
                title: '制动鼓检查',
                contentText:'制动鼓的检修标准',
                line: true,
                pointStyle: 'point',
                order: false,
                canCanvas:false,
                content: [
                    {
                        point: '',
                        pointStyle: 'mail',
                        // animation: 'right', tip: 'tip',
                        position: {
                            left: '677',
                            top: '290',
                            wbleft: '708',
                            wbtop: '354'
                        },
                        style: {
                            width: '250px'
                        },
                        content: {
                            text: ''
                        },
                        Text:[
                            {
                                pText:'制动鼓需要整修的标准',
                                liText:[
                                    '锥形或失圆超过0.015mm','制动鼓划痕测量超过0.15mm'
                                ]
                            },
                            {
                                pText:'制动鼓的更换标准',
                                liText:[
                                    '最大直径等于或超过报废直径','重新修整后磨损余量小于0.75mm',
                                ]
                            },
                        ]
                    },
                ],
            },
            {
                // 上文字  下多图
                template: 'lee-hc-mis',
                canCanvas:false,
                content: {
                    head: {
                        title: '真空助力器检查',
                        p_contents: {
                            p_content: [

                                {
                                    content: ''
                                },

                            ],
                        },
                        Text:[
                            {
                                pText:'检查是否完全失效',
                                liText:[
                                    '发动机熄火，踩下制动踏板并保持不变','起动发动机','踏板高度无变化，则助力器无作用','踏板进一步下沉，则助力器良好'
                                ]
                            },
                            {
                                pText:'检查是否密封不良',
                                liText:[
                                    '发动机运转，踩下制动踏板并保持位置不变','停止发动机，保持30秒','踏板高度有变化（有升力），则助力器密封不良','踏板高度不发生变化，则助力器良好',
                                ]
                            },
                        ]
                    },
                    imgs: 
                        {
                        img: './assets/images/31.png',
                        top: {},
                        bottom: {
                            style: {
                                'position': 'absolute',
                                'left': '580px',
                                'top': '165px'
                            }, 
                            content: ''
                        }
                    },
                },
                point: [
                    {
                        pointStyle: 'mail',
                        position: {
                            left: '300',
                            top: '125'
                        }
                    }
                ],
            },
            {
                template: 'target', // ---3
                img: '',
                title: '制动踏板行程检查',
                line: true,
                pointStyle: 'point',
                order: false,
                fixedImg : './assets/images/32.png',
                fixedImgstyle:{
                    'position':'absolute','left':'734px','top':'150px','max-width':'293px'
                },
                content: [
                    {
                        point: '',
                        pointStyle: 'mail',
                        // animation: 'right', tip: 'tip',
                        position: {
                            left: '957',
                            top: '388',
                            wbleft: '863',
                            wbtop: '329'
                        },
                        style: {
                            width: '131px'
                        },
                        content: {
                            text: ['踏板自由行程5-15mm']
                        }
                    }, 
                ],
                emails: [
                        {
                            point: '',
                            pointStyle: 'mail',
                            animation: 'right',
                            tip: 'tip',
                            showed: false,
                            canCanvas:false,
                            position: {
                                left: '113',
                                top: '138',
                                wbleft: '171',
                                wbtop: '121',
                            },
                            style: {
                                width: '240px',
                            },
                            content: {
                                text: {
                                    // 具体某一个大段落段落
                                    p_content1: [
                                        {
                                            style: {
                                                'font-size': '14px',
                                                'display': 'inline-block',
                                                'height': '46px',
                                                'text-align':'left',
                                                'line-height': '46px',
                                                'width': '560px',
                                                'padding-left': '5px',
                                            },
                                            // 组成段落的小部分 如颜色字体大小等
                                            content: '发动机熄火时踩制动踏板2-3次，去除真空助力器内的残余真空'
                                        },
                                    ],
                                },
                            },
                        },
                        {
                            point: '',
                            pointStyle: 'mail',
                            animation: 'right',
                            tip: 'tip',
                            showed: false,
                            canCanvas:false,
                            position: {
                                left: '113',
                                top: '218',
                                wbleft: '171',
                                wbtop: '201',
                            },
                            style: {
                                width: '240px',
                            },
                            content: {
                                text: {
                                    // 具体某一个大段落段落
                                    p_content1: [
                                        {
                                            style: {
                                                'font-size': '14px',
                                                'display': 'inline-block',
                                                'height': '46px',
                                                'text-align':'left',
                                                'line-height': '46px',
                                                'width': '560px',
                                                'padding-left': '5px',
                                            },
                                            // 组成段落的小部分 如颜色字体大小等
                                            content: '踩下制动踏板时，需明显感觉到阻力'
                                        },
                                    ],
                                },
                            },
                        },
                        {
                            point: '',
                            pointStyle: 'mail',
                            animation: 'right',
                            tip: 'tip',
                            showed: false,
                            canCanvas:false,
                            position: {
                                left: '113',
                                top: '298',
                                wbleft: '171',
                                wbtop: '281',
                            },
                            style: {
                                width: '240px',
                            },
                            content: {
                                text: {
                                    // 具体某一个大段落段落
                                    p_content1: [
                                        {
                                            style: {
                                                'font-size': '14px',
                                                'display': 'inline-block',
                                                'height': '46px',
                                                'line-height': '46px',
                                                'width': '560px',
                                                'text-align':'left',
                                                'padding-left': '5px',
                                            },
                                            // 组成段落的小部分 如颜色字体大小等
                                            content: '踏板高度无变化，则助力器无作用轻轻按压制动踏板，用直尺测量制动踏板行程'
                                        },
                                    ],
                                },
                            },
                        },
                        {
                            point: '',
                            pointStyle: 'mail',
                            animation: 'right',
                            tip: 'tip',
                            showed: false,
                            canCanvas:false,
                            position: {
                                left: '113',
                                top: '378',
                                wbleft: '171',
                                wbtop: '361',
                            },
                            style: {
                                width: '240px',
                            },
                            content: {
                                text: {
                                    // 具体某一个大段落段落
                                    p_content1: [
                                        {
                                            style: {
                                                'font-size': '14px',
                                                'display': 'inline-block',
                                                'height': '46px',
                                                'line-height': '46px',
                                                'width': '560px',
                                                'text-align':'left',
                                                'padding-left': '5px',
                                            },
                                            // 组成段落的小部分 如颜色字体大小等
                                            content: '自由行程过大，说明助力器推杆与主缸活塞间隙过大'
                                        },
                                    ],
                                },
                            },
                        },
                        {
                            point: '',
                            pointStyle: 'mail',
                            animation: 'right',
                            tip: 'tip',
                            showed: false,
                            canCanvas:false,
                            position: {
                                left: '113',
                                top: '458',
                                wbleft: '171',
                                wbtop: '441',
                            },
                            style: {
                                width: '240px',
                            },
                            content: {
                                text: {
                                    // 具体某一个大段落段落
                                    p_content1: [
                                        {
                                            style: {
                                                'font-size': '14px',
                                                'display': 'inline-block',
                                                'height': '46px',
                                                'line-height': '46px',
                                                'width': '560px',
                                                'text-align':'left',
                                                'padding-left': '5px',
                                            },
                                            // 组成段落的小部分 如颜色字体大小等
                                            content: '自由行程过小，可能是助力器推杆和主缸活塞无间隙或制动开关调整不当'
                                        },
                                    ],
                                },
                            },
                        },
                    ],
            },
            {
                // 上文字  下多图
                template: 'lee-hc-mis',
                canCanvas: true,
                content: {
                    head: {
                        title: '制动片检查',
                        p_contents: {
                            p_content: [

                                {
                                    content: ''
                                },

                            ],
                        },
                        Text:[
                            {
                                pText:'检查要点：（宝骏乐驰）',
                                liText:[
                                    '每15000公里检查一次制动衬片','检查制动片可与轮胎换位同时进行','可通过卡钳顶端的检查孔观察内衬片的厚度','需要查看卡钳两端，检查外衬片的两端是否过度磨损','制动片磨薄或偏磨后需要拆卸检查','制动片磨损后，更换新片'
                                ]
                            },
                        ]
                    },
                    imgs: 
                        {
                        img: './assets/images/33.png',
                        top: {},
                        bottom: {
                            style: {
                                'position': 'absolute',
                                'left': '534px',
                                'top': '137px'
                            }, 
                            content: ''
                        }
                    },
                },
                point: [
                    {
                        pointStyle: 'mail',
                        position: {
                            left: '300',
                            top: '125'
                        }
                    },
                ],
                emails: [
                    {
                        point: '',
                        pointStyle: 'point',
                        animation: 'right',
                        tip: 'tip',
                        showed: false,
                        canCanvas:true,
                        position: {
                            left: '628',
                            top: '220',
                            wbleft: '171',
                            wbtop: '121',
                        },
                        style: {
                            width: '240px',
                        },
                        content: {
                            text: {
                                // 具体某一个大段落段落
                                p_content1: [
                                    {
                                        style: {
                                            // 'color': '#000',
                                            'font-size': '14px',
                                            'background': '#edf6ff',
                                            'border-radius':'10px',
                                            'display': 'inline-block',
                                            'border':'2px solid #000',
                                            'text-align':'left',
                                            'width': '112px',
                                            'padding': '10px 12px',
                                            'position':'absolute',
                                            'left':'574px',
                                            'top':'163px'
                                        },
                                        // 组成段落的小部分 如颜色字体大小等
                                        content: '极限厚度6mm '
                                    },
                                ],
                            },
                        },
                    },
                ],
            },
            {
                // 上文字  下多图
                template: 'lee_lc_ri',
                content: {
                    head: {
                        title: '真空助力器维修处理',
                        p_contents: {
                            p_content: 
                            {
                                content: '真空助力器是制动系统重要的部件之一，涉及到汽车的行车安全，出现故障时，要及时维修处理'
                            },
                        },
                        Text:[
                            {
                                pText:'漏气、失效维修处理',
                                liText:[
                                    '检查真空管路是否损坏，如损坏则进行更换','检查主缸与助力器之间的密封件是否损坏，如损坏则进行更换','排除助力器以外故障导致的漏气、失效，则更换助力器总成'
                                ]
                            },
                            {
                                pText:'助力器异响处理',
                                liText:[
                                    '确认异响是助力器内部产生，则直接更换助力器总成',
                                ]
                            },
                            {
                                pText:'助力器进制动液处理',
                                liText:[
                                    '助力器内如果进入制动液，则直接更换助力器总成',
                                ]
                            },
                        ]
                    },
                    imgs: 
                        {
                        img: './assets/images/31.png',
                        top: {},
                        bottom: {
                            style: {
                                'position': 'absolute',
                                'left': '625px',
                                'top': '183px',
                                'max-width':'350px'
                            }, 
                            content: ''
                        }
                    },
                },
                point: [
                    {
                        pointStyle: 'mail',
                        position: {
                            left: '310',
                            top: '157'
                        },
                        index:'1'
                    },
                    {
                        pointStyle: 'mail',
                        position: {
                            left: '310',
                            top: '323'
                        },
                        index:'2'
                    },
                    {
                        pointStyle: 'mail',
                        position: {
                            left: '310',
                            top: '412'
                        },
                        index:'3'
                    }
                ],
            },
            {
                template: 'drag-and-drop', // ---8
                content: {
                    title: '制动主缸故障',
                    explain: '离合器主缸故障主要有以下几种形式。可能的故障原因及维修措施如下：', // 说明
                    problem: '请在各故障原因的后面填入正确的维修措施', // 试题
                    optionsTitle: [
                        '故障原因', '故障维修'
                    ],
                    resonOptions: [
                        {
                            text: '制动主缸漏油',
                            height: '30px',
                            answerTrue: '主缸内皮碗老化或磨损'
                        }, {
                            text: '制动主缸变形裂纹',
                            height: '30px',
                            answerTrue: '由于振动或受力过大，使之变形或裂开'
                        }, {
                            text: '进油口接头或出油口损坏',
                            height: '30px',
                            answerTrue: '由于振动或受力过大，使之变形或裂开'
                        }, {
                            text: '制动主缸损坏',
                            height: '30px',
                            answerTrue: '由于脏物等原因，使主缸缸壁严重磨损'
                        }
                    ],
                    answerOptions: [
                        {
                            text: '由于脏物等原因，使主缸缸壁严重磨损',
                            dropStyle: {
                                left: '285px',
                                top: '229px',
                                answer: '1', // 正确答案位置
                            },
                            dragStyle: {
                                left: '618px',
                                top: '236px',
                                answer: '4'
                            }
                        }, {
                            text: '由于振动或受力过大，使之变形或裂开',
                            dropStyle: {
                                left: '285px',
                                top: '260px',
                                answer: '2', // 正确答案位置
                            },
                            dragStyle: {
                                left: '618px',
                                top: '265px',
                                // answer: '2'
                                answer: ['2','3']
                            }
                        }, {
                            text: '主缸内皮碗老化或磨损',
                            dropStyle: {
                                left: '285px',
                                top: '291px',
                                answer: '3', // 正确答案位置
                            },
                            dragStyle: {
                                left: '618px',
                                top: '294px',
                                answer: '1'
                            }
                        }, {
                            text: '由于振动或受力过大，使之变形或裂开',
                            dropStyle: {
                                left: '285px',
                                top: '322px',
                                answer: '4', // 正确答案位置
                            },
                            dragStyle: {
                                left: '618px',
                                top: '323px',
                                // answer: '3'
                                answer: ['2','3']
                            }
                        }
                    ],
                    dragStyleCommon: {
                        'width': '260px',
                        'height': '24px',
                        'background': '#486aad',
                        'color': '#fff',
                        'lineHeight': '24px',
                        'border': '1px solid #c4cfe4'
                    }
                }
            }, 
            {
                // 上文字  下多图
                template: 'lee_lc_ri',
                content: {
                    head: {
                        title: '制动系统检查及处理方法',
                        p_contents: {
                            p_content: 
                            {
                                content: ''
                            },
                        },
                        Text:[
                            {
                                pText:'制动主缸内漏检查',
                                liText:[
                                    '发动机启动状态，踩下制动踏板并保持其位置不变，此时如感觉踏板力逐渐减少，则制动系统有泄漏，需进一步检查制动主缸密封性能。拆卸主缸出油管后，用堵头封堵主缸出油口，然后踩下制动踏板，并保持力不变，观察踏板是否降低，若降低，则制动主缸漏油','拆卸主缸出油管，在两出油口上分别连接压力表，踩下制动踏板建立约3～7Mpa压力并保持其位置不变，观察压力表压力降低数值：稳压后30S各制动腔液压降不大于0.3MPa为合格'
                                ]
                            },
                            {
                                pText:'制动主缸阻塞检查',
                                liText:[
                                    '检查制动鼓(盘)发热的管路，拧松制动主缸出液口的连接管，卸掉管路压力，若发热的制动鼓(盘)能轻松转动，初步判断为制动主缸补偿孔被封堵，更换制动主缸',
                                ]
                            },
                            {
                                pText:'制动系统进气',
                                liText:[
                                    '制动踏板踩到底，制动效果不好；连续刹车，效果无改善。可能是制动系统内混有气体，应该先按照制动系统排气方法对系统进行排气',
                                ]
                            },
                        ]
                    },
                    imgs: 
                        {
                        img: '',
                        top: {},
                        bottom: {
                            style: {
                                'position': 'absolute',
                                'left': '625px',
                                'top': '183px',
                                'max-width':'350px'
                            }, 
                            content: ''
                        }
                    },
                },
                point: [
                    {
                        pointStyle: 'mail',
                        position: {
                            left: '310',
                            top: '137'
                        },
                        index:'1'
                    },
                    {
                        pointStyle: 'mail',
                        position: {
                            left: '310',
                            top: '320'
                        },
                        index:'2'
                    },
                    {
                        pointStyle: 'mail',
                        position: {
                            left: '310',
                            top: '427'
                        },
                        index:'3'
                    }
                ],
            },
            {
                template: 'target', // ---3
                img: '',
                title: '更换主缸注意事项',
                line: true,
                pointStyle: 'point',
                order: false,
                canCanvas:false,
                fixedImg : './assets/images/37.png',
                fixedImgstyle:{
                    'position': 'absolute', 'left': '100px', 'top': '157px'
                },
                content: '',
                emails: [
                        {
                            point: '',
                            pointStyle: 'mail',
                            animation: 'right',
                            tip: 'tip',
                            showed: false,
                            canCanvas:false,
                            position: {
                                left: '280',
                                top: '130',
                                wbleft: '330',
                                wbtop: '114',
                            },
                            style: {
                                width: '240px',
                            },
                            content: {
                                text: {
                                    // 具体某一个大段落段落
                                    p_content1: [
                                        {
                                            style: {
                                                'font-size': '14px',
                                                'display': 'inline-block',
                                                'height': '46px',
                                                'text-align':'left',
                                                'line-height': '46px',
                                                'width': '630px',
                                                'padding-left': '5px',
                                            },
                                            // 组成段落的小部分 如颜色字体大小等
                                            content: '确认制动主缸为合格品'
                                        },
                                    ],
                                },
                            },
                        },
                        {
                            point: '',
                            pointStyle: 'mail',
                            animation: 'right',
                            tip: 'tip',
                            showed: false,
                            canCanvas:false,
                            position: {
                                left: '280',
                                top: '200',
                                wbleft: '330',
                                wbtop: '184',
                            },
                            style: {
                                width: '240px',
                            },
                            content: {
                                text: {
                                    // 具体某一个大段落段落
                                    p_content1: [
                                        {
                                            style: {
                                                'font-size': '14px',
                                                'display': 'inline-block',
                                                'height': '46px',
                                                'text-align':'left',
                                                'line-height': '46px',
                                                'width': '630px',
                                                'padding-left': '5px',
                                            },
                                            // 组成段落的小部分 如颜色字体大小等
                                            content: '将制动主缸的两个工作腔充满制动油液，润滑活塞和内腔，将油液倒出'
                                        },
                                    ],
                                },
                            },
                        },
                        {
                            point: '',
                            pointStyle: 'mail',
                            animation: 'right',
                            tip: 'tip',
                            showed: false,
                            canCanvas:false,
                            position: {
                                left: '280',
                                top: '270',
                                wbleft: '330',
                                wbtop: '254',
                            },
                            style: {
                                width: '240px',
                            },
                            content: {
                                text: {
                                    // 具体某一个大段落段落
                                    p_content1: [
                                        {
                                            style: {
                                                'font-size': '14px',
                                                'display': 'inline-block',
                                                'height': '46px',
                                                'text-align':'left',
                                                'line-height': '46px',
                                                'width': '630px',
                                                'padding-left': '5px',
                                            },
                                            // 组成段落的小部分 如颜色字体大小等
                                            content: '对活塞施加力，使活塞移动，检查活塞推进和顶出是否平滑自如，确认工作正常后再装车'
                                        },
                                    ],
                                },
                            },
                        },
                        {
                            point: '',
                            pointStyle: 'mail',
                            animation: 'right',
                            tip: 'tip',
                            showed: false,
                            canCanvas:false,
                            position: {
                                left: '280',
                                top: '340',
                                wbleft: '330',
                                wbtop: '324',
                            },
                            style: {
                                width: '240px',
                            },
                            content: {
                                text: {
                                    // 具体某一个大段落段落
                                    p_content1: [
                                        {
                                            style: {
                                                'font-size': '14px',
                                                'display': 'inline-block',
                                                'height': '46px',
                                                'line-height': '46px',
                                                'width': '630px',
                                                'text-align':'left',
                                                'padding-left': '5px',
                                            },
                                            // 组成段落的小部分 如颜色字体大小等
                                            content: '安装制动主缸时将其与助力器对中，拧紧固定螺栓，然后联接液压制动管路接头'
                                        },
                                    ],
                                },
                            },
                        },
                        {
                            point: '',
                            pointStyle: 'mail',
                            animation: 'right',
                            tip: 'tip',
                            showed: false,
                            canCanvas:false,
                            position: {
                                left: '280',
                                top: '410',
                                wbleft: '330',
                                wbtop: '394',
                            },
                            style: {
                                width: '240px',
                            },
                            content: {
                                text: {
                                    // 具体某一个大段落段落
                                    p_content1: [
                                        {
                                            style: {
                                                'font-size': '14px',
                                                'display': 'inline-block',
                                                'height': '46px',
                                                'text-align':'left',
                                                'line-height': '46px',
                                                'width': '630px',
                                                'padding-left': '5px',
                                            },
                                            // 组成段落的小部分 如颜色字体大小等
                                            content: '加注制动液时需对系统进行排气'
                                        },
                                    ],
                                },
                            },
                        },
                        {
                            point: '',
                            pointStyle: 'mail',
                            animation: 'right',
                            tip: 'tip',
                            showed: false,
                            canCanvas:false,
                            position: {
                                left: '280',
                                top: '480',
                                wbleft: '330',
                                wbtop: '462',
                            },
                            style: {
                                width: '240px',
                            },
                            content: {
                                text: {
                                    // 具体某一个大段落段落
                                    p_content1: [
                                        {
                                            style: {
                                                'font-size': '14px',
                                                'display': 'inline-block',
                                                'height': '46px',
                                                'text-align':'left',
                                                'line-height': '46px',
                                                'width': '630px',
                                                'padding-left': '5px',
                                            },
                                            // 组成段落的小部分 如颜色字体大小等
                                            content: '确认制动系统无异常后，对制动性能进行试车，确认制动系统工作正常后才能正常行驶'
                                        },
                                    ],
                                },
                            },
                        },
                    ],
            },
            {
                // 上文字  下多图
                template: 'lee-hc-mis',
                canCanvas:false,
                content: {
                    head: {
                        title: '制动异响故障原因判断',
                        p_contents: {
                            p_content: [

                                {
                                    content: ''
                                },

                            ],
                        },
                        Text:[
                            {
                                pText:'引起制动异响的原因：',
                                liText:[
                                    '摩擦片严重磨损使金属部分暴露，造成摩擦面是金属摩擦','摩擦片表面硬化或变质','制动毂或盘不均匀磨损或安装不牢','制动蹄与磨擦片接触不紧密','制动蹄固定销松动','制动毂轴承磨损','制动鼓变形'
                                ]
                            }
                        ]
                    },
                    imgs: 
                        {
                        img: './assets/images/38.png',
                        top: {},
                        bottom: {
                            style: {
                                'position': 'absolute',
                                'left': '580px',
                                'top': '165px',
                                'max-width':'410px'
                            }, 
                            content: ''
                        }
                    },
                },
                point: [
                    {
                        pointStyle: 'mail',
                        position: {
                            left: '300',
                            top: '125'
                        }
                    }
                ],
            },
            {
                // 上文字  下多图
                template: 'lee-hc-mis',
                canCanvas:false,
                content: {
                    head: {
                        title: '制动不足故障原因判断',
                        p_contents: {
                            p_content: [

                                {
                                    content: ''
                                },

                            ],
                        },
                        Text:[
                            {
                                pText:'引起制动力不足的原因:',
                                liText:[
                                    '检查制动液是否充足','检查轮胎气压是否过高','检查真空助力是否有效','检查管路接头是否漏油','检查制动间隙，或制动主缸与总泵之间的间隙是否过大','行程是否过大，如果行程过大可能系统中存在空气','拆检制动器，检查制动分泵是否有漏油等故障，摩擦片上是否沾有油污、润滑脂或受水潮湿，是否磨损而变得光滑，是否存在接触不良或严重磨损','制动鼓或制动盘是否失圆','测量制动总泵输出油压是否足够'
                                ]
                            }
                        ]
                    },
                    imgs: 
                        {
                        img: './assets/images/39.png',
                        top: {},
                        bottom: {
                            style: {
                                'position': 'absolute',
                                'left': '580px',
                                'top': '165px',
                                'max-width':'410px'
                            }, 
                            content: ''
                        }
                    },
                },
                point: [
                    {
                        pointStyle: 'mail',
                        position: {
                            left: '300',
                            top: '125'
                        }
                    }
                ],
            },
        ]
    },
    {
        chapter: '轮胎',
        isChapter: true,
        logo: './assets/images/logo_5ling.png',
        pages: [
            {
                // 左文字  右图片
                template: 'fjz_lc_ri',
                content: {
                    left: [
                        {
                            title: [
                                {
                                    style: { 'color': '#000', 'display': 'inline-block' },
                                    content: '轮胎'
                                }
                            ],
                            smallTitle: [
                            ],
                            p_contents: [
                                {
                                    style: {
                                        'display': 'block',
                                        'margin-bottom': '20px'
                                    },
                                    content: `轮胎基本结构：胎体由粘合为一体的多层浸渍橡胶的绳线（称为胎体层）组成；
                                    胎体层决定轮胎的强度、汽车的操纵性、平顺性以及抗疲劳、热和擦伤的能力`
                                },
                                {
                                    style: {
                                        'display': 'block',
                                        'margin-bottom': '20px'
                                    },
                                    content: '趾口是轮胎与轮辋接触的部分；提供轮辋与轮胎之间的气密密封'
                                },
                                {
                                    style: {
                                        'display': 'block',
                                        'margin-bottom': '20px'
                                    },
                                    content: `胎冠是轮胎与路面接触的部位；胎冠上设有花纹，花纹不仅为轮胎提供了附着力，
                                    还提供了排除路面与轮胎之间积水的通道`
                                },
                                {
                                    style: {
                                        'display': 'block',
                                        'margin-bottom': '20px'
                                    },
                                    content: `为了适应特定的路况，开发出了各种不同的胎面花纹，比如泥地型、雪地型及全天候型等。
                                    有的轮胎胎面上设有小切口，叫作刀槽花纹，当轮胎在路面上挠曲变形时，刀槽花纹会张开，使胎面具有更好的附着性`
                                },
                                {
                                    style: {
                                        'display': 'block',
                                        'margin-bottom': '20px'
                                    },
                                    content: '胎侧是轮胎的侧壁。胎侧的胶层较薄以便具有更大的柔性'
                                },
                            ],
                        }
                    ],
                    imgs: {
                        // 图片路径
                        img: './assets/images/42.png',
                        // 图片顶部文字以及样式
                        top: {
                            style: '',
                            content: ''
                        },
                        // 图片底部文字以及样式
                        bottom: {
                            style: {},
                            content: ''
                        }
                    },
                }
            },
            {
                // 左文字  右图片
                template: 'fjz_lc_ri',
                content: {
                    left: [
                        {
                            title: [
                                {
                                    style: {
                                    },
                                    content: '子午线轮胎'
                                },
                            ],
                            smallTitle: [
                                {
                                    style: {},
                                    content: `子午线轮胎(radial tire)趾口间的帘线与轮胎中心线成大约90度角；
                                    子午线轮胎的国际代号是"R"，一般标记与胎侧`
                                },
                            ],
                            p_contents: [
                                {
                                    style: {},
                                    content: '子午线轮胎与普通斜线轮胎相比,'
                                },
                                {
                                    style: {},
                                    content: '弹性大，耐磨性好，滚动阻力小，附着性能好，缓冲性能好，承载能力大，不易刺穿；'
                                },
                                {
                                    style: {},
                                    content: '但缺点是胎侧易裂口，由于侧向变形大，导致汽车侧向稳定性稍差，制造技术要求高，成本高'
                                }
                            ],
                        },
                        {
                            title: [
                                {
                                    style: {},
                                    content: '斜交轮胎'
                                }
                            ],
                            smallTitle: [
                                {
                                    style: {},
                                    content: '斜交轮胎与子午线轮胎帘线层分布形式不同，帘线按斜线交叉排列'
                                }
                            ],
                            p_contents: [
                                {
                                    style: {},
                                    content: `由于帘布层的斜交排列，斜交轮胎的胎面和胎侧的强度大，承载能力强，
                                    但斜交轮胎的胎侧刚度较大，舒适性差，由于高速时帘布层间移动与磨擦大，并不适合高速行驶`
                                }
                            ],
                        },
                    ],
                    imgs:
                    {
                        // 图片路径
                        img: './assets/images/43.png',
                        // 图片顶部文字以及样式
                        top: {
                            style: '',
                            content: ''
                        },
                        // 图片底部文字以及样式
                        bottom: {
                            style: {
                            },
                            content: ''
                        }
                    },
                }
            },
            {
                // 上文字  下图
                template: 'fjz_hc_mi',
                content: {
                    bgImg: './assets/images/Rectangle16.png',
                    head: {
                        title: '轮胎侧壁信息-宝骏730',
                        p_contents: {
                            p_content: [
                            ],
                        },
                    },
                    imgs:
                    {
                        animationGroups: [
                            // 195/55R16 91H 文字 动画
                            {
                                animation: [
                                    {
                                        endStyle: {
                                            opacity: '1',
                                        },
                                        startStyle: {
                                            position: 'absolute',
                                            height: '25px',
                                            width: '250px',
                                            'font-size': '16px',
                                            'text-indent': '20px',
                                            color: 'white',
                                            background: '#0070b8',
                                            'line-height': '25px',
                                            left: '641px',
                                            top: '333px',
                                            'text-align': 'left',
                                        },
                                        time: 1000,
                                        id: 'text_1_1',
                                        content: '195/55R16 91H',
                                        orderIndex: 2,
                                        type: 'fixed'
                                    },
                                ],
                            },
                            // 195 文字 动画
                            {
                                animation: [
                                    {
                                        startStyle: {
                                            position: 'absolute',
                                            height: '30px',
                                            width: '64px',
                                            'font-size': '24px',
                                            color: '#5aa3e8',
                                            'font-weight': 'bold',
                                            left: '670px',
                                            top: '189px',
                                            transform: 'rotate(10deg)',
                                            '-ms-transform': 'rotate(10deg)',
                                            opacity: '0',
                                        },
                                        time: 1000,
                                        endStyle: {
                                            opacity: '1',
                                        },
                                        id: 'text_2_1',
                                        content: '195/',
                                        orderIndex: 1,
                                        type: 'fixed'
                                    },
                                    {
                                        endStyle: {
                                            opacity: '1',
                                        },
                                        time: 2000,
                                        startStyle: {
                                            position: 'absolute',
                                            height: '25px',
                                            width: '250px',
                                            'font-size': '16px',
                                            'text-indent': '20px',
                                            color: 'white',
                                            background: '#0070b8',
                                            'line-height': '25px',
                                            left: '641px',
                                            top: '361px',
                                            'text-align': 'left',
                                            opacity: '0',
                                        },
                                        id: 'text_2_2',
                                        content: '195-轮胎宽度（mm）',
                                        orderIndex: 1,
                                        type: 'fixed'
                                    },
                                ],
                            },
                            // 55 文字 动画
                            {
                                animation: [
                                    {
                                        endStyle: {
                                            opacity: '1',
                                        },
                                        time: 1000,
                                        startStyle: {
                                            position: 'absolute',
                                            height: '30px',
                                            width: '30px',
                                            'font-size': '24px',
                                            'color': '#5aa3e8',
                                            'font-weight': 'bold',
                                            left: '731px',
                                            top: '200px',
                                            transform: 'rotate(17deg)',
                                            '-ms-transform': 'rotate(17deg)',
                                            opacity: '0',
                                        },
                                        id: 'text_3_1',
                                        content: '55',
                                        orderIndex: 1,
                                        type: 'fixed'
                                    },
                                    {
                                        endStyle: {
                                            opacity: '1',
                                        },
                                        time: 2000,
                                        startStyle: {
                                            position: 'absolute',
                                            height: '25px',
                                            width: '250px',
                                            'font-size': '16px',
                                            'text-indent': '20px',
                                            color: 'white',
                                            background: '#0070b8',
                                            'line-height': '25px',
                                            left: '641px',
                                            top: '389px',
                                            'text-align': 'left',
                                            opacity: '0',
                                        },
                                        id: 'text_3_2',
                                        content: '55-高宽比（%）',
                                        orderIndex: 1,
                                        type: 'fixed'
                                    },
                                ],
                            },
                            // R 文字 动画
                            {
                                animation: [
                                    {
                                        endStyle: {
                                            opacity: '1',
                                        },
                                        time: 1000,
                                        startStyle: {
                                            position: 'absolute',
                                            height: '30px',
                                            width: '18px',
                                            'font-size': '24px',
                                            'color': '#5aa3e8',
                                            'font-weight': 'bold',
                                            left: '768px',
                                            top: '210px',
                                            transform: 'rotate(22deg)',
                                            '-ms-transform': 'rotate(22deg)',
                                            opacity: '0',
                                        },
                                        id: 'text_4_1',
                                        content: 'R',
                                        orderIndex: 2,
                                        type: 'fixed'
                                    },
                                    {
                                        endStyle: {
                                            opacity: '1',
                                        },
                                        time: 2000,
                                        startStyle: {
                                            position: 'absolute',
                                            height: '25px',
                                            width: '250px',
                                            'font-size': '16px',
                                            'text-indent': '20px',
                                            color: 'white',
                                            background: '#0070b8',
                                            'line-height': '25px',
                                            left: '641px',
                                            top: '417px',
                                            'text-align': 'left',
                                            opacity: '0',
                                        },
                                        id: 'text_4_2',
                                        content: 'R-子午线轮胎',
                                        orderIndex: 2,
                                        type: 'fixed'
                                    },
                                ],
                            },
                            // 16 文字 动画
                            {
                                animation: [
                                    {
                                        endStyle: {
                                            opacity: '1',
                                        },
                                        time: 1000,
                                        startStyle: {
                                            position: 'absolute',
                                            height: '30px',
                                            width: '30px',
                                            'font-size': '24px',
                                            'color': '#5aa3e8',
                                            'font-weight': 'bold',
                                            left: '785px',
                                            top: '220px',
                                            transform: 'rotate(23deg)',
                                            '-ms-transform': 'rotate(23deg)',
                                            opacity: '0',
                                        },
                                        id: 'text_5_1',
                                        content: '16',
                                        orderIndex: 2,
                                        type: 'fixed'
                                    },
                                    {
                                        endStyle: {
                                            opacity: '1',
                                        },
                                        time: 2000,
                                        startStyle: {
                                            position: 'absolute',
                                            height: '25px',
                                            width: '250px',
                                            'font-size': '16px',
                                            'text-indent': '20px',
                                            color: 'white',
                                            background: '#0070b8',
                                            'line-height': '25px',
                                            left: '641px',
                                            top: '445px',
                                            'text-align': 'left',
                                            opacity: '0',
                                        },
                                        id: 'text_5_2',
                                        content: '16-轮辋直径（英寸）',
                                        orderIndex: 2,
                                        type: 'fixed'
                                    },
                                ],
                            },
                            // 91 文字 动画
                            {
                                animation: [
                                    {
                                        endStyle: {
                                            opacity: '1',
                                        },
                                        startStyle: {
                                            position: 'absolute',
                                            height: '30px',
                                            width: '30px',
                                            'font-size': '24px',
                                            'color': '#5aa3e8',
                                            'font-weight': 'bold',
                                            left: '820px',
                                            top: '236px',
                                            transform: 'rotate(29deg)',
                                            '-ms-transform': 'rotate(29deg)',
                                            opacity: '0',
                                        },
                                        time: 1000,
                                        id: 'text_6_1',
                                        content: '91',
                                        orderIndex: 2,
                                        type: 'fixed'
                                    },
                                    {
                                        endStyle: {
                                            opacity: '1',
                                        },
                                        time: 2000,
                                        startStyle: {
                                            position: 'absolute',
                                            height: '25px',
                                            width: '250px',
                                            'font-size': '16px',
                                            'text-indent': '20px',
                                            color: 'white',
                                            background: '#0070b8',
                                            'line-height': '25px',
                                            left: '641px',
                                            top: '473px',
                                            'text-align': 'left',
                                            opacity: '0',
                                        },
                                        id: 'text_6_2',
                                        content: '91-轮胎最大负荷代码',
                                        orderIndex: 2,
                                        type: 'fixed'
                                    },
                                ],
                            },
                            // H 文字  动画
                            {
                                animation: [
                                    {
                                        endStyle: {
                                            opacity: '1',
                                        },
                                        time: 1000,
                                        startStyle: {
                                            position: 'absolute',
                                            height: '30px',
                                            width: '20px',
                                            'font-size': '24px',
                                            'color': '#5aa3e8',
                                            'font-weight': 'bold',
                                            left: '850px',
                                            top: '250px',
                                            transform: 'rotate(32deg)',
                                            '-ms-transform': 'rotate(32deg)',
                                            opacity: '0',
                                        },
                                        id: 'text_7_1',
                                        content: 'H',
                                        orderIndex: 2,
                                        type: 'fixed'
                                    },
                                    {
                                        endStyle: {
                                            opacity: '1',
                                        },
                                        time: 2000,
                                        startStyle: {
                                            position: 'absolute',
                                            height: '25px',
                                            width: '250px',
                                            'font-size': '16px',
                                            'text-indent': '20px',
                                            color: 'white',
                                            background: '#0070b8',
                                            'line-height': '25px',
                                            left: '641px',
                                            top: '501px',
                                            'text-align': 'left',
                                            opacity: '0',
                                        },
                                        id: 'text_7_2',
                                        content: 'H-最高车速代码',
                                        orderIndex: 2,
                                        type: 'fixed'
                                    },
                                ],
                            },
                        ],
                        img: '',
                        imgStyle: {}
                    },
                }
            },
            {
                // 包含多个详细内容的页面
                template: 'multiple',
                img: './assets/images/44.png',
                title: '轮胎侧壁信息-宝骏730',
                arrows: [
                    {
                        style: {
                            'height': '50px',
                            'border': '1px solid rgb(25, 140, 175)',
                            'position': 'absolute',
                            'left': '629px',
                            'top': '246px',
                            'transform': 'rotate(48deg)',
                            '-ms-transform': 'rotate(48deg)',
                        }
                    },
                    {
                        style: {
                            'height': '40px',
                            'border': '1px solid rgb(25, 140, 175)',
                            'position': 'absolute',
                            'left': '625px',
                            'top': '320px',
                            'transform': 'rotate(43deg)',
                            '-ms-transform': 'rotate(43deg)',
                        }
                    }
                ],
                content: [
                    {
                        point: '',
                        position: {
                            left: '652',
                            top: '251',
                        },
                        content: {
                            // 上2图,下文字
                            type: 6,
                            img1: './assets/images/45.png',
                        },
                    },
                    {
                        point: '',
                        position: {
                            left: '607',
                            top: '361',

                        },
                        content: {
                            // 双图,无文字
                            type: 6,
                            img1: './assets/images/46.png',
                        },
                    },
                ],
            },
        ]
    },
    {
        chapter: '车轮与平衡',
        isChapter: true,
        logo: './assets/images/logo_5ling.png',
        pages:[
            {
                // 上文字  中图片  下文字
                template: 'fjz_hc_mis_bc',
                content: {
                    head: {
                        style: {
                            'height': '40px'
                        },
                        title: '车轮平衡',
                        p_contents: {
                            p_content: [
                            ]
                        },
                    },
                    imgs: [
                        {
                            img: './assets/images/47-1.png',
                            top: {
                                style: {
                                    'padding-bottom': '20px'
                                },
                                content: '1. 平衡的车轮与轮胎总成，悬架正常运动'
                            },
                            bottom: { style: {}, content: '' }
                        },
                        {
                            img: './assets/images/47-2.png',
                            top: {
                                style: {
                                    'text-align': 'right',
                                    'padding-bottom': '20px'
                                },
                                content: '2.失衡的车轮与轮胎总成，产生不正常的震动'
                            },
                            bottom: { style: {}, content: '' }
                        },
                    ],
                    p_contents: {
                        p_content: [
                            {
                                style: { 'font-size': '14px', 'color': '#000' },
                                content: '车轮平衡:'
                            },
                            {
                                style: {},
                                content: `一个轮胎看上去可能很圆，但在重量、侧壁刚度和圆度上总是有一些细小的差别；
                                车轮不平衡有静不平衡与动不平衡之分
                                ，静不平衡使轮胎上下跳动，动不平衡使轮胎左右摆动`
                            }
                        ],
                        p_content1: [
                            {
                                style: { 'padding-top': '10px', 'display': 'block' },
                                content: `车轮跳动/摆动可以造成轮胎磨损及汽车操纵性不良；
                                为了正确进行车轮平衡，要使用专业的平衡设备，
                                在车轮的上下与两侧平面放置铅配重的操作，进行轮胎平衡工作时，
                                要注意清除干扰因素，如轮胎表面有石子，轮胎内部充气进入的水等等`
                            }
                        ]

                    }
                }
            },
            {
                // 上文字  中图片  下文字
                template: 'fjz_hc_mis_bsc',
                content: {
                    head: {
                        title: '轮胎磨损标记',
                        style: {
                        },
                        p_contents: {
                        },
                    },
                    imgStyle: { 'max-width': '400px' },
                    imgs: [
                        {
                            img: './assets/images/48.png',
                            top: {
                                style: {
                                },
                                content: ''
                            },
                            bottom: { style: {}, content: '' }
                        }
                    ],
                    p_contents: {
                        p_content: [

                            {
                                style: {},
                                content: '轮胎磨耗标记：指示胎面已经磨损到必须更换，否则抓地性能将下降，尤其是湿滑路面'
                            }
                        ]

                    }
                }
            },
        ]
    },
    {
        chapter: '轮胎主要故障模式及检修办法',
        isChapter: true,
        logo: './assets/images/logo_5ling.png',
        pages:[
            {
                // 上文字  下多图
                template: 'fjz-hc-mis',
                content: {
                    head: {
                        title: '轮胎主要故障模式',
                        p_contents: {
                            p_content: [
                                {
                                    style: {},
                                    content: '其主要的故障有：胎侧帘线断裂、胎侧割伤 、异常磨损及鼓包，其中又以'
                                },
                                {
                                    style: { 'font-weight': 'bold' },
                                    content: '异常磨损'
                                },
                                {
                                    style: {},
                                    content: '及'
                                },
                                {
                                    style: { 'font-weight': 'bold' },
                                    content: '鼓包'
                                },
                                {
                                    style: {},
                                    content: '发生频度较高，本课程主要介绍这两种故障'
                                },
                            ],
                            p_content1: [
                                {
                                    style: {
                                        'font-size': '14px',
                                    },
                                    content: '一、异常磨损：汽车行驶一段时间后，如果发现轮胎出现磨损不均等现象，如下图所示：'
                                },
                            ],
                        },
                    },
                    imgs: [
                        {
                            img: './assets/images/49-2.png',
                            top: {},
                            bottom: {
                                style: {
                                }, content: '轮胎左右磨损不一致'
                            }
                        },
                        {
                            img: './assets/images/49-1.png',
                            top: {},
                            bottom: {
                                style: {
                                },
                                content: '轮胎局部磨损过快'
                            }
                        }
                    ],
                }
            },
            {
                // 上文字  下多图
                template: 'fjz-hc-mis',
                content: {
                    head: {
                        title: '轮胎异常磨损原因',
                        p_contents: {
                            p_content: [
                                {
                                    style: { 'display': 'block' },
                                    content: '轮胎出现异常磨损及鼓包，主要有两方面的原因：使用不当及轮胎质量问题'
                                },
                                {
                                    style: { 'display': 'block' },
                                    content: '一、异常磨损：轮胎出现异常磨损，大多为驾驶不正确和定位调整不当造成'
                                },
                                {
                                    style: { 'display': 'block' },
                                    content: '1、轮胎气压过高：轮胎气压过高会造成轮胎中部异常磨损，如下图所示：'
                                },
                            ],
                        },
                    },
                    imgs: [
                        {
                            img: './assets/images/50-1.png',
                            top: {},
                            bottom: {
                                style: {
                                }, content: '轮胎气压过高'
                            }
                        },
                        {
                            img: './assets/images/50-2.png',
                            top: {},
                            bottom: {
                                style: {
                                },
                                content: '轮胎中部异常磨'
                            }
                        }
                    ],
                }
            },
            {
                // 上文字  下多图
                template: 'fjz-hc-mis',
                content: {
                    head: {
                        title: '轮胎异常磨损原因',
                        p_contents: {
                            p_content: [
                                {
                                    style: { 'display': 'block' },
                                    content: '2、轮胎气压过低：轮胎气压过低，会造成轮胎两侧早期磨损，如下图所示'
                                }
                            ],
                        },
                    },
                    imgs: [
                        {
                            img: './assets/images/51-1.png',
                            top: {},
                            bottom: {
                                style: {
                                }, content: '轮胎气压过低'
                            }
                        },
                        {
                            img: './assets/images/51-2.png',
                            top: {},
                            bottom: {
                                style: {
                                },
                                content: '轮胎两侧过早磨损'
                            }
                        }
                    ],
                }
            },
            {
                // 上文字  中图片  下文字
                template: 'fjz_hc_mis_bc',
                content: {
                    head: {
                        title: '轮胎异常磨损原因',
                        p_contents: {
                            p_content: [
                                {
                                    style: {
                                    },
                                    content: `3、前轮定位失准：前轮定位的失准，也会造成轮胎的异常磨损，如下图`
                                },
                            ]
                        },
                    },
                    imgs: [
                        {
                            img: './assets/images/52-1.png',
                            top: {},
                            bottom: {
                                style: {
                                }, content: '外倾角过大'
                            }
                        },
                        {
                            img: './assets/images/52-2.png',
                            top: {},
                            bottom: {
                                style: {
                                }, content: '轮胎外部早期磨损'
                            }
                        },

                    ],
                    p_contents: {
                        p_content: [
                            {
                                style: {
                                },
                                content: `4、驾驶不当：驾驶员一些不正当的操纵及使用汽车方式，
                                如急加速、紧急制动、急转向、超载等等，都会造成对轮胎的损坏；另外，
                                制动平衡差、刹车卡滞、钢圈变形也会造成轮胎的磨损`
                            },
                        ],
                    }
                }
            },
            {
                // 上文字  下多图
                template: 'fjz-hc-mis',
                content: {
                    head: {
                        title: '轮胎主要故障模式',
                        p_contents: {
                            p_content: [
                                {
                                    style: {
                                        'display': 'block',
                                    },
                                    content: '二、轮胎鼓包：轮胎鼓包主要为胎侧部位鼓包及胎肩部位鼓包，如下图所示：'
                                }
                            ],
                        },
                    },
                    imgs: [
                        {
                            img: './assets/images/53-1.png',
                            top: {},
                            bottom: {
                                style: {
                                }, content: '胎侧位鼓包'
                            }
                        },
                        {
                            img: './assets/images/53-2.png',
                            top: {},
                            bottom: {
                                style: {
                                },
                                content: '胎肩部位鼓包'
                            }
                        }
                    ],
                }
            },
            {
                // 上文字  中图片  下文字
                template: 'fjz_hc_mis_bc',
                content: {
                    head: {
                        title: '轮胎鼓包原因',
                        p_contents: {
                            p_content: [
                                {
                                    style: {
                                    },
                                    content: `1、车辆行驶过程中,轮胎胎肩或接近胎边部位瞬间强烈撞击外部异物,
                                    导致轮胎和轮辋和外物之间产生严重的挤压,该处部位帘线过度拉伸，导致断裂，
                                    在内部气压的作用下,从断线处形成胎侧部位鼓包现象.如下图`
                                },
                            ]
                        },
                    },
                    imgs: [
                        {
                            img: './assets/images/54-1.png',
                            top: {},
                            bottom: {
                                style: {
                                }, content: '轮胎与障碍物发生严重挤压'
                            }
                        },
                        {
                            img: './assets/images/54-2.png',
                            top: {},
                            bottom: {
                                style: {
                                },
                                content: '轮胎侧壁内部帘层断裂'
                            }
                        },
                    ],
                    p_contents: {
                        p_content: [
                            {
                                style: {
                                },
                                content: `2、质量原因：轮胎发生鼓包，也有可能是轮胎自身质量问题引起`
                            },
                        ],
                    }
                }
            },
            {
                // 上文字  中图片  下文字
                template: 'fjz_hc_mis_bc',
                content: {
                    head: {
                        style: { 'height': '60px' },
                        title: '轮胎鼓包原因-检测方法',
                        p_contents: {
                            p_content: [
                                {
                                    style: {
                                    },
                                    content: `如下图，当发现轮胎内部帘线断裂时，应判断是否为质量原因造成故障`
                                },
                            ]
                        },
                    },
                    imgStyle: { 'max-height': '247px' },
                    imgs: [
                        {
                            img: './assets/images/55-1.png',
                            top: {},
                            bottom: {
                                style: {
                                }, content: '轮胎侧壁内部帘层断裂'
                            }
                        },
                    ],
                    p_contents: {
                        p_content: [
                            {
                                style: {
                                    'font-size': '14px',
                                    'display': 'block'
                                },
                                content: '检查步骤:'
                            },
                            {
                                style: {
                                    'font-size': '14px',
                                },
                                content: '1、在轮胎充气状态下,用记号笔在'
                            },
                            {
                                style: {
                                },
                                content: '鼓包处作记号'
                            },
                            {
                                style: {
                                    'font-size': '14px',
                                },
                                content: '确定鼓包范围并给轮胎放气， 轮胎放气后,未拆装之前, 在对应鼓包位置上轮辋边缘上是否有'
                            },
                            {
                                style: {
                                    'font-size': '14px',
                                    'font-weight': 'bold',
                                    'color':'#f00'
                                },
                                content: '黑色橡胶残留'
                            },
                            {
                                style: {
                                    'font-size': '14px',
                                },
                                content: '在上面, 判断是否受到过冲击'
                            },
                        ],
                        p_content1: [
                            {
                                style: {
                                    'font-size': '14px',
                                },
                                content: '2、检查'
                            },
                            {
                                style: {
                                    'font-size': '14px',
                                    'font-weight': 'bold',
                                    'color':'#f00'
                                },
                                content: '轮胎轮辋线部位'
                            },
                            {
                                style: {
                                    'font-size': '14px',
                                },
                                content: '有无伤痕'
                            },
                        ],
                        p_content2: [
                            {
                                style: {
                                    'font-size': '14px',
                                },
                                content: '3、跟轮辋分离后, 检查'
                            },
                            {
                                style: {
                                    'font-size': '14px',
                                    'font-weight': 'bold',
                                    'color':'#f00'
                                },
                                content: '轮胎气密层部位有无被轮辋和外物挤压后的痕迹'
                            },
                            {
                                style: {
                                    'font-size': '14px',
                                },
                                content: '或夹伤的痕迹'
                            },
                        ]
                    }
                }
            },
            {
                // 上文字  下多图
                template: 'fjz-hc-mis',
                content: {
                    head: {
                        title: '轮胎故障处理方式',
                        p_contents: {
                            p_content: [
                                {
                                    style: {
                                    },
                                    content: '轮胎是关系到安全的汽车部件，当发生故障时，应及时处理'
                                }
                            ],
                            p_content1: [
                                {
                                    style: {
                                        'display': 'block',
                                    },
                                    content: '一、异常磨损处理：',
                                },
                                {
                                    style: {
                                        'display': 'block',
                                    },
                                    content: '1. 检查胎压是否在正常，胎压不正常应调整胎压到正常胎压',
                                },
                                {
                                    style: {
                                        'display': 'block',
                                    },
                                    content: '2. 检查车轮定位，车轮定位不准的应重新做四轮定位',
                                },
                                {
                                    style: {
                                        'display': 'block',
                                    },
                                    content: '3. 当轮胎磨损不匀时，可进行轮胎换位处理',
                                }
                                ,
                                {
                                    style: {
                                        'display': 'block',
                                    },
                                    content: '4. 检查制动是否平衡差，刹车是否卡滞，如有故障，做出相应处理',
                                }
                                ,
                                {
                                    style: {
                                        'display': 'block',
                                    },
                                    content: '5. 如果轮胎异常磨损严重的，应更换轮胎',
                                }
                            ],
                            p_content2: [
                                {
                                    style: {
                                        'display': 'block',
                                    },
                                    content: '二、轮胎鼓包处理：',
                                },
                                {
                                    style: {
                                        'display': 'block',
                                    },
                                    content: '1. 轮胎出现鼓包时，应及时更换轮胎',
                                },
                                {
                                    style: {
                                        'display': 'block',
                                    },
                                    content: '2. 同时检查轮辋是否因为外力冲击产生裂痕，有严重损伤，必须更换',
                                },
                            ],
                        },
                    },
                }
            }
        ]
    },
    {
        chapter: '悬架分类&减震器&悬架异响分析',
        isChapter: true,
        logo: './assets/images/logo_5ling.png',
        pages:[
            {
                // 上文字  中图片  下文字
                template: 'fjz_hc_mis_bc',
                content: {
                    head: {
                        style: { 'height': '50px' },
                        title: '',
                        p_contents: {
                            p_content: [
                                {
                                    style: {
                                        'font-size': '20px',
                                        'font-weight': 'bold',
                                        'color': '#000',
                                    },
                                    content: '悬挂常见类型-'
                                },
                                {
                                    style: {
                                        'font-size': '20px',
                                        'font-weight': 'bold',
                                    },
                                    content: '非独立式悬挂'
                                },
                            ]
                        },
                    },
                    imgs: [
                        {
                            img: './assets/images/56.png',
                            top: {},
                            bottom: {
                                style: {
                                },
                                content: ''
                            }
                        },
                        {
                            img: './assets/images/56-2.png',
                            top: {},
                            bottom: {
                                style: {
                                },
                                content: ''
                            }
                        },
                    ],
                    p_contents: {
                        p_content: [
                            {
                                style: {
                                    'font-size': '14px',
                                    'font-weight': 'bold',
                                    'color': '#000',
                                },
                                content: '结构：'
                            },
                            {
                                style: {
                                    'font-size': '14px',
                                },
                                content: '两侧车轮由一根整体式车架相连，车轮连同车桥一起通过弹性悬架悬挂在车架或车身的下面'
                            },
                        ],
                        p_content1: [
                            {
                                style: {
                                    'font-size': '14px',
                                    'font-weight': 'bold',
                                    'color': '#000',
                                },
                                content: '特点：'
                            },
                            {
                                style: {
                                },
                                content: `非独立悬架具有结构简单、成本低、强度高、保养容易、
                                行车中前轮定位变化小的优点，但由于其舒适性及操纵稳定性都较差，多用在货车和大客车上`
                            },
                        ],
                    }
                }
            },
            {
                // 上文字  中图片  下文字
                template: 'fjz_hc_mis_bc',
                content: {
                    head: {
                        style: { 'height': '50px' },
                        title: '',
                        p_contents: {
                            p_content: [
                                {
                                    style: {
                                        'font-size': '20px',
                                        'font-weight': 'bold',
                                        'color': '#000',

                                    },
                                    content: '悬挂常见类型-'
                                },
                                {
                                    style: {
                                        'font-size': '20px',
                                        'font-weight': 'bold',
                                    },
                                    content: '扭转梁式半独立悬挂'
                                },
                            ]
                        },
                    },
                    imgs: [
                        {
                            img: './assets/images/57-1.png',
                            top: {},
                            bottom: {
                                style: {
                                },
                                content: ''
                            }
                        },
                        {
                            img: './assets/images/57-2.png',
                            top: {},
                            bottom: {
                                style: {
                                },
                                content: ''
                            }
                        },

                    ],
                    p_contents: {
                        p_content: [
                            {
                                style: {
                                    'font-size': '14px',
                                    'font-weight': 'bold',
                                    'color': '#000',
                                },
                                content: '结构：'
                            },
                            {
                                style: {
                                    'font-size': '14px',
                                },
                                content: '通过一个扭力梁来平衡左右车轮的上下跳动，以减小车辆的摇晃，保持车辆的平稳'
                            },
                        ],
                        p_content1: [
                            {
                                style: {
                                    'font-size': '14x',
                                    'font-weight': 'bold',
                                    'color': '#000',
                                },
                                content: '特点：'
                            },
                            {
                                style: {
                                },
                                content: `由于其自身具有一定的扭转刚度，可以起到与横向稳定杆相同的作用
                                ，可增加车辆的侧倾刚度，提高车辆的侧倾稳定性`
                            },
                        ],
                    }
                }
            },
            {
                // 上文字  中图片  下文字
                template: 'fjz_hc_mis_bc',
                content: {
                    head: {
                        style: { 'height': '50px' },
                        title: '',
                        p_contents: {
                            p_content: [
                                {
                                    style: {
                                        'font-size': '20px',
                                        'font-weight': 'bold',
                                        'color': '#000',
                                    },
                                    content: '悬挂常见类型-'
                                },
                                {
                                    style: {
                                        'font-size': '20px',
                                        'font-weight': 'bold',
                                    },
                                    content: '麦弗逊式悬挂'
                                },
                            ]
                        },
                    },
                    imgs: [
                        {
                            img: './assets/images/58-2.png',
                            top: {},
                            bottom: {
                                style: {
                                },
                                content: ''
                            }
                        },
                        {
                            img: './assets/images/58-1.png',
                            top: {},
                            bottom: {
                                style: {
                                },
                                content: ''
                            }
                        },

                    ],
                    p_contents: {
                        p_content1: [
                            {
                                style: {
                                    'font-size': '14px',
                                    'font-weight': 'bold',
                                    'color': '#000',
                                    'padding-top': '20px',
                                },
                                content: '特点：'
                            },
                            {
                                style: {
                                    'padding-top': '20px',
                                },
                                content: `结构紧凑，车轮跳动时前轮定位参数变化小，有良好的操纵稳定性，
                                由于没有上横臂，给发动机及转向系统的布置带来方便；应用广泛，缺点是横向耐受冲击能力较差`
                            },
                        ],
                    }
                }
            },
            {
                // 左文字  右图片
                template: 'fjz_lc_ri',
                content: {
                    left: [
                        {
                            title: [
                                {
                                    style: {
                                    },
                                    content: '麦弗逊支柱'
                                }
                            ],
                            smallTitle: [
                            ],
                            p_contents: [
                                {
                                    style: {
                                        'display': 'block',
                                    },
                                    content: `麦弗逊支柱采用一个带有螺旋弹簧的管型减震器`
                                },
                                {
                                    style: {
                                        'display': 'block',
                                    },
                                    content: `有些型式的减震器是可更换的。有些需要换整个支柱。
                                    麦弗逊支柱与车体有两个连接点，是一种高效、紧凑的设计`
                                },
                                {
                                    style: {
                                        'display': 'block',
                                    },
                                    content: `采用麦弗逊支柱可以减少由一般悬架系统的螺旋弹簧或板簧加减震器与相应杆件所占的空间，
                                    省出机舱内的宝贵空间供作他用。麦弗逊支柱在很多不同型式的汽车上都有应用`
                                }
                            ],
                        }
                    ],
                    imgs: {
                        // 图片路径
                        img: './assets/images/59.png',
                        // 图片顶部文字以及样式
                        top: {
                            style: '',
                            content: ''
                        },
                        // 图片底部文字以及样式
                        bottom: {
                            style: {},
                            content: ''
                        }
                    },
                }
            },
            {
                // 上文字  中图片  下文字
                template: 'fjz_hc_mis_bc',
                content: {
                    head: {
                        style: { 'height': '50px' },
                        title: '',
                        p_contents: {
                            p_content: [
                                {
                                    style: {
                                        'font-size': '20px',
                                        'font-weight': 'bold',
                                        'color': '#000',
                                    },
                                    content: '悬挂常见类型-'
                                },
                                {
                                    style: {
                                        'font-size': '20px',
                                        'font-weight': 'bold',
                                    },
                                    content: '双横臂式独立悬挂'
                                },
                            ]
                        },
                    },
                    imgs: [
                        {
                            img: './assets/images/60-2.png',
                            top: {},
                            bottom: {
                                style: {
                                },
                                content: ''
                            }
                        },
                        {
                            img: './assets/images/60-1.png',
                            top: {},
                            bottom: {
                                style: {
                                },
                                content: ''
                            }
                        },

                    ],
                    p_contents: {
                        p_content: [
                            {
                                style: {
                                    'font-size': '14px',
                                    'font-weight': 'bold',
                                    'color': '#000',
                                    'padding-top': '20px',
                                },
                                content: '结构：'
                            },
                            {
                                style: {
                                    'font-size': '14px',
                                    'padding-top': '20px',
                                },
                                content: `有两根横臂的悬架系统`
                            },
                        ],

                        p_content1: [
                            {
                                style: {
                                    'font-size': '14px',
                                    'font-weight': 'bold',
                                    'color': '#000',
                                    'padding-top': '20px',
                                },
                                content: '特点：'
                            },
                            {
                                style: {
                                    'font-size': '14px',
                                    'padding-top': '20px',
                                },
                                content: `双横臂式独立悬架的减震器没有横向载荷，而且上端高度较低，
                                有利于降低车身高度，改进车身造型，因此，这种悬架具有很好的操纵稳定性和舒适性，
                                是比较高级的悬架；缺点是结构复杂，成本高，占用的空间较大等`
                            },
                        ],

                    }
                }
            },
            {
                // 左文字  右图片
                template: 'fjz_lc_ri',
                content: {
                    left: [
                        {
                            title: [
                                {
                                    style: {
                                        'color': '#000',
                                    },
                                    content: '减震器'
                                }
                            ],
                            smallTitle: [
                            ],
                            p_contents: [
                                {
                                    style: {
                                        'font-weight': 'bold',
                                    },
                                    content: `作用：`
                                },
                                {
                                    style: {
                                    },
                                    content: `阻滞或限制悬架系统的运动`
                                },
                                {
                                    style: {
                                        'display': 'block',
                                        'margin-top': '30px',
                                    },
                                    content: `由于悬架运动，减震器受到拉伸或压缩；减震器中的油液受迫通过活塞中的小孔，
                                    因此对弹簧振荡产生了阻尼作用`
                                },
                                {
                                    style: {
                                        'display': 'block',
                                    },
                                    content: `如果没有减震器，悬架系统在吸收一个冲击后会不断运动下去。
                                    装有减震器后，这种运动会很快衰减`
                                },
                                {
                                    style: {
                                        'display': 'block',
                                        'margin-bottom': '30px',
                                    },
                                    content: `减震器上端接在车身或底盘上，下端接在与车轮一起运动的悬架部件上。减震器与弹簧并联作用`
                                },
                                {
                                    style: {
                                        'display': 'block',
                                    },
                                    content: `有的减震器利用高压气体防止油液在快速运动中产生泡沫`
                                }
                            ],
                        }
                    ],
                    imgs: {
                        // 图片路径
                        img: './assets/images/61-1.png',
                        // 图片顶部文字以及样式
                        top: {
                            style: '',
                            content: ''
                        },
                        // 图片底部文字以及样式
                        bottom: {
                            style: {
                            },
                            content: ''
                        }
                    },
                }
            },
            {
                // 上文字  下多图
                template: 'fjz_hc_mi',
                content: {
                    head: {
                        style: { 'height': '85px' },
                        title: '悬挂异响判断 -区别是否是悬挂零件的异响',
                        p_contents: {
                            p_content: [
                                {
                                    content: `一般减振器的异响是由于减振器零件变形或损坏引起的，
                                    如减振器零件完好，则应检查悬挂零件是否存在异响
                                    比如前悬挂异响一般是由很多因素引起的，具体的故障模式和解决措施见下表：`
                                },
                            ],
                        },
                    },
                    imgs:
                    {
                        img: './assets/images/62.png',
                        // 控制图片最大高度  最大宽度 只针对于一张图片
                        imgStyle: {
                            'max-width': '824px',
                            'max-height': '370px'
                        },
                        top: {},
                        bottom: {
                            style: {
                            }, content: ''
                        }
                    }
                }
            },
        ]
    },
    {
        chapter: '结束',
        isChapter: false,
        pages: [
            {
                template: 'single',
                title: '所有内容已经学习完成，您可以开始课后测试',
                text: '请在[课后测试]页面完成本课程测试',
                img: './assets/images/profile_bg.png'
            }
        ]
    }
];
