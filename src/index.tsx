import { CounterButton } from './CounterButton';

/*
  So, React isn't in scope, nor is ReactDOM, because let's pretend I'm using them from a CDN.

  I could either:
    1. `npm install @types/react @types/react-dom`
    2. Lie to the compiler and promise really hard that they exist and everything is fine

  Inline typedefs are less helpful here, so let's do option 2 -- which is why this file is now called `index.tsX`

  You _must_ use `.tsx` and have React in scope with TS for JSX purposes.
*/

declare namespace ReactDOM {
  // This def doesn't work! But is a good sanity check -- TSC gets reaaaaally
  // unhappy about this _because_ of the code below. Hence this being commented
  // out.
  // function render(): void;

  function render(someElement: any, targetElement: HTMLElement): void;
}

ReactDOM.render(
  <CounterButton />,
  document.getElementById('root')
);
