import {
    Component, OnInit, Input, Output, EventEmitter, HostListener, ElementRef
} from '@angular/core';
import { flyIn, halo } from '../../animations';


@Component({
    selector: 'sgm-buttonlee',
    templateUrl: './buttonLee.component.html',
    styleUrls: ['./buttonLee.component.scss'],
    animations: [
        flyIn,
        halo,
    ],
})
export class ButtonLeeComponent implements OnInit {
    data: any;
    nativeElement: any;
    style: any;
    @Input('data') dataConf: any;
    @Output('event') publishEvent = new EventEmitter<void>();

    @HostListener('mouseenter', ['$event']) onmouseenter(e) {
        if (this.data.currentState.style.hover)
            Object.assign(this.data.currentStyle, this.data.currentState.style.hover);
    }
    @HostListener('mouseleave', ['$event']) onmouseleave(e) {
        Object.assign(this.data.currentStyle, this.data.currentState.style.default);
    }

    constructor(
        element: ElementRef,
    ) {
        this.nativeElement = element.nativeElement;
        this.style = {};
    }

    ngOnInit() {
        this.data = this.dataConf || {};
        this.addEvent(this.data.publish);
    }
    setStyle(item) {
        if (!this.data.currentStyle) return;
        const style = this.data.currentStyle;
        if (!style) return;
        const styles = {
            'left': parseInt(style.positionLeft, 10) + 'px',
            'top': parseInt(style.positionTop, 10) + 'px',
            'width': parseInt(style.width, 10) + 'px',
            'height': parseInt(style.height, 10) + 'px',
            'textAlign': style.textAlign,
            'zIndex': style.zIndex,
            'backgroundColor': style.backgroundColor,
            'borderRadius': style.borderRadius,
            'color': '#fff',
            'display': style.display,
            'cursor' : style.cursor
        };
        return styles;
    }
    setTextStyle(item) {
        if (!item.style) return;
        const styles = {
            'color': item.style.color,
            'fontSize': parseInt(item.style.fontSize, 10) + 'px',
            'fontWeight': item.style.fontWeight,
            'textDecoration': item.style.textDecoration,
            'textAlign': item.style.textAlign,
            'position': 'relative',
            'display' : item.style.display,
            'left': parseInt(item.style.positionLeft, 10) + 'px',
            'top': parseInt(item.style.positionTop, 10) + 'px',
            'width': '855px'
        };
        return styles;
    }
    // 监听事件
    private addEvent(eventObject) {
        for (let key in eventObject) {
            if (eventObject.hasOwnProperty(key)) {
                this.nativeElement.addEventListener(key, (e) => {
                    this.publishEvent.emit(e);
                });
            }
        }
    }
}
