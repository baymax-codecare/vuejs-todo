<template>
  <div class="flex mb-4 items-center form-check">
    <input
      :id="'flexCheckChecked-' + task.id"
      v-model="checkboxModel"
      class="
        form-check-input
        appearance-none
        h-4
        w-4
        border border-gray-300
        rounded-sm
        bg-white
        checked:bg-blue-600 checked:border-blue-600
        focus:outline-none
        transition
        duration-200
        mt-1
        align-top
        bg-no-repeat bg-center bg-contain
        float-left
        mr-2
        cursor-pointer
      "
      type="checkbox"
    />

    <label
      class="form-check-label inline-block text-gray-800"
      :for="'flexCheckChecked-' + task.id"
    >
      {{ task.name }}
    </label>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  props: {
    task: { type: Object, required: true },
  },
  setup(props) {
    const store = useStore();

    const checkboxModel = computed({
      get() {
        return props.task.completed;
      },
      set() {
        store.commit("todos/toggleStatus", props.task.id);
      },
    });

    return { checkboxModel };
  },
};
</script>
