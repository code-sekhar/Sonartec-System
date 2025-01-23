import { Component } from '@angular/core';
import { DashboardTitleComponent } from '../../../component/dashboard-title/dashboard-title.component';
import { DashboardScoreComponent } from '../../../component/dashboard-score/dashboard-score.component';
import { HiringPipelineComponent } from '../../../component/hiring-pipeline/hiring-pipeline.component';
import { ScheduleComponent } from '../../../component/schedule/schedule.component';
import { RecruitmentPerformanceComponent } from '../../../component/recruitment-performance/recruitment-performance.component';
import { JobOverviewComponent } from '../../../component/job-overview/job-overview.component';
import { PendingActionComponent } from '../../../component/pending-action/pending-action.component';

@Component({
  selector: 'app-maindashboard',
  imports: [DashboardTitleComponent,DashboardScoreComponent,HiringPipelineComponent,ScheduleComponent,RecruitmentPerformanceComponent,JobOverviewComponent,PendingActionComponent],
  templateUrl: './maindashboard.component.html',
  styleUrl: './maindashboard.component.css'
})
export class MaindashboardComponent {
  headingText: string = 'Dashboard';
}
