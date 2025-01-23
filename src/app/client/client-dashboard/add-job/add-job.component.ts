import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalEducationInformationComponent } from '../../../component/personal-education-information/personal-education-information.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { JobDetailComponent } from '../addNewJob/job-detail/job-detail.component';


@Component({
  selector: 'app-add-job',
  imports: [JobDetailComponent,CommonModule,PersonalEducationInformationComponent,RouterLink,RouterOutlet],
  templateUrl: './add-job.component.html',
  styleUrl: './add-job.component.css'
})
export class AddJobComponent {
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
