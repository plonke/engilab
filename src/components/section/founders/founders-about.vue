<template>
  <div class="corner flex items-center justify-center pb-[80px]">
    <SharedPlate
      class="flex max-w-full flex-col items-center justify-center gap-[40px] pb-[40px] lg:gap-[20px] lg:pb-[80px]">
      <div class="size-[650px] max-w-full overflow-hidden rounded-[4px]">
        <img ref="elImage" :src="imageFounders" alt=""
          class="aspect-square h-[700px] w-[650px] max-w-full rounded-[4px] object-cover object-top" />
      </div>

      <div class="flex flex-col justify-center gap-[10px] text-center font-mono">
        <h3 class="text-subtitle-21 lg:text-subtitle-30">
          Илья и Наташа Плонке
        </h3>
        <SharedLongText class="text-body-14 lg:text-body-16">
          Разработает оптимальную формулу для вашего продукта, учитывая все
          технические требования и стандарты.
        </SharedLongText>
      </div>
    </SharedPlate>
  </div>
</template>

<script setup lang="ts">
import imageFounders from "~/assets/images/founders.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const elImage = ref(null);

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  animateImageOnScroll();
});

function animateImageOnScroll() {
  const tween = gsap.fromTo(
    elImage.value,
    {
      y: 0,
    },
    {
      y: -50,
      ease: "none",
    },
  );

  ScrollTrigger.create({
    trigger: elImage.value,
    animation: tween,
    start: "top bottom",
    end: "bottom top",
    scrub: 1,
  });
}
</script>

<style scoped></style>
