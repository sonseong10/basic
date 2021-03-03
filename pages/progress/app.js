const percentNumber = document.querySelectorAll(".percent-num")
const lodingText = document.querySelectorAll("h2")

let count = 0

setInterval(() => {
  if (count === 100) {
    clearInterval()
    lodingText.forEach((text) => {
      text.textContent = "Finish"
    })
    percentNumber.forEach((item) => {
      item.style.color = `#1d1d1d`
    })
  } else {
    count++
    percentNumber.forEach((item) => {
      item.textContent = `${count} %`
    })
  }
}, 40)
