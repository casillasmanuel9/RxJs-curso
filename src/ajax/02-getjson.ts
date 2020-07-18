import { ajax } from "rxjs/ajax";

const url = "https://httpbin.org/delay/1"

const obs$ = ajax.getJSON(url, {
  'Content-type': 'application/json',
  'mi-token': 'abcMyToken'
});

obs$.subscribe(console.log)