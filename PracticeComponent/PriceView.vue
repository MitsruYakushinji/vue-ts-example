<template>
  <div>
    <input v-model="price" />
    <p>{{ result }}</p>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const price = ref(0);
    const result = ref(0);

    watch(price, () => {
      result.value === Math.floor(price.value * 1.1);
    });

    return {
      price,
      result,
    };
  },
});
</script>
