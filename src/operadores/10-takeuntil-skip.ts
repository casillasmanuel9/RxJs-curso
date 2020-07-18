import { interval, fromEvent } from "rxjs";
import { takeUntil, skip, tap } from "rxjs/operators";

const button = document.createElement('button');
button.innerHTML = "Detener Timer";

document.querySelector('body').append(button);

const counter$ = interval(1000);
const click$ = fromEvent(button, 'click').pipe(
    tap(() => console.log('antes del skip')),
    skip(1),
    tap(() => console.log('despues del skip')),
);

counter$.pipe(
    takeUntil(click$)
).subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('complete')
})