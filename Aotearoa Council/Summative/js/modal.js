var myModal = document.querySelector(".modal");
myModal.addEventListener("close", onModalClicked);

test.addEventListener("click", () => {
    myModal.showModal();
})
myModal.addEventListener("close", onModalClosed)

function openMyModal() {
    myModal.showModal();
}
