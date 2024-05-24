<template>
  <div v-bind:style="styleObject">赤文字</div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const styleObject = {
      color: "red",
    };

    return {
      styleObject,
    };
  },
});
</script>
