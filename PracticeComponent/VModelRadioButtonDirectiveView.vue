<template>
  <div>
    <input type="radio" id="php" value="php" v-model="language" />
    <label for="php">PHP</label>
    <input type="radio" id="java" value="java" v-model="language" />
    <label for="java">Java</label>
    <input type="radio" id="html" value="html" v-model="language" />
    <label for="html">HTML</label>
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
