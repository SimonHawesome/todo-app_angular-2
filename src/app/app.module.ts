import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SortTodosPipe } from './pipes/sort-todos.pipe';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    SortTodosPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [SortTodosPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
