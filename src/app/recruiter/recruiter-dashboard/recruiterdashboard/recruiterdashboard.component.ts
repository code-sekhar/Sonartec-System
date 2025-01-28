import { Component } from '@angular/core';
import { SideberComponent } from '../../include/sideber/sideber.component';
import { HeaderComponent } from '../../include/header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-recruiterdashboard',
  imports: [SideberComponent,HeaderComponent,RouterOutlet],
  templateUrl: './recruiterdashboard.component.html',
  styleUrl: './recruiterdashboard.component.css'
})
export class RecruiterdashboardComponent {

}
