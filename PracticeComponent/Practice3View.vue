<template>
  <div>
    <div v-bind:style="{ color: activeColor }">赤文字</div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const activeColor = "red";

    return {
      activeColor,
    };
  },
});
</script>
