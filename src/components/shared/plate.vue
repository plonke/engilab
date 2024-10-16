<template>
  <div
    class="plate"
    :class="{ '-fill-left': fillLeft, '-fill-right': fillRight }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    fillLeft?: boolean;
    fillRight?: boolean;
  }>(),
  {
    fillLeft: false,
    fillRight: false,
  },
);
</script>

<style scoped>
.plate {
  position: relative;
  background: theme("colors.light.100");
}

.plate.-fill-left:before {
  content: "";
  position: absolute;
  background: theme("colors.light.100");
  width: 2px;
  height: 100%;
  top: 0;
  left: -1px;
}

.plate.-fill-right:after {
  content: "";
  position: absolute;
  background: theme("colors.light.100");
  width: 2px;
  height: 100%;
  top: 0;
  right: 1px;
}
</style>
