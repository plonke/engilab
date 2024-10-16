<template>
  <section
    class="relative max-w-full pb-[80px] pt-[40px] lg:pb-[200px] lg:pt-[40px]"
  >
    <SharedDivider
      direction="horizontal"
      class="absolute left-0 top-[-1px] w-full"
    />
    <slot />
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  disableAnimation?: boolean;
}>();
</script>

<style scoped></style>
