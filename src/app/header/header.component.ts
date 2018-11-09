import { Component, OnInit, Renderer2,ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  managing: boolean = false;
  constructor(private ele: ElementRef, private render: Renderer2) { }
  

  ngOnInit() {
  }
  recipes = false;
  onClickRecipes(){
      //  this.shopping = false;
       this.recipes = true;
      //  this.render.setStyle(this.ele.nativeElement,"backgroundColor","green");
      this.ele.nativeElement.querySelector("#shopping").style.backgroundColor="";
      // this.ele.nativeElement.querySelector("#manage").style.backgroundColor=""; 

       this.ele.nativeElement.querySelector("#recipe").style.backgroundColor="white"; 
       
    }
  // shopping = false;
  onClickShopping(){
        this.recipes = false;
  //      this.shopping = true;
  this.ele.nativeElement.querySelector("#recipe").style.backgroundColor="";
  // this.ele.nativeElement.querySelector("#manage").style.backgroundColor=""; 

      this.ele.nativeElement.querySelector("#shopping").style.backgroundColor="white"; 
  }
  onClickManage(){
    this.managing = true;
    // this.recipes = false;
//      this.shopping = true;
this.ele.nativeElement.querySelector("#recipe").style.backgroundColor="";
this.ele.nativeElement.querySelector("#shopping").style.backgroundColor=""; 

  this.ele.nativeElement.querySelector("#manage").style.backgroundColor="white"; 

}
  
}
