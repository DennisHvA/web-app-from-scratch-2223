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

export function renderDetail(id) {
    // console.log(id);

    // const element = document.querySelector("main");
    // element.remove();
    const detailSection = document.getElementById("detail-page");
    const url = `https://world.openfoodfacts.org/api/v0/product/${id}.json`

    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const title = data.product.generic_name;
        
        const createTitle = document.createElement("h1");
        createTitle.textContent = title;
        detailSection.appendChild(createTitle)

        const createLink = document.createElement("a");
        createLink.textContent = "terug"
        createLink.setAttribute("href", "")
        detailSection.appendChild(createLink)
    })
}