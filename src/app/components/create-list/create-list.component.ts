import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { List } from '../../classes/list';
import {ListsService} from '../../services/lists.service';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.scss']
})
export class CreateListComponent implements OnInit {
    @Input() lists;
    public isShown: boolean;
    public list;
    constructor(private listsService: ListsService) { }
    ngOnInit() {
    }
    Submit(value) {
        this.list = {} as List;
        this.list.name = value;
        this.list.tasks = [];
        this.list.ex = [];
        this.listsService.add(this.list);
        this.isShown = false;
    }
    createNewList() {
      this.isShown = !this.isShown;
    }
}

