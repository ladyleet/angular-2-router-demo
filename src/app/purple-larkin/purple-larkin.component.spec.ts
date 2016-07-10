/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { PurpleLarkinComponent } from './purple-larkin.component';

describe('Component: PurpleLarkin', () => {
  it('should create an instance', () => {
    let component = new PurpleLarkinComponent();
    expect(component).toBeTruthy();
  });
});
