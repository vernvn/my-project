import { Component ,Injectable} from '@angular/core';
import { TemperatureService } from './temperature.service';
import { AppService } from '../../index/app.service';
import { CommunicationService } from '../communication';
declare var $: any;
@Component({
    selector: 'temperature',
    styleUrls: [ './temperature.component.scss' ],
    templateUrl: './temperature.component.html',
    providers: []
})
@Injectable()
export class TemperatureComponent {
    // multimeterServiceMdata = this.multimeterService.Mdata;
    // multimeterServiceMout = this.multimeterService.Mout;
    temperatureServiceMdata = this.temperatureService.Mdata;
    constructor(public temperatureService: TemperatureService, public appService : AppService,public communicationService: CommunicationService,) {

    }
    ngOnInit(): void {
        
    }
    // temperature(){
    //     this.temperatureServiceMdata.temperature();
    // };
    closetemperature(){
        this.temperatureServiceMdata.closetemperature();
        $('.hottemplate').hide();
    };
    temperatureNumin(){
        this.temperatureServiceMdata.temperatureScreenStatus= false;
    	this.temperatureServiceMdata.temperatureScreenNum="";
    	$(".temperatureRed").addClass("hide-important");
    };
    temperatureNumout(){
        if(this.appService.testpageStatus){
            this.temperatureServiceMdata.temperatureScreenStatus= true;               
            let pointleft=$("#hhjtemperatureRed-hotspot").css("left").replace('px','');
            let pointtop=$("#hhjtemperatureRed-hotspot").css("top").replace('px','');
            if( pointleft>'458' && pointleft<'472' && (pointtop>'101' && pointtop<'118')){
                this.temperatureServiceMdata.temperatureScreenNum = '35°C';     
            }else if((pointleft>'565' && pointleft<'581') && (pointtop>'81' && pointtop<'98')){
                    this.temperatureServiceMdata.temperatureScreenNum = '33°C'; 
            }else if((pointleft>'375' && pointleft<'392') && (pointtop>'293' && pointtop<'310')){
                    this.temperatureServiceMdata.temperatureScreenNum = '30°C'; 
            }else if((pointleft>'562' && pointleft<'582') &&(pointtop>'312' && pointtop<'327')){
                    this.temperatureServiceMdata.temperatureScreenNum = '32°C'; 
            }else {
                    this.temperatureServiceMdata.temperatureScreenNum="0°C";
            }
        }
        $(".temperatureRed").removeClass("hide-important");
        
    };
    temperaturechangeNum(){
        if(this.appService.testpageStatus){
            this.temperatureServiceMdata.temperatureScreenStatus= false;
            let pointleft=$("#hhjtemperatureRed-hotspot").css("left").replace('px','');
            let pointtop= $("#hhjtemperatureRed-hotspot").css("top").replace('px','');
            if( pointleft>'458' && pointleft<'478' && (pointtop>'101' && pointtop<'118')){
                this.temperatureServiceMdata.temperatureScreenStatus= true;
                this.temperatureServiceMdata.temperatureScreenNum = '35°C';    
                this.communicationService.setAction({id:'v06',flag:'',sub:'',value:'used'});
                if($(".temperatureRed").hasClass("hide-important")){
                    this.temperatureServiceMdata.temperatureScreenStatus= false;
                    this.temperatureServiceMdata.temperatureScreenNum="";
                }
            }else if((pointleft>'565' && pointleft<'586') && (pointtop>'82' && pointtop<'98')){
                this.temperatureServiceMdata.temperatureScreenStatus= true;
                this.temperatureServiceMdata.temperatureScreenNum = '33°C'; 
                this.communicationService.setAction({id:'v06',flag:'',sub:'',value:'used'});
                if($(".temperatureRed").hasClass("hide-important")){
                    this.temperatureServiceMdata.temperatureScreenStatus= false;
                    this.temperatureServiceMdata.temperatureScreenNum="";
                }
            }else if((pointleft>'379' && pointleft<'397') &&(pointtop>'291' && pointtop<'310')){
                this.temperatureServiceMdata.temperatureScreenStatus= true;
                this.temperatureServiceMdata.temperatureScreenNum = '30°C'; 
                this.communicationService.setAction({id:'v06',flag:'',sub:'',value:'used'});
                if($(".temperatureRed").hasClass("hide-important")){
                    this.temperatureServiceMdata.temperatureScreenStatus= false;
                    this.temperatureServiceMdata.temperatureScreenNum="";
                }
            }else if((pointleft>'562' && pointleft<'586') &&(pointtop>'313' && pointtop<'322')){
                this.temperatureServiceMdata.temperatureScreenStatus= true;
                this.temperatureServiceMdata.temperatureScreenNum = '32°C'; 
                this.communicationService.setAction({id:'v06',flag:'',sub:'',value:'used'});
                if($(".temperatureRed").hasClass("hide-important")){
                    this.temperatureServiceMdata.temperatureScreenStatus= false;
                    this.temperatureServiceMdata.temperatureScreenNum="";
                }
            }else if(!$(".temperatureRed").hasClass("hide-important")){
                this.temperatureServiceMdata.temperatureScreenStatus= true;
                this.temperatureServiceMdata.temperatureScreenNum="0°C";
            }
        }
        
    }
    
}