const body = document.body
const modeBtn = document.querySelector("#mode--btn")

modeBtn.addEventListener("click", () => {
  if (body.classList.contains("dark")) {
    body.classList.remove("dark")
    modeBtn.textContent = "Dark"
  } else {
    body.classList.add("dark")
    modeBtn.textContent = "White"
  }
})
