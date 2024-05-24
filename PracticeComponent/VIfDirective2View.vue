<template>
  <div>
    <template v-if="isActive">
      <p>テキスト1</p>
    </template>
    <template v-else>
      <p>テキスト2</p>
    </template>
    <!-- isActiveがfalseの場合に、"テキスト2"が表示表示されるよう処理を追加しなさい -->
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const isActive = false;

    return {
      isActive,
    };
  },
});
</script>
