/* // import {getCurrentPrice, getMaxPrice, getMinPrice} from "./peticion.js";
import * as dispositivos from "./calculo.js"; */
import {getPrice} from "./peticion.js";

//Aquí en el main manipularía el DOM. Para colocar cosas en el DOM tendría que poner funciones con callbacks a funciones de peticiones.


//Selectores
const euroMvatioHora = document.querySelector("#valor_precio_luz");
const consumoXbox = document.querySelector("#consola p:last-child");





/* Cambios en DOM:
euroMvatioHora
consumoPortatil
consumoMonitor
consumoServidor */



//Funciones





async function showActualPrice(dom, A) {
    const price = await getPrice(A)
    dom.textContent = `${price} €/Mwh`
}





setInterval(() => {
    showActualPrice(euroMvatioHora, "price")
    showActualPrice(euroMvatioHora, "hour")
    console.log("han pasado 5 min");
}, 10000);

