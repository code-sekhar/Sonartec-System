import { Component } from '@angular/core';
import { PipelineSummaryComponent } from '../../../component/pipeline-summary/pipeline-summary.component';
import { CommonModule } from '@angular/common';
import { ScreeningCandidatesComponent } from '../../../component/screening-candidates/screening-candidates.component';
import { SubmissinCandidatesComponent } from '../../../component/submissin-candidates/submissin-candidates.component';
import { PersonalEducationInformationComponent } from '../../../component/personal-education-information/personal-education-information.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ClientInformationComponent } from '../../../component/client-information/client-information.component';
import { RecruiterInformationComponent } from '../../../component/recruiter-information/recruiter-information.component';

@Component({
  selector: 'app-admin-detailjob-overview',
  imports: [PipelineSummaryComponent,CommonModule,ScreeningCandidatesComponent,SubmissinCandidatesComponent,PersonalEducationInformationComponent,RouterLink,RouterOutlet,ClientInformationComponent,RecruiterInformationComponent],
  templateUrl: './admin-detailjob-overview.component.html',
  styleUrl: './admin-detailjob-overview.component.css'
})
export class AdminDetailjobOverviewComponent {
  // isVisible = false; // Initial state: content is hidden
  // faqContent() {
  //     this.isVisible = !this.isVisible; // Toggle the visibility
  //   }
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
}
