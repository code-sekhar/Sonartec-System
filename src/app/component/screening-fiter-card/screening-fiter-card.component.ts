import { Component } from '@angular/core';

@Component({
  selector: 'screening-fiter-card',
  imports: [],
  templateUrl: './screening-fiter-card.component.html',
  styleUrl: './screening-fiter-card.component.css'
})
export class ScreeningFiterCardComponent {
  isTooltipVisible: boolean = false;
  toggleTooltip(){
    this.isTooltipVisible = !this.isTooltipVisible
  }
}
