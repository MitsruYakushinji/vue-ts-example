<template>
  <div>
    <div v-for="(language, index) in languages" :key="index">
      <input
        type="radio"
        v-model="checked"
        :value="language.value"
        :id="index"
      />
      <label :for="index">
        {{ language.label }}
      </label>
    </div>
    {{ checked }}
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
    const checked = ref("");

    return {
      checked,
      languages,
    };
  },
});
</script>
