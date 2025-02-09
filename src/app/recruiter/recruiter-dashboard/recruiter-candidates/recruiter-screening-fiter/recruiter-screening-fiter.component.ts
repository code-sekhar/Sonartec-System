import { Component } from '@angular/core';
import { DashboardTitleComponent } from '../../../../component/dashboard-title/dashboard-title.component';
import { CommonModule } from '@angular/common';
import { PersonalEducationInformationComponent } from '../../../../component/personal-education-information/personal-education-information.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ScreeningCandidatesMoveStageComponent } from '../../../../component/screening-candidates-move-stage/screening-candidates-move-stage.component';
import { ScreeningFiterCardComponent } from '../../../../component/screening-fiter-card/screening-fiter-card.component';

@Component({
  selector: 'app-recruiter-screening-fiter',
  imports: [CommonModule,PersonalEducationInformationComponent,RouterLink,ScreeningCandidatesMoveStageComponent,RouterOutlet,ScreeningFiterCardComponent],
  templateUrl: './recruiter-screening-fiter.component.html',
  styleUrl: './recruiter-screening-fiter.component.css'
})
export class RecruiterScreeningFiterComponent {
  faqs = [
    {
      question: 'Job Description',
      answer: 'Angular is a platform for building web applications.',
      isVisible: false,
    },
    {
      question: 'Requirements',
      answer: 'A component is a building block of an Angular application.',
      isVisible: false,
    },
    {
      question: 'Benefits',
      answer:
        'You can create an FAQ section using Angular by toggling visibility.',
      isVisible: false,
    },
    {
      question: 'How to Apply',
      answer:
        'You can create an FAQ section using Angular by toggling visibility.',
      isVisible: false,
    }
  ];

  toggleFAQ(index: number) {
    this.faqs[index].isVisible = !this.faqs[index].isVisible;
  }
  overviewisVisible = true; // Initially hidden
  candidatesisVisible = false; 
  overview() {
    
    this.overviewisVisible = true;
    this.candidatesisVisible = false;
  }
  candidates() {
    this.overviewisVisible = false;
    this.candidatesisVisible = true;
  }
  slideOpen = false;
  candidatesSlide(){
      this.slideOpen = !this.slideOpen;
  }
  slide(){
    this.slideOpen = false;
  }


  add_candidates_popup:boolean = false
  add_popups(){
    this.add_candidates_popup = !this.add_candidates_popup
  }
  cnd_close(){
    this.add_candidates_popup = false
  }




  addShoInterview:boolean = false
  addInterview() {
    // Add interview logic here
    this.addShoInterview = !this.addShoInterview
  }
  closePopupInterview(){
    this.addShoInterview = false;
  }

  submitClient:boolean = false
  submit_candidate(){
    this.submitClient = !this.submitClient;
  }
  hideClose(){
    this.submitClient = false
  }
}
