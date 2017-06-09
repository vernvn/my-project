import { Component } from '@angular/core';
import { CloseWindowService } from './close_window.service';
import { SimulationService } from '../simulation';
import { CommunicationService } from '../communication';
@Component({
    selector:'close-window',
    templateUrl: './close_window.component.html'
})
export class CloseWindowComponent {
    constructor(private closeWindowService: CloseWindowService, private simulationService: SimulationService,private communicationService: CommunicationService) {

    }
    exitStudy() {
        this.simulationService.exitSimulation();
        this.communicationService.commit('exit');
        this.closeWindowService.closeWindow();
    }
}