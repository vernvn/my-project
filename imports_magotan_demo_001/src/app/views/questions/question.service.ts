import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

export interface Question {
    id: string;
    description: string;
    question: any[];
}


@Injectable()
export class QuestionService {
    question: Question[];
    depart: any;
    idx: number;
    isNext: boolean;
    constructor() {
        this.idx = 0;
        this.depart = {
            a1: false,
            a2: false,
            a3: false,
            a4: false
        };
        this.question = [
            {
                'id': 'xcj_01',
                'description': '1.客户不慎将一把车辆钥匙掉到地上摔坏了，您认为需要更换的部件有哪些？',
                'question': [
                    {
                        'answer': 'a4',
                        'isRight': false,
                        'option': [
                            {
                                'name': '其他车辆上正常ecu',
                                'id': 'a1',
                                'isRight': false,
                                'image': './assets/images/question/ecu.png'
                            },
                            {
                                'name': '其他车辆上正常使用的钥匙',
                                'id': 'a2',
                                'isRight': false,
                                'image': './assets/images/question/key.png'
                            },
                            {
                                'name': '锁止组件',
                                'id': 'a3',
                                'isRight': false,
                                'image': './assets/images/question/key_group.png'
                            },
                            {
                                'name': '一把全新的钥匙',
                                'id': 'a4',
                                'isRight': false,
                                'image': './assets/images/question/key.png'
                            },
                            {
                                'name': '两把全新的钥匙',
                                'id': 'a5',
                                'isRight': false,
                                'image': './assets/images/question/keys.png'
                            },
                            {
                                'name': '车辆ID',
                                'id': 'a6',
                                'isRight': false,
                                'image': './assets/images/question/car_id.png'
                            }
                        ]
                    }
                ]
            },
            {
                'id': 'xcj_02',
                'description': '2.客户不慎将车钥匙弄丢了一把，为考虑安全因素您认为需要更换的部件有哪些？',
                'question': [
                    {
                        'answer': 'a1,a2,a3,a4',
                        'isRight': false,
                        'option': [
                            {
                                'name': '新的或其他车辆ECU',
                                'id': 'a1',
                                'isRight': false,
                                'image': './assets/images/question/ecu.png'
                            },
                            {
                                'name': '新的舒适控制单元',
                                'id': 'a2',
                                'isRight': false,
                                'image': './assets/images/question/j393.png'
                            },
                            {
                                'name': '锁止组件',
                                'id': 'a3',
                                'isRight': false,
                                'image': './assets/images/question/key_group.png'
                            },
                            {
                                'name': '新的电子转向柱锁',
                                'id': 'a4',
                                'isRight': false,
                                'image': './assets/images/question/j764.png'
                            },
                            {
                                'name': '两把全新的钥匙',
                                'id': 'a5',
                                'isRight': false,
                                'image': './assets/images/question/keys.png'
                            },
                            {
                                'name': '一把原车钥匙一把新钥匙',
                                'id': 'a6',
                                'isRight': false,
                                'image': './assets/images/question/keys.png'
                            }
                        ]
                    }
                ]
            },
            {
                'id': 'xcj_03',
                'description': '3.介于点火钥匙和启动机之间，下列哪些部件会造成发动机不能启动？',
                'question': [
                    {
                        'answer': 'a1,a2,a3,a4,a5,a6',
                        'isRight': false,
                        'option': [
                            {
                                'name': 'ECU',
                                'id': 'a1',
                                'isRight': false,
                                'image': './assets/images/question/ecu.png'
                            },
                            {
                                'name': '舒适控制单元',
                                'id': 'a2',
                                'isRight': false,
                                'image': './assets/images/question/j393.png'
                            },
                            {
                                'name': '转向柱控制单元',
                                'id': 'a3',
                                'isRight': false,
                                'image': './assets/images/question/zxz.png'
                            },
                            {
                                'name': '电子转向柱锁',
                                'id': 'a4',
                                'isRight': false,
                                'image': './assets/images/question/j764.png'
                            },
                            {
                                'name': '点火开关',
                                'id': 'a5',
                                'isRight': false,
                                'image': './assets/images/question/dhkg.png'
                            },
                            {
                                'name': '网关',
                                'id': 'a6',
                                'isRight': false,
                                'image': './assets/images/question/new_ecu.png'
                            }
                        ]
                    }
                ]
            },
            {
                'id': 'xcj_04',
                'description': '4.下列哪些部件是锁止组件更换范围之内的?',
                'question': [
                    {
                        'answer': 'a1,a2,a3,a4',
                        'isRight': false,
                        'option': [
                            {
                                'name': 'ECU',
                                'id': 'a1',
                                'isRight': false,
                                'image': './assets/images/question/ecu.png'
                            },
                            {
                                'name': '舒适控制单元',
                                'id': 'a2',
                                'isRight': false,
                                'image': './assets/images/question/j393.png'
                            },
                            {
                                'name': '两把全新的钥匙',
                                'id': 'a3',
                                'isRight': false,
                                'image': './assets/images/question/keys.png'
                            },
                            {
                                'name': '电子转向柱锁',
                                'id': 'a4',
                                'isRight': false,
                                'image': './assets/images/question/j764.png'
                            },
                            {
                                'name': '点火开关',
                                'id': 'a5',
                                'isRight': false,
                                'image': './assets/images/question/dhkg.png'
                            },
                            {
                                'name': '网关',
                                'id': 'a6',
                                'isRight': false,
                                'image': './assets/images/question/new_ecu.png'
                            }
                        ]
                    }
                ]
            },
            {
                'id': 'xcj_05',
                'description': '5.新的车辆ID不包括下列哪些部件？',
                'question': [
                    {
                        'answer': 'a5,a6',
                        'isRight': false,
                        'option': [
                            {
                                'name': '其他车辆上正常ECU',
                                'id': 'a1',
                                'isRight': false,
                                'image': './assets/images/question/ecu.png'
                            },
                            {
                                'name': '舒适控制单元',
                                'id': 'a2',
                                'isRight': false,
                                'image': './assets/images/question/j393.png'
                            },
                            {
                                'name': '两把全新的钥匙',
                                'id': 'a3',
                                'isRight': false,
                                'image': './assets/images/question/keys.png'
                            },
                            {
                                'name': '电子转向柱锁',
                                'id': 'a4',
                                'isRight': false,
                                'image': './assets/images/question/j764.png'
                            },
                            {
                                'name': '点火开关',
                                'id': 'a5',
                                'isRight': false,
                                'image': './assets/images/question/dhkg.png'
                            },
                            {
                                'name': '网关',
                                'id': 'a6',
                                'isRight': false,
                                'image': './assets/images/question/new_ecu.png'
                            }
                        ]
                    }
                ]
            },
            {
                'id': 'xcj_06',
                'description': '6.在更换舒适控制单元的同时，还需要更换下列哪些部件？',
                'question': [
                    {
                        'answer': 'a4',
                        'isRight': false,
                        'option': [
                            {
                                'name': '其他车辆上正常ECU',
                                'id': 'a1',
                                'isRight': false,
                                'image': './assets/images/question/ecu.png'
                            },
                            {
                                'name': '已使用过的电子转向柱锁',
                                'id': 'a2',
                                'isRight': false,
                                'image': './assets/images/question/j764.png'
                            },
                            {
                                'name': '两把全新的钥匙',
                                'id': 'a3',
                                'isRight': false,
                                'image': './assets/images/question/keys.png'
                            },
                            {
                                'name': '新的电子转向柱锁',
                                'id': 'a4',
                                'isRight': false,
                                'image': './assets/images/question/j764.png'
                            },
                            {
                                'name': '锁止组件',
                                'id': 'a5',
                                'isRight': false,
                                'image': './assets/images/question/key_group.png'
                            },
                            {
                                'name': '网关',
                                'id': 'a6',
                                'isRight': false,
                                'image': './assets/images/question/new_ecu.png'
                            }
                        ]
                    }
                ]
            },
            {
                'id': 'xcj_07',
                'description': '7.下列哪些部件不可以互相调换使用？',
                'question': [
                    {
                        'answer': 'a2,a3,a4,a6',
                        'isRight': false,
                        'option': [
                            {
                                'name': 'ECU',
                                'id': 'a1',
                                'isRight': false,
                                'image': './assets/images/question/ecu.png'
                            },
                            {
                                'name': '新的电子转向柱锁',
                                'id': 'a2',
                                'isRight': false,
                                'image': './assets/images/question/j764.png'
                            },
                            {
                                'name': '点火钥匙',
                                'id': 'a3',
                                'isRight': false,
                                'image': './assets/images/question/key.png'
                            },
                            {
                                'name': '正常使用的电子转向柱锁',
                                'id': 'a4',
                                'isRight': false,
                                'image': './assets/images/question/j764.png'
                            },
                            {
                                'name': '点火开关',
                                'id': 'a5',
                                'isRight': false,
                                'image': './assets/images/question/dhkg.png'
                            },
                            {
                                'name': '舒适控制单元',
                                'id': 'a6',
                                'isRight': false,
                                'image': './assets/images/question/j393.png'
                            }
                        ]
                    }
                ]
            },
            {
                'id': 'xcj_08',
                'description': '8.ECU、舒适控制单元及电子转向柱锁三个部件更换的同时还需要更换哪些部件？',
                'question': [
                    {
                        'answer': 'a4',
                        'isRight': false,
                        'option': [
                            {
                                'name': '转向柱控制单元',
                                'id': 'a1',
                                'isRight': false,
                                'image': './assets/images/question/zxz.png'
                            },
                            {
                                'name': '一把原车钥匙一把新钥匙',
                                'id': 'a2',
                                'isRight': false,
                                'image': './assets/images/question/key.png'
                            },
                            {
                                'name': '点火钥匙',
                                'id': 'a3',
                                'isRight': false,
                                'image': './assets/images/question/key.png'
                            },
                            {
                                'name': '锁止组件',
                                'id': 'a4',
                                'isRight': false,
                                'image': './assets/images/question/key_group.png'
                            },
                            {
                                'name': '点火开关',
                                'id': 'a5',
                                'isRight': false,
                                'image': './assets/images/question/dhkg.png'
                            },
                            {
                                'name': '网关',
                                'id': 'a6',
                                'isRight': false,
                                'image': './assets/images/question/new_ecu.png'
                            }
                        ]
                    }
                ]
            },
            {
                'id': 'xcj_09',
                'description': '9.客户打算增加两把点火钥匙，在匹配流程中下列哪些部件在匹配范围之内的？',
                'question': [
                    {
                        'answer': 'a4',
                        'isRight': false,
                        'option': [
                            {
                                'name': '原车ECU',
                                'id': 'a1',
                                'isRight': false,
                                'image': './assets/images/question/ecu.png'
                            },
                            {
                                'name': '原车舒适控制单元',
                                'id': 'a2',
                                'isRight': false,
                                'image': './assets/images/question/j393.png'
                            },
                            {
                                'name': '一把点火钥匙',
                                'id': 'a3',
                                'isRight': false,
                                'image': './assets/images/question/key.png'
                            },
                            {
                                'name': '锁止组件',
                                'id': 'a4',
                                'isRight': false,
                                'image': './assets/images/question/key_group.png'
                            },
                            {
                                'name': '点火开关',
                                'id': 'a5',
                                'isRight': false,
                                'image': './assets/images/question/dhkg.png'
                            },
                            {
                                'name': '所有原车钥匙',
                                'id': 'a6',
                                'isRight': false,
                                'image': './assets/images/question/keys.png'
                            }
                        ]
                    }
                ]
            },
            {
                'id': 'xcj_010',
                'description': '10.针对于新的车辆ID，请排出下列部件的匹配顺序（拖拽题）？',
                'question': [
                    {
                        'answer': 'a4',
                        'isRight': false,
                        'option': [
                            {
                                'name': '锁止组件',
                                'id': 'a1',
                                'isRight': false,
                                'image': './assets/images/question/key_group.png'
                            },
                            {
                                'name': 'ECU',
                                'id': 'a2',
                                'isRight': false,
                                'image': './assets/images/question/ecu.png'
                            },
                            {
                                'name': '舒适控制单元',
                                'id': 'a3',
                                'isRight': false,
                                'image': './assets/images/question/j393.png'
                            },
                            {
                                'name': '电子转向柱锁',
                                'id': 'a4',
                                'isRight': false,
                                'image': './assets/images/question/j764.png'
                            }

                        ]
                    }
                ]
            }
        ];
    }




}
