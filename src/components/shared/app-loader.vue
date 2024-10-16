<template>
  <div
    ref="el"
    class="fixed left-0 top-0 z-30 flex h-full w-full items-center justify-center"
  >
    <div class="relative h-full w-full">
      <div
        class="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 overflow-hidden transition-all"
      >
        <div
          ref="elCounter"
          class="flex font-mono text-[56px]"
          style="line-height: 100%"
        >
          <SharedNumberRoll :value="hundreds" prefix="h" />
          <SharedNumberRoll :value="tens" prefix="t" />
          <SharedNumberRoll :value="units" prefix="u" />
          <span>%</span>
        </div>
      </div>

      <div
        ref="elLine"
        class="absolute left-0 top-0 h-[5px] bg-dark-100 transition-all"
        :style="{
          width: `${progress}%`,
        }"
      ></div>

      <div
        ref="elPlate"
        class="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 bg-light-100"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { progress, isLoaded } = useLoading();
import gsap from "gsap";

const emit = defineEmits<{
  (e: "beforeDisappear"): void;
}>();

const el = ref<HTMLElement | null>(null);
const elPlate = ref<HTMLElement | null>(null);
const elLine = ref<HTMLElement | null>(null);
const elCounter = ref<HTMLElement | null>(null);

watch(isLoaded, () => hideLoader());

function hideLoader() {
  const tl = gsap.timeline({
    delay: 0.4,
  });

  elLine.value?.classList.remove("transition-all");

  tl.to(elCounter.value, {
    yPercent: 100,
    ease: "back.in",
    duration: 0.7,
    onComplete: () => {
      emit("beforeDisappear");
    },
  });

  tl.to(
    elLine.value,
    {
      y: 6,
      duration: 0.6,
      delay: 0.1,
      ease: "power4.out",
    },
    "<0.5",
  );

  tl.to(elLine.value, {
    height: 0,
    duration: 0.5,
  });

  tl.set(el.value, {
    display: "none",
  });
}

const hundreds = computed(() => {
  if (progress.value < 100) {
    return " ";
  }

  return Math.floor(progress.value / 100);
});

const tens = computed(() => {
  if (progress.value < 10) {
    return " ";
  }

  return Math.floor((progress.value % 100) / 10);
});

const units = computed(() => {
  return Math.floor(progress.value % 10);
});
</script>

<style scoped></style>
