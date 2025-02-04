import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DashboardTitleComponent } from '../../../../component/dashboard-title/dashboard-title.component';

@Component({
  selector: 'app-support-moderation',
  imports: [CommonModule,RouterLink,RouterOutlet,RouterLinkActive,DashboardTitleComponent],
  templateUrl: './support-moderation.component.html',
  styleUrl: './support-moderation.component.css'
})
export class SupportModerationComponent {
  headingText: string = 'Support / Moderation';
}
