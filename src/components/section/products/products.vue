<template>
  <SharedSectionTemplate disable-animation>
    <div>
      <SharedSectionHeader
        align="center"
        caption="/ 03 /"
        title-tag="h2"
        :title="['Топ-продукты ', 'нашего производства']"
        subtitle="С нами все просто и прозрачно, ведь наш опыт подтвержден личной историей и успехами наших партнеров"
      />
    </div>

    <div id="products-wrap">
      <SectionProductsCarousel :products="products" />
    </div>
  </SharedSectionTemplate>
</template>

<script lang="ts" setup>
import { products } from "./products.content";
</script>
