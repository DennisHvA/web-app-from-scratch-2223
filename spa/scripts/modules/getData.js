import { renderData } from "./renderData.js"

export function getData (value) {

    // barcode = "737628064502"

    const url = `https://world.openfoodfacts.org/api/v0/product/${value}.json`

    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        renderData(data)
    });  
}

getData();