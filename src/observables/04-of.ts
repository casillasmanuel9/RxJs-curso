import { of } from "rxjs";

//const obs$ = of(1, 2, 3, 4, 5, 6);
const obs$ = of<Number>(...[1,2], 3,4,5,6,7,8);

console.log("Inicio del obs");
obs$.subscribe(
  (next) => console.log("next : ", next),
  null,
  () => console.log("terminamos la secuencia")
);

console.log("Fin del obs");
