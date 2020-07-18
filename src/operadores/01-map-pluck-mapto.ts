import { range, fromEvent } from 'rxjs';
import { map, pluck, mapTo } from 'rxjs/operators';


/*const range$ = range(1,5).pipe(
    map<number,string>( val => (val * 10).toString());
);



range$.subscribe(valor => console.log(valor));*/

const keyup$ = fromEvent<KeyboardEvent>(document,'keyup');

const keyupCode$ = keyup$.pipe(
    map(event => event.code)
);

const keyupPluck$ = keyup$.pipe(
    pluck('target','baseURI')
);

const keyupMapTo$ = keyup$.pipe(
    mapTo('teclaPresionada')
);


keyup$.subscribe(console.log);
keyupCode$.subscribe(val => console.log('map: ',val));
keyupPluck$.subscribe(val => console.log('pluck: ',val));
keyupMapTo$.subscribe(val => console.log('mapTo:', val));