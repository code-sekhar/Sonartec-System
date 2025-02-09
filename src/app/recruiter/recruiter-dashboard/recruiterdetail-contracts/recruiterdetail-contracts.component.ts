import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PersonalEducationInformationComponent } from '../../../component/personal-education-information/personal-education-information.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ResumeComponent } from '../../../client/client-dashboard/candidates/resume/resume.component';

@Component({
  selector: 'app-recruiterdetail-contracts',
  imports: [CommonModule,PersonalEducationInformationComponent,RouterLink,RouterOutlet,ResumeComponent],
  templateUrl: './recruiterdetail-contracts.component.html',
  styleUrl: './recruiterdetail-contracts.component.css'
})
export class RecruiterdetailContractsComponent {
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

















  showPopup:boolean = false;
  showAddPopup:boolean = false;
  deactivePopup:boolean = false;
  showDialog:boolean = false;
  showDecliendPopup:boolean = false;
  showprofile(){
    this.showPopup = !this.showPopup;
  }
  hideWidwral(){
    this.showPopup = false;
    this.showAddPopup = false;
    this.deactivePopup = false;
    this.showDecliendPopup = false;
    this.showSendClientPopup = false;
    this.showSendSignaturePopup = false;
  }
  deActivePopups(){
    this.deactivePopup = !this.deactivePopup;
     this.showDialog = false;
  }
  decliend_reasions(){
    this.showDecliendPopup = !this.showDecliendPopup
  }

  showSendClientPopup:boolean = false
  sendCandidate(){
    this.showSendClientPopup = !this.showSendClientPopup
  }
  showSendSignaturePopup:boolean = false
  sendSignature(){
    this.showSendSignaturePopup = !this.showSendSignaturePopup
  }
}
