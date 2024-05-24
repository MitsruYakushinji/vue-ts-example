<template>
  <div>
    <p>{{ counter }}</p>
    <button @click="increment(5)">加算</button>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  // インラインメソッドハンドラ
  setup() {
    const counter = ref(0);

    const increment = (n: number) => {
      counter.value += n;
    };

    return {
      counter,
      increment,
    };
  },
});
</script>
