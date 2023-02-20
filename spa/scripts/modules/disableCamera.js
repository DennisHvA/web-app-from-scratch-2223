export function disableCamera() {
    const scanner = document.querySelector("#scanner")
    const mediaStream = video.srcObject;
    const tracks = mediaStream.getTracks();
    tracks.forEach(track => track.stop())

    scanner.classList.toggle("scanner");
    // https://dev.to/morinoko/stopping-a-webcam-with-javascript-4297
}