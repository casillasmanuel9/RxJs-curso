import { of } from 'rxjs';
import { ajax, AjaxError } from "rxjs/ajax";
import { catchError } from 'rxjs/operators';

const url = "https://httpbinXX.org/delay/1"

const manejaError = (err: AjaxError) => {
  console.warn('error : ',err.message);
  return of({
    ok: false,
    usuarios: []
  });
}

/*const obs$ = ajax.getJSON(url).pipe(
  catchError(manejaError)
);
const obs2$ = ajax(url).pipe(
  catchError(manejaError)
);*/

const obs$ = ajax.getJSON(url).pipe(
  catchError(manejaError)
);
const obs2$ = ajax(url).pipe(
  catchError(manejaError)
);


obs$.subscribe({
  next: resp => console.log('res :', resp),
  error: err => console.log('error :', err),
  complete: () => console.log('Complete')
});
//obs2$.subscribe(console.log);