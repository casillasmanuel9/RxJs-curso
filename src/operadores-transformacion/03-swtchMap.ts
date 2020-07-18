import { GitHubUsersResp } from '../interfaces/github-users.interface';
import { GitHubUser } from '../interfaces/github-user.interface';
import { debounceTime, map, pluck, mergeAll, mergeMap, switchMap } from "rxjs/operators";
import { fromEvent, Observable } from "rxjs";
import { ajax } from "rxjs/ajax";

const body = document.querySelector("body");
const textInput = document.createElement("input");
const orderList = document.createElement("ol");

//Helpers
const mostrarUsuarios = (usuarios: GitHubUser[]) => {
  console.log(usuarios);
  orderList.innerHTML = '';

  for (const usuario of usuarios) {

    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = usuario.avatar_url;

    const ancort = document.createElement('a');
    ancort.href = usuario.html_url;
    ancort.text = 'Ver Pagina';
    ancort.target = '_blank';

    li.append(img);
    li.append(usuario.login + ' ');
    li.append(ancort);

    orderList.append(li);

  }
}

body.append(textInput, orderList);

//streams
const input$ = fromEvent<KeyboardEvent>(textInput, "keyup");

input$
  .pipe(
    debounceTime<KeyboardEvent>(500),
    pluck<KeyboardEvent, string>("target", "value"),
    mergeMap<string, Observable<GitHubUsersResp>>((text) =>
      ajax.getJSON(`https://api.github.com/search/users?q=${text}`)
    ),
    pluck<GitHubUsersResp, GitHubUser[]>("items")
  )
  //.subscribe(mostrarUsuarios);

const url = 'https://httpbin.org/delay/1?arq=';

input$.pipe(
  pluck<KeyboardEvent, string>('target','value'),
  switchMap(text => ajax.getJSON(url + text))
).subscribe(console.log)