import React from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import {
  filteredTodosSelector,
  Todo,
  hideCompletedState,
  todosState
} from './atoms';
import TodoInput from './TodoInput';
import TodoStats from './TodoStats';

export default function TodoList() {
  let filteredTodos: Todo[] = useRecoilValue(filteredTodosSelector);
  let [showCompleted, toggleShowCompleted] = useRecoilState(hideCompletedState);
  let [todos, setTodos] = useRecoilState<Todo[]>(todosState);

  let toggleCompleted = (id: string) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  return (
    <div>
      <h1>Todo List</h1>
      <TodoInput />
      <button onClick={() => toggleShowCompleted(!showCompleted)}>
        Toggle Show Completed: {Boolean(showCompleted).toString()}
      </button>
      <ul>
        {filteredTodos.map(todo => (
          <li key={todo.id}>
            ID: {todo.id}, Text: {todo.text},{' '}
            <button
              onClick={() => {
                toggleCompleted(todo.id);
              }}
            >
              Done: {Boolean(todo.isDone).toString()}
            </button>
          </li>
        ))}
      </ul>
      <TodoStats />
    </div>
  );
}
