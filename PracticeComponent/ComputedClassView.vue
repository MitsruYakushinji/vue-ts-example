<template>
  <div v-bind:class="classObject"></div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "@vue/composition-api";
export default defineComponent({
  setup() {
    const isActive = ref(true);
    const error = ref(false);

    const classObject = computed(() => {
      return {
        active: isActive.value && !error.value,
      };
    });
    return {
      classObject,
    };
  },
});
</script>
