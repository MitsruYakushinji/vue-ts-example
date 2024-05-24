<template>
  <div>
    <!-- 以下赤文字で表示するようv-bindを利用したインラインスタイルでcssを当てた例 -->
    <p :style="{ color: 'red' }">見出し1</p>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({});
</script>
