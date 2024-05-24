<template>
  <div>
    <input v-model="title" placeholder="タイトル" />
    <p>{{ title }}</p>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const title = ref("");

    return {
      title,
    };
  },
});
</script>
