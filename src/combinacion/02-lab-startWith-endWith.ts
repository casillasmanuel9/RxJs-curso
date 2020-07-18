import { ajax } from "rxjs/ajax";
import { startWith, endWith } from "rxjs/operators";


const loadingDiv = document.createElement('div');
loadingDiv.classList.add('loading');
loadingDiv.innerHTML = 'Cargando';

const body = document.querySelector('body');

//Stream
ajax.getJSON('https://reqres.in/api/users/2?delay=3').pipe(
  startWith(true),
  endWith(false)
).subscribe(res => {
  if(res === true) body.append(loadingDiv);
  else if(res === false) body.querySelector('.loading').remove();
  

  console.log(res);
})