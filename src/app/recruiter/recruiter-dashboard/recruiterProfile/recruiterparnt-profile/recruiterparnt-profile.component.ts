import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalEducationInformationComponent } from '../../../../component/personal-education-information/personal-education-information.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DashboardTitleComponent } from '../../../../component/dashboard-title/dashboard-title.component';

@Component({
  selector: 'app-recruiterparnt-profile',
  imports: [CommonModule,PersonalEducationInformationComponent,RouterLink,RouterOutlet,DashboardTitleComponent,RouterLinkActive],
  templateUrl: './recruiterparnt-profile.component.html',
  styleUrl: './recruiterparnt-profile.component.css'
})
export class RecruiterparntProfileComponent {
  headingText: string = 'Profile';
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
