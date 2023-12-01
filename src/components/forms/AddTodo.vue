<script setup>
import { ref, defineEmits } from "vue"

const todoName = ref("")

const emits = defineEmits(["add-todo"])

const addTodo = () => {
  emits("add-todo", todoName.value)
  todoName.value = ""
}
</script>

<template>
  <div class="flex items-center gap-2 mt-4">
    <input
      v-model.trim="todoName"
      @keydown.enter="addTodo"
      type="text"
      class="w-full input input-bordered"
      placeholder="請輸入待辦事項"
    />
    <button @click="addTodo" class="btn btn-primary">新增</button>
  </div>
</template>
