<template>
  <div v-bind:class="[activeClass, currentClass]"></div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
export default defineComponent({
  setup() {
    const activeClass = "active";
    const currentClass = "current";

    return {
      activeClass,
      currentClass,
    };
  },
});
</script>
