console.log("linked")

function getData (barcode) {

        barcode = "5449000000996"

        const url = `https://world.openfoodfacts.org/api/v0/product/${barcode}.json`
        // https://nl.openfoodfacts.org/cgi/search.pl?search_terms=&json=true&page_size=10
        // "https://nl.openfoodfacts.org/cgi/search.pl?search_terms=" + searchQuery + "&page=" + currentPage + "&json=true"
    
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data.product.nutriments)
            console.log(data.product.image_front_url)
            console.log(data.product.generic_name)
            console.log(data.product.nutriments.energy.kcal_100g)

            document.querySelector("#img").src = data.product.image_front_url
            document.querySelector('#name').innerHTML = data.product.generic_name
            document.querySelector('#kcal').innerHTML = data.product.nutriments.energy.kcal_100g
        });  
}

getData();

// de camera aankrijgen

const video = document.querySelector('#video')

let formats;

BarcodeDetector.getSupportedFormats().then(arr => formats = arr);

const barcodeDetector = new BarcodeDetector({ formats });

const detectCode = () => { 
    barcodeDetector.detect(video).then(codes => {
      if (codes.length === 0) return;
   
      for (const barcode of codes)  {
        console.log(barcode);
      }
    }).catch(err => {
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

        setInterval(detectCode, 100);

        scanner.classList.toggle("show");

    }
})