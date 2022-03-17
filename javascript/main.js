import {dispositivo1} from "./calculo.js";
import {test} from "./peticion.js";

//Aquí en el main manipularía el DOM. Para colocar cosas en el DOM tendría que poner funciones con callbacks a funciones de peticiones.


//Selectores
const euroMvatioHora = document.querySelector("#valor_precio_luz");
const consumoXbox = document.querySelector("#vitro p:last-child");







/* Cambios en DOM:
euroMvatioHora
ordenadorSobremesa
consumoPortatil
consumoMonitor
consumoServidor */



//Funciones
  async function showActualPrice(dom, B, A) {
    const price = await test(B, A);
    dom.textContent = `${price} €/Mwh`;
  }
  
  async function showAnPrice(dom, value) {
    dom.textContent = `${value} €`;
  }
  

  //Llamadas para la página
  showActualPrice(euroMvatioHora, "actual", "price");
  showAnPrice(consumoXbox, xbox);
