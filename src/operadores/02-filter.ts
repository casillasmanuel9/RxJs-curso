import {range, from, fromEvent} from 'rxjs';
import { filter, map } from 'rxjs/operators'

/*const rangue$ = range(personajes).pipe(
    filter((value, i) => {
        console.log('index',i);
        return value % 2 === 1;
    })
);*/

interface Personaje {
    tipo: string,
    nombre: string
}

const personajes : Personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'heroe',
        nombre: 'Robin'
    },
    {
        tipo: 'villano',
        nombre: 'Joker'
    }
];

const barriado$ = from<Personaje[]>(personajes).pipe(
    filter(p => p.tipo == 'villano')
);

barriado$.subscribe(console.log);
//rangue$.subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map( event => event.code), // recibe un keyboard event
    filter( key =>  key == "Enter")
);
keyup$.subscribe(console.log);