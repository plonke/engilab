<template>
  <div
    class="shrink-0 origin-left bg-dark-20"
    :class="{
      'h-px': direction === 'horizontal',
      'w-px': direction === 'vertical',
    }"
  />
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    direction: "horizontal" | "vertical";
  }>(),
  {},
);
</script>

<style scoped></style>
