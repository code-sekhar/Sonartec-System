import { Component } from '@angular/core';
import { DashboardTitleComponent } from '../../../component/dashboard-title/dashboard-title.component';
import { DraftJobComponent } from '../../../component/draft-job/draft-job.component';
import { PublishJobComponent } from '../../../component/publish-job/publish-job.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CandidatesRatingsCardComponent } from '../../../component/candidates-ratings-card/candidates-ratings-card.component';

@Component({
  selector: 'app-recruiter-candidate',
  imports: [DashboardTitleComponent,DraftJobComponent,PublishJobComponent,CommonModule,RouterLink,CandidatesRatingsCardComponent],
  templateUrl: './recruiter-candidate.component.html',
  styleUrl: './recruiter-candidate.component.css'
})
export class RecruiterCandidateComponent {
  headingText: string = 'Candidates';
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
