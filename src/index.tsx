import { CounterButton } from "./CounterButton";

/*
  No more namespaces! Or React!

  We put the EXACT SAME code into our OWN `@types/index.d.ts`
*/

ReactDOM.render(
  <CounterButton />,
  document.getElementById("root")!
);
