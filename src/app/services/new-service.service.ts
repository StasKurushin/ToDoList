import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class NewServiceService {
  private arr: any[] = [];
    private subject = new BehaviorSubject([]);
    constructor() { }

  add(value) {
    this.arr.push(value);
    this.subject.next(this.arr);
  }
  delete(value) {
    const idx = this.arr.findIndex( el => el === value);
    this.arr.splice(idx, 1);
  }
  update(i, value) {
      this.arr[i] = value;
  }
  get() {
    return this.subject;
  }
}
