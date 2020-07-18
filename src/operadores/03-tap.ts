import { range } from 'rxjs';
import { tap, map } from 'rxjs/operators';

const numero$ = range(1,5).pipe(
    tap( x => console.log('antes', x)),
    map( val => val*10),
    tap({
        next: x => console.log('despues', x),
        complete: () => console.log('se termino todo')
    })
);

numero$.subscribe(val => console.log('subs: ' , val));