export function renderData(data) {

    const product = {
        image: data.product.image_front_url,
        name: data.product.generic_name,
        cal: data.product.nutriments['energy-kcal_100g']
    }

    const table = document.querySelector('tbody')
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const imageEl = document.createElement('img');

    const aEl = document.createElement('a');
    table.appendChild(tr)
    
    tr.appendChild(td)

    aEl.setAttribute("href", "#" + data.code)
    td.appendChild(aEl)

    imageEl.src = product.image
    aEl.appendChild(imageEl);

    tr.appendChild(td2)
    td2.textContent = product.name;

    tr.appendChild(td3)
    td3.textContent = product.cal

    const messageImg = document.querySelector("#message-img");
    const messageH = document.querySelector("#message-h")
    const messageP = document.querySelector("#message-p")

    messageImg.src = product.image
    messageH.innerHTML = product.name
    messageP.innerHTML = product.cal
}

export function renderDetail(data) {
    const homeSection = document.querySelector("#home");
    homeSection.remove();
    const detailSection = document.getElementById("detail-page");

    const title = data.product.generic_name;
    const brand = data.product.brands;
    const image = data.product.image_front_url;

    const cal = data.product.nutriments['energy-kcal_100g']
    const caffeine = data.product.nutriments['caffeine_100g']
    const carbo = data.product.nutriments['carbohydrates_100g']
    const fat = data.product.nutriments['fat_100g']
    const fiber = data.product.nutriments['fiber_100g']
    const protein = data.product.nutriments['proteins_100g']
    const salt = data.product.nutriments['salt_100g']
    const sugar = data.product.nutriments['fat_100g']
        
    const createTitle = document.createElement("h1");
    createTitle.textContent = title;
    detailSection.appendChild(createTitle)

    const createText = document.createElement("p");
    createText.textContent = brand;
    detailSection.appendChild(createText)

    const createImage = document.createElement("img")
    createImage.src = image
    detailSection.appendChild(createImage);

    createText.textContent = cal;
    detailSection.appendChild(createText)

    const createLink = document.createElement("a");
    createLink.textContent = "terug"
    createLink.setAttribute("href", "")
    detailSection.appendChild(createLink)
}