import { map, sampleTime } from 'rxjs/operators';
import { fromEvent } from "rxjs";

const clicks$ = fromEvent<MouseEvent>(document, 'click');

clicks$.pipe(
  sampleTime(1000),
  map(({x,y}) => ({x,y}))
).subscribe(console.log);