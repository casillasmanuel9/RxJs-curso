import { interval, fromEvent } from 'rxjs';
import { take, switchMap, concatMap } from 'rxjs/operators';

const interval$ = interval(500).pipe(
  take(3)
);

const clicks$ = fromEvent(document, 'click');

clicks$.pipe(
  concatMap( () => interval$)
).subscribe(console.log);