import { Component } from '@angular/core';
import { SideberComponent } from '../../include/sideber/sideber.component';
import { HeaderComponent } from '../../include/header/header.component';
import { RouterOutlet } from '@angular/router';
import { SidebarService } from '../../../services/sidebar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recruiterdashboard',
  imports: [SideberComponent,HeaderComponent,RouterOutlet,CommonModule],
  templateUrl: './recruiterdashboard.component.html',
  styleUrl: './recruiterdashboard.component.css'
})
export class RecruiterdashboardComponent {
 isSidebarVisible = true; // Default Sidebar Visible

  constructor(private sidebarService: SidebarService) {}

  ngOnInit() {
    this.sidebarService.currentSidebarState.subscribe(
      (value) => this.isSidebarVisible = value
    );
  }
}
