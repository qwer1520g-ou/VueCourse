const STORAGE_NAME = "auo-todolist"

const getTodos = () => {
  return JSON.parse(localStorage.getItem(STORAGE_NAME))
}

const saveTodos = (todos) => {
  console.log(todos);
  localStorage.setItem(STORAGE_NAME, JSON.stringify(todos))
}

// const getBook = (id) => {
//   const books = getTodos()
//   return books.find((book) => book.id == id)
// }

export { getTodos, saveTodos }
