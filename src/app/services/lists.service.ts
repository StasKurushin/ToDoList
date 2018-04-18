import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class ListsService {
    private lists = [];
    private tasks = [];
    private executed = [];
    private isShown = false;
    public currentList: number;
    private subject = new BehaviorSubject([]);
    constructor() { }
    add(value) {
        this.lists.push(value);
        this.setListId();
        this.subject.next(this.lists);
    }
    delete(i) {
        this.lists.splice(i, 1);
    }
    deleteTask(value) {
        this.lists[this.currentList].tasks.splice(value, 1);
    }
    update(i, value) {
        this.lists[i] = value;
    }
    get() {
        return this.subject;
    }
    getCurrentList(i) {
        this.currentList = i;
    }
    setListId() {
        return this.lists.map((el, idx) => el.id = idx);
    }
    addTask(value) {
        this.lists[this.currentList].tasks.push(value);
    }
    getLists() {
        return this.lists;
    }
    addExecuted(value) {
        this.lists[this.currentList].ex.push(value);
        this.isShown = true;
    }
    showEx() {
        return this.isShown;
    }
}
