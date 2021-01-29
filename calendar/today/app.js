const now = new Date()
const monthArray = new Array(
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
)
const dayArray = new Array("Sun", "Mon", "Tus", "Wed", "Thu", "Fri", "Sat")

document.querySelector(".today-year").textContent = now.getFullYear()

document.querySelector(".today-moth").textContent = monthArray[now.getMonth()]

document.querySelector(".today-date").textContent = now.getDate()

document.querySelector(".today-day").textContent = dayArray[now.getDay()]
