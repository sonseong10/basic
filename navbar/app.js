let opened = null
const toggleVisibility = (e) => e.classList.toggle("show")

const handleDropdown = (e) => {
  const overItem = e.parentElement.lastChild.previousSibling

  toggleVisibility(overItem)

  if (!opened) {
    opened = overItem
  } else if (opened == overItem) {
    opened = null
  } else {
    toggleVisibility(opened)
    opened = overItem
  }
}

const handleOver = (e) => {
  if (e.target.className.includes("menu")) {
    handleDropdown(e.target)
  } else if (opened) {
    toggleVisibility(opened)
    opened = null
  }
}

// body에 이벤트헨들링
document.addEventListener("mouseover", handleOver)

// 요소에 직접적으로 이벤트 헨들링
const dropDown = document.querySelectorAll(".dropdown")

dropDown.forEach((e) => {
  e.addEventListener("mouseover", () => {
    e.classList.add("show")
  })
  e.addEventListener("mouseout", () => {
    e.classList.remove("show")
  })
})
