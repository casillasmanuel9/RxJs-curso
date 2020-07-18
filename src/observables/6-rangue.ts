import { of, range, asyncScheduler } from 'rxjs';

console.log('inicio');
const scr$ = range(1,5, asyncScheduler);
console.log('final');

scr$.subscribe(console.log);