const blind = document.querySelector(".blind")
const popupOpen = document.querySelector("#open")
const popupClose = document.querySelector("#close")

popupOpen.addEventListener("click", () => {
  blind.classList.add("open")
})

popupClose.addEventListener("click", () => {
  blind.classList.remove("open")
})
