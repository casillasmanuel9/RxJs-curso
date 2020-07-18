import { fromEvent } from "rxjs";
import { first, tap, map } from "rxjs/operators";


const click$ = fromEvent<MouseEvent>(document, 'click').pipe(
    tap<MouseEvent>(console.log),
    map(({clientX, clientY}) => ({clientY,clientX })),
    first<{clientX:number,clientY:number}>( event => event.clientY >= 150)
);

click$.subscribe({
    next: val => console.log('next : ', val),
    complete: () => console.log('Complete')
});