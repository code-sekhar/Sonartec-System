import { Component, Input } from '@angular/core';

@Component({
  selector: 'dashboard-title',
  imports: [],
  templateUrl: './dashboard-title.component.html',
  styleUrl: './dashboard-title.component.css'
})
export class DashboardTitleComponent {
  @Input() text: string = '';
title: any;
}
