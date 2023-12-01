<script setup>
import { v4 as uuid } from "uuid"
import { getTodos, saveTodos } from "@/auo-lib/storage"
import { reactive, onBeforeMount } from "vue"
import Header from "@/components/infomation/Header.vue"
import TodoItem from "@/components/todos/Item.vue"
import AddTodoForm from "@/components/forms/AddTodo.vue"

const title = "TodoList"
const todos = reactive([])

const removeTodo = (id) => {
  if (id) {
    const todoIndex = todos.findIndex((todo) => todo.id == id)

    if (todoIndex >= 0) {
      todos.splice(todoIndex, 1)
      saveTodos(todos)
    }
  }
}

const addTodo = (todoName) => {
  if (todoName != "") {
    const todo = {
      id: uuid(),
      title: todoName,
    }

    todos.unshift(todo)

    // save
    saveTodos(todos)
  }
}
const toggleCompleted = (id) => {
  console.log(id);
  if (id) {
    const todoIndex = todos.findIndex((todo) => todo.id == id)

    if (todoIndex >= 0) {
      todos[todoIndex].completed = !todos[todoIndex].completed
      saveTodos(todos)
    }
  }
}

onBeforeMount(() => {
  const data = getTodos()
  
  if (data) {
    todos.push(...data)
  }
})
</script>

<template>
  <h1 class="title">{{ title }}</h1>

  <AddTodoForm @add-todo="addTodo" />

  <div class="divider"></div>
  <div>
    <Header :todos="todos" />
    <ul>
      <TodoItem
        @remove-todo="removeTodo"
        @toggle-completed="toggleCompleted"
        v-for="todo in todos"
        :todo="todo"
      />
    </ul>
  </div>
</template>

<style scoped>
.title {
  @apply text-slate-800 text-5xl;
}
</style>
