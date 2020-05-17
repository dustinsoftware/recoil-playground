import React from 'react';
import { RecoilRoot } from 'recoil';
import TextInput from './TextInput';
import CharacterCounter from './CharacterCounter';

function App() {
  return (
    <div className="flex mb-4" data-testid="app-main">
      <div className="w-full">
        Recoil Playground
        <RecoilRoot>
          <TextInput />
          <CharacterCounter />
        </RecoilRoot>
      </div>
    </div>
  );
}

export default App;
