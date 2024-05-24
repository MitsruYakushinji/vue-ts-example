<template>
  <div>
    <ul>
      <li v-for="(item, name, index) in items" :key="item.id">
        {{ index }} : {{ name }} : {{ item }}
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const items = {
      id: 1,
      title: "Vueコース",
      description: "Vue初学者に向けた実務ベースの学習コンテンツ",
    };

    return {
      items,
    };
  },
});
</script>
