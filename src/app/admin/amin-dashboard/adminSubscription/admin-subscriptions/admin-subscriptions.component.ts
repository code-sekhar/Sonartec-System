import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PersonalEducationInformationComponent } from '../../../../component/personal-education-information/personal-education-information.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ResumeComponent } from '../../../../client/client-dashboard/candidates/resume/resume.component';
import { DashboardTitleComponent } from '../../../../component/dashboard-title/dashboard-title.component';

@Component({
  selector: 'app-admin-subscriptions',
  imports: [CommonModule,RouterLink,RouterOutlet,RouterLinkActive,DashboardTitleComponent],
  templateUrl: './admin-subscriptions.component.html',
  styleUrl: './admin-subscriptions.component.css'
})
export class AdminSubscriptionsComponent {
  headingText: string = 'Subscriptions';
  ShowSubscriptions: boolean = false;
  addSubscriptions(){
    this.ShowSubscriptions = !this.ShowSubscriptions;
  }
  closeSubscriptions(){
    this.ShowSubscriptions = false;
  }
}
