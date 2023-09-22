import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  cardTitle:string = "Child Title"
  title = 'website';
  onUpdate(data:any){
    this.cardTitle = data
  }

cardData:any =[
  {
    title: "card 1",
    shortText: "Card 1 short text"
  },
  {
    title: "card 2",
    shortText: "Card 2 short text"
  },
  {
    title: "card 3",
    shortText: "Card 3 short text"
  },
  {
    title: "card 4",
    shortText: "Card 4 short text"
  },
]



}
