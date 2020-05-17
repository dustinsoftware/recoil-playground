/// <reference types="react-scripts" />
declare module 'recoil' {
  export type Atom = { tag: 'Writable' };
  export type Selector = { tag: 'Readonly' };

  export const RecoilRoot: any;
  export function atom<T>(shape: { key: string; default?: T }): Atom;
  export function selector<T>(shape: {
    key: string;
    get?: (data: { get: (atom: Atom) => any }) => T;
  }): Selector;
  export function useRecoilState<T>(atom: Atom): [T, (data: T) => void];
  export function useRecoilValue<T>(atom: Atom | Selector): T;
}
