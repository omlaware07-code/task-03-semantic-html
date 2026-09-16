const openModalButton = document.getElementById("openModal");
const closeModalButton = document.getElementById("closeModal");
const reportModal = document.getElementById("reportModal");

openModalButton.addEventListener("click", () => {
  reportModal.showModal();
});

closeModalButton.addEventListener("click", () => {
  reportModal.close();
});
