import { of } from 'rxjs';
import { map, pluck, catchError } from 'rxjs/operators';
import {ajax, AjaxError} from 'rxjs/ajax'

const url = "https://api.github.com/users?per_page=5";

const manejaErrores = (response: Response) => {
  if(!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
}

const atrapaError = (err: AjaxError) => {
  console.warn('error en : ', err.message);
  return of([]);
};

const fetchPromesa = fetch(url);

/*fetchPromesa
  .then((res) => res.json())
  .then((data) => console.log("data : ", data))
  .catch((err) => console.warn("error : ", err));
*/


/*fetchPromesa
  .then(manejaErrores)
  .then((res) => res.json()
  .then((data) => console.log("data : ", data)))
  .catch((err) => console.warn("error : ", err));
*/

ajax(url).pipe(
  pluck('response'),
  catchError(atrapaError)
).subscribe(users => console.log('usuarios : ', users));