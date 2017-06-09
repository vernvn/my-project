import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'keys' })
export class KeysPipe implements PipeTransform {
    transform(value: any, args: string[], args1: string): string[] {
        // console.log('管道的数据：', value, args, args1);
        if (typeof (value) !== 'object')
            throw 'keysPipe value must be object';
        return Object.keys(value);
    }
}
