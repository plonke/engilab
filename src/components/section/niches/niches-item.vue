<template>
  <div
    ref="nicheEl"
    class="group overflow-hidden bg-light-100 transition-colors hover:!bg-light-200"
    :class="{
      'rounded-[4px]': !isExpanded,
      'group/expanded !bg-light-200': isExpanded,
      '': isOtherExpandedOrCollapsing,
    }"
  >
    <SharedHalf class="z-50">
      <template #right>
        <div ref="contentEl">
          <div
            ref="activatorEl"
            class="corner lg:corner-right group/toggle group z-20 flex items-center py-[40px] hover:cursor-pointer active:bg-dark-8 lg:py-[50px] lg:active:bg-transparent"
            :class="{ 'is-hidden': isOtherExpandedOrCollapsing }"
            @click="toggleExpansion"
          >
            <div class="grow">
              <h3
                class="relative inline-flex overflow-hidden font-mono text-subtitle-21 transition-all duration-[0.3s] group-hover:translate-x-[0px] lg:text-subtitle-30"
              >
                <div class="inline-flex">
                  {{ title }}
                </div>

                <div
                  class="absolute bottom-0 hidden h-[2px] w-full bg-dark-100 transition-all duration-[800ms] group-hover/toggle:w-full lg:block lg:w-0"
                ></div>
              </h3>
            </div>

            <div class="overflow-hidden">
              <SharedIconPlus
                class="transition-all group-hover:rotate-90 group-[.is-hidden]:translate-y-full group-[.is-hidden]:opacity-0"
                :class="{ '!rotate-[135deg]': isExpanded }"
              />
            </div>
          </div>

          <div
            v-if="isExpanded"
            ref="expandedContentEl"
            class="flex flex-col gap-[40px] overflow-hidden lg:gap-[50px]"
          >
            <img
              :src="image"
              alt=""
              class="corner h-[300px] overflow-hidden rounded-[4px] lg:hidden"
            />

            <div class="corner lg:corner-right flex flex-col gap-[20px]">
              <SharedLongText
                v-for="(benefit, index) in benefits"
                class="inline-flex w-fit gap-[10px] font-mono text-subtitle-16"
              >
                <div>{{ index + 1 }}.</div>
                <div>{{ benefit }}</div>
              </SharedLongText>
            </div>

            <div
              v-if="bonus"
              class="corner lg:corner-right flex items-center gap-[20px]"
            >
              <img
                :src="bonus.image"
                alt=""
                class="size-[60px] rounded-[4px]"
              />
              <div class="font-mono">
                <div class="text-subtitle-16 text-dark-100 opacity-50">
                  Бонус
                </div>
                <SharedLongText class="mt-[5px] text-subtitle-16">
                  {{ bonus.title }}
                </SharedLongText>
              </div>
            </div>

            <div class="corner lg:corner-right">
              <SharedButton
                class="w-full"
                theme="light"
                @click="scrollToApplication"
                >Оставить заявку</SharedButton
              >
            </div>

            <div></div>
          </div>
        </div>
      </template>
    </SharedHalf>
  </div>
</template>

<script setup lang="ts">
import type { Niche } from "./niches.type";
import gsap from "gsap";

const props = defineProps<
  Niche & { isExpanded: boolean; isOtherExpandedOrCollapsing: boolean }
>();

const emit = defineEmits<{
  (e: "ask-expand", collapse: (instant: boolean) => void): void;
  (e: "expanded", height: number): void;
  (e: "collapse"): void;
}>();

const contentEl = ref<HTMLElement | null>(null);
const nicheEl = ref<HTMLElement | null>(null);
const activatorEl = ref<HTMLElement | null>(null);
const expandedContentEl = ref<HTMLElement | null>(null);

async function toggleExpansion() {
  props.isExpanded ? collapse() : expand();
}

async function expand() {
  if (props.isExpanded) {
    return;
  }

  const activatorHeight = gsap.getProperty(activatorEl.value, "height");
  gsap.set(nicheEl.value, { height: activatorHeight + "px" });

  emit("ask-expand", collapse);
  await nextTick();

  if (!props.isExpanded) {
    return;
  }

  const contentHeight = gsap.getProperty(contentEl.value, "height");
  emit("expanded", +contentHeight);

  const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });
  tl.to(nicheEl.value, {
    height: contentHeight + "px",
    duration: 0.6,
  });

  const expandedEls = expandedContentEl.value?.querySelectorAll(":scope > *");
  expandedEls &&
    tl.fromTo(
      expandedEls,
      {
        y: -50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.4,
        stagger: 0.05,
        delay: 0.1,
      },
      "<",
    );

  tl.set(nicheEl.value, {
    height: "none",
  });

  return;
}

function collapse(instant = false) {
  if (!props.isExpanded) {
    return;
  }

  const tl = gsap.timeline({
    defaults: { ease: "power3.inOut" },
    onComplete: () => {
      tl.set(nicheEl.value, {
        clearProps: "all",
      });
    },
  });

  const activatorHeight = gsap.getProperty(activatorEl.value, "height");
  const expandedEls = expandedContentEl.value?.querySelectorAll(":scope > *");

  tl.to(nicheEl.value, {
    overwrite: true,
    height: activatorHeight + "px",
    duration: instant ? 0 : 0.6,
  });

  expandedEls &&
    tl.to(
      expandedEls,
      {
        y: -30,
        opacity: 0,
        duration: instant ? 0 : 0.5,
        stagger: -0.05,
        onComplete: () => {
          emit("collapse");
        },
      },
      "<",
    );
}
</script>

<style scoped></style>
