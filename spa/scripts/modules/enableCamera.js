import { detectBarcode } from "./detectBarcode.js";

// https://www.jsnow.io/p/javascript/creating-a-real-time-qr-code-scanner-with-vanilla-javascript-part-1

export function enableCamera() {
    const scanner = document.querySelector("#scanner")
    const startbutton = document.querySelector('#start')
    const stopbutton = document.querySelector('#stop')
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        const constraints = { 
        video: true,
        audio: false
        }
            
        navigator.mediaDevices.getUserMedia({
            audio: false, 
            video: {
                facingMode:'environment'
            }
        })
        .then(stream => video.srcObject = stream);

        setInterval(detectBarcode, 1000);

        scanner.classList.toggle("hide");
        startbutton.classList.toggle("hide");
        stopbutton.classList.toggle("hide");
    }
}
