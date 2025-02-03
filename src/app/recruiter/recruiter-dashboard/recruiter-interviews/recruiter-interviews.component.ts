import { Component } from '@angular/core';
import { DashboardTitleComponent } from '../../../component/dashboard-title/dashboard-title.component';
import { CommonModule } from '@angular/common';
import { CustomCalenderComponent } from '../../../component/custom-calender/custom-calender.component';
import { ScheduleComponent } from '../../../component/schedule/schedule.component';

@Component({
  selector: 'app-recruiter-interviews',
  imports: [DashboardTitleComponent,CommonModule,CustomCalenderComponent,ScheduleComponent],
  templateUrl: './recruiter-interviews.component.html',
  styleUrl: './recruiter-interviews.component.css'
})
export class RecruiterInterviewsComponent {
  interviews: string = 'Interviews';
  faqs = [
    {
      question: 'Senior Product Designer',
      request: '5',
      isVisible: false,
    },
    {
      question: 'Product Manager',
      request: '3',
      isVisible: false,
    }
  ];
  faqs2 = [
    {
      question: 'Senior Product Designer',
      request: '5',
      isVisible2: false,
    },
    {
      question: 'Product Manager',
      request: '3',
      isVisible2: false,
    }
  ];

  toggleFAQ(index: number) {
    this.faqs[index].isVisible = !this.faqs[index].isVisible;
  }
  toggleFAQ2(index: number) {
    this.faqs2[index].isVisible2 = !this.faqs2[index].isVisible2;
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
