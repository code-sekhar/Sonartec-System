import { Component } from '@angular/core';
import { DashboardTitleComponent } from '../../../../component/dashboard-title/dashboard-title.component';

@Component({
  selector: 'app-pipeline',
  imports: [DashboardTitleComponent],
  templateUrl: './pipeline.component.html',
  styleUrl: './pipeline.component.css'
})
export class PipelineComponent {
  headingText: string = 'Pipeline';
}
