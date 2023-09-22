import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent {
 
  @Input() title:string ="Default title";
  // isLoaded = false;
  // name:string = "xyz";
  // age:number = 20;
  // constructor() {
  //   console.log ("Hello Constructor");
  // }
  // ngOnInit(): void{
  //   this.isLoaded = true;
  // }
  // getData(){
  //   const data = this.getUserDetails();
  //   this.name = data.name;
  //   this.age = data.age;
  // }
  // getUserDetails() {
  // return{name: "jack",age:23} ;
  // }
  

  }

