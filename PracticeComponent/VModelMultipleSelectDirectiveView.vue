<template>
  <div>
    <select v-model="selected" multiple>
      <option disabled value="">選択してください</option>
      <option
        v-for="(language, index) in languages"
        :value="language.value"
        :key="index"
      >
        {{ language.label }}
      </option>
    </select>
    <br />
    {{ selected }}
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const languages = [
      {
        value: "php",
        label: "PHP",
      },
      {
        value: "java",
        label: "Java",
      },
      {
        value: "html",
        label: "HTML",
      },
    ];
    const selected = ref([]);

    return {
      selected,
      languages,
    };
  },
});
</script>
