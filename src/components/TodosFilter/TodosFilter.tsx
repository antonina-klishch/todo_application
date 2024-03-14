import React from 'react';
import cn from 'classnames';
import { Status } from '../../types/Status';
import { Todo } from '../../types/Todo';

type Props = {
  setTodosStatus: (s: Status) => void;
  todosStatus: Status;
  todos: Todo[];
};

export const Filter: React.FC<Props> = React.memo(
  ({ setTodosStatus, todosStatus, todos }) => {
    const completedTodoList = todos.filter(todo => todo.completed);
    const activeTodoList = todos.filter(todo => !todo.completed);

    return (
      <nav className="filter" data-cy="Filter">
        <a
          href="#/"
          className={cn('filter__link', {
            selected: todosStatus === Status.All,
          })}
          data-cy="FilterLinkAll"
          onClick={() => setTodosStatus(Status.All)}
        >
          {Status.All}
        </a>

        <a
          href="#/active"
          className={cn('filter__link', {
            selected: todosStatus === Status.Active,
            disabled:
              activeTodoList.length === 0 || completedTodoList.length === 0,
          })}
          data-cy="FilterLinkActive"
          onClick={() => setTodosStatus(Status.Active)}
        >
          {Status.Active}
        </a>

        <a
          href="#/completed"
          className={cn('filter__link', {
            selected: todosStatus === Status.Completed,
            disabled:
              activeTodoList.length === 0 || completedTodoList.length === 0,
          })}
          data-cy="FilterLinkCompleted"
          onClick={() => setTodosStatus(Status.Completed)}
        >
          {Status.Completed}
        </a>
      </nav>
    );
  },
);
