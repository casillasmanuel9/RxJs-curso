import { fromEvent, Observer } from "rxjs";

/**
 * Eventos del DOM
 */
const scr1$ = fromEvent<MouseEvent>(document, "click");
const scr2$ = fromEvent<KeyboardEvent>(document, "keyup");

scr1$.subscribe(({ x, y }) => {
  console.log(x, y);
});
scr2$.subscribe((evento) => {
  console.log(evento.key);
});
