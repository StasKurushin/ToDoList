import {Component, Input, OnInit} from '@angular/core';
import {ListsService} from '../../services/lists.service';

@Component({
  selector: 'app-executed-list',
  templateUrl: './executed-list.component.html',
  styleUrls: ['./executed-list.component.scss']
})
export class ExecutedListComponent implements OnInit {
    public lists;
    public isShown;
    constructor(public listsService: ListsService) { }
    ngOnInit() {
      this.lists = this.listsService.getLists();
      this.isShown = this.listsService.showEx();
  }
    reverse(value) {
      this.listsService.addTask(value);
    }
}
