// Link precio actual
const apiUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(
  "https://api.preciodelaluz.org/v1/prices/now?zone=PCB"
)}`;
// Lick precio maximo del dia
const maxUrl = `https://api.allorigins.win/get?url=https://api.preciodelaluz.org/v1/prices/max?zone=PCB`;
// Link precio minimo del dia
const minUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(
  "https://api.preciodelaluz.org/v1/prices/min?zone=PCB"
)}`;

// Funcion Combinada para obtener precio hora y fecha

async function getPrice(Url, A) {
  try {
    let data = await fetch(Url);
    let info = await data.json();
    let electricPrice = JSON.parse(info.contents);
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
      let actualPrice = await getPrice(apiUrl, A);
      return actualPrice;
    }
    if (A === "hour") {
      let actualPrice = await getPrice(apiUrl, A);
      return actualPrice;
    }
    if (A === "date") {
      let actualPrice = await getPrice(apiUrl, A);
      return actualPrice;
    }
  }
  // Maximo

  if (B === "max") {
    if (A === "price") {
      let maxPrice = await getPrice(maxUrl, A);
      return maxPrice;
    }
    if (A === "hour") {
      let maxPrice = await getPrice(maxUrl, A);
      return maxPrice;
    }
    if (A === "date") {
      let maxPrice = await getPrice(maxUrl, A);
      return maxPrice;
    }
  }
  // Minimo

  if (B === "min") {
    if (A === "price") {
      let minPrice = await getPrice(minUrl, A);
      return minPrice;
    }
    if (A === "hour") {
      let minPrice = await getPrice(minUrl, A);
      return minPrice;
    }
    if (A === "date") {
      let minPrice = await getPrice(minUrl, A);
      return minPrice;
    }
  }
}

export { test };
