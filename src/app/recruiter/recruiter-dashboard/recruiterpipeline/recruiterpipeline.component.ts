import { Component } from '@angular/core';
import { DashboardTitleComponent } from '../../../component/dashboard-title/dashboard-title.component';

@Component({
  selector: 'app-recruiterpipeline',
  imports: [DashboardTitleComponent],
  templateUrl: './recruiterpipeline.component.html',
  styleUrl: './recruiterpipeline.component.css'
})
export class RecruiterpipelineComponent {
  headingText: string = 'Pipeline';
}
