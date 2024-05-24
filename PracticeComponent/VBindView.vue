<template>
  <div v-bind:class="classObject"></div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
export default defineComponent({
  setup() {
    const classObject = {
      active: true,
      current: false,
    };
    return {
      classObject,
    };
  },
});
</script>
