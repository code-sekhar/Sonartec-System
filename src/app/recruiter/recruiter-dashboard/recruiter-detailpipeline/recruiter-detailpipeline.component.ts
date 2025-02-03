import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PersonalEducationInformationComponent } from '../../../component/personal-education-information/personal-education-information.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ScreeningCandidatesMoveStageComponent } from '../../../component/screening-candidates-move-stage/screening-candidates-move-stage.component';

@Component({
  selector: 'app-recruiter-detailpipeline',
  imports: [CommonModule,PersonalEducationInformationComponent,RouterLink,ScreeningCandidatesMoveStageComponent,RouterOutlet],
  templateUrl: './recruiter-detailpipeline.component.html',
  styleUrl: './recruiter-detailpipeline.component.css'
})
export class RecruiterDetailpipelineComponent {
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
}
