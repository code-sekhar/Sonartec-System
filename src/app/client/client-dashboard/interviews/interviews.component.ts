import { Component } from '@angular/core';
import { DashboardTitleComponent } from '../../../component/dashboard-title/dashboard-title.component';
import { CommonModule } from '@angular/common';
import { CustomCalenderComponent } from '../../../component/custom-calender/custom-calender.component';
@Component({
  selector: 'app-interviews',
  imports: [DashboardTitleComponent,CommonModule,CustomCalenderComponent],
  templateUrl: './interviews.component.html',
  styleUrl: './interviews.component.css'
})
export class InterviewsComponent {
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
