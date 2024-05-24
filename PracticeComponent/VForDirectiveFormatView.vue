<template>
  <div>
    <ul>
      <li v-for="n in evenList(5)" :key="n">{{ n }}回</li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const evenList = (n: number) => {
      let numList = [];
      for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
          numList.push(i);
        }
      }
      return numList;
    };

    return {
      evenList,
    };
  },
});
</script>
