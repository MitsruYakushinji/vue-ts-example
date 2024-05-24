<template>
  <div>
    <input
      type="checkbox"
      v-model="checked"
      true-value="yes"
      false-value="no"
    />
    <br />
    {{ checked }}
  </div>
</template>
<script lang="ts">
import { ref, defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const checked = ref("yes");

    return {
      checked,
    };
  },
});
</script>
