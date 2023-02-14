/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CertificateContentComponent } from './certificate-content.component';

describe('CertificateContentComponent', () => {
  let component: CertificateContentComponent;
  let fixture: ComponentFixture<CertificateContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificateContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificateContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
