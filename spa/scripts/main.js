console.log("linked")

import { calcForm } from "./modules/calcForm.js"
import { enableCamera } from "./modules/enableCamera.js";
import { disableCamera } from "./modules/disableCamera.js";
const cameraOn = document.querySelector('#start')
const cameraOff = document.querySelector('#stop')

cameraOn.addEventListener('click', enableCamera)
cameraOff.addEventListener('click', disableCamera)

const test = document.querySelectorAll("td")
console.log(test)

var tdElem = document.querySelector ( "td" );
var tdText = tdElem.innerHTML;

console.log(tdElem)
console.log(tdText)