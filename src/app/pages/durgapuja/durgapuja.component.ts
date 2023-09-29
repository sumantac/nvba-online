import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { GetjsonfileService } from './../../services/getjsonfile.service';
import { AuthService } from './../../shared/services/auth.service';

@Component({
  selector: 'app-durgapuja',
  templateUrl: './durgapuja.component-2023.html',
  styleUrls: ['./durgapuja.component.scss']
})
export class DurgapujaComponent implements OnInit {
  @ViewChild('playA') playA!: ElementRef;

  sliderImage : any;
  playAudio: boolean = true;
  audio = new Audio();
  isLog: boolean = true;
//  audio = new Audio('https://dhrubajyoti.com/nvba/media/durga.mp3');
  constructor( private jsonFile:GetjsonfileService, public auth: AuthService ) {
      
      console.log(this.auth.isLoggedIn.valueOf());
  }

  ngOnInit(): void {
    this.jsonFile.pageData('durgapujaSliderImage').subscribe(data => {
   //   ////console.log(data);
      this.sliderImage = data;
    });
    
   // this.audio.src = "https://dhrubajyoti.com/nvba/media/durga.mp3"; YA-CHANDI-MAHALAYA-SONG-SOURENDRO-SOUMYOJIT
   this.audio.src = "./../../../../assets/media/YA-CHANDI-MAHALAYA-SONG-SOURENDRO-SOUMYOJIT.mp3";
   this.audio.load();
    this.audio.play();
  }

  
  soundplay() : void{
    if(this.playAudio == false){
      this.audio.play();
      console.log('Play');
      this.playAudio = true;
    }
    else{
      this.audio.pause();
      console.log('Pause');
      this.playAudio = false;
    }
  }


  ngAfterViewInit() {
    //  console.log(this.playA.nativeElement.innerHTML);
  }

}
