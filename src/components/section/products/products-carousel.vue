<template>
  <div id="products" class="relative overflow-hidden">
    <div class="">
      <Swiper
        class="products-swiper"
        :slidesPerView="'auto'"
        :speed="500"
        :spaceBetween="20"
        :centeredSlides="true"
        @swiper="onSwiper"
      >
        <SwiperSlide
          v-for="(product, index) in products"
          class="!h-auto !w-fit self-stretch"
          :key="product.title + index"
        >
          <SectionProductsCarouselItem :product="product" />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Swiper as SwiperInstance } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import type { Product } from "./products.type";
import { useTimer } from "./products.timer";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const props = defineProps<{
  products: Product[];
}>();

const { resumeTimer, timerSeconds, pauseTimer } = useTimer();

let swiperInstance = null as SwiperInstance | null;
const activeProductIndex = ref(0);
const swiperProgress = ref(0);
const scrollProgress = ref(0);
const flow = ref<"next" | "prev">("next");

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  const mm = gsap.matchMedia();

  mm.add("(min-width: 800px)", () => {
    ScrollTrigger.create({
      trigger: "#products",
      start: "center center",
      end: "+=2500",
      scrub: 1,
      pin: true,
      onEnter: resumeTimer,
      onEnterBack: resumeTimer,
      onLeave: pauseTimer,
      onLeaveBack: pauseTimer,
      onUpdate: (self) => {
        const progress = +self.progress.toFixed(4);
        scrollProgress.value = progress;
        setProgress(progress);
      },
    });
  });
});

function setProgress(progress: number) {
  if (!swiperInstance) {
    return;
  }

  swiperInstance.setProgress(progress);
}

function onSwiper(swiper: SwiperInstance) {
  swiperInstance = swiper;

  swiper.on("realIndexChange", (swiper) => {
    flow.value = swiper.activeIndex > swiper.previousIndex ? "next" : "prev";
    activeProductIndex.value = swiper.realIndex;
  });

  swiper.on("touchStart", (swiper) => {
    pauseTimer();
  });

  swiper.on("touchEnd", (swiper) => {
    setTimeout(() => {
      resumeTimer();
    }, 500);
  });

  swiper.on("progress", (swiper) => {
    swiperProgress.value = swiper.progress;
  });

  swiper.setProgress(0);
}
</script>

<style>
.products-swiper .swiper-slide-shadow {
  border-radius: 4px;
}

.products-swiper .swiper-slide-shadow {
  background-color: rgb(0, 0, 0, 0.5);
}
</style>
