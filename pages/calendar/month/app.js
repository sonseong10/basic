const date = new Date()

const renderCalendar = () => {
  date.setDate(1)
  const monthDays = document.querySelector(".days")

  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate()
  const firstDayIndex = date.getDay()

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay()

  const nextDays = 7 - lastDayIndex - 1
  const months = [
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
    "December",
  ]

  let days = ""

  document.querySelector(".date h2").innerHTML = months[date.getMonth()]
  document.querySelector(".date p").innerHTML = `${getToday()}`

  function getToday() {
    const year = date.getFullYear()
    const month = ("0" + (1 + date.getMonth())).slice(-2)

    return `${year} - ${month}`
  }

  //앞쪽 여백 지난달 일수로 채우기
  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`
  }

  // 달력 채우기
  for (let i = 1; i <= lastDay; i++) {
    i === new Date().getDate() && date.getMonth() === new Date().getMonth()
      ? (days += `<div class="today">${i}</div>`)
      : (days += `<div>${i}</div>`)
  }

  //뒤쪽 여백 다음달 일수로 채우기
  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`
    monthDays.innerHTML = days
  }
}

//지난달 이동
document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1)
  renderCalendar()
})

//다음달 이동
document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1)
  renderCalendar()
})

window.onload = renderCalendar()
