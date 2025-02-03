import { Component } from '@angular/core';
import { DashboardTitleComponent } from '../../../component/dashboard-title/dashboard-title.component';
import { JobOverviewComponent } from '../../../component/job-overview/job-overview.component';
import { AmindashboardScoreComponent } from '../../../component/amindashboard-score/amindashboard-score.component';
import { EarningsTrendComponent } from '../../../component/earnings-trend/earnings-trend.component';
import { NotificationsComponent } from '../../../component/notifications/notifications.component';
import { JobsPerformanceComponent } from '../../../component/jobs-performance/jobs-performance.component';
import { UserGrowthComponent } from '../../../component/user-growth/user-growth.component';

@Component({
  selector: 'app-aminmain-dashboard',
  imports: [DashboardTitleComponent,AmindashboardScoreComponent,JobOverviewComponent,EarningsTrendComponent,NotificationsComponent,JobsPerformanceComponent,UserGrowthComponent],
  templateUrl: './aminmain-dashboard.component.html',
  styleUrl: './aminmain-dashboard.component.css'
})
export class AminmainDashboardComponent {
  headingText: string = 'Dashboard';
}
