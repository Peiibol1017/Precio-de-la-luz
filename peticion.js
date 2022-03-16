"use strict"
// Link precio actual
const apiUrl = `https://api.allorigins.win/get?url=https://api.preciodelaluz.org/v1/prices/now?zone=PCB`;
// Lick precio maximo del dia
const maxUrl = `https://api.allorigins.win/get?url=https://api.preciodelaluz.org/v1/prices/max?zone=PCB`;
// Link precio minimo del dia
const minUrl = `https://api.allorigins.win/get?url=https://api.preciodelaluz.org/v1/prices/min?zone=PCB`;

// Funcion del precio

async function getPrice(Url){
    try{
    const data = await fetch(Url);
    const info = await data.json();
    const electricPrice = JSON.parse(info.contents);
    return electricPrice
        }
        catch(e){console.log(e.message)}
    }
async function test(){
    const actualPrice = await getPrice(apiUrl);
    const maxPrice = await getPrice(maxUrl);
    const minPrice = await getPrice(minUrl);
    
    console.log(actualPrice);
    console.log(maxPrice);
    console.log(minPrice);
}
test();

// Funcion de la hora

async function getHour(Url){
try{
    const data = await fetch(Url);
    const info = await data.json();
    const electricHour = JSON.parse(info.contents);
    return electricHour.hour
        }
        catch(e){console.log(e.message)}
    }


const actualHour = getHour(apiUrl);
const maxHour = getHour(maxUrl);
const minHour = getHour(minUrl);

console.log(actualHour);
console.log(maxHour);
console.log(minHour);

// Funcion de la fecha

async function getDate(Url){
try{
    const data = await fetch(Url);
    const info = await data.json();
    const electricDate = JSON.parse(info.contents);
    return electricDate.date
        }
        catch(e){console.log(e.message)}
    }


const actualDate = getDate(apiUrl);
const maxDate = getDate(maxUrl);
const minDate = getDate(minUrl);

console.log(actualDate);
console.log(maxDate);
console.log(minDate);

