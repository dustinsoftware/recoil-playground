import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoStatsSelector, TodoStats } from './atoms';

export default function TodoList() {
  let todoStats: TodoStats = useRecoilValue(todoStatsSelector);
  return (
    <div>
      <h2>Todo Stats</h2>
      <div>
        Completed: {todoStats.completed}, Total: {todoStats.total}
      </div>
    </div>
  );
}
