<template>
  <SharedPlate
    class="mx-auto flex h-full w-[350px] flex-col overflow-hidden rounded-[4px] border border-dark-20 bg-dark-100 md:w-[500px]">
    <div class="flex w-full justify-center">
      <img :src="product.image" alt="" class="aspect-square w-full object-cover" />
    </div>

    <div
      class="flex max-w-full grow items-center justify-center px-[20px] py-[30px] text-center font-mono text-subtitle-16">
      {{ product.title }}
    </div>

    <SharedDivider direction="horizontal" class="" />

    <div class="flex">
      <SharedDivider v-if="product.marketplaces.length > 1" direction="vertical" class="order-2" />

      <a v-for="(marketplace, index) in product.marketplaces" :href="marketplace.link" target="_blank"
        :class="product.marketplaces.length === 1 ? 'basis-full' : 'basis-1/2'"
        class="corner -gap-[10px] -md:gap-[10px] group relative flex cursor-pointer flex-col -items-center py-[20px] transition-all hover:bg-light-200"
        :style="{ order: index * 2 }">
        <div class="mb-[5px] flex w-full gap-[0px] font-mono text-subtitle-14 md:mb-[5px]">
          <div>
            {{ marketplace.name }}
          </div>

          <div class="absolute right-[20px] top-[20px] size-[20px] md:size-[20px]">
            <div class="relative overflow-hidden">
              <SharedIconArrowTopRight
                class="transition-transform group-hover:-translate-y-full group-hover:translate-x-full" />

              <SharedIconArrowTopRight
                class="absolute right-full top-full transition-transform group-hover:-translate-y-full group-hover:translate-x-full" />
            </div>
          </div>
        </div>

        <div class="relative mb-[15px] overflow-hidden font-mono text-body-14 opacity-50 md:text-body-14">
          <div>
            {{ marketplace.reviews }}
          </div>
        </div>

        <div
          class="flex items-center gap-[5px] font-mono text-subtitle-21 tracking-[-0.1em] md:gap-[10px] lg:text-subtitle-30">
          <div ref="elStar">
            <SharedIconStar class="size-[20px] lg:size-[25px]" />
          </div>

          <div class="relative">
            {{ marketplace.rating }}
          </div>
        </div>
      </a>
    </div>
  </SharedPlate>
</template>

<script setup lang="ts">
import type { Product } from "./products.type";
const elStar = ref();

const props = defineProps<{
  product: Product;
}>();
</script>

<style scoped></style>
