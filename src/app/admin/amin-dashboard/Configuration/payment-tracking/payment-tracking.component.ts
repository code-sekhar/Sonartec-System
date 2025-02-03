import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-payment-tracking',
  imports: [CommonModule],
  templateUrl: './payment-tracking.component.html',
  styleUrl: './payment-tracking.component.css'
})
export class PaymentTrackingComponent {
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
