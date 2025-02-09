import { Component } from '@angular/core';
import { DashboardTitleComponent } from '../../../component/dashboard-title/dashboard-title.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recruiter-job-openings',
  imports: [DashboardTitleComponent,CommonModule],
  templateUrl: './recruiter-job-openings.component.html',
  styleUrl: './recruiter-job-openings.component.css'
})
export class RecruiterJobOpeningsComponent {
  headingText: string = 'Job Openings';



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
  showDialog:boolean = false
  openDialog(){
    this.showDialog = !this.showDialog;
  }
  closeDialog(){
    this.showDialog = false;
  }
  showPopup:boolean = false;
  showAddPopup:boolean = false;
  deactivePopup:boolean = false;
  showprofile(){
    this.showPopup = !this.showPopup;
  }
  hideWidwral(){
    this.showPopup = false;
    this.showAddPopup = false;
    this.deactivePopup = false;
  }
  deActivePopups(){
    this.deactivePopup = !this.deactivePopup;
     this.showDialog = false;
  }
}
