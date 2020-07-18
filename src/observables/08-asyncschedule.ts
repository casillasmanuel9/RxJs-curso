import { asyncScheduler } from "rxjs";

const saludar = () => console.log("saludar");

const saludar2 = (nombre) => console.log("Hola ", nombre);

//asyncScheduler.schedule(saludar2, 2000, 'Manuel');

const subscription = asyncScheduler.schedule(
    function (state) {
        console.log("state ", state);
        this.schedule(state + 1, 1000);
    },
    3000,
    0
);


//setTimeout(() => {
//    subscription.unsubscribe();
//}, 6000);

asyncScheduler.schedule(()=>subscription.unsubscribe(), 6000);