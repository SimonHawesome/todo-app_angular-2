/**
 * A Pipe that filters through todo objects via user selected view
 */

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sortTodosPipe',
    pure: false
})

export class SortTodosPipe implements PipeTransform {

    transform(value: any, listFilter: string): any {

      let sortedTodos = [];
      for (let i = 0; i < value.length; i ++) {
        if (listFilter === 'all') {
          sortedTodos.push(value[i]);
        }
        else if (listFilter === 'active') {
          if (value[i].active) {
            sortedTodos.push(value[i]);
          }
        }
        else if (listFilter === 'complete') {
          if (!value[i].active) {
            sortedTodos.push(value[i]);
          }
        }
      }
      // return array
      return sortedTodos;
    }
}
