/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { ChildComponent } from './child.component';

describe('Component: Child', () => {
  it('should create an instance', () => {
    let component = new ChildComponent();
    expect(component).toBeTruthy();
  });
});
