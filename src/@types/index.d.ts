declare namespace ReactDOM {
  function render(someElement: any, targetElement: HTMLElement): void;
}

declare namespace React {
  function createElement(
    elementType: any,
    props: any,
    ...children: any[]
  ): HTMLElement;
}
