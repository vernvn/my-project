import {
    trigger,
    state,
    style,
    transition,
    animate,
    keyframes,
    group,
} from '@angular/core';


export const halo = trigger('halo',
    [
        transition('start <=> end',
            [
                animate('1s linear', keyframes([
                    style({ opacity: 1, }),
                    style({ opacity: 0, }),
                    style({ opacity: 1, }),
                ])),
            ]
        ),
    ],
);
