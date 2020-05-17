import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { todosState, Todo } from './atoms';
import uuid from '../utils/uuid';

export default function TodoList() {
  let [todos, setTodos] = useRecoilState<Todo[]>(todosState);
  let [inputState, setInputState] = useState('');
  return (
    <div>
      <input
        type="text"
        value={inputState}
        placeholder="New Todo"
        onChange={(e: any) => setInputState(e.target.value)}
      />
      <button
        onClick={() =>
          setTodos([...todos, { text: inputState, id: uuid(), isDone: false }])
        }
      >
        Add Todo
      </button>
    </div>
  );
}
