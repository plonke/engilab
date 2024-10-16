<template>
  <div class="overflow-hidden" ref="el">
    <SharedPlate
      class="transition-all active:!bg-light-200"
      :class="{ '!bg-light-200': isExpanded }"
    >
      <div ref="elActivator" @click="toggle">
        <div class="flex justify-center">
          <SharedDivider direction="vertical" class="h-[40px]" />
        </div>

        <div class="flex justify-center">
          <img :src="image" alt="" class="w-[100px] rounded-[4px]" />
        </div>

        <div class="corner relative pt-[20px] text-center">
          <h3 class="font-mono text-subtitle-21">{{ title }}</h3>
          <div class="mt-[5px] font-mono text-body-14 opacity-50">
            {{ subtitle }}
          </div>
          <div
            class="absolute top-1/2 -translate-y-1/2 text-body-12 opacity-100"
          >
            0{{ index }}
          </div>
        </div>

        <div class="corner flex items-center py-[30px] font-mono">
          <div class="relative grow overflow-hidden py-[2px] text-subtitle-16">
            <div
              class="mt-[-4px] underline underline-offset-4 transition-transform ease-in-out"
              :class="{ '!-translate-y-full': isExpanded }"
            >
              Подробнее
            </div>
            <div
              class="absolute top-[-4px] translate-y-full underline underline-offset-4 transition-transform ease-in-out"
              :class="{ '!translate-y-0': isExpanded }"
            >
              Скрыть
            </div>
          </div>

          <div>
            <SharedIconPlus
              :class="{ 'rotate-45': isExpanded }"
              class="transition-all ease-in-out"
            />
          </div>
        </div>
      </div>

      <div ref="elDescription" class="hidden pb-[40px]">
        <div
          v-for="block in descriptionBlocks"
          class="flex flex-col gap-[20px] pb-[20px] font-mono text-body-14"
        >
          <SharedDivider direction="horizontal" />
          <SharedHalf row-breakpoint="none">
            <template #left>
              <div class="corner">
                {{ block.title }}
              </div>
            </template>

            <template #right>
              <div class="corner-right flex flex-col gap-[10px]">
                <div
                  v-for="(item, index) in block.items"
                  class="flex gap-[5px]"
                >
                  <div>{{ index + 1 }}.</div>
                  <div
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
        </div>
      </div>
    </SharedPlate>
  </div>
</template>

<script setup lang="ts">
import type { Step } from "./steps.type";
import gsap from "gsap";

const props = defineProps<Step & { isExpanded: boolean }>();
const isExpanded = ref(false);

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

function toggle() {
  isExpanded.value ? collapse() : expand();
}

const el = ref<HTMLElement | null>(null);
const elActivator = ref<HTMLElement | null>(null);
const elDescription = ref<HTMLElement | null>(null);

async function expand() {
  isExpanded.value = true;

  const tl = gsap.timeline();

  const activatorHeight =
    elActivator.value?.getBoundingClientRect().height || 0;

  tl.set(el.value, {
    height: activatorHeight + "px",
  });

  tl.set(elDescription.value, {
    display: "block",
  });

  await new Promise((resolve) => requestAnimationFrame(resolve));

  const descriptionHeight =
    elDescription.value?.getBoundingClientRect().height || 0;

  tl.to(el.value, {
    height: activatorHeight + descriptionHeight + "px",
    duration: 0.6,
    ease: "power3.inOut",
    onComplete: () => {
      tl.set(el.value, {
        clearProps: "all",
      });
    },
  });
}

function collapse() {
  isExpanded.value = false;

  const tl = gsap.timeline();

  const activatorHeight =
    elActivator.value?.getBoundingClientRect().height || 0;

  tl.set(el.value, {
    height: el.value?.getBoundingClientRect().height || 0,
  });

  tl.to(el.value, {
    height: activatorHeight + "px",
    duration: 0.6,
    ease: "power3.inOut",
    onComplete: () => {
      tl.set(elDescription.value, {
        display: "none",
      });

      tl.set(el.value, {
        clearProps: "all",
      });
    },
  });
}
</script>

<style scoped></style>
