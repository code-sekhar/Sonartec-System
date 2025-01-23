import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'hiring-pipeline',
  imports: [CommonModule],
  templateUrl: './hiring-pipeline.component.html',
  styleUrl: './hiring-pipeline.component.css'
})
export class HiringPipelineComponent {
  jobs = [
    {
      title: 'Research and Development Officer',
      type: 'Fulltime',
      stages: [55, 55, 55, 55, 55,],
    },
    {
      title: 'Research and Development Officer',
      type: 'Fulltime',
      stages: [55, 55, 55, 734.4, 55],
    },
    // Add more jobs as needed
  ];
}
