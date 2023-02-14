import { ChangeDetectorRef, Component, OnInit, ViewRef } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
  experienceExpanded: boolean = false;
  diplomaExpanded: boolean = false;
  internshipExpanded: boolean = false;
  trainingExpanded: boolean = false;

  skills: string[] = [
    'Angular',
    'TypeScript',
    'UI/UX design',
    'Java',
    'C#',
    'C / C++ ',
    'ASP.NET Core 6',
    'Docker',
    'MySQL',
    'Linux OS',
    'Git',
  ];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {}

  onInternshipExpanded(expanded: boolean) {
    this.internshipExpanded = expanded;
    this.detectChanges();
  }
  onExperienceExpanded(expanded: boolean) {
    this.experienceExpanded = expanded;
    this.detectChanges();
  }
  onDiplomaExpanded(expanded: boolean) {
    this.diplomaExpanded = expanded;
    this.detectChanges();
  }
  onTrainingExpanded(expanded: boolean) {
    this.trainingExpanded = expanded;
    this.detectChanges();
  }

  detectChanges() {
    if (!(this.cdr as ViewRef).destroyed) this.cdr.detectChanges();
  }
}
