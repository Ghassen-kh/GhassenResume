import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  progress: number = 10;
  personnalityDescLeft: Peronnality[] = [
    {
      desc: 'Efficient',
      progress: 22,
    },
    {
      desc: 'Productive',
      progress: 40,
    },
    {
      desc: 'Committed',
      progress: 58,
    },
  ];
  personnalityDescRight: Peronnality[] = [
    {
      desc: 'Dedicated',
      progress: 58,
    },
    {
      desc: 'Energetic',
      progress: 40,
    },
    {
      desc: 'Organized',
      progress: 22,
    },
  ];
  personnalityDescTop: Peronnality[] = [
    {
      desc: 'Ambitious',
      progress: 10,
    },
    {
      desc: 'Progressive',
      progress: 20,
    },
    {
      desc: 'Engaged',
      progress: 30,
    },
    {
      desc: 'Persistent',
      progress: 40,
    },
    {
      desc: 'Studious',
      progress: 50,
    },
    {
      desc: 'Assiduous',
      progress: 60,
    },

    {
      desc: 'Agile',
      progress: 70,
    },

    {
      desc: 'Hustling',
      progress: 80,
    },
  ];
  personnalityDescBottom: Peronnality[] = [
    {
      desc: 'Untiring',
      progress: 10,
    },
    {
      desc: 'Prompt',
      progress: 20,
    },
    {
      desc: 'Enthusiastic',
      progress: 30,
    },
    {
      desc: 'Toughtful',
      progress: 40,
    },
    {
      desc: 'Tenacious',
      progress: 50,
    },
    {
      desc: 'Preoccupied',
      progress: 60,
    },
    {
      desc: 'Unflagging',
      progress: 70,
    },
    {
      desc: 'Disciplined',
      progress: 80,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
export interface Peronnality {
  desc: string;
  progress: number;
}
