<template>
  <div class="relative overflow-hidden">
    <div class="opacity-0">_</div>
    <Transition name="roll">
      <span :key="prefix + value" class="number-roll absolute left-0 top-0">{{
        value
      }}</span>
    </Transition>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  value: string | number;
  prefix: string;
}>();
</script>

<style scoped>
.roll-enter-active,
.roll-leave-active {
  transition: 0.3s all cubic-bezier(0.33, 1, 0.68, 1);
}

.roll-enter-from {
  transform: translateY(100%);
}

.roll-leave-to {
  transform: translateY(-100%);
  /* opacity: 0; */
}
</style>
