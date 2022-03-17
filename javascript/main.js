import {calcularPrecio} from "./calculo.js";
import {test} from "./peticion.js";

//Aquí en el main manipularía el DOM. Para colocar cosas en el DOM tendría que poner funciones con callbacks a funciones de peticiones.

//Selectores
const arrayPower = document.querySelectorAll("[data-power]");

//Funciones
  async function showActualPrice(dom, B, A) {
    const price = await test(B, A);
    dom.textContent = `${price} €/Mwh`;
  }
  
  async function setPrice () {
    for (let i=0; i<arrayPower.length; i++) {
      const indexValue = arrayPower[i].dataset.power
      const devicePrice = await calcularPrecio(indexValue)
      arrayPower[i].textContent = `${(Math.round(devicePrice*100))/100} €`
    }
  }

setPrice ()
