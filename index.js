
const modal = document.getElementById("modal")
const modalOverlay = document.getElementById("modal-overlay")

const completeOrderBtn = document.getElementById("complete-order-btn")

completeOrderBtn.addEventListener("click", openModal)

document.addEventListener("click", function(e) {
  console.log(e.target.id)
  if (e.target.id === "modal-overlay") {
    closeModal()
  }
})

function openModal() {
  modal.style.display = "block";
  modalOverlay.classList.add("modal-active")
}

function closeModal() {
  modal.style.display = "none"
  modalOverlay.classList.remove("modal-active")
}