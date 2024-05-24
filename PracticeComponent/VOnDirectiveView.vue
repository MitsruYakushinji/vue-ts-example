<template>
  <div>
    <p>{{ counter }}</p>
    <button @click="increment">加算</button>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const counter = ref(0);

    const increment = () => {
      counter.value++;
    };

    return {
      counter,
      increment,
    };
  },
});
</script>
