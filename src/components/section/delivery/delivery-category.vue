<template>
  <SharedHalf row-breakpoint="none" class="mb-[40px] font-mono lg:my-[40px]">
    <template #left>
      <div class="corner sticky top-[55px] flex flex-col gap-[10px] py-[20px]">
        <div class="md:text-subtitle-deg0 text-subtitle-21">{{ title }}</div>
        <div class="text-body-14 opacity-50 lg:text-body-16 lg:opacity-100">
          {{ subtitle }}
        </div>
      </div>
    </template>

    <template #right>
      <template v-for="(item, index) in items">
        <SharedHalf
          class="corner lg:corner-right py-[20px] lg:translate-x-[-1px] lg:items-center lg:bg-light-100 lg:py-[40px]"
        >
          <template #left>
            <div class="flex flex-col gap-[20px] lg:flex-row lg:items-center">
              <img
                ref="elImage"
                :src="item.logo"
                alt=""
                class="size-[60px] lg:size-[70px]"
              />
              <div class="text-subtitle-14 lg:text-subtitle-16">
                {{ item.title }}
              </div>
            </div>
          </template>

          <template #right>
            <div class="mt-[5px] text-body-14 opacity-50 lg:opacity-100">
              {{ item.description }}
            </div>
          </template>
        </SharedHalf>

        <SharedDivider
          v-if="index !== items.length - 1"
          direction="horizontal"
        />
      </template>
    </template>
  </SharedHalf>
</template>

<script setup lang="ts">
import type { DeliveryCategory } from "./delivery.type";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const props = defineProps<DeliveryCategory>();

const elImage = ref(null);

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  animateImageOnScroll();
});

function animateImageOnScroll() {
  const deg = 2;
  const tween = gsap.to(elImage.value, {
    ease: "none",
    keyframes: {
      rotate: [
        deg,
        -deg,
        deg,
        -deg,
        deg,
        -deg,
        deg,
        -deg,
        deg,
        -deg,
        deg,
        -deg,
        deg,
        -deg,
        deg,
        -deg,
      ],
    },
  });

  ScrollTrigger.create({
    trigger: elImage.value,
    animation: tween,
    start: "top bottom",
    end: "top top",
    scrub: true,
  });
}
</script>

<style scoped></style>
