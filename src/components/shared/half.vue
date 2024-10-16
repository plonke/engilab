<template>
  <div
    class="flex flex-col"
    :class="{
      'lg:flex-row': rowBreakpoint === 'lg',
      'md:flex-row': rowBreakpoint === 'md',
      'sm:flex-row': rowBreakpoint === 'sm',
      '!flex-row': rowBreakpoint === 'none',
    }"
  >
    <div class="shrink-0 basis-1/2"><slot name="left" /></div>
    <div class="shrink-0 basis-1/2"><slot name="right" /></div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    rowBreakpoint?: "lg" | "md" | "sm" | "none";
  }>(),
  { rowBreakpoint: "lg" },
);
</script>

<style scoped></style>
