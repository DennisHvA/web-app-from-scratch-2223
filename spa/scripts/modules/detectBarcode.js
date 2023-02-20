const video = document.querySelector('#video')

let formats;

BarcodeDetector.getSupportedFormats().then(arr => formats = arr);

const barcodeDetector = new BarcodeDetector({ formats });

export const detectBarcode = () => { 
    barcodeDetector
    .detect(video)
    .then(codes => {
        if (codes.length === 0) return;
        
        for (const barcode of codes)  {
        console.log(barcode.rawValue);
        }
    })
    .catch(err => {
    console.error(err);
    })
}

const scanner = document.querySelector(".scanner")
const button = document.querySelector("#button")
button.addEventListener('click', () => {
    console.log("test");
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        const constraints = { 
        video: true,
        audio: false
        }
            
        navigator.mediaDevices.getUserMedia(constraints)
        .then(stream => video.srcObject = stream);

        setInterval(detectCode, 1000);

        scanner.classList.toggle("show");

    }
})
