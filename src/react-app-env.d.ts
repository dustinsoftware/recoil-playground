/// <reference types="react-scripts" />
declare module 'recoil' {
  export type Atom = { _thisIsAnAtom: string };
  export type Selector = { _thisIsASelector: string };

  export const RecoilRoot: any;
  export function atom(shape: { key: string; default?: string }): Atom;
  export function selector(shape: {
    key: string;
    get?: (data: { get: (atom: Atom) => T }) => unknown;
  }): Selector;
  export function useRecoilState<T>(atom: Atom): [T, (data: T) => void];
  export function useRecoilValue<T>(atom: Selector): T;
}
