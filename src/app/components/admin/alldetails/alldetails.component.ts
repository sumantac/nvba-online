import { Component, OnInit } from '@angular/core';
import { merge } from 'rxjs';
import { MemberService } from './../../../shared/member/member.service';
import 'ag-grid-community';
import * as moment from 'moment';

@Component({
  selector: 'app-alldetails',
  templateUrl: './alldetails.component.html',
  styleUrls: ['./alldetails.component.scss']
})
export class AlldetailsComponent implements OnInit {
  members:any;
  rowData:any;
  private gridApi:any;
  private gridColumnApi:any;

  memberList:any;
  newPurches:boolean = false;

  MM2022YY: number = 0;
  DP2022EBALL01NON:number = 0;
  DP2022EBALL02VEG:number = 0;

  DP2022EBALL03NON:number = 0;
  DP2022EBALL04VEG:number = 0;

  DP2022EBALL05KID:number = 0;

  DP2022EBALL06NON:number = 0;
  DP2022EBALL07VEG:number = 0;

  DP2022EBFRI01NON:number = 0;
  DP2022EBFRI02VEG:number = 0;

  DP2022EBFRI03NON:number = 0;
  DP2022EBFRI04VEG:number = 0;

  DP2022EBFRI05KID:number = 0;

  DP2022EBFRI06NON:number = 0;
  DP2022EBFRI07VEG:number = 0;

  DP2022EBSAT01NON:number = 0;
  DP2022EBSAT02VEG:number = 0;

  DP2022EBSAT03NON:number = 0;
  DP2022EBSAT04VEG:number = 0;

  DP2022EBSAT05KID:number = 0;

  DP2022EBSAT06NON:number = 0;
  DP2022EBSAT07VEG:number = 0;

  DP2022EBSUN01NON:number = 0;
  DP2022EBSUN02VEG:number = 0;

  DP2022EBSUN03NON:number = 0;
  DP2022EBSUN04VEG:number = 0;

  DP2022EBSUN05KID:number = 0;

  DP2022EBSUN06NON:number = 0;
  DP2022EBSUN07VEG:number = 0;

  nonCount:number =0;
  vegCount:number =0;
  kidCount:number =0;
  stuCount:number =0;

  nonCountFri:number =0;
  vegCountFri:number =0;
  kidCountFri:number =0;


  user: { index:number; email: string; firstname: string; lastname: string; expires: string; phone:string } | undefined;


  constructor(private mds: MemberService) {

    this.mds.GetMembersList().subscribe(m=>{
      this.members = m;
    //  console.log(this.members);
      this.rowData =  this.members;
   //   console.log(this.rowData);
      this.checkDetails();
    })
   }

  ngOnInit(): void {
  }

