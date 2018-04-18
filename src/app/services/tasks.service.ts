import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { List } from '../classes/list';
import {ListsService} from './lists.service';
@Injectable()
export class TasksService {
    private tasks = [];
    private subject = new BehaviorSubject([]);
    constructor(private listsServ: ListsService) { }
    get() {
    }
}
