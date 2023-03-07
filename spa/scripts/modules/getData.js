import { renderData } from "./renderData.js"
import { errorState } from "./errorState.js"
import { succesState } from "./succesState.js"

export function getData (value) {
    
    // value = "0737628064502"

    const url = `https://world.openfoodfacts.org/api/v0/product/${value}.json`

    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        if(data.status == 1) {
            console.log("found")
            renderData(data)
            succesState()
        }
        else {
            console.log("not found");
            errorState()
        }
    })
    .catch((err) => {
        console.error(err);
    })
}

// getData()