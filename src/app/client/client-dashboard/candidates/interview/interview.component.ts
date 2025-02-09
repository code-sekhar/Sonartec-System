import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-interview',
  imports: [CommonModule],
  templateUrl: './interview.component.html',
  styleUrl: './interview.component.css'
})
export class InterviewComponent {
  addShoInterview:boolean = false
  addInterview() {
    // Add interview logic here
    this.addShoInterview = !this.addShoInterview
  }
  closePopupInterview(){
    this.addShoInterview = false;
  }
}
