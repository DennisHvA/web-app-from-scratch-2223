import { getData } from "./getData.js"

export function checkBarcode(value) {
    console.log(value)
    let barcodesArray = []
    if(!barcodesArray.includes(value)) {
        barcodesArray.push(value)
        console.log(barcodesArray)

        getData(value)
    } 
}