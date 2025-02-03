import { Component, OnInit } from '@angular/core';
import { SideberComponent } from '../../include/sideber/sideber.component';
import { HeaderComponent } from '../../include/header/header.component';
import { RouterOutlet } from '@angular/router';
import { SidebarService } from '../../../services/sidebar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-amindashboard',
  imports: [SideberComponent,HeaderComponent,RouterOutlet,CommonModule],
  templateUrl: './amindashboard.component.html',
  styleUrl: './amindashboard.component.css'
})
export class AmindashboardComponent implements OnInit {
  isSidebarVisible = true; // Default Sidebar Visible

  constructor(private sidebarService: SidebarService) {}

  ngOnInit() {
    this.sidebarService.currentSidebarState.subscribe(
      (value) => this.isSidebarVisible = value
    );
  }

}
