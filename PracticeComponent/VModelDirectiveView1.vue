<template>
  <div>
    <!-- inputの数値を合算する処理の追加 -->
    <input type="number" v-model="num1" />
    <input type="number" v-model="num2" />
    <!-- 合算した値の表示 -->
    <p>{{ sum() }}</p>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  setup() {
    // inputの数値を保持する変数の追加
    const num1 = ref(0);
    const num2 = ref(0);

    const sum = () => {
      // 2つのinputの数値を合算する処理の追加
      return Number(num1.value) + Number(num2.value);
    };

    return {
      num1,
      num2,
      sum,
    };
  },
});
</script>
