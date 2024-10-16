<template>
  <div class="corner flex items-center justify-center py-[0px] lg:mt-[80px]">
    <SharedPlate
      class="flex flex-col items-center justify-center gap-[40px] py-[80px] lg:gap-[40px]"
    >
      <svg
        ref="elImage"
        class="aspect-square w-[100px] max-w-full overflow-visible rounded-[4px] object-cover"
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref="elCircle"
          d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100Z"
          fill="#2AABEE"
        />
        <path
          ref="elPlane"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M22.6328 49.4723C37.2089 43.1218 46.9285 38.9351 51.7917 36.9123C65.6772 31.1368 68.5625 30.1336 70.4431 30.1005C70.8568 30.0932 71.7816 30.1957 72.3806 30.6818C72.8865 31.0922 73.0257 31.6467 73.0923 32.0358C73.1588 32.425 73.2418 33.3115 73.1759 34.0042C72.4234 41.9103 69.1675 61.0966 67.5111 69.9516C66.8102 73.6985 65.4301 74.9548 64.0941 75.0778C61.1905 75.345 58.9856 73.1589 56.1733 71.3154C51.7727 68.4307 49.2866 66.635 45.015 63.8201C40.0784 60.567 43.2786 58.779 46.0919 55.857C46.8282 55.0922 59.6215 43.4557 59.8691 42.4001C59.9001 42.2681 59.9288 41.776 59.6365 41.5161C59.3441 41.2563 58.9126 41.3451 58.6012 41.4158C58.1599 41.516 51.1298 46.1626 37.511 55.3557C35.5155 56.726 33.708 57.3936 32.0886 57.3586C30.3034 57.32 26.8693 56.3492 24.3164 55.5193C21.1851 54.5015 18.6964 53.9633 18.9131 52.2347C19.026 51.3344 20.2659 50.4135 22.6328 49.4723Z"
          class="fill-light-100"
        />
      </svg>

      <div
        class="flex flex-col justify-center gap-[10px] text-center font-mono"
      >
        <h3 class="text-subtitle-21 lg:text-subtitle-30">
          Телеграм-канал с разбором рынка
        </h3>
        <SharedLongText class="mx-auto text-body-14 lg:text-body-16">
          Наш авторский телеграм-канал, где мы анализируем ниши, сколько где
          можно заработать вместе с нами
        </SharedLongText>
      </div>

      <SharedButton class="w-full lg:w-fit"
        >Открыть в Телеграме

        <template #icon-after> <SharedIconArrowTopRight /> </template>
      </SharedButton>
    </SharedPlate>
  </div>
</template>

<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const elImage = ref(null);
const elPlane = ref(null);
const elCircle = ref(null);

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  animateImageOnScroll();
});

function animateImageOnScroll() {
  const tl = gsap.timeline();

  tl.fromTo(
    elPlane.value,
    {
      y: -10,
      scale: 1.5,
    },
    {
      y: 0,
      scale: 1,
      ease: "none",
    },
  );

  tl.fromTo(
    elPlane.value,
    {
      x: -150,
      rotate: 220,
    },
    {
      x: 0,
      rotate: 0,
      ease: "power1.out",
    },
    "<",
  );

  tl.fromTo(
    elCircle.value,
    { scale: 1.1, xPercent: -10, yPercent: 0 },
    { scale: 1, xPercent: 0, yPercent: 0, ease: "none" },
    "<",
  );

  tl.to(elCircle.value, {
    fill: "#2AABEE",
  });

  ScrollTrigger.create({
    trigger: elImage.value,
    animation: tl,
    start: "top bottom",
    end: "+=25%",
    scrub: 5,
  });
}
</script>

<style scoped></style>
