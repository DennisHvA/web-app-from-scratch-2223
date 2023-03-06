export function errorState() {
    const message = document.querySelector("#state")

    message.classList.remove("loading")
    message.classList.remove("succes")
    
    message.classList.add("error")
}