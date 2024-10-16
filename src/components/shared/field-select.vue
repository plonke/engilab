<template>
  <div class="z-10 py-[10px]">
    <label>
      <div
        class="mb-[10px] font-mono text-subtitle-16 md:mb-[10px] md:text-subtitle-16"
      >
        {{ label }}
      </div>

      <div class="relative transition-all">
        <select
          v-model="model"
          :required="required"
          :name="name"
          :class="{ 'text-opacity-20': !model }"
          class="box-border block h-[60px] w-full appearance-none rounded-[4px] border border-dark-100 border-opacity-15 bg-light-200 px-[15px] font-mono text-body-16 text-dark-100 transition-colors hover:cursor-pointer hover:border-opacity-50 focus:outline-dark-100 md:h-[65px] md:px-[20px] md:text-body-16"
        >
          <option disabled value="">Выбрать...</option>
          <option v-for="option in options" :value="option">
            {{ option }}
          </option>
        </select>

        <svg
          class="absolute right-[20px] top-1/2 -translate-y-1/2"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3 7L10 14L17 7" stroke="black" stroke-width="2" />
        </svg>
      </div>
    </label>
  </div>
</template>

<script setup lang="ts">
const model = defineModel<string>();
const props = defineProps<{
  label: string;
  required?: boolean;
  options: string[];
  name: string;
}>();
</script>

<style scoped></style>
