import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-support-tickets',
  imports: [CommonModule],
  templateUrl: './support-tickets.component.html',
  styleUrl: './support-tickets.component.css'
})
export class SupportTicketsComponent {
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
