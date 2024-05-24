<template>
  <div>
    <p>{{ counter }}</p>
    <!-- counterの値を1ずつ減算し、0になったらボタンが消える -->
    <button v-show="counter > 0" @click="decrement">減算</button>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const counter = ref(10);

    const decrement = () => {
      counter.value--;
    };

    return {
      counter,
      decrement,
    };
  },
});
</script>
