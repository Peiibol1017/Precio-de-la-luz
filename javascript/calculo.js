import { test } from "./peticion.js";

//Aquí habría que poner el precio de la petición

export async function calcularPrecio(power) {
  const peticion = await test("actual", "price");
  return (power / 1000) * peticion;
}

export function calcularPrecioSaved(power) {
  const peticion = parseFloat(localStorage.getItem("precio"));
  return (power / 1000) * peticion;
}