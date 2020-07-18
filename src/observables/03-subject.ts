import { Observer, Observable, Subject } from 'rxjs';

const Observer : Observer<any> = {
    next: value => console.log('Siguiente [next]: ', value),
    error: err => console.warn('Error : ', err),
    complete: () => console.info('Completado')
};

const intervalo$ = new Observable<Number>( subscriber => {
    const intervalID = setInterval(() => {
        subscriber.next(Math.random());
    }, 3000);

    return () => {
        clearInterval(intervalID);
        console.log('intervalo destruido');
    }
});

/**
 * 1-Casteo multiple
 * 2-Tambien es un observer
 * 3-next,error,complete
 */
const subject$ = new Subject();
const subscription = intervalo$.subscribe(subject$);

//const subs1 = intervalo$.subscribe(rnd=> console.log('subs 1 : ',rnd));
//const subs2 = intervalo$.subscribe(rnd=> console.log('subs 2 : ',rnd));

const subs1 = subject$.subscribe(Observer);
const subs2 = subject$.subscribe(Observer);

setTimeout(() => {
    subject$.next(10);
    subject$.complete();
    subscription.unsubscribe();
}, 3500);