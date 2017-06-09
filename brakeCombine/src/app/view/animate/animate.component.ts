import {
    Component,
    Input,
    trigger,
    state,
    style,
    transition,
    animate
} from '@angular/core';

// import { Heroes } from './hero.service';
@Component({
    moduleId: module.id,
    selector: 'hero-list-basic',
    template: `
    <ul>
      <li *ngFor="let hero of heroes"
          [@heroState]="hero.state"
          (click)="hero.toggleState()">
        {{hero.name}}
      </li>
    </ul>
  `,
    styleUrls: ['./hero-list.component.css'],
    animations: [
        trigger('heroState', [
            state('inactive', style({
                backgroundColor: '#eee',
                transform: 'scale(1)'
            })),
            state('active', style({
                backgroundColor: '#cfd8dc',
                transform: 'scale(1.1)'
            })),
            transition('inactive => active', animate('100ms ease-in')),
            transition('active => inactive', animate('100ms ease-out'))
        ])
    ]
})
export class HeroListBasicComponent {
    // @Input() heroes: Heroes;
}
