<template>
  <button
    :type="type"
    :class="{ '!cursor-wait': loading }"
    class="group/button relative flex justify-center overflow-hidden rounded-[4px] border-[2px] border-solid border-dark-100 px-[60px] py-[20px] text-center font-mono text-button-16"
  >
    <div
      class="absolute bottom-0 left-1/2 h-0 w-full -translate-x-1/2 rounded-[2px] bg-dark-100 opacity-100 transition-all group-hover/button:h-full group-hover/button:opacity-100"
    />

    <div
      class="relative z-10 flex items-center gap-[20px] overflow-hidden transition-transform"
    >
      <div v-if="$slots['icon-before']" class="">
        <div
          class="text-dark-100 transition-all group-hover/button:-translate-y-full group-hover/button:opacity-0"
        >
          <slot name="icon-before" />
        </div>

        <div
          class="absolute left-0 right-0 top-0 translate-y-full text-light-100 opacity-0 transition-all group-hover/button:translate-y-0 group-hover/button:opacity-100"
        >
          <slot name="icon-before" />
        </div>
      </div>

      <div class="relative overflow-hidden text-center">
        <div
          class="text-dark-100 transition-all group-hover/button:-translate-y-full group-hover/button:opacity-0"
        >
          <slot />
        </div>

        <div
          class="absolute left-0 right-0 top-0 translate-y-full text-light-100 opacity-0 transition-all group-hover/button:translate-y-0 group-hover/button:opacity-100"
        >
          <slot />
        </div>
      </div>

      <div v-if="$slots['icon-after']" class="relative">
        <div
          class="text-dark-100 transition-all group-hover/button:-translate-y-full group-hover/button:opacity-0"
        >
          <slot name="icon-after" />
        </div>

        <div
          class="absolute left-0 right-0 top-0 translate-y-full text-light-100 opacity-0 transition-all group-hover/button:translate-y-0 group-hover/button:opacity-100"
        >
          <slot name="icon-after" />
        </div>
      </div>
    </div>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  type?: "submit";
  loading?: boolean;
}>();
</script>

<style scoped></style>
