/**
 * A Pipe that filters through todo objects via user selected view
 */

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sortTodosPipe',
    pure: false
})

export class SortTodosPipe implements PipeTransform {

    transform(value: any, listView: string): any {

      let sortedTodos = [];
      for (let i = 0; i < value.length; i ++) {
        if (listView === 'all') {
          sortedTodos.push(value[i]);
        }
        else if (listView === 'active') {
          if (value[i].active) {
            sortedTodos.push(value[i]);
          }
        }
        else if (listView === 'complete') {
          if (!value[i].active) {
            sortedTodos.push(value[i]);
          }
        }
      }
      return sortedTodos;
    }
}
