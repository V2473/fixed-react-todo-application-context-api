import * as React from 'react';
import { TodosContext } from '../../todo-context';
import './todo-results.scss';

export const TodoResults = () => {
  const { todos, setTodos } = React.useContext(TodosContext);

  const calculateChecked = () => {
    const Checked = todos.filter((todo) => todo.checked === true);
    return Checked.length;
  };

  return (
    <div className="todo-results">
      Done:
      {calculateChecked()}
    </div>
  );
};
