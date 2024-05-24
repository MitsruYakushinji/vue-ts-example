<template>
  <div>
    <ul>
      <li v-for="(item, index) in items" :key="item.id">
        {{ index }} | {{ item.message }}
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const items = [
      {
        id: 1,
        message: "first message.",
      },
      {
        id: 2,
        message: "second message.",
      },
    ];

    return {
      items,
    };
  },
});
</script>
