const secondHand = document.querySelector(".second")
const minuteHand = document.querySelector(".minute")
const hourHand = document.querySelector(".hour")

// get seconds, minutes, hours based on computer's time
function setDate() {
  const now = new Date()

  const seconds = now.getSeconds()
  const secondsDegrees = (seconds / 60) * 360
  seconds <= 59
    ? (secondHand.style.transform = `rotate(${secondsDegrees}deg)`)
    : new Error("fail")

  const minutes = now.getMinutes()
  const minutesDegrees = (minutes / 60) * 360
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`

  const hours = now.getHours()
  const hoursDegrees = (hours / 12) * 360
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`
}

setInterval(setDate, 0)
