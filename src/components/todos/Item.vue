<script setup>
import { defineProps, defineEmits } from "vue"

defineProps({
  todo: {
    type: Object,
    required: true,
  },
})

const emits = defineEmits(["remove-todo","toggle-completed"])

const removeTodo = (e) => {
  const btn = e.currentTarget
  const id = btn?.dataset.todoid
  if (id) {
    emits("remove-todo", id)
  }
}
const toggleCompleted = (e) => {
  const toggle_btn = e.currentTarget
  const toggle_id = toggle_btn?.dataset.todoid
  console.log(toggle_id);
  emits("toggle-completed", toggle_id)
}
</script>



<style scoped>
li {
  background-color: white;
  padding: 10px;
  border-radius: 5px;
}
</style>
<template>
  <li class="flex items-center justify-between gap-2 text-2xl">
    <div class="flex items-center gap-2">
      <input
        type="checkbox"
        :checked="todo.completed"
        @change="toggleCompleted"
        class="form-checkbox"
        :data-todoid="todo.id"
      />
      <span :class="{ 'line-through': todo.completed }">{{ todo.title }}</span>
    </div>
    <button :data-todoid="todo.id" @click="removeTodo" class="btn btn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 548 512"
      >
        <path
          d="M163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3C140.6 6.8 151.7 0 163.8 0zM32 128H416L394.8 467c-1.6 25.3-22.6 45-47.9 45H101.1c-25.3 0-46.3-19.7-47.9-45L32 128zM143 239c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"
        />
      </svg>
    </button>
  </li>
</template>
