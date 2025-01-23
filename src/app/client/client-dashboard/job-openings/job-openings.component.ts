import { Component } from '@angular/core';
import { DashboardTitleComponent } from '../../../component/dashboard-title/dashboard-title.component';
import { DraftJobComponent } from '../../../component/draft-job/draft-job.component';
import { PublishJobComponent } from '../../../component/publish-job/publish-job.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-job-openings',
  imports: [DashboardTitleComponent,DraftJobComponent,PublishJobComponent,CommonModule,RouterLink],
  templateUrl: './job-openings.component.html',
  styleUrl: './job-openings.component.css'
})
export class JobOpeningsComponent {
  headingText: string = 'Job Openings';
  gridisVisible = true; // Initially hidden
  listVisible = false; 
  grid() {
    this.gridisVisible = true;
    this.listVisible = false;
  }
  list(){
    this.listVisible = true;
    this.gridisVisible = false;
  }
}
