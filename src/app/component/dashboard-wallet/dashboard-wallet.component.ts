import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'dashboard-wallet',
  imports: [CommonModule],
  templateUrl: './dashboard-wallet.component.html',
  styleUrl: './dashboard-wallet.component.css'
})
export class DashboardWalletComponent {
  showPopup:boolean = false;
  showWidwral(){
    this.showPopup = !this.showPopup;
  }
  hideWidwral(){
    this.showPopup = false;
  }

}
