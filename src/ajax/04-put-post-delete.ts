import { ajax } from "rxjs/ajax";

const url = "https://httpbin.org/delay/1"

/*ajax.delete(url,
{
  'mi-token': 'acb123'
}
).subscribe(console.log);*/

ajax({
  url,
  method: 'POST',
  headers: {
    'mi-token': 'abc123'
  },
  body: {
    id: 1,
    nombre: 'Manuel'
  }
}).subscribe(console.log);