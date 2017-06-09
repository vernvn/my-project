import { Injectable } from '@angular/core';
import { AppService } from '../../index/app.service';

@Injectable()
export class DialogService {

    constructor(
        public appService: AppService,
    ) { }

    init() {

    }
}
