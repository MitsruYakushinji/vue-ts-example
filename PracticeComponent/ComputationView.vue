<!-- <template>
  <div class="post-code">
    <input type="text" maxlength="7" v-model="postCode" />
    <p>郵便番号 : {{ hyphenCode }}</p>
    <p>日付 : {{ displayDate() }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const postCode = ref("");
    const hyphenCode = ref("");

    watch(postCode, () => {
      hyphenCode.value =
        postCode.value.slice(0, 3) + "-" + postCode.value.slice(3, 7);
    });

    const displayDate = () => {
      return new Date();
    };

    return {
      postCode,
      hyphenCode,
      displayDate,
    };
  },
});
</script> -->
