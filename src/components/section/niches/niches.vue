<template>
  <SharedSectionTemplate>
    <div>
      <SharedSectionHeader
        align="center"
        caption="/ 01 /"
        title-tag="h2"
        :title="['Индивидуальные ', 'решения под разные цели и задачи']"
        subtitle="С нами вы можете быть уверены, что продукт будет создан и произведен точно по вашим требованиям и готов к выходу на рынок"
      />
    </div>

    <div
      id="niches"
      class="relative"
      @mouseleave="onMouseLeave"
      @mouseenter="onMouseEnter"
      @mousemove="onMouseMove"
    >
      <div
        class="pointer-events-none absolute top-0 z-10 hidden w-1/2 items-start justify-center lg:flex"
      >
        <div
          ref="elImageWrap"
          class="aspect-[1.6/1] w-3/4 overflow-hidden rounded-[4px]"
        >
          <Transition :css="false" @enter="onImageEnter" @leave="onImageLeave">
            <img
              v-if="hoveredNiche"
              :key="hoveredNicheIndex + '-' + inverseHoverAnimation"
              :src="hoveredNiche.image"
              alt=""
              class="h-full w-full rounded-[4px] object-cover"
            />
          </Transition>
        </div>
      </div>

      <template v-for="(niche, index) in items" class="-sticky top-[55px]">
        <SharedDivider direction="horizontal" class="w-full" />
        <SectionNichesItem
          v-bind="niche"
          :id="`niche-${index}`"
          :is-other-expanded-or-collapsing="isOtherExpanded(index)"
          :is-expanded="
            collapsingItems.has(index) || expandedItem?.index === index
          "
          @collapse="handleCollapse(index)"
          @ask-expand="handleAskExpand(index, $event)"
          @expanded="handleExpanded(index, $event)"
          @mouseenter="setHoverItem(index)"
        />
      </template>
    </div>
  </SharedSectionTemplate>
</template>

<script setup lang="ts">
import type { Niche } from "./niches.type";
import { niches as items } from "./niches.content";
import gsap from "gsap";

const { windowY } = useScroll();

const expandedItem = ref<{
  index: number;
  collapse: (instant: boolean) => void;
}>();
const collapsingItems = ref<Set<number>>(new Set());

const elImageWrap = ref<HTMLElement | null>(null);
const hoveredNicheIndex = ref<number>(-1);
const inverseHoverAnimation = ref(false);
const cursorY = ref(0);
const imageAnimation = { ease: "power2.out", duration: 0.8 };

const hoveredNiche = computed<Niche | undefined>(
  () => items[hoveredNicheIndex.value],
);

function onMouseMove(event: MouseEvent) {
  if (expandedItem.value) {
    return;
  }

  cursorY.value = event.clientY;
  updateImageCoordinatesWithThrottle();
}

const updateImageCoordinatesWithThrottle = throttle(
  updateImageCoordinates,
  100,
);

watch(windowY, updateImageCoordinatesWithThrottle);

function updateImageCoordinates() {
  if (expandedItem.value) {
    return;
  }

  const niches = document.querySelector("#niches");

  if (!niches || !elImageWrap.value) {
    return;
  }

  const nichesRect = niches.getBoundingClientRect();
  const imageWrapRect = elImageWrap.value.getBoundingClientRect();

  const y = cursorY.value - (nichesRect.top || 0) - 40;

  gsap.to(elImageWrap.value, {
    ease: "power4.out",
    duration: 1.5,
    y: Math.min(Math.max(y, 0), nichesRect.height - imageWrapRect.height),
  });
}

let isMouseOutside = false;

function onMouseLeave() {
  isMouseOutside = true;

  setTimeout(
    () => {
      if (!isMouseOutside || expandedItem.value) {
        return;
      }

      gsap.to(elImageWrap.value?.querySelectorAll("img") || null, {
        ...imageAnimation,
        yPercent: inverseHoverAnimation.value ? 100 : -100,
        overwrite: true,
      });
    },
    collapsingItems.value.size > 0 ? 1000 : 100,
  );
}

function onMouseEnter() {
  isMouseOutside = false;

  setTimeout(
    () => {
      if (isMouseOutside) {
        return;
      }

      gsap.to(elImageWrap.value?.querySelectorAll("img") || null, {
        ...imageAnimation,
        yPercent: 0,
        overwrite: true,
        // scale: 1,
      });
    },
    collapsingItems.value.size > 0 ? 1000 : 100,
  );
}

function onImageEnter(el: HTMLElement, done: () => void) {
  const tl = gsap.timeline({
    onComplete: done,
  });

  tl.fromTo(
    el,
    { yPercent: inverseHoverAnimation.value ? -100 : 100 },
    {
      ...imageAnimation,
      yPercent: 0,
    },
  );
}

function onImageLeave(el: HTMLElement, done: () => void) {
  const tl = gsap.timeline({
    onComplete: done,
  });

  tl.set(el, {
    position: "absolute",
  });

  tl.to(el, {
    ...imageAnimation,
    yPercent: inverseHoverAnimation.value ? 100 : -100,
  });
}

function setHoverItem(index: number) {
  if (expandedItem.value?.index == index) {
    return;
  }

  if (expandedItem.value) {
    return;
  }

  setActiveNicheIndex(index);
}

function setActiveNicheIndex(index: number) {
  if (hoveredNicheIndex.value === index) {
    return;
  }

  inverseHoverAnimation.value =
    (index === 0 && hoveredNicheIndex.value === 0) ||
    index < hoveredNicheIndex.value;
  hoveredNicheIndex.value = index;
}

function handleCollapse(index: number) {
  if (expandedItem.value?.index === index) {
    expandedItem.value = undefined;
  }

  if (!collapsingItems.value.has(index)) {
    return;
  }

  collapsingItems.value.delete(index);
}

function handleAskExpand(index: number, collapse: (instant: boolean) => void) {
  if (expandedItem.value) {
    collapsingItems.value.add(expandedItem.value.index);
    expandedItem.value?.collapse(false);
  }

  expandedItem.value = { index, collapse: collapse };

  setActiveNicheIndex(index);
}

function handleExpanded(index: number, height: number) {
  const niches = document.querySelector("#niches");
  const niche = document.querySelector(`#niche-${index}`);

  const nicheRect = niche?.getBoundingClientRect();
  const nichesRect = niches?.getBoundingClientRect();
  const imageRect = elImageWrap.value?.getBoundingClientRect();

  if (!nicheRect || !nichesRect || !imageRect) {
    return;
  }

  const top = index * nicheRect.height + index;
  const hDif = imageRect.height - height;

  gsap.to(elImageWrap.value, {
    y: top - hDif / 2,
    duration: 0.8,
    ease: "power3.out",
    overwrite: true,
  });
}

function isOtherExpanded(index: number): boolean {
  return !!expandedItem.value && expandedItem.value.index !== index;
}
</script>
