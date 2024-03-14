import React from 'react';
import cn from 'classnames';
import { Filter } from '../TodosFilter';
import { Todo } from '../../types/Todo';
import { Status } from '../../types/Status';

type Props = {
  todos: Todo[];
  todosStatus: Status;
  setTodosStatus: (s: Status) => void;
  activeTodos: Todo[];
  removeTodo: (id: number[]) => void;
};

export const Footer: React.FC<Props> = React.memo(
  ({ todosStatus, setTodosStatus, todos, activeTodos, removeTodo }) => {
    const completedTodo = todos
      .filter(todo => todo.completed)
      .map(item => item.id);

    return (
      <footer className="todoapp__footer" data-cy="Footer">
        <span className="todo-count" data-cy="TodosCounter">
          {`${activeTodos.length} items left`}
        </span>
        <Filter setTodosStatus={setTodosStatus} todosStatus={todosStatus} />
        <a
          href="#/"
          type="button"
          className={cn('todoapp__clear-completed', {
            disabled: completedTodo.length === 0,
          })}
          data-cy="ClearCompletedButton"
          onClick={() => {
            removeTodo(completedTodo);
            setTodosStatus(Status.All);
          }}
        >
          Clear completed
        </a>
      </footer>
    );
  },
);
