export function disableCamera() {
    const scanner = document.querySelector("#scanner")
    const startbutton = document.querySelector('#start')
    const stopbutton = document.querySelector('#stop')
    
    const mediaStream = video.srcObject;
    const tracks = mediaStream.getTracks();
    tracks.forEach(track => track.stop())

    scanner.classList.toggle("hide");
    startbutton.classList.toggle("hide");
    stopbutton.classList.toggle("hide");
    // https://dev.to/morinoko/stopping-a-webcam-with-javascript-4297
}