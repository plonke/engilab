<template>
  <div
    class="group flex h-[64px] cursor-pointer gap-0 overflow-hidden rounded-[4px] bg-light-100 bg-opacity-50 backdrop-blur-sm transition-all hover:gap-[10px] active:bg-dark-8 md:border-[1px] md:border-dark-20"
    :class="
      reverse
        ? 'flex-row-reverse active:translate-x-[5px]'
        : 'active:-translate-x-[5px]'
    "
  >
    <div
      class="flex size-[64px] items-center justify-center overflow-hidden transition-all"
      :class="[
        { 'scale-x-[-1]': reverse },
        reverse
          ? 'md:group-hover:translate-x-[-10px]'
          : 'md:group-hover:translate-x-[10px]',
      ]"
    >
      <svg
        width="20"
        height="16"
        viewBox="0 0 20 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="stroke-dark-100 transition-all group-active:-translate-x-1"
      >
        <path
          class=""
          d="M8.9572 1.27756L2.23501 8.00026M2.23501 8.00026L8.9572 14.7224M2.23501 8.00026L19.765 8.00026"
          stroke-width="2"
        />
      </svg>
    </div>

    <SharedDivider
      direction="vertical"
      class="z-10 hidden transition-transform lg:block"
      :class="
        reverse
          ? 'group-hover:translate-x-[-10px]'
          : 'group-hover:translate-x-[10px]'
      "
    />

    <div
      class="relative hidden size-[64px] overflow-hidden opacity-80 transition-opacity group-hover:opacity-100 lg:block"
    >
      <Transition :css="false" @enter="onEnter" @leave="onLeave">
        <img
          class="size-[64px] object-cover"
          :key="product.image"
          :src="product.image"
          alt=""
        />
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from "./products.type";
import gsap from "gsap";

const props = defineProps<{
  product: Product;
  reverse?: boolean;
  flow: "next" | "prev";
}>();

const animationCommon = {
  duration: 0.6,
  ease: "power3.inOut",
  overwrite: true,
};

function onLeave(el: HTMLElement, done: () => void) {
  const tl = gsap.timeline({
    onComplete: done,
  });

  tl.set(el, {
    position: "absolute",
  });

  tl.to(el, {
    xPercent: props.flow === "next" ? -100 : 100,
    ...animationCommon,
  });
}

function onEnter(el: HTMLElement, done: () => void) {
  const tl = gsap.timeline({
    onComplete: done,
  });

  tl.fromTo(
    el,
    {
      xPercent: props.flow === "next" ? 100 : -100,
      yPercent: -100,
    },
    {
      xPercent: 0,
      ...animationCommon,
    },
  );

  tl.set(el, {
    yPercent: 0,
  });
}
</script>

<style scoped></style>
