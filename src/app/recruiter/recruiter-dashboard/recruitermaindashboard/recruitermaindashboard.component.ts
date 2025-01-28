import { Component } from '@angular/core';
import { DashboardTitleComponent } from '../../../component/dashboard-title/dashboard-title.component';
import { DashboardScoreComponent } from '../../../component/dashboard-score/dashboard-score.component';
import { HiringPipelineComponent } from '../../../component/hiring-pipeline/hiring-pipeline.component';
import { ScheduleComponent } from '../../../component/schedule/schedule.component';
import { RecruitmentPerformanceComponent } from '../../../component/recruitment-performance/recruitment-performance.component';
import { JobOverviewComponent } from '../../../component/job-overview/job-overview.component';
import { PendingActionComponent } from '../../../component/pending-action/pending-action.component';
import { RecruiterdashboardscoreComponent } from '../../../component/recruiterdashboardscore/recruiterdashboardscore.component';

@Component({
  selector: 'app-recruitermaindashboard',
  imports: [DashboardTitleComponent,RecruiterdashboardscoreComponent,HiringPipelineComponent,ScheduleComponent,RecruitmentPerformanceComponent,JobOverviewComponent,PendingActionComponent],
  templateUrl: './recruitermaindashboard.component.html',
  styleUrl: './recruitermaindashboard.component.css'
})
export class RecruitermaindashboardComponent {
  headingText: string = 'Dashboard';
}
