import { Observable, Subscriber, Observer, observable } from 'rxjs';

const Observer : Observer<any> = {
    next: value => console.log('Siguiente [next]: ', value),
    error: err => console.warn('Error : ', err),
    complete: () => console.info('Completado')
};

const obs$ = new Observable<String>( subs => {
    subs.next('Hola');
    subs.next('Mundo');

    subs.next('Hola');
    subs.next('Mundo');

    // Forzar un error
    // const a = undefined;
    // a.nombre = "Manuel";

    subs.complete();

    subs.next('Hola');
    subs.next('Mundo');

    subs.next('Hola');
    subs.next('Mundo');

});

obs$.subscribe(Observer);

/*obs$.subscribe( 
    valor => console.log('next : ', valor),
    err => console.warn('error : ', err),
    () => console.log('Completado')
);*/