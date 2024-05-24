<template>
  <div>
    <input type="checkbox" id="checked" v-model="checked" />
    <label for="checked">{{ checked }}</label>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  onMounted,
  onUpdated,
  ref,
} from "@vue/composition-api";

export default defineComponent({
  setup() {
    const checked = ref(true);

    onMounted(() => {
      alert("読み込まれました");
    });

    onUpdated(() => {
      alert("更新されました");
    });

    return {
      checked,
    };
  },
});
</script>
