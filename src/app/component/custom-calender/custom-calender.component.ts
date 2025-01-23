import { Component } from '@angular/core';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'custom-calender',
  imports: [NzCalendarModule, FormsModule],
  templateUrl: './custom-calender.component.html',
  styleUrl: './custom-calender.component.css'
})
export class CustomCalenderComponent {
   // Current date
   selectedDate: Date = new Date();

   // Dropdown options
   months = [
     'January', 'February', 'March', 'April', 'May', 'June',
     'July', 'August', 'September', 'October', 'November', 'December'
   ];
   years: number[] = Array.from({ length: 21 }, (_, i) => new Date().getFullYear() - 10 + i);
 
   // Currently selected month and year
   selectedMonth = this.selectedDate.getMonth();
   selectedYear = this.selectedDate.getFullYear();
 today: any;
 
   // Go to today's date
   goToToday(): void {
     this.selectedDate = new Date();
     this.selectedMonth = this.selectedDate.getMonth();
     this.selectedYear = this.selectedDate.getFullYear();
   }
 
   // Handle month change
   onMonthChange(): void {
     this.selectedDate = new Date(this.selectedYear, this.selectedMonth, 1);
   }
 
   // Handle year change
   onYearChange(): void {
     this.selectedDate = new Date(this.selectedYear, this.selectedMonth, 1);
   }
 
   // Handle panel changes (like mode switching)
   onPanelChange(event: { date: Date; mode: string }): void {
     this.selectedDate = event.date;
   }
}
