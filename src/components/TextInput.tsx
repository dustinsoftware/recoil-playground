import React from 'react';
import { useRecoilState } from 'recoil';
import { textState } from './atoms';

export default function TextInput() {
  let [text, setText] = useRecoilState<string>(textState);
  return (
    <div>
      Text: {text}{' '}
      <input type="text" onInput={(e: any) => setText(e.target.value)} />
    </div>
  );
}