  columnDefs = [
    { field: 'index',  sortable: true, resizable: true,  cellClass: 'id-class center' },
    { field: 'email', sortable: true, resizable: true, filter: true },
		{ field: 'firstname', sortable: true, resizable: true, filter: true , cellClass: 'center' },
		{ field: 'lastname', sortable: true, resizable: true, filter: true, cellClass: 'center' },
    { field: 'expires', sortable: true, resizable: true, filter: true },
    { field: 'phone', sortable: true, resizable: true, filter: true },

    { field: 'MM2022YY', headerName:'Membership', sortable: true, resizable: true },

    { field: 'DP2022EBALL01NON', headerName:'EBALL01NON', sortable: true, resizable: true },
    { field: 'DP2022EBALL02VEG', headerName:'EBALL02VEG', sortable: true, resizable: true },
    { field: 'DP2022EBALL03NON', headerName:'EBALL03NON', sortable: true, resizable: true },
    { field: 'DP2022EBALL04VEG', headerName:'EBALL04VEG', sortable: true, resizable: true },
    { field: 'DP2022EBALL05KID', headerName:'EBALL05KID', sortable: true, resizable: true },
    { field: 'DP2022EBALL06NON', headerName:'EBALL06NON', sortable: true, resizable: true },
    { field: 'DP2022EBALL07VEG', headerName:'EBALL07VEG', sortable: true, resizable: true },

    { field: 'DP2022EBFRI01NON', headerName:'EBFRI01NON', sortable: true, resizable: true },
    { field: 'DP2022EBFRI02VEG', headerName:'EBFRI02VEG', sortable: true, resizable: true },
    { field: 'DP2022EBFRI03NON', headerName:'EBFRI03NON', sortable: true, resizable: true },
    { field: 'DP2022EBFRI04VEG', headerName:'EBFRI04VEG', sortable: true, resizable: true },
    { field: 'DP2022EBFRI05KID', headerName:'EBFRI05KID', sortable: true, resizable: true },
    { field: 'DP2022EBFRI06NON', headerName:'EBFRI06NON', sortable: true, resizable: true },
    { field: 'DP2022EBFRI07VEG', headerName:'EBFRI07VEG', sortable: true, resizable: true },

    { field: 'DP2022EBSAT01NON', headerName:'EBSAT01NON', sortable: true, resizable: true },
    { field: 'DP2022EBSAT02VEG', headerName:'EBSAT02VEG', sortable: true, resizable: true },
    { field: 'DP2022EBSAT03NON', headerName:'EBSAT03NON', sortable: true, resizable: true },
    { field: 'DP2022EBSAT04VEG', headerName:'EBSAT04VEG', sortable: true, resizable: true },
    { field: 'DP2022EBSAT05KID', headerName:'EBSAT05KID', sortable: true, resizable: true },
    { field: 'DP2022EBSAT06NON', headerName:'EBSAT06NON', sortable: true, resizable: true },
    { field: 'DP2022EBSAT07VEG', headerName:'EBSAT07VEG', sortable: true, resizable: true },

    { field: 'DP2022EBSUN01NON', headerName:'EBSUN01NON', sortable: true, resizable: true },
    { field: 'DP2022EBSUN02VEG', headerName:'EBSUN02VEG', sortable: true, resizable: true },
    { field: 'DP2022EBSUN03NON', headerName:'EBSUN03NON', sortable: true, resizable: true },
    { field: 'DP2022EBSUN04VEG', headerName:'EBSUN04VEG', sortable: true, resizable: true },
    { field: 'DP2022EBSUN05KID', headerName:'EBSUN05KID', sortable: true, resizable: true },
    { field: 'DP2022EBSUN06NON', headerName:'EBSUN06NON', sortable: true, resizable: true },
    { field: 'DP2022EBSUN07VEG', headerName:'EBSUN07VEG', sortable: true, resizable: true },

	];

