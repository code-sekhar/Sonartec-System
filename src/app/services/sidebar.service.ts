import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class SidebarService {
  sidebarVisible = new BehaviorSubject<boolean>(true); // Default Sidebar Visible
  currentSidebarState = this.sidebarVisible.asObservable();

  toggleSidebar() {
    this.sidebarVisible.next(!this.sidebarVisible.value); // True/False Toggle
  }
}
