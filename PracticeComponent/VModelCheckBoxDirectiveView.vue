<template>
  <div>
    <input type="checkbox" id="php" value="php" v-model="languages" />
    <label for="php">PHP</label>
    <input type="checkbox" id="java" value="java" v-model="languages" />
    <label for="java">Java</label>
    <input type="checkbox" id="html" value="html" v-model="languages" />
    <label for="html">HTML</label>
    <br />
    {{ languages }}
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const languages = ref([]);

    return {
      languages,
    };
  },
});
</script>
