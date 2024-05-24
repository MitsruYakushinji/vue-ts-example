<template>
  <div>
    <!-- v-forを使ってdataListの配列オブジェクトをidが奇数のものだけテーブルの要素として表示しなさい -->
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in oddList" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const dataList = [
      { id: 1, name: "バナナ" },
      { id: 2, name: "イチゴ" },
      { id: 3, name: "スイカ" },
    ];

    // 奇数のidのみを抽出
    let oddList = computed(() => {
      return dataList.filter((item) => item.id % 2 === 1);
    });

    return {
      oddList,
    };
  },
});
</script>
