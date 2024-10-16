<template>
  <SharedAppLoader @before-disappear="onLoaded" />

  <div id="content" class="--mt-[-60px] opacity-0">
    <div class="z-10">
      <SectionNavigation
        id="navigation"
        class="sticky top-0 z-40 -translate-y-full"
      />

      <div class="relative z-10 bg-light-100">
        <div class="absolute left-0 top-0 h-full w-full overflow-hidden">
          <SharedDivider
            direction="vertical"
            :style="{ height: `calc(75vh + ${windowY}px)` }"
            class="absolute left-1/2 top-0 min-h-screen -translate-x-1/2 transition-all duration-[1000ms]"
          />
        </div>

        <SectionHero @init="onHeroInit" />
        <SectionNiches class="z-10" />
        <SectionSteps class="z-0" />
        <SectionProducts />
        <SectionPriceList />
        <SectionDelivery />
        <SectionFounders />
        <SectionApplication />
      </div>
    </div>

    <SectionFooter class="sticky bottom-0 opacity-0" />
  </div>
</template>

<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const { windowY } = useScroll();
const { updateWindowHeightOnResize } = useWindow();

useHead({
  bodyAttrs: {
    class: "h-screen overflow-hidden",
  },
});

let showHero = undefined as undefined | (() => void);

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  updateWindowHeightOnResize();
  refreshScrollTriggerOnResize();
});

function onLoaded() {
  showNavigation();
  showContent();
}

function onHeroInit(cb: () => void) {
  showHero = cb;
}

function showNavigation() {
  gsap.to("#navigation", {
    y: 0,
    ease: "back.out",
  });
}

function showContent() {
  showHero?.();

  gsap.set("#content", {
    alpha: 1,
    onComplete: () => {
      enableScroll();
      showFooter();
      refreshScrollTrigger();
    },
  });
}

function enableScroll() {
  const elBody = document.querySelector("body");
  const elContent = document.querySelector("#content");

  if (!elContent || !elBody) {
    return;
  }

  elBody.classList.remove("h-screen", "overflow-hidden");
  elContent.classList.remove("opacity-0", "mt-[-60px]");
}

function refreshScrollTriggerOnResize() {
  new ResizeObserver(refreshScrollTrigger).observe(document.body);
}

function refreshScrollTrigger() {
  requestAnimationFrame(() => ScrollTrigger.refresh());
}

function showFooter() {
  gsap.set("#footer", { alpha: 1, delay: 1 });
}
</script>
