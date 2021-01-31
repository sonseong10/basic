const VISIBLE = "visible"
const SHOW = "show"

const firstImg = document.querySelector(".slider--img")
const firstDot = document.querySelector(".slider--dot")

firstImg.classList.add(VISIBLE)
firstDot.classList.add(SHOW)

function autoSlide() {
  const currentImg = document.querySelector(`.${VISIBLE}`)
  if (currentImg) {
    currentImg.classList.remove(VISIBLE)
    const nextImg = currentImg.nextElementSibling
    if (nextImg) {
      nextImg.classList.add(VISIBLE)
    } else {
      firstImg.classList.add(VISIBLE)
    }
  } else {
    firstImg.classList.add(VISIBLE)
  }
}

function autoState() {
  const currentDot = document.querySelector(`.${SHOW}`)
  if (currentDot) {
    currentDot.classList.remove(SHOW)
    const nextDot = currentDot.nextElementSibling
    if (nextDot) {
      nextDot.classList.add(SHOW)
    } else {
      firstDot.classList.add(SHOW)
    }
  } else {
    firstDot.classList.add(SHOW)
  }
}

autoSlide()
setInterval(autoSlide, 3000)

autoState()
setInterval(autoState, 3000)
