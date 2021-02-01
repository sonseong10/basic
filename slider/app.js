const VISIBLE = "visible"
const SHOW = "show"
const DELAY = 3000 // 3000 = 3s

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

setInterval(autoSlide, DELAY)

const slider = document.querySelector("#slider")
const slideList = document.querySelector("#slide--wrap")
let index = 1

const responsiveSlider = function () {
  const prev = document.querySelector("#prev")
  const next = document.querySelector("#next")

  let items = slideList.querySelectorAll(".slide--item").length
  let sliderWidth = slider.offsetWidth

  window.addEventListener("resize", () => {
    sliderWidth = slider.offsetWidth
  })

  const prevSlide = () => {
    if (index > 1) {
      index = index - 2 // prve slide--item
      slideList.style.left = `${-index * sliderWidth}px`
    } else if (index === 1) {
      index = items - 1 // last slide--item
      slideList.style.left = `${-index * sliderWidth}px`
    }
    index++
  }

  const nextSlide = () => {
    if (index < items) {
      slideList.style.left = `${-index * sliderWidth}px`
      index++
    } else if (index === items) {
      slideList.style.left = `0px`
      index = 1
    }
  }

  next.addEventListener("click", nextSlide)
  prev.addEventListener("click", prevSlide)

  setInterval(nextSlide, DELAY)
}

window.addEventListener("resize", () => {
  sliderWidth = slider.offsetWidth
  slideList.style.left = `${-index * sliderWidth}px`
})

window.onload = responsiveSlider()
