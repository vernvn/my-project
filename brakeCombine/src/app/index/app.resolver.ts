import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppService } from './app.service';
import { Http, Response } from '@angular/http';
import 'rxjs/add/observable/of';

@Injectable()
export class DataResolver implements Resolve<any> {
    constructor(private http: Http, private appservice: AppService ) {

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // return Observable.of({ res: 'I am data' });
    }

    resolevData() {
        return this.http.get('http://localhost:3000/123')
            .map((res: Response) => {
                return res.json();
            })
            .map(data => this.resolveChapter(data))
            .subscribe();
    }

    resolveChapter(appConfig) {
        console.log(appConfig)
        const chapters: any[] = [];
        const pages: any[] = [];
        let imp: number = 1;
        for (let i of appConfig) {
            if (i.isChapter) {
                chapters.push({
                    title: i.chapter,
                    logo: i.logo,
                    startPage: imp,
                    endPage: imp + i.pages.length - 1,
                });
                for (let value of i.pages) {
                    if (value.logo || value.chapter)
                        console.error('Unexpected property of type for config');
                    Object.assign(value, {
                        logo: i.logo,
                        chapter: i.chapter,
                    });
                }
            }
            // 初始化页面数组
            for (let value of i.pages) {
                if (value.page)
                    console.error('Unexpected property of type for config');
                Object.assign(value, {
                    page: imp++,
                });
                pages.push(value);
            }
        }
        this.appservice.chapters = chapters;
        this.appservice.pages = pages;
    }
}
