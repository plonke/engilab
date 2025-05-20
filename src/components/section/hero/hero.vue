<template>
  <div
    class="relative pt-[20px] mb-[40px] lg:mb-0 pb-[20px] lg:min-h-[calc(100vh-80px)] bg-light-100 lg:bg-transparent flex flex-col">
    <SharedHalf class="grow gap-[20px] lg:gap-0">
      <template #left>
        <VideoPreview @init="playVideo = $event" />
      </template>

      <template #right>
        <div id="hero-text" fill-left
          class="corner h-full flex flex-col gap-[20px] lg:gap-[40px] font-mono text-body-14 md:text-body-16 ">

          <h1 class="text-title-30 lg:text-title-56 font-sans" id="hero-header">
            <span v-html="spanText('Производство ')"></span> <br />
            <span v-html="spanText('косметики ')"></span> <br />
            <span v-html="spanText('под вашим брендом')"></span>
          </h1>

          <div class="flex flex-col gap-[10px] lg:gap-[20px]">
            <SharedLongText>Мы — производственная площадка в городе Краснодар. Зарекомендовали
              себя как поставщик базовой косметики с доказанной
              эффективностью.
            </SharedLongText>

            <div>
              <div>Наши результаты на рынке:</div>
              <div class="flex w-full items-center gap-[20px]">
                <a href="https://www.ozon.ru/brand/eskin-touch-101235821/?all_items=true"
                  class="cursor-pointer underline underline-offset-[2px] transition-all hover:underline-offset-[1px]">Wildberries</a>
                <div class="mt-1 h-px grow bg-dark-12" />
                <div class="font-medium">870К продаж</div>
              </div>
              <div class="flex w-full items-center gap-[20px]">
                <a href="https://www.wildberries.ru/seller/61054"
                  class="cursor-pointer underline underline-offset-[2px] transition-all hover:underline-offset-[1px]">Ozon</a>
                <div class="mt-1 h-px grow bg-dark-12" />
                <div class="font-medium">230К продаж</div>
              </div>
            </div>

            <SharedLongText>
              Занимаемся полным циклом производства:  <br />
              1. Разработка <br />
              2. Создание и изготовление <br />
              3. Тестирование на фокус-группе <br />
              4. Упаковка <br />
              5. Сертификация по стандартам РФ
            </SharedLongText>
          </div>


          <div class="mt-auto">
            <SharedButton class="w-full" @click="scrollToApplication">Оставить заявку
            </SharedButton>
          </div>
        </div>


      </template>
    </SharedHalf>

    <!-- <div id="hero-button" class="corner flex justify-center overflow-hidden">
        <SharedButton class="w-full lg:w-auto" @click="scrollToApplication"
          >Оставить заявку</SharedButton
        >
      </div> -->
  </div>
</template>

<script setup lang="ts">
import gsap from "gsap";
import VideoPreview from "./video-preview.vue";

const emit = defineEmits<{
  (e: "init", cb: () => void): void;
}>();

const playVideo = ref(() => { });

function showContent() {
  playVideo.value();

  const heroHeader = document.querySelector("#hero-header");
  // const heroButton = document.querySelector("#hero-button");
  const heroText = document.querySelector("#hero-text");

  if (!heroHeader) {
    return;
  }

  const letters = heroHeader.querySelectorAll(".letter");

  const tl = gsap.timeline();

  tl.to(letters, {
    ease: "back.out",
    duration: 0.5,
    y: 0,
    stagger: 0.007,
  });

  tl.to(
    heroText,
    {
      y: 0,
      ease: "back.out",
      alpha: 1,
      duration: 0.5,
    },
    "<",
  );

  // tl.to(
  //   heroButton,
  //   {
  //     ease: "back.out",
  //     duration: 0.5,
  //     y: 0,
  //     alpha: 1,
  //   },
  //   "<0.2",
  // );
}

function hideContent() {
  const heroHeader = document.querySelector("#hero-header");
  // const heroButton = document.querySelector("#hero-button");
  const heroText = document.querySelector("#hero-text");

  if (!heroHeader) {
    return;
  }

  const letters = heroHeader.querySelectorAll(".letter");

  gsap.set(letters, {
    y: -80,
  });

  // gsap.set(heroButton, {
  //   y: -80,
  //   alpha: 0,
  // });

  gsap.set(heroText, {
    y: -40,
    alpha: 0,
  });
}

onMounted(() => {
  hideContent();
  emit("init", showContent);
});
</script>

<style scoped></style>
