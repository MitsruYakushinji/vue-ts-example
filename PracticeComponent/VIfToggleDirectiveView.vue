<template>
  <div>
    <template v-if="inputType === 'name'">
      <h1>nameエリア</h1>
      <input type="text" key="name-type" />
    </template>
    <template v-else>
      <h1>emailエリア</h1>
      <input type="text" key="email-type" />
    </template>
    <button @click="toggle()">toggle</button>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const inputType = ref("name");
    const toggle = () => {
      if (inputType.value === "name") {
        inputType.value = "email";
      } else {
        inputType.value = "name";
      }
    };

    return {
      inputType,
      toggle,
    };
  },
});
</script>
