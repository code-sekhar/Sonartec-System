import { Component } from '@angular/core';
import { DashboardTitleComponent } from '../../../component/dashboard-title/dashboard-title.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-amin-user',
  imports: [DashboardTitleComponent, CommonModule],
  templateUrl: './amin-user.component.html',
  styleUrl: './amin-user.component.css'
})
export class AminUserComponent {
  headingText: string = 'Users';
  gridisVisible = true; // Initially hidden
  listVisible = false; 
  grid() {
    this.gridisVisible = true;
    this.listVisible = false;
  }
  list(){
    this.listVisible = true;
    this.gridisVisible = false;
  }
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
    this.showreasetPopup = false;
    this.showActivePopup = false;
  }
  //add user
  addUsers(){
    this.showAddPopup = !this.showAddPopup;
  }
  deActivePopups(){
    this.deactivePopup = !this.deactivePopup;
  }
  //reset password
  showreasetPopup:boolean = false;
  reasetPopups(){
    this.showreasetPopup = !this.showreasetPopup;
  }
  showActivePopup:boolean = false;
  activePopups(){
    this.showActivePopup = !this.showActivePopup;
  }
}
