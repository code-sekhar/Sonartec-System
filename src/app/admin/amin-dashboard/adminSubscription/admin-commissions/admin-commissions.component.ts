import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-commissions',
  imports: [CommonModule],
  templateUrl: './admin-commissions.component.html',
  styleUrl: './admin-commissions.component.css'
})
export class AdminCommissionsComponent {
  headingText: string = 'Subscriptions';
  ShowSubscriptions: boolean = false;
  addSubscriptions(){
    this.ShowSubscriptions = !this.ShowSubscriptions;
  }
  closeSubscriptions(){
    this.ShowSubscriptions = false;
  }



  showPopup:boolean = false;
  showAddPopup:boolean = false;
  deactivePopup:boolean = false;
  confirmPopup(){
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
