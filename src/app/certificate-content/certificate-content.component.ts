import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../portfolio/portfolio.component';

@Component({
  selector: 'app-certificate-content',
  templateUrl: './certificate-content.component.html',
  styleUrls: ['./certificate-content.component.scss'],
})
export class CertificateContentComponent implements OnInit {
  certificate: string = '';
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {
    switch (data.step) {
      case 1:
        this.certificate = 'Upper intermediate 3 Level general English';
        break;
      case 2:
        this.certificate =
          'Generation leaders program of the Biat Foundation for Youth';
        break;
      case 3:
        this.certificate =
          'Fundamental skills of coaching : Neuro Linguistic Programming';
        break;
      case 4:
        this.certificate = 'Level 8 general English';
        break;
      case 5:
        this.certificate =
          'Practitioner in Neurolinguistic Programming (Psynapse)';
        break;
      case 6:
        this.certificate = 'Agile Scrum (Advancia training)';
        break;
      case 7:
        this.certificate =
          'Computer Vision - Image Basics with OpenCV and Python';
        break;
      case 8:
        this.certificate =
          'Docker Essentials & Building a Containerized Web Application';
        break;
      case 9:
        this.certificate = 'HTML, CSS, and Javascript for Web Developers';
        break;
      case 10:
        this.certificate = 'Modern C++ Multithreading (udemy)';
        break;

      default:
        break;
    }
  }

  ngOnInit() {}
}
