import { Component, OnInit } from '@angular/core';
import { GetjsonfileService } from 'src/app/services/getjsonfile.service';

@Component({
  selector: 'app-pastteam2023to24',
  templateUrl: './pastteam2023to24.component.html',
  styleUrls: ['./pastteam2023to24.component.scss']
})
export class Pastteam2023to24Component implements OnInit {

  nvbaTeam : any;
  constructor(private jsonFile:GetjsonfileService) { }

  ngOnInit(): void {
    this.jsonFile.pageData('ecm-22-23').subscribe(data => {
         ////console.log(data);
         this.nvbaTeam = data;
       });
  }

}
