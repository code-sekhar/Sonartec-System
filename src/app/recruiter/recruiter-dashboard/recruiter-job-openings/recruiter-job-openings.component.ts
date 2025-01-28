import { Component } from '@angular/core';
import { DashboardTitleComponent } from '../../../component/dashboard-title/dashboard-title.component';

@Component({
  selector: 'app-recruiter-job-openings',
  imports: [DashboardTitleComponent],
  templateUrl: './recruiter-job-openings.component.html',
  styleUrl: './recruiter-job-openings.component.css'
})
export class RecruiterJobOpeningsComponent {
  headingText: string = 'Job Openings';
}
