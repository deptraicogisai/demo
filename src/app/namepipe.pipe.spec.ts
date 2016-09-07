/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { NamepipePipe } from './namepipe.pipe';

describe('Pipe: Namepipe', () => {
  it('create an instance', () => {
    let pipe = new NamepipePipe();
    expect(pipe).toBeTruthy();
  });
});
