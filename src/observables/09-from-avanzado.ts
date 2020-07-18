import { of, from, Observer } from 'rxjs';

/**
 * of = toma argumentos y genera una secuencia
 * from = array, promise, iterable, observable
 */

const obs : Observer<any> = {
    next: val => console.log('valor: ' ,val),
    error: err => console.log('error: ', err),
    complete: () => console.log('complete')
}

//const source$ = from([1,2,3,4,5]);
//const source$ = of(...[1,2,3,4,5]);

//const source$ = from('Fernando');

const source$ = from( fetch('https://api.github.com/users/klerith'));

const miGenerador = function*() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const iterable = miGenerador();

for (const id of iterable) {
    console.log(id);
}

from(iterable).subscribe(obs);

/*source$.subscribe(async resp => {
    console.log(resp.ok);

    const dataResp = await resp.json();
    console.log(dataResp);
});*/

source$.subscribe(obs);