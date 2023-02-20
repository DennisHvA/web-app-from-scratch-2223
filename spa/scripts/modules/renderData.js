export function renderData(data) {

    const product = {
        image: data.product.image_front_url,
        name: data.product.generic_name,
        cal: data.product.nutriments.energy.kcal_100g
    }

    const table = document.querySelector('tbody')
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    const imageEl = document.createElement('img');

    console.log(product.name)

    table.appendChild(tr)
    tr.appendChild(td)
    imageEl.src = product.image
    td.appendChild(imageEl);

    // td.textContent = product.name
    // td.textContent = product.name
    // td.textContent = product.cal

    document.querySelector("#img").src = data.product.image_front_url
    document.querySelector('#name').innerHTML = data.product.generic_name
    document.querySelector('#kcal').innerHTML = data.product.nutriments.energy.kcal_100g
}