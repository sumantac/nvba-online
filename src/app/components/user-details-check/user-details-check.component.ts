import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MemberService } from 'src/app/shared/member/member.service';
//import { btoa, atob } from 'base64-js';

@Component({
  selector: 'app-user-details-check',
  templateUrl: './user-details-check.component.html',
  styleUrls: ['./user-details-check.component.scss']
})
export class UserDetailsCheckComponent implements OnInit {
  userMember:any;

  constructor(private ms: MemberService, private route: ActivatedRoute ) {
    console.log(window.location.host);
    const emailId = this.route.snapshot.params['id'];
    console.log(emailId);
    this.ms.GetMembersList().subscribe( mList =>{
      [...mList].forEach( member => {
        if(member.email == emailId){
          this.userMember = member;
          console.log(this.userMember);
        }
      })
    });
   
  }


  ngOnInit(): void {
    // ngOnInit() {
    //   const id = this.route.snapshot.params['id'];
    // }
  }


}
