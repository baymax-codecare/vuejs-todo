<template>
  <div
    class="
      h-100
      w-full
      flex
      items-center
      justify-center
      bg-teal-lightest
      font-sans
    "
  >
    <div class="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
      <div class="mb-4">
        <h1 class="text-grey-darkest">Todo List</h1>
        <TodoInput />
      </div>
      <TodoFilter :set-filter = "setFilter" />
      <div class="list-container">
        <TodoItem v-for="todo in todos" :key="todo.id" :task="todo" />
      </div>
    </div>
  </div>
</template>

<script>
import TodoInput from "./TodoInput.vue";
import TodoItem from "./TodoItem.vue";
import TodoFilter from "./TodoFilter.vue";

import { useTodoList } from "../composables/useTodoList";

export default {
  components: { TodoInput, TodoItem, TodoFilter },
  setup() {
    const { setFilter, todos, filter } = useTodoList();
    return {
      todos,
      filter,
      setFilter,
    };
  },
};
</script>
