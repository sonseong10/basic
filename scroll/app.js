const scorllUp = document.querySelector("#up")
scorllUp.addEventListener("click", () => {
  window.scrollBy({
    top: 300,
    left: 0,
    behavior: "smooth",
  })
})

const scorllFix = document.querySelector("#fix")
scorllFix.addEventListener("click", () => {
  window.scrollTo({
    top: 100,
    left: 0,
    behavior: "smooth",
  })
})

const scorllMove = document.querySelector("#move")
const point = document.querySelector(".point")
scorllMove.addEventListener("click", () => {
  point.scrollIntoView({
    behavior: "smooth",
    block: "center",
  })
})
