<template>
  <div>
    <ul>
      <li v-for="item in sortItems" :key="item.id">
        {{ item.id }} : {{ item.title }} : {{ item.description }}
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const items = [
      {
        id: 2,
        title: "Reactコース",
        description: "React初学者に向けた実務ベースの学習コンテンツ",
      },
      {
        id: 1,
        title: "Vueコース",
        description: "Vue初学者に向けた実務ベースの学習コンテンツ",
      },
    ];

    const sortItems = computed(() => {
      return items.slice().sort((a, b) => {
        // idの順でソート
        if (a.id < b.id) return -1;
        if (a.id < b.id) return 1;
        return 0;
      });
    });

    return {
      items,
      sortItems,
    };
  },
});
</script>
