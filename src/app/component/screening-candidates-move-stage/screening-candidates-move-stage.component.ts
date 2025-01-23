import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'screening-candidates-move-stage',
  imports: [CommonModule],
  templateUrl: './screening-candidates-move-stage.component.html',
  styleUrl: './screening-candidates-move-stage.component.css'
})
export class ScreeningCandidatesMoveStageComponent {
  isTooltipVisible: boolean = false;
  toggleTooltip(){
    this.isTooltipVisible = !this.isTooltipVisible
  }
}
