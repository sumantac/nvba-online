import { Component, OnInit } from '@angular/core';
import { GetjsonfileService } from './../../../services/getjsonfile.service';

@Component({
  selector: 'app-pastteams',
  templateUrl: './pastteams.component.html',
  styleUrls: ['./pastteams.component.scss']
})
export class PastteamsComponent implements OnInit {

  nvbaTeam : any;
  constructor(private jsonFile:GetjsonfileService) { }

  ngOnInit(): void {
    this.jsonFile.pageData('ecm-20-21').subscribe(data => {
         ////console.log(data);
         this.nvbaTeam = data;
       });
  }

}
