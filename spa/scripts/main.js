console.log("linked")

import { enableCamera } from "./modules/enableCamera.js";
import { disableCamera } from "./modules/disableCamera.js";
const cameraOn = document.querySelector('#start')
const cameraOff = document.querySelector('#stop')

cameraOn.addEventListener('click', enableCamera)
cameraOff.addEventListener('click', disableCamera)