console.log("linked")

import { router } from "./modules/router.js";
import { calcForm } from "./modules/calcForm.js"
import { enableCamera } from "./modules/enableCamera.js";
import { disableCamera } from "./modules/disableCamera.js";

router();

const cameraOn = document.querySelector('#start')
const cameraOff = document.querySelector('#stop')

cameraOn.addEventListener('click', enableCamera)
cameraOff.addEventListener('click', disableCamera)

const cal = document.querySelectorAll("td:nth-child(3)")
console.log(cal)

for(var i = 0; i < cal.length; i++){
    // cal[i].classList.add('show');
    let total = cal[i].textContent
    // console.log(total)
}

// https://stackoverflow.com/questions/39690321/how-to-select-all-items-in-array-at-once-and-add-class-to-them

// var tdElem = document.querySelectorAll( "td" );
// var tdText = tdElem.innerHTML;

// console.log(tdElem)
// console.log(tdText)