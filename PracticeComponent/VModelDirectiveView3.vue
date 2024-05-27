<template>
  <div>
    <!-- セレクトボックスを追加 -->
    <select v-model="selectedLanguage">
      <option disabled value="">選択してください</option>
      <option
        v-for="(language, index) in languages"
        :value="language.value"
        :key="index"
      >
        {{ language.label }}
      </option>
    </select>
    <select v-if="selectedLanguage !== ''" v-model="selectedFramework">
      <option disabled value="">選択してください</option>
      <option
        v-for="(framework, index) in frameworks[selectedLanguage]"
        :value="framework.value"
        :key="index"
      >
        {{ framework.label }}
      </option>
    </select>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  setup() {
    /**型を拡張して保証する手順 */
    type Language = {
      value: string;
      label: string;
    };

    type Framework = {
      value: string;
      label: string;
    };

    type Frameworks = {
      [K in Language["value"]]: Framework[];
    };
    /************************** */
    const languages: Language[] = [
      {
        value: "php",
        label: "PHP",
      },
      {
        value: "java",
        label: "Java",
      },
    ];

    const frameworks: Frameworks = {
      php: [
        {
          value: "laravel",
          label: "Laravel",
        },
        {
          value: "cakephp",
          label: "CakePHP",
        },
      ],
      java: [
        {
          value: "spring",
          label: "Spring",
        },
        {
          value: "play",
          label: "Play",
        },
      ],
    };
    const selectedLanguage = ref("");
    const selectedFramework = ref("");

    return {
      selectedLanguage,
      selectedFramework,
      languages,
      frameworks,
    };
  },
});
</script>
