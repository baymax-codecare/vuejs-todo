<template>
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
      @change="change($event.target.value)"
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
</template>

<script>
export default {
  props: {
    setFilter: { type: Function },
  },
  data: function () {
    return { filterTypes: ["All", "Incomplete", "Completed"] };
  },
  methods:{
    change(value){
      this.setFilter(value)
    }
  },
};
</script>
