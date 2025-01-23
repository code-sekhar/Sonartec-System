import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js/auto'; // Import Chart.js

@Component({
  selector: 'recruitment-performance',
  standalone: true,
  imports: [],
  templateUrl: './recruitment-performance.component.html',
  styleUrl: './recruitment-performance.component.css'
})
export class RecruitmentPerformanceComponent implements AfterViewInit {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit() {
    const canvas = this.chartCanvas.nativeElement;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      // Create a gradient fill
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, 'rgba(255, 186, 20, 0.10)'); // Start color
      gradient.addColorStop(1, 'rgba(255, 186, 20, 0.01)'); // End color

      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May'],
          datasets: [
            {
              label: 'Sales',
              data: [65, 59, 80, 81, 56],
              backgroundColor: gradient, // Apply the gradient as the fill
              borderColor: '#E9A400', // Custom stroke color
              borderWidth: 1, // Stroke width
              fill: true, // Enable gradient fill
              tension: 0.4 // Smooth curve for wave effect
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
