import {
    trigger,
    state,
    style,
    transition,
    animate,
    keyframes,
    group,
} from '@angular/core';

export const flyIn = trigger('flyIn',
  [
    transition('void => left', [
      animate(500, keyframes([
        style({ opacity: 0, transform: 'translateX(-1000px)', }),
        // style({ opacity: 1, transform: 'translateX(15px)', offset: 0.8 }),
        style({ opacity: 1, transform: 'translateX(0px)', })
      ])),
    ]),
    // transition('* => void', [
    //     animate(500, keyframes([
    //         style({ opacity: 1, transform: 'translateX(0px)',  }),
    //         style({ opacity: 0, transform: 'translateX(-1000px)',  }),
    //         // style({ opacity: 1, transform: 'translateX(15px)', offset: 0.8 }),
    //     ])),
    // ]),
    transition('void => right', [
      animate(500, keyframes([
        style({ opacity: 0, transform: 'translateX(1000px)', offset: 0 }),
        // style({ opacity: 1, transform: 'translateX(-15px)', offset: 0.8 }),
        style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
      ])),
    ]),
    transition('void => down', [
      animate(500, keyframes([
        style({ opacity: 0, transform: 'translateY(-600px)', offset: 0 }),
        // style({ opacity: 1, transform: 'translateY(15px)', offset: 0.8 }),
        style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 })
      ])),
    ]),
    transition('void => up', [
      animate(500, keyframes([
        style({ opacity: 0, transform: 'translateY(600px)', offset: 0 }),
        // style({ opacity: 1, transform: 'translateY(-15px)', offset: 0.8 }),
        style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 })
      ])),
    ]),



    transition('* => up61', [
      animate(2000, keyframes([
        style({ opacity: 1, transform: 'translateY(0px)', }),
        style({ opacity: 1, transform: 'translateY(-61px)', })
      ])),
    ]),

    transition('* => up210', [
      animate(2000, keyframes([
        style({ opacity: 1, transform: 'translateY(0px)', }),
        style({ opacity: 1, transform: 'translateY(-210px)', })
      ])),
    ]),

    transition('* => up21', [
      animate(500, keyframes([
        style({ opacity: 1, transform: 'translateY(0px)', }),
        style({ opacity: 1, transform: 'translateY(-21px)', })
      ])),
    ]),

    transition('* => up211', [
      animate(1000, keyframes([
        style({ opacity: 1, transform: 'translateY(0px)', }),
        style({ opacity: 1, transform: 'translateY(-211px)', })
      ])),
    ]),

    transition('* => down196', [
      animate(2000, keyframes([
        style({ opacity: 1, transform: 'translateY(0px)', }),
        style({ opacity: 1, transform: 'translateY(196px)', })
      ])),
    ]),

    transition('* => down36', [
      animate(2000, keyframes([
        style({ opacity: 1, transform: 'translateY(0px)', }),
        style({ opacity: 1, transform: 'translateY(36px)', })
      ])),
    ]),


    transition('* => left400', [
      animate(2000, keyframes([
        style({ opacity: 1, transform: 'translateX(0px)', }),
        style({ opacity: 1, transform: 'translateX(-400px)', }),
      ])),
    ]),

    transition('* => left170', [
      animate(2000, keyframes([
        style({ opacity: 1, transform: 'translateX(0px)', }),
        style({ opacity: 1, transform: 'translateX(-170px)', }),
      ])),
    ]),

    transition('* => right440', [
      animate(2000, keyframes([
        style({ opacity: 1, transform: 'translateX(0px)', }),
        style({ opacity: 1, transform: 'translateX(440px)', }),
      ])),
    ]),

    transition('* => right200', [
      animate(2000, keyframes([
        style({ opacity: 1, transform: 'translateX(0px)', }),
        style({ opacity: 1, transform: 'translateX(200px)', }),
      ])),
    ]),

    transition('* => light3', [
      animate(3000, keyframes([
        style({ opacity: 1, }),
        style({ opacity: 0, }),
        style({ opacity: 1, }),
        style({ opacity: 0, }),
        style({ opacity: 1, }),
        style({ opacity: 0, }),
        style({ opacity: 1, }),
      ])),
    ]),
    transition('* => light2', [
      animate(2000, keyframes([
        style({ opacity: 1, }),
        style({ opacity: 0, }),
        style({ opacity: 1, }),
        style({ opacity: 0, }),
        style({ opacity: 1, }),
      ])),
    ]),

    transition('* => fadein', [
      animate(2000, keyframes([
        style({ opacity: 0, }),
        style({ opacity: 1, }),
      ])),
    ]),

    transition('* => fadeout', [
      animate(2000, keyframes([
        style({ opacity: 1, }),
        style({ opacity: 0, }),
      ])),
    ])
  ],


);
