import { fromEvent } from "rxjs";
import { debounceTime, pluck, distinctUntilChanged } from "rxjs/operators";


const click$ = fromEvent(document, 'click');

click$.pipe(
  debounceTime(3000)
).subscribe(console.log);

//ejemplo 2

const input = document.createElement('input');
document.querySelector('body').append(input);

const inputObs$ = fromEvent(input,'keyup');

inputObs$.pipe(
  debounceTime(1000),
  pluck('target','value'),
  distinctUntilChanged()
).subscribe(console.log);