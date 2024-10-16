<template>
  <div
    ref="el"
    class="group pb-[120px]"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <div ref="elTop" class="h-px" />

    <SharedPlate>
      <SharedHalf class="py-[20px]">
        <template #left>
          <h3 class="corner font-mono text-subtitle-30">
            {{ `0${index}. ${title}` }}
          </h3>
        </template>

        <template #right>
          <SharedHalf>
            <template #left>
              <div
                class="mb-[20px] flex items-center gap-[10px] pr-[40px] font-mono text-subtitle-18"
              >
                <div ref="elIconDone" class="size-[20px]">
                  <SharedIconDone />
                </div>

                <div>{{ subtitle }}</div>
              </div>

              <div class="h-[200px] w-[150px] overflow-hidden rounded-[4px]">
                <img
                  ref="elImage"
                  :src="image"
                  alt=""
                  class="h-[250px] rounded-[4px]"
                />
              </div>
            </template>

            <template #right>
              <div
                v-for="block in descriptionBlocks"
                class="corner-right mb-[40px] mt-[5px] flex flex-col gap-[10px] font-mono text-body-16"
              >
                <div class="-opacity-50 hiding-el font-medium">
                  {{ block.title }}
                </div>
                <div
                  v-for="(item, index) in block.items"
                  class="hiding-el flex gap-[0.5em]"
                >
                  <div class="opacity-100">{{ index + 1 }}.</div>
                  <div
                    class="opacity-100"
                    :class="{
                      'cursor-pointer underline underline-offset-[2px] transition-all hover:underline-offset-[5px]':
                        item === 'Оформляете заявку',
                    }"
                    @click="
                      item === 'Оформляете заявку'
                        ? scrollToApplication()
                        : null
                    "
                  >
                    {{ item }}
                  </div>
                </div>
              </div>
            </template>
          </SharedHalf>
        </template>
      </SharedHalf>
    </SharedPlate>
  </div>
</template>

<script setup lang="ts">
import type { Step } from "./steps.type";
import SharedIconDone from "~/components/shared/icon-done.vue";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const props = defineProps<Step>();

const el = ref<HTMLElement | null>(null);
const elTop = ref<HTMLElement | null>(null);
const elIconDone = ref<HTMLElement | null>(null);
const elImage = ref<HTMLElement | null>(null);

const animationCommon = {
  duration: 0.5,
  ease: "power2.out",
  overwrite: true,
};

const descriptionBlocks = computed(() => {
  const blocks: { title: string; items: string[] }[] = [];

  if (props.actionItems.client.length > 0) {
    blocks.push({ title: "Вы:", items: props.actionItems.client });
  }

  if (props.actionItems.contractor.length > 0) {
    blocks.push({
      title: "Наша команда:",
      items: props.actionItems.contractor,
    });
  }

  return blocks;
});

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  hideHidingEls();
  hideDoneIcon();
  animateImageOnScroll();
});

function animateImageOnScroll() {
  const tween = gsap.fromTo(
    elImage.value,
    {
      y: 0,
    },
    {
      y: -40,
      ease: "none",
    },
  );

  const scrollTrigger = ScrollTrigger.create({
    trigger: elImage.value,
    animation: tween,
    start: "bottom bottom",
    end: "top top",
    scrub: true,
  });

  new ResizeObserver((entries) => scrollTrigger.refresh()).observe(
    document.body,
  );
}

function hideDoneIcon() {
  gsap.to(elIconDone.value, {
    marginLeft: "-30px",
    opacity: 0,
    ...animationCommon,
  });
}

function onMouseEnter() {
  const tl = gsap.timeline();
  const els = getHidingEls();

  tl.to(els, {
    y: 0,
    opacity: 1,
    stagger: 0.05,
    ...animationCommon,
  });

  tl.to(
    elIconDone.value,
    {
      marginLeft: "0px",
      opacity: 1,
      ...animationCommon,
      ease: "power4.inOut",
      duration: 0.6,
    },
    ">-0.4",
  );
}

function onMouseLeave() {
  if (!el.value) {
    return;
  }

  hideHidingEls();
}

function hideHidingEls() {
  const tl = gsap.timeline();
  const els = getHidingEls();

  tl.to(els, {
    y: 10,
    opacity: 0,
    stagger: -0.05,
    ...animationCommon,
  });
}

function getHidingEls() {
  if (!el.value) {
    return [];
  }

  return el.value.querySelectorAll(".hiding-el");
}
</script>

<style scoped></style>
