# Gotchas

#### No warnings when accidentally using useRecoilValue without a selector. Maybe a warning could be thrown?

Example:

```
export default function CharacterCounter() {
    let count = useRecoilValue<string>(charCountState);
    return <>Character count: {count}</>;
}
```

```
// oops, this should be a selector!
export const charCountState = atom({
  key: 'charCountState',
  get: ({ get }) => {
    const text = get(textState);
    return text.length;
  }
});
```
