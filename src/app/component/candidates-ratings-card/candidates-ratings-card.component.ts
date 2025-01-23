import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'candidates-ratings-card',
  imports: [CommonModule],
  templateUrl: './candidates-ratings-card.component.html',
  styleUrl: './candidates-ratings-card.component.css'
})
export class CandidatesRatingsCardComponent {
  isTooltipVisible: boolean = false;
  toggleTooltip(){
    this.isTooltipVisible = !this.isTooltipVisible
  }
}
