import { atom, selector } from 'recoil';

export const charCountState = selector<string>({
  key: 'charCountState',
  get: ({ get }) => {
    const text = get(textState);
    return text.length;
  }
});

export const textState = atom<string>({
  key: 'textState',
  default: ''
});
