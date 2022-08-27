import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService} from './../../shared/services/cart.service';
import { MemberService } from './../../shared/member/member.service';
import { from } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Location} from "@angular/common";
import { Router } from '@angular/router';
import { AuthService } from './../../shared/services/auth.service';
import {
  IPayPalConfig,
  ICreateOrderRequest 
} from 'ngx-paypal';

declare let paypal:any;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  cartCheck: any = [];
  subtotal: number = 0;
  tax: number = 0;
  addScript: boolean = false;
  paypalLoad: boolean = true;
  emptyCart: boolean = true;

  member:any;

  userDetails: any;
  move:boolean = false;


  public payPalConfig ? : IPayPalConfig;
  item: any;

  constructor( 
    private cart: CartService, 
    private toastr: ToastrService,
    private ar: ActivatedRoute,
    private mds: MemberService,
    private location: Location,
    private router: Router,
    private userService: AuthService
    ) {

      this.userService.cast.subscribe( m => {
        this.member = m;
        console.log(this.member);
      });

    this.cart.currentCart.subscribe( (cartCheck) => this.cartCheck = cartCheck);
    console.log(this.cartCheck.length);
    console.log(this.cart.getItems());

    }

  ngOnInit(): void {
     let ppList: any = [];
     let newList: any;
        this.cartCheck.forEach((i:any)=>{
        //  console.log(parseFloat(i.price) * parseFloat(i.quantity));
          this.subtotal +=(( parseFloat(i.price)) * (parseFloat(i.quantity)));
          this.emptyCart = true;

          let ppObject= {
              name: i.name,
              quantity: i.quantity.toString(),
              category: i.sku,
              tax:{currency_code:"USD", value:"0.00"},
              unit_amount: {
                  currency_code: "USD",
                  value: (( parseFloat(i.price)) * (parseFloat(i.quantity))).toString(),
              },
          }
          // let newObject = { 
          //     "name": i.name,
          //     "sku": i.sku,
          //     "price": (i.price).toString(),
          //     "currency": "USD",
          //     "quantity": (i.quantity).toString() 
          // }

          ppList.push(ppObject);
        //  newList.append(ppObject);

        });
      let value = this.subtotal.toString() +'.00';
      console.log(ppList);
      this.initConfig(value.toString(), ppList);
   
  }

  private initConfig(val:any,cc:any): void {
    this.payPalConfig = {
        currency: 'USD',
        // Sandbox
        clientId: 'AeLhWUCfC2jHOZv7b-KDfZV6R6Mig-2FklW6iIxsuI0UROww652TU9SlVPHyW1ygMGohQo21TfXUVPrz',
       // Prod
       // clientId: 'AVBsfj0Jw-jl5_63BPGwuduCaKDsPvbz1pwyqECm7N5FzKEi1Q_o-xQAiM_BTzQhAW064uAPf1v9uZdS',
        createOrderOnClient: (data) => < ICreateOrderRequest > {
            intent: 'CAPTURE',
            purchase_units: [{
                amount: {
                    currency_code: 'USD',
                    value: val,
                    breakdown: {
                        item_total: {
                            currency_code: 'USD',
                            value: val
                        },  
                    }
                },
             //   items: cc,
              //   items: [{
              //       name: 'Enterprise Subscription',
              //       quantity: '1',
              //       category: 'DIGITAL_GOODS',
              //       unit_amount: {
              //           currency_code: 'USD',
              //           value: '9.99',
              //       },
              //   },
           
              // ]
            }]
        },
        advanced: {
            commit: 'true'
        },
        style: {
            label: 'paypal',
            layout: 'vertical'
        },
        onApprove: (data, actions) => {
            console.log('onApprove - transaction was approved, but not authorized', data, actions);
            actions.order.get().then((details:any) => {
                console.log('onApprove - you can get full order details inside onApprove: ', details);
            });

        },
        onClientAuthorization: (data) => {
            console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
        //    this.showSuccess = true;
        },
        onCancel: (data, actions) => {
            console.log('OnCancel', data, actions);
         //   this.showCancel = true;

        },
        onError: err => {
            console.log('OnError', err);
         //   this.showError = true;
        },
        onClick: (data, actions) => {
            console.log('onClick', data, actions);
          //  this.resetStatus();
        }
    };
}


  // ngAfterViewInit(): void {


  // }  // End of ngAfterViewInit




  goBack(){
      this.location.back();
  }

  // cleanup(){
  //   this.cartCheck = [];
  //   this.subtotal = 0;
  //   this.tax= 0;
  //   this.emptyCart= true;
  // }



}
