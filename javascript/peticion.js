<<<<<<< HEAD


const apiUrl = `https://api.allorigins.win/get?url=https://api.preciodelaluz.org/v1/prices/now?zone=PCB`;
const maxUrl = `https://api.allorigins.win/get?url=https://api.preciodelaluz.org/v1/prices/max?zone=PCB`;
const minUrl = `https://api.allorigins.win/get?url=https://api.preciodelaluz.org/v1/prices/min?zone=PCB`;


async function getPrice(url){
    try{
        const data = await fetch(url);
        const info = await data.json();
        const electricPrice = JSON.parse(info.contents);
        return electricPrice.getPrice
        } catch(e){console.log(e.message)}
}

    const actualPrice = getPrice(apiUrl);
    const maxPrice = getPrice(maxUrl);
    const minPrice = getPrice(minUrl);
    
    console.log(actualPrice);
    console.log(maxPrice);
    console.log(minPrice);

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

export {getPrice}
=======
"use strict"
// Link precio actual
const apiUrl = `https://api.allorigins.win/get?url=https://api.preciodelaluz.org/v1/prices/now?zone=PCB`;
// Lick precio maximo del dia
const maxUrl = `https://api.allorigins.win/get?url=https://api.preciodelaluz.org/v1/prices/max?zone=PCB`;
// Link precio minimo del dia
const minUrl = `https://api.allorigins.win/get?url=https://api.preciodelaluz.org/v1/prices/min?zone=PCB`;

// Funcion Combinada para obtener precio hora y fecha

async function getPrice(Url, A){
    try{
    const data = await fetch(Url);
    const info = await data.json();
    const electricPrice = JSON.parse(info.contents);
    if(A === "price"){
        return electricPrice.price
    };
    if(A === "hour"){
        return electricPrice.hour
    };
    if(A === "date"){
        return electricPrice.date
    };
        }
        catch(e){console.log(e.message)}
    }
    // Funcion para imprimir, necesario por usar funciones asincronas, si no, recibiriamos promesas incompletas.

async function test(A){

    const actualPrice = await getPrice(apiUrl, A);
   
    const maxPrice = await getPrice(maxUrl, A);
    
    const minPrice = await getPrice(minUrl, A);
console.log(actualPrice)
console.log(maxPrice)
console.log(minPrice)
}
test("price");

>>>>>>> devpablo
