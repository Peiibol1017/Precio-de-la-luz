// Link precio actual
const apiUrl = `https://api.allorigins.win/get?url=https://api.preciodelaluz.org/v1/prices/now?zone=PCB`;
// Lick precio maximo del dia
const maxUrl = `https://api.allorigins.win/get?url=https://api.preciodelaluz.org/v1/prices/max?zone=PCB`;
// Link precio minimo del dia
const minUrl = `https://api.allorigins.win/get?url=https://api.preciodelaluz.org/v1/prices/min?zone=PCB`;

// Funcion Combinada para obtener precio hora y fecha

async function getPrice(Url, A) {
  try {
    const data = await fetch(Url);
    const info = await data.json();
    const electricPrice = JSON.parse(info.contents);
    if (A === "price") {
      return electricPrice.price;
    }
    if (A === "hour") {
      return electricPrice.hour;
    }
    if (A === "date") {
      return electricPrice.date;
    }
  } catch (e) {
    console.log(e.message);
  }
}
// Funcion para imprimir, necesario por usar funciones asincronas, si no, recibiriamos promesas incompletas.

async function test(B, A) {
  // Actual

  if (B === "actual") {
    if (A === "price") {
      const actualPrice = await getPrice(apiUrl, A)
      return actualPrice;
    
    }
    if (A === "hour") {
      const actualPrice = await getPrice(apiUrl, A);
      console.log(actualPrice);
    }
    if (A === "date") {
      const actualPrice = await getPrice(apiUrl, A);
      console.log(actualPrice);
    }
  }
  // Maximo

  if (B === "max") {
    if (A === "price") {
      const maxPrice = await getPrice(maxUrl, A);
      console.log(maxPrice);
    }
    if (A === "hour") {
      const maxPrice = await getPrice(maxUrl, A);
      console.log(maxPrice);
    }
    if (A === "date") {
      const maxPrice = await getPrice(maxUrl, A);
      console.log(maxPrice);
    }
  }
  // Minimo

  if (B === "min") {
    if (A === "price") {
      const minPrice = await getPrice(minUrl, A);
      console.log(minPrice);
    }
    if (A === "hour") {
      const minPrice = await getPrice(minUrl, A);
      console.log(minPrice);
    }
    if (A === "date") {
      const minPrice = await getPrice(minUrl, A);
      console.log(minPrice);
    }
  }
}

export {test};