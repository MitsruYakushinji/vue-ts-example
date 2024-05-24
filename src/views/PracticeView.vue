<template>
  <div v-if="isShown">表示</div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const isShown = false;

    return {
      isShown,
    };
  },
});
</script>
