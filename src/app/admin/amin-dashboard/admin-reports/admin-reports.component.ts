import { Component } from '@angular/core';
import { DashboardTitleComponent } from '../../../component/dashboard-title/dashboard-title.component';
import { AmindashboardScoreComponent } from '../../../component/amindashboard-score/amindashboard-score.component';
import { JobOverviewComponent } from '../../../component/job-overview/job-overview.component';
import { EarningsTrendComponent } from '../../../component/earnings-trend/earnings-trend.component';
import { NotificationsComponent } from '../../../component/notifications/notifications.component';
import { JobsPerformanceComponent } from '../../../component/jobs-performance/jobs-performance.component';
import { UserGrowthComponent } from '../../../component/user-growth/user-growth.component';
import { ReportsScoreComponent } from '../../../component/reports-score/reports-score.component';

@Component({
  selector: 'app-admin-reports',
  imports: [DashboardTitleComponent,AmindashboardScoreComponent,JobOverviewComponent,EarningsTrendComponent,NotificationsComponent,JobsPerformanceComponent,UserGrowthComponent,ReportsScoreComponent],
  templateUrl: './admin-reports.component.html',
  styleUrl: './admin-reports.component.css'
})
export class AdminReportsComponent {
  headingText: string = 'Dashboard';
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
  //add user
  addUsers(){
    this.showAddPopup = !this.showAddPopup;
  }
  deActivePopups(){
    this.deactivePopup = !this.deactivePopup;
  }
}
