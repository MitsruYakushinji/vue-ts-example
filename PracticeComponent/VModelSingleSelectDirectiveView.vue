<template>
  <div>
    <select id="language" v-model="language">
      <option disabled value="">選択してください</option>
      <option value="php">PHP</option>
      <option value="java">Java</option>
      <option value="html">HTML</option>
    </select>
    <br />
    {{ language }}
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const language = ref("");

    return {
      language,
    };
  },
});
</script>
