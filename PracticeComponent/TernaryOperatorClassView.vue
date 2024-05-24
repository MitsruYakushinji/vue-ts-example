<template>
  <div v-bind:class="[isActive ? activeClass : '', currentClass]"></div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
export default defineComponent({
  setup() {
    const isActive = true;
    const activeClass = "active";
    const currentClass = "current";

    return {
      isActive,
      activeClass,
      currentClass,
    };
  },
});
</script>
