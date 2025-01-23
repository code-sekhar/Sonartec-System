import { Component } from '@angular/core';
import { DashboardTitleComponent } from '../../../component/dashboard-title/dashboard-title.component';
import { DraftJobComponent } from '../../../component/draft-job/draft-job.component';
import { PublishJobComponent } from '../../../component/publish-job/publish-job.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CustomCalenderComponent } from '../../../component/custom-calender/custom-calender.component';
@Component({
  selector: 'app-requests',
  imports: [DashboardTitleComponent,CommonModule,CustomCalenderComponent],
  templateUrl: './requests.component.html',
  styleUrl: './requests.component.css'
})
export class RequestsComponent {
  Requests: string = 'Requests';
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
