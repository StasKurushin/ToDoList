import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { ListOfListsComponent } from './components/list-of-lists/list-of-lists.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { ExecutedListComponent } from './components/executed-list/executed-list.component';
import {FormsModule} from '@angular/forms';
import { CreateListComponent } from './components/create-list/create-list.component';
import { TasksBlockComponent } from './components/tasks-block/tasks-block.component';
import {TasksService} from './services/tasks.service';
import {ListsService} from './services/lists.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ListOfListsComponent,
    TasksListComponent,
    ExecutedListComponent,
    CreateListComponent,
    TasksBlockComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
      AngularFireModule.initializeApp(environment.firebase, 'my-app-name'),
      AngularFirestoreModule,
      AngularFireAuthModule,
      AngularFireStorageModule
  ],
  providers: [TasksService, ListsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
