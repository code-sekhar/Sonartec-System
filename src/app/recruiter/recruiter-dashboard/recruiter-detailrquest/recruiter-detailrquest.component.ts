import { Component } from '@angular/core';
import { DashboardTitleComponent } from '../../../component/dashboard-title/dashboard-title.component';

@Component({
  selector: 'app-recruiter-detailrquest',
  imports: [DashboardTitleComponent],
  templateUrl: './recruiter-detailrquest.component.html',
  styleUrl: './recruiter-detailrquest.component.css'
})
export class RecruiterDetailrquestComponent {
  headingText: string = 'Requests';
}
