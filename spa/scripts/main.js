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

// https://stackoverflow.com/questions/39690321/how-to-select-all-items-in-array-at-once-and-add-class-to-them