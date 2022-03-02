<template>
  <div class="flex mt-4">
    <input
      v-model="inputModel"
      class="
        shadow
        appearance-none
        border
        rounded
        w-full
        py-2
        px-3
        mr-4
        text-grey-darker
      "
      placeholder="Add Todo"
      name="todo"
      @keyup.enter="onAdd"
    />
    <button
      class="
        flex-no-shrink
        p-2
        border-2
        rounded
        text-gray-700
        border-gray-700
        hover:text-white hover:bg-gray-700
      "
      @click="onAdd"
    >
      Add
    </button>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const inputModel = ref("");

    function onAdd(e) {
      console.log("add");
      store.commit("todos/create", inputModel.value);
      inputModel.value = "";
      e.target.blur();
    }

    return {
      inputModel,
      onAdd,
    };
  },
};
</script>
