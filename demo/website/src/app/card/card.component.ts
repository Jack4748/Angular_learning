import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  isHide:boolean = true;
  count:number = 0
  @Output() update = new EventEmitter();
  @Input() title:string ="Card page";
  @Input() shortText:string = "short text";
  @Input() cardData:any = "cardData";
  onChange(){
    this.isHide =true;
    this.count++
    this.update.emit(`Hello from about component clicked ${this.count} times`) 
  }
    

}
