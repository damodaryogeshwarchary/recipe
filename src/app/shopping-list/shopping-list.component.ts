import { Component, OnInit, ViewChild ,ElementRef} from '@angular/core';
import { MyserviceService } from '../myservice.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],

})
export class ShoppingListComponent implements OnInit {
  // shoppingitem: string;
  // amountOfItem: number;
  // // efgh: any[]=[];
  // deletingItem;
  // indexing;
  // getservice:string;
  // adding: string;
  @ViewChild('txt')  txtOf:ElementRef;
  @ViewChild('amt')  amt:ElementRef;
  // abcd: boolean = false;
  constructor(private _myService: MyserviceService) {
  }

  ngOnInit() {
    // this.getservice = this._myService.toTheShopping();
    // // this.adding = this._myService.onClickAdd(texts, amounts);
    // console.log(this.getservice);
    console.log(this._myService.efgh,"KJBGHDS");
    
  }

  // onClickAdd(text, amount){
  //   console.log(text, amount);
  //   if(text && amount){
  //   this._myService.onClickAdding(text, amount);
  //   this.efgh = this._myService.efghi;
  //   }
    // if(text && amount){
    //   this.efgh.push({
    //     items: text,
    //     amtOfItem: amount
    //   });
    // }
  // }
  onClickClear(){
    this.txtOf.nativeElement.value = null;
    this.amt.nativeElement.value = null;
  }
  // onClickDelete(){
  //   console.log(this.deletingItem);
  //   this.indexing = this.efgh.indexOf(this.deletingItem);
  //   console.log(this.indexing);
  //   this.efgh.splice(this.indexing,1);
  // }
  // onClickItem(item){
  //   this.deletingItem = item;
  // }
}
