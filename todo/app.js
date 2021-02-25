const todoInput = document.querySelector(".todo-insert")
const list = document.querySelector(".todo-list")
const form = document.querySelector(".todo-form")

form.addEventListener("submit", (event) => {
  event.preventDefault()
  onUpdate()
})

function onUpdate() {
  const text = todoInput.value
  if (text === "") {
    todoInput.focus()
    return
  }
  const item = createItem(text)
  list.appendChild(item)
  item.scrollIntoView({ block: "nearest" })
  todoInput.value = ""
  todoInput.focus()
}

function createItem(text) {
  let id = uuidv4()
  const listItem = document.createElement("li")
  listItem.setAttribute("class", "todo-item")
  listItem.setAttribute("data-id", id)
  listItem.innerHTML = `<p class="todo-desc" data-id="${id}">${text}</p>
  <button type="button" class="delete-btn" data-id="${id}">Delete</button>`

  return listItem
}

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    let r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

list.addEventListener("click", (event) => {
  let target = event.target
  if (target.dataset.id && target.matches(".delete-btn")) {
    const Deleted = document.querySelector(
      `.todo-item[data-id="${target.dataset.id}"]`
    )
    Deleted.remove()
  }
})

list.addEventListener("click", (event) => {
  let id = event.target.dataset.id
  if (id && event.target.matches(".todo-desc")) {
    const gole = document.querySelector(`.todo-desc[data-id="${id}"]`)
    gole.classList.toggle("finish")
  }
})
