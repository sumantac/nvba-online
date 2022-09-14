import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { GetjsonfileService } from './../../services/getjsonfile.service';
import { AuthService } from './../../shared/services/auth.service';

@Component({
  selector: 'app-durgapuja',
  templateUrl: './durgapuja.component.html',
  styleUrls: ['./durgapuja.component.scss']
})
export class DurgapujaComponent implements OnInit {
  @ViewChild('playA') playA!: ElementRef;

  sliderImage : any;
  playAudio: boolean = true;
  isLog: boolean = true;
//  audio = new Audio('https://dhrubajyoti.com/nvba/media/durga.mp3');
  constructor( private jsonFile:GetjsonfileService, public auth: AuthService ) {
      this.isLog = auth.isLoggedIn;
      console.log(this.isLog);
  }

  ngOnInit(): void {
    this.jsonFile.pageData('durgapujaSliderImage').subscribe(data => {
   //   ////console.log(data);
      this.sliderImage = data;
    });
    this.soundplay();
  }

  soundplay(){
 //   console.log(this.audio);
    if(this.playAudio===false){
      this.playA.nativeElement.play();
      console.log('Play');
      this.playAudio = true;
    }
    else{
      this.playA.nativeElement.pause();
      console.log('Pause');
      this.playAudio = false;
    }
  }

  ngAfterViewInit() {
    //  console.log(this.playA.nativeElement.innerHTML);
  }

}
