<template>
  <div>
    <textarea v-model="description" placeholder="詳細"></textarea>
    <p>{{ description }}</p>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const description = ref("");

    return {
      description,
    };
  },
});
</script>
