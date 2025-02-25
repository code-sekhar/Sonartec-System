import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalEducationInformationComponent } from '../../../component/personal-education-information/personal-education-information.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ResumeComponent } from '../candidates/resume/resume.component';
@Component({
  selector: 'app-detail-contracts',
  imports: [CommonModule,PersonalEducationInformationComponent,RouterLink,RouterOutlet,ResumeComponent],
  templateUrl: './detail-contracts.component.html',
  styleUrl: './detail-contracts.component.css'
})
export class DetailContractsComponent {
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



  ShowSubscriptions: boolean = false;
  Contract(){
    this.ShowSubscriptions = !this.ShowSubscriptions;
  }
  closeSubscriptions(){
    this.ShowSubscriptions = false;
    this.showSignIn = false;
    this.showReview = false
  }
  showSignIn:boolean = false;
  sendSign(){
    this.showSignIn = !this.showSignIn
  }

showReview:boolean = false;

  sendReview(){
    this.showReview = !this.showReview;
  }
}
