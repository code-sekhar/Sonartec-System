import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js/auto';
@Component({
  selector: 'user-growth',
  imports: [],
  templateUrl: './user-growth.component.html',
  styleUrl: './user-growth.component.css'
})
export class UserGrowthComponent {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit() {
    const canvas = this.chartCanvas.nativeElement;
    const ctx = canvas.getContext('2d');

    if (ctx) {
      new Chart(ctx, {
        type: 'doughnut', // Changed to 'pie'
        data: {
          labels: ['Recruiters', 'Clients',],
          datasets: [
            {
              label: 'Sales Distribution',
              data: [70, 30], // Values for each category
              backgroundColor: [
                '#16A161', // Design
                '#8B2CE9', // Development
              ],
              borderColor: '#ffffff',
              borderWidth: 0
            }
          ]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'bottom'
            }
          }
        }
      });
    }
  }
}
