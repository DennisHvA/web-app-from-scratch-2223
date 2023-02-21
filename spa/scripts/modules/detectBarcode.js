const video = document.querySelector('#video')

let formats;

let items = []

BarcodeDetector.getSupportedFormats().then(arr => formats = arr);

const barcodeDetector = new BarcodeDetector({ formats });

export const detectBarcode = () => { 
    barcodeDetector
    .detect(video)
    .then(codes => {
        if (codes.length === 0) return;
        
        for (const barcode of codes)  {
        console.log(barcode.rawValue);
        items.push(barcode.rawValue)
        console.log(items)
        }
    })
    .catch(err => {
    console.error(err);
    })
}
