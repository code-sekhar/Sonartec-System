import { Component } from '@angular/core';
import { PipelineSummaryComponent } from '../../../component/pipeline-summary/pipeline-summary.component';
import { CommonModule } from '@angular/common';
import { AssignedHeadhunterComponent } from '../../../component/assigned-headhunter/assigned-headhunter.component';
import { RequestsfromHeadhuntersComponent } from '../../../component/requestsfrom-headhunters/requestsfrom-headhunters.component';
import { ScreeningCandidatesComponent } from '../../../component/screening-candidates/screening-candidates.component';
import { SubmissinCandidatesComponent } from '../../../component/submissin-candidates/submissin-candidates.component';
import { PersonalEducationInformationComponent } from '../../../component/personal-education-information/personal-education-information.component';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-detail-job-overview',
  imports: [PipelineSummaryComponent,CommonModule,AssignedHeadhunterComponent,RequestsfromHeadhuntersComponent,ScreeningCandidatesComponent,SubmissinCandidatesComponent,PersonalEducationInformationComponent,RouterLink,RouterOutlet],
  templateUrl: './detail-job-overview.component.html',
  styleUrl: './detail-job-overview.component.css'
})
export class DetailJobOverviewComponent {
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

  addShoInterview:boolean = false
  addInterview() {
    // Add interview logic here
    this.addShoInterview = !this.addShoInterview
  }
  closePopupInterview(){
    this.addShoInterview = false;
  }
}
