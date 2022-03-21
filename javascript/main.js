import {calcularPrecio} from "./calculo.js";
import {test} from "./peticion.js";

//Aquí en el main manipularía el DOM. Para colocar cosas en el DOM tendría que poner funciones con callbacks a funciones de peticiones.
//Variables----------------------------------------------------------------------------------
let minutesSaved;
// const now = new Date();

//Selectores---------------------------------------------------------------------------------
const arrayPower = document.querySelectorAll("[data-power]");
const tarifaActualPrecio = document.querySelector("[data-precio=actual]");
const tarifaActualHora = document.querySelector("[data-hora=actual] span");
const tarifaMaxPrecio = document.querySelector("[data-precio=max]");
const tarifaMaxHora = document.querySelector("[data-hora=max] span");
const tarifaMinPrecio = document.querySelector("[data-precio=min]");
const tarifaMinHora = document.querySelector("[data-hora=min] span");

//Funciones----------------------------------------------------------------------------------
async function showActualPrice() {
  const price = await test("actual", "price");
  const priceHour = await test("actual", "hour");
  const maxPrice = await test("max", "price");
  const maxPriceHour = await test("max", "hour");
  const minPrice = await test("min", "price"); 
  const minPriceHour = await test("min", "hour");
  localStorage.setItem("Precio", price);
  localStorage.setItem("Fecha", saveTime());
  tarifaActualPrecio.textContent = `${price}€/Mwh`;
  tarifaActualHora.textContent = ` (${priceHour}h.) `;
  tarifaMaxPrecio.textContent = `${maxPrice}€/Mwh`;
  tarifaMaxHora.textContent = `${maxPriceHour} h. `;
  tarifaMinPrecio.textContent = `${minPrice}€/Mwh`;
  tarifaMinHora.textContent = `${minPriceHour} h. `;

  for (let i=0; i<arrayPower.length; i++) {
    let indexValue = arrayPower[i].dataset.power
    let devicePrice = await calcularPrecio(indexValue)
    arrayPower[i].textContent = `${(Math.round(devicePrice*100))/100} €`
  };
  console.log(price);
  return price;
}

function saveTime (){
  const now = new Date();
  const fechaConsulta = {};
  fechaConsulta.fecha =  `${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()}`; 
  fechaConsulta.hora = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;  
  minutesSaved = `${now.getMinutes()}`;
  return JSON.stringify(fechaConsulta)
}

function showTime (){
  const now = new Date();
  return now.getMinutes()
}

async function checkChange (){
  const price = await test("actual", "price");
  const checkPrice = localStorage.getItem("Precio");
  const checkFecha = localStorage.getItem("Fecha");

  if(price !== parseFloat(checkPrice) || Math.abs(showTime() - minutesSaved)>=5) {
    console.log(minutesSaved);
    console.log(showTime());
    console.log("He llegado aquí");
    showActualPrice();
    checkChange();
  } else {
    setTimeout(() => {
      console.log(typeof showTime());
      console.log(typeof minutesSaved);
      console.log(Math.abs(showTime() - parseFloat(minutesSaved)))
      console.log("He llegado al else")
      return checkChange()
    }, 300000);
  }
}

showActualPrice();
checkChange();





//Menu ------------------------------------------------------------------------------------

const menuIcon = document.querySelector("menu.screen img");
const menuIconStatus = document.querySelector("[data-status]");
const menuOpen = document.querySelector("div");
 
function openMenuClickHandle () {
  if (menuIconStatus.dataset.status === "open") {
    menuOpen.style.cssText = "display: none;"
    menuIconStatus.dataset.status ="close"
    return
  }
  if (menuIconStatus.dataset.status === "close") {
    menuOpen.style.cssText = "display: initial;"
    menuIconStatus.dataset.status ="open"
    return
  }

}

function autoMenuCloseHandle (){
  if (window.innerWidth >= 750) {
    menuOpen.style.cssText = "display: none;"
    menuIconStatus.dataset.status ="close"
  }
}

menuIcon.addEventListener("click", openMenuClickHandle)
window.addEventListener("resize", autoMenuCloseHandle);
