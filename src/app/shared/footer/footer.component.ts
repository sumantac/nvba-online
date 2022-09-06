import { Component, OnInit } from '@angular/core';
import { GetjsonfileService } from './../../services/getjsonfile.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  siteLinks : any;
  events: any;
  constructor( private jsonFile:GetjsonfileService ) { }

  ngOnInit(): void {
    this.jsonFile.pageData('header').subscribe(data => {
      //console.log(data.length);
      this.siteLinks = data;

    });
    this.jsonFile.pageData('events').subscribe(data => {
      //console.log(data);
      this.events = data;
    });
    
  }

}
