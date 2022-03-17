import { test } from "./peticion.js"

//Aquí habría que poner el precio de la petición


export const dispositivo1 = ((260 / 1000000) * (await test("actual", "price"))).toFixed(3);
export const dispositivo2 = ((45 / 1000000) * (await test("actual", "price"))).toFixed(3);
export const dispositivo3 = ((459/1000000)* (await test("actual", "price"))).toFixed(3);
export const dispositivo4 = ((85/1000000)* (await test("actual", "price"))).toFixed(3);

export const dispositivo5 = ((4.34/1000)* (await test("actual", "price"))).toFixed(3);
export const dispositivo6 = ((0.025/1000)* (await test("actual", "price"))).toFixed(3);
export const dispositivo7 = ((7.4/1000)* (await test("actual", "price"))).toFixed(3);
export const dispositivo8 = ((0.97/1000)* (await test("actual", "price"))).toFixed(3);







