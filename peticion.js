"use strict"

const apiUrl = `https://api.allorigins.win/get?url=https://api.preciodelaluz.org/v1/prices/now?zone=PCB`;
const maxUrl = `https://api.allorigins.win/get?url=https://api.preciodelaluz.org/v1/prices/max?zone=PCB`;
const minUrl = `https://api.allorigins.win/get?url=https://api.preciodelaluz.org/v1/prices/min?zone=PCB`;
async function getPrice(Url){

    try{

    const data = await fetch(Url);

    const info = await data.json();

    const electricPrice = JSON.parse(info.contents)

    return electricPrice.price;
        }
        catch(e){console.log(e.message)}
    }

console.log(getPrice(apiUrl));
console.log(getPrice(maxUrl));
console.log(getPrice(minUrl));

const actualPrice = getPrice(apiUrl);
const maxPrice = getPrice(maxUrl);
const minPrice = getPrice(minUrl);


