<template>
  <div>
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ otherMessage }} | {{ item.message }}
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const otherMessage = "other message.";
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
      otherMessage,
      items,
    };
  },
});
</script>
