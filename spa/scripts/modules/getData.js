import { renderData } from "./renderData.js"
import { errorState } from "./errorState.js"

export function getData (value) {

    const url = `https://world.openfoodfacts.org/api/v0/product/${value}.json`

    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        // console.log("test");
        // console.log(data);
        // console.log(data.status)
        // renderData(data)
        if(data.status == 0) {
            console.log("not found")
            errorState()
        }
        else {
            console.log("found");
            renderData(data)
        }
    })
    .catch((err) => {
        console.error(err);
        // errorState;
    })
}