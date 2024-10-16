<template>
  <SharedSectionTemplate>
    <div>
      <SharedSectionHeader
        align="center"
        caption="/ 02"
        title-tag="h2"
        :title="['От идеи ', 'до исполнения']"
        subtitle="С нами вы можете быть уверены, что продукт будет создан и произведен точно по вашим требованиям и готов к выходу на рынок"
      />
    </div>

    <div class="lg:hidden">
      <div v-for="(step, index) in steps">
        <SharedDivider direction="horizontal" />
        <SectionStepsItemMobile
          v-bind="step"
          :index="index + 1"
          :is-expanded="expandedItem?.index === index"
          @collapse="handleCollapse"
          @expand="handleExpand(index, $event)"
        />
      </div>
    </div>

    <div class="hidden lg:block">
      <div v-for="(step, index) in steps" class="sticky top-[55px]">
        <SharedDivider direction="horizontal" />
        <SectionStepsItemDesktop v-bind="step" :index="index + 1" />
      </div>
    </div>
  </SharedSectionTemplate>
</template>

<script lang="ts" setup>
import { steps } from "./steps.content";

const expandedItem = ref<{ index: number; collapse: () => void }>();

function handleCollapse() {
  expandedItem.value = undefined;
}

function handleExpand(index: number, collapse: () => void) {
  expandedItem.value = { index, collapse };
}
</script>