  checkDetails(){
    let couter = 0;

    this.memberList = [];
    
    this.MM2022YY = 0;
    this.DP2022EBALL01NON= 0;
    this.DP2022EBALL02VEG= 0;

    this.DP2022EBALL03NON= 0;
    this.DP2022EBALL04VEG= 0;

    this.DP2022EBALL05KID= 0;

    this.DP2022EBALL06NON= 0;
    this.DP2022EBALL07VEG= 0;

    this.DP2022EBFRI01NON= 0;
    this. DP2022EBFRI02VEG= 0;

    this.DP2022EBFRI03NON= 0;
    this.DP2022EBFRI04VEG= 0;

    this.DP2022EBFRI05KID= 0;

    this.DP2022EBFRI06NON= 0;
    this.DP2022EBFRI07VEG= 0;

    this.DP2022EBSAT01NON= 0;
    this.DP2022EBSAT02VEG= 0;

    this.DP2022EBSAT03NON= 0;
    this.DP2022EBSAT04VEG= 0;

    this.DP2022EBSAT05KID= 0;

    this.DP2022EBSAT06NON= 0;
    this.DP2022EBSAT07VEG= 0;

    this.DP2022EBSUN01NON= 0;
    this.DP2022EBSUN02VEG= 0;

    this.DP2022EBSUN03NON= 0;
    this.DP2022EBSUN04VEG= 0;

    this.DP2022EBSUN05KID= 0;

    this.DP2022EBSUN06NON= 0;
    this.DP2022EBSUN07VEG= 0;

    

  //  console.log(this.rowData);
    [...this.rowData].forEach( m =>{ 
    //   console.log(m.purchase? true : false)  ;
    

       if(m.purchase? true : false){
         
         [...m.purchase].forEach(element => {
          const userTicket = {};
          this.newPurches = false;
      //     console.log(element);
      //     console.log(element.sku);
          [...element].forEach(e => {
                if(e.sku.includes("MM2022YY")){
                    this.MM2022YY += e.quantity ;
                    Object.assign(userTicket,{ MM2022YY : e.quantity });
                    this.newPurches = true;
                }
                if(e.sku.includes("DP2022EBALL01NON")){
                    this.DP2022EBALL01NON += e.quantity ;
                    Object.assign(userTicket,{ DP2022EBALL01NON : e.quantity });
                    this.newPurches = true;
                }
                if(e.sku.includes("DP2022EBALL02VEG")){
                    this.DP2022EBALL02VEG += e.quantity ;
                    Object.assign(userTicket,{ DP2022EBALL02VEG : e.quantity });
                    this.newPurches = true;
                }
                if(e.sku.includes("DP2022EBALL03NON")){
                    this.DP2022EBALL03NON += e.quantity ;
                    Object.assign(userTicket,{ DP2022EBALL03NON : e.quantity });
                    this.newPurches = true;
                }

                if(e.sku.includes("DP2022EBALL04VEG")){
                  this.DP2022EBALL04VEG += e.quantity ;
                  Object.assign(userTicket,{ DP2022EBALL04VEG : e.quantity });
                  this.newPurches = true;
                }
                if(e.sku.includes("DP2022EBALL05KID")){
                  this.DP2022EBALL05KID += e.quantity ;
                  Object.assign(userTicket,{ DP2022EBALL05KID : e.quantity });
                  this.newPurches = true;
                }
                if(e.sku.includes("DP2022EBALL06NON")){
                  this.DP2022EBALL06NON += e.quantity ;
                  Object.assign(userTicket,{ DP2022EBALL06NON : e.quantity });
                  this.newPurches = true;
                }
                if(e.sku.includes("DP2022EBALL07VEG")){
                  this.DP2022EBALL07VEG += e.quantity ;
                  Object.assign(userTicket,{ DP2022EBALL07VEG : e.quantity });
                  this.newPurches = true;
                }
                //Friday
                if(e.sku.includes("DP2022EBFRI01NON")){
                  this.DP2022EBFRI01NON += e.quantity ;
                  Object.assign(userTicket,{ DP2022EBFRI01NON : e.quantity });
                  this.newPurches = true;
                }
                if(e.sku.includes("DP2022EBFRI02VEG")){
                  this.DP2022EBFRI02VEG += e.quantity ;
                  Object.assign(userTicket,{ DP2022EBFRI02VEG : e.quantity });
                  this.newPurches = true;
                }
                if(e.sku.includes("DP2022EBFRI03NON")){
                  this.DP2022EBFRI03NON += e.quantity ;
                  Object.assign(userTicket,{ DP2022EBFRI03NON : e.quantity });
                  this.newPurches = true;
                }
                if(e.sku.includes("DP2022EBFRI04VEG")){
                  this.DP2022EBFRI04VEG += e.quantity ;
                  Object.assign(userTicket,{ DP2022EBFRI04VEG : e.quantity });
                  this.newPurches = true;
                }
                if(e.sku.includes("DP2022EBFRI05KID")){
                  this.DP2022EBFRI05KID += e.quantity ;
                  Object.assign(userTicket,{ DP2022EBFRI05KID : e.quantity });
                  this.newPurches = true;
                }
                if(e.sku.includes("DP2022EBFRI06NON")){
                  this.DP2022EBFRI06NON += e.quantity ;
                  Object.assign(userTicket,{ DP2022EBFRI06NON : e.quantity });
                  this.newPurches = true;
                }
                if(e.sku.includes("DP2022EBFRI07VEG")){
                  this.DP2022EBFRI07VEG += e.quantity ;
                  Object.assign(userTicket,{ DP2022EBFRI07VEG : e.quantity });
                  this.newPurches = true;
                }

                //Satuerday
                if(e.sku.includes("DP2022EBSAT01NON")){
                  this.DP2022EBSAT01NON += e.quantity ;
                  Object.assign(userTicket,{ DP2022EBSAT01NON : e.quantity });
                  this.newPurches = true;
                }
                if(e.sku.includes("DP2022EBSAT02VEG")){
                  this.DP2022EBSAT02VEG += e.quantity ;
                  Object.assign(userTicket,{ DP2022EBSAT02VEG : e.quantity });
                  this.newPurches = true;
                }
                if(e.sku.includes("DP2022EBSAT03NON")){
                  this.DP2022EBSAT03NON += e.quantity ;
                  Object.assign(userTicket,{ DP2022EBSAT03NON : e.quantity });
                  this.newPurches = true;
                }
                if(e.sku.includes("DP2022EBSAT04VEG")){
                  this.DP2022EBSAT04VEG += e.quantity ;
                  Object.assign(userTicket,{ DP2022EBSAT04VEG : e.quantity });
                  this.newPurches = true;
                }
                if(e.sku.includes("DP2022EBSAT05KID")){
                  this.DP2022EBSAT05KID += e.quantity ;
                  Object.assign(userTicket,{ DP2022EBSAT05KID : e.quantity });
                  this.newPurches = true;
                }
                if(e.sku.includes("DP2022EBSAT06NON")){
                  this.DP2022EBSAT06NON += e.quantity ;
                  Object.assign(userTicket,{ DP2022EBSAT06NON : e.quantity });
                  this.newPurches = true;
                }
                if(e.sku.includes("DP2022EBSAT07VEG")){
                  this.DP2022EBSAT07VEG += e.quantity ;
                  Object.assign(userTicket,{ DP2022EBSAT07VEG : e.quantity });
                  this.newPurches = true;
                }

                //Sunday
                if(e.sku.includes("DP2022EBSUN01NON")){
                  this.DP2022EBSUN01NON += e.quantity ;
                  Object.assign(userTicket,{ DP2022EBSUN01NON : e.quantity });
                  this.newPurches = true;
                }
                if(e.sku.includes("DP2022EBSUN02VEG")){
                  this.DP2022EBSUN02VEG += e.quantity ;
                  Object.assign(userTicket,{ DP2022EBSUN02VEG : e.quantity });
                  this.newPurches = true;
                }
                if(e.sku.includes("DP2022EBSUN03NON")){
                  this.DP2022EBSUN03NON += e.quantity ;
                  Object.assign(userTicket,{ DP2022EBSUN03NON : e.quantity });
                  this.newPurches = true;
                }
                if(e.sku.includes("DP2022EBSUN04VEG")){
                  this.DP2022EBSUN04VEG += e.quantity ;
                  Object.assign(userTicket,{ DP2022EBSUN04VEG : e.quantity });
                  this.newPurches = true;
                }
                if(e.sku.includes("DP2022EBSUN05KID")){
                  this.DP2022EBSUN05KID += e.quantity ;
                  Object.assign(userTicket,{ DP2022EBSUN05KID : e.quantity });
                  this.newPurches = true;
                }
                if(e.sku.includes("DP2022EBSUN06NON")){
                  this.DP2022EBSUN06NON += e.quantity ;
                  Object.assign(userTicket,{ DP2022EBSUN06NON : e.quantity });
                  this.newPurches = true;
                }
                if(e.sku.includes("DP2022EBSUN07VEG")){
                  this.DP2022EBSUN07VEG += e.quantity ;
                  Object.assign(userTicket,{ DP2022EBSUN07VEG : e.quantity });
                  this.newPurches = true;
                }
                
                
          }); // End of Purchase Loop e
          
          if(this.newPurches){
            this.user = {
              index : couter,
              email : m.email,
              firstname : m.firstname,
              lastname : m.lastname,
              expires : moment(m.expires).format("YYYY-MM-DD"),
              phone : m.phone
            };
            Object.assign(this.user, userTicket );
         //   this.user = this.user 
            this.memberList.unshift(this.user);
           // console.log(this.user);
          }
          
        }); // End of Each Member
       }

       couter++;
    });
 //   console.log(couter);
  //  this.lastOrder = this.rowData.purchase? true : false ;
  }


  onBtnExport() {
    this.gridApi.exportDataAsCsv();
  }
  onGridReady(params:any) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }


}
