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
      <div class="flex flex-row items-center">
        <label>Filter</label>
        <select
          class="
            form-select form-select-sm
            appearance-none
            w-30
            px-3
            my-2
            mx-2
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding bg-no-repeat
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            focus:text-gray-700
            focus:bg-white
            focus:border-blue-600
            focus:outline-none
          "
          aria-label="Default select example"
          @change="setFilter($event.target.value)"
        >
          <option
            v-for="filterType in filterTypes"
            :key="filterType"
            :value="filterType"
          >
            {{ filterType }}
          </option>
        </select>
      </div>
      <div class="list-container">
        <TodoItem v-for="todo in todos" :key="todo.id" :task="todo" />
      </div>
    </div>
  </div>
</template>

<script>
import TodoInput from "./TodoInput.vue";
import TodoItem from "./TodoItem.vue";

import { useTodoList } from "../composables/useTodoList";

export default {
  components: { TodoInput, TodoItem },
  setup() {
    const { setFilter, todos, filter } = useTodoList();
    return {
      todos,
      filter,
      filterTypes: ["All", "Incomplete", "Completed"],
      setFilter,
    };
  },
};
</script>
