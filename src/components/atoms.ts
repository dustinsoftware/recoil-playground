import { atom, selector } from 'recoil';
import uuid from '../utils/uuid';

export const charCountState = selector<string>({
  key: 'charCountState',
  get: ({ get }) => {
    const text = get(textState);
    return text.length.toString();
  }
});

export const textState = atom<string>({
  key: 'textState',
  default: ''
});

export type Todo = {
  isDone: boolean;
  text: string;
  id: string;
};

export const todosState = atom<Todo[]>({
  key: 'todos',
  default: [
    {
      text: 'Do something',
      id: uuid(),
      isDone: false
    },
    {
      text: 'More things',
      id: uuid(),
      isDone: true
    }
  ]
});

export const filteredTodosSelector = selector<Todo[]>({
  key: 'filtered-todos',
  get: ({ get }) => {
    const hideCompleted: boolean = get(hideCompletedState);
    let currentTodos: Todo[] = get(todosState);

    return hideCompleted ? currentTodos.filter(x => !x.isDone) : currentTodos;
  }
});

export type TodoStats = {
  total: number;
  completed: number;
};
export const todoStatsSelector = selector<TodoStats>({
  key: 'todos-stats',
  get: ({ get }) => {
    let currentTodos: Todo[] = get(todosState);

    return {
      total: currentTodos.length,
      completed: currentTodos.filter(x => x.isDone).length
    };
  }
});

export const hideCompletedState = atom<boolean>({
  key: 'hide-completed',
  default: false
});
