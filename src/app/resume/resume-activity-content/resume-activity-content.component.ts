import { Component, Input, OnInit } from '@angular/core';
import { Role } from './resume-activity-content.models';

@Component({
  selector: 'resume-activity-content',
  templateUrl: './resume-activity-content.component.html',
  styleUrls: ['./resume-activity-content.component.scss'],
})
export class ResumeActivityContentComponent implements OnInit {
  @Input() roles!: Role[];
  constructor() {}

  ngOnInit() {}
}
