import { Component } from '@angular/core';
import { DashboardTitleComponent } from '../../../component/dashboard-title/dashboard-title.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recruiter-detailrquest',
  imports: [DashboardTitleComponent,CommonModule],
  templateUrl: './recruiter-detailrquest.component.html',
  styleUrl: './recruiter-detailrquest.component.css'
})
export class RecruiterDetailrquestComponent {
  headingText: string = 'Requests';
  showPopup:boolean = false;
  showAddPopup:boolean = false;
  deactivePopup:boolean = false;
  showDialog:boolean = false;
  showDecliendPopup:boolean = false;
  showprofile(){
    this.showPopup = !this.showPopup;
  }
  hideWidwral(){
    this.showPopup = false;
    this.showAddPopup = false;
    this.deactivePopup = false;
    this.showDecliendPopup = false;
  }
  deActivePopups(){
    this.deactivePopup = !this.deactivePopup;
     this.showDialog = false;
  }
  decliend_reasions(){
    this.showDecliendPopup = !this.showDecliendPopup
  }
}
