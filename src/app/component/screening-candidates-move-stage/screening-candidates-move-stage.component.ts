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
  showScorePopup:boolean = false;
  viewScore(){
    this.showScorePopup = true;
  }
  closeScore(){
    this.showScorePopup = false
  }

  //History popup 
  showHistoryPopup:boolean = false;
  viewHistory(){
    this.showHistoryPopup = true;
  }
  closeHistory(){
    this.showHistoryPopup = false
    this.candidateHistoryPopup = false
  }

  addCommentPopup:boolean = false;
  addComment(){
    this.addCommentPopup = true;
  }
  closeComment(){
    this.addCommentPopup = false
  }
  candidateHistoryPopup:boolean = false;
  candidateHistory(){
    this.candidateHistoryPopup = !this.candidateHistoryPopup;
  }
}
