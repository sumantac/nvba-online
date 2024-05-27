import { Component, OnInit } from '@angular/core';
import { GetjsonfileService } from './../../../services/getjsonfile.service';


@Component({
  selector: 'app-team',
  templateUrl: './bod.component.html',
  styleUrls: ['./bod.component.scss']
})
export class BodComponent implements OnInit {
  nvbaTeam : any;
  constructor(private jsonFile:GetjsonfileService) { }

  ngOnInit(): void {
    this.jsonFile.pageData('bod').subscribe(data => {
         ////console.log(data);
         this.nvbaTeam = data;
       });
  }

}
