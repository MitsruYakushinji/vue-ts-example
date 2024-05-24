<template>
  <div>
    <template v-if="num > 10">
      <h1>numが11以上の場合</h1>
    </template>
    <template v-else-if="num > 5">
      <h1>numが6以上の場合</h1>
    </template>
    <template v-else>
      <h1>numが5以下の場合</h1>
    </template>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const num = 11;

    return {
      num,
    };
  },
});
</script>
