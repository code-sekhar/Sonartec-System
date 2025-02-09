import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-subscription-plans',
  imports: [CommonModule],
  templateUrl: './admin-subscription-plans.component.html',
  styleUrl: './admin-subscription-plans.component.css'
})
export class AdminSubscriptionPlansComponent {
  ShowSubscriptions: boolean = false;
  cancelSubscriptions(){
    this.ShowSubscriptions = !this.ShowSubscriptions;
  }
  closeSubscriptions(){
    this.ShowSubscriptions = false;
    this.showRenewSubscriptions = false;
    this.showViewSubscriptions = false;
  }
  showRenewSubscriptions:boolean = false;
  /*renewSubscriptions*/
  renewSubscriptions(){
    this.showRenewSubscriptions = !this.showRenewSubscriptions;
  }

  showViewSubscriptions:boolean = false;
  viewSubscriptions(){
    this.showViewSubscriptions = !this.showViewSubscriptions;
  }
}
