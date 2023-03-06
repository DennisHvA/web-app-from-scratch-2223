export function succesState() {
    const message = document.querySelector("#state")

    message.classList.remove("error")
    message.classList.remove("loading")
    
    message.classList.add("succes")
}