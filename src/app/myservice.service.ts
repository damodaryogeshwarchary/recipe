import { Injectable } from '@angular/core';

@Injectable()
export class MyserviceService {

  constructor() { }

  toTheShopping(){
    return "hello this is damodaryogeshwar";
  }
  // shoppingitem: string;
  // amountOfItem: number;
  efgh: any[]=[];
  deletingItem;
  indexing;
  // @ViewChild('txt')  txtOf:ElementRef;
  // @ViewChild('amt')  amt:ElementRef;
  // abcd: boolean = false;
 

  // ngOnInit() {
  //   console.log(this.amountOfItem);
  // }
    

  onClickAdd(text, amount){
    console.log(text, amount);
    if(text && amount){
      this.efgh.push({
        items: text,
        amtOfItem: amount
      });
    }
    console.log(this.efgh);
  }
  // onClickClear(){
  //   this.txtOf.nativeElement.value = null;
  //   this.amt.nativeElement.value = null;
  // }
  onClickDelete(){
    console.log(this.deletingItem);
    this.indexing = this.efgh.indexOf(this.deletingItem);
    console.log(this.indexing);
    this.efgh.splice(this.indexing,1);
  }
  onClickItem(item){
    this.deletingItem = item;
  }
}
