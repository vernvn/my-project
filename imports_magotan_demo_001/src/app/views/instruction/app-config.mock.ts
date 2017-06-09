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
      name: '匹配指导',
      description: '',
      order: '1',
      childChapterArray: [],
    },

  ],
  pageArray: [

    // J623 页面
    {
      id: 'page02',
      isPass: 1,
      order: '2',
      chapterID: 'chapter01',
      componentArray: [

        // J623 文字
        {
          id: 'page02-component02',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: 'J623',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '',
                  height: '',
                  positionLeft: '410',
                  positionTop: '174',
                  zIndex: '1',
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
                  content: 'J623',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
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
                  positionLeft: '410',
                  positionTop: '174',
                  display: 'none',
                  zIndex: '1',
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
                  content: 'J623',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },
        // J623图片
        {
          id: 'page02-component03',
          type: 'button',
          passCondition: { event: '', state: '', },
          remark: 'J623图片',
          initialStateID: 'state01',
          src: './assets/images/instruction/2.png',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '51',
                  height: '49',
                  positionLeft: '400',
                  positionTop: '118',
                  zIndex: '100',
                  display: '',
                  backgroundImage: './assets/images/instruction/2.png',
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
                  width: '420',
                  height: '240',
                  positionLeft: '300',
                  positionTop: '170',
                  zIndex: '1001',
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
        // J623 图片下方文字
        {
          id: 'page02-component04',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: '文字',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '',
                  height: '',
                  positionLeft: '242',
                  positionTop: '200',
                  zIndex: '1',
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
                  content: '更换新的部件、更换同款车辆上正常使用的部件、匹配原车部件',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '',
                    textAlign: '',
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
                  positionLeft: '242',
                  positionTop: '200',
                  zIndex: '1',
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
                  content: '更换新的部件、更换同款车辆上正常使用的部件、匹配原车部件',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },

        // J623 箭头提示图片
        {
          id: 'page02-component05',
          type: 'button',
          passCondition: { event: '', state: '', },
          remark: '提示图片',
          initialStateID: 'state01',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '40',
                  height: '15',
                  positionLeft: '100',
                  positionTop: '250',
                  zIndex: '100',
                  display: '',
                  backgroundImage: './assets/images/instruction/8.png',
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
                  width: '40',
                  height: '15',
                  positionLeft: '100',
                  positionTop: '250',
                  zIndex: '100',
                  display: '',
                  backgroundImage: './assets/images/instruction/8.png',
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
                  width: '40',
                  height: '15',
                  positionLeft: '100',
                  positionTop: '250',
                  zIndex: '100',
                  display: 'none',
                  backgroundImage: './assets/images/instruction/8.png',
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
        //  J623 箭头提示图片出现的文字
        {
          id: 'page02-component06',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: '提示按钮出现的文字',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '155',
                  height: '',
                  positionLeft: '150',
                  positionTop: '242',
                  zIndex: '2',
                  backgroundColor: '#fff',
                  padding: '4px 10px',
                  border: '1px solid #aaa',
                  boxShadow: '0 0 6px 0',
                  borderRadius: '2px',
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
                  content: `是否有其它部件一同更换`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                }
              ],
            },
            {
              id: 'state02',
              isScroll: 1,
              style: {
                default: {
                  width: '155',
                  height: '',
                  positionLeft: '150',
                  positionTop: '242',
                  zIndex: '2',
                  backgroundColor: '#fff',
                  padding: '4px 10px',
                  border: '1px solid #aaa',
                  boxShadow: '0 0 6px 0',
                  borderRadius: '2px',
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
                  content: `是否有其它部件一同更换`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },
        // J393 文字
        {
          id: 'page02-component07',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: 'J393',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '',
                  height: '',
                  positionLeft: '240',
                  positionTop: '336',
                  zIndex: '1',
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
                  content: 'J393',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
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
                  positionLeft: '240',
                  positionTop: '336',
                  zIndex: '1',
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
                  content: 'J393',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
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
                  width: '',
                  height: '',
                  positionLeft: '347',
                  positionTop: '300',
                  zIndex: '1',
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
                  content: 'J393',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },
        // J393图片
        {
          id: 'page02-component08',
          type: 'button-tip',
          passCondition: { event: '', state: '', },
          remark: 'J393图片',
          initialStateID: 'state01',
          src: './assets/images/instruction/1.png',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '32',
                  height: '49',
                  positionLeft: '243',
                  positionTop: '278',
                  zIndex: '101',
                  backgroundImage: './assets/images/instruction/1.png',
                  display: 'none',
                },
                hover: {
                  cursor: 'pointer',
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
                  width: '32',
                  height: '49',
                  positionLeft: '243',
                  positionTop: '278',
                  zIndex: '100',
                  display: '',
                  backgroundImage: './assets/images/instruction/1.png',
                },
                hover: {
                  cursor: 'pointer',
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
                  width: '32',
                  height: '49',
                  positionLeft: '348',
                  positionTop: '244',
                  zIndex: '100',
                  display: '',
                  backgroundImage: './assets/images/instruction/1.png',
                },
                hover: {
                  cursor: 'pointer',
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
        // J764 文字
        {
          id: 'page02-component09',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: 'J764',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '',
                  height: '',
                  positionLeft: '350',
                  positionTop: '336',
                  zIndex: '1',
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
                  content: 'J764',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
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
                  positionLeft: '350',
                  positionTop: '336',
                  zIndex: '1',
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
                  content: 'J764',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
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
                  width: '',
                  height: '',
                  positionLeft: '410',
                  positionTop: '308',
                  zIndex: '1',
                  display: ''
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
                  content: 'J764',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },
        // J764图片
        {
          id: 'page02-component10',
          type: 'button-tip',
          passCondition: { event: '', state: '', },
          remark: 'J764图片',
          initialStateID: 'state01',
          src: './assets/images/instruction/3.png',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '37',
                  height: '55',
                  positionLeft: '346',
                  positionTop: '278',
                  zIndex: '100',
                  display: 'none',
                  backgroundImage: './assets/images/instruction/3.png',
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
                  width: '37',
                  height: '55',
                  positionLeft: '346',
                  positionTop: '278',
                  zIndex: '100',
                  display: '',
                  backgroundImage: './assets/images/instruction/3.png',
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
                  width: '37',
                  height: '55',
                  positionLeft: '406',
                  positionTop: '248',
                  zIndex: '100',
                  display: '',
                  backgroundImage: './assets/images/instruction/3.png',
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
        // 点火钥匙 文字
        {
          id: 'page02-component11',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: '点火钥匙',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '',
                  height: '',
                  positionLeft: '451',
                  positionTop: '336',
                  zIndex: '1',
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
                  content: '点火钥匙',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
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
                  positionLeft: '451',
                  positionTop: '336',
                  zIndex: '1',
                  display: ''
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
                  content: '点火钥匙',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
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
                  width: '',
                  height: '',
                  positionLeft: '402',
                  positionTop: '308',
                  zIndex: '1',
                  display: ''
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
                  content: '点火钥匙',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },
        // 点火钥匙 图片
        {
          id: 'page02-component12',
          type: 'button-tip',
          passCondition: { event: '', state: '', },
          remark: '点火钥匙图片',
          initialStateID: 'state01',
          src: './assets/images/instruction/4.png',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '36',
                  height: '41',
                  positionLeft: '456',
                  positionTop: '285',
                  zIndex: '100',
                  display: 'none',
                  backgroundImage: './assets/images/instruction/4.png',
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
                  width: '36',
                  height: '41',
                  positionLeft: '456',
                  positionTop: '285',
                  zIndex: '100',
                  display: '',
                  backgroundImage: './assets/images/instruction/4.png',
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
                  width: '36',
                  height: '41',
                  positionLeft: '410',
                  positionTop: '248',
                  zIndex: '100',
                  display: '',
                  backgroundImage: './assets/images/instruction/4.png',
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
        // 两把点火钥匙 文字
        {
          id: 'page02-component13',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: '点火钥匙',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '',
                  height: '',
                  positionLeft: '569',
                  positionTop: '336',
                  zIndex: '1',
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
                  content: '两把点火钥匙',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
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
                  positionLeft: '569',
                  positionTop: '336',
                  zIndex: '1',
                  display: '',
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
                  content: '两把点火钥匙',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
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
                  width: '',
                  height: '',
                  positionLeft: '394',
                  positionTop: '308',
                  zIndex: '1',
                  display: '',
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
                  content: '两把点火钥匙',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },
        // 两把点火钥匙 图片
        {
          id: 'page02-component14',
          type: 'button-tip',
          passCondition: { event: '', state: '', },
          remark: '点火钥匙图片',
          initialStateID: 'state01',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '66',
                  height: '41',
                  positionLeft: '569',
                  positionTop: '285',
                  zIndex: '100',
                  display: 'none',
                  backgroundImage: './assets/images/instruction/7.png',
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
                  width: '66',
                  height: '41',
                  positionLeft: '569',
                  positionTop: '285',
                  zIndex: '100',
                  display: '',
                  backgroundImage: './assets/images/instruction/7.png',
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
                  width: '66',
                  height: '41',
                  positionLeft: '402',
                  positionTop: '248',
                  zIndex: '100',
                  display: '',
                  backgroundImage: './assets/images/instruction/7.png',
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
        // J764提示按钮
        {
          id: 'page02-component15',
          type: 'button',
          passCondition: { event: '', state: '', },
          remark: 'J764提示按钮',
          initialStateID: 'state01',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '32',
                  height: '42',
                  positionLeft: '40',
                  positionTop: '236',
                  zIndex: '102',
                  display: 'none',
                  backgroundImage: './assets/images/instruction/9.png',
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
                  width: '32',
                  height: '42',
                  positionLeft: '40',
                  positionTop: '236',
                  zIndex: '102',
                  display: '',
                  backgroundImage: './assets/images/instruction/9.png',
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
              id: 'state03',
              isScroll: 1,
              style: {
                default: {
                  width: '32',
                  height: '42',
                  positionLeft: '40',
                  positionTop: '236',
                  zIndex: '102',
                  display: '',
                  backgroundImage: './assets/images/instruction/9.png',
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
        // J764提示按钮 出现的文字
        {
          id: 'page02-component16',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: '提示按钮出现的文字',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '300',
                  height: '',
                  positionLeft: '100',
                  positionTop: '234',
                  zIndex: '101',
                  backgroundColor: '#fff',
                  padding: '4px 10px',
                  border: '1px solid #aaa',
                  boxShadow: '0 0 6px 0',
                  borderRadius: '2px',
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
                  content: `相继更换（包括匹配）`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                  isLF: true,
                },
                {
                  id: '',
                  order: '1',
                  content: `1.舒适控制单元和电控转向柱锁（索引 = D）`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',

                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                  isLF: true,
                },
                {
                  id: '',
                  order: '1',
                  content: `2.ECU`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                  isLF: true,
                }
              ],
            },
            {
              id: 'state02',
              isScroll: 1,
              style: {
                default: {
                  width: '300',
                  height: '',
                  positionLeft: '100',
                  positionTop: '234',
                  zIndex: '101',
                  backgroundColor: '#fff',
                  padding: '4px 10px',
                  border: '1px solid #aaa',
                  boxShadow: '0 0 6px 0',
                  borderRadius: '2px',
                  display: '',
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
                  content: `相继更换（包括匹配）`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                },
                {
                  id: '',
                  order: '1',
                  content: `1.舒适控制单元和电控转向柱锁（索引 = D）`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                  isLF: true,
                },
                {
                  id: '',
                  order: '1',
                  content: `2.ECU`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                  isLF: true,
                }
              ],
            },
          ],
        },
        // 点火钥匙 提示按钮
        {
          id: 'page02-component17',
          type: 'button',
          passCondition: { event: '', state: '', },
          remark: 'J764提示按钮',
          initialStateID: 'state01',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '32',
                  height: '42',
                  positionLeft: '40',
                  positionTop: '236',
                  zIndex: '102',
                  display: 'none',
                  backgroundImage: './assets/images/instruction/9.png',
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
                  width: '32',
                  height: '42',
                  positionLeft: '40',
                  positionTop: '236',
                  zIndex: '102',
                  display: '',
                  backgroundImage: './assets/images/instruction/9.png',
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
              id: 'state03',
              isScroll: 1,
              style: {
                default: {
                  width: '32',
                  height: '42',
                  positionLeft: '40',
                  positionTop: '236',
                  zIndex: '102',
                  display: '',
                  backgroundImage: './assets/images/instruction/9.png',
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
        // 点火钥匙 提示按钮 出现的文字
        {
          id: 'page02-component18',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: '提示按钮出现的文字',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '300',
                  height: '',
                  positionLeft: '100',
                  positionTop: '234',
                  zIndex: '101',
                  backgroundColor: '#fff',
                  padding: '4px 10px',
                  border: '1px solid #aaa',
                  boxShadow: '0 0 6px 0',
                  borderRadius: '2px',
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
                  content: `1.更换 ECU/匹配 ECU 与已授权的钥匙`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                  isLF: true,
                },
                {
                  id: '',
                  order: '1',
                  content: `2.匹配钥匙`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',

                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                  isLF: true,
                },
              ],
            },
            {
              id: 'state02',
              isScroll: 1,
              style: {
                default: {
                  width: '300',
                  height: '',
                  positionLeft: '100',
                  positionTop: '234',
                  zIndex: '101',
                  backgroundColor: '#fff',
                  padding: '4px 10px',
                  border: '1px solid #aaa',
                  boxShadow: '0 0 6px 0',
                  borderRadius: '2px',
                  display: '',
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
                  content: `1.更换 ECU/匹配 ECU 与已授权的钥匙 `,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                },
                {
                  id: '',
                  order: '1',
                  content: `2.匹配钥匙`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                  isLF: true,
                },
              ],
            },
          ],
        },
        // 两把点火钥匙 提示按钮
        {
          id: 'page02-component19',
          type: 'button',
          passCondition: { event: '', state: '', },
          remark: '两把点火钥匙提示按钮',
          initialStateID: 'state01',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '32',
                  height: '42',
                  positionLeft: '40',
                  positionTop: '236',
                  zIndex: '102',
                  display: 'none',
                  backgroundImage: './assets/images/instruction/9.png',
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
                  width: '32',
                  height: '42',
                  positionLeft: '40',
                  positionTop: '236',
                  zIndex: '102',
                  display: '',
                  backgroundImage: './assets/images/instruction/9.png',
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
              id: 'state03',
              isScroll: 1,
              style: {
                default: {
                  width: '32',
                  height: '42',
                  positionLeft: '40',
                  positionTop: '236',
                  zIndex: '102',
                  display: '',
                  backgroundImage: './assets/images/instruction/9.png',
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
        // 两把点火钥匙 提示按钮 出现的文字
        {
          id: 'page02-component20',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: '提示按钮出现的文字',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '300',
                  height: '',
                  positionLeft: '100',
                  positionTop: '234',
                  zIndex: '101',
                  backgroundColor: '#fff',
                  padding: '4px 10px',
                  border: '1px solid #aaa',
                  boxShadow: '0 0 6px 0',
                  borderRadius: '2px',
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
                  content: `1.匹配钥匙`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                },
                {
                  id: '',
                  order: '1',
                  content: `2.更换/匹配转向柱锁（如果有另一把可用的已`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                  isLF: true,
                },
                {
                  id: '',
                  order: '1',
                  content: `授权钥匙，则转至发动机控制单元与一把钥匙的步骤）`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                  isLF: true,
                }
              ],
            },
            {
              id: 'state02',
              isScroll: 1,
              style: {
                default: {
                  width: '300',
                  height: '',
                  positionLeft: '100',
                  positionTop: '234',
                  zIndex: '101',
                  backgroundColor: '#fff',
                  padding: '4px 10px',
                  border: '1px solid #aaa',
                  boxShadow: '0 0 6px 0',
                  borderRadius: '2px',
                  display: '',
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
                  content: `1.匹配钥匙`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                },
                {
                  id: '',
                  order: '1',
                  content: `2.更换/匹配转向柱锁（如果有另一把可用的已`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                  isLF: true,
                },
                {
                  id: '',
                  order: '1',
                  content: `授权钥匙，则转至发动机控制单元与一把钥匙的步骤）`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                  isLF: true,
                }
              ],
            },
          ],
        },
        // J764 图片下方文字
        {
          id: 'page02-component21',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: '文字',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '',
                  height: '',
                  positionLeft: '385',
                  positionTop: '333',
                  zIndex: '1',
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
                  content: '更换新的部件',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '',
                    textAlign: '',
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
                  positionLeft: '385',
                  positionTop: '333',
                  zIndex: '1',
                  display: ''
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
                  content: '更换新的部件',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },
        // 点火钥匙 图片下方文字
        {
          id: 'page02-component22',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: '文字',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '',
                  height: '',
                  positionLeft: '342',
                  positionTop: '333',
                  zIndex: '1',
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
                  content: '一把全新钥匙、匹配原车钥匙',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '',
                    textAlign: '',
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
                  positionLeft: '342',
                  positionTop: '333',
                  zIndex: '1',
                  display: ''
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
                  content: '一把全新钥匙、匹配原车钥匙',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },
        // 两把点火钥匙 图片下方文字
        {
          id: 'page02-component23',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: '文字',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '',
                  height: '',
                  positionLeft: '241',
                  positionTop: '333',
                  zIndex: '1',
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
                  content: '两把全新钥匙、如有另一把可用的已授权钥匙时，仅可使用旧零件',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '',
                    textAlign: '',
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
                  positionLeft: '241',
                  positionTop: '333',
                  zIndex: '1',
                  display: ''
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
                  content: '两把全新钥匙、如有另一把可用的已授权钥匙时，仅可使用旧零件',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },

        // J393点击出现  J764文字
        {
          id: 'page02-component24',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: 'J764',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '',
                  height: '',
                  positionLeft: '350',
                  positionTop: '336',
                  zIndex: '1',
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
                  content: 'J764',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
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
                  positionLeft: '469',
                  positionTop: '303',
                  zIndex: '1',
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
                  content: 'J764',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },
        // J393点击出现  J764图片
        {
          id: 'page02-component25',
          type: 'button',
          passCondition: { event: '', state: '', },
          remark: 'J764图片',
          initialStateID: 'state01',
          src: './assets/images/instruction/3.png',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '37',
                  height: '55',
                  positionLeft: '346',
                  positionTop: '278',
                  zIndex: '100',
                  display: 'none',
                  backgroundImage: './assets/images/instruction/3.png',
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
                  width: '37',
                  height: '55',
                  positionLeft: '465',
                  positionTop: '241',
                  zIndex: '100',
                  display: '',
                  backgroundImage: './assets/images/instruction/3.png',
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
        // J393点击出现  文字1
        {
          id: 'page02-component26',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: '文字',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '',
                  height: '',
                  positionLeft: '220',
                  positionTop: '333',
                  zIndex: '1',
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
                  content: '舒适控制单元更换新的部件、电控转向柱锁仅在旧的索引 = D 时予以更换',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '',
                    textAlign: '',
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
                  positionLeft: '220',
                  positionTop: '333',
                  zIndex: '1',
                  display: ''
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
                  content: '舒适控制单元更换新的部件、电控转向柱锁仅在旧的索引 = D 时予以更换',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },

        // J393点击出现 红圈提示按钮
        {
          id: 'page02-component27',
          type: 'button',
          passCondition: { event: '', state: '', },
          remark: '两把点火钥匙提示按钮',
          initialStateID: 'state01',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '32',
                  height: '42',
                  positionLeft: '40',
                  positionTop: '236',
                  zIndex: '102',
                  display: 'none',
                  backgroundImage: './assets/images/instruction/9.png',
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
                  width: '32',
                  height: '42',
                  positionLeft: '40',
                  positionTop: '236',
                  zIndex: '102',
                  display: '',
                  backgroundImage: './assets/images/instruction/9.png',
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
              id: 'state03',
              isScroll: 1,
              style: {
                default: {
                  width: '32',
                  height: '42',
                  positionLeft: '40',
                  positionTop: '236',
                  zIndex: '102',
                  display: '',
                  backgroundImage: './assets/images/instruction/9.png',
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
        // J393点击出现 红圈提示按钮 出现的文字
        {
          id: 'page02-component28',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: '提示按钮出现的文字',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '300',
                  height: '',
                  positionLeft: '100',
                  positionTop: '234',
                  zIndex: '101',
                  backgroundColor: '#fff',
                  padding: '4px 10px',
                  border: '1px solid #aaa',
                  boxShadow: '0 0 6px 0',
                  borderRadius: '2px',
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
                  content: `相继更换（包括匹配）`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                },
                {
                  id: '',
                  order: '1',
                  content: `1.舒适控制单元和电控转向柱锁（索引 = D）`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                  isLF: true,
                },
                {
                  id: '',
                  order: '1',
                  content: `2.ECU`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                  isLF: true,
                }
              ],
            },
            {
              id: 'state02',
              isScroll: 1,
              style: {
                default: {
                  width: '300',
                  height: '',
                  positionLeft: '100',
                  positionTop: '234',
                  zIndex: '101',
                  backgroundColor: '#fff',
                  padding: '4px 10px',
                  border: '1px solid #aaa',
                  boxShadow: '0 0 6px 0',
                  borderRadius: '2px',
                  display: '',
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
                  content: `相继更换（包括匹配）`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                },
                {
                  id: '',
                  order: '1',
                  content: `1.舒适控制单元和电控转向柱锁（索引 = D）`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                  isLF: true,
                },
                {
                  id: '',
                  order: '1',
                  content: `2.ECU`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                  isLF: true,
                }
              ],
            },
          ],
        },
        // J393点击出现 箭头提示图片
        {
          id: 'page02-component29',
          type: 'button',
          passCondition: { event: '', state: '', },
          remark: '提示图片',
          initialStateID: 'state01',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '40',
                  height: '15',
                  positionLeft: '100',
                  positionTop: '400',
                  zIndex: '100',
                  display: 'none',
                  backgroundImage: './assets/images/instruction/8.png',
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
                  height: '15',
                  positionLeft: '100',
                  positionTop: '400',
                  zIndex: '100',
                  display: '',
                  backgroundImage: './assets/images/instruction/8.png',
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
              id: 'state03',
              isScroll: 1,
              style: {
                default: {
                  width: '40',
                  height: '15',
                  positionLeft: '100',
                  positionTop: '400',
                  zIndex: '100',
                  display: '',
                  backgroundImage: './assets/images/instruction/8.png',
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
        // J393点击出现 箭头提示图片出现的文字
        {
          id: 'page02-component30',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: '提示按钮出现的文字',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '155',
                  height: '',
                  positionLeft: '150',
                  positionTop: '393',
                  zIndex: '2',
                  backgroundColor: '#fff',
                  padding: '4px 10px',
                  border: '1px solid #aaa',
                  boxShadow: '0 0 6px 0',
                  borderRadius: '2px',
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
                  content: `是否有其它部件一同更换`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                }
              ],
            },
            {
              id: 'state02',
              isScroll: 1,
              style: {
                default: {
                  width: '155',
                  height: '',
                  positionLeft: '150',
                  positionTop: '393',
                  zIndex: '2',
                  backgroundColor: '#fff',
                  padding: '4px 10px',
                  border: '1px solid #aaa',
                  boxShadow: '0 0 6px 0',
                  borderRadius: '2px',
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
                  content: `是否有其它部件一同更换`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },

        // J393 点击箭头 出现 J764 文字
        {
          id: 'page02-component31',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: 'J764',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '',
                  height: '',
                  positionLeft: '350',
                  positionTop: '400',
                  zIndex: '1',
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
                  content: 'J764',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
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
                  positionLeft: '269',
                  positionTop: '466',
                  zIndex: '1',
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
                  content: 'J764',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },
        // J393 点击箭头 出现 J764图片
        {
          id: 'page02-component32',
          type: 'button-tip',
          passCondition: { event: '', state: '', },
          remark: 'J764图片',
          initialStateID: 'state01',
          src: './assets/images/instruction/3.png',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '37',
                  height: '55',
                  positionLeft: '346',
                  positionTop: '400',
                  zIndex: '100',
                  display: 'none',
                  backgroundImage: './assets/images/instruction/3.png',
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
                  width: '37',
                  height: '55',
                  positionLeft: '266',
                  positionTop: '400',
                  zIndex: '100',
                  display: '',
                  backgroundImage: './assets/images/instruction/3.png',
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
        // J393 点击箭头 出现 点火钥匙 文字
        {
          id: 'page02-component33',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: '点火钥匙',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '',
                  height: '',
                  positionLeft: '451',
                  positionTop: '400',
                  zIndex: '1',
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
                  content: '点火钥匙',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
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
                  positionLeft: '408',
                  positionTop: '466',
                  zIndex: '1',
                  display: ''
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
                  content: '点火钥匙',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },
        // J393 点击箭头 出现 点火钥匙 图片
        {
          id: 'page02-component34',
          type: 'button-tip',
          passCondition: { event: '', state: '', },
          remark: '点火钥匙图片',
          initialStateID: 'state01',
          src: './assets/images/instruction/4.png',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '36',
                  height: '41',
                  positionLeft: '456',
                  positionTop: '400',
                  zIndex: '100',
                  display: 'none',
                  backgroundImage: './assets/images/instruction/4.png',
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
                  width: '36',
                  height: '41',
                  positionLeft: '413',
                  positionTop: '408',
                  zIndex: '100',
                  display: '',
                  backgroundImage: './assets/images/instruction/4.png',
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
        // J393 点击箭头 出现 两把点火钥匙 文字
        {
          id: 'page02-component35',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: '点火钥匙',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '',
                  height: '',
                  positionLeft: '569',
                  positionTop: '400',
                  zIndex: '1',
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
                  content: '两把点火钥匙',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
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
                  positionLeft: '554',
                  positionTop: '466',
                  zIndex: '1',
                  display: '',
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
                  content: '两把点火钥匙',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },
        // J393 点击箭头 出现 两把点火钥匙 图片
        {
          id: 'page02-component36',
          type: 'button-tip',
          passCondition: { event: '', state: '', },
          remark: '点火钥匙图片',
          initialStateID: 'state01',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '66',
                  height: '41',
                  positionLeft: '569',
                  positionTop: '400',
                  zIndex: '100',
                  display: 'none',
                  backgroundImage: './assets/images/instruction/7.png',
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
                  width: '66',
                  height: '41',
                  positionLeft: '557',
                  positionTop: '406',
                  zIndex: '100',
                  display: '',
                  backgroundImage: './assets/images/instruction/7.png',
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


        // J393 点击箭头 出现 点火钥匙 点击点火钥匙  出现 点火钥匙 文字
        {
          id: 'page02-component37',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: '点火钥匙',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '',
                  height: '',
                  positionLeft: '451',
                  positionTop: '400',
                  zIndex: '1',
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
                  content: '点火钥匙',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
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
                  positionLeft: '408',
                  positionTop: '430',
                  zIndex: '1',
                  display: ''
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
                  content: '点火钥匙',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },
        // J393 J393 点击箭头 出现 点火钥匙 点击点火钥匙  出现 点火钥匙 图片
        {
          id: 'page02-component38',
          type: 'button',
          passCondition: { event: '', state: '', },
          remark: '点火钥匙图片',
          initialStateID: 'state01',
          src: './assets/images/instruction/4.png',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '36',
                  height: '41',
                  positionLeft: '456',
                  positionTop: '400',
                  zIndex: '100',
                  display: 'none',
                  backgroundImage: './assets/images/instruction/4.png',
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
                  width: '36',
                  height: '41',
                  positionLeft: '413',
                  positionTop: '375',
                  zIndex: '100',
                  display: '',
                  backgroundImage: './assets/images/instruction/4.png',
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
        // J393 点击箭头 出现 点火钥匙 点击点火钥匙  出现 文字1
        {
          id: 'page02-component39',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: '点火钥匙',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '',
                  height: '',
                  positionLeft: '451',
                  positionTop: '400',
                  zIndex: '1',
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
                  content: '一把全新钥匙、原车钥匙',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
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
                  positionLeft: '363',
                  positionTop: '456',
                  zIndex: '1',
                  display: ''
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
                  content: '一把全新钥匙、原车钥匙',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },
        // J393 点击箭头 出现 点火钥匙 点击点火钥匙  出现 文字2
        {
          id: 'page02-component40',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: '点火钥匙',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '',
                  height: '',
                  positionLeft: '451',
                  positionTop: '400',
                  zIndex: '1',
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
                  content: '仅在待更换的零部件在诊断时无法读出或完全消失时需要旅行车辆ID选项',
                  style: {
                    color: 'red',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '',
                    textAlign: '',
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
                  positionLeft: '222',
                  positionTop: '476',
                  zIndex: '1',
                  display: ''
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
                  content: '仅在待更换的零部件在诊断时无法读出或完全消失时需要旅行车辆ID选项',
                  style: {
                    color: 'red',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },

        // J393 点击箭头 出现 点火钥匙 点击点火钥匙  出现 红圈提示按钮
        {
          id: 'page02-component41',
          type: 'button',
          passCondition: { event: '', state: '', },
          remark: '两把点火钥匙提示按钮',
          initialStateID: 'state01',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '32',
                  height: '42',
                  positionLeft: '40',
                  positionTop: '236',
                  zIndex: '102',
                  display: 'none',
                  backgroundImage: './assets/images/instruction/9.png',
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
                  width: '32',
                  height: '42',
                  positionLeft: '40',
                  positionTop: '236',
                  zIndex: '102',
                  display: '',
                  backgroundImage: './assets/images/instruction/9.png',
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
              id: 'state03',
              isScroll: 1,
              style: {
                default: {
                  width: '32',
                  height: '42',
                  positionLeft: '40',
                  positionTop: '236',
                  zIndex: '102',
                  display: '',
                  backgroundImage: './assets/images/instruction/9.png',
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
        // J393 点击箭头 出现 点火钥匙 点击点火钥匙   出现 点击红圈提示按钮 出现的文字
        {
          id: 'page02-component42',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: '提示按钮出现的文字',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '150',
                  height: '',
                  positionLeft: '100',
                  positionTop: '234',
                  zIndex: '101',
                  backgroundColor: '#fff',
                  padding: '4px 10px',
                  border: '1px solid #aaa',
                  boxShadow: '0 0 6px 0',
                  borderRadius: '2px',
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
                  content: `相继更换（包括匹配）`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                },
                {
                  id: '',
                  order: '1',
                  content: `1.舒适控制单元和电控转向柱锁（索引 = D）`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                  isLF: true,
                },
                {
                  id: '',
                  order: '1',
                  content: `2.ECU`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                  isLF: true,
                }
              ],
            },
            {
              id: 'state02',
              isScroll: 1,
              style: {
                default: {
                  width: '150',
                  height: '',
                  positionLeft: '100',
                  positionTop: '234',
                  zIndex: '101',
                  backgroundColor: '#fff',
                  padding: '4px 10px',
                  border: '1px solid #aaa',
                  boxShadow: '0 0 6px 0',
                  borderRadius: '2px',
                  display: '',
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
                  content: `相继更换（包括匹配） `,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                },
                {
                  id: '',
                  order: '1',
                  content: `1.发动机控制单元`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                  isLF: true,
                },
                {
                  id: '',
                  order: '1',
                  content: `2.舒适控制单元  `,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                  isLF: true,
                },
                {
                  id: '',
                  order: '1',
                  content: `3.匹配钥匙  `,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                  isLF: true,
                }
              ],
            },
          ],
        },


        // J393 点击箭头 出现 两把点火钥匙  点击两把点火钥匙  出现 两把点火钥匙 文字
        {
          id: 'page02-component43',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: '两把点火钥匙',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '',
                  height: '',
                  positionLeft: '451',
                  positionTop: '400',
                  zIndex: '1',
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
                  content: '两把点火钥匙',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
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
                  positionLeft: '408',
                  positionTop: '430',
                  zIndex: '1',
                  display: ''
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
                  content: '两把点火钥匙',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },
        // J393  点击箭头 出现 两把点火钥匙 点击两把点火钥匙  出现 两把点火钥匙 图片
        {
          id: 'page02-component44',
          type: 'button',
          passCondition: { event: '', state: '', },
          remark: '点火钥匙图片',
          initialStateID: 'state01',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '66',
                  height: '41',
                  positionLeft: '456',
                  positionTop: '400',
                  zIndex: '100',
                  display: 'none',
                  backgroundImage: './assets/images/instruction/7.png',
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
                  width: '66',
                  height: '41',
                  positionLeft: '413',
                  positionTop: '375',
                  zIndex: '100',
                  display: '',
                  backgroundImage: './assets/images/instruction/7.png',
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
        // J393 点击箭头 出现 两把点火钥匙 点击两把点火钥匙  出现 文字1
        {
          id: 'page02-component45',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: '点火钥匙',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '',
                  height: '',
                  positionLeft: '242',
                  positionTop: '400',
                  zIndex: '1',
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
                  content: '两把全新钥匙、如有另一把可用的已授权钥匙时，仅可使用旧零件',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
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
                  positionLeft: '242',
                  positionTop: '456',
                  zIndex: '1',
                  display: ''
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
                  content: '两把全新钥匙、如有另一把可用的已授权钥匙时，仅可使用旧零件',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },
        // J393 点击箭头 出现 两把点火钥匙 点击两把点火钥匙  出现 文字2
        {
          id: 'page02-component46',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: '点火钥匙',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '',
                  height: '',
                  positionLeft: '451',
                  positionTop: '400',
                  zIndex: '1',
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
                  content: '仅在待更换的零部件在诊断时无法读出或完全消失时需要旅行车辆ID选项',
                  style: {
                    color: 'red',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '',
                    textAlign: '',
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
                  positionLeft: '222',
                  positionTop: '476',
                  zIndex: '1',
                  display: ''
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
                  content: '仅在待更换的零部件在诊断时无法读出或完全消失时需要旅行车辆ID选项',
                  style: {
                    color: 'red',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },

        // J393 点击箭头 出现 两把点火钥匙 点击两把点火钥匙  出现 红圈提示按钮
        {
          id: 'page02-component47',
          type: 'button',
          passCondition: { event: '', state: '', },
          remark: '两把点火钥匙提示按钮',
          initialStateID: 'state01',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '32',
                  height: '42',
                  positionLeft: '40',
                  positionTop: '236',
                  zIndex: '102',
                  display: 'none',
                  backgroundImage: './assets/images/instruction/9.png',
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
                  width: '32',
                  height: '42',
                  positionLeft: '40',
                  positionTop: '236',
                  zIndex: '102',
                  display: '',
                  backgroundImage: './assets/images/instruction/9.png',
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
              id: 'state03',
              isScroll: 1,
              style: {
                default: {
                  width: '32',
                  height: '42',
                  positionLeft: '40',
                  positionTop: '236',
                  zIndex: '102',
                  display: '',
                  backgroundImage: './assets/images/instruction/9.png',
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
        // J393 点击箭头 出现 两把点火钥匙 点击两把点火钥匙   出现 点击红圈提示按钮 出现的文字
        {
          id: 'page02-component48',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: '提示按钮出现的文字',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '150',
                  height: '',
                  positionLeft: '100',
                  positionTop: '234',
                  zIndex: '101',
                  backgroundColor: '#fff',
                  padding: '4px 10px',
                  border: '1px solid #aaa',
                  boxShadow: '0 0 6px 0',
                  borderRadius: '2px',
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
                  content: `相继更换（包括匹配）`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                },
                {
                  id: '',
                  order: '1',
                  content: `1.舒适控制单元和电控转向柱锁（索引 = D）`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                  isLF: true,
                },
                {
                  id: '',
                  order: '1',
                  content: `2.ECU`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                  isLF: true,
                }
              ],
            },
            {
              id: 'state02',
              isScroll: 1,
              style: {
                default: {
                  width: '150',
                  height: '',
                  positionLeft: '100',
                  positionTop: '234',
                  zIndex: '101',
                  backgroundColor: '#fff',
                  padding: '4px 10px',
                  border: '1px solid #aaa',
                  boxShadow: '0 0 6px 0',
                  borderRadius: '2px',
                  display: '',
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
                  content: `相继更换（包括匹配） `,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                },
                {
                  id: '',
                  order: '1',
                  content: `1.匹配钥匙 `,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                  isLF: true,
                },
                {
                  id: '',
                  order: '1',
                  content: `2.舒适控制单元  `,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                  isLF: true,
                },
                {
                  id: '',
                  order: '1',
                  content: `3.发动机控制单元`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                  isLF: true,
                }
              ],
            },
          ],
        },


        // 点击箭头 出现 J393 文字 点击J393图片 出现
        {
          id: 'page02-component57',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: 'J393',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '',
                  height: '',
                  positionLeft: '240',
                  positionTop: '336',
                  zIndex: '1',
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
                  content: 'J393',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
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
                  positionLeft: '347',
                  positionTop: '300',
                  zIndex: '1',
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
                  content: 'J393',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },
        // 点击箭头 J393图片  点击J393图片 出现 j393图片
        {
          id: 'page02-component58',
          type: 'button',
          passCondition: { event: '', state: '', },
          remark: 'J393图片',
          initialStateID: 'state01',
          src: './assets/images/instruction/1.png',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '32',
                  height: '49',
                  positionLeft: '243',
                  positionTop: '278',
                  zIndex: '100',
                  backgroundImage: './assets/images/instruction/1.png',
                  display: 'none',
                },
                hover: {
                  cursor: 'pointer',
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
                  width: '32',
                  height: '49',
                  positionLeft: '348',
                  positionTop: '244',
                  zIndex: '100',
                  display: '',
                  backgroundImage: './assets/images/instruction/1.png',
                },
                hover: {
                  cursor: 'pointer',
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


        // J393 点击箭头 出现 J764 点击J764   出现 J623 文字
        {
          id: 'page02-component49',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: 'J623',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '',
                  height: '',
                  positionLeft: '200',
                  positionTop: '174',
                  zIndex: '1',
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
                  content: 'J623',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
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
                  positionLeft: '207',
                  positionTop: '186',
                  zIndex: '1',
                  display: '',
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
                  content: 'J623',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },
        // J393 点击箭头 出现 J764 点击J764   出现 J623图片
        {
          id: 'page02-component50',
          type: 'button',
          passCondition: { event: '', state: '', },
          remark: 'J623图片',
          initialStateID: 'state01',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '51',
                  height: '49',
                  positionLeft: '200',
                  positionTop: '128',
                  zIndex: '100',
                  display: 'none',
                  backgroundImage: './assets/images/instruction/2.png',
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
                  width: '51',
                  height: '49',
                  positionLeft: '200',
                  positionTop: '128',
                  zIndex: '1001',
                  display: '',
                  backgroundImage: './assets/images/instruction/2.png',
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
        // J393 点击箭头 出现 J764 点击J764 出现 J393 文字
        {
          id: 'page02-component51',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: 'J393',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '',
                  height: '',
                  positionLeft: '240',
                  positionTop: '336',
                  zIndex: '1',
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
                  content: 'J393',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
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
                  positionLeft: '354',
                  positionTop: '186',
                  zIndex: '1',
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
                  content: 'J393',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },
        // J393 点击箭头 出现 J764 点击J764 出现 J393图片
        {
          id: 'page02-component52',
          type: 'button',
          passCondition: { event: '', state: '', },
          remark: 'J393图片',
          initialStateID: 'state01',
          src: './assets/images/instruction/1.png',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '32',
                  height: '49',
                  positionLeft: '243',
                  positionTop: '278',
                  zIndex: '100',
                  backgroundImage: './assets/images/instruction/1.png',
                  display: 'none',
                },
                hover: {
                  cursor: 'pointer',
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
                  width: '32',
                  height: '49',
                  positionLeft: '354',
                  positionTop: '128',
                  zIndex: '100',
                  display: '',
                  backgroundImage: './assets/images/instruction/1.png',
                },
                hover: {
                  cursor: 'pointer',
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
        // J393 点击箭头 出现 J764 点击J764 出现 J764 文字
        {
          id: 'page02-component53',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: 'J764',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '',
                  height: '',
                  positionLeft: '350',
                  positionTop: '336',
                  zIndex: '1',
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
                  content: 'J764',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
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
                  positionLeft: '495',
                  positionTop: '186',
                  zIndex: '1',
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
                  content: 'J764',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },
        // J393 点击箭头 出现 J764 点击J764 出现 J764图片
        {
          id: 'page02-component54',
          type: 'button',
          passCondition: { event: '', state: '', },
          remark: 'J764图片',
          initialStateID: 'state01',
          src: './assets/images/instruction/3.png',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '37',
                  height: '55',
                  positionLeft: '346',
                  positionTop: '128',
                  zIndex: '100',
                  display: 'none',
                  backgroundImage: './assets/images/instruction/3.png',
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
                  width: '37',
                  height: '55',
                  positionLeft: '493',
                  positionTop: '128',
                  zIndex: '100',
                  display: '',
                  backgroundImage: './assets/images/instruction/3.png',
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
        // J393 点击箭头 出现 J764 点击J764 出现  点火钥匙 文字
        {
          id: 'page02-component55',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: '点火钥匙',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '',
                  height: '',
                  positionLeft: '451',
                  positionTop: '336',
                  zIndex: '1',
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
                  content: '点火钥匙',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
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
                  positionLeft: '655',
                  positionTop: '186',
                  zIndex: '1',
                  display: ''
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
                  content: '点火钥匙',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },
        // J393 点击箭头 出现 J764 点击J764 出现 点火钥匙 图片
        {
          id: 'page02-component56',
          type: 'button',
          passCondition: { event: '', state: '', },
          remark: '点火钥匙图片',
          initialStateID: 'state01',
          src: './assets/images/instruction/4.png',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '36',
                  height: '41',
                  positionLeft: '456',
                  positionTop: '285',
                  zIndex: '100',
                  display: 'none',
                  backgroundImage: './assets/images/instruction/4.png',
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
                  width: '36',
                  height: '41',
                  positionLeft: '633',
                  positionTop: '128',
                  zIndex: '100',
                  display: '',
                  backgroundImage: './assets/images/instruction/4.png',
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
        // J393 点击箭头 出现 J764 点击J764   出现 图片下方文字
        {
          id: 'page02-component59',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: 'J623',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '',
                  height: '',
                  positionLeft: '200',
                  positionTop: '174',
                  zIndex: '1',
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
                  content: 'J623',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
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
                  positionLeft: '230',
                  positionTop: '300',
                  zIndex: '1',
                  display: '',
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
                  content: 'ECU、舒适控制单元、电动转向柱锁及全车锁止组件全部更换新的部件',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },
        // J393 点击箭头 出现 J764 点击J764  出现 红圈提示按钮
        {
          id: 'page02-component60',
          type: 'button',
          passCondition: { event: '', state: '', },
          remark: '两把点火钥匙提示按钮',
          initialStateID: 'state01',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '32',
                  height: '42',
                  positionLeft: '40',
                  positionTop: '236',
                  zIndex: '102',
                  display: 'none',
                  backgroundImage: './assets/images/instruction/9.png',
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
                  width: '32',
                  height: '42',
                  positionLeft: '40',
                  positionTop: '236',
                  zIndex: '102',
                  display: '',
                  backgroundImage: './assets/images/instruction/9.png',
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
              id: 'state03',
              isScroll: 1,
              style: {
                default: {
                  width: '32',
                  height: '42',
                  positionLeft: '40',
                  positionTop: '236',
                  zIndex: '102',
                  display: '',
                  backgroundImage: './assets/images/instruction/9.png',
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
        // J393 点击箭头 出现 J764 点击J764   出现 点击红圈提示按钮 出现的文字
        {
          id: 'page02-component61',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: '提示按钮出现的文字',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '150',
                  height: '',
                  positionLeft: '100',
                  positionTop: '234',
                  zIndex: '101',
                  backgroundColor: '#fff',
                  padding: '4px 10px',
                  border: '1px solid #aaa',
                  boxShadow: '0 0 6px 0',
                  borderRadius: '2px',
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
                  content: `相继更换（包括匹配）`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                },
                {
                  id: '',
                  order: '1',
                  content: `1.舒适控制单元和电控转向柱锁（索引 = D）`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                  isLF: true,
                },
                {
                  id: '',
                  order: '1',
                  content: `2.ECU`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                  isLF: true,
                }
              ],
            },
            {
              id: 'state02',
              isScroll: 1,
              style: {
                default: {
                  width: '300',
                  height: '',
                  positionLeft: '100',
                  positionTop: '234',
                  zIndex: '101',
                  backgroundColor: '#fff',
                  padding: '4px 10px',
                  border: '1px solid #aaa',
                  boxShadow: '0 0 6px 0',
                  borderRadius: '2px',
                  display: '',
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
                  content: `对 VAS 测试仪上的“新车辆 ID”进行排序：`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                },
                {
                  id: '',
                  order: '1',
                  content: `1.舒适控制单元  `,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                  isLF: true,
                },
                {
                  id: '',
                  order: '1',
                  content: `2.ECU  `,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                  isLF: true,
                },
                {
                  id: '',
                  order: '1',
                  content: `3.电控转向柱锁`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                  isLF: true,
                },
                {
                  id: '',
                  order: '1',
                  content: `4.匹配钥匙`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                  isLF: true,
                }
              ],
            },
          ],
        },
        // J393点击出现  红加号
        {
          id: 'page02-component62',
          type: 'button',
          passCondition: { event: '', state: '', },
          remark: 'J764图片',
          initialStateID: 'state01',
          src: './assets/images/instruction/12.png',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '38',
                  height: '38',
                  positionLeft: '450',
                  positionTop: '142',
                  zIndex: '100',
                  display: 'none',
                  backgroundImage: './assets/images/instruction/12.png',
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
                  width: '37',
                  height: '55',
                  positionLeft: '404',
                  positionTop: '247',
                  zIndex: '100',
                  display: '',
                  backgroundImage: './assets/images/instruction/12.png',
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



      ],
      publishArray: [
        // J623 提示图片鼠标悬浮
        {
          id: 'publish01',
          component: {
            id: 'page02-component05',
            stateID: '',
          },
          order: '1',
          triggerEvent: 'mouseenter',
          subscribeArray: [
            {
              // 遮罩层
              id: 'subscribe1',
              component: {
                id: 'page02-component06',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 遮罩层
              id: 'subscribe1',
              component: {
                id: 'page02-component05',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
          ],
        },
        // J623 提示图片鼠标离开
        {
          id: 'publish02',
          component: {
            id: 'page02-component05',
            stateID: '',
          },
          order: '1',
          triggerEvent: 'mouseleave',
          subscribeArray: [
            {
              // 遮罩层
              id: 'subscribe1',
              component: {
                id: 'page02-component06',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 遮罩层
              id: 'subscribe1',
              component: {
                id: 'page02-component05',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
          ],
        },
        // J623 提示图片鼠标点击
        {
          id: 'publish03',
          component: {
            id: 'page02-component05',
            stateID: '',
          },
          order: '1',
          triggerEvent: 'click',
          subscribeArray: [
            {
              id: 'subscribe1',
              component: {
                id: 'page02-component07',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe2',
              component: {
                id: 'page02-component08',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe3',
              component: {
                id: 'page02-component09',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe4',
              component: {
                id: 'page02-component10',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe5',
              component: {
                id: 'page02-component11',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe6',
              component: {
                id: 'page02-component12',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe7',
              component: {
                id: 'page02-component13',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe8',
              component: {
                id: 'page02-component14',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe9',
              component: {
                id: 'page02-component05',
                stateID: '',
              },
              timeOut: '0',
              setCurrentState: 'state03',
            },
            {
              id: 'subscribe10',
              component: {
                id: 'page02-component06',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },

          ],
        },
        // j764图片点击
        {
          id: 'publish04',
          component: {
            id: 'page02-component10',
            stateID: '',
          },
          order: '1',
          triggerEvent: 'click',
          subscribeArray: [
            {
              id: 'subscribe1',
              component: {
                id: 'page02-component07',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe2',
              component: {
                id: 'page02-component08',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe3',
              component: {
                id: 'page02-component09',
                stateID: '',
              },
              timeOut: '0',
              setCurrentState: 'state03',
            },
            {
              id: 'subscribe4',
              component: {
                id: 'page02-component10',
                stateID: '',
              },
              timeOut: '0',
              setCurrentState: 'state03',
            },
            {
              id: 'subscribe5',
              component: {
                id: 'page02-component11',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe6',
              component: {
                id: 'page02-component12',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe7',
              component: {
                id: 'page02-component13',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe8',
              component: {
                id: 'page02-component14',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe9',
              component: {
                id: 'page02-component15',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe9',
              component: {
                id: 'page02-component21',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },


          ],
        },
        // j764提示图片鼠标悬浮
        {
          id: 'publish05',
          component: {
            id: 'page02-component15',
            stateID: '',
          },
          order: '1',
          triggerEvent: 'mouseenter',
          subscribeArray: [
            {
              id: 'subscribe1',
              component: {
                id: 'page02-component16',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe2',
              component: {
                id: 'page02-component15',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state03',
            },
          ],
        },
        // j764提示图片鼠标离开
        {
          id: 'publish06',
          component: {
            id: 'page02-component15',
            stateID: '',
          },
          order: '1',
          triggerEvent: 'mouseleave',
          subscribeArray: [
            {
              id: 'subscribe1',
              component: {
                id: 'page02-component15',
                stateID: 'state03',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe2',
              component: {
                id: 'page02-component16',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
          ],
        },
        // 点火钥匙图片点击
        {
          id: 'publish07',
          component: {
            id: 'page02-component12',
            stateID: '',
          },
          order: '1',
          triggerEvent: 'click',
          subscribeArray: [
            {
              id: 'subscribe1',
              component: {
                id: 'page02-component07',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe2',
              component: {
                id: 'page02-component08',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe3',
              component: {
                id: 'page02-component09',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe4',
              component: {
                id: 'page02-component10',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe5',
              component: {
                id: 'page02-component11',
                stateID: '',
              },
              timeOut: '0',
              setCurrentState: 'state03',
            },
            {
              id: 'subscribe6',
              component: {
                id: 'page02-component12',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state03',
            },
            {
              id: 'subscribe7',
              component: {
                id: 'page02-component13',
                stateID: 'state02',
              },
              timeOut: '',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe8',
              component: {
                id: 'page02-component14',
                stateID: 'state02',
              },
              timeOut: '',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe9',
              component: {
                id: 'page02-component17',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe10',
              component: {
                id: 'page02-component22',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },

          ],
        },
        // 点火钥匙 提示图片鼠标悬浮
        {
          id: 'publish08',
          component: {
            id: 'page02-component17',
            stateID: '',
          },
          order: '1',
          triggerEvent: 'mouseenter',
          subscribeArray: [
            {
              id: 'subscribe1',
              component: {
                id: 'page02-component18',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe2',
              component: {
                id: 'page02-component17',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state03',
            },
          ],
        },
        //  点火钥匙 提示图片鼠标离开
        {
          id: 'publish09',
          component: {
            id: 'page02-component17',
            stateID: '',
          },
          order: '1',
          triggerEvent: 'mouseleave',
          subscribeArray: [
            {
              id: 'subscribe1',
              component: {
                id: 'page02-component17',
                stateID: 'state03',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe2',
              component: {
                id: 'page02-component18',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
          ],
        },
        // 两把点火钥匙图片点击
        {
          id: 'publish10',
          component: {
            id: 'page02-component14',
            stateID: '',
          },
          order: '1',
          triggerEvent: 'click',
          subscribeArray: [
            {
              id: 'subscribe1',
              component: {
                id: 'page02-component07',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe2',
              component: {
                id: 'page02-component08',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe3',
              component: {
                id: 'page02-component09',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe4',
              component: {
                id: 'page02-component10',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe5',
              component: {
                id: 'page02-component11',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe6',
              component: {
                id: 'page02-component12',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe7',
              component: {
                id: 'page02-component13',
                stateID: '',
              },
              timeOut: '0',
              setCurrentState: 'state03',
            },
            {
              id: 'subscribe8',
              component: {
                id: 'page02-component14',
                stateID: '',
              },
              timeOut: '0',
              setCurrentState: 'state03',
            },
            {
              id: 'subscribe9',
              component: {
                id: 'page02-component19',
                stateID: '',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe10',
              component: {
                id: 'page02-component23',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },

          ],
        },
        // 两把点火钥匙 提示图片鼠标悬浮
        {
          id: 'publish11',
          component: {
            id: 'page02-component19',
            stateID: '',
          },
          order: '1',
          triggerEvent: 'mouseenter',
          subscribeArray: [
            {
              id: 'subscribe1',
              component: {
                id: 'page02-component20',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe2',
              component: {
                id: 'page02-component19',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state03',
            },
          ],
        },
        //  两把点火钥匙 提示图片鼠标离开
        {
          id: 'publish12',
          component: {
            id: 'page02-component19',
            stateID: '',
          },
          order: '1',
          triggerEvent: 'mouseleave',
          subscribeArray: [
            {
              id: 'subscribe1',
              component: {
                id: 'page02-component20',
                stateID: 'state03',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe2',
              component: {
                id: 'page02-component20',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
          ],
        },
        // J393图片点击
        {
          id: 'publish13',
          component: {
            id: 'page02-component08',
            stateID: '',
          },
          order: '1',
          triggerEvent: 'click',
          subscribeArray: [
            {
              id: 'subscribe1',
              component: {
                id: 'page02-component07',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe2',
              component: {
                id: 'page02-component08',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe3',
              component: {
                id: 'page02-component09',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe4',
              component: {
                id: 'page02-component10',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe3',
              component: {
                id: 'page02-component24',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe4',
              component: {
                id: 'page02-component25',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe5',
              component: {
                id: 'page02-component11',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe6',
              component: {
                id: 'page02-component12',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe7',
              component: {
                id: 'page02-component13',
                stateID: 'state02',
              },
              timeOut: '',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe8',
              component: {
                id: 'page02-component14',
                stateID: 'state02',
              },
              timeOut: '',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe9',
              component: {
                id: 'page02-component26',
                stateID: 'state01',
              },
              timeOut: '',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe10',
              component: {
                id: 'page02-component27',
                stateID: 'state01',
              },
              timeOut: '',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe11',
              component: {
                id: 'page02-component29',
                stateID: 'state01',
              },
              timeOut: '',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe12',
              component: {
                id: 'page02-component57',
                stateID: 'state01',
              },
              timeOut: '',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe12',
              component: {
                id: 'page02-component58',
                stateID: 'state01',
              },
              timeOut: '',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe13',
              component: {
                id: 'page02-component62',
                stateID: 'state01',
              },
              timeOut: '',
              setCurrentState: 'state02',
            },
          ],
        },

        // J393图片点击 箭头提示图片鼠标悬浮
        {
          id: 'publish14',
          component: {
            id: 'page02-component29',
            stateID: '',
          },
          order: '1',
          triggerEvent: 'mouseenter',
          subscribeArray: [
            {
              id: 'subscribe1',
              component: {
                id: 'page02-component30',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 遮罩层
              id: 'subscribe1',
              component: {
                id: 'page02-component29',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state03',
            },
          ],
        },
        // J393图片点击 箭头提示图片鼠标离开
        {
          id: 'publish15',
          component: {
            id: 'page02-component29',
            stateID: '',
          },
          order: '1',
          triggerEvent: 'mouseleave',
          subscribeArray: [
            {
              // 遮罩层
              id: 'subscribe1',
              component: {
                id: 'page02-component30',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 遮罩层
              id: 'subscribe1',
              component: {
                id: 'page02-component29',
                stateID: 'state03',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
          ],
        },
        // J393图片点击 箭头提示图片鼠标点击
        {
          id: 'publish16',
          component: {
            id: 'page02-component29',
            stateID: '',
          },
          order: '1',
          triggerEvent: 'click',
          subscribeArray: [
            {
              id: 'subscribe1',
              component: {
                id: 'page02-component31',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page02-component32',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page02-component33',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page02-component34',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page02-component35',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page02-component36',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page02-component29',
                stateID: '',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page02-component30',
                stateID: '',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page02-component27',
                stateID: '',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },

          ],
        },

        // J393图片点击 红圈提示图片鼠标悬浮
        {
          id: 'publish17',
          component: {
            id: 'page02-component27',
            stateID: '',
          },
          order: '1',
          triggerEvent: 'mouseenter',
          subscribeArray: [
            {
              id: 'subscribe1',
              component: {
                id: 'page02-component28',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe2',
              component: {
                id: 'page02-component27',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state03',
            },
          ],
        },
        // J393图片点击 红圈提示图片鼠标离开
        {
          id: 'publish18',
          component: {
            id: 'page02-component27',
            stateID: '',
          },
          order: '1',
          triggerEvent: 'mouseleave',
          subscribeArray: [
            {
              id: 'subscribe2',
              component: {
                id: 'page02-component28',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page02-component27',
                stateID: 'state03',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
          ],
        },

        // J393 点击箭头 出现 点火钥匙 图片 点击
        {
          id: 'publish19',
          component: {
            id: 'page02-component34',
            stateID: '',
          },
          order: '1',
          triggerEvent: 'click',
          subscribeArray: [
            {
              id: 'subscribe2',
              component: {
                id: 'page02-component37',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe2',
              component: {
                id: 'page02-component38',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe3',
              component: {
                id: 'page02-component31',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe4',
              component: {
                id: 'page02-component32',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe4',
              component: {
                id: 'page02-component33',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe4',
              component: {
                id: 'page02-component34',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe4',
              component: {
                id: 'page02-component35',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe4',
              component: {
                id: 'page02-component36',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe4',
              component: {
                id: 'page02-component39',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe4',
              component: {
                id: 'page02-component40',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe4',
              component: {
                id: 'page02-component41',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe4',
              component: {
                id: 'page02-component62',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
          ],
        },
        // J393 点击箭头 出现 点火钥匙点击 出现红圈 红圈提示图片鼠标悬浮
        {
          id: 'publish20',
          component: {
            id: 'page02-component41',
            stateID: '',
          },
          order: '1',
          triggerEvent: 'mouseenter',
          subscribeArray: [
            {
              id: 'subscribe1',
              component: {
                id: 'page02-component42',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe2',
              component: {
                id: 'page02-component41',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state03',
            },
          ],
        },
        // J393 点击箭头 出现 点火钥匙点击 出现红圈 红圈提示图片鼠标离开
        {
          id: 'publish21',
          component: {
            id: 'page02-component41',
            stateID: '',
          },
          order: '1',
          triggerEvent: 'mouseleave',
          subscribeArray: [
            {
              id: 'subscribe2',
              component: {
                id: 'page02-component42',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page02-component41',
                stateID: 'state03',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
          ],
        },

        // J393 点击箭头 出现 两把点火钥匙 图片 点击
        {
          id: 'publish22',
          component: {
            id: 'page02-component36',
            stateID: '',
          },
          order: '1',
          triggerEvent: 'click',
          subscribeArray: [

            {
              id: 'subscribe1',
              component: {
                id: 'page02-component31',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe2',
              component: {
                id: 'page02-component32',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe3',
              component: {
                id: 'page02-component33',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe4',
              component: {
                id: 'page02-component34',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe5',
              component: {
                id: 'page02-component35',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe6',
              component: {
                id: 'page02-component36',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe7',
              component: {
                id: 'page02-component43',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe8',
              component: {
                id: 'page02-component44',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe9',
              component: {
                id: 'page02-component45',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe10',
              component: {
                id: 'page02-component46',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe11',
              component: {
                id: 'page02-component47',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe4',
              component: {
                id: 'page02-component62',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
          ],
        },
        // J393 点击箭头 出现 点火钥匙点击 出现红圈 红圈提示图片鼠标悬浮
        {
          id: 'publish23',
          component: {
            id: 'page02-component47',
            stateID: '',
          },
          order: '1',
          triggerEvent: 'mouseenter',
          subscribeArray: [
            {
              id: 'subscribe1',
              component: {
                id: 'page02-component48',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe2',
              component: {
                id: 'page02-component47',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state03',
            },
          ],
        },
        // J393 点击箭头 出现 点火钥匙点击 出现红圈 红圈提示图片鼠标离开
        {
          id: 'publish24',
          component: {
            id: 'page02-component47',
            stateID: '',
          },
          order: '1',
          triggerEvent: 'mouseleave',
          subscribeArray: [
            {
              id: 'subscribe2',
              component: {
                id: 'page02-component48',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page02-component47',
                stateID: 'state03',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
          ],
        },
        // J393 点击箭头 出现 J764 图片 点击 J764 图片
        {
          id: 'publish25',
          component: {
            id: 'page02-component32',
            stateID: '',
          },
          order: '1',
          triggerEvent: 'click',
          subscribeArray: [
            {
              id: 'subscribe3',
              component: {
                id: 'page02-component31',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe4',
              component: {
                id: 'page02-component32',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe4',
              component: {
                id: 'page02-component33',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe4',
              component: {
                id: 'page02-component34',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe4',
              component: {
                id: 'page02-component35',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe4',
              component: {
                id: 'page02-component36',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe4',
              component: {
                id: 'page02-component02',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe4',
              component: {
                id: 'page02-component03',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe4',
              component: {
                id: 'page02-component04',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe4',
              component: {
                id: 'page02-component07',
                stateID: '',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe4',
              component: {
                id: 'page02-component08',
                stateID: '',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe4',
              component: {
                id: 'page02-component24',
                stateID: '',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe4',
              component: {
                id: 'page02-component25',
                stateID: '',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe4',
              component: {
                id: 'page02-component26',
                stateID: '',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe4',
              component: {
                id: 'page02-component57',
                stateID: '',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe4',
              component: {
                id: 'page02-component58',
                stateID: '',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe4',
              component: {
                id: 'page02-component49',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe4',
              component: {
                id: 'page02-component50',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe4',
              component: {
                id: 'page02-component51',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe4',
              component: {
                id: 'page02-component52',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe4',
              component: {
                id: 'page02-component53',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe4',
              component: {
                id: 'page02-component54',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe4',
              component: {
                id: 'page02-component55',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe4',
              component: {
                id: 'page02-component56',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe4',
              component: {
                id: 'page02-component59',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe4',
              component: {
                id: 'page02-component60',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe4',
              component: {
                id: 'page02-component61',
                stateID: '',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe4',
              component: {
                id: 'page02-component62',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
          ],
        },
        // J393 点击箭头 出现 J764 图片 点击 J764 图片 出现红圈 红圈提示图片鼠标悬浮
        {
          id: 'publish23',
          component: {
            id: 'page02-component60',
            stateID: '',
          },
          order: '1',
          triggerEvent: 'mouseenter',
          subscribeArray: [
            {
              id: 'subscribe1',
              component: {
                id: 'page02-component61',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe2',
              component: {
                id: 'page02-component60',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state03',
            },
          ],
        },
        // J393 点击箭头 出现 J764 图片 点击 J764 图片 出现红圈 红圈提示图片鼠标离开
        {
          id: 'publish24',
          component: {
            id: 'page02-component60',
            stateID: '',
          },
          order: '1',
          triggerEvent: 'mouseleave',
          subscribeArray: [
            {
              id: 'subscribe2',
              component: {
                id: 'page02-component61',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page02-component60',
                stateID: 'state03',
              },
              timeOut: '0',
              setCurrentState: 'state02',
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
    // J393 页面
    {
      id: 'page03',
      isPass: 1,
      order: '1',
      chapterID: 'chapter01',
      componentArray: [
        // J393 文字
        {
          id: 'page03-component01',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: 'J393',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '',
                  height: '',
                  positionLeft: '368',
                  positionTop: '186',
                  zIndex: '1',
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
                  content: 'J393',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
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
                  positionLeft: '368',
                  positionTop: '186',
                  zIndex: '1',
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
                  content: 'J393',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },
        // J393图片
        {
          id: 'page03-component02',
          type: 'button',
          passCondition: { event: '', state: '', },
          remark: 'J393图片',
          initialStateID: 'state01',
          src: './assets/images/instruction/1.png',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '32',
                  height: '49',
                  positionLeft: '370',
                  positionTop: '128',
                  zIndex: '100',
                  display: '',
                  backgroundImage: './assets/images/instruction/1.png',
                },
                hover: {
                  cursor: 'pointer',
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
                  width: '420',
                  height: '240',
                  positionLeft: '300',
                  positionTop: '170',
                  zIndex: '1001',
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

        // J393点击出现  J764文字
        {
          id: 'page03-component03',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: 'J764',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '',
                  height: '',
                  positionLeft: '534',
                  positionTop: '186',
                  zIndex: '1',
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
                  content: 'J764',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
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
                  positionLeft: '469',
                  positionTop: '303',
                  zIndex: '1',
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
                  content: 'J764',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },
        // J393点击出现  J764图片
        {
          id: 'page03-component04',
          type: 'button',
          passCondition: { event: '', state: '', },
          remark: 'J764图片',
          initialStateID: 'state01',
          src: './assets/images/instruction/3.png',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '37',
                  height: '55',
                  positionLeft: '530',
                  positionTop: '126',
                  zIndex: '100',
                  backgroundImage: './assets/images/instruction/3.png',
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
                  width: '37',
                  height: '55',
                  positionLeft: '465',
                  positionTop: '241',
                  zIndex: '100',
                  display: 'none',
                  backgroundImage: './assets/images/instruction/3.png',
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
        // J393点击出现  文字1
        {
          id: 'page03-component05',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: '文字',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '',
                  height: '',
                  positionLeft: '244',
                  positionTop: '242',
                  zIndex: '1',
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
                  content: '舒适控制单元更换新的部件、电控转向柱锁仅在旧的索引 = D 时予以更换',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '',
                    textAlign: '',
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
                  positionLeft: '220',
                  positionTop: '333',
                  zIndex: '1',
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
                  content: '舒适控制单元更换新的部件、电控转向柱锁仅在旧的索引 = D 时予以更换',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },
        // J393点击出现  红加号
        {
          id: 'page03-component06',
          type: 'button',
          passCondition: { event: '', state: '', },
          remark: 'J764图片',
          initialStateID: 'state01',
          src: './assets/images/instruction/12.png',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '38',
                  height: '38',
                  positionLeft: '450',
                  positionTop: '142',
                  zIndex: '100',
                  backgroundImage: './assets/images/instruction/12.png',
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
                  width: '37',
                  height: '55',
                  positionLeft: '465',
                  positionTop: '142',
                  zIndex: '100',
                  display: 'none',
                  backgroundImage: './assets/images/instruction/3.png',
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
        // J393点击出现 箭头提示图片
        {
          id: 'page03-component07',
          type: 'button',
          passCondition: { event: '', state: '', },
          remark: '提示图片',
          initialStateID: 'state01',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '40',
                  height: '15',
                  positionLeft: '100',
                  positionTop: '310',
                  zIndex: '100',
                  backgroundImage: './assets/images/instruction/8.png',
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
                  width: '40',
                  height: '15',
                  positionLeft: '100',
                  positionTop: '310',
                  zIndex: '100',
                  display: '',
                  backgroundImage: './assets/images/instruction/8.png',
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
                  width: '40',
                  height: '15',
                  positionLeft: '100',
                  positionTop: '310',
                  zIndex: '100',
                  backgroundImage: './assets/images/instruction/8.png',
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
        // J393悬浮出现 箭头提示图片出现的文字
        {
          id: 'page03-component08',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: '提示按钮出现的文字',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '155',
                  height: '',
                  positionLeft: '150',
                  positionTop: '304',
                  zIndex: '2',
                  backgroundColor: '#fff',
                  padding: '4px 10px',
                  border: '1px solid #aaa',
                  boxShadow: '0 0 6px 0',
                  borderRadius: '2px',
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
                  content: `是否有其它部件一同更换`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                }
              ],
            },
            {
              id: 'state02',
              isScroll: 1,
              style: {
                default: {
                  width: '155',
                  height: '',
                  positionLeft: '150',
                  positionTop: '304',
                  zIndex: '2',
                  backgroundColor: '#fff',
                  padding: '4px 10px',
                  border: '1px solid #aaa',
                  boxShadow: '0 0 6px 0',
                  borderRadius: '2px',
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
                  content: `是否有其它部件一同更换`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },

        // J393 点击箭头 出现  出现 J764 文字
        {
          id: 'page03-component09',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: 'J764',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '',
                  height: '',
                  positionLeft: '350',
                  positionTop: '336',
                  zIndex: '1',
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
                  content: 'J764',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
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
                  positionLeft: '305',
                  positionTop: '382',
                  zIndex: '1',
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
                  content: 'J764',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },
        // J393 点击箭头 出现  出现 J764图片
        {
          id: 'page03-component10',
          type: 'button-tip',
          passCondition: { event: '', state: '', },
          remark: 'J764图片',
          initialStateID: 'state01',
          src: './assets/images/instruction/3.png',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '37',
                  height: '55',
                  positionLeft: '346',
                  positionTop: '400',
                  zIndex: '100',
                  display: 'none',
                  backgroundImage: './assets/images/instruction/3.png',
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
                  width: '37',
                  height: '55',
                  positionLeft: '300',
                  positionTop: '320',
                  zIndex: '100',
                  display: '',
                  backgroundImage: './assets/images/instruction/3.png',
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
        // J393 点击箭头 出现  出现  点火钥匙 文字
        {
          id: 'page03-component11',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: '点火钥匙',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '',
                  height: '',
                  positionLeft: '451',
                  positionTop: '336',
                  zIndex: '1',
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
                  content: '点火钥匙',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
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
                  positionLeft: '443',
                  positionTop: '383',
                  zIndex: '1',
                  display: ''
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
                  content: '点火钥匙',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
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
                  width: '',
                  height: '',
                  positionLeft: '443',
                  positionTop: '359',
                  zIndex: '1',
                  display: ''
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
                  content: '点火钥匙',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },
        // J393 点击箭头 出现 出现 点火钥匙 图片
        {
          id: 'page03-component12',
          type: 'button-tip',
          passCondition: { event: '', state: '', },
          remark: '点火钥匙图片',
          initialStateID: 'state01',
          src: './assets/images/instruction/4.png',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '36',
                  height: '41',
                  positionLeft: '456',
                  positionTop: '400',
                  zIndex: '100',
                  display: 'none',
                  backgroundImage: './assets/images/instruction/4.png',
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
                  width: '36',
                  height: '41',
                  positionLeft: '449',
                  positionTop: '328',
                  zIndex: '100',
                  display: '',
                  backgroundImage: './assets/images/instruction/4.png',
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
                  width: '36',
                  height: '41',
                  positionLeft: '449',
                  positionTop: '312',
                  zIndex: '100',
                  display: '',
                  backgroundImage: './assets/images/instruction/4.png',
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
        // J393 点击箭头   出现 两把点火钥匙 文字
        {
          id: 'page03-component13',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: '两把点火钥匙',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '',
                  height: '',
                  positionLeft: '451',
                  positionTop: '372',
                  zIndex: '1',
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
                  content: '两把点火钥匙',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
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
                  positionLeft: '591',
                  positionTop: '384',
                  zIndex: '1',
                  display: ''
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
                  content: '两把点火钥匙',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
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
                  width: '',
                  height: '',
                  positionLeft: '443',
                  positionTop: '359',
                  zIndex: '1',
                  display: ''
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
                  content: '两把点火钥匙',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },
        // J393  点击箭头   出现 两把点火钥匙 图片
        {
          id: 'page03-component14',
          type: 'button-tip',
          passCondition: { event: '', state: '', },
          remark: '点火钥匙图片',
          initialStateID: 'state01',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '66',
                  height: '41',
                  positionLeft: '456',
                  positionTop: '400',
                  zIndex: '100',
                  display: 'none',
                  backgroundImage: './assets/images/instruction/7.png',
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
                  width: '66',
                  height: '41',
                  positionLeft: '592',
                  positionTop: '327',
                  zIndex: '100',
                  display: '',
                  backgroundImage: './assets/images/instruction/7.png',
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
                  width: '66',
                  height: '41',
                  positionLeft: '449',
                  positionTop: '312',
                  zIndex: '100',
                  display: '',
                  backgroundImage: './assets/images/instruction/7.png',
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

        // J393 点击箭头 出现 点火钥匙 图片 点击图片  出现 红圈提示按钮
        {
          id: 'page03-component15',
          type: 'button',
          passCondition: { event: '', state: '', },
          remark: '两把点火钥匙提示按钮',
          initialStateID: 'state01',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '32',
                  height: '42',
                  positionLeft: '40',
                  positionTop: '236',
                  zIndex: '102',
                  display: 'none',
                  backgroundImage: './assets/images/instruction/9.png',
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
                  width: '32',
                  height: '42',
                  positionLeft: '40',
                  positionTop: '236',
                  zIndex: '102',
                  display: '',
                  backgroundImage: './assets/images/instruction/9.png',
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
              id: 'state03',
              isScroll: 1,
              style: {
                default: {
                  width: '32',
                  height: '42',
                  positionLeft: '40',
                  positionTop: '236',
                  zIndex: '102',
                  display: '',
                  backgroundImage: './assets/images/instruction/9.png',
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
        // J393 点击箭头 出现 点火钥匙 图片 点击图片   出现 点击红圈提示按钮 出现的文字
        {
          id: 'page03-component16',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: '提示按钮出现的文字',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '150',
                  height: '',
                  positionLeft: '100',
                  positionTop: '234',
                  zIndex: '101',
                  backgroundColor: '#fff',
                  padding: '4px 10px',
                  border: '1px solid #aaa',
                  boxShadow: '0 0 6px 0',
                  borderRadius: '2px',
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
                  content: `相继更换（包括匹配）`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                },
                {
                  id: '',
                  order: '1',
                  content: `1.舒适控制单元和电控转向柱锁（索引 = D）`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                  isLF: true,
                },
              ],
            },
            {
              id: 'state02',
              isScroll: 1,
              style: {
                default: {
                  width: '200',
                  height: '',
                  positionLeft: '100',
                  positionTop: '234',
                  zIndex: '101',
                  backgroundColor: '#fff',
                  padding: '4px 10px',
                  border: '1px solid #aaa',
                  boxShadow: '0 0 6px 0',
                  borderRadius: '2px',
                  display: '',
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
                  content: `1.更换/匹配舒适控制单元和电控转向柱锁与已授权的钥匙 `,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                },
                {
                  id: '',
                  order: '1',
                  content: `2.匹配钥匙`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                  isLF: true,
                },
              ],
            },
          ],
        },
        // 393 点击箭头 出现 点火钥匙 图片 点击图片   点火钥匙 下方文字
        {
          id: 'page03-component17',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: '两把点火钥匙',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '',
                  height: '',
                  positionLeft: '451',
                  positionTop: '372',
                  zIndex: '1',
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
                  content: '一把全新的钥匙、匹配原车钥匙',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '',
                    textAlign: '',
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
                  positionLeft: '378',
                  positionTop: '384',
                  zIndex: '1',
                  display: ''
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
                  content: '一把全新的钥匙、匹配原车钥匙',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },


        // J393 点击箭头 出现 两把点火钥匙 图片 点击图片  出现 红圈提示按钮
        {
          id: 'page03-component18',
          type: 'button',
          passCondition: { event: '', state: '', },
          remark: '两把点火钥匙提示按钮',
          initialStateID: 'state01',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '32',
                  height: '42',
                  positionLeft: '40',
                  positionTop: '236',
                  zIndex: '102',
                  display: 'none',
                  backgroundImage: './assets/images/instruction/9.png',
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
                  width: '32',
                  height: '42',
                  positionLeft: '40',
                  positionTop: '236',
                  zIndex: '102',
                  display: '',
                  backgroundImage: './assets/images/instruction/9.png',
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
              id: 'state03',
              isScroll: 1,
              style: {
                default: {
                  width: '32',
                  height: '42',
                  positionLeft: '40',
                  positionTop: '236',
                  zIndex: '102',
                  display: '',
                  backgroundImage: './assets/images/instruction/9.png',
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
        // J393 点击箭头 出现 两把点火钥匙 图片 点击图片   出现 点击红圈提示按钮 出现的文字
        {
          id: 'page03-component19',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: '提示按钮出现的文字',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '150',
                  height: '',
                  positionLeft: '100',
                  positionTop: '234',
                  zIndex: '101',
                  backgroundColor: '#fff',
                  padding: '4px 10px',
                  border: '1px solid #aaa',
                  boxShadow: '0 0 6px 0',
                  borderRadius: '2px',
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
                  content: `1.匹配钥匙 `,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                },
                {
                  id: '',
                  order: '1',
                  content: `1.舒适控制单元和电控转向柱锁（索引 = D）`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                  isLF: true,
                },
              ],
            },
            {
              id: 'state02',
              isScroll: 1,
              style: {
                default: {
                  width: '200',
                  height: '',
                  positionLeft: '100',
                  positionTop: '234',
                  zIndex: '101',
                  backgroundColor: '#fff',
                  padding: '4px 10px',
                  border: '1px solid #aaa',
                  boxShadow: '0 0 6px 0',
                  borderRadius: '2px',
                  display: '',
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
                  content: `1.匹配钥匙`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                },
                {
                  id: '',
                  order: '1',
                  content: `2.更换/匹配舒适控制单元（如果有另一把可用的已授权钥匙，则转至一把钥匙的匹配步骤）`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                  isLF: true,
                },
              ],
            },
          ],
        },
        // 393 点击箭头 出现 两把点火钥匙 图片 点击图片   点火钥匙 下方文字
        {
          id: 'page03-component20',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: '两把点火钥匙',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '',
                  height: '',
                  positionLeft: '451',
                  positionTop: '372',
                  zIndex: '1',
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
                  content: '一把全新的钥匙、匹配原车钥匙',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '',
                    textAlign: '',
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
                  positionLeft: '378',
                  positionTop: '384',
                  zIndex: '1',
                  display: ''
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
                  content: '两把全新钥匙、如有另一把可用的已授权钥匙时，仅可使用旧零件',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },



        // 393 点击箭头 出现 J647 点击j647图片 出现  j647文字
        {
          id: 'page03-component21',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: 'J764',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '',
                  height: '',
                  positionLeft: '350',
                  positionTop: '336',
                  zIndex: '1',
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
                  content: 'J764',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
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
                  positionLeft: '421',
                  positionTop: '333',
                  zIndex: '1',
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
                  content: 'J764',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },
        // 393 点击箭头 出现 J647 点击j647图片 出现  j647图片
        {
          id: 'page03-component22',
          type: 'button',
          passCondition: { event: '', state: '', },
          remark: 'J764图片',
          initialStateID: 'state01',
          src: './assets/images/instruction/3.png',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '37',
                  height: '55',
                  positionLeft: '346',
                  positionTop: '400',
                  zIndex: '100',
                  display: 'none',
                  backgroundImage: './assets/images/instruction/3.png',
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
                  width: '37',
                  height: '55',
                  positionLeft: '417',
                  positionTop: '269',
                  zIndex: '100',
                  display: '',
                  backgroundImage: './assets/images/instruction/3.png',
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
        // 393 点击箭头 出现 J647 点击j647图片 出现   j647图片 下方文字
        {
          id: 'page03-component23',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: '两把点火钥匙',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '',
                  height: '',
                  positionLeft: '451',
                  positionTop: '372',
                  zIndex: '1',
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
                  content: '一把全新的钥匙、匹配原车钥匙',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '',
                    textAlign: '',
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
                  positionLeft: '357',
                  positionTop: '361',
                  zIndex: '1',
                  display: ''
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
                  content: '电动转向柱锁更换新的部件',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },
        // 393 点击箭头 出现 J647 点击j647图片 出现 红圈提示按钮
        {
          id: 'page03-component24',
          type: 'button',
          passCondition: { event: '', state: '', },
          remark: '两把点火钥匙提示按钮',
          initialStateID: 'state01',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '32',
                  height: '42',
                  positionLeft: '40',
                  positionTop: '236',
                  zIndex: '102',
                  display: 'none',
                  backgroundImage: './assets/images/instruction/9.png',
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
                  width: '32',
                  height: '42',
                  positionLeft: '40',
                  positionTop: '236',
                  zIndex: '102',
                  display: '',
                  backgroundImage: './assets/images/instruction/9.png',
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
              id: 'state03',
              isScroll: 1,
              style: {
                default: {
                  width: '32',
                  height: '42',
                  positionLeft: '40',
                  positionTop: '236',
                  zIndex: '102',
                  display: '',
                  backgroundImage: './assets/images/instruction/9.png',
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
        // 393 点击箭头 出现 J647 点击j647图片 出现 点击红圈提示按钮 出现的文字
        {
          id: 'page03-component25',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: '提示按钮出现的文字',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '150',
                  height: '',
                  positionLeft: '100',
                  positionTop: '234',
                  zIndex: '101',
                  backgroundColor: '#fff',
                  padding: '4px 10px',
                  border: '1px solid #aaa',
                  boxShadow: '0 0 6px 0',
                  borderRadius: '2px',
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
                  content: `相继更换（包括匹配）`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                },
                {
                  id: '',
                  order: '1',
                  content: `1.舒适控制单元和电控转向柱锁（索引 = D）`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                  isLF: true,
                },
              ],
            },
            {
              id: 'state02',
              isScroll: 1,
              style: {
                default: {
                  width: '200',
                  height: '',
                  positionLeft: '100',
                  positionTop: '234',
                  zIndex: '101',
                  backgroundColor: '#fff',
                  padding: '4px 10px',
                  border: '1px solid #aaa',
                  boxShadow: '0 0 6px 0',
                  borderRadius: '2px',
                  display: '',
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
                  content: `按照 VAS 测试仪（电控转向柱锁和防盗锁止系统的更换程序）规定的顺序执行作业`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                },

              ],
            },
          ],
        },
        // 393 点击箭头 出现 J647 点击j647图片 出现 J393 文字
        {
          id: 'page03-component26',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: 'J393',
          src: '',
          stateArray: [
            {
              id: 'state02',
              isScroll: 1,
              style: {
                default: {
                  width: '',
                  height: '',
                  positionLeft: '420',
                  positionTop: '183',
                  zIndex: '1',
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
                  content: 'J393',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
                  },
                }
              ],
            },
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '',
                  height: '',
                  positionLeft: '424',
                  positionTop: '333',
                  zIndex: '1',
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
                  content: 'J393',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },
        // 393 点击箭头 出现 J647 点击j647图片 出现 J393图片
        {
          id: 'page03-component27',
          type: 'button',
          passCondition: { event: '', state: '', },
          remark: 'J393图片',
          initialStateID: 'state01',
          src: './assets/images/instruction/1.png',
          stateArray: [
            {
              id: 'state02',
              isScroll: 1,
              style: {
                default: {
                  width: '32',
                  height: '49',
                  positionLeft: '420',
                  positionTop: '128',
                  zIndex: '100',
                  display: '',
                  backgroundImage: './assets/images/instruction/1.png',
                },
                hover: {
                  cursor: 'pointer',
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
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '420',
                  height: '270',
                  positionLeft: '300',
                  positionTop: '170',
                  zIndex: '1001',
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
        // 393 点击箭头 出现 J647 点击j647图片 出现   J393图片 下方文字
        {
          id: 'page03-component28',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: '两把点火钥匙',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '',
                  height: '',
                  positionLeft: '451',
                  positionTop: '372',
                  zIndex: '1',
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
                  content: '舒适控制单元更换新的部件',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '',
                    textAlign: '',
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
                  positionLeft: '357',
                  positionTop: '217',
                  zIndex: '1',
                  display: ''
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
                  content: '舒适控制单元更换新的部件',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },
        // 393 点击箭头 出现 J647 点击j647图片 出现 箭头提示图片
        {
          id: 'page03-component29',
          type: 'button',
          passCondition: { event: '', state: '', },
          remark: '提示图片',
          initialStateID: 'state01',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '40',
                  height: '15',
                  positionLeft: '100',
                  positionTop: '420px',
                  zIndex: '100',
                  display: 'none',
                  backgroundImage: './assets/images/instruction/8.png',
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
                  height: '15',
                  positionLeft: '100',
                  positionTop: '420px',
                  zIndex: '100',
                  display: '',
                  backgroundImage: './assets/images/instruction/8.png',
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

        // 393 点击箭头 出现 J647 点击j647图片  点击箭头提示图片   出现点火钥匙 文字
        {
          id: 'page03-component30',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: '点火钥匙',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '',
                  height: '',
                  positionLeft: '451',
                  positionTop: '336',
                  zIndex: '1',
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
                  content: '点火钥匙',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
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
                  positionLeft: '292',
                  positionTop: '470',
                  zIndex: '1',
                  display: ''
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
                  content: '点火钥匙',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },
        // 393 点击箭头 出现 J647 点击j647图片  点击箭头提示图片   出现点火钥匙  图片
        {
          id: 'page03-component31',
          type: 'button-tip',
          passCondition: { event: '', state: '', },
          remark: '点火钥匙图片',
          initialStateID: 'state01',
          src: './assets/images/instruction/4.png',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '36',
                  height: '41',
                  positionLeft: '456',
                  positionTop: '400',
                  zIndex: '100',
                  display: 'none',
                  backgroundImage: './assets/images/instruction/4.png',
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
                  width: '36',
                  height: '41',
                  positionLeft: '300',
                  positionTop: '420',
                  zIndex: '100',
                  display: '',
                  backgroundImage: './assets/images/instruction/4.png',
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
        // 393 点击箭头 出现 J647 点击j647图片  点击箭头提示图片 两把点火钥匙 文字
        {
          id: 'page03-component32',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: '两把点火钥匙',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '',
                  height: '',
                  positionLeft: '451',
                  positionTop: '420',
                  zIndex: '1',
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
                  content: '两把点火钥匙',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
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
                  positionLeft: '519',
                  positionTop: '479',
                  zIndex: '1',
                  display: ''
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
                  content: '两把点火钥匙',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
                  },
                }
              ],
            },

          ],
        },
        // 393 点击箭头 出现 J647 点击j647图片  点击箭头提示图片 两把点火钥匙 图片
        {
          id: 'page03-component33',
          type: 'button-tip',
          passCondition: { event: '', state: '', },
          remark: '点火钥匙图片',
          initialStateID: 'state01',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '66',
                  height: '41',
                  positionLeft: '456',
                  positionTop: '400',
                  zIndex: '100',
                  display: 'none',
                  backgroundImage: './assets/images/instruction/7.png',
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
                  width: '66',
                  height: '41',
                  positionLeft: '525',
                  positionTop: '420',
                  zIndex: '100',
                  display: '',
                  backgroundImage: './assets/images/instruction/7.png',
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


        // 393 点击箭头 出现 J647 点击j647图片  箭头提示图片   点击点火钥匙   出现 点火钥匙文字
        {
          id: 'page03-component34',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: '点火钥匙',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '',
                  height: '',
                  positionLeft: '451',
                  positionTop: '336',
                  zIndex: '1',
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
                  content: '点火钥匙',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
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
                  positionLeft: '417',
                  positionTop: '458',
                  zIndex: '1',
                  display: ''
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
                  content: '点火钥匙',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },
        // 393 点击箭头 出现 J647 点击j647图片  箭头提示图片   点击点火钥匙   出现 点火钥匙图片
        {
          id: 'page03-component35',
          type: 'button',
          passCondition: { event: '', state: '', },
          remark: '点火钥匙图片',
          initialStateID: 'state01',
          src: './assets/images/instruction/4.png',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '36',
                  height: '41',
                  positionLeft: '456',
                  positionTop: '400',
                  zIndex: '100',
                  display: 'none',
                  backgroundImage: './assets/images/instruction/4.png',
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
                  width: '36',
                  height: '41',
                  positionLeft: '422',
                  positionTop: '410',
                  zIndex: '100',
                  display: '',
                  backgroundImage: './assets/images/instruction/4.png',
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
        // 393 点击箭头 出现 J647 点击j647图片  箭头提示图片   点击点火钥匙   出现  点火钥匙图片下方文字
        {
          id: 'page03-component36',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: '两把点火钥匙',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '',
                  height: '',
                  positionLeft: '249',
                  positionTop: '372',
                  zIndex: '1',
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
                  content: '一把全新的钥匙、匹配原车钥匙',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '',
                    textAlign: '',
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
                  positionLeft: '383',
                  positionTop: '485',
                  zIndex: '1',
                  display: ''
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
                  content: '一把全新的点火钥匙',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },
        // 393 点击箭头 出现 J647 点击j647图片  箭头提示图片   点击点火钥匙 出现 红圈提示按钮
        {
          id: 'page03-component37',
          type: 'button',
          passCondition: { event: '', state: '', },
          remark: '两把点火钥匙提示按钮',
          initialStateID: 'state01',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '32',
                  height: '42',
                  positionLeft: '40',
                  positionTop: '236',
                  zIndex: '102',
                  display: 'none',
                  backgroundImage: './assets/images/instruction/9.png',
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
                  width: '32',
                  height: '42',
                  positionLeft: '40',
                  positionTop: '236',
                  zIndex: '102',
                  display: '',
                  backgroundImage: './assets/images/instruction/9.png',
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
              id: 'state03',
              isScroll: 1,
              style: {
                default: {
                  width: '32',
                  height: '42',
                  positionLeft: '40',
                  positionTop: '236',
                  zIndex: '102',
                  display: '',
                  backgroundImage: './assets/images/instruction/9.png',
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
        // 393 点击箭头 出现 J647 点击j647图片  箭头提示图片   点击点火钥匙片 出现 点击红圈提示按钮 出现的文字
        {
          id: 'page03-component38',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: '提示按钮出现的文字',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '150',
                  height: '',
                  positionLeft: '100',
                  positionTop: '234',
                  zIndex: '101',
                  backgroundColor: '#fff',
                  padding: '4px 10px',
                  border: '1px solid #aaa',
                  boxShadow: '0 0 6px 0',
                  borderRadius: '2px',
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
                  content: `相继更换（包括匹配）`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                },
                {
                  id: '',
                  order: '1',
                  content: `1.舒适控制单元和电控转向柱锁（索引 = D）`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                  isLF: true,
                },
              ],
            },
            {
              id: 'state02',
              isScroll: 1,
              style: {
                default: {
                  width: '150',
                  height: '',
                  positionLeft: '100',
                  positionTop: '234',
                  zIndex: '101',
                  backgroundColor: '#fff',
                  padding: '4px 10px',
                  border: '1px solid #aaa',
                  boxShadow: '0 0 6px 0',
                  borderRadius: '2px',
                  display: '',
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
                  content: `相继更换（包括匹配）`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                },
                {
                  id: '',
                  order: '1',
                  content: `1.舒适控制单元和电控转向柱锁`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                  isLF: true,
                },
                {
                  id: '',
                  order: '1',
                  content: `2.匹配钥匙`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                  isLF: true,
                },

              ],
            },
          ],
        },


        // 393 点击箭头 出现 J647 点击j647图片  箭头提示图片   点击两把点火钥匙   出现 两把点火钥匙文字
        {
          id: 'page03-component39',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: '两把点火钥匙',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '',
                  height: '',
                  positionLeft: '451',
                  positionTop: '372',
                  zIndex: '1',
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
                  content: '两把点火钥匙',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
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
                  positionLeft: '417',
                  positionTop: '458',
                  zIndex: '1',
                  display: ''
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
                  content: '两把点火钥匙',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
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
                  width: '',
                  height: '',
                  positionLeft: '443',
                  positionTop: '359',
                  zIndex: '1',
                  display: ''
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
                  content: '两把点火钥匙',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },
        // 393 点击箭头 出现 J647 点击j647图片  箭头提示图片   点击两把点火钥匙   出现 两把点火钥匙图片
        {
          id: 'page03-component40',
          type: 'button',
          passCondition: { event: '', state: '', },
          remark: '点火钥匙图片',
          initialStateID: 'state01',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '66',
                  height: '41',
                  positionLeft: '422',
                  positionTop: '410',
                  zIndex: '100',
                  display: 'none',
                  backgroundImage: './assets/images/instruction/7.png',
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
                  width: '66',
                  height: '41',
                  positionLeft: '422',
                  positionTop: '410',
                  zIndex: '100',
                  display: '',
                  backgroundImage: './assets/images/instruction/7.png',
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
                  width: '66',
                  height: '41',
                  positionLeft: '449',
                  positionTop: '312',
                  zIndex: '100',
                  display: '',
                  backgroundImage: './assets/images/instruction/7.png',
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
        // 393 点击箭头 出现 J647 点击j647图片  箭头提示图片   点击两把点火钥匙   出现 两把点火钥匙图 下方文字
        {
          id: 'page03-component41',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: '两把点火钥匙',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '',
                  height: '',
                  positionLeft: '451',
                  positionTop: '372',
                  zIndex: '1',
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
                  content: '一把全新的钥匙、匹配原车钥匙',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '',
                    textAlign: '',
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
                  positionLeft: '249',
                  positionTop: '485',
                  zIndex: '1',
                  display: ''
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
                  content: '两把全新钥匙、如有另一把可用的已授权钥匙时，仅可使用旧零件',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },
        // 393 点击箭头 出现 J647 点击j647图片  箭头提示图片   点击两把点火钥匙 出现 红圈提示按钮
        {
          id: 'page03-component42',
          type: 'button',
          passCondition: { event: '', state: '', },
          remark: '两把点火钥匙提示按钮',
          initialStateID: 'state01',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '32',
                  height: '42',
                  positionLeft: '40',
                  positionTop: '236',
                  zIndex: '102',
                  display: 'none',
                  backgroundImage: './assets/images/instruction/9.png',
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
                  width: '32',
                  height: '42',
                  positionLeft: '40',
                  positionTop: '236',
                  zIndex: '102',
                  display: '',
                  backgroundImage: './assets/images/instruction/9.png',
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
        // 393 点击箭头 出现 J647 点击j647图片  箭头提示图片   点击两把点火钥匙 出现 点击红圈提示按钮 出现的文字
        {
          id: 'page03-component43',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: '提示按钮出现的文字',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '150',
                  height: '',
                  positionLeft: '100',
                  positionTop: '234',
                  zIndex: '101',
                  backgroundColor: '#fff',
                  padding: '4px 10px',
                  border: '1px solid #aaa',
                  boxShadow: '0 0 6px 0',
                  borderRadius: '2px',
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
                  content: `相继更换（包括匹配）`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                },
                {
                  id: '',
                  order: '1',
                  content: `1.舒适控制单元和电控转向柱锁（索引 = D）`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                  isLF: true,
                },
              ],
            },
            {
              id: 'state02',
              isScroll: 1,
              style: {
                default: {
                  width: '300',
                  height: '',
                  positionLeft: '100',
                  positionTop: '234',
                  zIndex: '101',
                  backgroundColor: '#fff',
                  padding: '4px 10px',
                  border: '1px solid #aaa',
                  boxShadow: '0 0 6px 0',
                  borderRadius: '2px',
                  display: '',
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
                  content: `相继更换（包括匹配）`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                },
                {
                  id: '',
                  order: '1',
                  content: `1.匹配钥匙`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                  isLF: true,
                },
                {
                  id: '',
                  order: '1',
                  content: `2.舒适控制单元和电控转向柱锁
                  （如果有另一把可用的已授权钥匙，则转至舒适控制单元、电动转向柱锁、一把点火钥匙的步骤）`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                  isLF: true,
                },

              ],
            },
          ],
        },

        // J393 点击箭头   出现钥匙文字 点击 钥匙出现 钥匙文字
        {
          id: 'page03-component44',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: '点火钥匙',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '',
                  height: '',
                  positionLeft: '451',
                  positionTop: '336',
                  zIndex: '1',
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
                  content: '点火钥匙',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
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
                  positionLeft: '443',
                  positionTop: '359',
                  zIndex: '1',
                  display: ''
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
                  content: '点火钥匙',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },
        // J393 点击箭头 出现钥匙图片 点击 钥匙出现 钥匙图片
        {
          id: 'page03-component45',
          type: 'button',
          passCondition: { event: '', state: '', },
          remark: '点火钥匙图片',
          initialStateID: 'state01',
          src: './assets/images/instruction/4.png',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '36',
                  height: '41',
                  positionLeft: '456',
                  positionTop: '400',
                  zIndex: '100',
                  display: 'none',
                  backgroundImage: './assets/images/instruction/4.png',
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
                  width: '36',
                  height: '41',
                  positionLeft: '449',
                  positionTop: '312',
                  zIndex: '100',
                  display: '',
                  backgroundImage: './assets/images/instruction/4.png',
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
        // J393 点击箭头   出现两把点火钥匙 文字 点击 两把点火钥 钥匙文字
        {
          id: 'page03-component46',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: '两把点火钥匙',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '',
                  height: '',
                  positionLeft: '451',
                  positionTop: '372',
                  zIndex: '1',
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
                  content: '两把点火钥匙',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
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
                  positionLeft: '443',
                  positionTop: '359',
                  zIndex: '1',
                  display: ''
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
                  content: '两把点火钥匙',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },
        // J393  点击箭头   出现 两把点火钥匙 图片 点击 两把点火钥 钥匙图片
        {
          id: 'page03-component47',
          type: 'button',
          passCondition: { event: '', state: '', },
          remark: '点火钥匙图片',
          initialStateID: 'state01',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '66',
                  height: '41',
                  positionLeft: '456',
                  positionTop: '400',
                  zIndex: '100',
                  display: 'none',
                  backgroundImage: './assets/images/instruction/7.png',
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
                  width: '66',
                  height: '41',
                  positionLeft: '449',
                  positionTop: '312',
                  zIndex: '100',
                  display: '',
                  backgroundImage: './assets/images/instruction/7.png',
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


      ],
      publishArray: [

        // J393图片点击 箭头提示图片鼠标悬浮
        {
          id: 'publish1',
          component: {
            id: 'page03-component07',
            stateID: '',
          },
          order: '1',
          triggerEvent: 'mouseenter',
          subscribeArray: [
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component08',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 遮罩层
              id: 'subscribe1',
              component: {
                id: 'page03-component07',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
          ],
        },
        // J393图片点击 箭头提示图片鼠标离开
        {
          id: 'publish2',
          component: {
            id: 'page03-component07',
            stateID: '',
          },
          order: '1',
          triggerEvent: 'mouseleave',
          subscribeArray: [
            {
              // 遮罩层
              id: 'subscribe1',
              component: {
                id: 'page03-component08',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 遮罩层
              id: 'subscribe1',
              component: {
                id: 'page03-component07',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
          ],
        },
        // J393图片点击 箭头提示图片鼠标点击
        {
          id: 'publish3',
          component: {
            id: 'page03-component07',
            stateID: '',
          },
          order: '1',
          triggerEvent: 'click',
          subscribeArray: [
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component09',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component10',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component11',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component12',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component13',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component14',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component07',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state03',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component08',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },

          ],
        },
        // J393图片 点击箭头提示 点击点火钥匙
        {
          id: 'publish4',
          component: {
            id: 'page03-component12',
            stateID: '',
          },
          order: '1',
          triggerEvent: 'click',
          subscribeArray: [
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component09',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component10',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component45',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component44',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
             {
              id: 'subscribe1',
              component: {
                id: 'page03-component11',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component12',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component13',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component14',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component15',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component17',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },


          ],
        },
        // J393图片 点击箭头提示 点击点火钥匙 出现红圈 红圈提示图片鼠标悬浮
        {
          id: 'publish5',
          component: {
            id: 'page03-component15',
            stateID: '',
          },
          order: '1',
          triggerEvent: 'mouseenter',
          subscribeArray: [
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component16',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe2',
              component: {
                id: 'page03-component15',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state03',
            },
          ],
        },
        // J393图片 点击箭头提示 点击点火钥匙  出现红圈 红圈提示图片鼠标离开
        {
          id: 'publish6',
          component: {
            id: 'page03-component15',
            stateID: '',
          },
          order: '1',
          triggerEvent: 'mouseleave',
          subscribeArray: [
            {
              id: 'subscribe2',
              component: {
                id: 'page03-component16',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component15',
                stateID: 'state03',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
          ],
        },

        // J393图片 点击箭头提示 点击两把点火钥匙
        {
          id: 'publish7',
          component: {
            id: 'page03-component14',
            stateID: '',
          },
          order: '1',
          triggerEvent: 'click',
          subscribeArray: [
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component09',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component10',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component11',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component12',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component13',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component14',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component46',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component47',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component18',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component17',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },


          ],
        },
        // J393图片 点击箭头提示 点击两把点火钥匙 出现红圈 红圈提示图片鼠标悬浮
        {
          id: 'publish8',
          component: {
            id: 'page03-component18',
            stateID: '',
          },
          order: '1',
          triggerEvent: 'mouseenter',
          subscribeArray: [
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component19',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe2',
              component: {
                id: 'page03-component18',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state03',
            },
          ],
        },
        // J393图片 点击箭头提示 点击两把点火钥匙 出现红圈  红圈提示图片鼠标离开
        {
          id: 'publish9',
          component: {
            id: 'page03-component18',
            stateID: '',
          },
          order: '1',
          triggerEvent: 'mouseleave',
          subscribeArray: [
            {
              id: 'subscribe2',
              component: {
                id: 'page03-component19',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component18',
                stateID: 'state03',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
          ],
        },

        // J393图片  点击箭头提示 点击J764
        {
          id: 'publish10',
          component: {
            id: 'page03-component10',
            stateID: '',
          },
          order: '1',
          triggerEvent: 'click',
          subscribeArray: [
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component01',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component02',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component03',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component04',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component05',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component06',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component09',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component10',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component11',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component12',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component13',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component14',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component21',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component22',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component23',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component24',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component26',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component27',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component28',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component29',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
          ],
        },
        // J393图片  点击箭头提示 点击J764  出现红圈 红圈提示图片鼠标悬浮
        {
          id: 'publish11',
          component: {
            id: 'page03-component24',
            stateID: '',
          },
          order: '1',
          triggerEvent: 'mouseenter',
          subscribeArray: [
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component25',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe2',
              component: {
                id: 'page03-component24',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state03',
            },
          ],
        },
        // J393图片  点击箭头提示 点击J764  出现红圈  红圈提示图片鼠标离开
        {
          id: 'publish12',
          component: {
            id: 'page03-component24',
            stateID: '',
          },
          order: '1',
          triggerEvent: 'mouseleave',
          subscribeArray: [
            {
              id: 'subscribe2',
              component: {
                id: 'page03-component25',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component24',
                stateID: 'state03',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
          ],
        },

        // J393图片点击 箭头提示图片鼠标点击
        {
          id: 'publish13',
          component: {
            id: 'page03-component29',
            stateID: '',
          },
          order: '1',
          triggerEvent: 'click',
          subscribeArray: [
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component30',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component31',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component32',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component33',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component29',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
             {
              id: 'subscribe1',
              component: {
                id: 'page03-component24',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },

          ],
        },

        //  J393 点击箭头 出现 J647 点击j647图片  箭头提示图片   点击点火钥匙
        {
          id: 'publish14',
          component: {
            id: 'page03-component31',
            stateID: '',
          },
          order: '1',
          triggerEvent: 'click',
          subscribeArray: [
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component34',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component35',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component36',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component30',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component31',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component32',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component33',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component24',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component37',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },

          ],
        },
        // J393 点击箭头 出现 J647 点击j647图片  箭头提示图片   点击点火钥匙  出现红圈 红圈提示图片鼠标悬浮
        {
          id: 'publish15',
          component: {
            id: 'page03-component37',
            stateID: '',
          },
          order: '1',
          triggerEvent: 'mouseenter',
          subscribeArray: [
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component38',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe2',
              component: {
                id: 'page03-component37',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state03',
            },
          ],
        },
        // J393 点击箭头 出现 J647 点击j647图片  箭头提示图片   点击点火钥匙  出现红圈  红圈提示图片鼠标离开
        {
          id: 'publish16',
          component: {
            id: 'page03-component37',
            stateID: '',
          },
          order: '1',
          triggerEvent: 'mouseleave',
          subscribeArray: [
            {
              id: 'subscribe2',
              component: {
                id: 'page03-component38',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component37',
                stateID: 'state03',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
          ],
        },

        //  J393 点击箭头 出现 J647 点击j647图片  箭头提示图片   点击两把点火钥匙
        {
          id: 'publish17',
          component: {
            id: 'page03-component33',
            stateID: '',
          },
          order: '1',
          triggerEvent: 'click',
          subscribeArray: [
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component39',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component40',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component41',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component30',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component31',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component32',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component33',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component24',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component42',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
          ],
        },
        // J393 点击箭头 出现 J647 点击j647图片  箭头提示图片   点击两把点火钥匙  出现红圈 红圈提示图片鼠标悬浮
        {
          id: 'publish18',
          component: {
            id: 'page03-component42',
            stateID: '',
          },
          order: '1',
          triggerEvent: 'mouseenter',
          subscribeArray: [
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component43',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe2',
              component: {
                id: 'page03-component42',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state03',
            },
          ],
        },
        // J393 点击箭头 出现 J647 点击j647图片  箭头提示图片   点击两把点火钥匙  出现红圈  红圈提示图片鼠标离开
        {
          id: 'publish16',
          component: {
            id: 'page03-component42',
            stateID: '',
          },
          order: '1',
          triggerEvent: 'mouseleave',
          subscribeArray: [
            {
              id: 'subscribe2',
              component: {
                id: 'page03-component43',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page03-component42',
                stateID: 'state03',
              },
              timeOut: '0',
              setCurrentState: 'state02',
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
    // J764 页面
    {
      id: 'page04',
      isPass: 1,
      order: '3',
      chapterID: 'chapter01',
      componentArray: [
        // J764 页面 出现 J647 文字
        {
          id: 'page04-component01',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: 'J764',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '',
                  height: '',
                  positionLeft: '417',
                  positionTop: '188',
                  zIndex: '1',
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
                  content: 'J764',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
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
                  positionLeft: '421',
                  positionTop: '333',
                  zIndex: '1',
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
                  content: 'J764',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },
        // J764 页面 出现 J647 图片
        {
          id: 'page04-component02',
          type: 'button',
          passCondition: { event: '', state: '', },
          remark: 'J764图片',
          initialStateID: 'state01',
          src: './assets/images/instruction/3.png',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '37',
                  height: '55',
                  positionLeft: '414',
                  positionTop: '128',
                  zIndex: '100',
                  backgroundImage: './assets/images/instruction/3.png',
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
                  width: '37',
                  height: '55',
                  positionLeft: '417',
                  positionTop: '269',
                  zIndex: '100',
                  display: 'none',
                  backgroundImage: './assets/images/instruction/3.png',
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
        // J764 页面 出现 J647 图片  下方文字
        {
          id: 'page04-component03',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: '两把点火钥匙',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '',
                  height: '',
                  positionLeft: '357',
                  positionTop: '218',
                  zIndex: '1',
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
                  content: '电动转向柱锁更换新的部件',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '',
                    textAlign: '',
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
                  positionLeft: '357',
                  positionTop: '218',
                  zIndex: '1',
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
                  content: '电动转向柱锁更换新的部件',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },
        // J764 页面 出现 箭头提示图片
        {
          id: 'page04-component04',
          type: 'button',
          passCondition: { event: '', state: '', },
          remark: '提示图片',
          initialStateID: 'state01',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '40',
                  height: '15',
                  positionLeft: '100',
                  positionTop: '310',
                  zIndex: '100',
                  backgroundImage: './assets/images/instruction/8.png',
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
                  width: '40',
                  height: '15',
                  positionLeft: '100',
                  positionTop: '310',
                  zIndex: '100',
                  display: '',
                  backgroundImage: './assets/images/instruction/8.png',
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
                  width: '40',
                  height: '15',
                  positionLeft: '100',
                  positionTop: '310',
                  zIndex: '100',
                  backgroundImage: './assets/images/instruction/8.png',
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
        // J393悬浮出现 箭头提示图片出现的文字
        {
          id: 'page04-component05',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: '提示按钮出现的文字',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '155',
                  height: '',
                  positionLeft: '150',
                  positionTop: '304',
                  zIndex: '2',
                  backgroundColor: '#fff',
                  padding: '4px 10px',
                  border: '1px solid #aaa',
                  boxShadow: '0 0 6px 0',
                  borderRadius: '2px',
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
                  content: `是否有其它部件一同更换`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                }
              ],
            },
            {
              id: 'state02',
              isScroll: 1,
              style: {
                default: {
                  width: '155',
                  height: '',
                  positionLeft: '150',
                  positionTop: '304',
                  zIndex: '2',
                  backgroundColor: '#fff',
                  padding: '4px 10px',
                  border: '1px solid #aaa',
                  boxShadow: '0 0 6px 0',
                  borderRadius: '2px',
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
                  content: `是否有其它部件一同更换`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },


        // J764 页面  点击箭头提示图片  出现  点火钥匙 文字
        {
          id: 'page04-component07',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: '点火钥匙',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '',
                  height: '',
                  positionLeft: '451',
                  positionTop: '336',
                  zIndex: '1',
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
                  content: '点火钥匙',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
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
                  positionLeft: '292',
                  positionTop: '383',
                  zIndex: '1',
                  display: ''
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
                  content: '点火钥匙',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },
        //  J764 页面  点击箭头提示图片 点火钥匙 图片
        {
          id: 'page04-component08',
          type: 'button-tip',
          passCondition: { event: '', state: '', },
          remark: '点火钥匙图片',
          initialStateID: 'state01',
          src: './assets/images/instruction/4.png',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '36',
                  height: '41',
                  positionLeft: '456',
                  positionTop: '400',
                  zIndex: '100',
                  display: 'none',
                  backgroundImage: './assets/images/instruction/4.png',
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
                  width: '36',
                  height: '41',
                  positionLeft: '300',
                  positionTop: '328',
                  zIndex: '100',
                  display: '',
                  backgroundImage: './assets/images/instruction/4.png',
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
        //  J764 页面  点击箭头提示图片   出现 两把点火钥匙 文字
        {
          id: 'page04-component09',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: '两把点火钥匙',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '',
                  height: '',
                  positionLeft: '451',
                  positionTop: '372',
                  zIndex: '1',
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
                  content: '两把点火钥匙',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
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
                  positionLeft: '526',
                  positionTop: '384',
                  zIndex: '1',
                  display: ''
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
                  content: '两把点火钥匙',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },
        //  J764 页面  点击箭头提示图片   出现 两把点火钥匙 图片
        {
          id: 'page04-component10',
          type: 'button-tip',
          passCondition: { event: '', state: '', },
          remark: '点火钥匙图片',
          initialStateID: 'state01',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '66',
                  height: '41',
                  positionLeft: '456',
                  positionTop: '400',
                  zIndex: '100',
                  display: 'none',
                  backgroundImage: './assets/images/instruction/7.png',
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
                  width: '66',
                  height: '41',
                  positionLeft: '528',
                  positionTop: '327',
                  zIndex: '100',
                  display: '',
                  backgroundImage: './assets/images/instruction/7.png',
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


        // J764 页面  点击箭头提示图片   点击点火钥匙 出现  点火钥匙 文字
        {
          id: 'page04-component11',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: '点火钥匙',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '',
                  height: '',
                  positionLeft: '451',
                  positionTop: '336',
                  zIndex: '1',
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
                  content: '点火钥匙',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
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
                  positionLeft: '415',
                  positionTop: '360',
                  zIndex: '1',
                  display: ''
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
                  content: '点火钥匙',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },
        //  J764 页面  点击箭头提示图片 点击点火钥匙 出现  点火钥匙 图片
        {
          id: 'page04-component12',
          type: 'button',
          passCondition: { event: '', state: '', },
          remark: '点火钥匙图片',
          initialStateID: 'state01',
          src: './assets/images/instruction/4.png',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '36',
                  height: '41',
                  positionLeft: '420',
                  positionTop: '312',
                  zIndex: '100',
                  display: 'none',
                  backgroundImage: './assets/images/instruction/4.png',
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
                  width: '36',
                  height: '41',
                  positionLeft: '420',
                  positionTop: '312',
                  zIndex: '100',
                  display: '',
                  backgroundImage: './assets/images/instruction/4.png',
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
        // J764 页面  点击箭头提示图片 点击点火钥匙 出现 出现 红圈提示按钮
        {
          id: 'page04-component13',
          type: 'button',
          passCondition: { event: '', state: '', },
          remark: '两把点火钥匙提示按钮',
          initialStateID: 'state01',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '32',
                  height: '42',
                  positionLeft: '40',
                  positionTop: '236',
                  zIndex: '102',
                  display: 'none',
                  backgroundImage: './assets/images/instruction/9.png',
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
                  width: '32',
                  height: '42',
                  positionLeft: '40',
                  positionTop: '236',
                  zIndex: '102',
                  display: '',
                  backgroundImage: './assets/images/instruction/9.png',
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
              id: 'state03',
              isScroll: 1,
              style: {
                default: {
                  width: '32',
                  height: '42',
                  positionLeft: '40',
                  positionTop: '236',
                  zIndex: '102',
                  display: '',
                  backgroundImage: './assets/images/instruction/9.png',
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
        // J764 页面  点击箭头提示图片 点击点火钥匙 出现 出现 点击红圈提示按钮 出现的文字
        {
          id: 'page04-component14',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: '提示按钮出现的文字',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '150',
                  height: '',
                  positionLeft: '100',
                  positionTop: '234',
                  zIndex: '101',
                  backgroundColor: '#fff',
                  padding: '4px 10px',
                  border: '1px solid #aaa',
                  boxShadow: '0 0 6px 0',
                  borderRadius: '2px',
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
                  content: `1.电控转向柱锁`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                },
                {
                  id: '',
                  order: '1',
                  content: `2.匹配钥匙`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                  isLF: true,
                },
              ],
            },
            {
              id: 'state02',
              isScroll: 1,
              style: {
                default: {
                  width: '150',
                  height: '',
                  positionLeft: '100',
                  positionTop: '234',
                  zIndex: '101',
                  backgroundColor: '#fff',
                  padding: '4px 10px',
                  border: '1px solid #aaa',
                  boxShadow: '0 0 6px 0',
                  borderRadius: '2px',
                  display: '',
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
                  content: `1.电控转向柱锁`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                },
                {
                  id: '',
                  order: '1',
                  content: `2.匹配钥匙`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                  isLF: true,
                },
              ],
            },
          ],
        },
        // J764 页面  点击箭头提示图片 点击点火钥匙 出现 点火钥匙 图片下面的文字
        {
          id: 'page04-component15',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: '文字',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '',
                  height: '',
                  positionLeft: '342',
                  positionTop: '333',
                  zIndex: '1',
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
                  content: '一把全新钥匙、匹配原车钥匙',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '',
                    textAlign: '',
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
                  positionLeft: '342',
                  positionTop: '389',
                  zIndex: '1',
                  display: ''
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
                  content: '一把全新钥匙、匹配原车钥匙',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },

        // J764 页面  点击箭头提示图片   点击两把点火钥匙 出现  两把点火钥匙 文字
        {
          id: 'page04-component16',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: '点火钥匙',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '',
                  height: '',
                  positionLeft: '451',
                  positionTop: '336',
                  zIndex: '1',
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
                  content: '点火钥匙',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
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
                  positionLeft: '407',
                  positionTop: '360',
                  zIndex: '1',
                  display: ''
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
                  content: '两把点火钥匙',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },
        //  J764 页面  点击箭头提示图片 点击两把点火钥匙 出现  两把点火钥匙 图片
        {
          id: 'page04-component17',
          type: 'button',
          passCondition: { event: '', state: '', },
          remark: '点火钥匙图片',
          initialStateID: 'state01',
          src: './assets/images/instruction/4.png',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '66',
                  height: '41',
                  positionLeft: '420',
                  positionTop: '312',
                  zIndex: '100',
                  display: 'none',
                  backgroundImage: './assets/images/instruction/7.png',
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
                  width: '66',
                  height: '41',
                  positionLeft: '414',
                  positionTop: '312',
                  zIndex: '100',
                  display: '',
                  backgroundImage: './assets/images/instruction/7.png',
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
        // J764 页面  点击箭头提示图片 点击两把点火钥匙 出现 出现 红圈提示按钮
        {
          id: 'page04-component18',
          type: 'button',
          passCondition: { event: '', state: '', },
          remark: '两把点火钥匙提示按钮',
          initialStateID: 'state01',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '32',
                  height: '42',
                  positionLeft: '40',
                  positionTop: '236',
                  zIndex: '102',
                  display: 'none',
                  backgroundImage: './assets/images/instruction/9.png',
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
                  width: '32',
                  height: '42',
                  positionLeft: '40',
                  positionTop: '236',
                  zIndex: '102',
                  display: '',
                  backgroundImage: './assets/images/instruction/9.png',
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
              id: 'state03',
              isScroll: 1,
              style: {
                default: {
                  width: '32',
                  height: '42',
                  positionLeft: '40',
                  positionTop: '236',
                  zIndex: '102',
                  display: '',
                  backgroundImage: './assets/images/instruction/9.png',
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
        // J764 页面  点击箭头提示图片 点击两把点火钥匙 出现 出现 点击红圈提示按钮 出现的文字
        {
          id: 'page04-component19',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: '提示按钮出现的文字',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '150',
                  height: '',
                  positionLeft: '100',
                  positionTop: '234',
                  zIndex: '101',
                  backgroundColor: '#fff',
                  padding: '4px 10px',
                  border: '1px solid #aaa',
                  boxShadow: '0 0 6px 0',
                  borderRadius: '2px',
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
                  content: `1.电控转向柱锁`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                },
                {
                  id: '',
                  order: '1',
                  content: `2.匹配钥匙`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                  isLF: true,
                },
              ],
            },
            {
              id: 'state02',
              isScroll: 1,
              style: {
                default: {
                  width: '300',
                  height: '',
                  positionLeft: '100',
                  positionTop: '234',
                  zIndex: '101',
                  backgroundColor: '#fff',
                  padding: '4px 10px',
                  border: '1px solid #aaa',
                  boxShadow: '0 0 6px 0',
                  borderRadius: '2px',
                  display: '',
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
                  content: `1.匹配钥匙`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                },
                {
                  id: '',
                  order: '1',
                  content: `2.更换/匹配转向柱锁（如果有另一把可用的已授权钥匙，则转至电子转向柱锁及一把钥匙的匹配步骤）`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                  isLF: true,
                },
              ],
            },
          ],
        },
        // J764 页面  点击箭头提示图片 点击两把点火钥匙 出现 两把点火钥匙 图片下面的文字
        {
          id: 'page04-component20',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: '文字',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '',
                  height: '',
                  positionLeft: '268',
                  positionTop: '389',
                  zIndex: '1',
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
                  content: '两把全新钥匙、如有另一把可用的已授权钥匙时，仅可使用旧零件',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '',
                    textAlign: '',
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
                  positionLeft: '268',
                  positionTop: '389',
                  zIndex: '1',
                  display: ''
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
                  content: '两把全新钥匙、如有另一把可用的已授权钥匙时，仅可使用旧零件',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },


      ],
      publishArray: [
        //  J764 页面 箭头提示图片鼠标悬浮
        {
          id: 'publish01',
          component: {
            id: 'page04-component04',
            stateID: '',
          },
          order: '1',
          triggerEvent: 'mouseenter',
          subscribeArray: [
            {
              // 遮罩层
              id: 'subscribe1',
              component: {
                id: 'page04-component05',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 遮罩层
              id: 'subscribe1',
              component: {
                id: 'page04-component04',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
          ],
        },
        //  J764 页面 箭头提示图片鼠标离开
        {
          id: 'publish02',
          component: {
            id: 'page04-component04',
            stateID: '',
          },
          order: '1',
          triggerEvent: 'mouseleave',
          subscribeArray: [
            {
              // 遮罩层
              id: 'subscribe1',
              component: {
                id: 'page04-component05',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 遮罩层
              id: 'subscribe1',
              component: {
                id: 'page04-component04',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
          ],
        },
        //  J764 页面 箭头提示图片鼠标点击
        {
          id: 'publish03',
          component: {
            id: 'page04-component04',
            stateID: '',
          },
          order: '1',
          triggerEvent: 'click',
          subscribeArray: [
            {
              id: 'subscribe2',
              component: {
                id: 'page04-component07',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe3',
              component: {
                id: 'page04-component08',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe4',
              component: {
                id: 'page04-component09',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe4',
              component: {
                id: 'page04-component10',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe4',
              component: {
                id: 'page04-component04',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state03',
            },
            {
              id: 'subscribe4',
              component: {
                id: 'page04-component05',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },


          ],
        },
        //  J764 页面 箭头 点击点火钥匙
        {
          id: 'publish04',
          component: {
            id: 'page04-component08',
            stateID: '',
          },
          order: '1',
          triggerEvent: 'click',
          subscribeArray: [
            {
              id: 'subscribe2',
              component: {
                id: 'page04-component07',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe3',
              component: {
                id: 'page04-component08',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe4',
              component: {
                id: 'page04-component09',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe4',
              component: {
                id: 'page04-component10',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe4',
              component: {
                id: 'page04-component11',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe4',
              component: {
                id: 'page04-component12',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe4',
              component: {
                id: 'page04-component13',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe4',
              component: {
                id: 'page04-component15',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },


          ],
        },
        // J764 页面 箭头 点火钥匙 出现红圈 红圈提示图片鼠标悬浮
        {
          id: 'publish5',
          component: {
            id: 'page04-component13',
            stateID: '',
          },
          order: '1',
          triggerEvent: 'mouseenter',
          subscribeArray: [
            {
              id: 'subscribe1',
              component: {
                id: 'page04-component14',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe2',
              component: {
                id: 'page04-component13',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state03',
            },
          ],
        },
        // J764 页面 箭头 点火钥匙  出现红圈 红圈提示图片鼠标离开
        {
          id: 'publish6',
          component: {
            id: 'page04-component13',
            stateID: '',
          },
          order: '1',
          triggerEvent: 'mouseleave',
          subscribeArray: [
            {
              id: 'subscribe2',
              component: {
                id: 'page04-component14',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page04-component13',
                stateID: 'state03',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
          ],
        },

        //  J764 页面 箭头 点击两把点火钥匙
        {
          id: 'publish07',
          component: {
            id: 'page04-component10',
            stateID: '',
          },
          order: '1',
          triggerEvent: 'click',
          subscribeArray: [
            {
              id: 'subscribe2',
              component: {
                id: 'page04-component07',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe3',
              component: {
                id: 'page04-component08',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe4',
              component: {
                id: 'page04-component09',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe4',
              component: {
                id: 'page04-component10',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe4',
              component: {
                id: 'page04-component16',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe4',
              component: {
                id: 'page04-component17',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe4',
              component: {
                id: 'page04-component18',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe4',
              component: {
                id: 'page04-component20',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
          ],
        },
        // J764 页面 箭头 点击两把点火钥匙 出现红圈 红圈提示图片鼠标悬浮
        {
          id: 'publish8',
          component: {
            id: 'page04-component18',
            stateID: '',
          },
          order: '1',
          triggerEvent: 'mouseenter',
          subscribeArray: [
            {
              id: 'subscribe1',
              component: {
                id: 'page04-component19',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe2',
              component: {
                id: 'page04-component18',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state03',
            },
          ],
        },
        // J764 页面 箭头 点击两把点火钥匙  出现红圈 红圈提示图片鼠标离开
        {
          id: 'publish9',
          component: {
            id: 'page04-component18',
            stateID: '',
          },
          order: '1',
          triggerEvent: 'mouseleave',
          subscribeArray: [
            {
              id: 'subscribe2',
              component: {
                id: 'page04-component19',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page04-component18',
                stateID: 'state03',
              },
              timeOut: '0',
              setCurrentState: 'state02',
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
    // 点火钥匙
    {
      id: 'page05',
      isPass: 1,
      order: '4',
      chapterID: 'chapter01',
      componentArray: [

        // 点火钥匙页面 出现  点火钥匙 文字
        {
          id: 'page05-component02',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: '点火钥匙',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '',
                  height: '',
                  positionLeft: '419',
                  positionTop: '188',
                  zIndex: '1',
                  display: ''
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
                  content: '点火钥匙',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
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
                  positionLeft: '417',
                  positionTop: '188',
                  zIndex: '1',
                  display: ''
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
                  content: '点火钥匙',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },
        //  点火钥匙页面 出现  点火钥匙 图片
        {
          id: 'page05-component03',
          type: 'button',
          passCondition: { event: '', state: '', },
          remark: '点火钥匙图片',
          initialStateID: 'state01',
          src: './assets/images/instruction/4.png',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '36',
                  height: '41',
                  positionLeft: '424',
                  positionTop: '137',
                  zIndex: '100',
                  backgroundImage: './assets/images/instruction/4.png',
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
                  width: '36',
                  height: '41',
                  positionLeft: '420',
                  positionTop: '312',
                  zIndex: '100',
                  display: '',
                  backgroundImage: './assets/images/instruction/4.png',
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
        // 点火钥匙页面 出现点火钥匙 图片下面的文字
        {
          id: 'page05-component04',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: '文字',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '',
                  height: '',
                  positionLeft: '357',
                  positionTop: '218',
                  zIndex: '1',
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
                  content: '一把全新钥匙、匹配原车钥匙',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '',
                    textAlign: '',
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
                  positionLeft: '342',
                  positionTop: '389',
                  zIndex: '1',
                  display: ''
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
                  content: '一把全新钥匙、匹配原车钥匙',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },
      ],
      publishArray: [
      ],
      // 页面动画,暂没此功能
      animation: {
        animationInID: '',
        animationOnID: '',
        animationOutID: '',
      },
      backgroundImageSrc: '',
    },
    // 车辆ID
    {
      id: 'page06',
      isPass: 1,
      order: '5',
      chapterID: 'chapter01',
      componentArray: [

        // 车辆ID 文字
        {
          id: 'page06-component02',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: '车辆ID',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '',
                  height: '',
                  positionLeft: '450',
                  positionTop: '162',
                  zIndex: '1',
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
                  content: '车辆ID',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },
        // 车辆ID 图片
        {
          id: 'page06-component03',
          type: 'button',
          passCondition: { event: '', state: '', },
          remark: '车辆ID',
          initialStateID: 'state01',
          src: './assets/images/instruction/5.png',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '140',
                  height: '30',
                  positionLeft: '400',
                  positionTop: '125',
                  zIndex: '100',
                  display: '',
                  backgroundImage: './assets/images/instruction/5.png',
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
        // J393 文字
        {
          id: 'page06-component04',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: 'J393',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '',
                  height: '',
                  positionLeft: '322',
                  positionTop: '302',
                  zIndex: '1',
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
                  content: 'J393',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },
        // J393图片
        {
          id: 'page06-component05',
          type: 'button',
          passCondition: { event: '', state: '', },
          remark: 'J393图片',
          initialStateID: 'state01',
          src: './assets/images/instruction/1.png',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '32',
                  height: '49',
                  positionLeft: '323',
                  positionTop: '250',
                  zIndex: '100',
                  display: '',
                  backgroundImage: './assets/images/instruction/1.png',
                },
                hover: {
                  cursor: 'pointer',
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
        // J623 文字
        {
          id: 'page06-component06',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: 'J623',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '',
                  height: '',
                  positionLeft: '132',
                  positionTop: '302',
                  zIndex: '1',
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
                  content: 'J623',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },
        // J623图片
        {
          id: 'page06-component07',
          type: 'button',
          passCondition: { event: '', state: '', },
          remark: 'J623图片',
          initialStateID: 'state01',
          src: './assets/images/instruction/2.png',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '51',
                  height: '49',
                  positionLeft: '124',
                  positionTop: '250',
                  zIndex: '100',
                  display: '',
                  backgroundImage: './assets/images/instruction/2.png',
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
                  width: '420',
                  height: '240',
                  positionLeft: '300',
                  positionTop: '170',
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
        // J764 文字
        {
          id: 'page06-component08',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: 'J764',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '',
                  height: '',
                  positionLeft: '553',
                  positionTop: '304',
                  zIndex: '1',
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
                  content: 'J764',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },
        // J764图片
        {
          id: 'page06-component09',
          type: 'button',
          passCondition: { event: '', state: '', },
          remark: 'J764图片',
          initialStateID: 'state01',
          src: './assets/images/instruction/3.png',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '37',
                  height: '55',
                  positionLeft: '549',
                  positionTop: '246',
                  zIndex: '100',
                  display: '',
                  backgroundImage: './assets/images/instruction/3.png',
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
        // 锁止组件 文字
        {
          id: 'page06-component09',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: '锁止组件',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '',
                  height: '',
                  positionLeft: '763',
                  positionTop: '302',
                  zIndex: '1',
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
                  content: '锁止组件',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },
        // 锁止组件 图片
        {
          id: 'page06-component10',
          type: 'button',
          passCondition: { event: '', state: '', },
          remark: '锁止组件',
          initialStateID: 'state01',
          src: './assets/images/instruction/6.png',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '104',
                  height: '43',
                  positionLeft: '730',
                  positionTop: '252',
                  zIndex: '100',
                  display: '',
                  backgroundImage: './assets/images/instruction/11.png',
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
        // 车辆ID页面  图片下面的文字
        {
          id: 'page06-component11',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: '文字',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '600',
                  height: '',
                  positionLeft: '190',
                  positionTop: '360',
                  zIndex: '1',
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
                  content: 'ECU更换新的部件或同款车辆上正常使用的部件，舒适控制单元、电动转向柱锁及全车锁止组件全部更换新的部件',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },
        // 红圈提示按钮
        {
          id: 'page06-component12',
          type: 'button',
          passCondition: { event: '', state: '', },
          remark: '两把点火钥匙提示按钮',
          initialStateID: 'state01',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '32',
                  height: '42',
                  positionLeft: '40',
                  positionTop: '236',
                  zIndex: '102',
                  display: '',
                  backgroundImage: './assets/images/instruction/9.png',
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
                  width: '32',
                  height: '42',
                  positionLeft: '40',
                  positionTop: '236',
                  zIndex: '102',
                  display: '',
                  backgroundImage: './assets/images/instruction/9.png',
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
        // 点击红圈提示按钮 出现的文字
        {
          id: 'page06-component13',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: '提示按钮出现的文字',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '150',
                  height: '',
                  positionLeft: '100',
                  positionTop: '234',
                  zIndex: '101',
                  backgroundColor: '#fff',
                  padding: '4px 10px',
                  border: '1px solid #aaa',
                  boxShadow: '0 0 6px 0',
                  borderRadius: '2px',
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
                  content: `1.电控转向柱锁`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                },
                {
                  id: '',
                  order: '1',
                  content: `2.匹配钥匙`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                  isLF: true,
                },
              ],
            },
            {
              id: 'state02',
              isScroll: 1,
              style: {
                default: {
                  width: '280',
                  height: '',
                  positionLeft: '100',
                  positionTop: '234',
                  zIndex: '101',
                  backgroundColor: '#fff',
                  padding: '4px 10px',
                  border: '1px solid #aaa',
                  boxShadow: '0 0 6px 0',
                  borderRadius: '2px',
                  display: '',
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
                  content: `对 VAS 测试仪上的“新车辆 ID”进行排序：`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                },
                {
                  id: '',
                  order: '1',
                  content: `1.舒适控制单元`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                  isLF: true,
                },
                 {
                  id: '',
                  order: '1',
                  content: `2.ECU `,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                  isLF: true,
                },
                {
                  id: '',
                  order: '1',
                  content: `3.电控转向柱锁 `,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                  isLF: true,
                },
                  {
                  id: '',
                  order: '1',
                  content: `4.匹配钥匙`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                  isLF: true,
                },
              ],
            },
          ],
        },
         // 蓝色括号 图片
        {
          id: 'page06-component14',
          type: 'button',
          passCondition: { event: '', state: '', },
          remark: '锁止组件',
          initialStateID: 'state01',
          src: './assets/images/instruction/6.png',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '655',
                  height: '26',
                  positionLeft: '144',
                  positionTop: '200',
                  zIndex: '100',
                  display: '',
                  backgroundImage: './assets/images/instruction/13.png',
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
      ],
      publishArray: [
        //  红圈提示图片鼠标悬浮
        {
          id: 'publish1',
          component: {
            id: 'page06-component12',
            stateID: '',
          },
          order: '1',
          triggerEvent: 'mouseenter',
          subscribeArray: [
            {
              id: 'subscribe1',
              component: {
                id: 'page06-component13',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe2',
              component: {
                id: 'page06-component12',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state03',
            },
          ],
        },
        //  红圈提示图片鼠标离开
        {
          id: 'publish2',
          component: {
            id: 'page06-component12',
            stateID: '',
          },
          order: '1',
          triggerEvent: 'mouseleave',
          subscribeArray: [
            {
              id: 'subscribe2',
              component: {
                id: 'page06-component13',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page06-component12',
                stateID: 'state03',
              },
              timeOut: '0',
              setCurrentState: 'state02',
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
    // 锁止组件
    {
      id: 'page07',
      isPass: 1,
      order: '6',
      chapterID: 'chapter01',
      componentArray: [

        // 锁止组件 文字
        {
          id: 'page07-component02',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: '车辆ID',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '',
                  height: '',
                  positionLeft: '448',
                  positionTop: '171',
                  zIndex: '1',
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
                  content: '锁止组件',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },
        // 锁止组件 图片
        {
          id: 'page07-component03',
          type: 'button',
          passCondition: { event: '', state: '', },
          remark: '车辆ID',
          initialStateID: 'state01',
          src: './assets/images/instruction/6.png',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '104',
                  height: '43',
                  positionLeft: '420',
                  positionTop: '125',
                  zIndex: '100',
                  display: '',
                  backgroundImage: './assets/images/instruction/11.png',
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
        // J393 文字
        {
          id: 'page07-component04',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: 'J393',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '',
                  height: '',
                  positionLeft: '450',
                  positionTop: '302',
                  zIndex: '1',
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
                  content: 'J393',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },
        // J393图片
        {
          id: 'page07-component05',
          type: 'button',
          passCondition: { event: '', state: '', },
          remark: 'J393图片',
          initialStateID: 'state01',
          src: './assets/images/instruction/1.png',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '32',
                  height: '49',
                  positionLeft: '450',
                  positionTop: '248',
                  zIndex: '100',
                  display: '',
                  backgroundImage: './assets/images/instruction/1.png',
                },
                hover: {
                  cursor: 'pointer',
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
        // J623 文字
        {
          id: 'page07-component06',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: 'J623',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '',
                  height: '',
                  positionLeft: '127',
                  positionTop: '302',
                  zIndex: '1',
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
                  content: 'J623',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },
        // J623图片
        {
          id: 'page07-component07',
          type: 'button',
          passCondition: { event: '', state: '', },
          remark: 'J623图片',
          initialStateID: 'state01',
          src: './assets/images/instruction/2.png',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '51',
                  height: '49',
                  positionLeft: '120',
                  positionTop: '248',
                  zIndex: '100',
                  display: '',
                  backgroundImage: './assets/images/instruction/2.png',
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
                  width: '420',
                  height: '240',
                  positionLeft: '300',
                  positionTop: '170',
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
        // J764 文字
        {
          id: 'page07-component08',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: 'J764',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '',
                  height: '',
                  positionLeft: '782',
                  positionTop: '304',
                  zIndex: '1',
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
                  content: 'J764',
                  style: {
                    color: '#535353',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },
        // J764图片
        {
          id: 'page07-component09',
          type: 'button',
          passCondition: { event: '', state: '', },
          remark: 'J764图片',
          initialStateID: 'state01',
          src: './assets/images/instruction/3.png',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '37',
                  height: '55',
                   positionLeft: '779',
                  positionTop: '247',
                  zIndex: '100',
                  display: '',
                  backgroundImage: './assets/images/instruction/3.png',
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
        // 锁止组件  图片下面的文字
        {
          id: 'page07-component11',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: '文字',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '600',
                  height: '',
                  positionLeft: '190',
                  positionTop: '360',
                  zIndex: '1',
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
                  content: 'ECU更换新的部件或同款车辆上正常使用的部件，舒适控制单元、电动转向柱锁及全车锁止组件全部更换新的部件',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },
        // 红圈提示按钮
        {
          id: 'page07-component12',
          type: 'button',
          passCondition: { event: '', state: '', },
          remark: '两把点火钥匙提示按钮',
          initialStateID: 'state01',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '32',
                  height: '42',
                  positionLeft: '40',
                  positionTop: '236',
                  zIndex: '102',
                  display: '',
                  backgroundImage: './assets/images/instruction/9.png',
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
                  width: '32',
                  height: '42',
                  positionLeft: '40',
                  positionTop: '236',
                  zIndex: '102',
                  display: '',
                  backgroundImage: './assets/images/instruction/9.png',
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
        // 点击红圈提示按钮 出现的文字
        {
          id: 'page07-component13',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: '提示按钮出现的文字',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '150',
                  height: '',
                  positionLeft: '100',
                  positionTop: '234',
                  zIndex: '101',
                  backgroundColor: '#fff',
                  padding: '4px 10px',
                  border: '1px solid #aaa',
                  boxShadow: '0 0 6px 0',
                  borderRadius: '2px',
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
                  content: `按照 VAS 测试仪的程序“新 ID”规定的顺序执行作业`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                },
                {
                  id: '',
                  order: '1',
                  content: `2.匹配钥匙`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                  isLF: true,
                },
              ],
            },
            {
              id: 'state02',
              isScroll: 1,
              style: {
                default: {
                  width: '280',
                  height: '',
                  positionLeft: '100',
                  positionTop: '234',
                  zIndex: '101',
                  backgroundColor: '#fff',
                  padding: '4px 10px',
                  border: '1px solid #aaa',
                  boxShadow: '0 0 6px 0',
                  borderRadius: '2px',
                  display: '',
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
                  content: `按照 VAS 测试仪的程序“新 ID”规定的顺序执行作业`,
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '18',
                    textAlign: '',
                  },
                },
              ],
            },
          ],
        },
        // 蓝色括号 图片
        {
          id: 'page07-component14',
          type: 'button',
          passCondition: { event: '', state: '', },
          remark: '锁止组件',
          initialStateID: 'state01',
          src: './assets/images/instruction/6.png',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '655',
                  height: '26',
                  positionLeft: '144',
                  positionTop: '200',
                  zIndex: '100',
                  display: '',
                  backgroundImage: './assets/images/instruction/13.png',
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
      ],
      publishArray: [
        //  红圈提示图片鼠标悬浮
        {
          id: 'publish1',
          component: {
            id: 'page07-component12',
            stateID: '',
          },
          order: '1',
          triggerEvent: 'mouseenter',
          subscribeArray: [
            {
              id: 'subscribe1',
              component: {
                id: 'page07-component13',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              id: 'subscribe2',
              component: {
                id: 'page07-component12',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state03',
            },
          ],
        },
        //  红圈提示图片鼠标离开
        {
          id: 'publish2',
          component: {
            id: 'page07-component12',
            stateID: '',
          },
          order: '1',
          triggerEvent: 'mouseleave',
          subscribeArray: [
            {
              id: 'subscribe2',
              component: {
                id: 'page07-component13',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              id: 'subscribe1',
              component: {
                id: 'page07-component12',
                stateID: 'state03',
              },
              timeOut: '0',
              setCurrentState: 'state02',
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
  appConfig,
}
