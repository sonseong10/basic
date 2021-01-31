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
    nextImg ? nextImg.classList.add(VISIBLE) : firstImg.classList.add(VISIBLE)
  } else {
    firstImg.classList.add(VISIBLE)
  }

  function autoState() {
    const currentDot = document.querySelector(`.${SHOW}`)
    if (currentDot) {
      currentDot.classList.remove(SHOW)
      const nextDot = currentDot.nextElementSibling
      nextDot ? nextDot.classList.add(SHOW) : firstDot.classList.add(SHOW)
    } else {
      firstDot.classList.add(SHOW)
    }
  }
  autoState()
}

setInterval(autoSlide, 3000)
