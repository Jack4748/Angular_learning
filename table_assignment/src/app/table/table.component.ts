import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  title :string = "Product Data";
  isHide :boolean = true;
  tabKey :any = [];
  tabValue :any = [];
// sample data 
  prodData : any = [
    {
      prodid : "card 1",
      price : 3000,
      discount : 1000
    },
    {
      prodid : "card 2",
      price : 3000,
      discount : 1000
    },
    {
      prodid : "card 3",
      price : 3000,
      discount : 1000
    }
  ]
// function to get the table headers and table data separately
getData () {
  this.isHide = false;
  this.prodData.forEach((element :any) => {
    this.tabKey = Object.keys(element)
    this.tabValue.push(Object.values(element))
    
  });
}
}
