import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js/auto';
@Component({
  selector: 'jobs-performance',
  imports: [],
  templateUrl: './jobs-performance.component.html',
  styleUrl: './jobs-performance.component.css'
})
export class JobsPerformanceComponent {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit() {
    const canvas = this.chartCanvas.nativeElement;
    const ctx = canvas.getContext('2d');

    if (ctx) {
      // Create a gradient fill (optional, mainly for bar background)
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#2B59FF'); // Darker at the top
      gradient.addColorStop(1, '#2B59FF'); // Lighter at the bottom

      new Chart(ctx, {
        type: 'bar', // Changed to 'bar'
        data: {
          labels: ['Design', 'Development', 'Marketing', 'HR', 'Sales'],
          datasets: [
            {
              label: 'Sales',
              data: [65, 59, 80, 81, 56],
              backgroundColor: gradient, // Apply the gradient
              borderColor: '#E9A400', // Bar border color
              borderWidth: 0
            }
          ]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top'
            }
          },
          scales: {
            x: {
              grid: {
                display: false
              }
            },
            y: {
              beginAtZero: true,
              grid: {
                color: 'rgba(200, 200, 200, 0.2)' // Light grid lines
              }
            }
          }
        }
      });
    }
  }
}
