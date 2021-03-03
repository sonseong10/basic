const clock = () => {
  const date = new Date()

  let hrs = date.getHours()
  let mins = date.getMinutes()
  let secs = date.getSeconds()
  let period = undefined

  hrs >= 12 ? (period = "PM") : (period = "AM")

  hrs = hrs < 10 ? "0" + hrs : hrs
  mins = mins < 10 ? "0" + mins : mins
  secs = secs < 10 ? "0" + secs : secs

  document.querySelector(".hurs").innerText = hrs
  document.querySelector(".mins").innerText = mins
  document.querySelector(".secs").innerText = secs
  document.querySelector(".period").innerText = period

  setTimeout(clock, 1000)
}

clock()
