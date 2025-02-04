import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-support-activity-log',
  imports: [CommonModule],
  templateUrl: './support-activity-log.component.html',
  styleUrl: './support-activity-log.component.css'
})
export class SupportActivityLogComponent {
  showPopup:boolean = false;
  showAddPopup:boolean = false;
  deactivePopup:boolean = false;
  showprofile(){
    this.showPopup = !this.showPopup;
  }
  hideWidwral(){
    this.showPopup = false;
    this.showAddPopup = false;
    this.deactivePopup = false;
  }
  deActivePopups(){
    this.deactivePopup = !this.deactivePopup;
  }
}
