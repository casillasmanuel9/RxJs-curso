import { from } from "rxjs";
import { reduce, scan, map } from "rxjs/operators";


const numbers = [1,2,3,4,5];

const totalReducer = (acumulador:number, valorActual:number) => acumulador + valorActual;

//reduce
from(numbers).pipe(
    reduce( totalReducer, 0 )
).subscribe(console.log);

//scan
from(numbers).pipe(
    scan( totalReducer, 0 )
).subscribe(console.log)

//redux
interface User {
    id?: string;
    autenticado?: boolean;
    token?: string;
    nombre?: string;
    edad?: number
} 

const user: User[] = [
    {id: 'fher', autenticado: false, token: null},
    {id: 'fher', autenticado: true, token: 'ABC'},
    {id: 'fher', autenticado: true, token: 'ABC123'}
]

const state$ = from(user).pipe(
    scan<User>((acc,cur) => {
        return {...acc, ...cur}
    }, {edad:33})
)

const id$ = state$.pipe(
    map( state => state.id)
).subscribe(console.log)