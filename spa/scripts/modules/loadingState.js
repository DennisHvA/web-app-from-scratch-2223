export function loadingState() {
    const message = document.querySelector("#state")

    message.classList.remove("error")
    message.classList.remove("succes")
    
    message.classList.add("loading")
}