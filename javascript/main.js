import { calcularPrecio } from "./calculo.js";
import { calcularPrecioSaved } from "./calculo.js";
import { test } from "./peticion.js";

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
  localStorage.setItem("precio", price);
  localStorage.setItem("horaPrecio", priceHour);
  localStorage.setItem("precioMax", maxPrice);
  localStorage.setItem("horaMax", maxPriceHour);
  localStorage.setItem("precioMin", minPrice);
  localStorage.setItem("horaMin", minPriceHour);
  localStorage.setItem("fecha", saveTime());
  tarifaActualPrecio.textContent = `${price}€/Mwh`;
  tarifaActualHora.textContent = ` (${priceHour}h.) `;
  tarifaMaxPrecio.textContent = `${maxPrice}€/Mwh`;
  tarifaMaxHora.textContent = `${maxPriceHour} h. `;
  tarifaMinPrecio.textContent = `${minPrice}€/Mwh`;
  tarifaMinHora.textContent = `${minPriceHour} h. `;

  for (let i = 0; i < arrayPower.length; i++) {
    let indexValue = arrayPower[i].dataset.power;
    let devicePrice = await calcularPrecio(indexValue);
    arrayPower[i].textContent = `${Math.round(devicePrice * 100) / 100} €`;
  }
  console.log(price);
  await checkChange();
  console.log("llamamos en teoria a checkchange");
  return price;
}

function saveTime() {
  const now = new Date();
  const fechaConsulta = {};
  fechaConsulta.fecha = `${now.getDate()}/${
    now.getMonth() + 1
  }/${now.getFullYear()}`;
  fechaConsulta.hora = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
  const minutesSaved = `${now.getMinutes()}`;
  const hoursSaved = `${now.getHours()}`;
  localStorage.setItem("minutos", minutesSaved);
  localStorage.setItem("horas", hoursSaved);
  console.log("se ha guardado en saveTime");
  return JSON.stringify(fechaConsulta.fecha);
}

function showTime() {
  const now = new Date();
  console.log("show time hizo el show");
  return now.getMinutes();
}
function showDate() {
  const now = new Date();
  console.log("la hora exacta tio");
  return now.getHours();
}
function showDias() {
  const now = new Date();
  const fechaConsulta = {};
  fechaConsulta.fecha = `${now.getDate()}/${
    now.getMonth() + 1
  }/${now.getFullYear()}`;
  console.log("esto seria cosa de dias");
  return JSON.stringify(fechaConsulta.fecha);
}
async function checkChange() {
  const checkFecha = localStorage.getItem("fecha");
  const minutos = parseFloat(localStorage.getItem("minutos"));
  const horas = parseFloat(localStorage.getItem("horas"));
  if (
    Math.abs(showTime() - minutos) >= 5 ||
    Math.abs(showDate()) != Math.abs(horas) ||
    checkFecha != showDias()
  ) {
    console.log("He llegado aquí");
    await showActualPrice();
    return;
  } else {
    setTimeout(() => {
      console.log(minutos);
      console.log(showTime());
      console.log(Math.abs(showTime() - minutos >= 5));
      console.log("He llegado al else");
      return checkChange();
    }, 60000);
  }
}
async function showPriceLocal() {
  const price = localStorage.getItem("precio");
  const priceHour = localStorage.getItem("horaPrecio");
  const maxPrice = localStorage.getItem("precioMax");
  const maxPriceHour = localStorage.getItem("horaMax");
  const minPrice = localStorage.getItem("precioMin");
  const minPriceHour = localStorage.getItem("horaMin");
  console.log("los precios viejos perro");
  tarifaActualPrecio.textContent = `${price}€/Mwh`;
  tarifaActualHora.textContent = ` (${priceHour}h.) `;
  tarifaMaxPrecio.textContent = `${maxPrice}€/Mwh`;
  tarifaMaxHora.textContent = `${maxPriceHour} h. `;
  tarifaMinPrecio.textContent = `${minPrice}€/Mwh`;
  tarifaMinHora.textContent = `${minPriceHour} h. `;
  for (let i = 0; i < arrayPower.length; i++) {
    let indexValue = arrayPower[i].dataset.power;
    let devicePrice = calcularPrecioSaved(indexValue);
    arrayPower[i].textContent = `${Math.round(devicePrice * 100) / 100} €`;
  }
  checkChange();
  return;
}
async function firstCheckHandle() {
  try {
    if (
      localStorage.getItem("minutos") === null ||
      localStorage.getItem("precio") != "undefined"
    ) {
      console.log("se procede a guardar la hora");
      await showActualPrice();
      await checkChange();
    } else {
      console.log("tu ya has estado aqui");
      await showPriceLocal();
      await checkChange();
    }
  } catch (error) {
    console.error(error.message);
  }
}

window.addEventListener("load", firstCheckHandle);

//Menu ------------------------------------------------------------------------------------

const menuIcon = document.querySelector("menu.screen img");
const menuIconStatus = document.querySelector("[data-status]");
const menuOpen = document.querySelector("div");

function openMenuClickHandle() {
  if (menuIconStatus.dataset.status === "open") {
    menuOpen.style.cssText = "display: none;";
    menuIconStatus.dataset.status = "close";
    return;
  }
  if (menuIconStatus.dataset.status === "close") {
    menuOpen.style.cssText = "display: initial;";
    menuIconStatus.dataset.status = "open";
    return;
  }
}

function autoMenuCloseHandle() {
  if (window.innerWidth >= 750) {
    menuOpen.style.cssText = "display: none;";
    menuIconStatus.dataset.status = "close";
  }
}

menuIcon.addEventListener("click", openMenuClickHandle);
window.addEventListener("resize", autoMenuCloseHandle);
