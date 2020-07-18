import { pluck } from 'rxjs/operators';
import { fromEvent, merge } from "rxjs";

const keyup$ = fromEvent(document,'keyup');
const clicks$ = fromEvent(document, 'click');

merge(keyup$.pipe(pluck('type')), clicks$.pipe(pluck('type'))).subscribe(console.log);