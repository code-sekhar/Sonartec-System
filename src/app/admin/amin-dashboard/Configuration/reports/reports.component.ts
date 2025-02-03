import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DashboardTitleComponent } from '../../../../component/dashboard-title/dashboard-title.component';

@Component({
  selector: 'app-reports',
  imports: [CommonModule,RouterLink,RouterOutlet,RouterLinkActive,DashboardTitleComponent],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css'
})
export class ReportsComponent {
  headingText: string = 'Configuration';
}
