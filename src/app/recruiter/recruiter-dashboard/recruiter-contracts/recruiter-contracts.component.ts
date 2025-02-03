import { Component } from '@angular/core';
import { DashboardTitleComponent } from '../../../component/dashboard-title/dashboard-title.component';
import { CommonModule } from '@angular/common';
import { CustomCalenderComponent } from '../../../component/custom-calender/custom-calender.component';

@Component({
  selector: 'app-recruiter-contracts',
  imports: [DashboardTitleComponent,CommonModule,CustomCalenderComponent],
  templateUrl: './recruiter-contracts.component.html',
  styleUrl: './recruiter-contracts.component.css'
})
export class RecruiterContractsComponent {
  interviews: string = 'Contracts';
 

  
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
