<template>
  <div class="z-10 py-[10px]">
    <label>
      <div
        class="mb-[10px] font-mono text-subtitle-16 md:mb-[10px] md:text-subtitle-16"
      >
        {{ label }}
      </div>

      <input
        :required="required"
        :type="type"
        :name="name"
        class="box-border block h-[60px] w-full rounded-[4px] border border-dark-100 border-opacity-15 bg-light-200 px-[15px] font-mono text-body-16 transition-colors hover:border-opacity-50 focus:outline-dark-100 md:h-[60px] md:px-[20px] md:text-body-16"
        :placeholder="placeholder"
        v-model="model"
      />
    </label>
  </div>
</template>

<script setup lang="ts">
const model = defineModel<string>();
const props = defineProps<{
  label: string;
  placeholder: string;
  required?: boolean;
  type?: "email" | "tel";
  name: string;
}>();
</script>

<style scoped></style>
