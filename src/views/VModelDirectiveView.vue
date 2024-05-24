<template>
  <div>
    <input />
    <input />
    <!-- 合算した値の表示 -->
    <p>{{ sum() }}</p>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const sum = () => {
      // 2つのinputの数値を合算する処理の追加
    };

    return {
      sum,
    };
  },
});
</script>
