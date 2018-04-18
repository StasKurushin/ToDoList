import {Component, OnDestroy, OnInit} from '@angular/core';
import { List } from '../../classes/list';
import {ListsService} from '../../services/lists.service';

@Component({
    selector: 'app-list-of-lists',
    templateUrl: './list-of-lists.component.html',
    styleUrls: ['./list-of-lists.component.scss']
})
export class ListOfListsComponent implements OnInit, OnDestroy {
    public lists: string[];
    public isShown: boolean;
    public subscription;
    constructor(public listsService: ListsService) {}
    ngOnInit() {
        this.lists = [];
        this.isShown = false;
        this.subscription = this.listsService.get()
            .subscribe({
                next: (arr) => {
                    this.lists = arr;
                }
            });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    getCurrentList(i): void {
        this.listsService.getCurrentList(i);
        console.log(this.lists);
    }
    deleteList(i) {
        this.listsService.delete(i);
    }
}

