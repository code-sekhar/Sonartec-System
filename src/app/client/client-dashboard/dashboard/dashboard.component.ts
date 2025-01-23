import { Component } from '@angular/core';
import { SideberComponent } from '../../include/sideber/sideber.component';
import { HeaderComponent } from '../../include/header/header.component';
import { FooterComponent } from '../../include/footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [SideberComponent,HeaderComponent,FooterComponent,RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
