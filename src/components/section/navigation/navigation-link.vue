<template>
  <component :is="link ? 'a' : 'div'" v-bind="link ? { href: link, target: '_blank' } : {}"
    class="corner group relative flex shrink-0 grow items-center justify-end overflow-hidden font-mono text-button-12 hover:cursor-pointer hover:bg-light-200">
    <div class="relative z-10 w-full overflow-hidden">
      <div class="text-right transition-all group-hover:-translate-y-full opacity-80">
        <slot />
      </div>

      <div class="absolute top-0 w-full translate-y-full text-right transition-all group-hover:translate-y-0 ">
        <slot />
      </div>
    </div>
  </component>
</template>

<script setup lang="ts">
const props = defineProps<{
  link?: string;
}>();
</script>

<style scoped></style>
