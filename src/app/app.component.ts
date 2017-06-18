import { Component, OnInit } from '@angular/core';

// create todo interface to define and restrict its usage
export interface ITodo {
    active: boolean;
    text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  todoEntry: string;
  todos: Array<ITodo> = [];
  listFilter: string;


  ngOnInit() {

    // set default todo objects
    this.todos = [
      { active: true, text: 'learn react' },
      { active: true, text: 'write the content for the next module' },
      { active: false, text: 'buy cheese' },
      { active: false, text: 'buy milk' }
    ]
    //set list view default to 'all'
    this.listFilter = 'all';
  }


  addTodo(entry: string): void {

    if (entry) {
      // create new todo object and set to active by default
      let newTodo: ITodo = {
        active: true,
        text: entry
      }

      this.todos.push(newTodo);
      this.todoEntry = '';
    }
  }


  toggleTodoState(todo: ITodo): void {

    if (todo) {
      todo.active = !todo.active;
    }
  }


  checkCompletedTodos(): boolean {

    // check for completed todos
    for (let i = 0; i < this.todos.length; i ++) {
      if (!this.todos[i].active) {
        // return true to enable 'complete clear' button
        return true;
      }
    }
  }


  clearCompletedTodos(): void {

    let clearedTodos: Array<ITodo> = [];
    for (let i = 0; i < this.todos.length; i ++) {
      if (this.todos[i].active) {
        clearedTodos.push(this.todos[i])
      }
    }
    // replace main todo array with filtered array
    this.todos = clearedTodos.slice();
  }
}
