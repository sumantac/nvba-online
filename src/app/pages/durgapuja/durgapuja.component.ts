import { Component, OnInit } from '@angular/core';
import { GetjsonfileService } from './../../services/getjsonfile.service';

@Component({
  selector: 'app-durgapuja',
  templateUrl: './durgapuja.component.html',
  styleUrls: ['./durgapuja.component.scss']
})
export class DurgapujaComponent implements OnInit {
  sliderImage : any;
  playAudio: boolean = false;
  audio = new Audio('https://dhrubajyoti.com/nvba/media/durga.mp3');
  constructor( private jsonFile:GetjsonfileService) {}

  ngOnInit(): void {
    this.jsonFile.pageData('durgapujaSliderImage').subscribe(data => {
   //   ////console.log(data);
      this.sliderImage = data;
    });
    this.soundplay();
  }

  soundplay(){
    console.log(this.audio);
    if(this.playAudio===false){
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

}
