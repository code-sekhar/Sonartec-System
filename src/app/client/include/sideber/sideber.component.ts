import { Component, NgModule } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sideber',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './sideber.component.html',
  styleUrl: './sideber.component.css'
})
export class SideberComponent {
isExtraClassEnabled: any;

}
