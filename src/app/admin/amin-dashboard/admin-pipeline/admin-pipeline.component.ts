import { Component } from '@angular/core';
import { DashboardTitleComponent } from '../../../component/dashboard-title/dashboard-title.component';

@Component({
  selector: 'app-admin-pipeline',
  imports: [DashboardTitleComponent],
  templateUrl: './admin-pipeline.component.html',
  styleUrl: './admin-pipeline.component.css'
})
export class AdminPipelineComponent {
  headingText: string = 'Pipeline';
}
