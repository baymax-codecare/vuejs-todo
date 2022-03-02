import { computed, ref } from "vue";

import { useStore } from "vuex";

export function useTodoList() {
  const store = useStore();
  const filter = ref("All");

  function setFilter(value) {
    console.log(value)
    filter.value = value;
  }

  const todos = computed(function () {
    console.log(filter)
    switch (filter.value) {
      case "Incomplete":
        return store.getters["todos/incomplete"];

      case "Completed":
        return store.getters["todos/completed"];

      default:
        return store.state.todos.all;
    }
  });

  return {
    todos,
    filter,
    setFilter,
  }
}
