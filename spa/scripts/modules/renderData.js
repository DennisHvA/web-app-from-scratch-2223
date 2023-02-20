export function renderData(data) {
    document.querySelector("#img").src = data.product.image_front_url
    document.querySelector('#name').innerHTML = data.product.generic_name
    document.querySelector('#kcal').innerHTML = data.product.nutriments.energy.kcal_100g
}