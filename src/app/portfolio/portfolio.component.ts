import { ChangeDetectorRef, Component, OnInit, ViewRef } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CertificateContentComponent } from '../certificate-content/certificate-content.component';
export interface DialogData {
  step: number;
}
@Component({
  selector: 'portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  achievementStep: number = 0;
  constructor(private cdr: ChangeDetectorRef, public dialog: MatDialog) {}

  ngOnInit(): void {}

  forwardClick() {
    this.achievementStep += 1;
    if (this.achievementStep == 5) this.achievementStep = 0;
    this.detectChanges();
  }
  backwardClick() {
    this.achievementStep -= 1;
    this.detectChanges();
  }
  openDialog(): void {
    this.dialog.open(CertificateContentComponent, {
      width: '700px',
      height: '500px',
      data: { step: this.achievementStep },
    });
  }
  detectChanges() {
    if (!(this.cdr as ViewRef).destroyed) this.cdr.detectChanges();
  }
}
