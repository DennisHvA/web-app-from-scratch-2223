import { renderData } from "./renderData.js"

export function getData (barcode) {

    barcode = "5449000000996"

    const url = `https://world.openfoodfacts.org/api/v0/product/${barcode}.json`

    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        renderData(data)
    });  
}

getData();