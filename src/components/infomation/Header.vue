<script setup>
import { defineProps, computed } from "vue"

const props = defineProps({
  todos: {
    type: Array,
    required: true,
    default: [],
  },
})

const todoCount = computed(() => {
  return props.todos.filter((todo) => todo.title.length > 2).length
})
</script>

<template>
  <h2 class="text-2xl" v-if="todos.length == 0">目前無任何資料</h2>
  <h2 class="text-2xl" v-else>目前共有 {{ todoCount }} 事項</h2>
</template>
