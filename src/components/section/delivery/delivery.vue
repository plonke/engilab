<template>
  <SharedSectionTemplate>
    <SharedSectionHeader
      title-tag="h2"
      align="center"
      caption="/ 05 /"
      :title="['Доставка ', 'по всей России и&nbsp;в&nbsp;Казахстан']"
      subtitle="Наше проивзодство находится в Краснодаре — удобном транспортном узле РФ"
    />

    <template v-for="category in deliveryCategories">
      <SharedDivider direction="horizontal" />

      <SectionDeliveryCategory v-bind="category" />
    </template>
  </SharedSectionTemplate>
</template>

<script setup lang="ts">
import { deliveryCategories } from "./delivery.content";
</script>

<style scoped></style>
