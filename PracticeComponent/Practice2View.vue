<template>
  <div>
    <p>{{ result }}</p>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const target = ref(1);

    const result = computed(() => {
      return target.value % 2 === 0 ? "偶数" : "奇数";
    });

    return {
      result,
    };
  },
});
</script>
