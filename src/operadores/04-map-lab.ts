import { map, tap } from 'rxjs/operators';
import { fromEvent } from "rxjs";

const text = document.createElement('div');

text.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec tincidunt mi. Nam molestie risus vitae justo ullamcorper, eu placerat ex gravida. Mauris consectetur aliquet justo, eu tincidunt orci suscipit nec. Quisque pharetra ac libero at pulvinar. Maecenas in diam congue, cursus velit et, sodales nunc. Cras iaculis vestibulum nunc, suscipit facilisis diam lacinia quis. Donec ut hendrerit odio, non auctor dolor. Donec consectetur massa enim, in laoreet justo tempus eget. Sed malesuada sapien eget neque maximus venenatis.
<br/><br/>
Donec vel diam ac sem dictum cursus sit amet eu sem. Curabitur a velit quis ex euismod cursus eu ut dolor. Mauris scelerisque cursus feugiat. Vivamus consectetur neque nec ornare rhoncus. Nam vitae augue aliquam, fermentum lectus non, gravida tellus. Aliquam tristique congue interdum. Nam sit amet mollis orci. Morbi ultrices quis ligula a elementum. Phasellus sit amet semper erat. Maecenas ullamcorper imperdiet orci ut feugiat.
<br/><br/>
Maecenas ultricies ultricies sapien in gravida. Aenean sit amet auctor urna. Nullam efficitur ipsum nisi, sed ullamcorper enim feugiat vitae. In felis dui, ornare vel mauris quis, hendrerit convallis lorem. Sed venenatis urna eu nunc malesuada gravida. Nam scelerisque luctus arcu, et faucibus odio tincidunt eu. Sed accumsan porttitor ligula, ac suscipit nulla rhoncus at. Donec suscipit diam id urna efficitur, sit amet sollicitudin ex ultricies. Donec sit amet lacinia ipsum, sit amet tincidunt lacus.
<br/><br/>
Maecenas ut libero a augue cursus euismod a non mi. Cras accumsan nec dolor eget tristique. Quisque semper posuere nisl, eu facilisis nisi aliquet nec. Etiam justo leo, vestibulum ut efficitur a, rhoncus eget arcu. Mauris sit amet orci turpis. Praesent lorem metus, dapibus id arcu non, finibus aliquet urna. Maecenas mattis eros et arcu auctor placerat.
<br/><br/>
Suspendisse non quam laoreet, vulputate velit eu, pellentesque orci. Suspendisse ornare augue tellus, sit amet lacinia ante faucibus rutrum. Vivamus non venenatis orci. Pellentesque nunc ligula, pellentesque in quam at, pretium convallis urna. Praesent eget posuere est. Maecenas maximus dapibus condimentum. Nunc at metus lorem. Suspendisse potenti. Aliquam nulla dui, finibus auctor nisi auctor, ultricies placerat diam. Donec pretium pellentesque placerat. Proin arcu purus, laoreet eget turpis sit amet, bibendum viverra elit. Donec feugiat, mi a vestibulum volutpat, ante ligula accumsan diam, nec viverra augue diam at leo. Nulla enim tellus, rhoncus sed arcu tincidunt, rutrum elementum neque. Nulla facilisi. Nunc viverra, nisi at accumsan aliquam, felis nisl sodales odio, vel iaculis orci lectus vitae eros.
`

const body = document.querySelector('body');
body.append(text);

const progresVar = document.createElement('div');
progresVar.setAttribute('class', 'progress-bar');
body.append(progresVar);

//funcion que haga el calculo
const calcularPorcentajeScroll = (event) => {
    console.log(event);
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    console.log({
        scrollTop,
        scrollHeight,
        clientHeight
    });

    return (scrollTop / (scrollHeight - clientHeight)) * 100;
}


//streams
const scroll$ = fromEvent(document, 'scroll');
//scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(
    map(event => {
        return calcularPorcentajeScroll(event);
    }),
    tap(console.log)
);

progress$.subscribe(porcentaje => {
    progresVar.style.width = `${porcentaje}%`;
});