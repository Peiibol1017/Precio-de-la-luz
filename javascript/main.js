import {dispositivo1, dispositivo2, dispositivo3, dispositivo4, dispositivo5, dispositivo6, dispositivo7, dispositivo8} from "./calculo.js";
import {test} from "./peticion.js";

//Aquí en el main manipularía el DOM. Para colocar cosas en el DOM tendría que poner funciones con callbacks a funciones de peticiones.


//Selectores
const euroMvatioHora = document.querySelector("#valor_precio_luz");
const consumoSobremesa = document.querySelector("#sobremesa p:last-child");
const consumoMonitor = document.querySelector("#Monitor p:last-child");
const consumoImpresora = document.querySelector("#Impresora p:last-child");
const consumoPortatil = document.querySelector("#Portatil p:last-child");
//----------------------------------------------------------------------------------------------------
const consumoLavadora = document.querySelector("#Lavadora p:last-child");
const consumoFrigorifico = document.querySelector("#Frigorifico p:last-child");
const consumoInduccion = document.querySelector("#Induccion p:last-child");
const consumoHorno = document.querySelector("#Horno p:last-child");


//Resultados cálculo
const sobremesa = dispositivo1;
const monitorSobremesa = dispositivo2; 
const impresora = dispositivo3;
const portatil = dispositivo4;
const lavadora = dispositivo5;
const frigorifico = dispositivo6;
const induccion = dispositivo7;
const horno = dispositivo8;




//Funciones
  async function showActualPrice(dom, B, A) {
    const price = await test(B, A);
    dom.textContent = `${price} €/Mwh`;
  }
  
  function showAnPrice(dom, value) {
    dom.textContent = `${value} €`;
  }
  

  //Llamadas para la página
  showActualPrice(euroMvatioHora, "actual", "price");
  
  showAnPrice(consumoSobremesa, sobremesa);
  showAnPrice(consumoMonitor, monitorSobremesa);
  showAnPrice(consumoImpresora, impresora);
  showAnPrice(consumoPortatil, portatil);
  
  showAnPrice(consumoLavadora, lavadora);
  showAnPrice(consumoFrigorifico, frigorifico);
  showAnPrice(consumoInduccion, induccion);
  showAnPrice(consumoHorno, horno);


