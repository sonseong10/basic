const VISIBLE = "visible"

const firstImg = document.querySelector(".slider--img")

firstImg.classList.add(VISIBLE)

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

autoSlide()
setInterval(autoSlide, 3000)
