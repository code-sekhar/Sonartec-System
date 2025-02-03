import { Component } from '@angular/core';
import { SideberComponent } from '../../include/sideber/sideber.component';
import { HeaderComponent } from '../../include/header/header.component';
import { FooterComponent } from '../../include/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { SidebarService } from '../../../services/sidebar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [SideberComponent,HeaderComponent,RouterOutlet,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  isSidebarVisible = true; // Default Sidebar Visible

  constructor(private sidebarService: SidebarService) {}

  ngOnInit() {
    this.sidebarService.currentSidebarState.subscribe(
      (value) => this.isSidebarVisible = value
    );
  }
}
