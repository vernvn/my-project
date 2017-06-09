import { Injectable } from '@angular/core';

interface Page {
  pageNum: number;
  img: {};
  img2: any;
  img3: any;
  inputs: {}[];
  box: {};
}

@Injectable()
export class ElsaWinService {
  pageArray: Page[];
  currPage: Page;
  scale: number = 10;
  scrollHeight: number;
  scrollWidth: number;
  constructor() {
    this.scrollHeight = 0;
    this.scrollWidth = 0;
    this.pageArray = [
      {
        pageNum: 1,
        img: {
          style: {
            'background-image': 'url(./assets/images/elsaWin/2.png)',
          }
        },
        img2: {
        },
        img3: {
        },
        inputs: [
          {
            style: {
              'position': 'absolute',
              'left': '551px',
              'top': '259px',
              'width': '129px',
            },
            clickType: '1',
          }
        ],
        box: {
          type: '1',
          style: {
            'left': '549px',
            'top': '255px',
            'width': '129px',
            'height': '24px',
          },
        }
      },
      {
        pageNum: 2,
        img: {
          style: {
            'background-image': 'url(./assets/images/elsaWin/3.png)',
          }
        },
        img2: {
        },
        img3: {
        },
        inputs: [],
        box: {
          type: '2',
          style: {
            'left': '91px',
            'top': '260px',
            'width': '137px',
            'height': '24px',
          },
        }
      },
      {
        pageNum: 3,
        img: {
          style: {
            'background-image': 'url(./assets/images/elsaWin/4.png)',
          }
        },
        img2: {
        },
        img3: {
        },
        inputs: [
          {
            style: {
              'position': 'absolute',
              'left': '671px',
              'top': '286px',
              'width': '129px',
            },
            clickType: '2',
          }
        ],
        box: {
          type: '1',
          style: {
            'left': '669px',
            'top': '284px',
            'width': '131px',
            'height': '21px',
          },
        }
      },
      {
        pageNum: 4,
        img: {
          style: {
            'background-image': 'url(./assets/images/elsaWin/5.png)',
          },
          dongtu: './assets/images/elsaWin/zai.gif',
          dongtuStyle: {
            'position': 'absolute',
            'left': '493px',
            'top': '341px',
          }

        },
        img2: {
        },
        img3: {
        },
        inputs: [
        ],
        box: {
        }
      },
      {
        pageNum: 5,
        img: {
          style: {
            'background-image': 'url(./assets/images/elsaWin/6.png)',
          }
        },
        img2: {
        },
        img3: {
        },
        inputs: [
        ],
        box: {
          type: '2',
          style: {
            'left': '867px',
            'top': '72px',
            'width': '20px',
            'height': '21px',
          },
        }
      },
      {
        pageNum: 6,
        img: {
          style: {
            'background-image': 'url(./assets/images/elsaWin/7.png)',
          }
        },
        img2: {
        },
        img3: {
        },
        inputs: [
        ],
        box: {
          type: '2',
          style: {
            'left': '42px',
            'top': '225px',
            'width': '100px',
            'height': '16px',
          },
        }
      },
      {
        pageNum: 7,
        img: {
          src: './assets/images/elsaWin/8.png',
        },
        img2: {
        },
        img3: {
        },
        inputs: [
        ],
        box: {
        }

      },
      {
        pageNum: 8,
        img: {
          src: './assets/images/elsaWin/9.png',
        },
        img2: {
        },
        img3: {
        },

        inputs: [
        ],
        box: {
          type: '2',
          style: {
            'left': '40px',
            'top': '366px',
            'width': '774px',
            'height': '17px',
          },
        }
      },
      {
        // 放大缩小配置文件
        pageNum: 9,
        img: {
          bigsrc: './assets/images/elsaWin/dianlu.JPG',
        },
        img2: {
          src: './assets/images/elsaWin/circuit.png',
        },
        img3: {
          src: './assets/images/elsaWin/8.png',
        },
        inputs: [
        ],
        box: {
        }
      },

    ];
    this.currPage = this.pageArray[0];
  }
  /**
   * 跳转页面
   *
   * @param {number} page
   *
   * @memberof NoticeService
   */
  go2Page(page: number) {
    if (page > 0 && page <= this.pageArray.length) {
      this.currPage = this.pageArray[--page];
    }
  }

  /**
   * 切换页码
   *
   * @param {string} way
   * 'next' 下一页
   * 'prev' 上一页
   *
   * @memberof NoticeService
   */
  switchPage(way: string, type: string = '2') {
    if (way === 'next') {
      this.go2Page(this.currPage.pageNum + 1);
      if (type === '1') {
        setTimeout(() => { this.go2Page(this.currPage.pageNum + 1); }, 4000);
      }
    } else if (way === 'prev') {
      this.go2Page(this.currPage.pageNum - 1);
    }
  }

}
