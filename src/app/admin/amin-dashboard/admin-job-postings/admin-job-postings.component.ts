import { Component } from '@angular/core';
import { DashboardTitleComponent } from '../../../component/dashboard-title/dashboard-title.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-job-postings',
  imports: [DashboardTitleComponent, CommonModule],
  templateUrl: './admin-job-postings.component.html',
  styleUrl: './admin-job-postings.component.css'
})
export class AdminJobPostingsComponent {
  headingText: string = 'Job Postings';

}
