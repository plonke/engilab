<template>
  <div :class="{ 'origin-left': align === 'left' }">
    <SharedPlate class="corner relative flex translate-x-[-1px] flex-col gap-[20px] pb-[40px] pt-[20px] md:gap-[20px]"
      :class="{
        'w-full items-center pb-[40px] md:py-[40px] md:text-center lg:mx-auto lg:mb-[120px] lg:mt-[0px]':
          align === 'center',
        'md:pb-[40px] md:text-center lg:text-left': align === 'left',
      }">
      <div v-if="caption" class="absolute left-[20px] top-[35px] text-body-12 opacity-40 md:text-body-16 lg:static">
        {{ caption }}
      </div>

      <component :is="titleTag" class="w-full max-w-[800px] text-title-30 lg:text-title-56"
        :class="{ 'md:max-w-[800px]': align === 'left' }">
        <span class="block text-center lg:inline lg:text-left" v-html="splitTitle ? spanText(title[0]) : title[0]" />

        <span v-if="title[1]" class="w-full" v-html="splitTitle ? spanText(title[1]) : title[1]" />
      </component>

      <div v-if="subtitle" class="w-full font-mono text-body-14 md:text-body-16">
        <SharedLongText :class="{ 'mx-auto': align === 'center' }">
          {{ subtitle }}
        </SharedLongText>
      </div>
    </SharedPlate>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title: [string, string];
    subtitle?: string;
    caption?: string;
    titleTag?: "h1" | "h2";
    align?: "left" | "center";
    splitTitle?: boolean;
  }>(),
  {
    titleTag: "h2",
    align: "left",
  },
);
</script>

<style scoped></style>
