import {Component, Input, OnInit} from '@angular/core';
import {ListsService} from '../../services/lists.service';
import { List, Task } from '../../classes/list';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {
    public lists = [];
    public task;
    public isShown: boolean;
    constructor(public listsService: ListsService) { }
    ngOnInit() {
    }
    pushTask(value) {
        this.task = {} as Task;
        this.task.item = value;
        this.listsService.addTask(this.task);
        this.getLists();
    }
    addTask(value) {
        if (this.listsService.currentList === undefined) {
            alert('choose the list');
        } else {
           this.pushTask(value);
        }
    }
    getLists() {
        this.lists = this.listsService.getLists();
    }
    setExecuted(i, value) {
        this.listsService.addExecuted(value);
        this.isShown = this.listsService.showEx();
        this.deleteTask(i);

    }
    deleteTask(i) {
        this.listsService.deleteTask(i);
    }

}
