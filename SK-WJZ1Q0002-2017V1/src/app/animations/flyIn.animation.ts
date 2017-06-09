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
            animate(600, keyframes([
                style({ opacity: 0, transform: 'translateX(-300px)', offset: 0 }),
                style({ opacity: 1, transform: 'translateX(15px)', offset: 0.6 }),
                style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
            ])),
        ]),
        transition('void => right', [
            animate(600, keyframes([
                style({ opacity: 0, transform: 'translateX(300px)', offset: 0 }),
                style({ opacity: 1, transform: 'translateX(-15px)', offset: 0.6 }),
                style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
            ])),
        ]),
        transition('void => down', [
            animate(600, keyframes([
                style({ opacity: 0, transform: 'translateY(-600px)', offset: 0 }),
                style({ opacity: 1, transform: 'translateY(15px)', offset: 0.8 }),
                style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 })
            ])),
        ]),
        transition('void => up', [
            animate(600, keyframes([
                style({ opacity: 0, transform: 'translateY(600px)', offset: 0 }),
                style({ opacity: 1, transform: 'translateY(-15px)', offset: 0.8 }),
                style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 })
            ])),
        ]),
        transition('void => show', [
            animate(800, keyframes([
                style({ opacity: 0, }),
                style({ opacity: 1, }),
            ])),
        ]),
        transition('void => margin', [
            animate(600, keyframes([
                style({ 'margin-top': '30px' }),
                style({ 'margin-top': '5px' }),
            ])),
        ]),
        transition('void => *', [
            animate(800, keyframes([
                style({ opacity: 0, }),
                style({ opacity: 1, }),
            ])),
        ]),
    ],
);
