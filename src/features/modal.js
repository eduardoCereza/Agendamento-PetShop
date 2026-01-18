const modal = document.getElementById("modalOverlay")
const btnAdd = document.getElementById("btnNovoAgendamento")
const btnClose = document.getElementById("btnFechar")

btnAdd.addEventListener("click", (event) => {
    event.preventDefault()

    modal.classList.add("is-open")
    
})

btnClose.addEventListener("click", (event) => {
    event.preventDefault()

    modal.classList.remove("is-open")
})