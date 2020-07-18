import { pluck } from 'rxjs/operators';
import { fromEvent, combineLatest } from "rxjs";

/*const keyup$ = fromEvent(document,'keyup');
const clicks$ = fromEvent(document, 'click');

combineLatest(keyup$.pipe(pluck('type')), clicks$.pipe(pluck('type'))).subscribe(console.log);*/

const input1 = document.createElement('input');
const input2 = document.createElement('input');

input1.placeholder = "email@gmail.com";
input2.placeholder = "email@gmail.com";

input2.type = 'Password';

document.querySelector('body').append(input1, input2);

//Helper
const getInputStream = (html: HTMLElement) =>  fromEvent<KeyboardEvent>( html,'keyup').pipe(
    pluck<KeyboardEvent, string>('target','value')
  );

combineLatest(
  getInputStream(input1),
  getInputStream(input2)
).subscribe(console.log);