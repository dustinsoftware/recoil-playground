import React from 'react';
import { RecoilRoot } from 'recoil';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="flex mb-4" data-testid="app-main">
      <div className="w-full">
        Recoil Playground
        <RecoilRoot>
          <TodoList></TodoList>
        </RecoilRoot>
      </div>
    </div>
  );
}

export default App;
