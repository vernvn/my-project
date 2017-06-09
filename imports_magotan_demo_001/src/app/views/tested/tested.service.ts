import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

export interface Tested {
    id: string;
    description: string;
    answer: string;
    rate: number;
    isRight: boolean;
    option: any[];
}

@Injectable()
export class TestedService {
    tested: Tested[];
    idx: number;
    isResult: boolean;
    isTest: boolean;
    constructor() {
        this.idx = 0;
        this.isResult = false;
        this.tested = [
            {
                'id': '1',
                'description': '1.迈腾B7的防盗系统组成部件包括（ ）。',
                'answer': 'a3',
                'rate': 10,
                'isRight': false,
                'option': [
                    {
                        'id': 'a1',
                        'isRight': false,
                        'description': 'A. J519，J623，J764，E415'
                    },
                    {
                        'id': 'a2',
                        'isRight': false,
                        'description': 'B. 钥匙，J623，J519，J393'
                    },
                    {
                        'id': 'a3',
                        'isRight': false,
                        'description': 'C.J393，J623，J764，钥匙'
                    },
                    {
                        'id': 'a4',
                        'isRight': false,
                        'description': 'D. J533，E415，J764，J623'
                    }
                ]
            },
            {
                'id': '2',
                'description': '2.更换第四代防盗系统部件时，车辆上至少要保留（）个原车部件。',
                'answer': 'a2',
                'rate': 10,
                'isRight': false,
                'option': [
                    {
                        'id': 'a1',
                        'isRight': false,
                        'description': 'A. 1'
                    },
                    {
                        'id': 'a2',
                        'isRight': false,
                        'description': 'B. 2'
                    },
                    {
                        'id': 'a3',
                        'isRight': false,
                        'description': 'C.3'
                    },
                    {
                        'id': 'a4',
                        'isRight': false,
                        'description': 'D. 一个也不需要'
                    }
                ]
            },
            {
                'id': '3',
                'description': '3.发动机控制单元匹配过程中，在最后一次点击“完成/继续”按钮后，需要（）以完成匹配过程。',
                'answer': 'a4',
                'rate': 10,
                'isRight': false,
                'option': [
                    {
                        'id': 'a1',
                        'isRight': false,
                        'description': 'A. 打开超车灯'
                    },
                    {
                        'id': 'a2',
                        'isRight': false,
                        'description': 'B. 打开危险警告灯'
                    },
                    {
                        'id': 'a3',
                        'isRight': false,
                        'description': 'C. 关闭点火开关'
                    },
                    {
                        'id': 'a4',
                        'isRight': false,
                        'description': 'D. 关闭点火开关并重新打开'
                    }
                ]
            },
            {
                'id': '4',
                'description': '4.发动机控制单元匹配过程中，点火开关应（）。',
                'answer': 'a3',
                'rate': 10,
                'isRight': false,
                'option': [
                    {
                        'id': 'a1',
                        'isRight': false,
                        'description': 'A. 一直打开'
                    },
                    {
                        'id': 'a2',
                        'isRight': false,
                        'description': 'B. 一直关闭'
                    },
                    {
                        'id': 'a3',
                        'isRight': false,
                        'description': 'C. 根据ODIS的要求进行操作'
                    },
                    {
                        'id': 'a4',
                        'isRight': false,
                        'description': 'D. 关闭后再重新打开'
                    }
                ]
            },
            {
                'id': '5',
                'description': '5.下列描述，说法错误的是（）。',
                'answer': 'a2',
                'rate': 10,
                'isRight': false,
                'option': [
                    {
                        'id': 'a1',
                        'isRight': false,
                        'description': 'A. 匹配发动机控制单元前，我们应使用VIN码订购新的控制单元。'
                    },
                    {
                        'id': 'a2',
                        'isRight': false,
                        'description': 'B. 匹配ELV过程中，在最后一次点击“完成/继续”后，需要点火开关持续关闭5分钟，以完成匹配过程。'
                    },
                    {
                        'id': 'a3',
                        'isRight': false,
                        'description': 'C. 匹配发动机控制单元前，我们可使用其它无故障的控制单元。'
                    },
                    {
                        'id': 'a4',
                        'isRight': false,
                        'description': 'D. 第四代防盗系统所有控制单元在匹配过程中均要求输入客户姓名、订购编号、客户国籍等内容。'
                    }
                ]
            },
            {
                'id': '6',
                'description': '6.关于钥匙匹配前的准备工作，下列说法错误的是（）。',
                'answer': 'a1',
                'rate': 10,
                'isRight': false,
                'option': [
                    {
                        'id': 'a1',
                        'isRight': false,
                        'description': 'A. 匹配前可使用无线将ODIS连接至Internet'
                    },
                    {
                        'id': 'a2',
                        'isRight': false,
                        'description': 'B. 匹配前应确认蓄电池的电压高于12.5V'
                    },
                    {
                        'id': 'a3',
                        'isRight': false,
                        'description': 'C. 应将符合要求的充电器连接至车辆，并确保充电电压低于14V'
                    },
                    {
                        'id': 'a4',
                        'isRight': false,
                        'description': 'D. 应确保ODIS的版本已更新至最高版本'
                    }
                ]
            },
            {
                'id': '7',
                'description': '7.关于ELV匹配前的准备工作，下列说法错误的是（  ） 。',
                'answer': 'a4',
                'rate': 10,
                'isRight': false,
                'option': [
                    {
                        'id': 'a1',
                        'isRight': false,
                        'description': 'A. 应使用车辆VIN码订购新的电子转向柱单元'
                    },
                    {
                        'id': 'a2',
                        'isRight': false,
                        'description': 'B. 应确认防盗系统未被锁止'
                    },
                    {
                        'id': 'a3',
                        'isRight': false,
                        'description': 'C. 应确保所有控制单元没有存储关于防盗系统的故障码'
                    },
                    {
                        'id': 'a4',
                        'isRight': false,
                        'description': 'D. 不需要确认其相关线路是否正常'
                    }
                ]
            },
            {
                'id': '8',
                'description': '8.关于钥匙匹配后的描述，下列说法正确的是（） 。',
                'answer': 'a3',
                'rate': 10,
                'isRight': false,
                'option': [
                    {
                        'id': 'a1',
                        'isRight': false,
                        'description': 'A. 无需确认所有控制单元是否存储有故障码'
                    },
                    {
                        'id': 'a2',
                        'isRight': false,
                        'description': 'B. 不需要确认仪表内的指示灯是否正常'
                    },
                    {
                        'id': 'a3',
                        'isRight': false,
                        'description': 'C. 应检查关于钥匙的数据流是否正常'
                    },
                    {
                        'id': 'a4',
                        'isRight': false,
                        'description': 'D. 只需要确认一把钥匙的功能是否正常即可'
                    }
                ]
            },
            {
                'id': '9',
                'description': '9.关于J623匹配后的描述，下列说法错误的是（ ）。',
                'answer': 'a2',
                'rate': 10,
                'isRight': false,
                'option': [
                    {
                        'id': 'a1',
                        'isRight': false,
                        'description': 'A. 应确保车辆可以正常起动'
                    },
                    {
                        'id': 'a2',
                        'isRight': false,
                        'description': 'B. 应确认所有钥匙的遥控功能是否正常'
                    },
                    {
                        'id': 'a3',
                        'isRight': false,
                        'description': 'C. 应确认仪表内故障指示灯已经熄灭'
                    },
                    {
                        'id': 'a4',
                        'isRight': false,
                        'description': 'D. 应确认发动机运转是否平稳'
                    }
                ]
            },
            {
                'id': '10',
                'description': '10.匹配钥匙过程中，如果点火开关不能转到ON位置，应（  ）以激活诊断系统 。',
                'answer': 'a1',
                'rate': 10,
                'isRight': false,
                'option': [
                    {
                        'id': 'a1',
                        'isRight': false,
                        'description': 'A. 开启大灯超车灯'
                    },
                    {
                        'id': 'a2',
                        'isRight': false,
                        'description': 'B. 开启大灯近光灯'
                    },
                    {
                        'id': 'a3',
                        'isRight': false,
                        'description': 'C. 同时踩下制动踏板和油门踏板'
                    },
                    {
                        'id': 'a4',
                        'isRight': false,
                        'description': 'D. 开启示宽灯'
                    }
                ]
            }

        ];
    }


    // tslint:disable-next-line:eofline
}