import React from 'react';
import { useRecoilValue } from 'recoil';
import { charCountState } from './atoms';

export default function CharacterCounter() {
  let count = useRecoilValue<string>(charCountState);
  return <>Character count: {count}</>;
}
