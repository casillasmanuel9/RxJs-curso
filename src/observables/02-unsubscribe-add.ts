import { Observer, Observable } from 'rxjs';

const Observer : Observer<any> = {
    next: value => console.log('Siguiente [next]: ', value),
    error: err => console.warn('Error : ', err),
    complete: () => console.info('Completado')
};

const intervalo$ = new Observable<Number>( subscriber => {
    let count = 1;
    const interval = setInterval(() => {
        subscriber.next(count);
        count++;
        console.log(count);
    }, 1000);

    setTimeout(() => {
        subscriber.complete();
    }, 2500);

    return () => {
        clearInterval(interval);
        console.log('Intervalo destruido')
    }
});

const subscription = intervalo$.subscribe( Observer);
const subscription2 = intervalo$.subscribe(Observer );
const subscription3 = intervalo$.subscribe(Observer );

subscription.add( subscription2).add( subscription3);

setTimeout(() => {
    subscription.unsubscribe();
    console.log('Completado');
}, 3000);