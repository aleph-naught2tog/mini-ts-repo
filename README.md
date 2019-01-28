# Mini Sample Repo

Ye Olde Disclaimer: this is just didactic/for the sake of demonstrating how to transition to JS in a quick way; for things like React, etc., which _definitely_ have an `@types` package, it's better to do that and then actually import it for the sake of explicitness.

e.g., instead of this:
```typescript
// in some _local_ `src/@types/index.d.ts
/*
  This technique is useful for compatability and/or shenanigans, but not as
  explicit as it makes it global, as well as letting you override typedefs;
  which is great when necessary, less awesome when the types do exist.
*/
declare namespace ReactDOM {
  function render(elementToRender, whereToRender: HTMLElement): void;
}
```

prefer this:
```typescript
import React from 'react';
import ReactDOM from 'react-dom';

// do react-y things here
```

---

Also, `any` is a pretty solid way to hit yourself in the face a lot if you aren't careful; if the TS version is new enough, use `unknown`, as that will at least roadblock you which is maybe more what you want in situations where the type info matters a lot; it mostly sets the compiler up to make you prove that the branch your in has valid types for what you're trying to do, etc.

e.g., instead of:

```typescript
function add(someNumber: any, otherNumber: any): number {
  const result = someNumber + otherNumber;
  const randomString = 'this is definitely not an HTML Element';

  // This terror of a line will compile fine; I said ANYTHING is acceptable
  // aka, I told the Typescript compiler "don't worry I totally know what's up"
  console.log(result.slice(-1).appendChild(randomString).render());

  return result;
}
```

vs the better/safer:

```typescript
function add(someNumber: unknown, otherNumber: unknown): number {
  // THIS won't even compile -- it doesn't know I can add those.
  console.log(someNumber + otherNumber);

  if (typeof someNumber === 'number' && typeof otherNumber ===
  'number') {
    console.log(someNumber + otherNumber); // all good now
  }

  // etc...
}
```
