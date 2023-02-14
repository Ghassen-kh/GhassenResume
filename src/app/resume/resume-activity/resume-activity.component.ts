import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Role } from '../resume-activity-content/resume-activity-content.models';

@Component({
  selector: 'resume-activity',
  templateUrl: './resume-activity.component.html',
  styleUrls: ['./resume-activity.component.scss'],
})
export class ResumeActivityComponent implements OnInit {
  panelOpenState: number = 0;
  @Output() intershipExpandedEvent: EventEmitter<boolean> =
    new EventEmitter<boolean>();
  @Output() experienceExpandedEvent: EventEmitter<boolean> =
    new EventEmitter<boolean>();
  @Output() diplomaExpandedEvent: EventEmitter<boolean> =
    new EventEmitter<boolean>();
  @Output() trainingExpandedEvent: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  professionalExperience: Role[] = [
    {
      date: 'From July 2021',
      description: 'Front end web Developer (Angular)',
      place: 'Seit Consulting Tunisia, TUNIS',
      tasks: [
        {
          description: 'Tasks',
          tasks: [
            'Design and engineering UI/UX interfaces in the financial and insurance sector: Figma / Balsamiq',
            'Front End Web Development: Angular / Typescript',
            'Test Driven Development Approach using karma and jasmine',
            '.NET Core backend API integration & Continuous Deployment (Microsoft Azure)',
          ],
        },
      ],
    },
    {
      date: '02-2021 to 05-2021',
      description: 'Part time project (Web development)',
      place: 'Remote work, TUNIS, Tunisia',
      tasks: [
        {
          description: 'Tasks',
          tasks: [
            'Building and testing e-commerce web application: Angular, TypeScript, Firebase, Bootstrap, angular material',
          ],
        },
      ],
    },
    {
      date: '02-2020 to 12-2020',
      description:
        'Graduation internship : Non-Cooperative 3D Face Recognition in Uncontrolled Environment',
      place: 'Cocentris Tunisia, Marsa, Tunisia',
      tasks: [
        {
          description: 'Tasks',
          tasks: [
            '3D Point cloud data processing',
            'Image processing : OpenCV, C++ ',
            'Application of face landmarks detection and PCA algorithm for facial recognition in C++',
            '3D representation and computer graphics: OpenGL',
            'Database management: Postgresql',
          ],
        },
      ],
    },
  ];

  diplomas: Role[] = [
    {
      date: 'From 09-2015 to 12-2020',
      description: 'Engineering diploma in industrial Instrumentation',
      place: 'National Institute of Applied Sciences and Technology (INSAT)',
      tasks: [
        {
          description: 'Branch',
          tasks: ['Instrumentation and intelligent systems'],
        },
        {
          description: 'Grade',
          tasks: ['good'],
        },
      ],
    },
    {
      date: '2015',
      description: 'Baccalaureate in technology branch',
      place: 'ElKef Pioneer School',
      tasks: [{ description: 'Grade', tasks: ['Excellent : 18.12/20'] }],
    },
  ];
  internships: Role[] = [
    {
      date: 'From 07-2020 to 09-2020',
      description: 'School management Windows forms application',
      place: 'C#, SQL database, .NET6, ADO.NET(Entity Framework) and LINQ',
    },
    {
      date: 'From 05-2022 to 07-2022',
      description:
        'World countries management ASP .NET Core 6 and Angular 11 web application',
      place: 'MPC PROKIM Ben Arouss',
    },
  ];
  trainings: Role[] = [
    {
      date: '01-2023',
      description: 'CSS - Basics to advanced for front end development [2022]',
      place: 'Udemy, online courses',
    },
    {
      date: '04 2021',
      description:
        'Hands-On Machine Learning with scikit-learn and Python (udemy)',
      place: 'Udemy, online courses',
    },
    {
      date: 'Mars 2022',
      description: 'Modern C++ Multithreading (udemy)',
      place: 'Udemy, online courses',
    },
    {
      date: '11-2020',
      description: 'HTML, CSS, and Javascript for Web Developers',
      place: 'Coursera, online courses',
    },
    {
      date: '09-2021',
      description:
        'Docker Essentials & Building a Containerized Web Application',
      place: 'Coursera, online courses',
    },
    {
      date: '05-2020',
      description: 'Computer Vision - Image Basics with OpenCV and Python',
      place: 'Coursera, online courses',
    },
    {
      date: '02-2020',
      description: 'Agile Scrum (Advancia training)',
      place: 'Advancia Training',
    },
    {
      date: '05-2019',
      description: 'Practitioner in Neurolinguistic Programming (Psynapse)',
      place: 'Psynapse Formations',
    },
    {
      date: '11-2018',
      description: 'Level 8 general English ',
      place: 'Amideast/Tunisia',
    },
    {
      date: '01-2018',
      description:
        'Fundamental skills of coaching : Neuro Linguistic Programming',
      place: 'Psynapse Formations',
    },
    {
      date: '09-2015 - 02-2020',
      description:
        'Generation leaders program of the Biat Foundation for Youth',
      place: 'Fondation BIAT For Youth',
    },
    {
      date: '2018',
      description: 'Upper intermediate 3 Level general English',
      place: 'British Council',
    },
  ];
  constructor() {}

  ngOnInit() {}

  internshipExpanded(expanded: boolean) {
    this.intershipExpandedEvent.emit(expanded);
  }
  diplomaExpanded(expanded: boolean) {
    this.diplomaExpandedEvent.emit(expanded);
  }
  experienceExpanded(expanded: boolean) {
    this.experienceExpandedEvent.emit(expanded);
  }

  trainingExpanded(expanded: boolean) {
    this.trainingExpandedEvent.emit(expanded);
  }
}
