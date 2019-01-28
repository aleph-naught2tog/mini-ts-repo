import { CounterButton } from "./CounterButton";

/*
  I got sloppy here and am doing `any` because I wanted to finish this up, but you get the idea.
*/

declare namespace ReactDOM {
  function render(someElement: any, targetElement: HTMLElement): void;
}

// declare namespace React {} // <- nope!
declare namespace React {
  function createElement(
    elementType: any,
    props: any,
    ...children: any[]
  ): HTMLElement;
}

// The two "declare namespace" bits above are enough to tell the compiler "this
// is fine, seriously, please relax"

ReactDOM.render(
  <CounterButton />,
  document.getElementById("root")! // <-- the ! is "no seriously, that exists, please compile"
);
